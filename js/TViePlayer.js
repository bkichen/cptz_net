var Video_ID;
var Skin_ID;
var Vid;
var para;
var file_loder = "http://www.cwl.gov.cn/defaultSkin/";
var apiServer;
var player_area = 'player_area';//flash控件的id
//关灯
function lightOff() {
  $("#shadowDiv").attr("class", "showDiv");
  $('#' + player_area + '_embed').css({"width": widthW, "height": heightW});
  $('#' + player_area + '').css({"width": widthW, "height": heightW});
  $('#desc').slideDown();
  $('#openLight').val('开灯');
  $('#openLight').attr('offOn', '0');
}

//开灯
function lightOn() {
  $("#shadowDiv").attr("class", "hidDiv");
  $('#openLight').val('关灯');
  $('#openLight').attr('offOn', '1');
  if ($('#divShow').attr('isWidth') == '1') {
    $('#' + player_area + '_embed').css({"width": widthW, "height": heightW});
    $('#' + player_area + '').css({"width": widthW, "height": heightW});
    $('#desc').slideDown();
  } else {
    $('#' + player_area + '_embed').css({"width": widthO, "height": heightO});
    $('#' + player_area + '').css({"width": widthO, "height": heightO});
    $('#desc').css('display', 'none');
  }
}


function reload() {
  window.location.reload();
}

function openLight() {
  var swf = document.getElementById("player_area");
  swf.openLight();
  if ($('#openLight').attr('offOn') == '0') {
    lightOn()
    $('#openLight').val('关灯');
    $('#openLight').attr('offOn', '1');
  } else {
    lightOff();
    $('#openLight').val('开灯');
    $('#openLight').attr('offOn', '0');
  }

}

function TVieVodPlayer(domId, Video_ID1, width, height, Skin_ID1, api_server, e) {//生成点播播放器
  //API_Server = API_Server1;
  this.is_mobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
  var flashvars = '';
  if (api_server == undefined) {
    api_server = '';
  }
  apiServer = api_server;
  if (e != undefined) {
    flashvars = e.replace(',', '&');
  }
  Video_ID = Video_ID1;
  Skin_ID = Skin_ID1;
  para = 'Video_ID=' + Video_ID + '&API_Server=' + apiServer + '';
  if (this.is_mobile !== null) {
    //start html5player

    $.ajax({
      url: 'http://' + $.trim(api_server) + '/api/getCDNByVodId/' + Video_ID,
      type: 'GET',
      success: function (msg) {
        var video = eval('(' + msg + ')');
        var files = video['files']['m3u8'];
        $('#divShow').html('<video id="videozb" width="' + width + '" height="' + height + '" controls autoplay><source src="' + files + '" /></video>');
      }
    })
  } else {
    var htmlVal = '<object vID="' + Video_ID + '" id=' + domId + ' type="application/x-shockwave-flash" data="' + file_loder + 'Loader.swf" style=" width: ' + width + '; height: ' + height + ';" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0" ><param value="' + file_loder + 'Loader.swf" name="movie"><param value="true" name="allowfullscreen"><param value="true" name="muted"><param value="always" name="allowscriptaccess"><param value="Opaque" name="wmode"><param value="API_Server=' + api_server + '&Video_ID=' + Video_ID + '&Skin_ID=' + Skin_ID + '&' + flashvars + '" name="flashvars"><embed id="' + domId + '_embed" src="' + file_loder + 'Loader.swf" style=" width: ' + width + '; height: ' + height + ';" quality="high" type="application/x-shockwave-flash" wmode="Opaque" allowscriptaccess="always" allowfullscreen="true" flashvars="API_Server=' + api_server + '&Video_ID=' + Video_ID + '&Skin_ID=' + Skin_ID + '&' + flashvars + '" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>';
    $('#divShow').html(htmlVal);
  }
}

function TVieLivePlayer(domId, Channel_ID1, width, height, Skin_ID1, api_server, e) {//生成直播播放器
  //API_Server = API_Server1;
  this.is_mobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
  var flashvars = '';
  if (e != undefined) {
    flashvars = e.replace(',', '&');
  }
  if (api_server == undefined) {
    api_server = '';
  }
  apiServer = api_server;
  Channel_ID = Channel_ID1;
  Skin_ID = Skin_ID1;
  para = 'Channel_ID=' + Channel_ID + '';
  if (this.is_mobile !== null) {
    //start html5player
    $.ajax({
      url: 'http://' + $.trim(api_server) + '/api/getCDNByChannelId/' + Channel_ID,
      type: 'GET',
      success: function (msg) {
        //var channelInfo = eval('(' + msg + ')');
        //var streams = channelInfo.streams;
        //var stream_name = Object.keys(streams)[0];
        //var live_host = streams[stream_name].cdnlist[0];
        src = 'http://tv.cwl.gov.cn/channels/fckj/kjzb/m3u8:sd';
        //alert(src);
        $('#divShow').html('<video id="videozb" width="' + width + '" height="' + height + '" controls autoplay><source src="' + src + '" /></video>');
      }
    })
  } else {
    var htmlVal = '<object vID="' + Channel_ID + '" id=' + domId + ' type="application/x-shockwave-flash" data="' + file_loder + 'Loader.swf" style=" width: ' + width + '; height: ' + height + ';" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0" ><param value="' + file_loder + 'Loader.swf" name="movie"><param name="bgcolor" value="#000000"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="true" name="muted"><param value="Opaque" name="wmode"><param value="API_Server=' + api_server + '&Channel_ID=' + Channel_ID + '&Skin_ID=' + Skin_ID + '&' + flashvars + '" name="flashvars"><embed id="' + domId + '_embed" src="' + file_loder + 'Loader.swf" width="' + width + '" height="' + height + '" quality="high" bgcolor="#000000" type="application/x-shockwave-flash" wmode="Opaque" allowscriptaccess="always" allowfullscreen="true" flashvars="API_Server=' + api_server + '&Channel_ID=' + Channel_ID + '&Skin_ID=' + Skin_ID + '&' + flashvars + '" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>';
    $('#divShow').html(htmlVal);
  }
}


function newPagePop(domId, para, width, height, Skin_ID1, e) {//生成弹窗播放器
  Skin_ID = Skin_ID1;
  var flashvars = '';
  if (e != undefined) {
    flashvars = e.replace(',', '&');
  }
  if (Skin_ID !== undefined) {
    var htmlVal = '<object vID="' + para + '" id=' + domId + ' type="application/x-shockwave-flash" data="' + file_loder + 'Loader.swf" style=" width: ' + width + '; height: ' + height + ';" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0"><param value="' + file_loder + 'Loader.swf" name="movie"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="true" name="muted"><param value="Opaque" name="wmode"><param value="' + para + '&autostart=true&isMiniWindow=true&Skin_ID=' + Skin_ID + '" name="flashvars"><embed id="' + domId + '_embed" src="' + file_loder + 'Loader.swf" width="' + width + '" height="' + height + '" quality="high" type="application/x-shockwave-flash" wmode="Opaque" allowscriptaccess="always" allowfullscreen="true" flashvars="' + para + '&autostart=true&isMiniWindow=true&Skin_ID=' + Skin_ID + '" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>';
    $('#divShow').html(htmlVal);
  } else {
    var htmlVal = '<object vID="' + para + '" id=' + domId + ' type="application/x-shockwave-flash" data="' + file_loder + 'Loader.swf" style=" width: ' + width + '; height: ' + height + ';" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0"><param value="' + file_loder + 'Loader.swf" name="movie"><param value="true" name="muted"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="Opaque" name="wmode"><param value="' + para + '&autostart=true&isMiniWindow=true" name="flashvars"><embed id="' + domId + '_embed" src="' + file_loder + 'Loader.swf" width="' + width + '" height="' + height + '" quality="high" type="application/x-shockwave-flash" wmode="Opaque" allowscriptaccess="always" allowfullscreen="true" flashvars="' + para + '&autostart=true&isMiniWindow=true" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>';
    $('#divShow').html(htmlVal);
  }
}

function newPage() {//弹窗
  var vid = $('object').attr('vid');
  var swf = document.getElementById("player_area");
  //var str = swf.cookieAs();
  para = 'Video_ID=' + Video_ID + '';
  //setCookie(str);
  if (Skin_ID !== '') {
    new_window_handle = window.open('', 'player_area', 'height=410px, width=640px, top=0, left=0, resizable=yes, location=yes, status=no');
    new_window_handle.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
    new_window_handle.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><body style="padding:0px;margin:0px;"><div id="shadowDiv" class="hidDiv"></div><div id="divShow" style="position:absolute;width:100%;height:100%;background:#000;"></div></body>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'jquery.js" >');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'TViePlayer.js" >');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'jquery.cookie.js" >');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script>');
    new_window_handle.document.write('var para = "Video_ID=' + Video_ID + '&API_Server=' + apiServer + '";');
    new_window_handle.document.write('var file_loder="' + file_loder + '";');
    new_window_handle.document.write('var Video_ID="' + Video_ID + '";');
    new_window_handle.document.write('newPagePop("player_area",para,"100%","100%",' + Skin_ID + ');');
    new_window_handle.document.write('function canSkipAd() { return "true";}');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'swfobject.js" >');
    new_window_handle.document.write('</script>');
  } else {
    new_window_handle = window.open('', 'player_area', 'height=410px, width=640px, top=0, left=0, resizable=yes, location=yes, status=no');
    new_window_handle.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
    new_window_handle.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><body style="padding:0px;margin:0px;"><div id="shadowDiv" class="hidDiv"></div><div id="divShow" style="position:absolute;width:100%;height:100%;background:#000;"></div></body>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'jquery.js" >');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'TViePlayer.js" >');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'jquery.cookie.js" >');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script>');
    new_window_handle.document.write('var para = "Video_ID=' + Video_ID + '&API_Server=' + apiServer + '";');
    new_window_handle.document.write('var Video_ID="' + Video_ID + '";');
    new_window_handle.document.write('var file_loder="' + file_loder + '";');
    new_window_handle.document.write('newPagePop("player_area",para,"100%","100%");');
    new_window_handle.document.write('function canSkipAd() { return "true";}');
    new_window_handle.document.write('</script>');
    new_window_handle.document.write('<script type="text/javascript" src="' + file_loder + 'swfobject.js" >');
    new_window_handle.document.write('</script>');
  }


}

function oldPage() {//关闭小窗口后，调用之前的页面
  var swf = null;
  var str = '';
  try {
    swf = document.getElementById('' + player_area + '_embed');
    str = swf.cookieAs();
    swf.playcookie();
  } catch (e) {
    swf = document.getElementById(player_area);
    str = swf.cookieAs();
    swf.playcookie();
  }
}

function setCookie(str) {
  //alert($.cookie(para));
  $.cookie(Video_ID, str, {expires: 7, path: '/'});
}

function getCookie() {//获取cookie
  return $.cookie(Video_ID);
}

function pureString(value) {
  var str = value.replace(/(^\s*)|(\s*$)|(\n)/g, "");
  return str;
}

window.onbeforeunload = function () {//页面关闭的时候，存储当前cookies
  var swf = null;
  var str = '';
  if (!Video_ID) {
    return;
  }
  try {
    swf = document.getElementById(player_area + '_embed');
    str = swf.cookieAs();
  } catch (e) {
    swf = document.getElementById(player_area);
    str = swf.cookieAs();
  }
  if (swf && swf.playStartAD() === false) {
    setCookie(str);

  }
  if (window.parent) {
    window.parent.opener.oldPage();
  }

}

function canSkipAd() {
  return "true";
}

//刷新缓存
$(function () {
  random = Math.random();
  $('script').attr('random', random);
})

		

