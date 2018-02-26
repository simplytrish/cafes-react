import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';


// A simple array that will be used to get the data for our components. 
const CafeAPI = {
  cafes: [
    { number: 1, cover: require('./cafe1.jpeg'), coverTitle: 'Cafe 1', coverDesc: 'This is a great place', detail: 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.', hours: '10:00am - 09:00pm' },
    { number: 2, cover: require('./cafe2.jpeg'), coverTitle: 'Cafe 2', coverDesc: 'This is a great place', detail: 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.', hours: '10:00am - 09:00pm' },
    { number: 3, cover: require('./cafe3.jpeg'), coverTitle: 'Cafe 3', coverDesc: 'This is a great place', detail: 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.', hours: '10:00am - 09:00pm' },
    { number: 4, cover: require('./cafe4.jpeg'), coverTitle: 'Cafe 4', coverDesc: 'This is a great place', detail: 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.', hours: '10:00am - 09:00pm' },
    { number: 5, cover: require('./cafe1.jpeg'), coverTitle: 'Cafe 5', coverDesc: 'This is a great place', detail: 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.', hours: '10:00am - 09:00pm' },
    { number: 6, cover: require('./cafe1.jpeg'), coverTitle: 'Cafe 6', coverDesc: 'This is a great place', detail: 'I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.', hours: '10:00am - 09:00pm' }
  ],
  all: function() { return this.cafes},
  get: function(id) {
    const isCafe = p => p.number === id
    return this.cafes.find(isCafe)
  }
}

const linkStyle = {
        textDecoration: 'none',
        color:'#2e3237'
      }
const cozylogo = require('./logo.png');
const bannerimg = require('./booksbanner.jpg');
const bannerimg1 = require('./booksbanner1.jpeg');

// The CafeList iterates over all of the cafes and creates
// a link to their show page.
const CafeList = () => (
  <div>
      <div className="container-fluid">
      <div className="col-sm-4 logo-img">
        <img src={cozylogo} width="400px" height="250px" alt=" " className="img-fluid"></img>
      </div>
      <div className="col-sm-12 banner-img">
        <img src={bannerimg1} width="100%" height="700px" className="img-fluid" alt=""></img>
      </div>
      {
        CafeAPI.all().map(p => (
          <div className="col-md-4" key={p.number}>
            <Link to={`/list/${p.number}`}><img src={p.cover} width="370px" height="300px" alt=" " className="img-fluid"></img></Link>
            <h3>{p.coverTitle}</h3>
            <p>{p.coverDesc}</p>
          </div>
        ))
      }
      <div className="col-md-6 about-text">
        <h2>ABOUT US</h2>
        <p className="intro-text">We love to read on the go, but where are the comfiest places to read, have a cup of coffee and just space out for an hour or two?
          We at Cozy Nooks have found the best cafes to do all of that without any trouble, and at great prices! So take a trip through our list of cafes
          and find your next hidey hole.
        </p>
      </div>
      <div className="col-md-6 about-img">
        <img src={bannerimg} width="100%" height="500px" className="img-fluid" alt=""></img>
      </div>
    </div>
  </div>
)


const Cafe = (props) => {
  const cafe = CafeAPI.get(
    parseInt(props.match.params.number, 10)
  )
  return (
    <div>
      <div className="container-fluid cafe-show">
  	    <div className="col-md-6 cafe-image">
  	    	<img src={cafe.cover} width="100%" height="500px" alt=" " className="img-fluid"></img>
  	    </div>
  	    <div className="col-md-6">
  	    <p className="cafe-title">{cafe.coverTitle}</p>
  	    <p className="cafe-detail">{cafe.detail}</p>
        <p className="cafe-hours">Opening hours: {cafe.hours}</p>
  	    </div>
      </div>
    </div>
  )
}

// The List component matches the route to each cafe
const List = () => (
  <Switch>  
    <Route path='/list/:number' component={Cafe}/>
  </Switch>
)


// The Main component renders one of the three provided routes 
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CafeList}/>
      
      <Route path='/list' component={List}/>
    </Switch>
  </main>
)

const Header = () => (
  <div className="container-fluid">
      <div className="col-md-12">
        <h1><Link to='/' style={linkStyle}>COSY NOOKS</Link></h1>
      </div>
  </div>
)


class App extends Component {
	render(){
		return(
		<div>
      <Header />
    	<Main />
  		</div>
		)
		
	}
}

export default App;
  
