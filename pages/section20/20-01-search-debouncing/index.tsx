import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import React, { MouseEvent, ChangeEvent } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //앞 부분은 결과타입, 뒤에는 variables(인자) 타입

  console.log(data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    //검색에서 refetch할 때 search 검색어가 refetch에 이미 저장되어 있는 상태이므로 추가로 search 포함 x
    void refetch({ page: Number(event.currentTarget.id) }); // variables 생략 가능
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);
  };

  // const onClickSearch = (): void => {
  //   refetch({
  //     search,
  //     page: 1, //새로 검색하면 검색결과의 1페이지로
  //   });
  // };

  return (
    <div>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {
        //자바스크립트일 경우 중괄호 넣어줘야함
        [new Array(10).fill(1)].map((_, index) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        ))
      }
    </div> //data가 있으면 그리고 없으면 그리지X *옵셔널체이닝
  );
}
