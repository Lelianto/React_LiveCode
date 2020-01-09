import React, { Component } from 'react';
import Header from '../components/header';
import Romance from '../components/romance'

class GenreRomance extends Component {

      render() {
          return (
            <div>
                <Header {...this.props} />
                <Romance />
            </div>
            )
            };
      }

export default GenreRomance