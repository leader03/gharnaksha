import { useContext } from 'react'
import {Navigate, Outlet} from 'react-router'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return(
        !user ? <Navigate to='/login' /> : <Outlet />
        // <Route {...rest}>{!user ? navigate('/login') :   children}</Route>
    )
}

export default PrivateRoute;