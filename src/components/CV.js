import { Component } from 'react';
import Uniqid from 'uniqid';
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
    const { institute, instInfo, location, from, to } = this.props;
    let year;
    switch (true) {
      case from === '' && to !== '':
        year = to;
        break;
      case from !== '' && to === '':
        year = from;
        break;
      case from !== '' && to !== '':
        year = `${from} - ${to}`;
        break;
      default:
        year = '';
        break;
    }
    return (
      <div className="listInfo">
        <p>{institute}</p>
        <p>{location}</p>
        <p>{instInfo}</p>
        <p>{year}</p>
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
          <h3>{userInfo.educs.length > 0 ? 'Education' : ''}</h3>
          <div>
            {userInfo.educs.map((educInfo) => {
              return (
                <ListInfo
                  key={Uniqid()}
                  institute={educInfo.school}
                  instInfo={educInfo.degree}
                  location={educInfo.location}
                  from={educInfo.from}
                  to={educInfo.to}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h3>{userInfo.works.length > 0 ? 'Work Experience' : ''}</h3>
          <div>
            {userInfo.works.map((workInfo) => {
              return (
                <ListInfo
                  key={Uniqid()}
                  institute={workInfo.company}
                  instInfo={workInfo.position}
                  location={workInfo.location}
                  from={workInfo.from}
                  to={workInfo.to}
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
