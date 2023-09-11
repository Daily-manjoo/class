import type { MouseEvent } from "react";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage():JSX.Element {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.id} id={el.writer} onClick={onClickAlert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div> // data가 있으면 그리고 없으면 그리지X *옵셔널체이닝
  );
}
