import React, { useEffect } from 'react'
import { useAuth } from '../contexts/FakeAuthContext'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteType = {
    children:React.ReactNode
}

export default function ProtectedRoute({children}:ProtectedRouteType) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if (!isAuthenticated) navigate("/")
    }, [isAuthenticated, navigate])

    return isAuthenticated ? children : null
}
