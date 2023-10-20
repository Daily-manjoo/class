/* import "@/styles/globals.css"; */
import type { AppProps } from "next/app";
import Layout from "../src/component/commons/layout";
import ApolloSetting from "../src/component/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>
        ===================여기는 _app.js 컴포넌트 시작
        부분입니다.==============================
      </div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
      <div>
        ===================여기는 _app.js 컴포넌트 마지막 부분입니다.
        ==============================
      </div>
    </div>
  );
}
