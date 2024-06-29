import SignaLogo_v1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import AssetdownPrivacypage from '../../assets/AssetDown-PrivacyPage.png'

const PrivacyModule = () => {
    return (
        <div className="flex [width:inherit] gap-0 bg-white max-md:flex-wrap">
            <SidebarMenu name={"privacy"} />
            <div className="flex flex-col relative grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex relative flex-col gap-2.5 items-start px-11 pt-6 pb-16 text-sm font-medium min-h-[134px] text-neutral-900 max-md:flex-wrap max-md:px-5">
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
                            Privacy and T&C
                        </div>
                    </div>
                </div>
                <div className="flex flex-col self-center px-5 pl-12 pr-12 w-full text-3xl leading-10 text-center text-black max-md:mt-10 max-md:max-w-full">
                    <div className="self-center font-bold">Privacy and T&C</div>
                    <div className="p-10 scrollbar-container text-justify text-[1rem] [width:inherit] overflow-scroll shrink-0 mt-16 rounded-xl border border-solid bg-zinc-100 border-zinc-800 h-[444px] max-md:mt-10 max-md:max-w-full">
                        <h1 className="font-bold text-center">Privacy Notice</h1>
                        The existence of this Privacy Notice (which was previously called the Privacy Policy) is a real commitment from PT Signa Web3 Dapps (hereinafter referred to as "Signa") to respect and protect every User's personal data or information via the https://Signa.id site, sites its derivatives, as well as the Signa Application (hereinafter referred to as the “Site” and “Signa Application” respectively). This Privacy Notice only applies to Signa services organized by Signa over time (hereinafter referred to as “Signa Services”). This Privacy Notice is intended to provide information to Signa Users regarding how Signa collects, processes, processes, discloses, stores, secures, analyzes, deletes and/or destroys User Personal Data for the purposes of Signa Services (hereinafter referred to as "Processing" or "Processing ” or “Processed”). By using Signa Services, Users understand that Signa will Process User Personal Data as described in this Privacy Notice. Use of Signa is governed by this Privacy Notice and Signa's Terms of Service Use.
                        This Privacy Notice becomes effective from the time the User gives consent to this Privacy Notice, either expressly or in the ways stated in this Privacy Notice.<br/><br/>
                        <div className="[width:inherit]">
                            <ul className="list-inside">
                                <li>
                                    <div className="font-bold">DEFINITION</div>
                                    <ol className="[text-indent:1.5rem] list-[lower-alpha] list-inside">
                                        <li>Every word that begins with a capital letter has the following meaning:</li>
                                        <li>"Signa Account" is every account issued by Signa, with the name SignaID, where each account owner will be given a userID, choose a password, and be able to store his/her Personal Data.</li>
                                        <li>"Signa Application" is a mobile application operated by PT Signa Web3 Dapps.</li>
                                        <li>"Basic Data" is Personal Data required by Signa to be able to issue a SignaID and create a Signa Account.</li>
                                        <li>"Personal Data" is any data that identifies or can be used to identify an individual, alone or in combination with other data/information, directly or indirectly, in electronic and/or non-electronic systems, which is divided into Specific/Sensitive Personal Data and General Personal Data.</li>
                                        <li>"Specific/Sensitive Personal Data" is Personal Data that is sensitive and requires a specific and higher level of protection compared to protection for other Personal Data in accordance with applicable laws and regulations. For example, Specific/Sensitive Personal Data includes and is not limited to personal financial data/information, children's Personal Data, biometric data, criminal records, health information, genetic data and other data whose processing may have major impacts according to applicable laws and regulations.</li>
                                        <li>"General Personal Data" is Personal Data that is general in nature and does not fall into the category of Specific/Sensitive Personal Data, including but not limited to; full name, gender, address, place and date of birth, telephone number, email address, occupation, identification number issued by an authorized institution (such as, among others; Resident Identity Card (KTP), Driving License (SIM) or passport), nationality, as well as the profile and unique identification number that Signa issues to Signa Service Users.</li>
                                        <li>"Signa Services" means services for issuing Electronic Certificates, creating Signa Electronic Signatures (SignaSign), Signa Document Management System, SignaPass, Electronic Seals, SignaChat and/or other Signa services stated by Signa from time to time, either through the Site or Application Signa.</li>
                                        <li>"Processing" or "Processing" or "Processed" means collecting, processing, processing, disclosing, storing, securing, analyzing, deleting and/or destroying User Personal for the purposes of Signa Services.</li>
                                        <li>"User" means every individual including but not limited to Indonesian Citizens (WNI) and/or Foreign Citizens (WNA) or legal entities/business entities who access the Signa Platform and/or use Signa Services.</li>
                                        <li>"Third Party" is an individual and/or legal entity/business entity that collaborates with Signa and can be proven by a document that binds the rights and obligations of each party.</li>
                                        <li>"Signa" means PT Signa Web3 Dapps and/or its subsidiaries, affiliated companies that have a direct or indirect relationship with PT Signa Web3 Dapps.</li>
                                        <li>"SignaID" means an alphanumeric code issued by Signa, which can be associated with a unique name (username), to identify Users when using Signa Services.</li>
                                        <li>"Site" means any URL that uses the domain with the address "https://Signa.id" or other sites stated by Signa from time to time</li>
                                        <li>"Electronic Certificate" is a certificate issued and/or provided by Signa which is electronic and contains an Electronic Signature and identity indicating the legal subject or parties in the Electronic Transaction.</li>
                                        <li>"Electronic Information" is one or a collection of electronic data, including but not limited to writing, sound, images, maps, plans, photos, Electronic Data Interchange (EDI), electronic mail (email), telegram, telex, telecopy or the like, letters , processed signs, numbers, access codes, symbols, or perforations that have meaning or can be understood by a person capable of understanding them.</li>
                                    </ol>
                                </li><br/>
                                <li>
                                    <div className="font-bold">PERSONAL DATA PROCESSED BY SIGNA</div>
                                    <div>
                                        To create a Signa Account and use Signa Services, Users are required to provide User Personal Data correctly, clearly, accurately and completely to Signa. If the User does not provide the Personal Data required in this point, or provides representations and warranties, information or Personal Data that is untrue, unclear, inaccurate and/or incomplete, then Signa has the right to reject the application for creating a Signa Account for that User and to suspend or stop part or all of the Signa Services provided to Users.
                                        Signa may process Personal Data of a general and/or specific/sensitive nature of Signa Users, in the following circumstances:
                                        Signa requests Basic User Data for the purposes of creating a Signa account. The Personal Data in question includes but is not limited to:
                                    </div>
                                    <ol className="[text-indent:1.5rem] list-[lower-alpha] list-inside">
                                        <li>full name;</li>
                                        <li>ii. place and date of birth;</li>
                                        <li>iii. copy of the Population Identity Card (KTP) document (image) issued by the Indonesian Government. Signa may request other supporting documents including but not limited to Family Card (KK), Driving License (SIM), Passport, Temporary Stay Permit Card (KITAS), and/or a statement from the company as supporting documents for the identification and authentication process application for an Electronic Certificate if necessary (including the information contained therein);</li>
                                        <li>iv. mobile phone number;</li>
                                        <li>v. electronic mail/email address; and/or</li>
                                        <li>vi. biometric data.</li>
                                    </ol>
                                </li><br/>
                                <li>
                                    <div className="font-bold">DATA THAT SIGNA COLLECTS AUTOMATICALLY</div>
                                    <div>
                                        When Users use Signa Services, Signa will automatically collect Personal Data such as IP Address, login information, geolocation, browser client & version, timestamp of activities, operating system, and User transaction data related to the use of Signa Services.
                                        When Users use Signa Services, including Signa Services through Third Parties, Users may provide other Personal Data (other than as mentioned in points (a) and (b) above) to Signa from time to time.
                                    </div>
                                    <ol className="[text-indent:1.5rem] list-[lower-alpha] list-inside">
                                        <li>Signa uploads, collects and uses the User's Contact List and Images contained in the User's device for the use of the SignaChat service, where such data is needed to facilitate data synchronization between SignaID Users and other SignaID Users to communicate with and/or recognize each other others in connection with the Signa Services.</li>
                                        <li>All forms of documents, messages, images and/or attachments uploaded and/or shared by Users on the Signa Application in connection with the use of Signa services including but not limited to SignaChat and SignaSign.</li>
                                        <li>User location data, which Signa processes from the device used by the User when the User scans the QR to enter the User's Signa account and/or uses Signa Services, including carrying out the document signing process.</li>
                                        <li>iSigna is transparent to our Users in controlling User Personal Data. Signa processes (discloses, uses and controls) User Personal Data limited to the purposes of Signa Services based on Signa's Terms and Conditions and/or User consent.</li>
                                        <li>Data that Signa collects from third parties</li>
                                        <li>Users can create a Signa Account through a Third Party to access or use the services provided by that Third Party. The third party that provides Signa Account creation services is the registration authority. The registration authority will forward the Personal Data information that the User provides to create a User Signa Account.Cookies</li>
                                    </ol>
                                </li><br/>
                            </ul>
                        </div>
                        <div className="[width:inherit]">
                            In improving the quality of the Service, Signa uses cookies as long as the User uses the Signa Service, to recognize and remember certain information on the User's browser including session management, service personalization, and recording user activity. Users can choose to disable cookies on the User's browser. If the User deactivates cookies, certain functions of the Site's services will be limited.
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src={AssetdownPrivacypage}
                    className="absolute bottom-0 h-[120px] w-full aspect-[11.11] max-md:max-w-full"
                />
            </div>
        </div>
    );
};

export default PrivacyModule;