import React from 'react'

const Step02 = () => {
    /*
        [ Union Type ]
         여러 타입 중 하나를 가질 수 있는 변수를 정의할 때 사용
    */
   let nameOrAge :string | number;
   nameOrAge = '짱구';
   nameOrAge = 5;

   const arr: (number | string)[] = [1, '2', 3];
   const obj : {data : number | string} = {data : '123'};

   /*
        [ Literal Type ]
        특정 값만 가질 수 있는 변수를 정의할 때 사용
   */
    const direction : 'left' | 'right' | 'up' | 'down' = 'left' ;

    /* 
        [ Any Type ]
        any : 아무 자료나 집어넣을 수 있는 타입
    */
    let age2:any = '짱구';

    /*
        [ Unknown Type ]
        unknown : any 와 비슷하지만 조금 더 엄격한 타입
        타입을 모를 때 사용하며, 사용 전 타입 체크가 필요
    */

    let age3:unknown = '짱구';
    age3 = 11;

    // unknown 타입 사용 예시
    if(typeof age3 === 'number'){
        age3 = age3 + 2;
    }

    /*
        [ Type Assertion ]
        타입을 확실하게 지정할 때 사용
    */
    const someValue : unknown = "Hello";
    const strLength : number = (someValue as string).length;
    
    /*
        [ Type Narrowing ]
        타입을 좁혀나가는 것
    */

    function printAge(age : number | string){
        // age = age + 2;
        if(typeof age === 'number'){
            age = age + 2;
            console.log(age)
        }
    }

    printAge(11)

  return (
    <div>Step02</div>
  )
}

export default Step02