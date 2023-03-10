import React from "react";
import "./App.css";
//////////////////////////////////////////////////
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
/////////////////////////////////////////////////
import Host from "./components/Host/Host";
import HostSignUp from "./components/Host/HostSignUp";
import HostForgotPwd from "./components/Host/HostForgotPwd";
import HostDashBoard from "./components/Host/DashBoard/HostDashBoard";
import HostOverview from "./components/Host/DashBoard/Tabs/HostOverview";
import Profile from "./components/Host/DashBoard/Tabs/Profile";
import UpDateHost from "./components/Host/DashBoard/Tabs/UpDateHost";
import Places from "./components/Host/DashBoard/Tabs/Places";
import NewPlace from "./components/Host/DashBoard/Tabs/NewPlace";
/////////////////////////////////////////////////
import Guest from "./components/Guests/Guest";
import GuestSignUp from "./components/Guests/GuestSignUp";
import GuestForgotPwd from "./components/Guests/GuestForgotPwd";
import GuestDashBoard from "./components/Guests/DashBoard/GuestDashBoard";
import GuestOverview from "./components/Guests/DashBoard/Tabs/GuestOverview";
import UpDateGuest from "./components/Guests/DashBoard/Tabs/UpDateGuest";
import Notifications from "./components/Guests/DashBoard/Tabs/Notifications";
import Trips from "./components/Guests/DashBoard/Tabs/Trips";
import WishList from "./components/Guests/DashBoard/Tabs/WishList";
//
import DetailsPage from "./components/DetailsPage/DetailsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailsPage />} />

        <Route path="/loginHost" element={<Host />} />
        <Route path="/signupHost" element={<HostSignUp />} />
        <Route path="/forgotHostPwd" element={<HostForgotPwd />} />

        <Route path="/hostDashBoard" element={<HostDashBoard />}>
          <Route index element={<HostOverview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="updateProfile" element={<UpDateHost />} />
          <Route path="places" element={<Places />} />
          <Route path="newPlace" element={<NewPlace />} />
        </Route>

        <Route path="/loginGuest" element={<Guest />} />
        <Route path="/signupGuest" element={<GuestSignUp />} />
        <Route path="/forgotGuestPwd" element={<GuestForgotPwd />} />

        <Route path="/guestDashBoard" element={<GuestDashBoard />}>
          <Route index element={<GuestOverview />} />
          <Route path="updateProfile" element={<UpDateGuest />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="trips" element={<Trips />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
