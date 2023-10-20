import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import React, { useState } from "react";
import FetchPolicyExaple from "../../../src/component/units/22-fetch-policy";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  ); //앞 부분은 결과타입, 뒤에는 variables(인자) 타입

  // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지?
  const onClickIsOpen = (): void => {
    setIsOpen(true);
  };

  // 2. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되는지?
  const onClickMove = (): void => {
    router.push("section22/22-01/fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼을 클릭하면 새로운 컴포넌트가 나타납니다!
      </button>
      {isOpen && <FetchPolicyExaple />}
      =====================================
      <button onClick={onClickMove}>
        2. 버튼을 클릭하면 페이지가 이동됩니다!
      </button>
    </div>
  );
}
