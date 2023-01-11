import React from 'react'

const ClassManagement = () => {
  return (
    <div className="col-xl-10 col-lg-9 col-md-8 col-12  px-md-0">
      <div className="doctor-management-head-wrap">
        <div className="management-head-tab-wrap">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Upcoming</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Cancelled</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-disableds-tab" data-bs-toggle="pill" data-bs-target="#pills-disableds" type="button" role="tab" aria-controls="pills-disableds" aria-selected="false">Missed</button>
            </li>
          </ul>
        </div>
        <div className="management-head-search-wrap">
          <form action="">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search ..." className="form-control"/>
          </form>
        </div>
      </div>
      <div className="doctor-manageemnt-body-wrap">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="tab-content p-5 pe-2" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                {/* <!-- class single item start --> */}
                <div className="class-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap pe-4" style={{background: "#FBF1ED"}} >
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-4">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>

                    </div>
                    <div className="col-md-1 text-end">
                      <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap  bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap" style={{background: "#FBF1ED"}}>
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap" style={{background: "#EDFBEF"}} >
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap" style={{background: "#FEFAD5"}}>
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end --> */}
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                {/* <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent" >
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end -->
                <!-- class single item start --> */}
                <div className="class-list-wrap bg-transparent">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/doctor-01.png" alt="Doctor" className="img-fluid" />

                              <h5>Dr. Lejla Hamed</h5>
                              <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>4.8 <div className="text-dark d-inline">(649)</div></span></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="join-box-wrap">
                            <h6>CLA-1A4PED</h6>
                            <img src="./assets/images/line-circle-red.svg" alt="a" className="img-fluid" />
                              <h4>Pediatrics</h4>
                              <p>20 Mins <i className="fas fa-circle"></i> <strong>Missed</strong></p>
                          </div>
                        </div><div className="col-md-4">
                          <div className="class-list-doctor">
                            <img src="./assets/images/student-05.png" alt="Doctor" className="img-fluid" />

                              <h5>Lucian Chinping</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="class-lists-table">
                        <table>
                          <tr>
                            <th>
                              Booking Date:
                            </th>
                          </tr>
                          <tr>
                            <td className="pb-4">
                              24th Aug - 2021  11:40:03 IST
                            </td>
                          </tr>
                          <tr>
                            <th>Class Date:</th>
                          </tr>
                          <tr>
                            <td>
                              29th Aug - 2021  20:00 IST
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- class single item end --> */}
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">

              </div>
              <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">

              </div>
              <div className="tab-pane fade" id="pills-disableds" role="tabpanel" aria-labelledby="pills-disableds-tab" tabIndex="0">

              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="right-sidebar-wrap pt-0">


              <div className="rightbar-experience-filter-wrap py-4" style={{background: "#FAFAFA"}}>
                <h4 className="ps-0">Tutor</h4>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label custom-weight" htmlFor="flexRadioDefault1">
                      Any
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12"/>
                    <label className="form-check-label " htmlFor="flexRadioDefault12">
                      Doctor
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14"/>
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
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaulta" checked />
                        <label className="form-check-label custom-weight" htmlFor="flexCheckDefaulta">
                          Pre-Clinical
                        </label>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="form-check border-0">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaults"/>
                        <label className="form-check-label" htmlFor="flexCheckDefaults">
                          Clinical
                        </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Enter subject name...." style={{background: "rgba(244, 244, 244, 0.7", borderRadius: "7px", height:"34px"}}/>
                  </div>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                    <label className="form-check-label custom-weight" htmlFor="flexCheckDefault">
                      Allergy and Immunology
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                      Anesthesiology
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" checked />
                    <label className="form-check-label custom-weight" htmlFor="flexCheckDefault2">
                      Dermatology
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                      Emergency medicine
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                      Internal medicine
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                      Medical Genetics
                    </label>
                </div>

              </div>

              <div className="rightbar-ratings-filter-wrap">
                <h4 className="mt-4">Ratings</h4>

                <span style={{fontWeight: "400", fontSize: "10px", lineHeight: "12px", color: "#979797"}} >This filter is only applied to student who are enrolled as mentors</span>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1t"/>
                    <label className="form-check-label custom-weight" htmlFor="flexRadioDefault1t">
                      Any
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1ts"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1ts">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1tsa">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1tsa1">
                      <ul>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                        <li><img src="./assets/images/star-half.svg" alt="Star" className="img-fluid" /></li>
                      </ul>
                    </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1q"/>
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
                  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1tsa1qs"/>
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