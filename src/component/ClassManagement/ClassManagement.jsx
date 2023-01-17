import moment from 'moment';
import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { classStatus } from '../../utils/type-util';
import Spinner from '../Spinner/Spinner';

const ClassManagement = () => {

  const tabData = [
    {
      content: "All",
      controls: "pills-home",
      active: true
    },
    {
      content: "Upcoming",
      controls: "pills-profile",
      active: false
    },
    {
      content: "Completed",
      controls: "pills-contact",
      active: false
    },
    {
      content: "Cancelled",
      controls: "pills-disabled",
      active: false
    },
    {
      content: "Missed",
      controls: "pills-disableds",
      active: false
    }
  ];


  const [showTab, setShowTab] = useState("pills-home");
  const [filterList, setFilterList] = useState([]);
  const [flag, setFlag] = useState(false);

  const response = useFetch({
    request: "/admin/bookedClasses",
    type: "get"
  });

  const tabClickHandler = (tab, ctr, index) => {
    // setLoading(true);
    if (index === 0) {
      setFlag(false);
      // setLoading(false);
      return;
    }
    let result = response?.data?.list.filter((item) => classStatus(item.classStatus) === tab);
    setFilterList(result);
    setFlag(true);
    setShowTab(ctr);
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
                {/* <!-- class single item start --> */}

                {
                  response?.data?.list && (flag ? filterList : response.data.list).map((el) =>
                    <div key={el?.id} className={`class-list-wrap ${classStatus(el?.classStatus)}`}>
                      <div className="row align-items-center">
                        <div className="col-md-6 col-lg-7">
                          <div className="row align-items-center">
                            <div className="col-md-4">
                              <div className="class-list-doctor">
                                <img src={el?.mentorDetails[0]?.mentorProfilePicture} alt={el?.mentorDetails[0]?.mentorFirstName} className="img-fluid profile-img" />
                                <h5>{el?.mentorDetails[0]?.mentorFirstName} {el?.mentorDetails[0]?.mentorLastName}</h5>

                                {/* <ul>
                                  {
                                    [...Array(Math.round(el?.mentorDetails[0]?.averageRating))].map((e, i) =>
                                      <li key={i}><i className="fas fa-star"></i></li>)
                                  }
                                  <li><span> {Math.round(el?.mentorDetails[0]?.averageRating)} <div className="text-dark d-inline">({el?.mentorDetails[0]?.totalRating})</div></span></li>
                                </ul> */}

                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="join-box-wrap">
                                <h6>{el?.id}</h6>
                                <img src={"./assets/images/"+classStatus(el?.classStatus)+".svg"} alt={classStatus(el?.classStatus)} className="img-fluid" />
                                <h4>{el?.classSubject}</h4>
                                <p>{el?.classDuration} <i className="fas fa-circle"></i> <strong className={`text-${classStatus(el?.classStatus)}`}>{classStatus(el?.classStatus)}</strong></p>
                              </div>
                            </div><div className="col-md-4">
                              <div className="class-list-doctor">
                                <img src={el?.studentDetails[0]?.studentProfilePicture} alt={el?.studentDetails[0]?.studentFirstName} className="img-fluid profile-img" />
                                <h5>{el?.studentDetails[0]?.studentFirstName} {el?.studentDetails[0]?.studentLastName}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                          <div className="class-lists-table">
                            <table>
                              <thead>
                                <tr>
                                  <th>
                                    Booking Date:
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="pb-4">
                                    {el?.createdOn && moment(el?.createdOn).format('Do MMMM-YYYY h:mm:ss') + " IST"}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Class Date:</th>
                                </tr>
                                <tr>
                                  <td>
                                    {el?.classStartPoint && moment(el?.classStartPoint).format('Do MMMM-YYYY h:mm:ss') + " IST"}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
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
                <h4 className="ps-0">Tutor</h4>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label custom-weight" htmlFor="flexRadioDefault1">
                    Any
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                  <label className="form-check-label " htmlFor="flexRadioDefault12">
                    Doctor
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

                <span style={{ fontWeight: "400", fontSize: "10px", lineHeight: "12px", color: "#979797" }} >This filter is only applied to student who are enrolled as mentors</span>

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
  )
}

export default ClassManagement