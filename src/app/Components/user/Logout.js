import React from 'react'
import { useHistory } from "react-router-dom"
 function Logout() {
     const history = useHistory()
     console.log('geldim logout')
     localStorage.setItem('token',' ')
     history.push("/Login")
  return (
    <>   
    </>
  )
}

export default Logout;
