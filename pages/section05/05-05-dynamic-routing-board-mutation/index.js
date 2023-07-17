import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [나만의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      // try에 있는 내용을 시도하다가 실패하면 다음 줄들을 모두 무시하고 catch의 내용이 실행
      const result = await 나만의함수({
        variables: {
          // variables = $ 역할(변수)
          writer: "훈이",
          title: "안녕!",
          contents: "반가워!",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number); //글번호 찾기

      router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  //한 줄 일때는 괄호() 필요 없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
