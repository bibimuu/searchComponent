import { useContext, memo } from "react";
import styled from "styled-components";

import { UserContext } from "../../../provider/UserProvider";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  const { UserInfo } = useContext(UserContext);
  const isAdmin = UserInfo ? UserInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SP>{name}</SP>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SP = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
