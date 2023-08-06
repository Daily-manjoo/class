//컴포넌트 위에 자리하는 이유 ? 컴포넌트가 리렌더링 되도 다시 재생성 방지(효율적)

const FRUITS = [
  { number: 1, title: "레드향" }, //<div>1.레드향</div>
  { number: 2, title: "샤인머스캣" }, //<div>2.샤인머스캣</div>
  { number: 3, title: "산청딸기" }, //<div>3.산청딸기</div>
  { number: 4, title: "천도복숭아" },
];

export default function MapFruitsPage() {
  //1. 기본 예제
  const aaa = [<div>1.레드향</div>, <div>2.샤인머스캣</div>, <div>3.산청딸기</div>];
  //2. 실무 백엔드 데이터 예제
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  return (
  <div>{aaa}</div>
  =====================
  <div>{bbb}</div>
  =====================
  <div>
    {/* 3. 효율적인 실무 렌더링 예제 */}
    {FRUITS.map((el) => <div>{el.number} {el.title}</div>)};
  </div>
  );
}
