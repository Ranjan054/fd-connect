import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner';

const DoctorManagement = () => {

  const response = useFetch({
    request: "/admin/allDoctors",
    type: "get"
  })

  console.log(response, "doctor manage");

  if (response?.loading) return <Spinner />
  if (response?.error) {
    return (
      <div className="col-xl-10 col-lg-9 col-md-8 col-12  px-md-0">
        <h3 className='error-message'>Something went wrong, please try again!</h3>
      </div>
    )
  }

  return (
    <>
      <div className="col-xl-10 col-lg-9 col-md-8 col-12  px-md-0">
        <div className="doctor-management-head-wrap">
          <div className="management-head-tab-wrap">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Approved</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Pending</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Rejected</button>
              </li>
            </ul>
          </div>
          <div className="management-head-search-wrap">
            <form action="">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search ..." className="form-control" />
            </form>
          </div>
        </div>

        <div className="doctor-manageemnt-body-wrap">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="tab-content p-5 pe-2" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                  {
                    response?.data?.doctors &&
                    response?.data?.doctors.map((el) =>
                      <div key={el?.id} className={`doctor-manage-list-wrap ${el?.isApproved ? "" : "status-rejectted"}`}>
                        <div className="media">
                          <img src={el?.profilePicture} alt={el?.firstName} className="img-fluid profile-img" />
                          <div className="media-body">
                            <h5>{el?.firstName}</h5>
                            <h6>Specialist of {el?.specializationSubject}</h6>
                            <ul>
                              {
                                [...Array(Math.round(el?.averageRating))].map((e, i) => 
                                <li key={i}><i className="fas fa-star"></i></li>)
                              }
                              <li><span> {Math.round(el?.averageRating)} <div className="text-dark d-inline">({el?.totalRating})</div></span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="doctor-status-wrap">
                          <span className={el?.isApproved ? "approved" : ""}>{el?.isApproved ?"Approved": "Rejected"}</span>
                          <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-angle-right"></i></a>
                        </div>
                      </div>)
                  }
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="right-sidebar-wrap">
                <h4>Subject</h4>
                <div className="rightbar-subject-filter-wrap">

                  <div className="row">
                    <div className="col-7">
                      <div className="form-check border-0">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaulta" defaultChecked />
                        <label className="form-check-label custom-weight" htmlFor="flexCheckDefaulta">
                          Pre-Clinical
                        </label>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="form-check border-0">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaults" />
                        <label className="form-check-label" htmlFor="flexCheckDefaults">
                          Clinical
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="Enter subject name...." style={{ background: "rgba(244, 244, 244, 0.7", borderRadius: "7px", height: "34px" }} />
                    </div>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label custom-weight" htmlFor="flexCheckDefault">
                      Allergy and Immunology
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                      Anesthesiology
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" defaultChecked />
                    <label className="form-check-label custom-weight" htmlFor="flexCheckDefault2">
                      Dermatology
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                      Emergency medicine
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                      Internal medicine
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                      Medical Genetics
                    </label>
                  </div>

                </div>
                <h4 className="mt-4">Experience</h4>
                <div className="rightbar-experience-filter-wrap">

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label custom-weight" htmlFor="flexRadioDefault1">
                      Any
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                    <label className="form-check-label " htmlFor="flexRadioDefault12">
                      Below 1 year
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                    <label className="form-check-label " htmlFor="flexRadioDefault14">
                      1 to 3 years
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault145" />
                    <label className="form-check-label " htmlFor="flexRadioDefault145">
                      3 - 5 years
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1456" />
                    <label className="form-check-label " htmlFor="flexRadioDefault1456">
                      Above 5 years
                    </label>
                  </div>

                  <div className="row mt-3">
                    <div className="col-4">
                      <input type="text" className="form-control" placeholder="Min..." style={{ background: "rgba(244, 244, 244, 0.7", borderRadius: "7px", height: "34px" }} />
                    </div>
                    <div className="col-4">
                      <input type="text" className="form-control" placeholder="Max..." style={{ background: "rgba(244, 244, 244, 0.7", borderRadius: "7px", height: "34px" }} />
                    </div>
                  </div>

                </div>
                <div className="rightbar-ratings-filter-wrap">
                  <h4 className="mt-4">Ratings</h4>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1t" />
                    <label className="form-check-label custom-weight" htmlFor="flexRadioDefault1t">
                      Any
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1ts" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1ts">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1tsa">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1tsa1">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1q" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1tsa1q">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1qs" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1tsa1qs">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>

                </div>
                <div className="rightbar-filter-bttn">
                  <a href="#">Apply</a>
                </div>
              </div>
            </div>
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
                <div className="modal-tab-wrap">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-homes-tab" data-bs-toggle="pill" data-bs-target="#pills-homes" type="button" role="tab" aria-controls="pills-homes" aria-selected="true">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profiles-tab" data-bs-toggle="pill" data-bs-target="#pills-profiles" type="button" role="tab" aria-controls="pills-profiles" aria-selected="false">Uploads</button>
                    </li>
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-homes" role="tabpanel" aria-labelledby="pills-homes-tab" tabIndex="0">
                      <div className="modal-tab-txt-wrap">
                        <div className="row">
                          <div className="col-lg-3">
                            <h5>Student (Mentor)</h5>
                            <p>Harvard University, (IV sem)</p>
                            <p>Studying <strong>Cardiology</strong></p>

                            <h5>Contact</h5>
                            <p>+91 96996 96996</p>
                            <a href="mailto:Ozark.343@gmail.com">Ozark.343@gmail.com</a>
                          </div>
                          <div className="col-lg-6">
                            <div className="modal-profile-box">
                              <img src="./assets/images/mentor-01.png" alt="a" className="img-fluid" />
                              <h5>Ozark Cling</h5>
                              <h6>India</h6>
                            </div>
                          </div>
                        </div>

                        <h5>Mentoring Subjects</h5>
                        <img src="./assets/images/m-01.png" alt="a" className="img-fluid" />
                        <img src="./assets/images/m-03.png" alt="a" className="img-fluid" />
                        <img src="./assets/images/m-02.png" alt="a" className="img-fluid" />
                        <img src="./assets/images/m-04.png" alt="a" className="img-fluid" />

                        <h5>About</h5>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi tortor morbi lobortis tincidunt nunc mauris id molestie convallis. Dui, eu viverra dis lectus eget enim eleifend pharetra. Egestas u viverra dis lectus eget enim eleifend pharetra. Egestas adipiscing pretium sed sit lobortis. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi tortor morbi lobortis tincidunt nunc mauris id molestie convallis. Dui, eu viverra dis lectus eget enim eleifend pharetra. Egestas adipiscing pretium sed sit lobortis.
                        </p>

                        <h5>Experience that stands out</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi tortor morbi lobortis tincidunt nunc mauris id molestie convallis. Dui, eu viverra dis retium sed sit lobortis.
                        </p>

                        <h5>Language</h5>
                        <p>English, German</p>
                      </div>
                      <div className="modal-ftr-bttn">
                        <button type="reset" className="btn btn-reject">Reject</button>
                        <button type="reset" className="btn btn-accept">Accept</button>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profiles" role="tabpanel" aria-labelledby="pills-profiles-tab" tabIndex="0">
                      <div className="modal-tab-txt-wrap">
                        <h5>Documents</h5>
                      </div>

                      <div className="modal-post-height-fixed">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="modal-post-box">
                              <img src="./assets/images/document-01.png" alt="Post" className="img-fluid" />
                              <span>ID</span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="modal-post-box">
                              <img src="./assets/images/document-02.png" alt="Post" className="img-fluid" />
                              <span>DEGREE</span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="modal-post-box">
                              <img src="./assets/images/post-01.png" alt="Post" className="img-fluid" />
                              <span>23 nov 2022, 14:03</span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="modal-post-box">
                              <img src="./assets/images/post-01.png" alt="Post" className="img-fluid" />
                              <span>23 nov 2022, 14:03</span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="modal-post-box">
                              <img src="./assets/images/post-01.png" alt="Post" className="img-fluid" />
                              <span>23 nov 2022, 14:03</span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="modal-post-box">
                              <img src="./assets/images/post-01.png" alt="Post" className="img-fluid" />
                              <span>23 nov 2022, 14:03</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="modal-ftr-bttn">
                        <button type="reset" className="btn btn-reject">Reject</button>
                        <button type="reset" className="btn btn-accept">Accept</button>
                      </div>

                    </div>
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

export default DoctorManagement