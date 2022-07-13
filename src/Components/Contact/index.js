import '../../styles/Contact.scss';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div
        id="contact__left"
        className="contact__left lg:grid lg:grid-cols-2 lg:gap-6  lg:h-2/3"
      >
        {/* Left part of form */}
        <div
          className="flex flex-col justify-center text-center lg:p-40 md:text-left"
        >
          <p
            id="contact__left--contacter"
            className="uppercase font-medium opacity-40 text-gray-500"
          >
            Me Contacter
          </p>
          <h1
            id="contact__left--h1"
            className="lg:text-6xl md:text-5xl text-4xl"
          >
            let's talk about you
          </h1>
        </div>
        {/* Right part of Form */}
        <ContactForm />
      </div>

    </div>
  );
}

export default Contact;
