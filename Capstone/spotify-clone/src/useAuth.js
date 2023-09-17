import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    // posts sent to port 3001 that server is listenging on, handles refresh token and access token
    useEffect(() => {
        axios
            .post("http://localhost:3001/login", {
                code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, "/")
            })
            .catch(() => {
                window.location = "/"
            })
    }, [code])

    // refreshes access token every 60 seconds
    // send code to port 3001 that server is listenging on, handles refresh token and access token
    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios
                .post("http://localhost:3001/refresh", {
                    refreshToken,
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                })
                .catch(() => {
                    window.location = "/"
                })
        }, (expiresIn - 60) * 1000) // refresh token every 60 seconds

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}
