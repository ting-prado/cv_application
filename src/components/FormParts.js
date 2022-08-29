import { Component } from 'react';
import '../styles/form.css';

export class ReverseField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }
  handleInput = (e) => {
    console.log(e.target);
  };

  render() {
    const { labelName, name } = this.props;
    return (
      <div className="reverseField">
        <input
          onClick={this.handleInput}
          type="text"
          name={name}
          placeholder={labelName}
        />
        <label>{labelName}</label>
      </div>
    );
  }
}

export class Field extends Component {
  render() {
    const { labelName, name } = this.props;
    return (
      <div className="field">
        <label>{labelName}</label>
        <input type="text" name={name} placeholder={labelName} />
      </div>
    );
  }
}

export class NameInput extends Component {
  render() {
    return (
      <fieldset className="fullName">
        <legend>Full Name</legend>
        <ReverseField name="firstName" labelName="First Name" />
        <ReverseField name="lastName" labelName="Last Name" />
        <ReverseField name="midInitial" labelName="Middle Initial" />
      </fieldset>
    );
  }
}

export class ContactInput extends Component {
  render() {
    return (
      <fieldset className="contact">
        <legend>Contact Information</legend>
        <ReverseField name="email" labelName="Email Address" />
        <ReverseField name="contactNum" labelName="Contact Number" />
      </fieldset>
    );
  }
}

export class Desc extends Component {
  render() {
    const { labelName, name } = this.props;
    return (
      <div className="desc">
        <label>{labelName}</label>
        <textarea rows="5" name={name} placeholder={labelName}></textarea>
      </div>
    );
  }
}

export class ExpInput extends Component {
  render() {
    const { names, institution, instInfo } = this.props;
    return (
      <fieldset className="expSet">
        <ReverseField name={names.inst} labelName={institution} />
        <ReverseField name="location" labelName="Location" />
        <ReverseField name={names.instInfo} labelName={instInfo} />
        <div>
          <span>From</span>
          <input type="number" min="1900" max="2099" name="fromYr" />
          <span>To</span>
          <input type="number" min="1900" max="2099" name="toYr" />
        </div>
      </fieldset>
    );
  }
}
