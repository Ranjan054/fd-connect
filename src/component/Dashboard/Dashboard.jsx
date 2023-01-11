import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import Spinner from '../Spinner/Spinner'

const Dashboard = () => {

  const response = useFetch({
    request: "/admin/dashboardStats",
    type: "get"
  })

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
      {
        response?.data && <div style={{ borderLeft: "0.5px solid #979797" }} className="col-xl-10 col-lg-9 col-md-8 col-12  px-md-0">
          <div className="home-header-wrap">
            <h4>Doctors</h4>
            <div className="row">
              <div className="col-md-5 col-lg-4">
                <div className="doctor-head-bg">
                  {/* <h1>2743 </h1> */}
                  <h1>{response?.data?.totalApprovedDoctors}</h1>
                  <h6>Approved Doctors </h6>
                </div>
              </div>
              <div className="col-md-6 col-lg-7">
                <div className="home-head-txt">
                  <h3>{response?.data?.requestReceived} <span>Requests recieved</span></h3>
                  <div className="d-flex">
                    <h5><i className="fas fa-circle"></i> {response?.data?.requestRejected} <span>Requests Rejected</span></h5>
                    <h5><i className="fas fa-circle"></i> {response?.data?.requestPending} <span>Requests Pending</span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-body-content-wrap">
            <h4>Students</h4>
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-6">
                <div className="home-student-count-box">
                  <div className="student-left">
                    <h3>{response?.data?.totalStudent}</h3>
                    <p>Total Students</p>
                  </div>
                  <div className="student-right">
                    <h3>{response?.data?.mentoringStudent}</h3>
                    <p>Students mentoring</p>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mt-md-5">Classes</h4>
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-6">
                <div className="home-student-count-box class-count-box">
                  <div className="student-left">
                    <h3>{response?.data?.totalClasses}</h3>
                    <p>Classes Booked</p>
                  </div>
                  <div className="student-right">
                    <h3>{response?.data?.completedClasses}</h3>
                    <p>Classes Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Dashboard