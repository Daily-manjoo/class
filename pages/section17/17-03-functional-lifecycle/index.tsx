import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  //componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행!");
  }, []);

  //componentDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행!");
  }, []);

  useEffect(() => {
    // componentWillUnmount와 동일
    return () => {
      console.log("사라지기 전에 실행!");
    };
  }, []);

  // 1. useEffect 하나로 합치기

  useEffect(() => {
    console.log("그려지고 나서 실행!");

    return () => {
      console.log("사라지기 전에 실행!");
    };
  }); // []지우면 변경되고도 실행됨(의존성 배열:dependency-array)

  // // 2. useEffect 잘못된 사용법(1. 추가 렌더링 2. 무한루프)
  // useEffect(()=>{
  //   setCount((prev) => prev + 1)
  // }, [count])

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  console.log("언제 실행되게?");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
