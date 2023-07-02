import { useMutation, gql } from "@apollo/client";

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
  const [나만의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나만의함수({
      variables: {
        // variables = $ 역할(변수)
        writer: "훈이",
        title: "안녕!",
        contents: "반가워!",
      },
    });
    console.log(result);
  };

  //한 줄 일때는 괄호() 필요 없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
