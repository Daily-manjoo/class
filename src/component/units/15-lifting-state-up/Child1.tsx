export default function Child1(props: any) {
  function onClickCountUp() {
    props.setCount((prev: number) => prev + 1); //첫번째 방법(자식에서 함수 생성)
  }

  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
