import BoardWrite from "@/src/component/units/board/write/BoardWrite.container";
export default function GraphqlMutation(props) {
  return (
    <div>
      <div>### 페이지 ###</div>
      <BoardWrite name="유리" />
      <div>### 페이지 ###</div>
    </div>
  );
}
