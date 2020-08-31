import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://dhullo-demo.firebaseio.com/'
});

export default instance;

