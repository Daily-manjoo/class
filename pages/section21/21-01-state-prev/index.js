import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // 1. 화살표함수
    // setCount((prev) => prev + 1);

    // 2. 함수 선언식
    // setCount(function (prev) {
    //   // 로직 추가 가능(if문, for문)
    //   return prev + 1;
    // });

    //3 . 매개 변수 바꾸기
    setCount((aaa) => aaa + 1);
  }

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
