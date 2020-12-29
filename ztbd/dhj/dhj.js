/**
 * Created by zhizuo on 2020/5/13.
 */
$(".tabqh .tl02 ,.dhj-bg06 .jt-r-on").click(function(){
  $(".tabqh .tl01").removeClass('tabli01-on').addClass('tabli01');
  $(".tabqh .tl02").addClass('tabli02-on');
  $(".tabcom .com01").hide();
  $(".tabcom .com02").show();
});
$(".tabqh .tl01 ,.dhj-bg06 .jt-l-on").click(function(){
  $(".tabqh .tl01").addClass('tabli01-on');
  $(".tabqh .tl02").removeClass('tabli02-on').addClass('tabli02');
  $(".tabcom .com01").show();
  $(".tabcom .com02").hide();
});
/*
$(".tabqh .tlA2").click(function(){
    $(".tabqh .tlA1").removeClass('tabli01-on').addClass('tabli01');
    $(".tabqh .tlA2").addClass('tabli02-on');
    $(".tabcom-ss .com01").hide();
    $(".tabcom-ss .com02").show();
});
$(".tabqh .tlA1").click(function(){
    $(".tabqh .tlA1").addClass('tabli01-on');
    $(".tabqh .tlA2").removeClass('tabli02-on').addClass('tabli02');
    $(".tabcom-ss .com01").show();
    $(".tabcom-ss .com02").hide();
});
*/

function sqA(sqfj, sq, nrfj, sjjg) {
  $(sq).click(function () {
    var tmpZ = $(this).attr("data-xl");    
    $(sqfj + ',' + nrfj).attr("data-xl", tmpZ);    
    var dqXl = $(this).attr("data-xl");
    $(sq).removeClass('sqDq');
    $(sq + '[data-xl=' + dqXl + ']').addClass('sqDq');
    $(nrfj + ' [data-xl]').removeClass('sqDq');
    $(nrfj + ' [data-xl=' + dqXl + ']').addClass('sqDq');   
  });
 	if(sjjg){
		var zddh;
		var sl = $(sq).size();
		var tmpX;
      	zddh = setInterval(function(){
			var dqwz = parseInt($(sqfj).attr('data-xl'));
			if(dqwz + 1 > sl){
				tmpX = 1;
			}
			else{
				tmpX = dqwz + 1;
			}
			$(sqfj + ',' + nrfj).attr("data-xl",tmpX);
		    $(sq).removeClass('sqDq');
		    $(sq + '[data-xl=' + tmpX + ']').addClass('sqDq');
		    $(nrfj + ' [data-xl]').removeClass('sqDq');
		    $(nrfj + ' [data-xl=' + tmpX + ']').addClass('sqDq');   
		},sjjg);
    }
}
sqA(".hdAsq", ".hdAsq li", ".hdAnr",5000)
function cdhd(wk,nr,jtl,jtr){
  var nrsl = $(nr).size();
  var slkg = nrsl >= 5 ? true : false;
  function init(){
    var imgsrc = $(nr).eq(0).attr("data-imgsrc");
    if(nrsl >= 5 ){
      $(nr).eq(0).attr('data-dq','c1');
      $(nr).eq(1).attr('data-dq','r1');
      $(nr).eq(2).attr('data-dq','r2');
      $(nr).eq(-1).attr('data-dq','l1');
      $(nr).eq(-2).attr('data-dq','l2');
    }
    else if(nrsl <= 4){
      $(nr).eq(0).attr('data-dq','c1');
      $(nr).eq(1).attr('data-dq','r1');
      $(nr).eq(-1).attr('data-dq','l1');
    }
  }
  init();
  
  function hdzt(mbz){
    var imgsrc;
    $(wk).attr('data-xl',mbz);
    $(nr + '[data-xl="' + mbz + '"]').attr("data-dq",'c1');
    
    $(nr).each(function(i){
      if($(this).attr('data-xl') == mbz){
        $(this).attr({'data-dq':'c1'});
        imgsrc = $(this).attr("data-imgsrc");
        $(".dqlj").attr('data-imgsrc',imgsrc);
      }
      else if($(this).attr('data-xl') == parseInt(mbz) + 1){
        $(this).attr({'data-dq':'r1'});
      }
      else if($(this).attr('data-xl') == parseInt(mbz) + 2 ){
        if(slkg){$(this).attr({'data-dq':'r2'});}
        else{$(this).attr({'data-dq':'zb'});}
      }
      else if($(this).attr('data-xl') == parseInt(mbz) - 1 ){
        $(this).attr({'data-dq':'l1'});
      }
      else if($(this).attr('data-xl') == parseInt(mbz) - 2 ){
        if(slkg){$(this).attr({'data-dq':'l2'});}
        else{$(this).attr({'data-dq':'zb'});}
      }
      
      else if( parseInt(mbz) + 1 == nrsl ){
        $(nr).eq(0).attr({'data-dq':'r1'});
        if(slkg){$(nr).eq(1).attr({'data-dq':'r2'});}
        else{$(nr).eq(1).attr({'data-dq':'zb'});}
      }
      else if( parseInt(mbz) + 2 == nrsl ){
        $(nr).eq(1).attr({'data-dq':'r1'});
        if(slkg){$(nr).eq(0).attr({'data-dq':'r2'});}
        else{$(this).attr({'data-dq':'zb'});}
      }
      
      else if( parseInt(mbz) == 0 ){
        $(nr).eq(-1).attr({'data-dq':'l1'});
        if(slkg){$(nr).eq(-2).attr({'data-dq':'l2'});}
        else{$(nr).eq(-2).attr({'data-dq':'zb'});}
      }
      else if( parseInt(mbz) == 1 ){
        if(slkg){$(nr).eq(-1).attr({'data-dq':'l2'});}
        else{$(nr).eq(-1).attr({'data-dq':'zb'});}
      }
      
      else{
        $(this).attr({'data-dq':'zb'});
      }
      
    });
  }
  function qhqh(fx){
    var dqwz = parseInt($(wk).attr('data-xl'));
    var mbz;
    if((dqwz + fx) < 0){
      mbz = nrsl - 1;
    }
    else if((dqwz + fx) > nrsl - 1){
      mbz = 0;
    }
    else{
      mbz = (dqwz + fx);
    }
    hdzt(mbz);
  }
  
  $(nr).click(function(){
    var dqz = $(wk).attr('data-xl');
    var mbz = $(this).attr('data-xl')
    if( mbz === dqz ){
      return;
    }
    else{
      hdzt(mbz);
    }
  });
  $(jtl).click(function(){
    qhqh(-1);
  });
  $(jtr).click(function(){
    qhqh(1);
  });
}
cdhd('.hdzt','.hdzt li','.hdjtL','.hdjtR');




$(".ul01 li").click(function(){
  $(".ul01 li").removeClass('on');
  $(this).addClass('on');
  wcwz[2] = $(this).attr('data-t');
  
  if(wcwz[2] == '双色球成长之星幸运奖'){
    console.log("**wcwz[2]:",wcwz[2]);
  	$('.pmxh').text("序号");
  }
  else{
    console.log("++wcwz[2]:",wcwz[2]);
  	$('.pmxh').text("排名");
  }
  wzzs(wcwz[0],wcwz[1],wcwz[2]);
});
$(".diqu").change(function(){
    wcwz[0] = $(this).val();
    console.log(wcwz[0]);
    wzzs(wcwz[0],wcwz[1],wcwz[2]);
});
$(".zhou").change(function(){
    wcwz[1] = $(this).val();
    console.log(wcwz[1]);
    wzzs(wcwz[0],wcwz[1],wcwz[2]);
});

function wzzs(z,d,w){
    var zwnr = sssj[z][d][w];
    $(".lsbg").html('');
    $(".lsbg").html(zwnr);
  		var tmpnr = $(".lsbg tbody").html();
		$(".ssrr0 table tbody").html('');
    $(".ssrr0 table tbody").html(tmpnr);
}

wzzs(wcwz[0],wcwz[1],wcwz[2]);