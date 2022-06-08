import { PropTypes } from 'prop-types';

function TextareaField({ label, name, handleChange }) {
  return (
    <div className="textareaField mb-5">
      <label
        htmlFor={name}
        className="text-gray-500 text-sm"
      >
        {label}
        <textarea
          onChange={handleChange}
          className="w-full border-b-2 outline-none text-gray-700 bg-gray-100 p-2"
          name={name}
          rows="4"
        />
      </label>

    </div>
  );
}

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default TextareaField;
