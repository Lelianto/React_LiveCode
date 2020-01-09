import React from 'react';
import '../styles/main.css';
import '../styles/bootstrap.min.css'
import logo from '../images/react.svg'
import logo_search from '../images/search.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'

const listCategory = ['Sport','Business','Health']

class Header extends React.Component {

    handleSignOut = () => {
        store.setState({is_login:false});
        this.props.history.push("/");
      };

    filterByCategory = (word) => {
        this.props.checkCategory(word)
        this.props.history.replace('/category/'+word)
    }

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
                        <h4 style={{ textDecoration:"none", color:'black'}}>KabarKabar</h4>
                        </Link>
                    </div>
                    <div className="col-md-4 category">
                        <nav>
                            <ul className="list-unstyled">
                                {listCategory.map(category=>
                                <li onClick={() => this.filterByCategory(category)} className="navi"> 
                                  <Link>{category}</Link></li>
                                )}
                                <li className="navi">
                                    <Link to='/Profile'>Profile</Link></li>
                                <li className="navi">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            <a >Others</a></button>
                                        <div class="dropdown-content">
                                            <Link to='/others/general' onClick={() => this.filterByCategory('general')}>General</Link>
                                            <Link to='/others/education' onClick={() => this.filterByCategory('business')}>Business</Link>
                                            <Link to='/others/government' onClick={() => this.filterByCategory('technology')}>Technology</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-3 search">
                        
                        <div className="active-cyan-4 mb-4">
                            <input 
                            className="form-control" 
                            style={{ backgroundColor:'white', border:'1px gray solid', marginRight:'-60px'}} 
                            type="text" 
                            onChange={event => this.props.handleSearch(event)}
                            placeholder='Search'
                            aria-label="Search" />
                        </div>

                    </div>
                    <div className="col-md-1">
                        <img className="search1" src={logo_search} alt=""/>
                    </div>
                    <div className="col-md-2 user_in">
                        <nav>
                            <ul className="list-unstyled navigate">
                                <li className="navi1">
                                    <Link to="/signin">Masuk</Link></li>
                                <li className="navi1">
                                    <Link to='/' 
                                    onClick={() => this.handleSignOut()}>Keluar</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default connect("category, isLoading",actions)(withRouter(Header));