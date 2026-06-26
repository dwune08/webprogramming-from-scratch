// 기본 객체와 데이터 접근
const person = {
    "name": "HongGilDong",
    "age": 25,
    "address": {
        "nation": "Korea",
        "city": "Seoul",
        "postalCode": 12345
    },
    "hobby": ["영화", "여행"],
    "phone": "010-1234-0987"
};

const btnDefault = document.getElementById("btnDefault");
const view = document.getElementById("view");

btnDefault.addEventListener("click", function() {
    const tag = `
        <p><strong>이름:</strong> ${person.name}</p>
        <p><strong>나이:</strong> ${person["age"]}</p>
        <p><strong>주소:</strong> ${person.address.nation}, ${person.address.city}, ${person.address.postalCode}</p>
        <p><strong>취미:</strong> ${person.hobby.join(", ")}</p>
        <p><strong>번호:</strong> ${person.phone}</p>
    `;

    view.innerHTML = tag;
});


// 배열을 포함한 객체
const company = {
    "name": "(주)자바컴퍼니",
    "since": 2013,
    "department": ["기획팀", "영업팀", "디자인팀", "개발팀"],
    "biz": ["소프트웨어 개발", "통신판매업", "위치정보서비스"]
};

const btnJsonArray = document.getElementById("btnJsonArray");
const companyName = document.getElementById("companyName");
const since = document.getElementById("since");
const department = document.getElementById("department");
const biz = document.getElementById("biz");

btnJsonArray.addEventListener("click", function() {
    companyName.textContent = company.name;
    since.textContent = company.since;

    let departmentList = "";
    company.department.forEach(function(dept) {
        departmentList += `<li>${dept}</li>`;
    });
    department.innerHTML = departmentList;

    let bizList = "";
    for (let i = 0; i < company.biz.length; i++) {
        bizList += `<li>${company.biz[i]}</li>`;
    }
    biz.innerHTML = bizList;
});


// 중첩 객체
const employee = {
    ceo: {
        name: "홍길동",
        age: 45
    },
    manager: {
        name: "이과장",
        age: 38
    },
    intern: {
        name: "김철수",
        age: 24
    }
};

const btnDisplayJsonTree = document.getElementById("btnDisplayJsonTree");
const companyTableBody = document.querySelector("#companyTable tbody");

btnDisplayJsonTree.addEventListener("click", function() {
    companyTableBody.innerHTML = "";

    for (let position in employee) {
        console.log(position);
        const person = employee[position];

        const row = `
            <tr>
                <td>${position}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
            </tr>
        `;

        companyTableBody.innerHTML += row;
    }
});

const post = [
    {
        title: "HTML",
        body: "HTML은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 제목, 단락, 링크, 이미지 등 페이지의 뼈대를 구성합니다.",
        view: "19",
        date: "2026.04.05"
    },
    {
        title: "CSS",
        body: "CSS는 웹 페이지의 디자인을 담당하는 스타일시트 언어입니다. 레이아웃 구성, 색상, 폰트, 애니메이션 등을 설정할 수 있습니다.",
        view: "15",
        date: "2026.04.17"
    },
    {
        title: "JavaScript",
        body: "JavaScript는 웹 페이지를 동적으로 만들기 위한 프로그래밍 언어입니다. 이벤트 처리, DOM 조작, 비동기 통신 등 다양한 기능을 제공합니다.",
        view: "6",
        date: "2026.05.22"
    }
];

const btnDisplayPost = document.getElementById("btnDisplayPost");
const postTableHead = document.getElementById("postTableHead");
const postTableBody = document.getElementById("postTableBody");
const titleSpace = document.getElementById("titleSpace");

btnDisplayPost.addEventListener('click', function(event) {
    titleSpace.innerHTML = `
    <h1>${post[2].title} / ${post[1].title} / ${post[2].title}</h1>
    <p>클라이언트 프로그래밍 과목을 정리해 놓은 게시판입니다.</p>
    <p id="countPost" style="text-align:right">총 게시물의 수 : ${post.length}개</p>
    `;
    
    postTableBody.innerHTML = "";
    postTableBody.innerHTML = `
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>조회수</th>
        <th>등록일</th>
        </tr>
    `;
    for (let i = 2; i >= 0; i--) {
        const posting = post[i];

        const row = `
            <tr>
                <td>${i+1}</td>
                <td>${posting.title}</td>
                <td>${posting.body}</td>
                <td>${posting.view}</td>
                <td>${posting.date}</td>
            </tr>
        `;
        postTableBody.innerHTML += row;
    }
});


// 객체 리터럴과 메서드
const user = {
    name: "홍길동",
    hobby: ["여행", "영화"],
    greeting: function() {
        return `안녕하세요. 나의 이름은 ${this.name}입니다.<br>취미는 ${this.hobby.join(", ")}입니다.`;
    },
    profile() {
        return `저는 ${this.age}살 ${this.gender}입니다.`;
    }
};

const member = {
    id: "nodeuser",
    password: "node1234",
    name: "홍길동",
    mobile: "010-8934-XXXX",
    country: "대한민국"
};

const objectLiteralButton = document.getElementById("objectLiteralButton");
const objectLiteralResult = document.getElementById("objectLiteralResult");
const objectLiteralMemberResult = document.getElementById("objectLiteralMemberResult");

objectLiteralButton.addEventListener("click", function() {
    user.age = 25;
    user.gender = '남성';

    objectLiteralResult.innerHTML = `
        <p>${user.greeting()}</p>
        <p>${user.profile()}</p>
        
    `;

    let tag="";
    for (let info in member) {
        tag += `${info} : ${member[info]}<br>`
    }
    objectLiteralMemberResult.innerHTML = tag;
});


// ES6 클래스 기본 문법
class User {
    constructor(name, hobby) {
        this.name = name;
        this.hobby = hobby;
    }

    greeting() {
        return `안녕하세요. 제 이름은 ${this.name}입니다.`;
    }

    getHobbyText() {
        return this.hobby.join(", ");
    }
}

const classUserButton = document.getElementById("classUserButton");
const classUserResult = document.getElementById("classUserResult");

classUserButton.addEventListener("click", function() {
    const user = new User("홍길동", ["여행", "영화"]);

    classUserResult.innerHTML = `
        <p>${user.greeting()}</p>
        <p><strong>취미:</strong> ${user.getHobbyText()}</p>
    `;
});


// ES6 클래스 예제 - 강의 신청 객체 생성하기
class CourseApplication {
    constructor(studentName, courseName, status) {
        this.studentName = studentName;
        this.courseName = courseName;
        this.status = status;
    }

    getApplicationInfo() {
        return `${this.studentName}님은 ${this.courseName} 강의를 신청했습니다.`;
    }

    getStatusMessage() {
        return `현재 신청 상태는 ${this.status}입니다.`;
    }
}

const classCourseButton = document.getElementById("classCourseButton");
const classCourseResult = document.getElementById("classCourseResult");

classCourseButton.addEventListener("click", function() {
    const application = new CourseApplication("홍길동", "JavaScript 기초", "신청 완료");

    classCourseResult.innerHTML = `
        <p><strong>수강생:</strong> ${application.studentName}</p>
        <p><strong>강의명:</strong> ${application.courseName}</p>
        <p><strong>상태:</strong> ${application.status}</p>
        <p>${application.getApplicationInfo()}</p>
        <p>${application.getStatusMessage()}</p>
    `;
});


// 클래스의 getter와 setter
class Coffee {
    constructor(name) {
        this._name = name;
    }

    get name() {
        console.log("call getter");
        return this._name;
    }

    set name(name) {
        console.log("call setter");
        this._name = name;
    }

    display() {
        return `현재 선택한 커피는 ${this._name}입니다.`;
    }
}

const coffee = new Coffee("Americano");

const coffeeNameInput = document.getElementById("coffeeNameInput");
const coffeeButton = document.getElementById("coffeeButton");
const coffeeResult = document.getElementById("coffeeResult");

coffeeButton.addEventListener("click", function() {
    const coffeeName = coffeeNameInput.value.trim();

    if (coffeeName === "") {
        alert("커피 이름을 입력하세요.");
        coffeeNameInput.focus();
        return;
    }

    coffee.name = coffeeName;

    coffeeResult.innerHTML = `
        <p><strong>커피이름:</strong> ${coffee.name}</p>
        <p>${coffee.display()}</p>
    `;

    coffeeNameInput.value = "";
    coffeeNameInput.focus();
});


// 연락처 정보 변경하기
class PhoneBook {
    constructor(name, phone) {
        this._name = name;
        this._phone = phone;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get phone() {
        return this._phone;
    }

    set phone(phone) {
        this._phone = phone;
    }

    display() {
        return `${this._name} 님의 전화번호는 ${this._phone} 입니다.`;
    }
}



const changeButton = document.getElementById("changeButton");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const changeResult = document.getElementById("changeResult");

changeButton.addEventListener("click", function() {

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "") {
        changeResult.textContent = '이름을 입력하세요.';
        nameInput.focus();
        return;
    }
    if (phone === "") {
        changeResult.textContent = '전화번호를 입력하세요.';
        phoneInput.focus();
        return;
    }

    const phonebook = new PhoneBook(name, phone);

    changeResult.innerHTML = phonebook.display();

    nameInput.value = "";
    phoneInput.value = "";
    nameInput.focus();
});


// JSON 문자열 변환
const convertUser = {
    name: "javauser",
    email: "javauser@naver.com",
    phonse: "02-506-3536"
};

const convertButton = document.getElementById("convertButton");
const stringResult = document.getElementById("stringResult");
const jsonResult = document.getElementById("jsonResult");

convertButton.addEventListener("click", function() {
    const userString = JSON.stringify(convertUser);
    let userData = "";

    JSON.parse(userString, function(key, value) {
        if (key !== "") {
            userData += `${key}: ${value}<br>`;
        }
    });

    stringResult.textContent = userString;
    jsonResult.innerHTML = userData;
});


// 배열 데이터 추가와 출력
const subjects = ["HTML", "CSS", "JavaScript"];

const subjectInput = document.getElementById("subjectInput");
const addSubject = document.getElementById("addSubject");
const subjectList = document.getElementById("subjectList");

function renderSubjectList() {
    subjectList.innerHTML = "";

    subjects.forEach(function(subject) {
        subjectList.innerHTML += `<li>${subject}</li>`;
    });
}

addSubject.addEventListener("click", function() {
    const subject = subjectInput.value.trim();

    if (subject === "") {
        alert("과목명을 입력하세요.");
        subjectInput.focus();
        return;
    }

    subjects.push(subject);

    subjectInput.value="";
    subjectInput.focus();

    renderSubjectList();
});

renderSubjectList();


bookList = [
    {
        title: "독서의 기술",
        author: "고명환",
        date: "2026-07-08"
    },
    {
        title: "내면 근력 결국 멘탈 게임이다",
        author: "짐 머피",
        date: "2026-04-26"
    },
    {
        title: "말은 운명을 데려온다",
        author: "이하영",
        date: "2026-06-10"
    },
]

const addBook = document.getElementById('addBook');
const tableBody = document.getElementById('bookTableBody');
const tableHead = document.getElementById('bookTableHead');
const title = document.getElementById('bookTitle');
const author = document.getElementById('bookAuthor');
const date = document.getElementById('bookDate');

function showBookList() {
    tableBody.innerHTML = "";
    tableBody.innerHTML = `
        <tr>
            <th>제목</th>
            <th>저자</th>
            <th>출판 연도</th>
        </tr>
    `;
    for (let i in bookList) {
        const book = bookList[i];

        const row = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author} 저자(글)</td>
                <td>${book.date}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

addBook.addEventListener('click', function() {
    const t = title.value.trim();
    const a = author.value.trim();
    const d = date.value.trim();

    if (t === "" || a === "" || d === "") {
        alert("제목, 저자, 출판 연도를 모두 입력해주세요.");
        return;
    }

    const book = {
        title: `${t}`,
        author:`${a}`,
        date:`${d}`
    };

    bookList.push(book);

    title.value="";
    author.value="";
    date.value="";

    showBookList();
});
showBookList();