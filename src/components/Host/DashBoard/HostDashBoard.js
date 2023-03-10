import React, { useContext } from "react";
import LogInContext from "../../../Contexts/LogInContext";
import DashBoardLayout from "../../../LayoutsAndUIs/DashBoardLayout";

const dashBoardItems = [
  {
    link: "/hostDashBoard/profile",
    title: "Profile",
  },
  {
    link: "/hostDashBoard/updateProfile",
    title: "Update Profile",
  },
  {
    link: "/hostDashBoard/places",
    title: "Your Places",
  },
  {
    link: "/hostDashBoard/newPlace",
    title: "New Place",
  },
];

const HostDashBoard = (props) => {
  const loginCtx = useContext(LogInContext);

  const signOutHandler = (e) => {
    loginCtx.hostLogInHandler(false);
  };

  return (
    <DashBoardLayout
      dashBoardItemsList={dashBoardItems}
      mainTitle="DashBoard"
      mainLink="/hostDashBoard"
      signOut={signOutHandler}
    />
  );
};

export default HostDashBoard;
