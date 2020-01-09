import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/headerprofile";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';

const Profile = props => {
  console.warn("is_login", props);
  const is_login = props.is_login;
  const email = props.email;
  const full_name = props.username;
  const photo = props.photo;
  if (is_login === false) {
    return <Redirect to={{ pathname: "/login" }} />;
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
              marginTop: '200px'
            }}>
            <img style={{ width:'50px'}} src={photo}></img>
          </p>
          <p style={{
              textalign: "center",
              marginTop: '50px'
            }}>
            <label>Name:</label> {full_name}
          </p>
          <p style={{
              textalign: "center",
              marginTop: '50px'
            }}>
            <label>Email:</label> {email}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

export default connect("is_login, email, photo, username",actions)(withRouter(Profile));