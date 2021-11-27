import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <Sheader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </Sheader>
  );
};

const Sheader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
