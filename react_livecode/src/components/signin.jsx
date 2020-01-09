import React from 'react';
import '../styles/main-2.css';
import '../styles/bootstrap.min.css'
import axios from 'axios';
import logo from '../images/logo.svg';
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'

class SignIn extends React.Component {

    doLogin = async () => {
        await this.props.postLogin()
        console.warn('string cek', this.props.is_login)
        if (this.props.is_login){
            this.props.history.push("/profile");
        }
    }

    render() {
        return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                <img src={logo} id="icon" alt="User Icon" />
                </div>

                    {/* <!-- Login Form --> */}
                    <form onSubmit={e => e.preventDefault()}>
                        <input 
                        type="text" 
                        id="login" 
                        className="fadeIn second" 
                        name="username" 
                        placeholder="Masukkan username"
                        onChange={e => this.props.changeInput(e)} />
                        <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="password" 
                        placeholder="Masukkan password"
                        onChange={e => this.props.changeInput(e)} />
                        <input 
                        type="submit" 
                        className="fadeIn fourth" 
                        value="Masuk" 
                        onClick={this.doLogin}/>
                    </form>

                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
            </div>
        )
    }
}

export default connect("username, password, is_login",actions)(withRouter(SignIn));