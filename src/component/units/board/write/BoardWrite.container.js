import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나만의함수] = useMutation(나의그래프큐엘셋팅);

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
  return <BoardWriteUI aaa={onClickSubmit} bbb={onChangeWriter} ccc={onChangeTitle} ddd={onChangeContents} />;
}
/*props로 aaa~ddd 담기. 
prop={ 
    aaa: onClickSubmint, bbb:~~
} */
