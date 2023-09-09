export interface IProfile {
  name: String;
  age: number;
  school: string;
  hobby?: string;
}

export interface IProfile2 {
  name?: String;
  age?: number;
  school?: string;
  hobby?: string;
}

// 1. Partial 타입 = ?. 조건을 추가할 필요 없이 타입을 변환해줌
type aaa = Partial<IProfile>;

// 2. Required 타입 = 모든 ? 삭제 (필수타입으로 변환)
type bbb = Required<IProfile>;

// 3. Pick 타입 = 원하는 프로퍼티만 골라 변환해줌
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 // 빼고 싶은 프로퍼티를 넣어주면 제외하고 변환
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "유리" | "홍시"; // Union 타입
let child: eee = "홍시"; // e에서 지정해준 것만 가능
let child2: string = "자두"; // 유리, 철수 다 됨

type fff = Record<eee, IProfile>; // 각각 철수, 유리, 홍시의 key가 만들어짐, 철수.name, 철수.age~

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

// 7. type vs interface 차이 => 선언 병합
export interface IProfile {
  candy: number; // interface는 선언 병합으로 이전의 것에 병합되지만 type은 추가할 수 없음
}
