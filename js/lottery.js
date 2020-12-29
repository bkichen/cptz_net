/**
 * Created by zhizuo on 2017/11/3.
 */

var jkdz = "http://www.cwl.gov.cn/cwl_admin/";

function q30(name){
    var obj='';
    var url = jkdz + "kjxx/findIssue";
    var param = {};
    param.name=name;
    $.ajax({
        url: url,
        data: param,
        dataType: "json",
        async: false,
        success: function(msg){
            obj = msg;
        }
    });
    return obj;
}

function jtq(name,code) {
    var obj='';
    var url = jkdz + "kjxx/findKjxx/forIssue";
    var param = {};
    param.name=name;
    param.code=code;
    $.ajax({
        url: url,
        data: param,
        dataType: "json",
        async: false,
        success: function(msg){
            obj = msg;
        }
    });
    return obj;
}

function wqcx(name,issueCount,issueStart,issueEnd,dayStart,dayEnd,pageNo) {
    var obj='';
    var url = jkdz + "kjxx/findDrawNotice";
    var param = {};
    param.name=name;
    param.issueCount=issueCount;
    param.issueStart=issueStart;
    param.issueEnd=issueEnd;
    param.dayStart=dayStart;
    param.dayEnd=dayEnd;
    param.pageNo=pageNo;

    $.ajax({
        url: url,
        data: param,
        dataType: "json",
        async: false,
        success: function(msg){
            obj = msg;
        }
    });
    return obj;
}


function gglLb(year,faceValue,bonusLimit,pageNo,src) {
    var obj='';
    var url = jkdz + "ggl/findInfo";
    var param = {};
    param.year=year;
    param.faceValue=faceValue;
    param.bonusLimit=bonusLimit;
    param.pageNo=pageNo;
    param.src=src;

    $.ajax({
        url: url,
        data: param,
        dataType: "json",
        async: false,
        success: function(msg){
            obj = msg;
        }
    });
    return obj;
}


function kjspLb(name,dayStart,dayEnd,pageNo){
    var obj='';
    var url = jkdz + "kjVedio/findInfo";
    var param = {};
    param.name=name;
    param.dayStart=dayStart;
    param.dayEnd=dayEnd;
    param.pageNo=pageNo;
    param.src="src";

    $.ajax({
        url: url,
        data: param,
        dataType: "json",
        async: false,
        success: function(msg){
            obj = msg;
        }
    });
    return obj;
}









