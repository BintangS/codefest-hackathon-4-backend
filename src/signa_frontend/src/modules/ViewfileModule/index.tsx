import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

import AssetLeftReceivePage from '../../assets/AssetLeft-ReceivePage.webp'
import AssetRightReceivePage from '../../assets/AssetRight-ReceivePage.webp'
import SignaLogo_v1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import StudyImageViewfile from '../../assets/AssetStudy-ViewfilePage.png'

import { signa_backend } from '../../../../declarations/signa_backend';
import { useAuthContext } from '../../components/contexts/UseAuthContext';
import AuthenticationCard from '../../components/AuthenticationCard/AuthenticationCard';
import PreviewPDF from '../../components/previewPdf';

const ViewfileModule = () => {
    const [documentBytes, setDocumentBytes] = useState<ArrayBuffer>();
    const [documentBytesForView, setDocumentBytesForView] = useState<Uint8Array>();
    const [isDocumentSigned, setIsDocumentSigned] = useState<boolean>(false);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [isDocumentSignedAndSubmitted, setIsDocumentSignedAndSubmitted] = useState<boolean>(false);
    const { profile } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignDocument = async () => {
        signPdf();
        setIsDocumentSigned(true);
    }

    const handleSubmitSignedDocument = async () => {
        setIsProcessing(true);
        if (documentBytes === null || documentBytes === undefined) {
            alert("No pdf document to submit!");
            return;
        }

        if (profile?.id && documentBytes !== null) {
            await signa_backend.signDocument(profile?.id, documentBytesForView as Uint8Array, location.state?.documentId);

            alert("Document send!");
            setIsProcessing(false);
            navigate('/dashboard');
        }
    }

    const signPdf = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }

        setIsProcessing(true);

        let existingPdfBytes = documentBytes;

        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes as ArrayBuffer);

        // Embed the Helvetica font
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Get the first page of the document
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // Get the width and height of the first page
        const { width, height } = firstPage.getSize();

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
        const documentBytesCopy = new Uint8Array(modifiedPdfBytes).slice().buffer;
        setDocumentBytes(documentBytesCopy);
        setDocumentBytesForView(modifiedPdfBytes);
        setIsProcessing(false);
    };

    const showSignButton = () => {
        if (isDocumentSignedAndSubmitted) {
            return;
        } else if (isProcessing) {
            return (
                <button type="button" className="inline-flex items-center px-16 py-6 mt-5 font-semibold leading-6 text-sm shadow rounded-md text-white bg-sky-300 hover:bg-sky-500 transition ease-in-out duration-150 cursor-not-allowed" disabled>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4}/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                </button>
            )
        } else if (!isDocumentSigned) {
            return (<button className="justify-center items-center px-16 py-6 mt-5 whitespace-nowrap bg-sky-300 rounded-md text-white max-md:px-5 max-md:max-w-full transition-color duration-500 hover:bg-sky-500" onClick = { handleSignDocument }>
                Sign Document
            </button>);
        } else if (isDocumentSigned) {
            return (<button className="justify-center items-center px-16 py-6 mt-5 whitespace-nowrap bg-sky-300 rounded-md text-white max-md:px-5 max-md:max-w-full transition-color duration-500 hover:bg-sky-500" onClick = { handleSubmitSignedDocument }>
                Submit Signed Document
            </button>)
        }
    }

    useEffect(() => {
        const fetchDocument = async () => {
            if (!profile) {
                navigate('/login');
                return;
            }

            const doc = await signa_backend.getDocumentByIdAndSigneeId(location.state?.documentId, profile.id);

            if (doc && 'ok' in doc) {
                const documentBytesCopy = new Uint8Array(doc.ok.document).slice().buffer;
                setDocumentBytesForView(doc.ok.document as Uint8Array);
                setDocumentBytes(documentBytesCopy);
                if (doc.ok.createdAt !== doc.ok.signedAt) {
                    setIsDocumentSignedAndSubmitted(true);
                }
            }
        };

        fetchDocument();
    }, [])

    return (
        <AuthenticationCard>
            <div className="flex [width:inherit] gap-5 justify-normal bg-white max-md:flex-wrap">
                <div className="flex w-[20%] gap-0">
                    <SidebarMenu name={"receive_pdf"} />
                    <div className="flex relative flex-col items-start px-11 pt-6 pb-20 aspect-[0.1] w-[101px]">
                        <img
                            loading="lazy"
                            src={AssetLeftReceivePage}
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="absolute flex gap-[10px]">
                            <img
                                loading="lazy"
                                src={SignaLogo_v1}
                                className="w-[70px]"
                            />
                            <img
                                loading="lazy"
                                src={SignaSignature}
                                className="w-[50px] h-[50px] shrink-0 w-14"
                            />
                            <div className="w-full shrink 0 leading-[300%]">|</div>
                            <div className="w-full shrink 0">Receive PDF</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[90%] gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                    <div className="flex [width:inherit] flex-col px-5 my-auto max-md:max-w-full">
                        <div className="flex flex-row">
                            <div className="flex self-start w-[50%]">
                                <img
                                    loading="lazy"
                                    src={StudyImageViewfile}
                                    className="w-[80%] -mb-[22%] xl:-mb-[10%]"
                                />
                            </div>
                            <div className="flex self-end w-[50%] font-medium leading-10 text-center text-black max-md:mr-2.5">
                                Document id: { location.state?.documentId }
                            </div>
                        </div>
                        <div className="flex relative flex-col items-center px-7 pt-20 pb-6 mt-14 text-lg font-semibold rounded-xl bg-zinc-100 border-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            { documentBytesForView && <PreviewPDF pdfBytes = { new Uint8Array(documentBytesForView) } /> }
                            { showSignButton() }
                        </div>
                    </div>
                </div>
                <div className="flex w-[10%] gap-0">
                    <img
                        loading="lazy"
                        src={AssetRightReceivePage}
                        className="shrink-0 max-w-full aspect-[0.1]"
                    />
                </div>
            </div>
        </AuthenticationCard>
    );
};

export default ViewfileModule;
