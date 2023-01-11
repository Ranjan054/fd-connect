import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constant';
import { useNavigate } from "react-router-dom";

export const useFetch = (props) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();


    const { request, type } = props;
    const [state, setState] = useState({
        data: null,
        error: null,
        loading: true
    });

    useEffect(() => {
        if (type === "get") {
            axios.get(`${BASE_URL}${request}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((res) => {
                    if (res.data) {
                        setState({ data: res.data.response, error: null, loading: false })
                    }
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        localStorage.removeItem("token");
                        setTimeout(() => {
                            navigate("/login", { replace: true })
                        }, 200)
                    } else {
                        setState({ data: null, error: err.message, loading: false })
                    }
                })
        }
    }, [request])

    return state;
}

