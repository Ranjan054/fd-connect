import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { status } from '../../utils/type-util';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';

let filterObj = { subject: {} };

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
  const [filterFlag, setfilterFlag] = useState(false);
  const [filterQueryData, setfilterQueryData] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchData, setSearchyData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [isPending, setIsPending] = useState("");
  const [subjectList, setSubjectList] = useState({});
  const [subjectListFlag, setSubjectListFlag] = useState(false);


  const response = useFetch({
    request: "/admin/allStudents",
    type: "get"
  });

  let filterSubject = {};
  if (response?.data?.students) {
    response.data.students.forEach((el) => {
      if (el?.studyBranch) {
        if (filterSubject[el?.studyBranch?.split(" ")[0]]) {
          return;
        } else {
          filterSubject[el?.studyBranch?.split(" ")[0]] = el?.studyBranch;
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
    let result = (filterFlag ? filterQueryData : searchFlag ? searchData : response.data.students).filter((list) => status(list.isApproved) === tab);
    setFilterList(result);
    setFlag(true);
    setShowTab(ctr);
  }

  const openModalHandler = (id, tabStatus) => {
    setId(id);
    setIsPending(tabStatus);
    setShow(true);
  }

  const closeModalHandler = () => {
    setShow(false);
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
    let searchResutl = response?.data?.students.filter((list) => {
      if (list?.firstName?.includes(e.target.value) || list?.lastName?.includes(e.target.value)) {
        return true;
      }
    });
    setSearchyData(searchResutl);
    setfilterFlag(false);
    setSearchFlag(true);
    // console.log("search worke", e.target.value, searchResutl);
  };

  const userTypeHandler = (key, value) => {
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
    let filterResult = response?.data?.students.filter((list) => {
      if (filterObj?.userType && (filterObj?.userType === "all" || filterObj?.userType === list?.userType)) {
        return true;
      }
      if (filterObj?.userType && filterObj?.userType === list?.userType) {
        return true;
      }
      if (Object.keys(filterObj.subject).length && list.studyBranch) {
        let filteredSubject = false;
        Object.keys(filterObj.subject).forEach((el) => {
          if (list.studyBranch?.toLowerCase() === filterObj.subject[el].toLowerCase()) {
            // console.log(filterObj.subject[el], list.studyBranch, "iffffff--search filter data")
            filteredSubject = true;
          }
        })
        if (filteredSubject) return filteredSubject;
      }
      if (list?.userType === 3 || list?.userType === 2) {
        if (filterObj?.ratingAny && parseInt(list.averageRating) >= filterObj?.ratingAny?.split("-")[0] && parseInt(list.averageRating) <= filterObj?.ratingAny?.split("-")[1]) {
          return true;
        }
        if (filterObj?.ratingOne && Math.round(list.averageRating) === parseInt(filterObj?.ratingOne?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingTwo && Math.round(list.averageRating) === parseInt(filterObj?.ratingTwo?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingThree && Math.round(list.averageRating) === parseInt(filterObj?.ratingThree?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingFour && Math.round(list.averageRating) === parseInt(filterObj?.ratingFour?.split("-")[0])) {
          return true;
        }
        if (filterObj?.ratingFive && Math.round(list.averageRating) === parseInt(filterObj?.ratingFive?.split("-")[0])) {
          return true;
        }
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
              <input id="subjectInput" onChange={(e) => onSearchHandler(e)} type="text" placeholder="Search ..." className="form-control" />
            </form>
          </div>
        </div>
        <div className="doctor-manageemnt-body-wrap">
          <div className="row">

            <div className="col-md-8 col-lg-9">
              <div className="tab-content p-5 pe-2" id="pills-tabContent">
                <div className="tab-pane fade show active" id={showTab + "-tab"} role="tabpanel" aria-labelledby={showTab} tabIndex="0">
                  {
                    response?.data?.students &&
                    (flag ? filterList : filterFlag ? filterQueryData : searchFlag ? searchData : response.data.students).map((el) =>
                      <div key={el?.id} className={`doctor-manage-list-wrap status-${status(el?.isApproved).toLowerCase()}`}>
                        <div className="media">
                          <img src={el?.profilePicture} alt={el?.firstName} className="img-fluid profile-img" />
                          <div className="media-body">
                            <h5>{el?.firstName} {el?.lastName}</h5>
                            <h6>Specialist of {el?.specializationSubject}</h6>
                            {
                              el?.userType === 3 && <ul>
                                {
                                  [...Array(Math.round(el?.averageRating))].map((e, i) =>
                                    <li key={i}><i className="fas fa-star"></i></li>)
                                }
                                <li><span> {Math.round(el?.averageRating)} <div className="text-dark d-inline">({el?.totalRating})</div></span></li>
                              </ul>
                            }
                          </div>
                        </div>
                        <div className="doctor-status-wrap">
                          <span className={el?.isApproved ? "approved" : ""}>{status(el?.isApproved)}</span>
                          <a href="javascript:void(0)" onClick={() => openModalHandler(el?.id, el?.isApproved)} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-angle-right"></i></a>
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
                    <input onClick={() => userTypeHandler("userType", "all")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label">
                      Any
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => userTypeHandler("userType", 1)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                    <label className="form-check-label">
                      Only Student
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => userTypeHandler("userType", 3)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                    <label className="form-check-label">
                      Mentor
                    </label>
                  </div>

                </div>

                <h4 className="mt-4">Branch</h4>
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
                <div className="rightbar-filter-bttn">
                  <a href="#" onClick={() => filterClickListener()}>Apply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        <Modal id={id} isPending={isPending} show={show} closeModal={closeModalHandler} />
      }
    </>
  )
}

export default StudentManagement