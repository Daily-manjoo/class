import BoardWrite from "../../../../src/component/units/board/09-write/BoardWrite.container";
export default function GraphqlMutation(props) {
  return (
    <div>
      <div>### 페이지 ###</div>
      <BoardWrite isEdit={false} />
      <div>### 페이지 ###</div>
    </div>
  );
}
