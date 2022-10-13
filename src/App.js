import React, { useState } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import defaultUser from './defaultUser';
import Uniqid from 'uniqid';
import './styles/app.css';

const App = () => {
  const [userInfo, setUserInfo] = useState(defaultUser);

  const handleChange = (e) => {
    const parent = e.target.parentNode.parentNode;
    switch (parent.name) {
      case 'educs':
        // to change educs state, create a new array using map
        // see if the current educ object has the same id as the parent component
        // if true, change the value of the property within that object
        // according to what's written in its corresponding input
        // if not, retain the whole educ object
        setUserInfo((prevUserInfo) => ({
          ...userInfo,
          educs: prevUserInfo.educs.map((educ) =>
            educ.id === parent.id
              ? { ...educ, [e.target.name]: e.target.value }
              : educ
          ),
        }));
        break;
      case 'works':
        setUserInfo((prevUserInfo) => ({
          ...userInfo,
          works: prevUserInfo.works.map((work) =>
            work.id === parent.id
              ? { ...work, [e.target.name]: e.target.value }
              : work
          ),
        }));
        break;
      default:
        setUserInfo({
          ...userInfo,
          [e.target.name]: e.target.value,
        });
        break;
    }
  };

  const addInput = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'educs':
        const newEduc = {
          id: Uniqid(),
          school: '',
          degree: '',
          location: '',
          from: '',
          to: '',
        };
        setUserInfo({
          ...userInfo,
          educs: userInfo.educs.concat(newEduc),
        });
        break;
      case 'works':
        const newWork = {
          id: Uniqid(),
          company: '',
          position: '',
          location: '',
          from: '',
          to: '',
        };
        setUserInfo({
          ...userInfo,
          works: userInfo.works.concat(newWork),
        });
        break;
      default:
        break;
    }
  };

  const removeInput = (e) => {
    e.preventDefault();
    const parent = e.target.parentNode;
    switch (parent.name) {
      case 'educs':
        setUserInfo({
          ...userInfo,
          educs: userInfo.educs.filter((educ) => educ.id !== parent.id),
        });
        break;
      case 'works':
        setUserInfo({
          ...userInfo,
          works: userInfo.works.filter((work) => work.id !== parent.id),
        });
        break;
      default:
        break;
    }
  };

  const resetFields = () => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.value = '';
    });
    setUserInfo(defaultUser);
  };

  const imageHandler = (e) => {
    setUserInfo({
      ...userInfo,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <div className="app">
      <main>
        <Form
          addInput={addInput}
          handleChange={handleChange}
          removeInput={removeInput}
          educs={userInfo.educs}
          works={userInfo.works}
          imageHandler={imageHandler}
          resetFields={resetFields}
        />
        <CV userInfo={userInfo} />
      </main>
    </div>
  );
};

export default App;
