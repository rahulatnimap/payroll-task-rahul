import React from 'react'
import { getToken } from '../utils/utils'
import { Navigate } from 'react-router-dom';
import PreLogin from '../layout/preLogin/PreLogin';

const PrivateRoutes = ({ component : component }) => {
  const authenticate = getToken();
  return (
  authenticate ? component : <Navigate to='/login'/>
  )
}

export default PrivateRoutes