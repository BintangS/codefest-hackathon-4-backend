
import { Document, Page } from 'react-pdf';

export interface PreviewPDFProps {
    pdfBytes: Uint8Array | undefined
}

// Create Document Component
const PreviewPDF: React.FC<PreviewPDFProps> = (props) => {
    // Trigger the browser to display the PDF document
    return (
        <Document file={{ data: props.pdfBytes }}>
            <Page pageNumber={ 1 } renderTextLayer={ false } renderAnnotationLayer={ false }/>
        </Document>
    )
};

export default PreviewPDF;