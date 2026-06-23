function accessId() {
    const box = document.getElementById('box');

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    box.style.backgroundColor = randomColor;
    box.textContent = `현재 배경색: ${randomColor}`;
}

function accessClass() {
    const divList = document.getElementsByClassName('classBox');
    const colors = ['pink', 'tomato', 'skyblue'];
    const texts = ['첫 번째 요소', '두 번째 요소', '세 번째 요소'];

    for (let i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = colors[i];
        divList[i].textContent = texts[i];
    }
}

function accessTagName() {
    const liList = document.getElementsByTagName('li');

    for (let i = 0; i < liList.length; i++) {
        const number = Number(liList[i].textContent);
        console.log(number);
        liList[i].style.backgroundColor = `rgb(130, 220, ${50 * number})`;
    }
}

function accessName() {
    const hobbyList = document.getElementsByName('hobby');
    const selected = [];

    for (let i = 0; i < hobbyList.length; i++) {
        if (hobbyList[i].checked) {
            selected.push(hobbyList[i].value);
        }
    }

    const result = document.getElementById('nameDiv');

    if (selected.length > 0) {
        result.innerHTML = `선택한 취미: ${selected.join(', ')}<br>선택된 개수: ${selected.length}`;
    } else {
        result.textContent = '선택된 항목이 없습니다.';
    }
}

function selectFirstMenu() {
    const firstMenu = document.querySelector('.menu-item');
    const selectorResult = document.querySelector('#selectorResult');

    firstMenu.style.backgroundColor = 'gold';
    firstMenu.style.fontweight = 'bold';

    selectorResult.textContent = 'querySelector()는 조건에 맞는 첫 번째 요소만 선택한다.'
}

function selectAllMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const selectorResult = document.querySelector('#selectorResult');

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = 'lightblue';
        menuItems[i].style.fontweight = 'bold';
    }
    selectorResult.textContent = 'querySelectorAll()은 조건에 맞는 모든 요소를 선택한다.';
}

function resetMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const menuResult = document.querySelector('#selectorResult');

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = 'white';
        menuItems[i].style.fontweight = 'normal';
    }
    menuResult.textContent = '결과가 이곳에 출력된다.';
}

function inputTest() {
    const input = document.getElementById('inputTest');
    const result = document.getElementById('inputTestResult');

    result.textContent = input.value.trim() !== ''
        ? `입력한 값: ${input.value}`
        : '입력된 값이 없습니다.';

    input.focus();
}

function addMemo() {
    const memoInput = document.querySelector('#memoInput');
    const memoList = document.querySelector('#memoList');
    const memoText = memoInput.value.trim();

    if (memoText.length === 0) {
        memoInput.focus();
        return;
    }

    const emptyMessage = document.querySelector('.empty-message');

    if(emptyMessage !== null) {
        emptyMessage.remove();
    }

    memoList.innerHTML += `<p class="memo-item">${memoText}</p>`;
    memoInput.value = '';
    memoInput.focus();
}

function clearMemo() {
    const memoInput = document.querySelector('#memoInput');
    const memoList = document.querySelector('#memoList');

    memoList.innerHTML = '<p class="empty-message">작성한 메모가 이곳에 추가된다.</p>';
    memoInput.value = '';
    memoInput.focus();
}

function addMemoEnter(event) {
    if (event.key === 'Enter') {
        addMemo();
    }
}

function readValue() {
    const bg = document.getElementById('chattingBg');
    const input = document.getElementById('chattingInput');
    const message = input.value.trim();

    if(message.length === 0) {
        input.focus();
        return;
    }

    bg.innerHTML += `<p><span>${message}</span></p>`;
    bg.scrollTop = bg.scrollHeight;

    input.value = '';
    input.focus();
}

function inputEnter(event) {
    if (event.key === 'Enter') {
        readValue();
    }
}

function changeProfile() {
    const name = document.getElementById('profileName');
    const job = document.getElementById('profileJob');
    const intro = document.getElementById('profileIntro');

    name.textContent = '한진형';
    job.textContent = '구직중';
    intro.textContent = '웹프로그래밍을 배우는 중 입니다.';
}

function highlightAllMenu() {
    const menu = document.getElementsByClassName('menu');

    for (let i = 0; i < menu.length; i++) {
        menu[i].style.backgroundColor = 'blue';
        menu[i].style.fontweight = 'bold';
        menu[i].style.color = 'white';
    }
}

function hightlightFirstMenu() {
    const menu = document.getElementsByClassName('menu');

    menu[0].style.backgroundColor = 'yellow';
    menu[0].style.fontweight = 'bold';
    menu[0].style.color = 'black';
}

function numberingFruit() {
    const fruits = document.getElementById('fruitList');
    fruits.style.listStyle = 'number';
}

function printSubject() {
    const subjectList = document.getElementsByName('subject');
    const result = document.getElementById('subjectResult');
    let checked = '';
    for (let i = 0; i < subjectList.length; i++) {
        if (subjectList[i].checked) {
            checked = i;
            break;
        }
    }
    if(checked !== '') {
        result.innerHTML = `선택한 과목: ${subjectList[checked].value}`;
    } else {
        result.innerHTML = '과목이 선택되지 않았습니다.';
    }
    
    
}

/*




*/