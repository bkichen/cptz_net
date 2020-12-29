var	html5src = sessionStorage.getItem("src");
var style='background: #000;opacity: 0.75;color:#fff;text-align:center;';
var tipsShowTime = 2;
var tipsStyle = "width:80%;text-align:center;";
if(html5src==null || html5src == ""){
	html5src = "0000100001|6000003060";
}
var ua = (function() {
	var clientUserAgent = navigator.userAgent.toLowerCase();
	if (clientUserAgent.match(/MicroMessenger/i) == 'micromessenger') {
		return "micromessenger";
	}
	if (clientUserAgent.indexOf('android') != -1) {
		return "android";
	}
	if (/iPhone|iPad|iPod/i.test(clientUserAgent)) {
		return "ios";
	}
	return "windows";
})();
if(ua == "windows"){
	//重写touch
	(function($){$.fn.tap=function(arg){$(this).click(arg);};
	$.fn.onTem=$.fn.on;$.fn.on=function(event,callback){event=event=="tap"?"click":event;return $(this).onTem(event,callback);};
	$.fn.bindTem=$.fn.bind;$.fn.bind=function(event,callback){event=event=="tap"?"click":event;return $(this).bindTem(event,callback);};
	$.fn.offTem=$.fn.off;$.fn.off=function(event,callback){event=event=="tap"?"click":event;return $(this).offTem(event,callback);};
	$.fn.unbindTem=$.fn.unbind;$.fn.unbind=function(event,callback){event=event=="tap"?"click":event;return $(this).unbindTem(event,callback);};
	this.log=console.log||window.alert;this.tos=function(o){if(o.toSource){o.toSource();}else{alert(o);}};})($);
	window.alertln = window.alert;
}
$.format_money = function($cell) {  
	var reg = /[\$,%]/g;  
	var key = parseFloat( String($cell).replace(reg, '')).toFixed(2); // toFixed小数点后两位  
	return isNaN(key) ? 0.00 : key;  
};
$.int = function(number) {
	return parseInt(number, 10);
};
$.float = function(float) {
	return parseFloat(float, 10);
};
$._unique = function(array) {
	var uniqueArr = new Array();
	if($.isArray(array) && array.length > 0) {
		for(var n=0;n<array.length;n++) {
			if($.inArray(array[n], uniqueArr) == false) {
				uniqueArr.push(array[n]);
			}
		}
	}
	return uniqueArr;
};
$.inArray = function(value, array){
	var inOf = false;
	if(array && array.length && typeof(array) == "object") {
		for(var i=0; i<array.length; i++){
			if(value == array[i]){
				inOf = true;
			}
		}
	}
	return inOf;
};
String.prototype.repeat = function(n){
    return new Array(n + 1).join(this);
};
$.delArray = function(value, array){
	
};
$.merge = function( first, second ) {
	var i = first.length, j = 0;
	if ( typeof second.length === "number" ) {
		for ( var l = second.length; j < l; j++ ) {
			first[ i++ ] = second[ j ];
		}
	} else {
		while ( second[j] !== undefined ) {
			first[ i++ ] = second[ j++ ];
		}
	}
	first.length = i;
	return first;
};
function request_url() {
    var url = window.location.href;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.split("?");
        strs = str[1].split("&");
        for (var i = 0; i < strs.length; i++) {
            if(i < strs.length-1){
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            }else{
            	var s = decodeURI(strs[i].split("=")[1]);
            	var ss = s.split("#");
            	theRequest[strs[i].split("=")[0]] =ss[0];
            }
        }
    }
    return theRequest;
}
function query_string(strName){
	var strHref = document.location.href;
	var intPos = strHref.indexOf("?");
	var strRight = strHref.substr(intPos + 1);
	var arrTmp = strRight.split("&");
	for(var i = 0; i < arrTmp.length; i++ ) {
		var arrTemp = arrTmp[i].split("=");
		if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
	}
	return "";
}
function date_time(enDash) { //enDash连字符
	var NowTime = new Date();
	if(enDash == "") {
		enDash = "-";
	}
	alert(NowTime);
	return NowTime.getFullYear()+""+enDash+""+(NowTime.getMonth()+1)+""+enDash+""+NowTime.getDate()+" "+NowTime.getHours()+":"+NowTime.getMinutes()+":"+NowTime.getSeconds();
}
function format_nums(num,type){
	n = num;
	if(num/100000000 > 1){
		n = (num/100000000).toFixed(1)+'亿';
	}else if(num/10000>=10 && num>=100000){
		n = (num/10000).toFixed(0)+'万';
	}
	if(type != ''&& type == 1){
		if(num/100000000 > 1){
			n = (num/100000000).toFixed(2)+'亿';
		}else if(num/10000>0 && num>10000000){
			n = (num/10000000).toFixed(2)+'千万';
		}else if(num/10000>0 && num>10000){
			n = (num/10000).toFixed(2)+'万';
		}
	}
	return n;
}
//随机获取号码处理 2014.12.25 fangzhen
function random_code(maxNum,minNum){
	 var data = new Array();  //选中了的球的集合
	 var dataB = new Array();//根据球的数量生成相应的球【该球集合编号从1开始】
	 var order = arguments[2]?arguments[2]:'1'; //是否排序 1 是 2否
	 for(var i=0;i<maxNum;i++){
		 dataB[i]=i+1;
	 }
	data = get_array(dataB,minNum); //获得选中的球的集合
	if(order == 1) {
		for(var m=0;m<data.length;m++){  //排序
			for(var k =m+1;k<data.length;k++){
				if(data[m]>data[k]){
					var t = data[k];
					data[k] = data[m];
					data[m] = t;
				}
			}
		}
	}
	
	for(var m=0;m<data.length;m++){
		if(data[m]<10){
			data[m]="0"+data[m];
		}
	}//格式化选中球的集合
	return data;
}
function random_code_s(maxNum,minNum){
	 var data = new Array();  //选中了的球的集合
	 var dataB = new Array();//根据球的数量生成相应的球【该球集合编号从1开始】
	 var order = arguments[2]?arguments[2]:'1'; //是否排序 1 是 2否
	 for(var i=0;i<=maxNum;i++){
		 dataB[i]=i;
	 }
	data = get_array(dataB,minNum); //获得选中的球的集合
	if(order == 1) {
		for(var m=0;m<data.length;m++){  //排序
			for(var k =m+1;k<data.length;k++){
				if(data[m]>data[k]){
					var t = data[k];
					data[k] = data[m];
					data[m] = t;
				}
			}
		}
	}
	return data;
}
function get_array(arr, num) {
   var return_array = new Array();
   for (var i = 0; i<num; i++) {
       if (arr.length>0) {
           var arrIndex = Math.floor(Math.random()*arr.length);
           return_array[i] = arr[arrIndex];
           arr.splice(arrIndex, 1);
       } else {
           break;
       }
   }
   return return_array;
}
function add_cookie(name,value,expiresHours){
	var cookieString=name+"="+escape(value);
	//判断是否设置过期时间
	if(expiresHours>0){
		var date=new Date();
		date.setTime(date.getTime+expiresHours*3600*1000);
		cookieString=cookieString+"; expires="+date.toGMTString();
	}
	document.cookie=cookieString;
}
function get_cookie(name){
	var strCookie=document.cookie;
	var arrCookie=strCookie.split("; ");
	for(var i=0;i<arrCookie.length;i++){
		var arr=arrCookie[i].split("=");
		if(arr[0]==name)return arr[1];
	}
	return "";
}
function delete_cookie(name){
	var date=new Date();
	date.setTime(date.getTime()-10000);
	document.cookie=name+"=v; expires="+date.toGMTString();
} 
//时间格式化
function format_date(time){
	var timeStr='';
	var now=$.now();
	now = now.split(' ');
	time = time.split(' ');
	var nowDay=now[0].split('-');
	var timeDay=time[0].split('-');
	if(time[0]==now[0]){
		timeStr = time[1].substr(0,5);
	}else if(nowDay[0]==timeDay[0]){
		if(nowDay[1]==timeDay[1]){
			if(nowDay[2]==timeDay[2]){
				timeStr = time[1].substr(0,5);
			}else{
				timeStr=time[0].substr(5,5);
			}
		}else{
			timeStr=time[0].substr(5,5);
		}
	}else{
		timeStr=time[0].substr(5,5);
	}
	return timeStr;
}
function showScroll(){//回到顶部
	var scrollValue=$(window).scrollTop();
	if(scrollValue>0){
		$('div[class=back_top]').show();
	}
	$(window).scroll( function() { 
		scrollValue=$(window).scrollTop();
		scrollValue > 100 ? $('div[class=back_top]').show():$('div[class=back_top]').hide();
		$("body").unbind("touchend").bind("touchend",function(){
			setTimeout(function(){
				$('div[class=back_top]').hide();
			},3000);
		});
	});
}
function storage_set_item(key,value){
	if(window.localStorage){
		localStorage.setItem(key,value);
	}
}
function storage_get_item(key) {
	if(window.localStorage){
		var storage = window.localStorage;
		if(storage.getItem(key)) {
			return storage.getItem(key);
		}
		return "";
	}
}
function storage_remove_item(key) {
	if(window.localStorage){
		localStorage.removeItem(key);
	}
}
//判断字符串字符长度
function autoAddEllipsis(pStr, pLen) {
    var _ret = cutString(pStr, pLen);
    var _cutFlag = _ret.cutflag;
    var _cutStringn = _ret.cutstring;
    if ("1" == _cutFlag) {
        return _cutStringn + "...";
    } else {
        return _cutStringn;
    }
} 
function cutString(pStr, pLen) {
	// 原字符串长度
    var _strLen = pStr.length;
    var _tmpCode;
    var _cutString;
    // 默认情况下，返回的字符串是原字符串的一部分
    var _cutFlag = "1";
    var _lenCount = 0;
    var _ret = false;
    if (_strLen <= pLen/2) {
        _cutString = pStr;
        _ret = true;
    }
    if (!_ret) {
        for (var i = 0; i < _strLen ; i++ ) {
            if (isFull(pStr.charAt(i))) {
                _lenCount += 2;
            } else {
                _lenCount += 1;
            }
            if (_lenCount > pLen) {
                _cutString = pStr.substring(0, i);
                _ret = true;
                break;
            } else if (_lenCount == pLen) {
                _cutString = pStr.substring(0, i + 1);
                _ret = true;
                break;
            }
        }
    }
    if (!_ret) {
        _cutString = pStr;
        _ret = true;
    }
    if (_cutString.length == _strLen) {
        _cutFlag = "0";
    }
    return {"cutstring":_cutString, "cutflag":_cutFlag};
} 
function isFull (pChar) {
	  for (var i = 0; i < pChar.length ; i++ ) {    
	    if ((pChar.charCodeAt(i) > 128)) {
	        return true;
	    } else {
	        return false;
	    }
	}
}
//时间格式化
function format_date(time){
	var timeStr='';
	var now=$.now();
	now = now.split(' ');
	time = time.split(' ');
	var nowDay=now[0].split('-');
	var timeDay=time[0].split('-');
	if(time[0]==now[0]){
		timeStr = time[1].substr(0,5);
	}else if(nowDay[0]==timeDay[0]){
		if(nowDay[1]==timeDay[1]){
			if(nowDay[2]==timeDay[2]){
				timeStr = time[1].substr(0,5);
			}else if(parseInt(nowDay[2])-parseInt(timeDay[2])==1){
				timeStr = '昨天';
			}else{
				timeStr = timeDay[0]+"年"+timeDay[1]+"月"+timeDay[2]+"日";
			}
		}else{
			timeStr = timeDay[0]+"年"+timeDay[1]+"月"+timeDay[2]+"日";
		}
	}else{
		timeStr = timeDay[0]+"年"+timeDay[1]+"月"+timeDay[2]+"日";
	}
	return timeStr;
}
//验证手机号
function checkMobile(id) {
	var mobile = $('#'+id).val();
	if(!mobile || !(/^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$|18[0-9][0-9]{8}$/.test(mobile))){
		layer.open({
			style:style,
		    content: '请输入正确的手机号码',
		    time:tipsShowTime
		});
		return false;
	}else{
		return true;
	}
}
//验证用户名
function cmcCheckTureName(name){
	var pattern=/^([\u4e00-\u9fa5]+\.)*[\u4e00-\u9fa5]+$/;	
	if(!(name.indexOf("0x")>=0||!pattern.test(name))) return true;
	return false;	
}