import PropTypes from 'prop-types';

function InputField({
  handleChange, label, name, type,
}) {
  return (
    <div
      className="inputField mb-5"
    >
      <label
        htmlFor={name}
        className="text-gray-500 text-sm"
      >
        {label}
        <input
          className="border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2"
          type={type}
          name={name}
          // value={value}
          onChange={handleChange}
          required
        />
      </label>

    </div>
  );
}

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // value: PropTypes.string,
};

export default InputField;
