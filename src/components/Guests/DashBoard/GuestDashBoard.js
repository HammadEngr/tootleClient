import React, { useContext } from "react";
import LogInContext from "../../../Contexts/LogInContext";
import DashBoardLayout from "../../../LayoutsAndUIs/DashBoardLayout";
const dashBoardItems = [
  {
    link: "/guestDashBoard/updateProfile",
    title: "Update Profile",
  },
  {
    link: "/guestDashBoard/notifications",
    title: "Notifications",
  },
  {
    link: "/guestDashBoard/trips",
    title: "Your Trips",
  },
  {
    link: "/guestDashBoard/wishlist",
    title: "WishList",
  },
];

const GuestDashBoard = (props) => {
  const loginCtx = useContext(LogInContext);
  const signOutHandler = () => {
    loginCtx.guestLogInHandler(false);
  };
  return (
    <DashBoardLayout
      dashBoardItemsList={dashBoardItems}
      mainTitle="DashBoard"
      mainLink="/guestDashBoard"
      signOut={signOutHandler}
    />
  );
};

export default GuestDashBoard;
