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