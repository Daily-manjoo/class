import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsedit] = useState(false);

  const onClickEdit = (): void => {
    setIsedit(true);
  };
  return (
    <div>
      {!isEdit ? ( //false라면 인풋창 띄우기
        <div>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
//data가 있으면 그리고 없으면 그리지X *옵셔널체이닝
