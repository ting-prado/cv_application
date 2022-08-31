import { Component } from 'react';
import '../styles/form.css';

export class ReverseField extends Component {
  render() {
    const { handleChange, labelName, name } = this.props;
    return (
      <div className="reverseField">
        <input
          onChange={handleChange}
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
    const { handleChange, labelName, name } = this.props;
    return (
      <div className="field">
        <label>{labelName}</label>
        <input
          onChange={handleChange}
          type="text"
          name={name}
          placeholder={labelName}
        />
      </div>
    );
  }
}

export class BlkLine extends Component {
  render() {
    return <hr />;
  }
}

export class ExpInput extends Component {
  render() {
    const { names, institution, instInfo } = this.props;
    return (
      <fieldset className="expSet">
        <BlkLine />
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
