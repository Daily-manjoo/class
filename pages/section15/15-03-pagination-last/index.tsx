import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import React, { MouseEvent } from "react";
import { useState } from "react";

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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //앞 부분은 결과타입, 뒤에는 variables(인자) 타입

  console.log(data?.fetchBoards);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10); //데이터를 받아오기 전에는(undefined)일때는 10으로 해라.

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) }); // variables 생략 가능
  };

  //   const onClickPage1 = (event: MouseEvent<HTMLSpanElement>): void => {
  //     void refetch({ page: Number(event.currentTarget.id) }); // variables 생략 가능
  //   };

  //   const onClickPage2 = (event): void => {
  //     void refetch({ page: Number(event.currentTarget.id) }); // variables 생략 가능
  //   };

  //   const onClickPage3 = (event): void => {
  //     void refetch({ page: Number(event.currentTarget.id) }); // variables 생략 가능
  //   };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {
        //자바스크립트일 경우 중괄호 넣어줘야함
        new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <span
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
                style={{ margin: "5px" }}
              >
                {index + startPage}
              </span>
            ),
        )
      }
      <span onClick={onClickNextPage}>다음 페이지</span>
      {/* {
        //자바스크립트일 경우 중괄호 넣어줘야함
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        ))
      }

      {
        //자바스크립트일 경우 중괄호 넣어줘야함
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
          <span key={el} id={String(el)} onClick={onClickPage}>
            {el}
          </span>
        ))
      } */}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </div> //data가 있으면 그리고 없으면 그리지X *옵셔널체이닝
  );
}
