import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import InputField from '../InputField';
// import SelectField from '../SelectField';
import TextareaField from '../TextareaField';

function ContactForm() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: '',
  });

  // necessaire for emailjs
  const form = useRef();
  const serviceId = process.env.REACT_APP_PUBLIC_SERVICE_ID_EMAILJS;
  const templateId = process.env.REACT_APP_PUBLIC_TEMPLATE_ID_EMAILJS;
  const publicKeyEmailJs = process.env.REACT_APP_PUBLIC_KEY_EMAILJS;

  const handleChange = (e) => {
    setValues(() => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKeyEmailJs)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div
      className="contact__right lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5"
    >
      <form ref={form} onSubmit={handleSubmit}>
        <h3
          className="text-gray-700 mb-7 text-xl font-semibold"
        >
          Send me a message
        </h3>
        <InputField handleChange={handleChange} label="Name" name="fullName" type="text" placeholder="John Doe" />
        <InputField handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jdoe@exemple.com" />
        {/* <SelectField handleChange={handleChange} name="role" label="Role" /> */}
        <TextareaField handleChange={handleChange} label="Your message here" name="message" />
        <button
          type="submit"
          id="submitFormButton"
          // bg-gray-900 text-gray-200 hover:bg-gray-700
          className="mt-4 text-gray-900  rounded  px-4 py-2 focus:outline-none"
        >
          Send <ChevronRightIcon className="w-6 ml-2 float-right" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
