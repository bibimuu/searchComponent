import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../provider/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import axios from "axios";

export const Top = () => {
  const history = useHistory();
  // const { SetUserInfo } = useContext(UserContext);
  const SetUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    SetUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    SetUserInfo({ isAdmin: false });
    history.push("/users");
  };

  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onClickUser2 = () => {};

  return (
    <SContainer>
      <h2>Top</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>

      <br />
      <SecondaryButton onClick={onClickUser1}>あいうえお</SecondaryButton>
      <SecondaryButton onClick={onClickUser2}>かきくけこ</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
