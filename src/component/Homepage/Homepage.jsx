import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import dashboardIcon from "../../assets/images/dashboard-icon-1.svg"
import doctorIcon from "../../assets/images/doctor-icon.svg"
import studentIcon from "../../assets/images/student-manage-icon.svg"
import classIcon from "../../assets/images/class-manage-icon.svg"
import passwordIcon from "../../assets/images/change-pas-icon.svg"

const Homepage = () => {
    return (
        <div>
            <section className="main-area-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-12 px-md-0">
                            <div className="sidebar-main-wrap">
                                <div className="sidebar-profile-wrap">
                                    <span>
                                        <h6>Welcome back,</h6>
                                        <h5>Andrew! <i className="fas fa-angle-down"></i></h5>
                                    </span>
                                    <a className="d-md-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                        <i className="fas fa-bars"></i>
                                    </a>
                                </div>

                                <div className="sidebar-nav-wrap d-none d-md-block">
                                    <ul>
                                        <li>
                                            <NavLink className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            } to="dashboard">
                                                <img src={dashboardIcon} alt="Icon" className="img-fluid" /> Dashboard
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            } to="doctor-management">
                                                <img src={doctorIcon} alt="Icon" className="img-fluid" /> Doctor Management
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            } to="student-management">
                                                <img src={studentIcon} alt="Icon" className="img-fluid" /> Student Management
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            } to="class-management">
                                                <img src={classIcon} alt="Icon" className="img-fluid" /> Class Management
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            } to="change-pasword">
                                                <img src={passwordIcon} alt="Icon" className="img-fluid" /> Change Password
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage;