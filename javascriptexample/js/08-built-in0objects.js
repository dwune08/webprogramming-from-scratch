// String 객체 - 이메일 주소 분석하기
const emailInput = document.getElementById('emailInput');
const emailButton = document.getElementById('emailButton');
const emailResult = document.getElementById('emailResult');

emailButton.addEventListener('click', function() {
    const email = emailInput.value.trim().toLowerCase();

    if (email === '') {
        alert('이메일 주소를 입력하세요.');
        emailInput.focus();
        return;
    }

    if (email.indexOf('@') === -1) {
        emailResult.textContent = '이메일 주소에는 @가 포함되어야 합니다.';
        emailInput.focus();
        return;
    }

    const emailParts = email.split('@');
    const userId = emailParts[0];
    const domain = emailParts[1];

    emailResult.innerHTML = `
        <p class="result-title">이메일 분석 결과</p>
        <p class="result-info"><strong>정리된 이메일:</strong> ${email}</p>
        <p class="result-info"><strong>아이디:</strong> ${userId}</p>
        <p class="result-info"><strong>도메인:</strong> ${domain}</p>
        <p class="result-info"><strong>전체 길이</strong> ${email.length}</p>
    `;
});


// 휴대폰 번호 가운데 자리 숨기기
const phoneButton = document.getElementById("phoneButton");
const phoneResult = document.getElementById("phoneResult");
const phoneInput = document.getElementById("phoneInput");

phoneButton.addEventListener("click", function() {
    phoneNumber = phoneInput.value.trim();
    

    if (phoneNumber === "") {
        alert("휴대폰 번호를 입력하세요.");
        phoneInput.focus();
        return;
    }

    if (phoneNumber.length !== 11) {
        alert("휴대폰 번호는 11자리의 숫자여야 합니다.");
        phoneInput.focus();
        return;
    }

    let phone = "";
    for (let i = 0; i < phoneNumber.length; i++) {
        if(i <= 2 || i >= 7) {
            phone += phoneNumber.charAt(i);
        } else {
            phone += "*";
        }
    }

    const phone1 = phoneNumber.substring(0, 3);
    const phone2 = phoneNumber.substring(7);

    phoneResult.innerHTML = `
        변환된 휴대폰 번호는<br>
        charAt 사용 : [ ${phone} ]<br>
        substring 사용 : [ ${phone1}-****-${phone2} ] 
    `;

    phoneInput.value = "";
});


// date 객체
const reservationDate = document.getElementById("reservationDate");
const reservationButton = document.getElementById("reservationButton");
const reservationResult = document.getElementById("reservationResult");

reservationButton.addEventListener('click', function() {
    const selectedValue = reservationDate.value;

    if (selectedValue === "") {
        alert("예약 날짜를 선택하세요.");
        reservationDate.focus();
        return;
    }

    const reserveDate = new Date(selectedValue);
    const receiveDate = new Date(reserveDate);

    receiveDate.setDate(reserveDate.getDate() + 7);

    reservationResult.innerHTML = `
        <p><strong>예약일:</strong> ${formatDate(reserveDate)}</p>
        <p><strong>수령일:</strong> ${formatDate(receiveDate)}</p>
    `;
});

function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
}


<<<<<<< HEAD
// Math 객체 - 오늘의 학습 주제 랜덤 추천
const studyTopics = ['String 객체', 'Date 객체', 'Math 객체', 'Array 객체', 'DOM 요소 접근', '이벤트 처리'];

const topicButton = document.getElementById('topicButton');
const topicResult = document.getElementById('topicResult');

topicButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * studyTopics.length);
    const selectedTopic = studyTopics[randomIndex];

    topicResult.innerHTML = `
        <p class="topic-result">오늘의 추천 주제: ${selectedTopic}</p>
        <p>랜덤 인덱스 번호: ${randomIndex}</p>
        `;
});

// 좌석 번호 랜덤 배정하기
const randomSeatButton = document.getElementById('randomSeatButton');
const randomSeatResult = document.getElementById('randomSeatResult');

randomSeatButton.addEventListener("click", function() {
    const randomseat = Math.floor(Math.random() * 30) + 1;

    randomSeatResult.innerHTML = `
        <p class="topic-result">배경된 좌석: ${randomseat}번</p>
        `;
});


// Array 객체
const members = [];

const memberInput = document.getElementById("memberInput");
const memberButton = document.getElementById("memberButton");
const memberCount = document.getElementById("memberCount");
const memberList = document.getElementById("memberList");
const memberText = document.getElementById("memberText");

function renderMemberList() {
    memberList.innerHTML = "";

    members.forEach(function(member) {
        memberList.innerHTML += `<li>${member}</li>`;
    });

    memberCount.textContent = `현재 참여자: ${members.length}명`;
    memberText.textContent = `참여자 명단: ${members.join(", ")}`;
}

memberButton.addEventListener("click", function() {
    const member = memberInput.value.trim();

    if (member === "") {
        alert("참여자 이름을 입력하세요.");
        memberInput.focus();
        return;
    }

    members.push(member);

    memberInput.value = "";
    memberInput.focus();

    renderMemberList();
});



// 상품 목록 관리하기




// 일정 시간 후 알림창 출력하기
const alertButton = document.getElementById("alertButton");

/*
alertButton.addEventListener("click", function() {
    setTimeout(function() {
        alert("3초 후 알림창");
    }, 3000);
});
*/

// 중복 클릭 방지 */
alertButton.addEventListener("click", function() {
    alertButton.disabled = true;
    alertButton.textContent = "3초 후 알림창 표시 예정";

    setTimeout(function() {
        alert("3초 후 알림창");

        alertButton.disabled = false;
        alertButton.textContent = "버튼 클릭";
    }, 3000);
});


// 실시간 시계 동작하기
const clockResult = document.getElementById("clockResult");
const startClock = document.getElementById("startClock");
const stopClock = document.getElementById("stopClock");

let clockTimer = null;

startClock.addEventListener("click", function() {
    if (clockTimer !== null) {
        return;
    }

    clockTimer = setInterval(function() {
        const today = new Date();
        clockResult.textContent = today.toLocaleTimeString();
    }, 1000);
});

stopClock.addEventListener('click', function() {
    if (clockTimer === null) {
        return;
    }

    clearInterval(clockTimer);
    clockTimer = null;
});


// 페이지 이동하기
const noticeButton = document.getElementById("noticeButton");

noticeButton.addEventListener("click", function() {
    location.href = "03-element.html";
});


// 썸네일 이미지 선택하기
const thumbnail = document.querySelectorAll(".thumbnail");
const picture = document.getElementById("picture");

thumbnail.forEach(function(item) {
    item.addEventListener("click", function() {
        const selectedthumbnail = item.src;
        picture.src = selectedthumbnail;
    });
});


// 1초 간격으로 새로운 이미지 보여주기
const bears = ["../image/bear-doll.png",
               "../image/bear-heart.png",
               "../image/bear-moon.png"];
const changeImage = document.getElementById("changeImage");
let i = 0;
setInterval(function() {
    i = (i+1)%3;
    changeImage.src = bears[i];
}, 1000);


// 인증번호 생성하기
const certifrcationNumber = document.getElementById("certifrcationNumber");
const f5 = document.getElementById("f5");
const noticeNumber = document.getElementById("noticeNumber");

certifrcationNumber.addEventListener("click", function() {
    const number = Math.floor(Math.random()*100000);
    noticeNumber.textContent = String(number).padStart(5,"0");
});
f5.addEventListener("click", function() {
    noticeNumber.textContent = '00000';
})


// 강의 신청 양식
const applications = [];
const of = ["온라인", "오프라인"]

const studentName = document.getElementById("studentName");
const courseName = document.getElementById("courseName");

const courseForm = document.getElementById("courseForm");
const applicationResult = document.getElementById("applicationResult");
courseForm.addEventListener("submit",function() {
    event.preventDefault();

    name = studentName.value.trim();
    course = courseName.value.trim();
    const onoff = document.querySelector('input[name="onoff"]:checked')

    const application = {
        name:name,
        course:course,
        onoff:onoff.value
    };

    applications.push(application);

    let html = `
    <table class="data-table">
        <tr>
            <th>이름</th>
            <th>강의명</th>
            <th>수강 형태</th>
        </tr>
    `;

    applications.forEach(function(application) {
        html += `
            <tr>
                <td>${application.name}</td>
                <td>${application.course}</td>
                <td>${application.onoff}</td>
            </tr>
        `;
    });
    
    html += `
        </table>
    `;

    applicationResult.innerHTML = html;
});
=======
const topicButton = document.getElementById("topicButton");
const topicResult = document.getElementById("topicResult");
>>>>>>> a54e0449099027c29b2f79d4bdf0aa2e7fd9d431
