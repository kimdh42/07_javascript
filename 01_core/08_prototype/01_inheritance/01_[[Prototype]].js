/* [[Prototype]] */

const user = {
    activate : true,
    login : function() {
        console.log('로그인이 되었습니다.');
    }
};

const student = {
    passion : true
};

// __proto__는 [[Prototype]]의 getter, setter 이다.
// Object.getPrototypeOf, Object.setPrototyprOf를 써서 prototype을 get, set 하는것이 좋다.
student.__proto__ = user;

console.log(student.passion);
console.log(student.activate);
student.login();

// 프로토타입 체인
const class8Student = {
    classNo : 8,
    __proto__ : student
};

// 프로토타입 체이닝은 순환참조가 허용되지 않는다.
user.__proto__ = class8Student;             // TypeError: Cyclic __proto__ value

console.log(class8Student.passion);         // student에서 상속
console.log(class8Student.activate);        // user에서 상속