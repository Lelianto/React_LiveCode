import React, { Component } from 'react';
import Header from '../components/header'
import NewsList from '../components/newslist'
import NewsDetail from '../components/newsdetail'

class FirstPage extends Component {

      render() {
          return (
            <div>
                <Header {...this.props} />
                <div className="container">
                  <div className="row">
                  <div className="col-md-4">
                    <NewsList/>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-7">
                    <NewsDetail />
                  </div>
                  </div>
                </div>
              </div>
            )
            };
      }

export default FirstPage