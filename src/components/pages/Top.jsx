import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../provider/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

import { SecondaryButton } from "../atoms/button/SecondaryButton";

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
  return (
    <SContainer>
      <h2>Top</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
