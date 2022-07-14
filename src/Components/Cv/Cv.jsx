/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-bind */
// import { Document, Page } from 'react-pdf';
import { pdfjs, Document, Page } from 'react-pdf';
// import pdf from '../../assets/pdf.pdf';
import pdf from './Henri-Teinturier-CV.pdf';
import '../../styles/Cv.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import { useState } from 'react';

// import pdf2 from '../../../public/pdf.pdf';

function Cv() {
  // const [file, setFile] = useState('./pdf.pdf');
  // function onFileChange(event) {
  //   setFile(event.target.files[0]);
  // }

  return (

    <div className="cvContainer">
      <Document
        className="documentCV"
        file={pdf}
      >
        <a
          href="https://www.adminer.henriteinturier.fr/Henri-Teinturier-CV.pdf"
          download
          target="_blank"
          rel="noreferrer"
        >
          <Page pageNumber={1} className="pageCV" />
        </a>
      </Document>

    </div>

  );
}

export default Cv;
