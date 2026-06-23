function variableTest() {
    let age = 20;
    const name = '홍길동';

    age = 21;

    document.querySelector('#variableResult').innerHTML = `
        이름: ${name}<br>
        나이: ${age}<br>
        let으로 선언한 age는 값을 다시 대입할 수 있고, const로 선언한 name은 다시 대입할 수 없다.
    `;
}

function primitiveTypeTest() {
    const name = '홍길동';
    const age = 25;
    const isStudent = true;

    let address;
    let phone = null;

    document.querySelector('#primitiveResult'). innerHTML = `
        name: ${name} / typeof: ${typeof name}<br>
        age: ${age} / typeof: ${typeof age}<br>
        isStudent: ${isStudent} / typeof: ${typeof isStudent}<br>
        address: ${address} / typeof: ${typeof address}<br>
        phone: ${phone} / typeof: ${typeof phone}
    `;
}

function referenceTypeTest() {
    const fruits = ['사과', '바나나', '딸기'];
    const student = {
        name: '김철수',
        score: 90
    };

    document.querySelector('#referenceResult').innerHTML = `
        배열 fruits: ${fruits.join(', ')} / typeof: ${typeof fruits}<br>
        객체 student: ${student.name}, ${student.score}점 / typeof: ${typeof student}<br>
        배열과 객체는 여러 값을 묶어 관리하는 참조 자료형이다.
    `;

    console.log(fruits);
    console.log(student);
}

function typeOfTest() {
    const values = ['JavaScript', 100, 3.14, true, undefined, null, [1,2,3], function() {}];
    const result = values.map((value) => `${String(value)}: ${typeof value}`);

    document.querySelector('#typeOfResult').innerHTML = result.join('<br>');
}

function conversionTest() {
    const convertInput = document.getElementById('convertInput');
    const conversionResult = document.getElementById('conversionResult');

    const inputValue = convertInput.value;

    const numberValue = Number(inputValue);
    const stringValue = String(inputValue);
    const booleanValue = Boolean(inputValue);

    conversionResult.innerHTML = `
        <p>입력값: ${inputValue}</p>
        <p>Number(입력값): ${numberValue} / 자료형: ${typeof numberValue}</p>
        <p>String(입력값): ${stringValue} / 자료형: ${typeof stringValue}</p>
        <p>Boolean(입력값): ${booleanValue} / 자료형: ${typeof booleanValue}</p>
    `;
}

// 두 수의 합

function plusNumber() {
    const number1 = document.getElementById('plusNumber1');
    const number2 = document.getElementById('plusNumber2');
    const calculate = document.getElementById('calculate');
    const result = document.getElementById('plusResult');

    if (number1.value ==='' || number2.value ==='') {
        result.value = '숫자를 입력해주세요.';
        number1.focus();
        return;
    }

    if(calculate.value.trim() === 'plus') {
        result.value = Number(number1.value.trim()) + Number(number2.value.trim());
    } 
    if(calculate.value.trim() === 'minus') {
        result.value = Number(number1.value.trim()) - Number(number2.value.trim());
    }
    if(calculate.value.trim() === 'multiply') {
        result.value = Number(number1.value.trim()) * Number(number2.value.trim());
    }
    if(calculate.value.trim() === 'divide') {
        if(number2.value !== '0') {
            result.value = Number(number1.value.trim()) / Number(number2.value.trim());
        } else {
            result.value = '0으로 나눌 수 없습니다.';
        }
    }
}














