
$(".aa").on("click", function () {
  $("#p1").hide();
  $("#p2").show();
  var speed = 50;
  randStart = setInterval(randShuffle, speed);
  $(".top").css("display","none");
  $(".moji").css("display","none");
  $(".stop").show();
});

$(".bb").on("click", function () {
  $("#p1").hide();
  $("#p3").show();
  var speed = 50;
  randStart = setInterval(randShuffle2, speed);
  $(".top").css("display","none");
  $(".moji2").css("display","none");
  $(".stop").show();
});

var randShuffle = function () {
  var random = Math.floor(Math.random() * 6 + 1);
  $(".images").html('<img src="img/' + random + '.png" />');
  if (random === 1) {
    $(".moji").html("カレーうどん");
  } else if (random === 2) {
    $(".moji").html("カレーライス");
  } else if (random === 3) {
    $(".moji").html("ビーフシチュー");
  } else if (random === 4) {
    $(".moji").html("ラーメン");
  } else if (random === 5) {
    $(".moji").html("とんかつ");
  } else if (random === 6) {
    $(".moji").html("焼肉");
  }
};

var randShuffle2 = function () {
  var random2 = Math.floor(Math.random() * 6 + 11);
  $(".images2").html('<img src="img/' + random2 + '.png" />');
  if (random2 === 11) {
    $(".moji2").html("ます寿司");
  } else if (random2 === 12) {
    $(".moji2").html("パッタイ");
  } else if (random2 === 13) {
    $(".moji2").html("クリームシチュー");
  } else if (random2 === 14) {
    $(".moji2").html("鯛茶漬け");
  } else if (random2 === 15) {
    $(".moji2").html("茶そば");
  } else if (random2 === 16) {
    $(".moji2").html("パスタ");
  }
};


$(".stop").on("click", function () {
  clearInterval(randStart);
  $(this).hide();
  $(".moji").show();
  $(".moji2").show();
  $(".top").show();
});

$(".top").on("click", function () {
  $("#p2").hide();
  $("#p3").hide();
  $("#p1").show();
});
