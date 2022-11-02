import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate} from 'react-router-dom'
import {useParams} from 'react-router'
import useAxios from '../utils/useAxios';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    const [islogged,setIslogged] = useState(()=> localStorage.getItem('authTokens') ? true : false)
    const baseURL = 'https://vips.vipsnepal.com'
    const navigate = useNavigate() 

    // const [target,setTarget] = useState()
    // let api = useAxios()
    // useEffect(() => {
    //     getNotes()
    //   }, [])
    //   let getNotes = async () => {
    //     let response = await api.get('/api/set_privilage/')
    //     if (response.status === 200) {
    //       setTarget(response.data)
    //       console.log(response.data);
    //     }
    //   }

    // let getNotes = async () =>{
    //     let response = await fetch(`${baseURL}/api/set_privilage/`,{
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     let data = await response.json()
    //     setTarget(data)

    // }


    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch(`${baseURL}/api/login/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            setIslogged(prev=>!prev)
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            alert('Something went wrong!')
        }
    }

    let reset_password = async (e )=> {
        e.preventDefault()
        await fetch(`${baseURL}/password_reset/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value})
        })
    }

    const changePassword = async(e) =>{
        e.preventDefault()
        let response = await fetch(baseURL+'/api/change_password/4', {
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${authTokens?.access}`
            },
            body:JSON.stringify({'old_password':e.target.oldpwd.value, 'password':e.target.pwd1.value, 'password2':e.target.pwd2.value})
        })
        if(response.status === 200){
            // navigate('/') 
            console.log('yess');
        }else{
            alert('Something went wrong!')
        }
    }
    


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
        setIslogged(false)
    }


    // let updateToken = async ()=> {

    //     let response = await fetch('http://127.0.0.1:8000/api/login/refresh/', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({'refresh':authTokens?.refresh})
    //     })

    //     let data = await response.json()
        
    //     if (response.status === 200){
    //         setAuthTokens(data)
    //         setUser(jwt_decode(data.access))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //     }else{
    //         logoutUser()
    //     }

    //     if(loading){
    //         setLoading(false)
    //     }
    // }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        islogged:islogged,
        reset_password:reset_password,
        baseURL:baseURL,
        changePassword:changePassword
    }


    useEffect(()=> {

        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
