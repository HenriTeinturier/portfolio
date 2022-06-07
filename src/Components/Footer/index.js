import '../../styles/Footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <LinkedInIcon />
        <EmailIcon />
        <LocalPhoneIcon />
      </div>
      <p> &copy; 2022 www.henriteinturier.fr</p>

    </footer>
  );
}

export default Footer;
