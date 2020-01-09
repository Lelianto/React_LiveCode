import React from "react";
import { Redirect } from "react-router-dom";
import SignIn from "../components/signin";
import Header from "../components/header";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';

const Profile = props => {
  console.warn("is_login", props);
  const is_login = props.is_login;
  const email = props.email;
  const full_name = props.username;
  if (is_login === false) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <React.Fragment>
        <Header/>
        <section className="content">
          <h1
            style={{
              textalign: "center",
              marginTop: '50px'
            }}
          >
            Profile
          </h1>
          <p style={{
              textalign: "center",
              marginTop: '50px'
            }}>
            <label>Email:</label> {email}
          </p>
          <p style={{
              textalign: "center",
              marginTop: '50px'
            }}>
            <label>Nama Lengkap:</label> {full_name}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

export default connect("is_login, email, username",actions)(withRouter(Profile));