import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

//아래 mutation처럼 타입도 적어주기
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  console.log(data);

  const onClickMove = () => {
    router.push(`/section10/10-02-typescript-boards/${router.query.number}/edit`);
  };

  return (
    <div>
      <div>{router.query.number}번 게시글 이동 완료!</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>수정하러가기</button>
    </div> //data가 있으면 그리고 없으면 그리지X *옵셔널체이닝
  );
}
