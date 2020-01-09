import React from 'react';
import '../styles/main.css';
import '../styles/bootstrap.min.css'
import axios from 'axios';
import '../App.css';
import logo from '../images/logo.svg';
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { store, actions } from '../store'

const apiKey = '5df2d02cbdb648bb8853f14401e283ab';
const baseUrl = 'https://newsapi.org/v2/'
const urlHeadline = baseUrl + 'top-headlines?country=id&apiKey=' + apiKey;

class NewsList extends React.Component {

    componentDidMount = () => {
        const self = this
        axios
            .get(urlHeadline)
            .then(function (response) {
                store.setState({ listNews: response.data.articles, isLoading:false})
            })
            .catch(function (error){
                store.setState({ isLoading: false})
            })
    };

    render (){
        const { listNews, isLoading } = this.props;
        // console.log('cek', listNews)
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false
        });
        // console.log('cektophead', topHeadlines)
    const allTopList = topHeadlines.filter((element,i)=>(i<=4)).map((item, key) => {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box_list1">
                            <div className="col-12">
                                <div className=" no_news">#{key+1}</div>
                            </div>
                            <p></p>
                            <div className="col-12">
                                <a style={{textDecoration:'none'}} href={item.url} 
                                className="news_title">{item.title} </a> 
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
          <div className="headlineNews">
            {isLoading ? <div style={{ textAlign:'center'}}> 

            <div className="App">
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
            
            </div> : 
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box_list">Berita Terkini</div>
                        <a className="see_all" href="">Lihat Semua</a>
                        </div>
                    </div>
                </div>
                {allTopList}          
            </div>
            }
            </div>
    )
    }
}

export default connect("listNews, isLoading",actions)(withRouter(NewsList));

// export default NewsList;