import { useState } from 'react';
import '../styles/form.css';
import { ExpInput, Field, ReverseField } from './FormParts';

const Form = (props) => {
  const {
    addInput,
    handleChange,
    removeInput,
    educs,
    works,
    imageHandler,
    resetFields,
  } = props;

  const [states, setStates] = useState({
    educ: [],
    works: [],
  });

  const remove = (e) => {
    const parent = e.target.parentNode;
    switch (parent.name) {
      case 'educs':
        setStates({
          ...states,
          educ: states.educ.filter((educObj) => educObj.props.id !== parent.id),
        });
        break;
      case 'works':
        setStates({
          ...states,
          works: states.works.filter(
            (workObj) => workObj.props.id !== parent.id
          ),
        });
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setStates({
      educ: states.educ.slice(states.educ.length),
      works: states.works.slice(states.works.length),
    });
  };

  const addEduc = (e) => {
    const lastObj = educs[educs.length - 1];
    setStates({
      ...states,
      educ: states.educ.concat(
        <ExpInput
          key={lastObj.id}
          id={lastObj.id}
          handleChange={handleChange}
          name="educs"
          names={{
            inst: 'school',
            instInfo: 'degree',
          }}
          institution="School/University"
          instInfo="Degree"
          removeInput={(e) => {
            e.preventDefault();
            removeInput(e).then(remove(e));
          }}
        />
      ),
    });
  };

  const addWork = (e) => {
    const lastObj = works[works.length - 1];
    this.setState({
      works: states.works.concat(
        <ExpInput
          key={lastObj.id}
          id={lastObj.id}
          handleChange={handleChange}
          name="works"
          names={{
            inst: 'company',
            instInfo: 'position',
          }}
          institution="Company"
          instInfo="Position"
          removeInput={(e) => {
            e.preventDefault();
            removeInput(e).then(remove(e));
          }}
        />
      ),
    });
  };

  return (
    <form className="form">
      <fieldset className="fullName">
        <legend>Full Name</legend>
        <ReverseField
          handleChange={handleChange}
          name="firstName"
          type="text"
          labelName="First Name"
        />
        <ReverseField
          handleChange={handleChange}
          name="lastName"
          type="text"
          labelName="Last Name"
        />
      </fieldset>
      <div className="current">
        <Field
          handleChange={handleChange}
          name="curRole"
          type="text"
          labelName="Current Role"
        />
        <Field
          handleChange={handleChange}
          name="curAddress"
          type="text"
          labelName="Current Address"
        />
      </div>
      <fieldset className="contact">
        <legend>Contact Information</legend>
        <ReverseField
          handleChange={handleChange}
          name="email"
          type="email"
          labelName="Email Address"
        />
        <ReverseField
          handleChange={handleChange}
          name="contactNum"
          type="number"
          labelName="Contact Number"
        />
      </fieldset>
      <div className="desc">
        <label>Profile Description</label>
        <textarea
          rows="5"
          onChange={handleChange}
          name="desc"
          placeholder="Profile Description"
        ></textarea>
      </div>
      <div>
        <input
          onChange={imageHandler}
          id="selectedImg"
          name="image"
          type="file"
          accept="image/*"
        />
        <input
          type="button"
          value="Upload Picture"
          onClick={() => {
            document.getElementById('selectedImg').click();
          }}
        />
      </div>
      <div>
        <div className="educ">
          <label>Education</label>
          <div>{states.educ}</div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addInput(e);
              addEduc(e);
            }}
            name="educs"
          >
            Add Education
          </button>
        </div>
        <div className="works">
          <label>Work Experience</label>
          <div>{states.works}</div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addInput(e).then(addWork(e));
            }}
            name="works"
          >
            Add Work Experience
          </button>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          resetFields();
          reset();
        }}
      >
        Reset Fields
      </button>
    </form>
  );
};
export default Form;
