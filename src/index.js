import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';
import  { App}from './App';
import Assured from './App';
import WebSite from './web_Me';
import {AboutTrain, MyProfile} from './web_Me'
import SubmitForm from './web_Form';


import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('noroot'));

root.render(
  <React.StrictMode>
    <WebSite />
   
   {/* <App  /> */}
  
  </React.StrictMode>
);


const Myroot = ReactDOM.createRoot(document.getElementById('my_root'));

Myroot.render(
  <React.StrictMode>
     <AboutTrain google_img='Workspace.jpg' />
   {/* <Assured img = "homepage12.png"  img_1 = "orderpg20.png" img_2 = "confirmpp2.png" overview="Project Overview" role= "My role in the Project" responsibilities= "Roles & Responsibilities"
   challenge= "Challenges" solution= "Solutions" img_3= "design1200.png" img_4= "userpain20.png" img_5= "UserstoryJoy20.png" img_6= "userstoryjeff12.png"
              img_7= "PersonaJeff19.png" img_8 = "PersonaJoy10.png" img_9 = "Usermap80.png" img_10 = "Usermap81.png" img_11 = "Storyboard10.png" img_12 = "Storyboard11.png"
              img_13='comAudit20.png' img_14= 'HMW50.jpg' img_15= 'Wireframes25.jpg' img_16= 'Design12.png'img_17='Usability30.png' img_18='preusability20.png' /> */}
               
  {/* <Hello/> */}
  </React.StrictMode>
);




const testit = ReactDOM.createRoot(document.getElementById('test'));
testit.render ( 
  <React.StrictMode>
    {/* <Api/> */}
    {/* <RegisterUser/> */}
    <br/>
     <SubmitForm/>
     <MyProfile />
     
    {/* <Hello /> */}
  
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
