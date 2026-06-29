// 공통 정규 표현식
const nameRegExp = /^[가-힣]{2,5}$/;
const idRegExp = /^[A-Za-z][A-Za-z0-9]{4,7}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegExp = /^010-\d{4}-\d{4}$/;

// 공통 함수
function printMessage(element, message, isConfirm) {
    element.textContent = message;
    element.className = isConfirm ? "message-text confirm" : "message-text error";
}

// test()와 exec() 확인하기
const checkRegExpButton = document.getElementById("checkRegExpButton");
const regExpResult = document.getElementById("regExpResult");

checkRegExpButton.addEventListener("click", function() {
    const regExp = /JavaScript/;
    const text = "JavaScript 기초 수업입니다.";
    
    const testResult = regExp.test(text);
    const execResult = regExp.exec(text);

    regExpResult.innerHTML = `
        <p><strong>검사 문자열:</strong> ${text}</p>
        <p><strong>정규 표현식:</strong> /JavaScript/</p>
        <p><strong>test() 결과:</strong> ${testResult}</p>
        <p><strong>exec() 결과:</strong> ${execResult === null ? "null" : execResult[0]}</p>
    `;
})


// 이름 유효성 검사
const userName = document.getElementById("userName");
const nameCheckButton = document.getElementById("nameCheckButton");
const nameResult = document.getElementById("nameResult");

nameCheckButton.addEventListener("click", function() {
    const name = userName.value.trim();

    if (name === "") {
        printMessage(nameResult, "이름을 입력하세요.", false);
        userName.focus();
        return;
    } 
    if (nameRegExp.test(name)) {
        printMessage(nameResult, "사용 가능한 이름입니다.", true);
    } else {
        printMessage(nameResult, "이름은 한글 2~5글자로 입력해야 합니다.", false);
        userName.focus();
    }
});


// 아이디 유효성 검사
const userId = document.getElementById("userId");
const idCheckButton = document.getElementById("idCheckButton");
const idResult = document.getElementById("idResult");

idCheckButton.addEventListener("click", function() {
    const id = userId.value.trim();

    if (id === "") {
        printMessage(idResult, "아이디를 입력하세요.", false);
        userId.focus();
        return;
    }

    if (idRegExp.test(id)) {
        printMessage(idResult, "사용 가능한 아이디입니다.", true);
    } else {
        printMessage(idResult, "아이디는 영문자로 시작하고, 영문자와 숫자만 사용하여 5~8글자로 입력해야 합니다.", false);
        userId.focus();
    }
});



// 비밀번호 유효성 검사
const userPassword = document.getElementById("userPassword");
const passwordCheckButton = document.getElementById("passwordCheckButton");
const passwordResult = document.getElementById("passwordResult");

passwordCheckButton.addEventListener("click", function() {
    const password = userPassword.value.trim();

    if (password === "") {
        printMessage(passwordResult, "비밀번호를 입력하세요.", false);
        userPassword.focus();
        return;
    }

    if (passwordRegExp.test(password)) {
        printMessage(passwordResult, "사용 가능한 비밀번호입니다.", true);
    } else {
        printMessage(passwordResult, "비밀번호는 영문자, 숫자, 특수문자를 각각 하나 이상 포함하여 6~10글자로 입력해야 합니다.", false);
        userPassword.focus();
    }
});


// 이메일 검사
const emailInput = document.getElementById("emailInput");
const emailCheckButton = document.getElementById("emailCheckButton");
const emailResult = document.getElementById("emailResult");

emailCheckButton.addEventListener("click", function() {
    const email = emailInput.value.trim();

    if (email === "") {
        printMessage(emailResult, "이메일을 입력하세요.", false);
        emailInput.focus();
        return;
    }

    if (emailRegExp.test(email)) {
        printMessage(emailResult, "올바른 이메일 형식입니다.", true);
    } else {
        printMessage(emailResult, "이메일은 아이디@도메인 형식으로 입력해야 합니다.", false);
        emailInput.focus();
    }
});


// 휴대폰 번호 검사
const phoneInput = document.getElementById("phoneInput");
const phoneCheckButton = document.getElementById("phoneCheckButton");
const phoneResult = document.getElementById("phoneResult");

phoneCheckButton.addEventListener("click", function() {
    const phone = phoneInput.value.trim();

    if (phone === "") {
        printMessage(phoneResult, "휴대폰 번호를 입력하세요.", false);
        phoneInput.focus();
        return;
    }

    if (phoneRegExp.test(phone)) {
        printMessage(phoneResult, "올바른 휴대폰 번호 형식입니다.", true);
    } else {
        printMessage(phoneResult, "휴대폰 번호는 010-0000-0000 형식으로 입력해야 합니다.", false);
        phoneInput.focus();
    }
});



// 회원가입 form
/*
const joinCheckButton = document.getElementById("joinCheckButton");
const resetButton = document.getElementById("resetButton");
const checkInput = document.querySelectorAll("#joinInput input");
const joinResult = document.getElementById("joinResult");


const joinName = document.getElementById("joinName");
const joinId = document.getElementById("joinId");
const joinPassword = document.getElementById("joinPassword");
const joinEmail = document.getElementById("joinEmail");
const joinPhone = document.getElementById("joinPhone");

const checkName = document.getElementById("checkName");
const checkId = document.getElementById("checkId");
const checkPassword = document.getElementById("checkPassword");
const checkEmail = document.getElementById("checkEmail");
const checkPhone = document.getElementById("checkPhone");

let checkAll = 2;

checkInput.forEach(function(input) {
    input.addEventListener("input", function() {
    
        const name = joinName.value.trim();
        const id = joinId.value.trim();
        const password = joinPassword.value.trim();
        const email = joinEmail.value.trim();
        const phone = joinPhone.value.trim();

        if (nameRegExp.test(name)) {
            printMessage(checkName, "사용 가능한 이름입니다.", true);
            checkAll = 0;
        } else {
            printMessage(checkName, "이름은 한글 2~5글자로 입력해야 합니다.", false);
            checkAll = 1;
        }
        if (idRegExp.test(id)) {
            printMessage(checkId, "사용 가능한 아이디입니다.", true);
            checkAll = 0;
        } else {
            printMessage(checkId, "아이디는 영문자로 시작하고, 영문자와 숫자만 사용하여 5~8글자로 입력해야 합니다.", false);
            checkAll = 1;
        }
        if (passwordRegExp.test(password)) {
            printMessage(checkPassword, "사용 가능한 비밀번호입니다.", true);
            checkAll = 0;
        } else {
            printMessage(checkPassword, "비밀번호는 영문자, 숫자, 특수문자를 각각 하나 이상 포함하여 6~10글자로 입력해야 합니다.", false);
            checkAll = 1;
        }
        if (emailRegExp.test(email)) {
            printMessage(checkEmail, "올바른 이메일 형식입니다.", true);
            checkAll = 0;
        } else {
            printMessage(checkEmail, "이메일은 아이디@도메인 형식으로 입력해야 합니다.", false);
            checkAll = 1;
        }
        if (phoneRegExp.test(phone)) {
            printMessage(checkPhone, "올바른 휴대폰 번호 형식입니다.", true);
            checkAll = 0;
        } else {
            printMessage(checkPhone, "휴대폰 번호는 010-0000-0000 형식으로 입력해야 합니다.", false);
            checkAll = 1;
        }
    })
})

joinCheckButton.addEventListener("click", function() {
    if (checkAll !== 0) {
        printMessage(joinResult, "입력 정보를 확인해주세요.", false);
        return;
    } else {
        const name = joinName.value.trim();
        const id = joinId.value.trim();
        const password = joinPassword.value.trim();
        const email = joinEmail.value.trim();
        const phone = joinPhone.value.trim();

        joinResult.innerHTML = `
            가입이 완료되었습니다.<br>
            가입 정보<br>
            이름: ${name}<br>
            아이디: ${id}<br>
            비밀번호: ${password}<br>
            이메일: ${email}<br>
            휴대폰 번호: ${phone}
        `;

        joinName.value = '';
        joinId.value = '';
        joinPassword.value = '';
        joinEmail.value = '';
        joinPhone.value = '';
    }
});
*/

const joinCheckButton = document.getElementById("joinCheckButton");
const resetButton = document.getElementById("resetButton");
const checkInput = document.querySelectorAll("#joinInput input");
const joinResult = document.getElementById("joinResult");


const joinName = document.getElementById("joinName");
const joinId = document.getElementById("joinId");
const joinPassword = document.getElementById("joinPassword");
const joinEmail = document.getElementById("joinEmail");
const joinPhone = document.getElementById("joinPhone");

const checkName = document.getElementById("checkName");
const checkId = document.getElementById("checkId");
const checkPassword = document.getElementById("checkPassword");
const checkEmail = document.getElementById("checkEmail");
const checkPhone = document.getElementById("checkPhone");

const joinFields = [
    {
        id: "joinName",
        resultId: "checkName",
        regExp: /^[가-힣]{2,5}$/,
        successMsg: "사용 가능한 이름입니다.",
        failMsg: "이름은 한글 2~5글자로 입력해야 합니다.",
        isValid: false
    },
    {
        id: "joinId",
        resultId: "checkId",
        regExp: /^[A-Za-z][A-Za-z0-9]{4,7}$/,
        successMsg: "사용 가능한 아이디입니다.",
        failMsg: "아이디는 영문 시작, 5~8글자로 입력해야 합니다.",
        isValid: false
    },
    {
        id: "joinPassword",
        resultId: "checkPassword",
        regExp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/,
        successMsg: "사용 가능한 비밀번호입니다.",
        failMsg: "비밀번호는 영문자, 숫자, 특수문자를 각각 하나 이상 포함하여 6~10글자로 입력해야 합니다.",
        isValid: false
    },
    {
        id: "joinEmail",
        resultId: "checkEmail",
        regExp: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        successMsg: "올바른 이메일 형식입니다.",
        failMsg: "이메일은 아이디@도메인 형식으로 입력해야 합니다.",
        isValid: false
    },
    {
        id: "joinPhone",
        resultId: "checkPhone",
        regExp: /^010-\d{4}-\d{4}$/,
        successMsg: "올바른 휴대폰 번호 형식입니다.",
        failMsg: "휴대폰 번호는 010-0000-0000 형식으로 입력해야 합니다.",
        isValid: false
    },
];

checkInput.forEach(function(input) {
    input.addEventListener("input", function() {
    
        const currentId = input.id; 
        const value = input.value.trim();

        const field = joinFields.find(f => f.id === currentId);

        if (field.regExp.test(value)) {
            printMessage(document.getElementById(field.resultId), field.successMsg, true);
            field.isValid = true;  
        } else {
            printMessage(document.getElementById(field.resultId), field.failMsg, false);
            field.isValid = false;
        }
    });
});

joinCheckButton.addEventListener("click", function() {
    for (let check in joinFields) {
        if (check.isValid === false) {
            joinResult.textContent = '입력값을 확인해주세요.';
            return;
        }
    }
        joinResult.innerHTML = `
            가입이 완료되었습니다.<br>
            가입 정보<br>
            이름: ${joinFields[0].id}<br>
            아이디: ${joinFields[1].id}<br>
            비밀번호: ${joinFields[2].id}<br>
            이메일: ${joinFields[3].id}<br>
            휴대폰 번호: ${joinFields[4].id}
        `;

        joinName.value = '';
        joinId.value = '';
        joinPassword.value = '';
        joinEmail.value = '';
        joinPhone.value = '';
    
});