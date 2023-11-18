
import './App.css';
import React, {useEffect, useState} from 'react';


 function SubmitForm(){

    const [myProgs, SetProgs] = useState(" ");
    const handleChange=(event) => {
        SetProgs(event.target.value)
    }

    var [u_fullname, set_u_fullname] = useState("");
    var [u_gender, set_u_gender] = useState("");
    var [u_city, set_u_city] = useState("");
    var [u_number, set_u_number] = useState("");
    var [u_email, set_u_email] = useState("");
    // var [u_myProgs, set_u_myProgs] = useState("");
    function form_submit(e){
        e.preventDefault ();
          var post_data={user_fullname: u_fullname, user_city: u_city, user_gender: u_gender, user_number: u_number, user_email: u_email} 
        // alert(post_data);
        // console.log (post_data);
 // make request method
           fetch("http://localhost:9090/data", {
            method: 'POST',
            headers:{
            // Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(post_data),
        }). then(function(response){
            console.log(response)
        })
        
            
    }
    return( 
        <div id='form_id' className='container page_card'>
            <div  className='row  page_card'>
                 <h4 className='bg-info border border-success sub-heading topic-heading'>To register for the training, complete the form below</h4> 
                <form id='my-submit' onSubmit={event => form_submit(event)}> 
                    <label className='label_name'> FullName</label>
                    <input className='input_id' id='user_fullname' type='text'  value={u_fullname} onChange= {(e) => set_u_fullname(e.target.value)} />
                    <br/> <br/>
                    <label className='label_name'> City</label>
                    <input className='input_id' id='user_city' type='text' value={u_city} onChange= {(e) => set_u_city(e.target.value)}></input>
                    <br/> <br/>
                    <label className='label_name'> Gender</label>
                    <input className='input_id' id='user_gender' type='text' value={u_gender} onChange= {(e) => set_u_gender(e.target.value)} ></input>
                    <br/> <br/>
                    <label className='label_name'> Phone No</label>
                    <input className='input_id' id='user_number' type='tel' value={u_number} onChange= {(e) => set_u_number(e.target.value)} ></input>
                    <br/> <br/>
                    <label className='label_name'> Email Address</label>
                    <input className='input_id' id='user_email' type='email' value={u_email} onChange= {(e) => set_u_email(e.target.value)} ></input>
                    <br/> <br/>
                    
                    <label className='label_name'>Select Programmes</label>
                    <select className='input_id' id='user_Program' value={myProgs}  onChange = {(handleChange)} > 
                    <option value='Google Workspace'>Google Workspace </option>
                    <option value='Microsoft Word'>Microsoft Word</option>
                    <option value='Microsoft Excel'>Microsoft Excel</option>
                    <option value='Powerpoint Presentation'>Powerpoint Presentation</option>
                    </select>
                   
                   
                    <br/><br/>
                    <input id='submit_id' type='submit' value= 'submit'></input>
                </form>
            </div>
          <p>The data you are providing are: {u_fullname} + {u_city} + {u_gender} + {u_number} + {u_email}  </p>
        </div>
    )
 }


//  function Form_submit(e){
//     // e.preventDefault ();
   
//  alert("event");
//  }

 export default SubmitForm;