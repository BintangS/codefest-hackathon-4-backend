import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// importing assets
import AssetupDashboardPage from '../../assets/AssetUp-DashboardPage.webp'
import AssetdownDashboardPage from '../../assets/AssetDown-DashboardPage.webp'
import PeopleLogoWhite from '../../assets/PeopleLogoWhite.svg'
import RoboSigna from '../../assets/RoboSigna.webp'
import SignaLogo_v1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import HelloPeopleLogo from '../../assets/HelloPeople-DashboardPage.png'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'

import AuthenticationCard from '../../components/AuthenticationCard/AuthenticationCard'

import { signa_backend } from '../../../../declarations/signa_backend';
import { useAuthContext } from '../../components/contexts/UseAuthContext';
import { DocumentInterface } from '../../interfaces/document'

const DashboardfileModule = () => {
    const { profile } = useAuthContext();
    const [documents, setDocuments] = useState<DocumentInterface[]>();
    const [documentId, setDocumentId] = useState<string>('');
    const navigate = useNavigate();

    const handleDocumentId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDocumentId(e.target.value);
    };

    const handleSearchDocument = async () => {
        try {
            if (profile?.id) {
                const doc = await signa_backend.getDocumentByIdAndSigneeId(documentId, profile.id);
                if (doc && 'Ok' in doc) {
                    setDocuments([doc.Ok]);
                }
            }
        } catch (error) {
            console.error("Failed to fetch documents: ", error);
        }
    };

    useEffect(() => {
        const getAllDocumentByUser = async () => {
            if (profile?.id) {
                try {
                    const docs = await signa_backend.getAllDocumentByUser(profile.id)
                    setDocuments(docs);
                    console.log(docs[0].createdAt, docs[0].signedAt);
                } catch (error) {
                    console.error("Failed to fetch documents:", error);
                }
            } 
        };

        getAllDocumentByUser();
    }, [profile?.id]);

    return (
        <AuthenticationCard>
            <div className="flex [width:inherit] gap-0 bg-white max-md:flex-wrap">
                <SidebarMenu name={"dashboard"} />
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="flex relative flex-col gap-2.5 items-start px-11 pt-6 pb-16 text-sm font-medium min-h-[134px] text-neutral-900 max-md:flex-wrap max-md:px-5">
                        <img
                            loading="lazy"
                            src={AssetupDashboardPage}
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="absolute flex gap-[15px]">
                            <img
                                loading="lazy"
                                src={SignaLogo_v1}
                                className="mt-4 w-[70px]"
                            />
                            <img
                                loading="lazy"
                                src={SignaSignature}
                                className="mt-4 w-[50px] h-[50px] shrink-0 w-14"
                            />
                            <div className="relative mt-4 leading-[350%]">|</div>
                            <div className="relative flex-auto mt-4 leading-[350%] max-md:max-w-full">
                                Dashboard PDF
                            </div>
                        </div>
                    </div>
                    <div className="z-10 mx-7 mt-0 bg-gray-900 rounded-xl border border-white border-solid max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col max-w-[25%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow items-start pt-11 pr-20 pb-20 pl-9 text-sm font-medium text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-6">
                                    <div className="flex gap-2 text-sky-400">
                                        <div className="shrink-0 bg-sky-400 rounded-full h-[18px] w-[18px]" />
                                        <div className="my-auto ml-[20px] text-left">All Document</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[95%] max-md:ml-0 max-md:w-full">
                                <div className="flex relative [width:inherit] z-10 flex-col grow mt-11 max-md:mt-10 max-md:max-w-full">
                                    <div className="flex gap-5 w-full text-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                        <div className="flex-auto text-lg font-medium">
                                            All Document
                                        </div>
                                    </div>
                                    <div className="flex gap-5 px-5 py-3.5 mt-14 text-base rounded-xl border border-white border-solid max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                        <div className="flex-auto my-auto text-white">
                                            Input your document id
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Input here..." className="grow justify-center items-center px-16 py-3.5 rounded-md bg-teal-950 text-slate-500 w-fit max-md:px-5 max-md:max-w-full" onChange={ handleDocumentId }></input>
                                            <button className="rounded-sm bg-white p-2 mx-4" onClick={ handleSearchDocument }>Search</button>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 px-5 py-3.5 mt-14 text-base text-white max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                                        <table className="table-auto w-full">
                                            <thead>
                                                <tr>
                                                    <th className='w-2/5'>Document</th>
                                                    <th className='w-1/5'>Date Uploaded</th>
                                                    <th className='w-1/5'>Receiver</th>
                                                    <th className='w-1/5'>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                documents && documents?.map(doc => {
                                                    return (
                                                        <tr onClick={ () => navigate('/view_pdf', { state: { documentId: doc.id }}) }>
                                                            <td className='w-2/5'>
                                                                <div className="flex gap-3.5 mt-7">
                                                                    <div className="mt-[7px] shrink-0 self-start w-3 h-3 rounded-full border border-white border-solid stroke-[1px]" />
                                                                    <div className="flex-auto">
                                                                        {doc.id}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='w-1/5'>
                                                                <div className="flex gap-3.5 mt-7">
                                                                    <div className="flex-auto">
                                                                        {new Date(Number(doc.createdAt)/1000000).toISOString()}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='w-1/5'>
                                                                <div className="flex-auto gap-3.5 mt-7 w-[30px]">
                                                                    <div className="flex gap-1.5 mt-5">
                                                                        <img
                                                                            loading="lazy"
                                                                            src={PeopleLogoWhite}
                                                                            className="shrink-0 w-full aspect-square"
                                                                        />
                                                                        <div className="my-auto">1</div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='w-1/5'>
                                                                <div className="flex gap-3.5 mt-7">
                                                                    <div className={((doc.signedAt === doc.createdAt) ? "bg-[#D6D91D]" : "bg-[#81D914]") + " flex-auto justify-center px-2.5 py-1 rounded-xl"}>
                                                                        { doc.signedAt === doc.createdAt ? "Waiting for sign" : "Signed" }
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={HelloPeopleLogo}
                                        className="absolute bottom-0 -left-[40%] xl:-left-[30%] 2xl:-left-[20%] 3xl:-left-[10%] w-[50%] max-w-[400px] self-start mt-52 aspect-[1.05] max-md:mt-10"
                                    />
                                    <img
                                        loading="lazy"
                                        src={RoboSigna}
                                        className="self-end mt-52 max-w-full aspect-[1.05] w-[178px] max-md:mt-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src={AssetdownDashboardPage}
                        className="w-full aspect-[11.11] max-md:max-w-full"
                    />
                </div>
            </div>
        </AuthenticationCard>
    );
};

export default DashboardfileModule;
