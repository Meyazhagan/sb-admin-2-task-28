import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "./dashboard";
import AddonsCarts from "./dashboard/addons-carts";
import AddonsTables from "./dashboard/addons-tables";
import ComponentsButtons from "./dashboard/components-buttons";
import ComponentsCards from "./dashboard/components-cards";
import Home from "./dashboard/home";
import PagesBlank from "./dashboard/pages-blank";
import PagesNotFound from "./dashboard/pages-not-found";
import UtilitiesAnimations from "./dashboard/utilities-animations";
import UtilitiesBorders from "./dashboard/utilities-borders";
import UtilitiesColors from "./dashboard/utilities-colors";
import UtilitiesOthers from "./dashboard/utilities-others";
import ForgotPage from "./forgot";
import LoginPage from "./login";
import RegisterPage from "./register";

function Routes() {
  return (
    <Switch>
      <Route path="/forgot-password" component={ForgotPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Dashboard>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/buttons" component={ComponentsButtons} />
          <Route path="/cards" component={ComponentsCards} />
          <Route path="/colors" component={UtilitiesColors} />
          <Route path="/borders" component={UtilitiesBorders} />
          <Route path="/animations" component={UtilitiesAnimations} />
          <Route path="/others" component={UtilitiesOthers} />
          <Route path="/not-found" component={PagesNotFound} />
          <Route path="/blank-page" component={PagesBlank} />
          <Route path="/charts" component={AddonsCarts} />
          <Route path="/tables" render={() => <AddonsTables id="table1" />} />
          <Redirect from="/dashboard" to="/" />
          <Redirect from="*" to="/not-found" />
        </Switch>
      </Dashboard>
    </Switch>
  );
}

export default Routes;
