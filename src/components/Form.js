import { Component } from 'react';
import '../styles/form.css';
import { ExpInput, Field, NameInput, Desc, ContactInput } from './FormParts';

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
            inst: 'college',
            instInfo: 'degree',
          }}
          institution="University/College"
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
    return (
      <form>
        <NameInput />
        <div className="current">
          <Field name="curRole" labelName="Current Role" />
          <Field name="curAddress" labelName="Current Address" />
        </div>
        <ContactInput />
        <Desc name="profDesc" labelName="Profile Description" />
        <div>
          <label>Education</label>
          <div>{this.state.educ}</div>
          <button onClick={this.addEduc}>Add Education</button>
          <div>{this.state.works}</div>
          <button onClick={this.addWork}>Add Work Experience</button>
        </div>
      </form>
    );
  }
}

export default Form;
