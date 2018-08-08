import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout";
import Auth from "./hoc/auth";

import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductPage from "./components/Product";
import ResetUser from "./components/Reset_user";
import ResetPass from "./components/Reset_user/reset_pass";

import RegisterLogin from "./components/Register_login";
import Register from "./components/Register_login/register";
import DashBoard from "./components/User";
import AddProduct from "./components/User/Admin/add_product";
import ManageCategories from "./components/User/Admin/manage_categories";
import UserCart from "./components/User/cart";
import UpdateProfile from "./components/User/update_profile";
import ManageSite from "./components/User/Admin/manage_site";
import AddFile from "./components/User/Admin/add_file";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/user/dashboard" component={Auth(DashBoard, true)} />
        <Route path="/user/cart" exact component={Auth(UserCart, true)} />
        <Route
          path="/user/user_profile"
          exact
          component={Auth(UpdateProfile, true)}
        />
        <Route
          exact
          path="/admin/add_product"
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/manage_categories"
          exact
          component={Auth(ManageCategories, true)}
        />
        <Route
          path="/admin/site_info"
          exact
          component={Auth(ManageSite, true)}
        />
        <Route path="/admin/add_file" exact component={Auth(AddFile, true)} />
        <Route
          path="/reset_password/:token"
          exact
          component={Auth(ResetPass, false)}
        />
        <Route path="/reset_user" exact component={Auth(ResetUser, false)} />
        <Route
          path="/product_detail/:id"
          exact
          component={Auth(ProductPage, null)}
        />
        <Route
          exact
          path="/register_login"
          component={Auth(RegisterLogin, false)}
        />
        <Route exact path="/register" component={Auth(Register, false)} />
        <Route exact path="/shop" component={Auth(Shop, null)} />
        <Route exact path="/" component={Auth(Home, null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
