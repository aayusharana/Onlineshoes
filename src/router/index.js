import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Adminlayout from "../layout/AdminLayout";
import AdminDashBoard from "../component/admin/DashBoard";
import UserDashBoard from "../component/user/DashBoard";
import AboutUs from "../component/aboutus/AboutUs";
import ContactUs from "../component/user/ContactUs";
import HotProduct from "../component/user/HotProduct";
import UserLayout from "../layout/UserLayout";
import PageNotFound from "../component/PageNotFound";
import UserDetail from "../component/user/UserDetail";
import AuthLayOut from "../layout/AuthLayOut";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";
import TrendingVender from "../component/user/TrendingVender";
import Profile from "../component/user/profile/Profile";






export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserDashBoard />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="HotProduct" element={<HotProduct />}/>
         <Route path="TrendingVender" element={<TrendingVender/>}/>
         <Route path="User/Profile" element={<Profile/>}/>


        <Route path="/UserDetail/:id" element={<UserDetail />} />
      </Route>
      <Route path="/auth" element={<AuthLayOut />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />

      <Route path="/admin" element={<Adminlayout />}>
        <Route index element={<AdminDashBoard />} />
      </Route>
    </Route>

  )
);
