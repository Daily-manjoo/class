import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 3) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data);

  return (
    <div>
      <div>3번 게시글 이동 완료!</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div> //data가 있으면 그리고 없으면 그리지X *옵셔널체이닝
  );
}
