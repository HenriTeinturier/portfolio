import { PropTypes } from 'prop-types';

function SelectField({ label, name, handleChange }) {
  return (
    <div className="selectField mb-5">
      <label
        htmlFor={name}
        className="text-gray-500 text-sm"
      >
        {label}
        <select
          className="w-full border-b-2 py-2 outline-none  bg-gray-100"
          name={name}
          // value={value}
          defaultValue="role"
          onChange={handleChange}
          required
        >
          <option className="" value="role" disabled>Choose Role</option>
          <option className="py-1" value="frontEnd">Front End</option>
          <option className="py-1 " value="backEnd">Back End</option>
          <option className="py-1 " value="qa">QA</option>
        </select>
      </label>

    </div>
  );
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default SelectField;
