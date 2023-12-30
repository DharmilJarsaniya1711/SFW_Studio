import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from "./homepage/index";
import Programs from "./homepage/Programs";
import DetailProgram from "./homepage/DetailProgram";
import Membership from "./homepage/Membership";
import MembershipDetail from "./homepage/MembershipDetail";
import Payment from "./homepage/Payment";
import About from "./homepage/About";
import Contact from "./homepage/Contact";
import Blog from "./homepage/Blog";
import DetailBlog from "./homepage/DetailBlog";
import Faq from "./homepage/Faq";
import Trainers from "./homepage/Trainers";
import Privacy from "./homepage/Privacy ";
import Terms from "./homepage/Terms";

const Index = (props) => {
  return (
    <Fragment>
      <Router forceRefresh>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/programs">
            <Programs />
          </Route>
          <Route exact path="/programs/detail">
            <DetailProgram />
          </Route>
          <Route exact path="/membership">
            <Membership />
          </Route>
          <Route exact path="/membership/detail">
            <MembershipDetail />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/blog/detail">
            <DetailBlog />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/trainers">
            <Trainers />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;
