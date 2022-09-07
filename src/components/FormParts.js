import '../styles/form.css';

export const ReverseField = (props) => {
  const { handleChange, labelName, name, type } = props;
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
};

export const Field = (props) => {
  const { handleChange, labelName, name, type } = props;
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
};

export const BlkLine = () => {
  return <hr />;
};

export const ExpInput = (props) => {
  const { name, names, institution, instInfo, id, handleChange, removeInput } =
    props;
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
};
