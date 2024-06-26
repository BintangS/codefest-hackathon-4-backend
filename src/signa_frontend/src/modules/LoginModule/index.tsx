import { useAuthContext } from '../../components/contexts/UseAuthContext';
import { useNavigate } from 'react-router-dom';
import WelcomePageImage from '../../assets/Asset-WelcomePage.webp'
import RoboLoginPageImage from '../../assets/Robo-LoginPage.webp'
import SignaLogo1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import InternetIdentityLogo from '../../assets/InternetIdentityLogo.png'

const LoginModule = () => {
    const navigate = useNavigate()
    const {login, isAuthenticated} = useAuthContext()
    
    const handleSubmitLogin = () => {
        login()
        if (isAuthenticated) {
            navigate('/upload')
        }
    }

    return (
        <div className="bg-white">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-5 mt-20 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-0 max-md:pr-5">
                    <img
                        loading="lazy"
                        src={SignaLogo1}
                        className="shrink-0 max-w-full aspect-[1.09] w-[100px]"
                    />
                    <img
                        loading="lazy"
                        src={SignaSignature}
                        className="shrink-0 max-w-full aspect-[1.27] w-[120px]"
                    />
                    </div>
                    <div className="mt-7 text-5xl text-[32px] font-semibold text-center text-cyan-600 max-md:max-w-full">
                        Create an Account
                    </div>
                    <img
                    loading="lazy"
                    src={WelcomePageImage}
                    className="self-stretch mt-10 w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
                    />
                </div>
                </div>
                <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-base font-light text-center text-cyan-600 max-md:mt-10 max-md:max-w-full">
                        <div className="relative w-[380px] h-[380px]">
                            <img
                            loading="lazy"
                            src={RoboLoginPageImage}
                            className="w-full aspect-[0.93] max-md:max-w-full"
                            />
                            <div onClick={handleSubmitLogin} className="absolute w-[450px] top-[350px] right-[5px] -translate-y-[300%] text-[#fff] border-[none] cursor-pointer flex gap-3.5 py-4 pr-3.5 pl-7 text-base font-bold text-center text-white bg-cyan-500 rounded-xl border border-solid border-zinc-800 border-opacity-0">
                                <div className="flex-auto border border-solid border-zinc-800 border-opacity-0">
                                    Sign In Here with Internet Identity
                                </div>
                                <img
                                    loading="lazy"
                                    src={InternetIdentityLogo}
                                    className="shrink-0 max-w-full aspect-[3.7] w-[113px]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 self-center mt-14 max-md:mt-10">
                            <div className="grow my-auto">Terms of Use</div>
                            <div className="grow my-auto">Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModule;