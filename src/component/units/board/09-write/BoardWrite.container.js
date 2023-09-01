import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나만의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나만의함수({
      variables: {
        // variables = $ 역할(변수)
        writer: writer, //변수 : 기존 state의 값
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    //여기서 수정하기 기능
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
    />
  );
}
/*props로 aaa~ddd 담기. 
prop={ 
    aaa: onClickSubmint, bbb:~~
} */
