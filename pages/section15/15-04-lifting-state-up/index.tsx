import { useState } from "react";
import Child1 from "../../../src/component/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/component/units/15-lifting-state-up/Child2";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);

  const onClickCount = (): void => {
    setCount((prev) => prev + 1); //두번째 방법(부모에서 함수 생성)
  };

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>===================</div>
      <Child2 count={count} onClickCount={onClickCount} />
    </>
  );
}
