import './App.css'
import './web_Form.js';
import SubmitForm from './web_Form.js';
import React, {useEffect, useState,Component} from 'react';



function WebSite(){
    return(
        <div className='container-fluid about_me'>
            <div className='row'>
                <img id='logo' src='trainMe_logo.jpg' alt='train Logo'  />
                <h3 id='heading_text' >
               <span className='float-end' > <a href='#train_page'> About </a> 
                &nbsp; &nbsp; <a href='#carousel_prog'> Programmes </a> 
                &nbsp;  &nbsp; <a href='#meet_me'>Connect</a>
                </span>
                </h3>
            </div>

            {/* //About our platform row */}

        </div>
    )
}


function AboutTrain(props){
   
    return(
    <div id='train_page' className='container '>
        <div className='row page_train'>
            <div className='col-12 about_img'>
                <h1 id='main_h' className='heading_1 mx-auto'>About our Training Platform</h1>
                <p>
                    The <b>trainMe.com</b> is a platform that aims to raise a 
                    generation of young girls and women passionate about learning and improving their skills.
                    This platform is an iniative passionately designed to brideg gender gap in education
                    especially in the Technology sector. 
                </p>
                <h2 id='abt_mission' className='heading_1'> Mission</h2>
                <p>Raise young women who are capable of utilizing their skills to change the gender
                    narratives in the technological sector.
                </p>

                <h2 id='abt_vision' className='heading_1'> Vision</h2>
                <p>To be recorgnised as global gender-equality training hub, creating wide reaching 
                    impacts in the lives of young women across the globe.
                </p>

            </div>
        </div>

            {/* Carousel- Past Programmes */}


        <div id='carousel_prog' className='carousel slide' data-bs-ride='carousel'>
            <h2 id='snippets_h' className='bg-info border border-success topic-heading'>Snippets of Past Trainings</h2>
            <div className='carousel-indicators'>

                &nbsp;<button type="button" data-bs-target='#carousel_prog'
                    data-bs-slide-to='0' className="active"></button>

                &nbsp;<button type='button' data-bs-target='#carousel_prog' data-bs-slide-to='1' 
                     ></button>

                &nbsp;<button type='button' data-bs-target='#carousel_prog' data-bs-slide-to='2' 
                     ></button>

                &nbsp;<button type='button' data-bs-target='#carousel_prog' data-bs-slide-to='3' 
                    ></button>

            </div>

            {/* Inner Carousel div */}

            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src='Women-in-tech-564.webp'  alt='Training-1' className='d-block'  />
                    <div className='carousel-caption'>
                        <h3>Calcultta, India</h3>
                        <p>High School Teenage School Girls in Training Session</p>
                    </div>
                </div>

                <div className='carousel-item'>
                    <img src='Womentech560.jpg'  alt='Training-2' className='d-block'  />
                    <div className='carousel-caption'>
                        <h3>Ontario, Canada</h3>
                        <p>Presentation time during our mid-career womens' Training Sessions</p>
                    </div>
                </div>

                <div className='carousel-item'>
                    <img src='women-in-tech561.jpg'  alt='Training-3' className='d-block'  />
                    <div className='carousel-caption'>
                        <h3>Delaware, USA</h3>
                        <p>On-going Mentoring Session for Upcoming Designers</p>
                    </div>
                </div>

                <div className='carousel-item'>
                    <img src='Women-in-tech-562.jpg' alt='Training-4' className='d-block'  />
                    <div className='carousel-caption'>
                        <h3>Nairobi, Kenya</h3>
                        <p>Training Sessions for Secondary School Girls</p>
                    </div>
                </div>

            </div>

            {/* Right and left control button */}
            <button className='carousel-control-prev' type='button' data-bs-target='#carousel_prog' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon'></span>
            </button>

            <button className='carousel-control-next' type='button' data-bs-target='#carousel_prog' data-bs-slide='next'>
                <span className='carousel-control-next-icon'></span>
            </button>
            </div> 
          {/* Row for forms and Upcoming events */}

            <div className='row events bg-light'> 
                <div className='col-12 '>
                    <h2 className='bg-info border border-success topic-heading'>Upcoming Events</h2>
                
                    <img className='card-img-top' src={props.google_img} alt='Google Workspace' />
                    <div className='card-body'>
                        <h4 id='train_mainh' className='card-title train_head'> 6-weeks Training on Remote Work Efficiency Using the
                            the Google Workspace. </h4>
                        <p className='card-body train_body'>The training will provide learners with skills to optimize their remote work efficiency using the Googlespace platform.
                            Learnes will be introduced to the various Google tools that would support their remote work experience.
                            The training will cover basics of understanding and 
                            navigating the Google Workspace, accessing and utilizing Google products that aids and 
                            optimizes collaborative work. To access the Google Workspace, participants must have a <b>Gmail account.</b></p> 
                        
                            <h5 className='train_head'>Mode of Training</h5> 
                            <p className='train_body'> The training will be conducted online in two batches. There will be 3 weeks training for each 
                            each batch of 10  participants. </p>
                           
                        
                            <h5 className='train_head'>Who can attend the training</h5>
                           <p className='train_body'> To participate in the training, you must have the following eligibilities. </p> 
                            <ul className='train_body'>
                                <li>
                                  Must be a female between the ages of 18-35  
                                </li>
                                <li>
                                  Have access to a desktop or a laptop (no use of phone) 
                                </li>
                                <li>
                                  Install zoom or microsoft teams 
                                </li>
                                <li>
                                  Be willing to attend the three sessions and complete a task 
                                </li>
                                <li>
                                  Generally, be interested in learning and open to new contents. 
                                </li>
                            </ul>
                        
                   
                    </div>

                    

                </div>
         
            </div>
        
    </div>
    )
}

// Let's connect section

        function MyProfile(props){
           
            
            return(
            <div id='meet_me' className='container'>
                    <div className='row'>
                    <h1 id='meet'> Know more about me</h1>
                        <div className='col-12 my_photo '>
                           <div className='bg-secondary text-light me '> 
                                <p >I am a technology enthusiast with more than five years background 
                                    in project management in the Non-Profit Sector. I double as gender equality advocate.
                                </p>  
                                <p>My enthusiasm for the technology
                                    field stems from my desire to use technological innovations to solve problems. 
                                    In this field, I have trained as a UX/UI designer and currently studying for a diploma in Fullstack Web Development
                                    with the Canadian Business College.
                                </p>
                                    <p>
                                    I presently work with the Regent Park Community Health Center where I joggled between two roles
                                    as a Project Coordinator and a Data Processor. These roles have incredibly strengthened my multi-tasking capacity.
                                </p>
                                <b> I would really love to learn more about you, let's connect!!</b>
                            </div>
                            
                            
                           
                                    
                            <a href='https://www.geeksforgeeks.org/how-to-enable-button-based-on-if-statement-in-react-js/' target='blank'><button className="btn btn-primary" > 
                            My Resume </button> </a>
            
                             
                            
                            {/* <button onClick={link}>Hire Me</button> */}

                            {/* <img className='my_photo' src={props.Nkechi} alt='This is me' /> */}
                        </div>
                <div className='row'>
                    <div className='col-6'> 
                        <h3 className='me-subheading text-success'>Fun Facts About Me</h3>
                            <ul className='me-subbody'>
                                <p>
                                    I have some intriguing fantasies that contradict my personality. 
                                </p>
                                <li> I  have phobia for height, but now I hike tall hills  and climb rocks &#128516; </li>
                                <li> I had wept bitterly after I got stucked in an elevator in 2018 &#128525; </li>
                                <li> To fight my fears, I engage in things that frighten me, hence I am planning 
                                    to go for CN Tower Edge walk. <b>Remember I have phobia for heights</b> &#128151; </li>
                            </ul>
                    </div>

                            <div className='col-6'>
                                <h3 className='me-subheading text-primary'>Values and Ethics</h3>
                                <ul className='me-subbody'>
                                    <p>My values are core principles that guide my personal and professional life</p>
                                    <li> I hold honesty to a high degree</li>
                                    <li> Cheating is a vice I abhor and avoid even when provided the opportunity</li>
                                    <li> Challenging tasks intrigues me so I love to try new and challenging tasks</li>
                                    <li> Loyalty and consistency to a task stands out for me.</li>
                                </ul>
                                <h3 className='me-subheading text-danger'> Weaknesses</h3>
                                <ul className='me-subbody'>
                                    <p>I used to think of weaknesses as limiting factors however, I have come to realize
                                        they  are areas for improvements.
                                    </p>
                                    <li> I still struggle with people management and consistency</li>
                                    <li> I work to beat deadline but sometimes I struggle just like in this 
                                        project &#128516;
                                    </li>
                                    <li> When I am nervous, I often doubt my capacity at completing a task that 
                                        would ordinarily be simple.

                                    </li>
                                </ul>

                            </div>
                            
                        </div>
            </div>
                    
                <div className='bg-secondary contact-heading'>
                        <h2 id='connect-heading'>Let's Connect
                        </h2>
                        <br/><br/>
                      
                        <p>
                        <span className='connect-body' >
                            <a id='my_email' href="mailto:ugwusophronia@gmail.com">Send email</a>
                            &nbsp;  &nbsp;
                            <a href="tel:14379931542">Call me</a>
                            &nbsp;  &nbsp;
                            <a href="https://www.linkedin.com/in/ugwu-nkechi/" target='blank'>Linkedin</a>
                            </span>
                        </p>
                    </div>

                </div>
            )

        }


    // class RegisterUser extends Component {
    //     constructor(){
    //         super()
    //         this.state = {
    //         isUser: "yes"
    //         }
    //         this.toggleState = this.toggleState.bind(this);
    //     } 
    //     // end of constructor
    //     toggleState(){
    //         this.setState({
    //           isUser: !this.state.isUser 
    //         })
    //     }
    //         // end of this.toggleState

    //         render() {
    //             if (this.state.isUser){
    //                 return(
    //                     <div>
    //                         <h3>Do you think you are great fit for this training? </h3>
    //                         <span>Please click on the link:
    //                             {this.state.isUser.toString()}</span>
    //                             <br/>
    //                             <button onClick={this.toggleState}> Register</button>
    //                    </div> 
    //                 )  } 
    //                 else{
    //                     return( 
    //                         <div>
    //                             <h3>Thank you for contacting us</h3>
    //                             <span>Please click on the link:
    //                                 {this.state.isUser.toString()}
    //                             </span>
    //                             <button onClick = {this.toggleState}>
    //                                 Thank you
    //                             </button>
    //                         </div>
    //                     )
    //                 }          
                    
               
    //         }

        
            
            
        
    // }

     {/* Div for Get Method of APIs */}


    // function Api(props){
    //         var [the_api_data, set_the_api_data] = useState("");
    //         useEffect=(() =>{
    //             fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    //             .then(response => response.json())
    //             .then(data => set_the_api_data(data.Nation));
    //                 }, []);

                  
    //  return(
    // <div className='container'>
    //     <div id='my_api' className='row'>
    //         <h5></h5>
    //                 <p> You have the result= {the_api_data} </p>
    //                     <h2 className='card-header="true'>Get Fun Facts with our APIs</h2>
    //                 <div className='card-body'>
    //                     <h3 className='card-title'>Are you bored? 
                        
    //                     <p>And would love some fun games?</p>
    //                     </h3>
    //                     <p className='api_para'>Enjoy some fun facts from our API</p>
                        
    //                     {/* API Div */}
    //                     <div className='card-text'>
                       
    //                     {/* <p> {the_api_data.count} </p>
    //                     <p> {the_api_data.age} </p> */}
    //                     </div>
    //                 </div>

    //             </div>

    //         </div>
    //         )
    //       }

        





export default WebSite;
export {AboutTrain, MyProfile};