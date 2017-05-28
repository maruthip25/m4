import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Waypoint from 'react-waypoint';
import styles from './main.css'
import Background from '../components/background.jsx'
import Menu from '../components/menu.jsx'
import Contact from '../components/contact.jsx'

const worksColor = {
  currentPage: 'works',
  wrapperStyle: {background: '#AE3445'},
  menuStyles: {
    burgerDefStyle: {background: '#AE3445'},
    burgerOpenStyle: {background: '#F3F3F3'},
    menuBgStyle: {background: 'rgba(0,0,0,.95)'}
  }
};

const aboutColor = {
  currentPage: 'about',
  wrapperStyle: {background: '#F3F3F3'},
  menuStyles: {
    burgerDefStyle: {background: '#F3F3F3'},
    burgerOpenStyle: {background: '#F3F3F3'},
    menuBgStyle: {background: 'rgba(0,0,0,.95)'}
  }
};

const launchColor = {
  currentPage: 'launch',
  wrapperStyle: {background: '#37383A'},
  menuStyles: {
    burgerDefStyle: {background: '#37383A'},
    burgerOpenStyle: {background: '#F3F3F3'},
    menuBgStyle: {background: 'rgba(0,0,0,.95)'}
  }
};

// main bg + wrapper container
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 'launch',
      wrapperStyle: {background: '#37383A'},
      contentStyle: {backgroundColor: '#F3F3F3'},
      menuStyles: {
        burgerDefStyle: {background: '#37383A'},
        burgerOpenStyle: {background: '#F3F3F3'},
        menuBgStyle: {background: 'rgba(0,0,0,0.95)' },
      }
    };
    this.launchTop = this.launchTop.bind(this); // binds the function to the component on initiation
    this.launchBottom = this.launchBottom.bind(this); // binds the function to the component on initiation
    this.aboutTop = this.aboutTop.bind(this); // binds the function to the component on initiation
    this.aboutBottom = this.aboutBottom.bind(this); // binds the function to the component on initiation
    this.worksTop = this.worksTop.bind(this); // binds the function to the component on initiation
  };
  componentDidMount(){
    if(location.hash){
      location.hash="";
    }
  };
  launchTop(props){
    setTimeout(()=>{
      console.log("entered launchTop", props);
      if(props.currentPosition=="inside"){
        if(this.state.currentPage!='launch'){
          console.log("run!");
          this.setState(launchColor);
        }
      }
    }, 300);
  };
  aboutTop(props){
    console.log("entered aboutTop", props);
    if(props.currentPosition=="below"){
      if(this.state.currentPage!='launch'){
        console.log("run!");
        this.setState(launchColor);
      }
    }
  };
  launchBottom(props){
    console.log("entered lauchBottom", props);
    if(props.currentPosition=="above"){
      if(this.state.currentPage!='about'){
        console.log("run!");
        this.setState(aboutColor);
      }
    }
  };
  aboutBottom(props){
    console.log("entered aboutBottom", props);
    if(props.currentPosition=="above"){
      if(this.state.currentPage!='works'){
        console.log("run!");
        this.setState(worksColor);
      }
    }
    else if(props.currentPosition=="below"){
      if(this.state.currentPage!='about'){
        console.log("run!");
        this.setState(aboutColor);
      }
    }
  };
  worksTop(props){
    console.log("entered worksTop", props);
    if(props.currentPosition=="below"){
      if(this.state.currentPage!='about'){
        console.log("run!");
        this.setState(aboutColor);
      }
    }
  };
  render(){
    //decide styles for this render
    console.log("render!");
    //global variables
    //array for nav items
    const navItems = [
      {id: 0, text: "go home", url: "#home"},
      {id: 1, text: "about me", url: "#about"},
      {id: 2, text: "my works", url: "#works"}
    ];
    const contItems = [
      {
        id: 0,
        title: 'Twitter',
        svg: (<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path  d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>),
        url: 'https://twitter.com/maruthip25'
      },
      {
        id: 1,
        title: 'Github',
        svg: (<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path  d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>),
        url: 'https://github.com/maruthip25'
      },
      {
        id: 2,
        title: 'Instagram',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 -64 600 600"><path  d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z" /><path  d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z" /><circle  cx="390.476" cy="121.524" r="30.23"/></svg>),
        url: 'https://instagram.com/maruthip25'
      },
      {
        id: 3,
        title: 'Behance',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 28.299998"><defs id="defs30" /><path  d="m 13.1,-3.8146973e-7 c 1.3,0 2.5,0.10000000146973 3.6,0.40000000146973 1.1,0.2 2,0.6 2.8,1.09999998 0.8,0.5 1.4,1.2 1.8,2.1 0.4,0.9 0.6,2 0.6,3.2 0,1.4 -0.3,2.6 -1,3.5000004 -0.6,0.9 -1.6,1.7 -2.8,2.3 1.7,0.5 3,1.4 3.8,2.6 0.8,1.2 1.3,2.7 1.3,4.4 0,1.4 -0.3,2.6 -0.8,3.6 -0.5,1 -1.3,1.9 -2.2,2.5 -0.9,0.6 -2,1.1 -3.2,1.4 -1.2,0.3 -2.4,0.5 -3.6,0.5 L 0,27.6 0,-3.8146973e-7 l 13.1,0 z M 12.3,11.2 c 1.1,0 2,-0.3 2.7,-0.8 0.7,-0.5000004 1,-1.4000004 1,-2.5000004 0,-0.6 -0.1,-1.2 -0.3,-1.6 -0.2,-0.4 -0.5,-0.7 -0.9,-1 -0.4,-0.2 -0.8,-0.4 -1.3,-0.5 -0.5,-0.1 -1,-0.1 -1.6,-0.1 l -5.8,0 0,6.5000004 6.2,0 z M 12.6,23 c 0.6,0 1.2,-0.1 1.7,-0.2 0.5,-0.1 1,-0.3 1.4,-0.6 0.4,-0.3 0.7,-0.6 1,-1.1 0.2,-0.5 0.4,-1.1 0.4,-1.8 0,-1.4 -0.4,-2.4 -1.2,-3.1 -0.8,-0.6 -1.9,-0.9 -3.2,-0.9 l -6.6,0 0,7.7 6.5,0 z" /><path  d="m 31.9,22.9 c 0.8,0.8 2,1.2 3.6,1.2 1.1,0 2.1,-0.3 2.9,-0.8 0.8,-0.6 1.3,-1.2 1.5,-1.8 l 4.9,0 c -0.8,2.4 -2,4.1 -3.6,5.2 -1.6,1 -3.5,1.6 -5.8,1.6 -1.6,0 -3,-0.3 -4.3,-0.8 -1.3,-0.5 -2.3,-1.2 -3.2,-2.2 -0.9,-0.9 -1.6,-2 -2,-3.3 -0.5,-1.3 -0.7,-2.7 -0.7,-4.3 0,-1.5 0.2,-2.9 0.7,-4.2 0.5,-1.3 1.2,-2.4 2.1,-3.4 0.9,-0.9000004 2,-1.7000004 3.2,-2.2000004 1.3,-0.5 2.6,-0.8 4.2,-0.8 1.7,0 3.2,0.3 4.5,1 1.3,0.7 2.3,1.5 3.1,2.7000004 0.8,1.1 1.4,2.4 1.8,3.8 0.2,1.4 0.3,2.8 0.2,4.4 l -14.5,0 c 0,1.6 0.6,3.1 1.4,3.9 z m 6.3,-10.5 c -0.7,-0.7 -1.8,-1.1 -3.1,-1.1 -0.9,0 -1.6,0.2 -2.2,0.5 -0.6,0.3 -1,0.7 -1.4,1.1 -0.4,0.4 -0.6,0.9 -0.7,1.4 -0.1,0.5 -0.2,0.9 -0.2,1.3 l 9,0 c -0.2,-1.5 -0.7,-2.5 -1.4,-3.2 z" /><rect  height="2.7" width="11.2" y="1.8999996" x="29.4" /></svg>),
        url: 'https://www.behance.net/maruthip25'
      }
    ];

    //first page
    const LaunchDiv = (
      <div style={{height: '100%'}}>
      <Waypoint onEnter={this.launchTop} topOffset="-10%"></Waypoint>
        <div id="home" className="launch-div slide">
          <div className="launch-row">
            <div className="launch-img">
              <img src="build/images/bg1.jpg" />
            </div>
            <div className="launch-text">
              <h2> Hello! I'm Maruthi </h2>
              <h1> I'm a <span className="highlight">Web Designer</span> from Hyderabad.</h1>
              <h2> I'm also a Graphic Designer, a UI Designer, a Music Addict and an Idiot.</h2>
            </div>
          </div>
        </div>
        <Waypoint onLeave={this.launchBottom} topOffset="5%"></Waypoint>
      </div>
    );

    //second page
    const AboutDiv = (
      <div style={{height: '100%'}}>
        <Waypoint onLeave={this.aboutTop} bottomOffset="95%"></Waypoint>
        <div id="about" className="about-div slide">
          Hello Maruthi
        </div>
        <Waypoint onLeave={this.aboutBottom} topOffset="5%"></Waypoint>
      </div>
    );

    //third page
    const WorksDiv = (
      <div style={{height: '100%'}}>
      <Waypoint onLeave={this.worksTop} bottomOffset="95%"></Waypoint>
        <div id="works" className="works-div slide">
          My Works

        </div>
      </div>
    );

    return (
      <Background wrapperStyle={this.state.wrapperStyle} contentStyle={this.state.contentStyle}>
        <Menu items={navItems} styleDefs={this.state.menuStyles}/>
        <Contact items={contItems}/>
        {LaunchDiv}
        {AboutDiv}
        {WorksDiv}
      </Background>
    );
  }
}

ReactDOM.render(
  <Main />,
  $('.view')[0]
);
