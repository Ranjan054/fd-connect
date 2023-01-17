import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Spinner from '../Spinner/Spinner';

const Modal = (props) => {

    console.log(props.id, "modal component");

    const response = useFetch({
        request: "/admin/userDetails",
        type: "post",
        payload: { "userId": props?.id }
    });

    console.log(response.loading, response.error, "res modal");

    return (
        <>
            {/* { */}
            <div className="modal-section">
                <div className={`modal fade ${props?.show ? "show" : ""}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{ display: `${props?.show ? "block" : "none"}` }} aria-modal="true" role="dialog">
                    {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"> */}
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-main-txt">
                                <a href="#" onClick={props.closeModal()} data-bs-dismiss="modal" aria-label="Close" className="d-block text-end">
                                    <img src="./assets/images/close-icon.svg" alt="X" className="img-fluid" width="40" />
                                </a>
                                {
                                    response?.loading && <Spinner />
                                }
                                {
                                    response?.error &&
                                    <div className="col-xl-10 col-lg-9 col-md-8 col-12  px-md-0">
                                        <h3 className='error-message' style={{marginTop: "-3%"}}>Something went wrong, please try again!</h3>
                                    </div>
                                }
                                {
                                   !response?.loading && !response?.error && Object.keys(response).length !== 0 &&
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
                                                            <h5>{props?.student ? "Student" : "Mentor"}</h5>
                                                            {
                                                                props?.doctor && <>
                                                                    <h5>Doctor</h5>
                                                                    <h5>Position</h5>
                                                                </>
                                                            }
                                                            <p>{response?.data?.specializationSubject}</p>
                                                            <p>{response?.data?.currentPlaceOfWork}</p>
                                                            {/* <p>{response?.data?.university}, ({response?.data?.semester})</p> */}
                                                            {/* <p>Studying <strong>Cardiology</strong></p> */}

                                                            <h5>Study</h5>
                                                            <p>{response?.data?.studyBranch}</p>
                                                            <p>{response?.data?.university}</p>

                                                            <h5>Contact</h5>
                                                            <p>{response?.data?.phoneNumber}</p>
                                                            <a href={response?.data?.email}>{response?.data?.email}</a>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="modal-profile-box">
                                                                <img src={response?.data?.profilePicture} alt={response?.data?.profilePicture} className="img-fluid modal-img" />
                                                                <h5>{response?.data?.firstName}</h5>
                                                                <h6>{response?.data?.country}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        response?.data?.mentoringSubject && <>
                                                            <h5>Mentoring Subjects</h5>
                                                            {
                                                                response?.data?.mentoringSubject?.map((el, index) =>
                                                                    <img key={index} src={el?.mentoringIcon} alt={el?.mentoringIcon} className="img-fluid" />
                                                                )
                                                            }
                                                        </>
                                                    }
                                                    <h5>About</h5>
                                                    <p className="mb-3">{response?.data?.description}</p>
                                                    {
                                                        response?.data?.teachingExperienceDescription && <> <h5>Experience that stands out</h5>
                                                            <p>
                                                                {response?.data?.teachingExperienceDescription}
                                                            </p>
                                                        </>
                                                    }

                                                    {
                                                        response?.data?.language && <h5 > Language</h5>
                                                    }
                                                    {
                                                        response?.data?.language?.map((el, index) =>
                                                            <div key={index} className='language-wrapper'>
                                                                <p>{el?.languageName}</p>
                                                            </div>
                                                        )
                                                    }
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
                                                        {
                                                            response?.data?.document?.map((el, index) =>
                                                                <div key={index} className="col-md-4">
                                                                    <div className="modal-post-box">
                                                                        <img src={el?.fileUrl} alt={el?.fileName} className="img-fluid" />
                                                                        <span>{el?.fileName}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                {
                                                    response?.data?.posts && <div className="modal-tab-txt-wrap">
                                                        <h5>Posts</h5>
                                                    </div>
                                                }
                                                <div className="modal-post-height-fixed">
                                                    <div className="row">
                                                        {
                                                            response?.data?.posts && response?.data?.posts?.map((el, index) =>
                                                                <div key={index} className="col-md-4">
                                                                    <div className="modal-post-box">
                                                                        <img src={el?.postFiles} alt={el?.postText} className="img-fluid" />
                                                                        <span>{el?.postText}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div className="modal-ftr-bttn">
                                                    <button type="reset" className="btn btn-reject">Reject</button>
                                                    <button type="reset" className="btn btn-accept">Accept</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-homes" role="tabpanel" aria-labelledby="pills-homes-tab" tabIndex="0">
                                                <div className="modal-tab-txt-wrap">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <h5>{props?.doctor ? "Doctor" : "Student"}</h5>
                                                            <p>{response?.university}, ({response?.semester})</p>
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
                                        </div> */}

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* } */}
        </>

    )
}

export default Modal