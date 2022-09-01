import { Component } from 'react';
import '../styles/form.css';

export class ReverseField extends Component {
  render() {
    const { handleChange, labelName, name, type } = this.props;
    return (
      <div className="reverseField">
        <input
          onChange={handleChange}
          type={type}
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
    const { handleChange, labelName, name, type } = this.props;
    return (
      <div className="field">
        <label>{labelName}</label>
        <input
          onChange={handleChange}
          type={type}
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
    const {
      name,
      names,
      institution,
      instInfo,
      id,
      handleChange,
      removeInput,
    } = this.props;
    return (
      <fieldset className="expSet" id={id} name={name}>
        <BlkLine />
        <ReverseField
          handleChange={handleChange}
          name={names.inst}
          type="text"
          labelName={institution}
        />
        <ReverseField
          handleChange={handleChange}
          name="location"
          type="text"
          labelName="City/Country"
        />
        <ReverseField
          handleChange={handleChange}
          name={names.instInfo}
          type="text"
          labelName={instInfo}
        />
        <ReverseField
          handleChange={handleChange}
          type="text"
          name="from"
          labelName="From"
        />
        <ReverseField
          handleChange={handleChange}
          type="text"
          name="to"
          labelName="To"
        />
        <button onClick={removeInput}>Delete</button>
      </fieldset>
    );
  }
}
