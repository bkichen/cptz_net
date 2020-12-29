
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




