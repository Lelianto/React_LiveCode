import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    listNews:[],
    listTitles:[],
    isLoading:true,
    username:'',
    email:'',
    password:'',
    keyword:'',
    accKey:'',
    category:'',
    stateToChangeFromPage: "belum berubah",
    is_login: false
}

export const store = createStore(initialState)

export const actions = store => ({
    
  });



