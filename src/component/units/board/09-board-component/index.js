export default function BoardComponent(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1> {/*api도 따로 해줘야하므로 삼항연산자로 구분 */}
      제목: <input type="text" />
      <br />
      내용: <input type="text" />
      <br />
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}
