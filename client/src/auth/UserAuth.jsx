import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';
const Userauth = ({ children }) => {
    const { user } = useContext(UserContext);
    // const [loading,setLoading] = useState(true);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
        if (!user) {
            navigate("/")
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default Userauth
