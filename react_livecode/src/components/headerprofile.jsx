import React from 'react';
import '../styles/main.css';
import '../styles/bootstrap.min.css'
import logo from '../images/react.svg'
import logo_search from '../images/search.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'



class Header extends React.Component {

    handleSignOut = () => {
        store.setState({
            'is_login':false
        });
        console.warn('cek logout', store.is_login)
        this.props.history.push("/login");
      };

    render (){
        return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                        <img className="logo-react" src={logo} alt="" />
                    </div>
                    <div className="col-md-1 logo-name">
                        <Link to='/'> 
                        <h4 style={{ textDecoration:"none", color:'black'}}>Movie</h4>
                        </Link>
                    </div>
                    <div className="col-md-4 category">
                        <nav>
                            <ul className="list-unstyled">
                                <li className="navi">
                                    <Link to='/'>Home</Link></li>
                                <li className="navi">
                                    <Link to='/profile'>Profile</Link></li>
                                <li onClick={this.handleSignOut} className="navi">
                                    <Link to='/login'>Logout</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default connect("is_login, isLoading",actions)(withRouter(Header));