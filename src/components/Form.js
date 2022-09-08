import { useState, useEffect } from 'react';
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

  const reset = () => {
    setStates({
      educ: states.educ.slice(states.educ.length),
      works: states.works.slice(states.works.length),
    });
  };

  useEffect(() => {
    setStates({
      educ: educs.map((educObj) => {
        return (
          <ExpInput
            key={educObj.id}
            id={educObj.id}
            handleChange={handleChange}
            name="educs"
            names={{
              inst: 'school',
              instInfo: 'degree',
            }}
            institution="School/University"
            instInfo="Degree"
            removeInput={removeInput}
          />
        );
      }),
      works: works.map((workObj) => {
        return (
          <ExpInput
            key={workObj.id}
            id={workObj.id}
            handleChange={handleChange}
            name="works"
            names={{
              inst: 'company',
              instInfo: 'position',
            }}
            institution="Company"
            instInfo="Position"
            removeInput={removeInput}
          />
        );
      }),
    });
  }, [educs, works, states, handleChange, removeInput]);

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
          <button onClick={addInput} name="educs">
            Add Education
          </button>
        </div>
        <div className="works">
          <label>Work Experience</label>
          <div>{states.works}</div>
          <button onClick={addInput} name="works">
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
