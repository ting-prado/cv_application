import { Component } from 'react';
import '../styles/form.css';
import { ExpInput, Field, ReverseField } from './FormParts';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educ: [],
      works: [],
    };

    this.addEduc = this.addEduc.bind(this);
    this.addWork = this.addWork.bind(this);
    this.remove = this.remove.bind(this);
    this.reset = this.reset.bind(this);
  }

  remove = (e) => {
    const parent = e.target.parentNode;
    switch (parent.name) {
      case 'educs':
        this.setState({
          educ: this.state.educ.filter(
            (educObj) => educObj.props.id !== parent.id
          ),
        });
        break;
      case 'works':
        this.setState({
          works: this.state.works.filter(
            (workObj) => workObj.props.id !== parent.id
          ),
        });
        break;
      default:
        break;
    }
  };

  reset = () => {
    this.setState({
      educ: this.state.educ.slice(this.state.educ.length),
      works: this.state.works.slice(this.state.works.length),
    });
  };

  addEduc = (e) => {
    const lastObj = this.props.educs[this.props.educs.length - 1];
    this.setState({
      educ: this.state.educ.concat(
        <ExpInput
          key={lastObj.id}
          id={lastObj.id}
          handleChange={this.props.handleChange}
          name="educs"
          names={{
            inst: 'school',
            instInfo: 'degree',
          }}
          institution="School/University"
          instInfo="Degree"
          removeInput={(e) => {
            e.preventDefault();
            this.props.removeInput(e).then(this.remove(e));
          }}
        />
      ),
    });
  };

  addWork = (e) => {
    const lastObj = this.props.works[this.props.works.length - 1];
    this.setState({
      works: this.state.works.concat(
        <ExpInput
          key={lastObj.id}
          id={lastObj.id}
          handleChange={this.props.handleChange}
          name="works"
          names={{
            inst: 'company',
            instInfo: 'position',
          }}
          institution="Company"
          instInfo="Position"
          removeInput={(e) => {
            e.preventDefault();
            this.props.removeInput(e).then(this.remove(e));
          }}
        />
      ),
    });
  };

  render() {
    const { handleChange, addInput, resetFields } = this.props;
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
            onChange={this.props.imageHandler}
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
            <div>{this.state.educ}</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addInput(e).then(this.addEduc);
              }}
              name="educs"
            >
              Add Education
            </button>
          </div>
          <div className="works">
            <label>Work Experience</label>
            <div>{this.state.works}</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addInput(e).then(this.addWork);
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
            this.reset();
          }}
        >
          Reset Fields
        </button>
      </form>
    );
  }
}

export default Form;
