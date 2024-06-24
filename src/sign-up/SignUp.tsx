import React from "react";

const SignUp: React.FC = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
