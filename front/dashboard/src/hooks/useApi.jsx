import axios from 'axios';

export const api = axios.create({
   baseUrl: process.env.REACT_APP_API
});


