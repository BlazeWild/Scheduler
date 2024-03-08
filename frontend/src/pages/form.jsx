import React, { useState } from 'react';
import nepalStates from '../data/countries'; // Importing Nepal's states
import '../dist/css/main.css'; // Importing CSS file

import DatePicker from 'react-datepicker';
//import TimePicker from 'react-time-picker';
// import TimePicker from '@mui/x-date-pickers/TimePicker';
// Import the styles
import "react-datepicker/dist/react-datepicker.css";
//import TimePicker from 'react-time-picker';
import TimePicker from 'react-bootstrap-time-picker';
//import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';

const Form = () => {
  const [address, setAddress] = useState({
    tole: '',
    city: '',
    state: '',
    country: 'Nepal',
  });

  const [interviewer, setInterviewer] = useState({
    name: '',
    surname: '',
  });



  // Handler function to update address
  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress({
      ...address,
      [name]: value
    });
  };

  // Handler function to update interviewer's name and surname
  const handleInterviewerChange = (event) => {
    const { name, value } = event.target;
    setInterviewer({
      ...interviewer,
      [name]: value
    });
  };


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
              <h2 className="card-title ">Schedule Interview</h2>
              {/* ADDRESS CONTAINER */}
              <div className="values-container ">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading ">
                      <h5>Address : </h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="variable-values">
                      <div className="mb-3 street-tole-city-container">
                        <div className="street-input">
                          {/* <label htmlFor="tole" className="form-label">Tole</label> */}
                          <input 
                            type="text" 
                            className="form-control" 
                            id="tole" 
                            name="tole" 
                            placeholder="Tole"
                            value={address.tole}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="city-input">
                          {/* <label htmlFor="city" className="form-label">City</label> */}
                          <input 
                            type="text" 
                            className="form-control"
                            id="city" 
                            name="city" 
                            placeholder="City"
                            value={address.city}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>
                      {/* Selection dropdowns for state and country */}
                      <div className="mb-3 row">
                        <div className="col">
                          {/* <label htmlFor="state" className="form-label">State:</label> */}
                          <select 
                            className="form-select" 
                            id="state" 
                            name="state" 
                            value={address.state} 
                            onChange={handleAddressChange}
                          >
                            {/* Mapping over nepalStates array to generate options */}
                            {nepalStates.map((state, index) => (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col">
                          {/* <label htmlFor="country" className="form-label">Country:</label> */}
                          <select 
                            className="form-select" 
                            id="country" 
                            name="country" 
                            value={address.country} 
                            disabled
                          >
                            <option value="Nepal">Nepal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* INTERVIEWER NAME CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Interviewer :</h5>
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
                            placeholder="Name"
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
                            placeholder="Surname"
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

              {/* INTERVIEWER NAME CONTAINER */}
              <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Interview Stage :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="variable-values">
                      <div className="mb-3 interviewer-container">
                        <div className="row">
                          <div className="col">
                            <select className="form-select">
                              <option value="Nepal">Interview</option>
                            </select>
                          </div>
                          <div className="col d-flex align-items-center">
                            <h6 className="me-2">Slots:</h6>
                            <button className="btn btn-success btn-sm me-2 " onClick={incrementCount}>
                              +
                            </button>
                            <span className="ms-2">{count}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               {/* INTERVIEWER TIme CONTAINER */}
               <div className="values-container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="variable-heading">
                      <h5>Date :</h5>
                    </div>
                  </div>
                  <div className="col-md-9">
                  <div className="variable-values">
                    <div className="mb-3 interviewer-container">
                      <div className="row">
                        <div className="col">
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="MM/dd/yyyy" // Date format
                        />
                        </div>
                        <div className='col'>

                        <TimePicker
        id="timePicker"
        onChange={handleTimeChange}
        value={selectedTime}
        disableClock={true} // Disables the clock to only show input fields
        format="HH:mm" // Sets the format of the time
        minTime="10:00" // Minimum selectable time
        maxTime="16:00" // Maximum selectable time
      />
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
        


              <button type="submit" className="btn btn-success">Appoint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
