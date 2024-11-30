'use client'; // 클라이언트들이 보는 컴포넌트
import React from 'react'

const Step01 = () => {
    const stname:string = '짱구'; // string
    const age:number = 5; // number
    const isStudent:boolean = true; // boolean
    const emptyValue : null = null; // null
    const notAss :undefined = undefined; // undefined

    /** Array : 이런 주석도 있음 */
    const numbers:number[] = [1, 2, 3, 4, 5];
    const friends:Array<string> = ['짱구', '철수'];

    /** Object */
    const person:{ name:string, age :number } = {
        name : '짱구',
        age :5,
    }

    /**
     * Function 에서는 이렇게 작동
     * @param name 이름을 받아와야 합니다.
     * @returns 인사말이 리턴될거에요. 
     */
    function greet(name:string) : string {
        console.log(name);
        return `안녕하세요, ${name}!`;
    }

    greet('짱구')
    // greet(123)

    /*
        [ 함수 타입 ]

        - return이 없어야 한다면 void
        function myFunc(x:number) : void {
        }

        - 파라미터가 옵션일 경우
        function myFunc(x?:number)

        - return할 자료 타입
        function myFunc(x:number) :number {
        }

    
    */

  return (
    <div>Step01</div>
  )
}

export default Step01