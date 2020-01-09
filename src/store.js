import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    listMovies:[],
    isLoading:true,
    photo:'',
    username:'',
    email:'',
    password:'',
    is_login: false
}

export const store = createStore(initialState)

export const actions = store => ({
  changeInput : (state,e) => {
    store.setState({ [e.target.name]: e.target.value });
  },

  postLogin : async (state) => {
      const username = store.getState('username')
      const password = store.getState('password')
      const mydata = {
          username: username,
          password: password
      };
      const test = await axios
          .post("https://api-todofancy.herokuapp.com/api/auth", mydata)
          .then(response => {
              return response
          })
          .catch(error => {
              return false
      })
      if (test) {
          store.setState({
              "photo": test.data.user_data.avatar,
              "is_login": true,
              "email": test.data.user_data.email,
              "username": test.data.user_data.username
          });
      }
  }
  });



