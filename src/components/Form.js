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
  }

  addEduc = (e) => {
    e.preventDefault();
    this.setState({
      educ: this.state.educ.concat(
        <ExpInput
          key={this.state.educ.length}
          names={{
            inst: 'school',
            instInfo: 'degree',
          }}
          institution="School/University"
          instInfo="Degree"
        />
      ),
    });
  };

  addWork = (e) => {
    e.preventDefault();
    this.setState({
      works: this.state.works.concat(
        <ExpInput
          key={this.state.works.length}
          names={{
            inst: 'company',
            instInfo: 'position',
          }}
          institution="Company"
          instInfo="Position"
        />
      ),
    });
  };

  render() {
    const { handleChange } = this.props;
    return (
      <form className="form">
        <fieldset className="fullName">
          <legend>Full Name</legend>
          <ReverseField
            handleChange={handleChange}
            name="firstName"
            labelName="First Name"
          />
          <ReverseField
            handleChange={handleChange}
            name="lastName"
            labelName="Last Name"
          />
        </fieldset>
        <div className="current">
          <Field
            handleChange={handleChange}
            name="curRole"
            labelName="Current Role"
          />
          <Field
            handleChange={handleChange}
            name="curAddress"
            labelName="Current Address"
          />
        </div>
        <fieldset className="contact">
          <legend>Contact Information</legend>
          <ReverseField
            handleChange={handleChange}
            name="email"
            labelName="Email Address"
          />
          <ReverseField
            handleChange={handleChange}
            name="contactNum"
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
          <label>Education</label>
          <div>{this.state.educ}</div>
          <button onClick={this.addEduc}>Add Education</button>
          <label>Work Experience</label>
          <div>{this.state.works}</div>
          <button onClick={this.addWork}>Add Work Experience</button>
        </div>
      </form>
    );
  }
}

export default Form;
