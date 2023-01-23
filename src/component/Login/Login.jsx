import axios from 'axios';
import React, { useState } from 'react';
import futureDoctor from '../../assets/images/future-doctor.svg';
import { BASE_URL } from '../../constant/index'
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    const onChangeHandler = (name, e) => {
        setFormData({ ...formData, [name]: e.target.value })
    }

    const omSubmitHandler = () => {
        axios.post(`${BASE_URL}/admin/login`, {
            ...formData,
            // signInType: 200
        })
            .then((res) => {
                if (res.data.token) {
                    localStorage.clear();
                    localStorage.setItem("token", res.data.token);
                    // document.cookie = `token=${res.data.token}`;
                    setShowSuccess(true)
                    setTimeout(() => {
                        navigate("/", { replace: true })
                    }, 200)
                } else {
                    setShow(true)
                }
            })
            .catch((err) => console.log(err, "error log"))
    }

    // console.log(formData);

    return (
        <>
            <ToastContainer className="p-4" position={"top-end"}>
                <Toast onClose={() => setShow(false)} show={show} delay={3500} autohide bg={"danger"}>
                    <Toast.Header>
                        <strong className="me-auto">Failed</strong>
                    </Toast.Header>
                    <Toast.Body>Invalid Credential!</Toast.Body>
                </Toast>
                <Toast onClose={() => setShowSuccess(false)} show={showSuccess} delay={3500} autohide bg={"success"}>
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>Login Successfully!</Toast.Body>
                </Toast>
            </ToastContainer>

            <section className="admin-login-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                            <div className="change-pasword-section-wrap admin-wrap-bg bg-transparent">
                                <div className="admin-head">
                                    <h5>Welcome back,</h5>
                                    <h2>Admin</h2>
                                </div>
                                <div className="change-password-box-wrap" style={{ borderRadius: "20px" }}>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="row">
                                            <div className="col-lg-8 col-md-9">
                                                <div style={{paddingRight: "1.5rem"}}>
                                                    <h1>Login to continue</h1>
                                                    <p>Enter your Email address and password</p>
                                                    <div className="form-floating mb-3">
                                                        <input value={formData?.email} onChange={(e) => onChangeHandler('email', e)} type="email" className="form-control" id="floatingInput" placeholder="Enter your Email" />
                                                        <label htmlFor="floatingInput">Enter your Email</label>
                                                    </div>
                                                    <div className="form-floating mb-5">
                                                        <input value={formData?.password} onChange={(e) => onChangeHandler('password', e)} type="password" className="form-control" id="floatingPassword" placeholder="Enter your Password" />
                                                        <label htmlFor="floatingPassword">Enter your Password</label>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <div className="form-submit-bttn mt-5">
                                                        <button onClick={() => omSubmitHandler()} className="btn btn-sub mt-5">Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-3">
                                                <div className="change-pass-right">
                                                    <img src={futureDoctor} alt="Dots" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login