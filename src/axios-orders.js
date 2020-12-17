import axios from 'axios';

const instance = axios.create({
    baseURL: "https://build-a-burger-7f867-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default instance; 