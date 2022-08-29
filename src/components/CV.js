import { Component } from 'react';
import '../styles/cv.css';

class LeftInfo extends Component {
  render() {
    return (
      <div className="leftCv">
        <img src="Corporate-icon-300x300.png" alt="employee image" />
      </div>
    );
  }
}

class RightInfo extends Component {
  render() {
    return (
      <div className="rightCv">
        <div>Education</div>
        <div>Work Experience</div>
      </div>
    );
  }
}

class CV extends Component {
  render() {
    return (
      <div className="cv">
        <LeftInfo />
        <RightInfo />
      </div>
    );
  }
}

export default CV;
