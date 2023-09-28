import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`; //그래프큐엘 양식 가져오기

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나만의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나만의함수({
      variables: {
        // variables = $ 역할(변수)
        ...inputs,

        /*기존코드 
        writer: inputs.writer, 변수 : 기존 state의 값
        title: inputs.title,
        contents: inputs.contents, */
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev, //...inputs을 가져와도 상관 없지만 기존값 가져오는 게 유지보수성에 좋음
      //writer: inputs.writer,
      // title: inputs.title,
      // contents: inputs.contents,

      [event.target.id]: event.target.value, //안에 들어있는 값을 key로 하기
    }));
  };

  //한 줄 일때는 괄호() 필요 없음
  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
