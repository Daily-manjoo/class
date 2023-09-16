import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingrops {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터 메모리에다 백엔드에서 받아온 데이터 임시 저장해놓기 => 나중에 더 자세히 알아보기!
  });

  // pretteir-ignore
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
