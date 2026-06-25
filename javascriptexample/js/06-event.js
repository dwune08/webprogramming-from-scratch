// 인라인 이벤트 모델

function inlineEventTest(button) {
    button.style.backgroundColor = 'pink';
    button.style.color = 'white';
    document.querySelector('#inlineResult').textContent = '인라인 이벤트 모델로 버튼 클릭 이벤트를 처리하였다.';
}

// h1 ~ h6 태그로 Hello JavaScript를 출력

function printTitle(button) {
    const printTitleResult = document.getElementById('printTitleResult');
    
    printTitleResult.innerHTML = '';

    for (let i = 1; i <= 6; i++) {
        printTitleResult.innerHTML += `<h${i}>Hello JavaScript</h${i}>`;
    }
}

const classicButton = document.querySelector('#classicButton');
const removeClassicButton = document.querySelector('#removeClassicButton');
const classicResult = document.querySelector('#classicResult');

classicButton.onclick = function() {
    classicResult.textContent = '고전 이벤트 모델로 클릭 이벤트를 처리하였다.';
    classicResult.style.color = 'blue';
};

removeClassicButton.onclick = function() {
    classicButton.onclick = null;
    classicResult.textContent = 'classicButton의 onclick 이벤트를 제거하였다.';
    classicResult.style.color = '#222';
};

const standardButton = document.querySelector('#standardButton');
const standardBox = document.querySelector('#standardBox');

standardButton.addEventListener('click', function() {
    standardBox.textContent = '첫 번째 이벤트 핸들러가 실행되었다.';
});

standardButton.addEventListener('click', function() {
    console.log(standardBox.offestWidth);

    standardBox.style.width = `${standardBox.clientWidth + 20}px`;
    standardBox.style.height = `${standardBox.clientHeight + 10}px`;
});

const colorButtons = document.querySelectorAll('.color-button');
const colorResult = document.querySelector('#colorResult');

colorButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const color = event.target.dataset.color;
        colorResult.style.backgroundColor = color;
        colorResult.textContent = `event.target으로 클릭한 버튼의 색상값 ${color}을 가져왔다.`;
    });
});


// 이벤트 예제
// 좋아요 수 증가하기
const like = document.querySelector('#like');
const likeNum = document.querySelector('#likeNum');

like.addEventListener('click', function(event) {
    const count = Number(likeNum.textContent);
    likeNum.textContent = count +1;
})

// 이미지 번갈아 보기
const imageScreen = document.querySelector('#imageScreen');
const imageSwapButton = document.querySelector('#imageSwapButton');
const imageResult = document.querySelector('#imageResult');
const animalKor = ['고양이', '강아지'];
const animalEng = ['cat', 'dog'];

imageSwapButton.addEventListener('click', function(event) {
    const num = imageResult.textContent === '고양이'
        ? 1
        : 0;
    imageScreen.src = `../image/${animalEng[num]}.png`;
    imageResult.textContent = `${animalKor[num]}`;
});


// 실시간 글자수 세기
const text = document.querySelector('#textInputBox');
const result = document.querySelector('#textCountResult');

text.addEventListener('input', function(event) {
    result.textContent = `${(text.value).length}`;
});


// 카드 뒤집기
const card = document.querySelector('#cardFlip');
const cardResult = document.querySelector('#cardFlipResult');
card.addEventListener('mouseover', function(event) {
    card.textContent = '정답 : 오락가락';
    cardResult.textContent = 'mouseover 이벤트가 실행되었습니다.';
});
card.addEventListener('mouseout', function(event) {
    card.textContent = '게임 BGM을 4글자로 줄이면';
    cardResult.textContent = '카드에 마우스를 올려 보세요.';
});


// 테마 선택하기
const themeSelect = document.querySelector('#themeSelect');
const themeResult = document.querySelector('#themeResult');

themeSelect.addEventListener('change', function(event) {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    const theme = themeSelect.value;

    themeResult.classList.remove('dark', 'green', 'bright');
    themeResult.classList.add(`${theme}`);
    
    themeResult.textContent = `${selectedText}가 적용되었습니다.`;
});

const textInput = document.querySelector('#textInput');
const inputResult = document.querySelector('#inputResult');

textInput.addEventListener('input', function(event) {
    inputResult.textContent = event.target.value !== ''
        ? `입력 중: ${event.target.value}`
        : '입력한 내용이 이곳에 표시된다.';
});

const joinForm = document.querySelector('#joinForm');
const userName = document.querySelector('#userName');
const formResult = document.querySelector('#formResult');

joinForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = userName.value.trim();
    formResult.textContent = name !== ''
        ? `${name}님, 폼 제출 이벤트가 처리되었습니다.`
        : '이름을 입력해 주세요.';

    userName.focus();
})

const goNaver = document.querySelector('#goNaver');

goNaver.addEventListener('click', function(evnet) {
    event.preventDefault();
    alert('preventDefault()로 링크의 기본 이동을 막았습니다.');
});