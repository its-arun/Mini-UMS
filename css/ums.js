$(document).ready(function() {
    function getUrlVars() {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    token = getUrlVars()["at"];
    deviceID = getUrlVars()["did"];
    UserID = getUrlVars()["uid"];


    // document.getElementById("mydiv").style.display = 'block';
    tagName = "GetDetails";
    CallService('https://ums.lpu.in/UmsWebService/UmsWebService.svc/StudentBasicInfoForService/' + UserID + '/' + token + '/' + deviceID);


})


var jsondata;
var tagName = "";

function CallService(url) {

    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        processdata: false,
        success: function(msg) {
            ServiceSucceeded(msg);
        },
        error: ServiceFailed
    });
}

function ServiceFailed(xhr) {
    alert(xhr.responseText);
    if (xhr.responseText) {
        var err = xhr.responseText;
        if (err)
            error(err);
        else
            error({
                Message: "Unknown server error."
            })
    }
    // document.getElementById("mydiv").style.display = 'none';
    return;
}

function ServiceSucceeded(result) {
    var output = '';

    if (tagName == "GetDetails") {
        jsondata = result[0];
        //Get Student Photograph
        var imgdata = 'data:image/png;base64,' + jsondata.StudentPicture;
        $('#roundimg').attr("src", imgdata);
        //Get Student Name
        if (jsondata.StudentName != '') {
            $("#uName").text(jsondata.StudentName);
        } else {
            $("#uName").text('Not Available');
        }
        //Get Aggregate Attendance
        if (jsondata.AggAttendance != '') {
            $("#aggatt").text(jsondata.AggAttendance);
        } else {
            $("#aggatt").text('Not Available');
        }
        //Get Father's Name
        if (jsondata.FatherName != '') {
            $("#fName").text(jsondata.FatherName);
        } else {
            $("#fName").text('Not Available');
        }
        //Get Mother's Name
        if (jsondata.MotherName != '') {
            $("#mName").text(jsondata.MotherName);
        } else {
            $("#mName").text('Not Available');
        }
        //Number of Lectures
        if (jsondata.TimeTableLectureCount != '') {
            $("#lecture").text(jsondata.TimeTableLectureCount);
        } else {
            $("#lecture").text('Not Available');
        }
        //Get CGPA
        if (jsondata.CGPA != '') {
            $("#cgpa").text(jsondata.CGPA);
        } else {
            $("#cgpa").text('Not Available');
        }
        //Get Number of Messages
        if (jsondata.MyMessagesCount != '') {
            $("#msgc").text(jsondata.MyMessagesCount);
        } else {
            $("#msgc").text('Not Available');
        }
        //Get Student's Mobile Number
        if (jsondata.StudentMobile != '') {
            $("#phone").text(jsondata.StudentMobile);
        } else {
            $("#phone").text('Not Available');
        }
        //Get Student's Email
        if (jsondata.StudentEmail != '') {
            $("#email").text(jsondata.StudentEmail);
        } else {
            $("#email").text('Not Available');
        }
        //Get Student's DOB
        if (jsondata.DateofBirth != '') {
            $("#dob").text(jsondata.DateofBirth);
        } else {
            $("#dob").text('Not Available');
        }
        //Get Program Names
        if (jsondata.ProgramName != '') {
            $("#prog").text(jsondata.ProgramName);
        } else {
            $("#prog").text('Not Available');
        }
        //Get Admission Session - kinda broken
        if (jsondata.AdmissionSession != '') {
            $("#AdmissionSession").text(jsondata.AdmissionSession);
        } else {
            $("#AdmissionSession").text('Not Available');
        }
        //Get Section
        if (jsondata.Section != '') {
            $("#Section").text(jsondata.Section);
        } else {
            $("#Section").text('Not Available');
        }
        //Get Registration Number
        if (UserID != '') {
            $("#rollNo").text(UserID);
        } else {
            $("#rollNo").text('Not Available');
        }
        //Get Permanent Address
        if (jsondata.PermanentAddress != undefined) {
            var address = jsondata.PermanentAddress;
            var addStr = address.HNo_Building + ', ' + address.Colony + ',' + address.CityName + ', ' + address.DistrictName + ', ' + address.StateName + ', ' + address.CountryName;
            $("#pAddress").text(addStr);
        } else {
            $("#pAddress").text('Not Available');
        }
    }
    // document.getElementById("mydiv").style.display = 'none';
}