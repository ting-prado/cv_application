import React, { useEffect, useState } from 'react';
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
        console.log(parent.id);
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

  const addInput = async (e) => {
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
        setUserInfo((prevUserInfo) => {
          if (prevUserInfo.count.educs === 0) {
            return {
              ...userInfo,
              educs: [].concat(newEduc),
              count: {
                ...prevUserInfo.count,
                educs: prevUserInfo.count.educs + 1,
              },
            };
          } else {
            return {
              ...userInfo,
              educs: prevUserInfo.educs.concat(newEduc),
              count: {
                ...prevUserInfo.count,
                educs: prevUserInfo.count.educs + 1,
              },
            };
          }
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
        if (userInfo.count.works === 0) {
          setUserInfo({
            ...userInfo,
            works: [].concat(newWork),
            count: {
              ...userInfo.count,
              works: userInfo.count.works + 1,
            },
          });
          break;
        }
        setUserInfo({
          works: userInfo.works.concat(newWork),
          count: {
            ...userInfo.count,
            works: userInfo.count.works + 1,
          },
        });
        break;
      default:
        break;
    }
  };

  const removeInput = async (e) => {
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
