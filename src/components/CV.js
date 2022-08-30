import { Component } from 'react';
import { BlkLine } from './FormParts';
import '../styles/cv.css';

class LeftInfo extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div className="leftCv">
        <img src="Corporate-icon-300x300.png" alt="employee icon" />
        <div>
          <p>{userInfo.firstName}</p>
          <p>{userInfo.lastName}</p>
          <BlkLine />
          <p>{userInfo.curRole}</p>
        </div>
        <div>
          <h3>Contact</h3>
          <BlkLine />
          <p>{userInfo.contactNum}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.curAddress}</p>
        </div>
        <div>
          <h3>Profile</h3>
          <BlkLine />
          <p>{userInfo.desc}</p>
        </div>
      </div>
    );
  }
}

class ListInfo extends Component {
  render() {
    const { institute, instInfo, location, fromYr, toYr } = this.props;
    return (
      <div className="listInfo">
        <p>{institute}</p>
        <p>{location}</p>
        <p>{instInfo}</p>
        <p>
          {fromYr} - {toYr}
        </p>
      </div>
    );
  }
}

class RightInfo extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div className="rightCv">
        <div>
          <h3>Education</h3>
          <div>
            {userInfo.educ.map((educInfo, index) => {
              return (
                <ListInfo
                  key={index}
                  institute={educInfo.college}
                  instInfo={educInfo.degree}
                  location={educInfo.location}
                  fromYr={educInfo.fromYr}
                  toYr={educInfo.toYr}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h3>Work Experience</h3>
          <div>
            {userInfo.works.map((workInfo, index) => {
              return (
                <ListInfo
                  key={index}
                  institute={workInfo.company}
                  instInfo={workInfo.position}
                  location={workInfo.location}
                  fromYr={workInfo.fromYr}
                  toYr={workInfo.toYr}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

class CV extends Component {
  render() {
    return (
      <div className="cv">
        <LeftInfo userInfo={this.props.userInfo} />
        <RightInfo userInfo={this.props.userInfo} />
      </div>
    );
  }
}

export default CV;
