import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../constant';


const ChangePassword = () => {
  const navigate = useNavigate();
  const [formField, setFormField] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onChangeHandler = (name, e) => {
    setFormField({ ...formField, [name]: e.target.value })
    // console.log({ formField });
  }

  const omSubmitHandler = () => {
    // console.log(formField)
    // axios.post(`${BASE_URL}/admin/login`, {
    //   ...formField,
    // })
    //   .then((res) => {
    //     if (res.data.token) {
    //       localStorage.clear();
    //       localStorage.setItem("token", res.data.token);
    //       // document.cookie = `token=${res.data.token}`;
    //       setShowSuccess(true)
    //       setTimeout(() => {
    //         navigate("/", { replace: true })
    //       }, 200)
    //     } else {
    //       setShow(true)
    //     }
    //   })
    //   .catch((err) => console.log(err, "error log"))
  }

  return (
    <>
      <div style={{ borderLeft: "0.5px solid #979797" }} className="col-xl-10 col-lg-9 col-md-8 col-12  px-md-0">
        <div className="change-pasword-section-wrap">
          <div className="change-password-box-wrap">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <h1>Change your password</h1>

                  <p>Click Confirm after entering your <br />
                    old and new password</p>

                  <div className="form-floating mb-3">
                    <input type="text" value={formField?.currentPassword} onChange={(e) => onChangeHandler('currentPassword', e)} className="form-control" id="floatingInput" placeholder="Current password" />
                    <label htmlFor="floatingInput">Current password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" value={formField?.newPassword} onChange={(e) => onChangeHandler('newPassword', e)} className="form-control" id="floatingPassword" placeholder="New password" />
                    <label htmlFor="floatingPassword">New password</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" value={formField?.confirmPassword} onChange={(e) => onChangeHandler('confirmPassword', e)} className="form-control" id="floatingPassword" placeholder="Confirm New password" />
                    <label htmlFor="floatingPassword">Confirm New password</label>
                  </div>

                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="change-pass-right">
                    <img src="./assets/images/dots.svg" alt="Dots" className="img-fluid" />
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-5">
                  <div className="change-pass-right change-pass-right-2">
                    <img src="./assets/images/check-circle.svg" alt="Dots" className="img-fluid">
                    <h6>Password change <br>
                      Successfully</h6>
                  </div>
                  </div> */}


                {/* <div className="col-lg-6 col-md-5">
                  <div className="change-pass-right change-pass-right-2">
                    <img src="./assets/images/close-circle.svg" alt="Dots" className="img-fluid">
                    <h6 className="my-2" style="color: #F48555;">Could not change <br>
                      password</h6>
                      <span style="color: #F48555; font-size: 14px;">*You have entered wrong current password</span>
                  </div>
                  </div> */}

                <div className="col-12">
                  <div className="form-submit-bttn">
                    <button onClick={() => omSubmitHandler()} className="btn btn-sub">Confirm</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal-section">
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-main-txt">
                <a href="#" data-bs-dismiss="modal" aria-label="Close" className="d-block text-end">
                  <img src="./assets/images/close-icon.svg" alt="X" className="img-fluid" width="40" />
                </a>
                <div className="date-picker-wraper">
                  <div className="selected-date"></div>

                  <div className="dates-container">
                    <div className="month">
                      <div className="arrows prev-month">&lt;</div>
                      <div className="month-item"></div>
                      <div className="arrows next-month">&gt;</div>
                    </div>

                    <div className="days-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword