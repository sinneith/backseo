//생년월일
$(document).ready(function(){
    //1. 문서객체 담기
    var yBox = '#birthYear';
    var mBox = '#birthMonth';
    var dBox = '#birthDate';

    //2. 옵션태그를 담을 변수작성
    var yOption = '';
    var mOption = '';
    var dOption = '';

    //3. 년도 처리
    var today = new Date();
    var tYear = today.getFullYear(); //오늘의 연도

    //옵션태그 반복
    for(var i=tYear;i>=1900;i--){
        yOption += '<option>' + i + '</option>';
    }

    //html() : 문서객체에 텍스트를 컨트롤하는 메서드(태그인식)
    $(yBox).html(yOption);


    //4. 월 처리
    for(var i=1;i<=12;i++){
        mOption += '<option>' + i + '</option>';
    }
    $(mBox).html(mOption);


    //5. 일 처리
    for(var i=1;i<=31;i++){
        dOption += '<option>' + i + '</option>';
    }
    $(dBox).html(dOption);


    //년도와 월선택상자가 값이 변경될때마다 일을 달라지게 처리
    var monthDate = [31,28,31,30,31,30,31,31,30,31,30,31];

    $(yBox).add(mBox).change(function(){
        dOption = ''; //문자열을 비움

        //년도와 월선택상자의 선택값을 담는 변수
        var y = $(yBox).val()
        var m = $(mBox).val() - 1; //배열번호는 0번부터 시작

        //윤년이면 29일로 변경
        //윤년 : 년도가 4의 배수이면서 100의 배수이면 안됨, 400의 배수는 처리
        if((y % 4 == 0 && y % 100 != 0) || y % 400 == 0){
            monthDate[1] = 29;
        }else{
            monthDate[1] = 28;
        }

        for(var i=1;i<=monthDate[m];i++){
            dOption += '<option>' + i + '</option>';
        }

        $(dBox).html(dOption);
    });
});



//이메일선택
$(document).ready(function(){
    $('#emailSelect').change(function(){
        var v = $(this).val();

        if(v == '#'){
            $('#emailDirect').val('');
        }else{
            $('#emailDirect').val(v);
        }
    });
});