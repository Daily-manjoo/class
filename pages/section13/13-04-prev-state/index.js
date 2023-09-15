import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1); //여기에서의 결과는 모두 1

    setCount((prev) => prev + 1); //prev: 임시저장공간에 있는 값을 가지고 옴, 처음에는 count값을 불러옴(0)
    setCount((prev) => prev + 1); // 기존의 1을 가져오게 되서 2가 나옴
    setCount((prev) => prev + 1); // 2 가져와서 3이 나옴
  }

  // function onClickCountDown() {
  //   setCount(count - 1);
  // }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기</button> */}
    </div>
  );
}
