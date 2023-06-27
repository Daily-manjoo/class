/*import "@/styles/globals.css";*/
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터 메모리에다 백엔드에서 받아온 데이터 임시 저장해놓기 => 나중에 더 자세히 알아보기!
  });

  return (
    <div>
      <div>===================여기는 _app.js 컴포넌트 시작 부분입니다. ==============================</div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <div>===================여기는 _app.js 컴포넌트 마지막 부분입니다. ==============================</div>
    </div>
  );
}
