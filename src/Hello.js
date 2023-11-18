
import './App.css';
import React, {useEffect, useState} from 'react';


 function Hello(){
    var [u_Fname, set_u_Fname] = useState("");
    var [u_Lname, set_u_Lname] = useState("");
    var [u_city, set_u_city] = useState("");
    function form_submit(e){
        e.preventDefault ();
          var post_data={user_First_name: u_Fname, user_Last_name: u_Lname, user_City: u_city} 
        // alert(post_data);
        // console.log (post_data);
 // make request method
           fetch("http://localhost:1000/save_data", {
            method: 'POST',
            headers:{
            // Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(post_data),
        }).then(function(response){
            console.log(response)
        })
        
            
    }
    return( 
        <div className='row'>
            <div className='col-md-12'>
                <form onSubmit={event => form_submit(event)}> 
                    <label> First-name</label>
                    <input id='user_Fname' type='text'  value={u_Fname} onChange= {(e) => set_u_Fname(e.target.value)} />
                    <br/> <br/>
                    <label> Last-name</label>
                    <input id='user_Lname' type='text' value={u_Lname} onChange= {(e) => set_u_Lname(e.target.value)}></input>
                    <br/> <br/>
                    <label> City</label>
                    <input id='user_city' type='text' value={u_city} onChange= {(e) => set_u_city(e.target.value)} ></input>
                    <br/><br/>
                    <input type='submit' value= 'submit'></input>
                </form>
            </div>
          <p>The name you are providing is {u_Fname} + {u_Lname} + {u_city} </p>
        </div>
    )
 }


//  function Form_submit(e){
//     // e.preventDefault ();
   
//  alert("event");
//  }

 export default Hello;