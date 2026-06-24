// 함수 선언문
function showMessage() {
    document.querySelector('#messageResult').textContent = 'showMessage() 함수가 호출되었습니다.';
}

function clickCount(btn) {
    const count = Number(btn.textContent);

    btn.textContent = count +1;
}


// 성적 구하기 예제

function score(kor, eng, math) {
   
    if (kor === '' || eng === '' || math === '') {
        alert('모든 과목의 점수를 입력해주세요.');
        return;
    }

    if (isNaN(Number(kor)) || isNaN(Number(eng)) || isNaN(Number(math))) {
        alert('모든 과목 점수에 숫자를 입력해주세요.');
        return;
    }

    const total = Number(kor) + Number(eng) + Number(math);
    const avg = total/3;

    document.getElementById('totalScore').value = total;
    document.getElementById('averageScore').value = avg;

    document.getElementById('grade').value = gradeJudge(avg);
}

// 학점 구하기
function gradeJudge(avg) {
    const judge = Math.floor(avg/10);
    switch(judge) {
        case 10 : 
        case 9: return 'A';
        case 8: return 'B';
        case 7: return 'C';
        case 6: return 'D';
        default : return 'F';
    }
}

//함수 표현식

const expressionButton = document.querySelector('#expressionButton');
const expressionResult = document.querySelector('#expressionResult');

const printExpressionMessage = function() {
    expressionResult.textContent = '익명 함수를 변수에 저장한 뒤 이벤트에서 호출하였다.';
}

expressionButton.addEventListener('click', printExpressionMessage);

const greetingButton = document.querySelector('#greetingButton');
const greetingResult = document.querySelector('#greetingResult');

const makeGreeting = function(name) {
    return `${name}님, 자바스크립트 함수 표현식을 학습 중입니다.`;
};

greetingButton.addEventListener('click', function() {
    const userName = document.querySelector('#userName').value.trim();

    if (userName.length === 0) {
        greetingResult.textContent = '이름을 입력하세요.';
        return;
    }

    greetingResult.textContent = makeGreeting(userName);
});


// 점수를 입력받아 합격 여부 확인

const pnpButton = document.querySelector('#pnpButton');
const pnpResult = document.querySelector('#pnpResult');

const checkPass = function(score) {
    if(score >= 60) {
        return '합격';
    } else {
        return '불합격';
    }
}

pnpButton.addEventListener('click', function() {
    const scoreInput = document.getElementById('score2');
    const scoreValue = scoreInput.value.trim();

    if(scoreValue === '') {
        pnpResult.textContent = '점수를 입력하세요.'
        scoreInput.focus();
        return;
    }

    const score = Number(scoreValue);

    if (isNaN(score)) {
        pnpResult.textContent = '점수를 숫자로 입력하세요.'
        scoreInput.focus();
        return;
    }

    const result = checkPass(score);
    pnpResult.textContent = `입력한 점수는 ${score}점이고, 결과는 ${result}입니다.`;
});

// 즉시 실행 함수
let immediateMessage = '';

(function() {
    const now = new Date();
    immediateMessage = `즉시 실행 함수가 ${now.toLocaleTimeString()}에 실행되었습니다.`;
    console.log(immediateMessage);
})();

function showImmediateResult() {
    document.querySelector('#immediateResult').textContent = immediateMessage;
}


// 화살표 함수
const arrowButton = document.querySelector('#arrowButton');
const thisButton = document.querySelector('#thisButton');
const arrowResult = document.querySelector('#arrowResult');

const multiply = (num1, num2) => num1 * num2;

arrowButton.addEventListener('click', () => {
    arrowResult.textContent = `화살표 함수 계산 결과: 5 x 4 = ${multiply(5, 4)}`;
});

/*
thisButton.addEventListener('click', function(event) {
    this.style.backgroundColor = 'pink';
    event.target.style.color = 'white';
    arrowResult.textContent = '일반 함수에서 this는 이벤트가 발생한 요소를 가리킨다.';
}); 
*/
/*
thisButton.addEventListener('click', (event) => {
    this.style.backgroundColor = 'pink';
    event.target.style.color = 'white';
    arrowResult.textContent = '일반 함수에서 this는 이벤트가 발생한 요소를 가리킨다.';
});
*/
// 저렇게 쓸 수 없는 이유, 화살표 함수에서는 this를 쓸 수 없다.
thisButton.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'pink';
    event.target.style.color = 'white';
    arrowResult.textContent = '일반 함수에서 this는 이벤트가 발생한 요소를 가리킨다.';
});


const passScoreButton = document.querySelector('#passScoreButton');
const passScoreResult = document.querySelector('#passScoreResult');

passScoreButton.addEventListener('click', () => {
    const scores = [95, 52, 80, 45, 70];

    // filter() 안에서 화살표 함수 사용
    const passScore = scores.filter(score => score >= 60);

    passScoreResult.textContent = `합격 점수: ${passScore.join(', ')}`;
});


// 입력한 글자 수 확인하기
const textLengthButton = document.querySelector('#textLengthButton');
const textLengthResult = document.querySelector('#textLengthResult');

textLengthButton.addEventListener('click', () => {
    const textInput = document.querySelector('#textInput');
    text = textInput.value;
    textNoSpace = text.replace(/\s/g, '');
    textLengthResult.innerHTML = `입력한 글자 수(공백포함) = ${text.length}<br>입력한 글자 수(공백 미포함) = ${textNoSpace.length}`;
});


// 함수 활용 예제
const colorButton = document.querySelector('#colorButton');
const colorResult = document.querySelector('#colorResult');

colorButton.addEventListener('click', () => {
    const colorSelect = document.querySelector('#colorSelect');
    colorResult.style.color = colorSelect.value;
});


const sum = function(number1, number2, callback) {
    const result = number1 + number2;
    callback(result);
    return result;
}
const runCallBack = document.getElementById('runCallBack');
const callBackResult = document.getElementById('callBackResult');

runCallBack.addEventListener('click', function() {
    const callBackResult = document.getElementById('callBackResult');

    sum(10, 20, function(result) {
        callBackResult.textContent = '콜백 함수 실행 결과: ' + result;
    });
});