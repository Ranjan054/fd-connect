import moment from 'moment';
import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { classStatus } from '../../utils/type-util';
import Spinner from '../Spinner/Spinner';

let filterObj = { subject: {} };

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
  const [filterFlag, setfilterFlag] = useState(false);
  const [filterQueryData, setfilterQueryData] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchData, setSearchyData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [showDateField, setShowDateField] = useState(false);
  const [subjectList, setSubjectList] = useState({});
  const [subjectListFlag, setSubjectListFlag] = useState(false);


  const response = useFetch({
    request: "/admin/bookedClasses",
    type: "get"
  });

  let filterSubject = {};
  if (response?.data?.list) {
    response.data.list.forEach((el) => {
      if (el?.classSubject) {
        if (filterSubject[el?.classSubject?.split(" ")[0]]) {
          return;
        } else {
          filterSubject[el?.classSubject?.split(" ")[0]] = el?.classSubject;
        }
      }
    });
  }
  // console.log(filterSubject, "filterSubject")

  if (searchFlag && !subjectListFlag) {
    const subjectInput = document.getElementById("subjectInput");
    if(subjectInput.value.length === 1) subjectInput.focus();    
  }

  const tabClickHandler = (tab, ctr, index) => {
    // setLoading(true);
    if (index === 0) {
      setFlag(false);
      // setLoading(false);
      return;
    }
    let result = (filterFlag ? filterQueryData : searchFlag ? searchData : response.data.list).filter((item) => classStatus(item.classStatus) === tab);
    setFilterList(result);
    setFlag(true);
    setShowTab(ctr);
  }

  const subjectCheckboxHandler = (key, value) => {
    if (filterObj?.subject[key]) {
      delete filterObj.subject[key]
    } else {
      filterObj.subject[key] = value;
    }
    // console.log(filterObj, "fff");
  };

  const ratingCheckboxHandler = (key, value) => {
    if (filterObj[key]) {
      delete filterObj[key]
    } else {
      filterObj[key] = value;
    }
    // console.log(filterObj, "fff");
  };

  const inputFilterHandler = (key, e) => {
    if (!e.target.value) {
      delete filterObj[key];
      return;
    }
    filterObj[key] = e.target.value;
    // console.log(filterObj, "input");
  };

  const inputSearchFilterHandler = (e) => {
    filterObj.subject = {};
    if (!e.target.value) {
      setSubjectListFlag(false);
      return;
    }
    let filteredSubjectList = Object.keys(filterSubject).filter((subject) => {
      if (filterSubject[subject].toLowerCase().includes((e.target.value).toLowerCase())) {
        return true;
      }
    });
    // console.log(filteredSubjectList, "filteredSubjectList")
    setSubjectList(filteredSubjectList);
    setSubjectListFlag(true);
  };

  const switchToFirstTab = () => {
    tabClickHandler("All", "pills-home", 0);
    var homeTabTrigger = document.querySelector('#pills-home-tab');
    // eslint-disable-next-line no-undef
    var tab = new bootstrap.Tab(homeTabTrigger);
    tab.show();
  };

  const onSearchHandler = (e) => {
    switchToFirstTab();
    let searchResutl = response.data.list.filter((list) => {
      if (list?.mentorDetails[0]?.mentorFirstName?.includes(e.target.value) || list?.studentDetails[0]?.studentFirstName?.includes(e.target.value)) {
        return list
      }
    });
    setSearchyData(searchResutl);
    setfilterFlag(false);
    setSearchFlag(true);
    // console.log("search worke", e.target.value, searchResutl);
  };

  const userTypeHandler = (key, value) => {
    if (value === "any") {
      setShowDateField(false);
    }
    if (value === "custom") {
      setShowDateField(true);
    }
    filterObj[key] = value;
    // console.log(filterObj, "type");
  };

  const filterClickListener = () => {
    switchToFirstTab();
    if (Object.keys(filterObj).length <= 1 && Object.keys(filterObj.subject).length === 0) {
      setSearchFlag(false);
      setfilterFlag(false);
      return;
    }
    // console.log(filterObj, "out");
    let filterResult = response?.data?.list.filter((list) => {
      if (filterObj?.userType && (filterObj?.userType === "all" || filterObj?.userType === list?.userType)) {
        return true;
      }
      if (filterObj?.userType && filterObj?.userType === list?.mentorDetails[0]?.userType) {
        return true;
      }
      if (Object.keys(filterObj.subject).length && list.classSubject) {
        let filteredSubject = false;
        Object.keys(filterObj.subject).forEach((el) => {
          if (list.classSubject?.toLowerCase() === filterObj.subject[el].toLowerCase()) {
            // console.log(filterObj.subject[el], list.classSubject, "iffffff--search filter data")
            filteredSubject = true;
          }
        })
        if (filteredSubject) return filteredSubject;
      }
      if (list?.mentorDetails[0]?.userType === 3 || list?.mentorDetails[0]?.userType === 2) {
        if (filterObj?.ratingAny && parseInt(list.averageRating) >= filterObj?.ratingAny?.split("-")[0] && parseInt(list.averageRating) <= filterObj?.ratingAny?.split("-")[1]) {
          return true;
        }
        if (filterObj?.ratingOne && Math.round(list.mentorDetails[0]?.averageRating) === parseInt(filterObj?.ratingOne?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingTwo && Math.round(list.mentorDetails[0]?.averageRating) === parseInt(filterObj?.ratingTwo?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingThree && Math.round(list.mentorDetails[0]?.averageRating) === parseInt(filterObj?.ratingThree?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingFour && Math.round(list.mentorDetails[0]?.averageRating) === parseInt(filterObj?.ratingFour?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingFive && Math.round(list.mentorDetails[0]?.averageRating) === parseInt(filterObj?.ratingFive?.split("-")[0])) {
          return true;
        }
      }
      if (filterObj?.bookingTime === "any") {
        return true;
      }
      if (filterObj?.bookingTime === "custom" && filterObj?.bookingTimeStart && filterObj?.bookingTimeEnd && list?.createdOn >= new Date(filterObj?.bookingTimeStart).toISOString() && list.createdOn <= new Date(filterObj?.bookingTimeEnd).toISOString()) {
        return true;
      }
    });

    setfilterQueryData(filterResult);
    // console.log(filterResult, "fff resutl");
    setSearchFlag(false);
    setfilterFlag(true);
  };

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
            <input id="subjectInput" onChange={(e) => onSearchHandler(e)} type="text" placeholder="Search ..." className="form-control" />
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
                  response?.data?.list && (flag ? filterList : filterFlag ? filterQueryData : searchFlag ? searchData : response.data.list).map((el) =>
                    <div key={el?.id} className={`class-list-wrap ${classStatus(el?.classStatus)}`}>
                      <div className="row align-items-center">
                        <div className="col-md-6 col-lg-7">
                          <div className="row align-items-center">
                            <div className="col-md-4">
                              <div className="class-list-doctor">
                                <img src={el?.mentorDetails[0]?.mentorProfilePicture} alt={el?.mentorDetails[0]?.mentorFirstName} className="img-fluid profile-img" />
                                <h5>{el?.mentorDetails[0]?.mentorFirstName} {el?.mentorDetails[0]?.mentorLastName}</h5>
                                <ul>
                                  {
                                    [...Array(Math.round(el?.mentorDetails[0]?.averageRating))].map((e, i) =>
                                      <li key={i}><i className="fas fa-star"></i></li>)
                                  }
                                  <li><span> {Math.round(el?.mentorDetails[0]?.averageRating)} <div className="text-dark d-inline">({el?.mentorDetails[0]?.totalRating})</div></span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="join-box-wrap">
                                <h6>{el?.classShortId}</h6>
                                <img src={"./assets/images/" + classStatus(el?.classStatus) + ".svg"} alt={classStatus(el?.classStatus)} className="img-fluid" />
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
                  <input onClick={() => userTypeHandler("userType", "all")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label">
                    Any
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => userTypeHandler("userType", 2)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                  <label className="form-check-label">
                    Doctor
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => userTypeHandler("userType", 3)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                  <label className="form-check-label">
                    Mentor
                  </label>
                </div>

              </div>

              <h4 className="mt-4">Subject</h4>
              <div className="rightbar-subject-filter-wrap list-item-scroll">

                <div className="row">
                  <div className="col-12">
                    <input onChange={(e) => inputSearchFilterHandler(e)} type="text" className="form-control" placeholder="Enter subject name...." style={{ background: "rgba(244, 244, 244, 0.7", borderRadius: "7px", height: "34px" }} />
                  </div>
                </div>

                {
                  !subjectListFlag && Object.keys(filterSubject).length && Object.keys(filterSubject).map((el) =>
                    <div key={el} className="form-check">
                      <input onClick={() => subjectCheckboxHandler(el, filterSubject[el])} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label ">
                        {filterSubject[el]}
                      </label>
                    </div>
                  )
                }
                {
                  subjectListFlag && subjectList.map((el) =>
                    <div key={el} className="form-check">
                      <input onClick={() => subjectCheckboxHandler(el, filterSubject[el])} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label ">
                        {filterSubject[el]}
                      </label>
                    </div>
                  )
                }

                {/* <div className="form-check">
                  <input onClick={() => subjectCheckboxHandler("medical", "Medical Genetics")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                  <label className="form-check-label">
                    Medical Genetics
                  </label>
                </div> */}

              </div>

              <div className="rightbar-ratings-filter-wrap">
                <h4 className="mt-4">Ratings</h4>

                <span style={{ fontWeight: "400", fontSize: "10px", lineHeight: "12px", color: "#979797" }}>This filter is
                  only applied to student who are enrolled as mentors</span>

                <div className="form-check">
                  <input onClick={() => ratingCheckboxHandler("ratingAny", "0-5")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1t" />
                  <label className="form-check-label">
                    Any
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => ratingCheckboxHandler("ratingOne", "1-1")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1ts" />
                  <label className="form-check-label">
                    <ul>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                    </ul>
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => ratingCheckboxHandler("ratingTwo", "2-2")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa" />
                  <label className="form-check-label">
                    <ul>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                    </ul>
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => ratingCheckboxHandler("ratingThree", "3-3")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1" />
                  <label className="form-check-label">
                    <ul>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                    </ul>
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => ratingCheckboxHandler("ratingFour", "4-4")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1q" />
                  <label className="form-check-label">
                    <ul>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                    </ul>
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => ratingCheckboxHandler("ratingFive", "5-5")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1qs" />
                  <label className="form-check-label">
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

              <h4 className="mt-4">Booking Time</h4>
              <div className='date-range-wrapper '>
                <div className="form-check">
                  <input onClick={() => userTypeHandler("bookingTime", "any")} className="form-check-input" type="radio" name="flexRadioDefaultDate" id="flexRadioDefault7" />
                  <label className="form-check-label">
                    Any
                  </label>
                </div>
                <div className="form-check">
                  <input onClick={() => userTypeHandler("bookingTime", "custom")} className="form-check-input" type="radio" name="flexRadioDefaultDate" id="flexRadioDefault18" />
                  <label className="form-check-label">
                    Custom
                  </label>
                  {
                    showDateField && <div className='date-wrapper'>
                      <div>
                        <p>From</p>
                        <input onChange={(e) => inputFilterHandler("bookingTimeStart", e)} className='date-picker' type="date" name="dateFrom" id="" />
                      </div>
                      <div>
                        <p>To</p>
                        <input onChange={(e) => inputFilterHandler("bookingTimeEnd", e)} className='date-picker' type="date" name="dateTo" id="" />
                      </div>
                    </div>
                  }

                </div>
              </div>

              <div className="rightbar-filter-bttn">
                <a href="#" onClick={() => filterClickListener()}>Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassManagement