export default function TypescriptPage() {
  //타입 추론
  let aaa = "안녕하세요";
  aaa = 3;

  //타입 명시
  let bbb: string = "반갑습니다";
  bbb = 10;

  //타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  //숫자 타입
  let ddd: number = 10;
  ddd = 4;

  //불린 타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // true

  //배열 타입
  let fff: number[] = [1, 2, 3, 4, 5];
  let ggg: string[] = ["유리", "델리만쥬"];
  let hhh: (string | number)[] = [1, "가나"]; //타입을 추론해서 어떤 타입 사용하는지 알아보기

  //객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    hobby?: string; //있어도 되고 없어도 된다
  }
  const profile: IProfile = {
    name: "유리",
    age: 30,
    hobby: "영화",
  };

  profile.name = "델리만쥬"; //타입추론으로 이것만 가능
  profile.age = "8살";
  profile.hobby = "낮잠";

  //함수 타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원"); //결과의 리턴타입도 예측 가능

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result2 = add2(1000, 2000, "원"); //결과의 리턴타입도 예측 가능

  // any타입
  let qqq: any = "유리"; //자바스크립트와 동일하지만 충돌 때문에 잘 안씀.
  qqq = 123;
  qqq = true;

  return <></>;
}
