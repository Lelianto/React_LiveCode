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

const listGenre = ['romance', 'action','comedy','fiction']
class Home extends React.Component {

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

    filterByCategory = (word) => {
        this.props.checkCategory(word)
        this.props.history.replace('/'+word)
    }

    render (){
            const { listMovies, isLoading } = this.props;
            const allMoviesContent = listMovies.filter(item => {
                if (item.Poster!== null && item.Title !== null && item.Category !== null) {
                    return item;
                }
                return false
            });

            // Menampilkan Movie dengan genre Action
            const moviesHandle = allMoviesContent.filter((element,i)=>(i<=0)).map((item, key) => {
                return (
                <div className="container-fluid">
                    <div className="row">
                        {listGenre.map(genre=>
                        <div className="col-md-3 box_detail">
                            <h5>
                                {genre.toUpperCase()}
                            </h5>
                                <img src={item.Poster} className="image_article"></img>
                                <p style={{ textDecoration:"none", color:'black'}}>
                                <h4 className="title">{item.Title}</h4>
                                </p>
                                <p className="paragraph">{item.Year}</p>
                                <p className="paragraph">{item.Category}</p>
                                <p className="paragraph">{item.Synopsis}</p>
                            <p onClick={() => this.filterByCategory(genre)}>
                                <a href={genre}>
                                See Movie
                                </a>
                            </p>
                        </div>
                            )}
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

export default connect("listMovies, isLoading",actions)(withRouter(Home));
