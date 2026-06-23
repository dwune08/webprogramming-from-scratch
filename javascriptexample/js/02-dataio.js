function showAlert() {
    alert('alert() 메서드로 출력한 알림창입니다.');
}

function showConsole() {
    const names = ['홍길동', '김철수', '이희진'];

    console.log('일반 메시지 출력', names);
    console.table(names);
    console.warn('경고 메시지 예시');
    console.error('에러 메시지 예시');

    document.querySelector('#consoleResult').textContent =
        '콘솔 출력은 브라우저 개발자 도구의 Console 탭에서 확인할 수 있다.';
}

function documentWriteExample() {
    document.write('<h1>documentwrite() 실행결과</h1>');
    document.write('<p>문서 로딩이 끝난 뒤 document.wirte()를 실행하면 기존 화면이 지워질 수 있다.</p>');
    document.write('<button onclick="location.reload()">원래 화면으로 돌아가기</button>');
}

function getTextContent() {
    const textSample = document.querySelector('#textSample');
    document.querySelector('#textResult').textContent = textSample.textContent;
}

function setTextContent() {
    document.querySelector('#textSample').textContent = 'textContent로 <strong>변경한 내용</strong>입니다.';
}

function getInnerHTML() {
    const htmlSample = document.querySelector('#htmlSample');
    document.querySelector('#htmlResult').textContent = htmlSample.innerHTML;
}

function setInnerHTML() {
    document.querySelector('#htmlSample').innerHTML = '<strong>innerHTML</strong>로 변경된 내용입니다.<br>태그가 실제 HTML로 해석된다.';
}

function printTitle() {
    const title = document.querySelector('#titleResult');

    title.innerHTML = 'Hello JavaScript!';
    /*title.style.color = 'orange';
    title.style.border = '1px solid #000';
    title.style.borderRadius = '10px';
    title.style.backgroundColor = '#555';
    title.style.padding = '10px';
    title.style.width = 'fit-content';*/

    title.classList.add("resultStyle");
}

// 예제 1 함수 선언 및 정의

function showStudyMessage() {
    const showStudyMessage = document.querySelector('#studyMessage');
    showStudyMessage.textContent = '오늘은 textContent와 innerHTML의 차이를 학습합니다.';
}



// 예제 2 함수 선언 및 정의

function showNotice() {
    const noticeArea = document.querySelector('#noticeArea');
    noticeArea.innerHTML = `
        <strong>수업 공지사항</strong>
        <ul>
            <li>실습 파일을 먼저 실행해 주세요.</li>
            <li>버튼을 클릭한 후 화면 변화를 확인해 주세요.</li>
            <li>textContent와 innerHTML의 차이를 비교해 주세요.</li>
        </ul>
    `;
}


function confirmColor() {
    const confirmButton = document.querySelector('#confirmButton');

    if(confirm('버튼 배경색을 오랜지색으로 바꾸시겠습니까?')) {
        confirmButton.style.backgroundColor = 'orange';
        confirmButton.textContent = '확인을 선택했습니다.';
    } else {
        confirmButton.style.backgroundColor = 'green';
        confirmButton.textContent = '취소를 선택했습니다.';
    }
}

function promptUserInfo() {
    const name = prompt('당신의 이름은 무엇입니까?', '홍길동');
    const age = prompt('당신의 나이는 몇 살입니까?', '30');
    const result = document.querySelector('#promptResult1');

    if(name !== null && name.trim() !== '' && age !== null && age.trimEnd() !== '') {
        result.innerHTML = `<strong>${age}살 ${name}님, 반갑습니다.</strong>`;
    } else {
        result.textContent = '이름과 나이를 모두 입력해야 결과가 출력된다.'
    }
}

function promptName() {
    const input = prompt('이름을 입력해 주세요.', '');
    const result = document.querySelector('#promptResult2');

    if(input !== null && input.trim() !== '') {
        result.textContent = `${input}님 환영합니다.`;
    } else {
        result.textContent = '이름을 입력하지 않았습니다.';
    }
}

function printInputValue() {
    const idInput = document.querySelector('#userId');
    const passwordInput = document.querySelector('#userPwd');
    const result = document.querySelector('#inputResult');

    const id = idInput.value.trim();
    const password = passwordInput.value.trim();

    if (id !== '' && password !== '') {
    result.value = `${id}, ${password}`;
    } else {
    result.value = '아이디와 비밀번호를 다시 확인해 주세요.';
    }
    idInput.value = '';
    passwordInput.value = '';
    idInput.focus();
}

// 예제 3 함수 선언 및 정의

function changeInputValue() {
    const number1 = document.querySelector('#number1');
    const number2 = document.querySelector('#number2');
    const temp = number1.value
    number1.value = number2.value;
    number2.value = temp;    
}


const nameButton = document.querySelector('#nameButton');
nameButton.addEventListener('click', function() {
    const name = document.querySelector('#nameInput').value.trim();
    const result = document.querySelector('#namePrint');

    result.textContent = name !== '' ? `${name}님 반갑습니다.` : '이름을 입력해 주세요.';
});


const templateButton = document.querySelector('#templateButton');
const templateResult = document.querySelector('#templateResult');
templateButton.addEventListener('click', function() {
    const myName = '홍길동';
    const age = 25;
    const height = 178.5;

    const stringData = 'My name is ' + myName + ', My age is ' + age + ', My height is ' + height;

    templateResult.innerHTML = `
        <p><strong>문자열 연결 방식</strong></p>
        <p>${stringData}</p>

        <p><strong>템플릿 연결 방식</strong></p>
        <p>My name is ${myName}, My age is ${age}, My height is ${height}</p>

        <p><strong>여러 줄 템플릿 문자열</strong></p>
        <p>
            My name is ${myName}<br>
            My age is ${age}<br>
            My height is ${height}
        </p>
    `;
});