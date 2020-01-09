import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css';
import '../App.css';
import logo from '../images/logo.svg';
import tool1 from '../images/love.png'
import tool2 from '../images/share.png'
import tool3 from '../images/dislike.png'
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'
import axios from 'axios'

const apiKey = '5df2d02cbdb648bb8853f14401e283ab';
const baseUrl = 'https://newsapi.org/v2/'
const urlEverything = baseUrl + 'everything?q=bitcoin&apiKey=' + apiKey;

class NewsDetail extends React.Component {

    componentDidMount = () => {
        axios
            .get(urlEverything)
            .then(function (response) {
                store.setState({ listTitles: response.data.articles, isLoading:false})
            })
            .catch(function (error){
                store.setState({ isLoading: false})
            })
    };

    render (){
            const { listTitles, isLoading } = this.props;
            // console.warn('cek', isLoading)
            const topEverythings = listTitles.filter(item => {
                if (item.urlToImage!== null && item.title !== null && item.description !== null) {
                    return item;
                }
                return false
            });
            // console.warn('cektopeverything', topEverythings)

            const allEverythings = topEverythings.filter((element,i)=>(i<=4)).map((item, key) => {
                // console.log(item.urlToImage)
                return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 box_detail">
                            <img src={item.urlToImage} className="image_article"></img>
                            <a style={{ textDecoration:"none", color:'black'}} href={item.url}>
                            <h4 className="title">{item.title}</h4>
                            </a>
                            <p className="paragraph">{item.description}</p>
                            <p className="updated">Published At {item.publishedAt}</p>
                            <div className="container-fluid">
                                <div className="row toolset">
                                    <div className="col-md-4">
                                        <img className="tools" src={tool1}></img>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="tools" src={tool2}></img>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="tools" src={tool3}></img>
                                    </div>
                                </div>
                            </div>
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
                  : allEverythings
                  }
                </div>
            )
    }
}

export default connect("listTitles, isLoading",actions)(withRouter(NewsDetail));
