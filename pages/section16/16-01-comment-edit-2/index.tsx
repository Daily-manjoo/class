import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/component/units/16-comment-item";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  ); //앞 부분은 결과타입, 뒤에는 variables(인자) 타입

  return (
    <div>
      {data?.fetchBoards.map((el) => <CommentItem key={el._id} el={el} />)}
    </div> //data가 있으면 그리고 없으면 그리지X *옵셔널체이닝
  );
}
