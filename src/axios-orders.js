import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-62515.firebaseio.com/'
});

export default instance;

