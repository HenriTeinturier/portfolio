import '../../styles/Footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a
          href="https://github.com/HenriTeinturier"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/henri-teinturier/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href="mailto:henri.teinturier@gmail.com">
          <EmailIcon />
        </a>
        <a
          href="tel:+0616262394"
        >
          <LocalPhoneIcon />
        </a>
      </div>
      <p> &copy; 2022 www.henriteinturier.fr</p>

    </footer>
  );
}

export default Footer;
