import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { status } from '../../utils/type-util';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';

let filterObj = {};

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
    if (filterObj[key]) {
      delete filterObj[key]
    } else {
      filterObj[key] = value;
    }
    console.log(filterObj, "fff");
  };

  const inputFilterHandler = (key, e) => {
    if (!e.target.value) {
      delete filterObj[key];
      return;
    }
    filterObj[key] = e.target.value;
    // console.log(filterObj, "input");
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
    let searchResutl = (filterFlag ? filterQueryData : response.data.students).filter((list) => {
      if (list?.firstName?.includes(e.target.value) || list?.lastName?.includes(e.target.value)) {
        return list
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
    if (Object.keys(filterObj).length === 0) {
      setSearchFlag(false);
      setfilterFlag(false);
      return;
    }
    // console.log(filterObj, "out");
    let filterResult = response?.data?.students.filter((list) => {
      if (filterObj?.userType && (filterObj?.userType === "all" || filterObj?.userType === list?.userType)) {
        return list;
      }
      if (filterObj?.userType && filterObj?.userType === list?.userType) {
        return list;
      }
      if (filterObj?.inputSearch && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.inputSearch?.toLowerCase()) {
        return list;
      }
      if (filterObj?.preClinical && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.preClinical?.toLowerCase()) {
        return list;
      }
      if (filterObj?.clinical && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.clinical?.toLowerCase()) {
        return list;
      }
      if (filterObj?.allergy && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.allergy?.toLowerCase()) {
        return list;
      }
      if (filterObj?.dermatology && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.dermatology?.toLowerCase()) {
        return list;
      }
      if (filterObj?.emergency && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.emergency?.toLowerCase()) {
        return list;
      }
      if (filterObj?.internal && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.internal?.toLowerCase()) {
        return list;
      }
      if (filterObj?.medical && list.studyBranch && list.studyBranch?.toLowerCase() === filterObj?.medical?.toLowerCase()) {
        return list;
      }
      if (list?.userType === 3 || list?.userType === 2) {
        if (filterObj?.ratingAny && parseInt(list.averageRating) >= filterObj?.ratingAny?.split("-")[0] && parseInt(list.averageRating) <= filterObj?.ratingAny?.split("-")[1]) {
          return list;
        }
        if (filterObj?.ratingOne && Math.round(list.averageRating) === parseInt(filterObj?.ratingOne?.split("-")[0])) {
          return list;
        }
        if (filterObj?.ratingTwo && Math.round(list.averageRating) === parseInt(filterObj?.ratingTwo?.split("-")[0])) {
          return list;
        }
        if (filterObj?.ratingThree && Math.round(list.averageRating) === parseInt(filterObj?.ratingThree?.split("-")[0])) {
          return list;
        }
        if (filterObj?.ratingFour && Math.round(list.averageRating) === parseInt(filterObj?.ratingFour?.split("-")[0])) {
          return list;
        }
        if (filterObj?.ratingFive && Math.round(list.averageRating) === parseInt(filterObj?.ratingFive?.split("-")[0])) {
          return list;
        }
      }

    });

    setfilterQueryData(filterResult);
    console.log(filterResult, "fff resutl");
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
              <input onChange={(e) => onSearchHandler(e)} type="text" placeholder="Search ..." className="form-control" />
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
                <div className="rightbar-subject-filter-wrap">

                  <div className="row">
                    <div className="col-7">
                      <div className="form-check border-0">
                        <input onClick={() => subjectCheckboxHandler("preClinical", "Pre-Clinical")} className="form-check-input" type="checkbox" value="" id="flexCheckDefaulta" />
                        <label className="form-check-label">
                          Pre-Clinical
                        </label>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="form-check border-0">
                        <input onClick={() => subjectCheckboxHandler("clinical", "Clinical")} className="form-check-input" type="checkbox" value="" id="flexCheckDefaults" />
                        <label className="form-check-label">
                          Clinical
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <input onChange={(e) => inputFilterHandler("inputSearch", e)} type="text" className="form-control" placeholder="Enter subject name...." style={{ background: "rgba(244, 244, 244, 0.7", borderRadius: "7px", height: "34px" }} />
                    </div>
                  </div>

                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("allergy", "Allergy and Immunology")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label">
                      Allergy and Immunology
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("anesthesiology", "Anesthesiology")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label className="form-check-label">
                      Anesthesiology
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("dermatology", "Dermatology")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                    <label className="form-check-label">
                      Dermatology
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("emergency", "Emergency medicine")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                    <label className="form-check-label">
                      Emergency medicine
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("internal", "Internal medicine")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                    <label className="form-check-label">
                      Internal medicine
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("medical", "Medical Genetics")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                    <label className="form-check-label">
                      Medical Genetics
                    </label>
                  </div>

                </div>

                <div className="rightbar-ratings-filter-wrap">
                  <h4 className="mt-4">Ratings</h4>

                  <span style={{ fontWeight: "400", fontSize: "10px", lineHeight: "12px", color: "#979797" }}>This filter is
                    only applied to student who are enrolled as mentors</span>

                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("ratingAny", "0-5")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1t" />
                    <label className="form-check-label">
                      Any
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("ratingOne", "1-1")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1ts" />
                    <label className="form-check-label">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("ratingTwo", "2-2")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa" />
                    <label className="form-check-label">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("ratingThree", "3-3")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1" />
                    <label className="form-check-label">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-check">
                    <input onClick={() => subjectCheckboxHandler("ratingFour", "4-4")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1q" />
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
                    <input onClick={() => subjectCheckboxHandler("ratingFive", "5-5")} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1qs" />
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