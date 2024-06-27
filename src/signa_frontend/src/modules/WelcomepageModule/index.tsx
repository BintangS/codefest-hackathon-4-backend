import { Link } from 'react-router-dom'
import AssetPhoneHalf from '../../assets/AssetPhone-WelcomePage.webp'
import RoboSigna from '../../assets/RoboSigna.webp'
import DJBLogo from '../../assets/DJBLogo.png'
import WelcomeLegalLogo from '../../assets/WelcomeLegalLogo.png'
import KominfoLogo from '../../assets/KominfoLogo.png'
import PeruriLogo from '../../assets/PeruriLogo.png'
import InternetIdentityLogo2 from '../../assets/InternetIdentityLogo2.png'
import SignaSignatureWhite from '../../assets/SignaSignatureWhite.png'
import SignaLogo from '../../assets/SignaLogo_v1.png'
import BackgroundWelcomePage from '../../assets/BG-WelcomePage.webp'
import AssetDownWelcomePage from '../../assets/AssetDown-WelcomePage.webp'

const HomepageModule = () => {
    return (
        <div className="relative [width:inherit] flex flex-col items-center bg-white">
            <div className="flex overflow-hidden relative flex-col justify-center self-stretch w-full max-md:max-w-full">
                <img
                    loading="lazy"
                    src={BackgroundWelcomePage}
                    className="object-cover absolute inset-0"
                />
                <div className="flex relative flex-col items-center px-16 pt-11 pb-12 w-full max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col mb-28 w-full max-md:mb-10 max-md:max-w-full">
                        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-0 self-stretch">
                                <img
                                    loading="lazy"
                                    src={SignaLogo}
                                    className="shrink-0 aspect-[1.1] w-[74px]"
                                />
                                <img
                                    loading="lazy"
                                    src={SignaSignatureWhite}
                                    className="shrink-0 aspect-[1.3] w-[87px]"
                                />
                            </div>
                            <div className="flex gap-5 justify-between self-stretch my-auto text-lg text-center text-white max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-2 whitespace-nowrap">
                                    <div>Solution</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9d012377fe737cce6d80cda5bfc48d405b08f2639aa6e2129568b386e8ad4a?apiKey=77b90fc2290346248c9501f26423abd9&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                </div>
                                <div className="flex gap-2 whitespace-nowrap">
                                    <div>Product</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9d012377fe737cce6d80cda5bfc48d405b08f2639aa6e2129568b386e8ad4a?apiKey=77b90fc2290346248c9501f26423abd9&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div>Plan & Pricing</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9d012377fe737cce6d80cda5bfc48d405b08f2639aa6e2129568b386e8ad4a?apiKey=77b90fc2290346248c9501f26423abd9&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                </div>
                            </div>
                            <div className="justify-center self-stretch p-2.5 my-auto text-lg text-center text-white whitespace-nowrap bg-cyan-600 rounded-xl">
                                Contact
                            </div>
                        </div>
                        <div className="mt-[50px] text-[4rem] font-bold leading-[70px] text-left text-sky-200 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
                            The First Web 3.0 <br />
                            E-Sign Platform
                        </div>
                        <div className="mt-4 text-[1rem] text-left text-white max-md:mt-10 max-md:max-w-full">
                            Sign document faster, more secure, and cheaper on DApps Web 3.0{" "}
                        </div>
                        <div className="mt-4 text-left text-xl font-extrabold text-white max-md:mt-10 max-md:max-w-full">
                            Powered by
                        </div>
                        <div className="mt-4 flex overflow-hidden relative flex-col justify-center aspect-[5.63] max-w-[259px]">
                            <img
                                loading="lazy"
                                src={InternetIdentityLogo2}
                                className="object-cover absolute inset-0 size-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-24 justify-around px-5 md:flex-wrap mt-10">
                <img
                    loading="lazy"
                    src={PeruriLogo}
                    className="aspect-[3.33] max-h-[60px]"
                />
                <img
                    loading="lazy"
                    src={KominfoLogo}
                    className="my-auto aspect-[3.23] max-h-[60px]"
                />
                <img
                    loading="lazy"
                    src={WelcomeLegalLogo}
                    className="shrink-0 max-h-[60px] aspect-square"
                />
                <img
                    loading="lazy"
                    src={DJBLogo}
                    className="shrink-0 my-auto max-w-full aspect-[2.44] max-h-[60px]"
                />
            </div>
            <div className="w-full md:mt-10 md:max-w-full">
                <div className="flex mb-[50px] gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 mt-20 max-md:mt-10 max-md:max-w-full">
                            <div className="text-left text-[1rem] font-bold text-black max-md:max-w-full">
                                Conveniently eSign your document and safely secure the eDocs
                                with Web 3.0 SCP. You will have stronger security protection of
                                your document
                            </div>
                            <div className="text-[1rem] flex gap-5 items-center self-start mt-9 text-center">
                                <Link to={'/login'}>
                                    <div className="flex gap-2.5 justify-center self-stretch p-2.5 text-white bg-cyan-600 rounded-xl shadow-sm">
                                        <div>Sign in Now!</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d919ff89240ed9ab1818042f71150953ee8b18134214f4ac401580295703695b?apiKey=77b90fc2290346248c9501f26423abd9&"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                    </div>
                                </Link>
                                <Link to={'/dashboard'}>
                                    <div className="flex-auto self-stretch my-auto text-cyan-600">
                                        View Dashboard
                                    </div>
                                </Link>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/18504d4e7c5465ec55e618bfa6e3270b63aaa7374e0c199c4b99aa7e2465ab83?apiKey=77b90fc2290346248c9501f26423abd9&"
                                    className="shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[0] left-[0] w-full md:mt-10 md:max-w-full">
                {/* <div className="relative inline-block bottom-[0] left-[0] z-10"> */}
                    <img
                        loading="lazy"
                        src={AssetDownWelcomePage}
                        className="w-full"
                    />
                    <img
                        loading="lazy"
                        src={RoboSigna}
                        className="absolute w-1/5 -top-[76px] left-[310px] self-end mt-3.5 max-w-full aspect-[0.99]"
                    />
                    <img
                        loading="lazy"
                        src={AssetPhoneHalf}
                        className="absolute w-2/5 -top-[224px] left-[480px] object-cover absolute inset-0"
                    />
                {/* </div> */}
            </div>
        </div>
    );
};

export default HomepageModule;
