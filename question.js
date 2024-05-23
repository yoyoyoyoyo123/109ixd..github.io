function Question1(){
  new Typed('#mainQ1', {
    strings: ["問題一：傳教士站在我面前，我更在意他的哪個地方？"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
    }
  });
}
function Question2(){
  new Typed('#mainQ2', {
    strings: ["問題二：傳教士講的內容裡，我更想要聽到什麼？"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
    }
  });
}
function Question3(){
  new Typed('#mainQ3', {
    strings: ["問題三：我要去嗎？"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
    }
  });
}
function Question4(){
  new Typed('#mainQ4', {
    strings: ["問題四：我想去嗎？"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
    }
  });
}
start();
function start(){
  new Typed('#greeting', {
    strings: ["準備回家的路上，我想著今天晚餐要吃什麼。"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
        greeting2();
    }
});
}


function greeting2(){
    new Typed('#greeting2', {
        strings: ["自己煮嗎？還是買隔壁麵攤的湯麵就好？"],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function (self) {
            greeting3();
        }
    });
}
function greeting3(){
    new Typed('#greeting3', {
        strings: ["啊，還是乾脆打電話問問看朋友現在要不要出來吃飯？"],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function (self) {
            greeting4();
        }
    });
}
let textfinish = false;
function greeting4(){
    new Typed('#greeting4', {
        strings: ["但這麼臨時會有人答應嗎……"],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function (self) {
            setTimeout(function() {
                var startDiv = document.getElementById('startbtn');
                startDiv.style.display = 'block';
                startDiv.style.opacity = 0;
                var opacity = 0;
                var timer = setInterval(function() {
                    if (opacity >= 1) {
                        clearInterval(timer);
                        startDiv.classList.add('breathe'); // Add breathe animation
                    }
                    startDiv.style.opacity = opacity;
                    opacity += 0.1;
                    textfinish = true;
                }, 100);
                
            }, 1000);
        }
    });
}

function q11(){
  new Typed('#q11', {
    strings: ["我遇到了一位傳教士，他看起來大概四十幾歲左右，"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
        q12();
    }
  });
}

function q12(){
  new Typed('#q12', {
    strings: ["穿著黑灰相間的大衣外套與寬鬆的黑色華夫格材質長褲，手上拿著幾張傳單，"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
        q13();
    }
  });
}
function q13(){
  new Typed('#q13', {
    strings: ["上面寫著「US」以及其他我看不太清楚的文字，或許上面會有更詳細的內容？"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
       Question1();
    }
  });
}

function q21(){
  new Typed('#q21', {
    strings: ["傳教士看向我的眼神裡充滿著期待的光，"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
        q22();
    }
  });
}
function q22(){
  new Typed('#q22', {
    strings: ["讓我不好意思拒絕他，也就順著他說的話繼續聊下去。"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
      Question2();
    }
  });
}
function q31(){
  new Typed('#q31', {
    strings: ["我們聊了一段時間，而且我發現我對他講的內容十分有興趣，"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
      q32();
    }
  });
}
function q32(){
  new Typed('#q32', {
    strings: ["他也發現了這點，於是邀請我去附近的咖啡廳繼續深入談話。"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
      Question3();
    }
  });
}
function q41(){
  new Typed('#q41', {
    strings: ["我們在分開前交換了聯絡方式，他把我拉進了一個教會的 Line 群組，"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
      q42();
    }
  });
}

function q42(){
  new Typed('#q42', {
    strings: ["在那裡我認識到了其他有趣的人。"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
      q43();
    }
  });
}

function q43(){
  new Typed('#q43', {
    strings: ["過了一週後，我收到了訊息，他邀請我今晚去參加教會的晚餐聚會，"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
      q44();
    }
  });
}

function q44(){
  new Typed('#q44', {
    strings: ["可以在那邊認識到更多志同道合的朋友。"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function (self) {
      Question4();
    }
  });
}

function end(){
  new Typed('#endtext', {
    strings: ["你將接受神的賜予..."],
    typeSpeed: 100,
    showCursor: false,
    onComplete: function (self) {
    }
});
}

startpage = document.getElementById("start");
main = document.getElementById("main");
startpage.style.opacity = 1; // 確保在動畫開始之前元素是可見的
var isFadingOut = false;
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function() {
    if(textfinish){
      if (!isFadingOut && startpage.style.opacity == 1) {
        var opacity = 1;
        var timer = setInterval(function() {
            if (opacity <= 0) {
                clearInterval(timer);
                startpage.style.display = "none"; // 將元素設置為 display: none;
                main.style.display = "flex";
                q11();
            }
            startpage.style.opacity = opacity;
            opacity -= 0.1;
        }, 100);
        isFadingOut = true;
    }
    }
});
})

// const q1 = document.getElementById('q1');
// const q2 = document.getElementById('q2');
// const q3 = document.getElementById('q3');
// const q4 = document.getElementById('q4');
// q1.style.display = "block";

var questions = document.querySelectorAll(".question");
var q = document.querySelectorAll(".qtext");
var mainQ = document.querySelectorAll(".mainQ");
var currentQuestionIndex = 0;
var answers = {};

function selectAnswer(questionId, nextid, answer, imageIndex) {
  var mainpic = document.querySelector('.mainpic img');
  mainpic.src = 'story/' + imageIndex + '.jpg';
  answers[questionId] = answer;
  var options = document.querySelectorAll('#' + questionId + ' .chooseA');
  options.forEach(function (option) {
      option.classList.remove('selected');
  });

  // 選中點擊的選項
  event.currentTarget.classList.add('selected');
  // document.getElementById(questionId).style.display = 'none';
  // document.getElementById(nextid).style.display = 'block';
}
var picindex =1;

function validateAndShowNextQuestion() {
  // 檢查是否選擇了答案
  var selectedAnswer = document.querySelector('input[name="question' + (currentQuestionIndex + 1) + '"]:checked');
  if (!selectedAnswer) {
      alert('請選擇答案');
      return;
  }
  // 顯示下一個問題
  showNextQuestion();
  setTimeout(() => {
    picindex++;
    var mainpic = document.querySelector('.mainpic img');
    mainpic.src = 'story/' + picindex +'-1.jpg';
  }, 1500);

}


function showNextQuestion() {
  black = document.getElementById("black");
  currentQuestionIndex++;
  if (currentQuestionIndex >= 1 && currentQuestionIndex <= 3) {
    setTimeout(() => {
        questions[currentQuestionIndex - 1].style.display = "none";
        q[currentQuestionIndex - 1].style.display = "none";
        mainQ[currentQuestionIndex - 1].style.display = "none";
    }, 1500);
    black.style.display = "block";
    black.classList.add('fade');

    // 淡入下一個問題
    setTimeout(function() {
        black.style.display = "none";
        switch (currentQuestionIndex) {
            case 1:
                q21();
                break;
            case 2:
                q31();
                break;
            case 3:
                q41();
                break;
            default:
                break;
        }
    }, 3000);
}
  switch (currentQuestionIndex) {
    case 1:
        setLogoImage('story/02_Q2.png','story/02_Process.png','story/02_BK.png');
        break;
    case 2:
        setLogoImage('story/03_Q3.png','story/03_Process.png','story/03_BK.png');
        break;
    case 3:
        setLogoImage('story/04_Q4.png','story/04_Process.png','story/04_BK.png');
        break;
    default:
        break;
}
  if (currentQuestionIndex === questions.length) {
    main.style.display = "none";
    endpage.style.display = "flex";
    setTimeout(() => {
    end();
    }, 3000);
    endpage.classList.add('fade2');
    setTimeout(function() {
      endpage.style.display = "none";
      showResult();
  }, 6000);
  } else {
    // 顯示下一個問題
    setTimeout(() => {
      questions[currentQuestionIndex].style.display = "flex";
      q[currentQuestionIndex].style.display = "block";
      
    }, 1500);
  }
}

function setLogoImage(imageUrl,processUrl,backgroundImageUrl) {
  setTimeout(function(){
    var logo = document.getElementById('logo');
    var num = document.getElementById('num');
    // logo.style.opacity = 0; 
    logo.src = imageUrl;
    num.src = processUrl;
    document.body.style.backgroundImage = "url('" + backgroundImageUrl + "')";
    // logo.style.opacity = 1;
  },1500)

}

endpage = document.getElementById("endpage");

function showResult() {
  document.body.style.backgroundImage = "url(story/Guide_BK.png)";

  // 獲取答案組合
  var result = "";
  for (var key in answers) {
    result += answers[key];
  }
  // 根據答案顯示結果圖片
  var resultImage = document.getElementById("resultImage");
  console.log(result);
  switch (result) {
    case "AAAA":
      resultImage.src = "result/15.png";
      document.getElementById('resultLink').href = 'goblinmodeison.html';
      break;
    case "AAAB":
      resultImage.src = "result/16.png";
      document.getElementById('resultLink').href = 'befamous.html';
      break;
    case "AABA":
      resultImage.src = "result/07.png";
      document.getElementById('resultLink').href = 'theseat.html';
      break;
    case "AABB":
      resultImage.src = "result/08.png";
      document.getElementById('resultLink').href = 'burialgrounds.html';
      break;
    case "ABAA":
      resultImage.src = "result/11.png";
      document.getElementById('resultLink').href = 'marywanna.html';
      break;
    case "ABAB":
      resultImage.src = "result/12.png";
      document.getElementById('resultLink').href = 'darkjokefromdarkspace.html';
      break;
    case "ABBA":
      resultImage.src = "result/09.png";
      document.getElementById('resultLink').href = 'karma.html';
      break;
    case "ABBB":
      resultImage.src = "result/02.png";
      document.getElementById('resultLink').href = 'thelittle.html';
      break;
    case "BAAA":
      resultImage.src = "result/13.png";
      document.getElementById('resultLink').href = 'weathermanager.html';
      break;
    case "BAAB":
      resultImage.src = "result/04.png";
      document.getElementById('resultLink').href = 'jianghusupper.html';
      break;
    case "BABA":
      resultImage.src = "result/14.png";
      document.getElementById('resultLink').href = 'thevergeofdesire.html';
      break;
    case "BABB":
      resultImage.src = "result/03.png";
      document.getElementById('resultLink').href = 'us.html';
      break;
    case "BBAA":
      resultImage.src = "result/01.png";
      document.getElementById('resultLink').href = 'theblinkingbullet.html';
      break;
    case "BBAB":
      resultImage.src = "result/06.png";
      document.getElementById('resultLink').href = 'yiiii.html';
      break;
    case "BBBA":
      resultImage.src = "result/10.png";
      document.getElementById('resultLink').href = 'waterform.html';
      break;
    case "BBBB":
      resultImage.src = "result/05.png";
      document.getElementById('resultLink').href = 'qiongqi.html';

      break;

    default:
      resultImage.src = "default_result_image.jpg";
  }
  // 顯示結果
  document.getElementById("result").style.display = "block";
}

// 開始時只顯示第一個問題
questions[currentQuestionIndex].style.display = "flex";
q[currentQuestionIndex].style.display = "block";
mainQ[currentQuestionIndex].style.display = "flex";

document.getElementById('nextButton').style.display = 'block';