import { useContext } from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
import { UserContext } from "../../provider/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `加藤${val}`,
    image: "https://source.unsplash.com/Qb7D1xw28Co",
    email: "abcdef@gmail.com",
    phone: "000-0000-0000",
    company: {
      name: "Archeco"
    },
    website: "http/ssss/s.com"
  };
});

export const Users = () => {
  const { UserInfo, SetUserInfo } = useContext(UserContext);
  console.log(UserInfo);
  const onClickSwitch = () => {
    SetUserInfo({ isAdmin: !UserInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((val, id) => {
          return <UserCard keys={id} user={val} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SecondaryButton = styled.button`
  padding: 8px;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
