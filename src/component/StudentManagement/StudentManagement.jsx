import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { status } from '../../utils/type-util';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';

const StudentManagement = () => {

  const tabData = [
    {
      content: "All",
      controls: "pills-home",
      active: true
    },
    {
      content: "Approved",
      controls: "pills-profile",
      active: false
    },
    {
      content: "Pending",
      controls: "pills-contact",
      active: false
    },
    {
      content: "Rejected",
      controls: "pills-disabled",
      active: false
    }
  ];

  const [showTab, setShowTab] = useState("pills-home");
  const [filterList, setFilterList] = useState([]);
  const [flag, setFlag] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const response = useFetch({
    request: "/admin/allStudents",
    type: "get"
  });

  const tabClickHandler = (tab, ctr, index) => {
    // setLoading(true);
    if (index === 0) {
      setFlag(false);
      // setLoading(false);
      return;
    }
    let result = response?.data?.students.filter((list) => status(list.isApproved) === tab);
    setFilterList(result);
    setFlag(true);
    setShowTab(ctr);
  }

  console.log(response, "res student");

  const openModalHandler = (id) => {
    console.log("modal");
    setId(id)
    setShow(true);
  }

  const closeModalHandler = () => {
    setShow(false);
  }

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
              {
                tabData.map((el, index) =>
                  <li key={el?.content} className="nav-item" role="presentation">
                    <button onClick={() => tabClickHandler(el?.content, el?.controls, index)} className={`nav-link ${index === 0 ? "active" : ""} `} id={`${el?.controls}-tab`} data-bs-toggle="pill" data-bs-target={"#" + el?.controls} type="button" role="tab" aria-controls={el?.controls} aria-selected={el?.active}>{el?.content}</button>
                  </li>
                )
              }
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
                <div className="tab-pane fade show active" id={showTab + "-tab"} role="tabpanel" aria-labelledby={showTab} tabIndex="0">
                  {
                    response?.data?.students && (flag ? filterList : response.data.students).map((el) =>
                      <div key={el?.id} className={`doctor-manage-list-wrap status-${status(el?.isApproved).toLowerCase()}`}>
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
                          <span className={el?.isApproved ? "approved" : ""}>{status(el?.isApproved)}</span>
                          <a href="javascript:void(0)" onClick={() => openModalHandler(el?.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-angle-right"></i></a>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="right-sidebar-wrap pt-0">
                <div className="rightbar-experience-filter-wrap py-4" style={{ background: "#FAFAFA" }}>
                  <h4 className="ps-0">Student Type</h4>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label custom-weight" htmlFor="flexRadioDefault1">
                      Any
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                    <label className="form-check-label " htmlFor="flexRadioDefault12">
                      Only Student
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                    <label className="form-check-label " htmlFor="flexRadioDefault14">
                      Mentor
                    </label>
                  </div>

                </div>

                <h4 className="mt-4">Branch</h4>
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
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
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

                <div className="rightbar-ratings-filter-wrap">
                  <h4 className="mt-4">Ratings</h4>

                  <span style={{ fontWeight: "400", fontSize: "10px", lineHeight: "12px", color: "#979797" }}>This filter is
                    only applied to student who are enrolled as mentors</span>

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
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault"
                      id="flexRadioDefault1tsa1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1tsa1">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault"
                      id="flexRadioDefault1tsa1q" />
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
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault"
                      id="flexRadioDefault1tsa1qs" />
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

      {
        <Modal student={true} id={id} show={show} closeModal={closeModalHandler} />
      }
    </>
  )
}

export default StudentManagement