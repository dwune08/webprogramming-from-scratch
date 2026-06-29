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
const itemInfoList = [];

const itemButton = document.getElementById("itemButton");
const itemResult = document.getElementById("itemResult");
const itemInput = document.getElementById("itemInput");
const priceInput = document.getElementById("priceInput");

function renderItemInfoList() {
    itemResult.innerHTML = '';

    let html = `
        <table class="data-table">
            <tr>
                <th>상품명</th>
                <th>가격</th>
            </tr>
    `;

    itemInfoList.forEach(function(itemInfo) {
        html += `
            <tr>
                <td>${itemInfo.item}</td>
                <td>${itemInfo.price}</td>
            </tr>
        `;
    });

    html += `
        </table> 
    `;

    itemResult.innerHTML = html;
}

itemButton.addEventListener("click", function() {
    const item = itemInput.value.trim();
    const price = priceInput.value.trim();

    if (item === "") {
        alert("상품명을 입력하세요.");
        itemInput.focus();
        return;
    }
    if (price === "") {
        alert("상품 가격을 입력하세요.");
        priceInput.focus();
        return;
    }

    const itemInfo = {
        item: item,
        price: price
    }

    itemInfoList.push(itemInfo);

    itemInput.value = "";
    priceInput.value = "";

    renderItemInfoList();
});




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

const reservationSheets = [];
const counselForm = document.getElementById("counselForm");
const counselReserveResult = document.getElementById("counselReserveResult");
const counseleeName = document.getElementById("counseleeName");
const counselDate = document.getElementById("counselDate");
const counselPart = document.getElementById("counselPart");
const counselDetail = document.getElementById("counselDetail");


counselForm.addEventListener("submit",function() {
    event.preventDefault();

    name = counseleeName.value.trim();
    date = counselDate.value;
    part = counselPart.value.trim();
    detail = counselDetail.value.trim();
    
    const reservationSheet = {
        name: name,
        date: date,
        part: part,
        detail: detail
    };

    if(name === "" || date === "" || part === "") {
        counselReserveResult.textContent = '이름, 상담 날짜, 상담 분야를 모두 입력해주세요.';
        return;
    }

    reservationSheets.push(reservationSheet);

    counselReserveResult.textContent = '';

    reservationSheets.forEach(function(reservationSheet) {
        counselReserveResult.innerHTML += `
            ${reservationSheet.name} 님은 ${reservationSheet.date}에 ${reservationSheet.part} 예약이 있습니다.<br>
            상담 내용: ${reservationSheet.detail}<br>
        `;
    });
    counseleeName.value = '';
    counselDate.value = '';
    counselPart.value = '';
    counselDetail.value = '';
});

const orderButton = document.getElementById("orderButton");
const resetButton = document.getElementById("resetButton");
const orderResult = document.getElementById("orderResult");

// 각 메뉴의 데이터를 배열로 관리
const drinks = [
    {
        name: "아메리카노",
        price: 3000,
        quantity: document.getElementById("quantityOfAmericano"),
        total: document.getElementById("totalPriceOfAmericano")
    },
    {
        name: "카페라떼",
        price: 4000,
        quantity: document.getElementById("quantityOfCaffelatte"),
        total: document.getElementById("totalPriceOfCaffelatte")
    },
    {
        name: "딸기스무디",
        price: 5500,
        quantity: document.getElementById("quantityOfStrawberry"),
        total: document.getElementById("totalPriceOfStrawberry")
    },
];

const totalQuantity = document.getElementById("totalQuantity");
const totalPrice = document.getElementById("totalPrice");

// 1. 개별 품목 합계 및 전체 총합계를 한 번에 계산하는 통합 함수 정의
function calculateAll() {
    let currentTotalQty = 0;
    let currentTotalPrice = 0;

    drinks.forEach(function(drink) {
        const count = Number(drink.quantity.value.trim()) || 0;
        const itemTotal = drink.price * count;

        // 각 품목 합계 input에 반영
        drink.total.value = itemTotal;

        // 전체 총합계 누적
        currentTotalQty += count;
        currentTotalPrice += itemTotal;
    });

    // 화면의 총합계 영역에 최종 반영
    totalQuantity.value = currentTotalQty;
    totalPrice.value = currentTotalPrice;
}

// 2. 클래스가 .inputQuantity인 모든 입력창에 이벤트 리스너 등록
// 괄호 없이 함수 이름(calculateAll)만 전달하여 입력할 때마다 실행되도록 합니다.
const inputQuantities = document.querySelectorAll(".inputQuantity");
inputQuantities.forEach(function(inputElement) {
    inputElement.addEventListener("input", calculateAll);
});

// 3. 초기화 버튼
resetButton.addEventListener("click", function() {
    drinks.forEach(function(drink) {
        drink.quantity.value = ""; // 빈 칸으로 세팅하거나 0으로 세팅
    });
    calculateAll(); // 다 비운 상태에서 계산 함수를 한 번 호출해 0으로 갱신
    orderResult.textContent = '주문서가 이곳에 출력된다.';
});

// 4. 주문서 출력 버튼
orderButton.addEventListener("click", function() {
    // 주문서 양식 출력 (배열을 활용해 동적으로 문자열을 생성할 수도 있지만 기존 포맷 유지)
    orderResult.innerHTML = `
        -------------------<br>
        아메리카노 : ${drinks[0].quantity.value || 0} 잔<br>
        카페라떼 : ${drinks[1].quantity.value || 0} 잔<br>
        딸기스무디 : ${drinks[2].quantity.value || 0} 잔<br>
        -------------------<br>
        총 주문 수량 : ${totalQuantity.value} 잔<br>
        총 결제 금액 : ${totalPrice.value} 원<br>
        -------------------
    `;
    
    // 출력 후 입력값 초기화
    drinks.forEach(function(drink) {
        drink.quantity.value = "";
    });
    calculateAll();
});




