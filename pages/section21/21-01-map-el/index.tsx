export default function MapElPage(): JSX.Element {
  // 1. 기본방법
  ["철수", "영희", "훈이"].map((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  // 2. 매개변수 변경
  //   ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //     console.log("el:", asdf);
  //     console.log("qwer:", qwer);
  //   });

  // 3. 함수선언식 방법
//   ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
//     console.log("el:", asdf);
//     console.log("qwer:", qwer);
//   });

  /// 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].map((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });
  return <></>;
}
