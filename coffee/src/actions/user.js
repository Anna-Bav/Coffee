import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {setUser} from '../reducers/userReducer';
import jwt_decode from 'jwt-decode';



export const registration =  (email, password) => {
    // const [redirect, SetRedirect] = useState(false)
    return async dispatch => {
    try{
     
        const response = await axios.post('https://coffee11.herokuapp.com/registration',{
            email,
            password
        })
        console.log(response);
        dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log("I'm not registered")
            alert('login error')
                 
        }
    }
    
}

    

export const login = (email, password) => {
    return async dispatch => {
        try{
            const response = await axios.post('https://coffee11.herokuapp.com/login',{
                email,
                password
            })
            const decodedToken = jwt_decode(response.data.access_token);
            console.log(decodedToken);
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.access_token);
            console.log("I have token");
            return <Redirect to='main'/>;
          
        } catch (e) {
            console.log('token not given')
        }
    }
    
    
}

export const logout = () => {
    localStorage.clear();
}


export const auth = () => {
    return async dispatch => {
        try{
            const response = await axios.get('https://coffee11.herokuapp.com/login',
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('response', response)
           
        } catch (e) {
            alert('ошибка')
            localStorage.removeItem('token')
        }
    }
    
    
}