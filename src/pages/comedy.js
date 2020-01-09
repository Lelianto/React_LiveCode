import React, { Component } from 'react';
import Header from '../components/header';
import Comedy from '../components/comedy';

class GenreComedy extends Component {

      render() {
          return (
            <div>
                <Header {...this.props} />
                <Comedy />
            </div>
            )
            };
      }

export default GenreComedy;