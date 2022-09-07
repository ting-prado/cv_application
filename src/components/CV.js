import Uniqid from 'uniqid';
import { BlkLine } from './FormParts';
import '../styles/cv.css';

const LeftInfo = ({ userInfo }) => {
  return (
    <div className="leftCv">
      <div className="iconDiv">
        <img src={userInfo.image} alt="user profile icon" />
      </div>
      <div>
        <p className="name">{userInfo.firstName}</p>
        <p className="name">{userInfo.lastName}</p>
        <BlkLine />
        <p className="role">{userInfo.curRole}</p>
      </div>
      <div>
        <h3>CONTACT</h3>
        <BlkLine />
        <div className="cvContact">
          <p>
            <img src="./icons/telephone.png" alt="telephone icon" />
            {userInfo.contactNum}
          </p>
          <p>
            <img src="./icons/email.png" alt="email icon" />
            {userInfo.email}
          </p>
          <p>
            <img src="./icons/location.png" alt="location icon" />
            {userInfo.curAddress}
          </p>
        </div>
      </div>
      <div>
        <h3>PROFILE</h3>
        <BlkLine />
        <p className="profile">{userInfo.desc}</p>
      </div>
    </div>
  );
};

const ListInfo = (props) => {
  const { institute, instInfo, location, from, to } = props;
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
      <span>{year}</span>
      <div>
        <p>{institute}</p>
        <p>{instInfo}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

const RightInfo = ({ userInfo }) => {
  return (
    <div className="rightCv">
      <div>
        {userInfo.works.length > 0 ? (
          <div>
            <h3>WORK EXPERIENCE</h3>
            <BlkLine />
          </div>
        ) : (
          ''
        )}
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
      <div>
        {userInfo.educs.length > 0 ? (
          <div>
            <h3 className="cvEduc">EDUCATION</h3>
            <BlkLine />
          </div>
        ) : (
          ''
        )}
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
    </div>
  );
};

const CV = ({ userInfo }) => {
  return (
    <div className="cv">
      <LeftInfo userInfo={userInfo} />
      <RightInfo userInfo={userInfo} />
    </div>
  );
};

export default CV;
