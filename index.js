function start() {
    document.getElementById("start").style.display = "none"
    document.getElementById("question").style.display = "block"
    next()


}
$("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});
$("#B").click(function () {
    next();
});

var sbti;
var num = 1;
function next() {
    if (num == 13) {
        $(".question").hide();
        $(".result").show();
        var mbti = "";
        ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
        ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
        ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
        ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";
        document.getElementById("popup").style.display = "block";
        document.getElementById("question").style.display = "none";


    } else {
        $("#progress-bar").attr("value", 100 / 12 * num)
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}



function popup(){
    document.getElementById("popup").style.display = "none"
    document.getElementById("banner").style.display = "block"
}

function popclose(){
    var mbti = "";
        ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
        ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
        ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
        ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";
    location.href = "mbti" + "/" + mbti + ".html";
}

var q = {
    1: { "title": "지금은 설날, 0시이다. 지금 잘까?", "type": "JP", "A": "일단 오늘 할 일을 정리하고 잔다.", "B": "일단 자고 내일 상황 보고 생각하다." },
    2: { "title": "친구가 같이 놀자고 한다. 같이 놀까?", "type": "EI", "A": "친구랑 노는 거는 언제나 좋다.", "B": "귀찮으니 못 간다고 말한다." },
    3: { "title": "어른들에게 용돈 받았다. 어떻게 쓸까?", "type": "JP", "A": "모아서 필요한 것에 쓴다.", "B": "바로바로 사고 싶은 거에 쓴다." },
    4: { "title": "일단 지금 바로 쓴다. 어떻게 살까?", "type": "EI", "A": "마트에 직접 나가서 산다.", "B": "인터넷으로 주문한다." },
    5: { "title": "옛날부터 사고 싶던 게 있는데 옆에 다른 제품이 당신 마음을 잡았다. 무엇을 살까?", "type": "JP", "A": "옛날부터 사고 싶던 걸 사야 한다.", "B": "돈은 언젠가 또 생길 테니 옆에 있는 제품을 산다." },
    6: { "title": "물건을 사고 만족하면서 집으로 갈라는데 하늘이 어둡다. 우산을 살까?", "type": "SN", "A": "이럴 때 항상 비가 왔으니 우산을 산다.", "B": "하늘을 보니 아직 비가 안 올 거 같으니 그냥 간다." },
    7: { "title": "친척들을 만나러 가는데 길이 막힌다. 무엇을 탈까?", "type": "TF", "A": "늦지 않는 게 예의 비싸도 기차 타고 간다.", "B": "친척들도 이해하겠지 차 타고 간다." },
    8: { "title": "간만에 친척들이 모였다. 나는 뭐할까?", "type": "EI", "A": "이야기도 하면서 논다.", "B": "인사만하고 할거한다." },
    9: { "title": "윷판을 만드는데 기억이 안 난다. 어떻게 할까?", "type": "SN", "A": "어떻게 해 서든 기억해 낸다.", "B": "기존의 윷판을 써야 한다는 법은 없으니 마음대로 끌리는 대로 만든다." },
    10: { "title": "친척이 대학에서 떨어졌다고한다. 뭐라고해줄까?", "type": "TF", "A": "문제를 분석해서 다음에 성공할수있는 방법을 알려준다.", "B": "위로를 해준다." },
    11: { "title": "가족들이랑 다같이 맛있는거를 먹으러 간다. 어디로 갈까?", "type": "SN", "A": "항상 가던 맛있는 집을 간다.", "B": "가본적은 없는데 맛있을거 같은 집을 간다." },
    12: { "title": "드디어 설날 끝이다. 이번 설날은 어땠지?", "type": "TP", "A": "가장 기억에 남는 거는 친척들을 만난 것이다.", "B": "오랜만에 친척들을 만나서 재미있었다." }
}

