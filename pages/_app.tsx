/* import "@/styles/globals.css"; */
import type { AppProps } from "next/app";
import Layout from "../src/component/commons/layout";
import ApolloSetting from "../src/component/commons/apollo";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>
        ===================여기는 _app.js 컴포넌트 시작
        부분입니다.==============================
      </div>
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
      <div>
        ===================여기는 _app.js 컴포넌트 마지막 부분입니다.
        ==============================
      </div>
    </div>
  );
}
