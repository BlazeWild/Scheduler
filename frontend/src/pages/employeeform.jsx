import React, { useState } from 'react';
import workFields from '../data/field';
import '../dist/css/main.css'; // Importing CSS file

import DatePicker from 'react-datepicker';
//import TimePicker from 'react-time-picker';
// import TimePicker from '@mui/x-date-pickers/TimePicker';
// Import the styles
import "react-datepicker/dist/react-datepicker.css";
//import TimePicker from 'react-time-picker';
import TimePicker from 'react-bootstrap-time-picker';
//import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';

const EmployeeForm = () => {
  

  const [interviewer, setInterviewer] = useState({
    name: '',
    surname: '',
  });
  const handleInterviewerChange = (event) => {
    const { name, value } = event.target;
    setInterviewer({
      ...interviewer,
      [name]: value
    });
  };

  const [email, setemail] = useState({
    email: '',
  })
  const handleemailChange = (event) => {
    const { name, value } = event.target;
    setEmail({
      ...email,
      [name]: value
    });
  };

  const [phone, setphone] = useState({
    phone:'',
  })
  const handlephoneChange = (event)=> {
    const {name, value} = evnt.target;
    setphone({
        ...phone,
        [name] : phone
    })
  }

  const [resume, setresume] = useState({
    resume:'',
  })
  const handleresumeChange = (event)=> {
    const {name, value} = evnt.target;
    setresume({
        ...resume,
        [name] : resume
    })
  }
  

  const [workField, setworkField] = useState({
    workField: '',
  });
  const handleworkFieldChange = (event) => {
    const { name, value } = event.target;
    setworkField({
      ...workField,
      [name]: value
    });
  };

  const [skills, setskills] = useState({
    skills: '',
  });
  const handleskillsChange = (event) => {
    const { name, value } = event.target;
    skills({
      ...skills,
      [name]: value
    });
  };

  const [profilelink, setprofilelink] = useState({
    profilelink:'',
  })
  const handleprofilelinkChange = (event)=> {
    const {name, value} = evnt.target;
    setprofilelink({
        ...profilelink,
        [name] : resume
    })
  }

  const [questions, setquestions] = useState({
    profilelink:'',
  })
  const handlequestionsChange = (event)=> {
    const {name, value} = evnt.target;
    setquestions({
        ...questions,
        [name] : questions
    })
  }
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
//date and time picker
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('10:00'); // Initial time

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  //const [selectedTime, setSelectedTime] = useState("10:00");

  return (

    <div className="form-bg">
      
      <div className="form-container">
      <div className="row justify-content-center">
        <div className="col-md-10" >
          <div className="card mt-5 " >
            <div className="card-body big-box">
              <h2 className="card-title ">Apply for Workplace</h2>
              {/* ADDRESS CONTAINER */}
              
              {/* INTERVIEWER NAME CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Name :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            placeholder="First Name"
                            value={interviewer.name}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="surname" 
                            name="surname" 
                            placeholder="Last Name"
                            value={interviewer.surname}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              {/* EMAIL CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Email :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="surname" 
                            name="surname" 
                            placeholder="abcd@example.com"
                            value={email.email}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              {/* PHONE CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Phone :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="surname" 
                            name="surname" 
                            placeholder=""
                            value={phone.phone}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* PESUMELINK CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Resume :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="surname" 
                            name="surname" 
                            placeholder="resume link here"
                            value={resume.resume}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

                {/* WORKExperience CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Work Experience :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                        <select 
                            className="form-select" 
                            id="state" 
                            >
                              <option value="Less than 1 year">Less than 1 year</option>
                              <option value="1-3 years">1-3 years</option>
                              <option value="3-5 years">3-5 years</option>
                              <option value="5-7 years">5-7 years</option>
                              <option value="7-10 years">7-10 years</option>
                              <option value="More than 10 years">More than 10 years</option>
 
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              {/* WORKFIELD CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Education :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                        <select 
                            className="form-select" 
                            id="state" 
                            name="state" 
                            value={workField.state} 
                            onChange={handleworkFieldChange}
                          >
                            {/* Mapping over nepalStates array to generate options */}
                            {workFields.map((state, index) => (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              {/* SKillS CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Skills :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="surname" 
                            name="surname" 
                            placeholder="eg. python, C++, C#, etc"
                            value={skills.skills}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* Profile link CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>LinkedIn Profile :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="surname" 
                            name="surname" 
                            placeholder="linkedin profile url here"
                            value={profilelink.profilelink}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* Profile link CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Queries :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        
                        <div className="col">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="surname" 
                            name="surname" 
                            placeholder="Your queries here "
                            value={questions.questions}
                            onChange={handleInterviewerChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
                
              


              <button type="submit" className="btn btn-success">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmployeeForm;
