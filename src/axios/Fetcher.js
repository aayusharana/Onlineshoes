import {notification} from 'antd';
import axios from 'axios';

// const REACT_API_BASE_URL='https://fakestoreapi.com/'


const api =axios.create({
    baseURL:process.env.REACT_APP_API
});

export const get = async(endpoint)=>{
    try{
        const response = await api.get(endpoint);
        return response.data;
    } catch(error){
        notification.error({message:`${error.message}`,placement:"bottomRight"})
    }
}