// import logo from './logo.svg';
import './App.css';
// import TableTry from './table_try';
// import Hello from './Hello';




function App(props) {
  return (
  <div className="App container">
          <div className='row'>
          <p> 
            <h1>Hi, I'm Nkechi Ugwu !</h1>
            <h3>Welcome to my UX/UI Design Portfolio</h3>
          </p>
            </div>
            <p><h1>Cake Assured Mobile App</h1></p> 
        
          </div>
        );
      }


function Assured(props){
        return(
  <div className='Cake container'>
          <div className='row'>
          
          <div className='col-12'>
              <img src={props.img} />
              <img src={props.img_1} />
              <img src={props.img_2} />
              <h1>{props.overview}</h1>
            <p>The CakeAssured Mobile App is designed to provide a coordinated platform for customers to order from multiple vendors and customize and track delivery. The app also allows vendors and riders to partner with us to provide coordinated and monitored delivery services to customers. Among the pain points highlighted by users was the need for users to customize their cakes and have them delivered at the exact time they selected. Users also needed to have limitless options of cakes to select from. 
                These pain points formed the basics for the design of the app. </p>
          </div>

          {/* This row is for roles and responsibilities */}
            <div className='row'>
                <div className='col-6'>
                  <h2>{props.role}</h2>
                  <h4>
                  <ol>
                    <li>Lead UX/UI designer</li>
                      <li>UX researcher</li>
                      </ol>
                      </h4>
                      
                </div>

                <div className='col-6'>
                  <h2>{props.responsibilities}</h2>
                  <p>
                  <ul>
                    <li>Conducting interviews </li>
                      <li>Ideation and digital wireframing </li>
                      <li>Created low and high-fidelity prototyping</li>
                      <li> Conducting usability studies</li>
                      <li> Accounting for accessibility</li>
                      <li> Iterating on designs</li>
                      <li> Determining information architecture</li>
                    </ul>
                      </p>
                    
                </div>

            </div>
            {/* The end of roles and responsibilities */}


            {/* This row is for Solution and chalenges */}

            <div className='row'>

              <div className='col-6'>
                <h3> {props.challenge}</h3>
                <p>Cake customers are faced with the challenge of ordering from individual vendors' website which often hosts limited 
                  cake varieties and options for customers to make varied choices.</p>
              </div>

              <div className='col-6'>
                <h3> {props.solution}</h3>
                <p>CakeAssured mobile app provides a coordinated platform for customers, vendors and delivery partners. 
                  It also has interesting features that cater to customers' options.</p>
              </div>
            
            </div>
            {/* End of row for solution and challenges */}

            {/* Design Thinking Row */}

            <div className='row'>
              <h1>Design Thinking Process</h1>

              <div className='row'>
                <img src={props.img_3}/> 
                
              </div>

              <div className='row'>
                <h2> {props.design}</h2>
                <h4>The design followed the five steps of the design thinking process from start to finish.</h4>
                <p>At the empathize step, the User's stories were used to visualize users' pain points were interacting with the product.
                  This process enabled us to humanize users needs and put them into consideration while developing the app.
                  We used various tools such as <strong>Personas, User Journey, 
                  Paper Wireframes and Competitive Audits </strong> 
                  to provide minimal possible solutions that would reduce users' pain points as they interact with our
                  products. The <i>Competitive Audit</i> was very crucial in alligning with the business objectives of the product.
                </p>
                <p>These tools ensured that users' needs are understood and addressed appropriately</p>  
              </div>
            
            </div>
            {/* End of Design Thinking row */}

          {/* Beginning of userneed row */}
            <div className='row'>
                    <h1> Understanding Users' Needs </h1>
                    <div className='row'>
                    <h2>User research</h2>
                    <p>
                      The project conducted two Usability studies to understand the 
                      experience of users using the app. During the first usability study on our lo-fi prototypes, 
                      our participants' observations, experiences, and insights were duly documented 
                      and iterated. Our second test focused on understanding users' experience with 
                      the accessibility features of our mock-ups such as colours, screen interactions, language options, and wordings. 
                      In the two usability studies conducted, the design used a hybrid method 
                      <i>(moderated and unmoderated) </i>
                      to observe and understand users' experiences. 
                      Generally, the research clarified the designer’s assumptions and enriched the 
                      product’s design with great insight from observations derived from participants. ​​​​​​​</p>
                </div>

                    <div className='row'>
                  <img src={props.img_4}/>

                </div>

                {/* End of userneeds row */}

              </div>

              {/* Beginning of userstory */}

            <div className='row'>
            <h1 className='card-header'>User Story</h1>
                <h2>Sumary</h2>
                <p>I used the user story of two different personalities to 
                understand the basic needs and how my product will satisfy those needs.</p>

                <div className='row'>
                  
                    <img src={props.img_5}/>
                </div>

                <div className='row'>
                  <img src={props.img_6}/>

                </div>

            </div>
            {/* End of userstory */}

            <div className='row '>
                <h1 className='card-header'>Personas</h1>
                <h2>Summary of Personas</h2>
                <p>I used the user story of two different personalities to 
                understand the basic needs and how my product will satisfy those needs.</p>

                <div className='row'>
                  
                    <img src={props.img_7}/>
                </div>

                <div className='row'>
                  <img src={props.img_8}/>

                </div>

            </div>
            {/* End of userstory row */}

            {/* Beginning of user map */}

            <div className='row'>
                <h1 className='card-header'>User Journey Map</h1>
                <h2>Summary Journey Map</h2>
                <p>The user journey map helped me to pre-empt users' feelings as they implement actions using my product. 
                  This provided a clearer pathway as I continued to design.</p>

                <div className='row'>
                  
                    <img src={props.img_9}/>
                </div>

                <div className='row'>
                  <img src={props.img_10}/>

                </div>

      </div>

          {/* End of userjourney map */}

        {/* Begining of Storyboard */}
        <div>
          <h1 className='bg-primary'> IDEATE</h1>
        </div>

          <div className='row card'>
            
                <h1 className='card-header'>Storyboarding </h1>
                <h2>Summary of Storyboard</h2>
                <p>We used the storyboard to pre-empt users' needs and frustration and 
                  how the design works to address this frustration. 
                  The happy ending presumes the satisfaction my product will give users' 
                  who use my app in the future. 
                  The storyboard helped me articulate my ideas and fine-tune them to 
                  solve users' needs.</p>

                <div className='row'>
                  
                    <img src={props.img_11}/>
                </div>

                <div className='row'>
                  <img src={props.img_12}/>

                </div>

            </div>
      
          </div>

          {/* End of Storyboard */}

          {/* Beginning of Competitive Audit */}
          <div className='row card'>
            
                <h1 className='card-header'>Competitive Audit </h1>
                <h2>Summary </h2>
                <p>Conducting a competitive audit of direct and indirect competitors supported the 
                  ideation process. This enabled us to project a value proposition based on gaps from competitors that will maximize users' delight.
                  <a href='https://drive.google.com/drive/u/0/folders/1FIZxuYLUjqm25qCzTOZ4-S8G1Ose-KcD'>Read full report</a> </p>

                <div className='row'>
                  
                    <img src={props.img_13}/>
                </div>

                {/* End of Competitive */}
          </div>
              
      {/* Beginning of Crazy Eights  row */}
          <div className='row card'>
            
            <h1 className='card-header'>Ideation Board and Crazy Eights</h1>
            <h2>Summary </h2>
            <p>The purpose of using the ideation board and crazy eights was to 
              come up with as many ideas as possible that will help address users' pain points. </p>

            <div className='row'>
              
                <img  className="img-fluid" src={props.img_15} />

                <img className='img-fluid' src={props.img_14}/>
            </div>
        </div>
            {/* End of Crazy Eights*/}
            

            {/* Beginning of Design part */}

            <div>
              <h1>DESIGNS</h1>
              </div>

              <div className='row'>
              
                 <div className='col-sm-12 col-md-12 col-bg-4'> 
                 <h2>Pre-Usability Test Designs</h2>
                 <img  className="img-fluid" src={props.img_16} /> 
                 </div>

                  <h2 className=''>Wireframes and Low-Fidelity Prototype</h2>
                  
                  {/* Beginning of Pre-useability digital wireframe */}
               <div className='col-sm-12 col-md-6 col-bg-6'>
                    <h3 >Pre-Usability Test Wireframes</h3>
                    <span> <img  className='img-fluid pr-25rem' src={props.img_17} height={350} width={200} />
                    <img className='img-fluid ' src={props.img_18} height={350} width={200}/> </span>
                </div> 

                <div className='col-sm-12 col-md-6 col-bg-6'>
                    <h3 >Post-Usability Test Wireframes </h3>
                    <span> <img  className='img-fluid pr-25rem' src={props.img_17} height={350} width={200} />
                    <img className='img-fluid ' src={props.img_18} height={350} width={200}/> </span>
                </div> 
              
              
              <img  src={props.img_19} />
              
          </div>

            <div className='row'>
            
            <h1 className='card-header'>Ideation Board and Crazy Eights</h1>
            <h2>Summary </h2>
            <p>The purpose of using the ideation board and crazy eights was to 
              come up with as many ideas as possible that will help address users' pain points. </p>

            
        </div>
 
  </div>

)};


  





export { App};

export default Assured;
