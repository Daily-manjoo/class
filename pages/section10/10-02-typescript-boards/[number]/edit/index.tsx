import BoardWrite from "../../../../../src/component/units/board/10-write/BoardWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function GraphqlMutation() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return (
    <div>
      <div>### 페이지 ###</div>
      <BoardWrite isEdit={true} data={data} />
      <div>### 페이지 ###</div>
    </div>
  );
}
