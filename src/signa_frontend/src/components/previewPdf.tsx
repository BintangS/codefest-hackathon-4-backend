import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf'

// Create Document Component
const PreviewPDF = () => {
    const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);

    useEffect(() => {
        const modifyPdf = async () => {
            const url = '/Receipt.pdf'
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

            // Load a PDFDocument from the existing PDF bytes
            const pdfDoc = await PDFDocument.load(existingPdfBytes)

            // Embed the Helvetica font
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

            // Get the first page of the document
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]

            // Get the width and height of the first page
            const { width, height } = firstPage.getSize()

            // Draw a string of text diagonally across the first page
            firstPage.drawText('Signed by Signa!', {
                x: width / 4,
                y: height / 1.5,
                size: 50,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1),
                rotate: degrees(-45),
            })

            // Serialize the PDFDocument to bytes (a Uint8Array)
            const modifiedPdfBytes = await pdfDoc.save()
            setPdfBytes(modifiedPdfBytes);
        };

        modifyPdf().catch(console.error);
    }, []);

    if (!pdfBytes) return (
        <Document loading="Loading PDF document..." />
    );

    if (pdfBytes instanceof Uint8Array) {
        console.log("pdfBytes: ", pdfBytes);
    }

    // Trigger the browser to download the PDF document
    return (
        <Document file={{ data: pdfBytes}}>
            <Page pageNumber={1} />
        </Document>
    )
};

export default PreviewPDF;