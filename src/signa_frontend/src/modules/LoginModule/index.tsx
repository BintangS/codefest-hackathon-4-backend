import { useAuthContext } from '../../components/contexts/UseAuthContext';
import { useNavigate } from 'react-router-dom';
import WelcomePageImage from '../../assets/Asset-WelcomePage.webp'
import RoboLoginPageImage from '../../assets/Robo-LoginPage.webp'
import SignaLogo1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import InternetIdentityLogo from '../../assets/InternetIdentityLogo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const LoginModule = () => {
    const navigate = useNavigate()
    const { login, isAuthenticated } = useAuthContext()

    const handleSubmitLogin = () => {
        login();
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard')
        }
    }, [isAuthenticated])

    return (
        <div className="bg-white">
            <div className="flex justify-around gap-5 max-md:flex-col max-md:gap-0">
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
                        <div className="mt-7 text-5xl text-[2vw] font-semibold text-center text-cyan-600 max-md:max-w-full">
                            Create an Account
                        </div>
                        <img
                            loading="lazy"
                            src={WelcomePageImage}
                            className="self-stretch mt-10 w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="flex relative ml-[10%] flex-col w-[50%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-base font-light text-center text-cyan-600 max-md:mt-10 max-md:max-w-full">
                        <div className="absolute top-[10%] right-1/5 w-[75%]">
                            <img
                                loading="lazy"
                                src={RoboLoginPageImage}
                                className="w-full aspect-[0.93] max-md:max-w-full"
                            />
                            <div onClick={handleSubmitLogin} className="absolute w-[110%] text-[1.25vw] leading-[2vw] lg:top-[70%] md:top-[90%] right-0 -translate-y-[300%] text-[#fff] border-[none] cursor-pointer flex gap-3.5 py-4 pr-3.5 pl-7 font-bold text-center text-white bg-cyan-500 rounded-xl border border-solid border-zinc-800 border-opacity-0">
                                <div className="flex-auto border border-solid border-zinc-800 border-opacity-0">
                                    Sign In Here with Internet Identity
                                </div>
                                <img
                                    loading="lazy"
                                    src={InternetIdentityLogo}
                                    className="shrink-0 max-w-full aspect-[3.7] w-[113px]"
                                />
                            </div>
                            <div className="flex absolute text-[1.5vw] md:top-[30%] lg:top-[40%] right-0 gap-4 self-center mt-12 2xl:mt-14 xl:mt-6">
                                <Link to="/privacy">
                                    <div className="grow my-auto">Privacy and T&C</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModule;