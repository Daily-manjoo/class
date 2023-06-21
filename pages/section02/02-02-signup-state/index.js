import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");

  function onChangeEmail(event) {
    console.log(event); //나의 행동
    console.log(event.target); //작동된 태그
    console.log(event.target.value); //작동된 태그에 입력된 값

    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {
    console.log(email); //포장이 됐는지 확인하기
    console.log(password); //이것도

    if (email.includes("@") === false) {
      // alert("이메일이 올바르지 않습니다."); => 옛날방식
      // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다. @가 없습니다."; => 옛날방식
      setemailError("이메일이 올바르지 않습니다. @가 없습니다.");
    } else {
      alert("회원가입을 축하합니다.");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      {/* <div id="myerror"></div> 옛날 방식*/}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
