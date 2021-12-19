import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [UserInfo, SetUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ UserInfo, SetUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
