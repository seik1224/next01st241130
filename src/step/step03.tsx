import React from 'react'

const Step03 = () => {
    /*
        [ type ]
        타입을 변수에 담아 사용하는 방법

        type AnimalType  = 'dog' | 'cat'
    */

    type Status = 'active' | 'inactive';
    const statue : Status = 'active';

    /*
        [ interface ]
        Object 자료형의 타입을 보다 편리하게 지정 가능
        type과의 차이점 : extends 사용 가능
    */

    interface Person {
        name : string;
    }
    interface Student extends Person {
        school : string;
        age? : number;
    }

    const st : Student = {
        name : '짱구',
        school : '팡팡유치원',
        age : 5
    }


  return (
    <div>Step03</div>
  )
}

export default Step03