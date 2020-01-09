import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css';
import '../App.css';
import logo from '../images/logo.svg';
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'
import axios from 'axios'

const allMovies ='https://api-todofancy.herokuapp.com/api/movies';

class Romance extends React.Component {

    componentDidMount = () => {
        axios
            .get(allMovies)
            .then(function (response) {
                store.setState({ listMovies: response.data.movies, isLoading:false})
                console.warn('list all movies', this.props.listMovies)
            })
            .catch(function (error){
                store.setState({ isLoading: false})
            })
    };

    render (){
            const { listMovies, isLoading } = this.props;
            const allMoviesContent = listMovies.filter(item => {
                if (item.Poster!== null && item.Title !== null && item.Category !== null) {
                    return item;
                }
                return false
            });

            // Menampilkan Movie dengan genre Romance
            const moviesHandle = allMoviesContent.filter((element,i)=>(element.Category==='romance')).map((item, key) => {
                console.log(item.Title)
                return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 box_detail">
                            <img src={item.Poster} className="image_article"></img>
                            <p style={{ textDecoration:"none", color:'black'}}>
                            <h4 className="title">{item.Title}</h4>
                            </p>
                            <p className="paragraph">{item.Year}</p>
                            <p className="paragraph">{item.Category}</p>
                            <p className="paragraph">{item.Synopsis}</p>
                        </div>
                    </div>
                </div>
                )
            }
            )
            return (
                <div className="everythingNews">
                  {isLoading ? <div style={{ textAlign:'center'}}> 
                  <div className="App">
                    <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    </div>
    
                  </div> 
                  : moviesHandle
                  }
                </div>
            )
    }
}

export default connect("listMovies, isLoading",actions)(withRouter(Romance));
