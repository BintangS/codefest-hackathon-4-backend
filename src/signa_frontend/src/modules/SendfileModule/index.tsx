import { useState } from 'react';
import { signa_backend } from '../../../../declarations/signa_backend';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../components/contexts/UseAuthContext';
import { Principal } from '@dfinity/principal';

// assets
import AssetLeftSendPage from '../../assets/AssetLeft-SendPage.webp';
import AssetRightSendPage from '../../assets/AssetRight-SendPage.webp';
import SignaLogo_v1 from '../../assets/SignaLogo_v1.png';
import SignaSignature from '../../assets/SignaSignature.png';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

import AuthenticationCard from '../../components/AuthenticationCard/AuthenticationCard';
import DragAndDropUpload from '../../components/dragAndDropUpload';

const SendfileModule = () => {
    const [file, setFile] = useState<Uint8Array | null>(null);
    const [internetIdentityAddress, setInternetIdentityAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [fileName, setFileName] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const { profile } = useAuthContext();
    const navigate = useNavigate()

    const handleSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        setFileName(files?.[0].name || '');
        if (files && files[0]) {
            const reader = new FileReader();

            reader.onload = (loadEvent) => {
                const arrayBuffer = loadEvent.target?.result;
                if (arrayBuffer) {
                    const uint8Array = new Uint8Array(arrayBuffer as ArrayBuffer);
                    setFile(uint8Array);
                }
            };

            reader.readAsArrayBuffer(files[0]);
        }
    }

    const handleUpload = async () => {
        setIsProcessing(true);
        if (profile?.id && internetIdentityAddress !== '') {
            await signa_backend.createDocument(profile?.id, file || [], Principal.fromText(internetIdentityAddress));
            alert("Document sent!");
            setIsProcessing(false);
            navigate('/dashboard');
        } else if (profile?.id && email !== '') {
            await signa_backend.createDocumentUsingEmail(profile?.id, file || [], email);
            alert("Document sent!");
            setIsProcessing(false);
            navigate('/dashboard');
        } else {
            alert("You are not authenticated, please login!");
        }
    }

    const handleInternetIdentityAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternetIdentityAddress(e.target.value);
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(e.target.value)) {
          setIsEmailValid(true);
          setEmail(e.target.value);
        } else {
          setIsEmailValid(false);
        }
    }

    return (
        <AuthenticationCard>
            <div className="flex gap-5 justify-normal bg-white max-md:flex-wrap">
                <div className="flex w-[20%] gap-0">
                    <SidebarMenu name={"send_pdf"} />
                    <div className="flex relative flex-col items-start px-11 pt-6 pb-20 aspect-[0.1] w-[101px]">
                        <img
                            loading="lazy"
                            src={AssetLeftSendPage}
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
                            <div className="w-full shrink 0">Send PDF</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[90%] gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                    <div className="flex [width:inherit] mt-[100px] flex-col px-5 my-auto max-md:max-w-full">
                        <DragAndDropUpload handlerSelectedFile={ handleSelectedFile } fileName={fileName} />
                        <div className="flex flex-row gap-5 mt-20 max-md:flex-wrap max-md:mt-10 justify-evenly">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Internet Identity
                                </label>
                                <input onChange={ handleInternetIdentityAddressInput }
                                className="shadow appearance-none border rounded w-full py-2 px-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Internet Identity Address"/>
                            </div>
                            <div className="mt-8">
                                or
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input onChange={ handleEmailInput }
                                className={
                                    isEmailValid ?
                                    "shadow appearance-none border rounded w-full py-2 px-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" :
                                    "shadow appearance-none border border-red-500 rounded w-full py-2 px-24 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-xs"
                                } type="text" placeholder="Email"/>
                                {!isEmailValid && <p className="text-red-500 text-xs italic my-2">Please enter a valid email.</p> }
                            </div>
                        </div>
                        {!isProcessing && <button className="justify-center items-center whitespace-nowrap bg-sky-300 rounded-md text-white transition-color duration-500 hover:bg-sky-500 px-16 py-5 mt-20" onClick={ handleUpload }>
                            Send
                        </button>}
                        {isProcessing && <button type="button" className="inline-flex items-center px-16 py-6 mt-20 leading-6 text-sm shadow rounded-md text-white bg-sky-300 hover:bg-sky-500 transition ease-in-out duration-150 cursor-not-allowed" disabled>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4}/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </button>}
                    </div>
                </div>
                <div className="flex w-[10%] gap-0">
                    <img
                        loading="lazy"
                        src={AssetRightSendPage}
                        className="shrink-0 max-w-full aspect-[0.1]"
                    />
                </div>
            </div>
        </AuthenticationCard>
    );
};

export default SendfileModule;
