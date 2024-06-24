import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  ProfileImage,
  TextArea,
  Title,
} from "./sign-up.css";

const SignUp: React.FC = () => {
  return (
    <Container>
      <ProfileImage
        src="/path/to/default/profile/image.png"
        alt="프로필 이미지"
      />
      <Form>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" id="email" name="email" />
        <Label htmlFor="name">이름</Label>
        <Input type="text" id="name" name="name" />
        <Label htmlFor="nickname">닉네임</Label>
        <Input type="text" id="nickname" name="nickname" />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" name="password" />
        <Label htmlFor="profileImage">프로필 이미지</Label>
        <Input type="file" id="profileImage" name="profileImage" />
        <Label htmlFor="phone">전화번호</Label>
        <Input type="tel" id="phone" name="phone" />
        <Label htmlFor="bio">소개글</Label>
        <TextArea id="bio" name="bio" />
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
