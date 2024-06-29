import { useState } from 'react';
import { useAuthContext } from '../contexts/UseAuthContext';
import { AuthenticationCardPropsInterface } from './interface';
import LoginModule from '../../modules/LoginModule'

// assets
import AssetLeftReceivePage from '../../assets/AssetLeft-ReceivePage.webp'
import AssetRightReceivePage from '../../assets/AssetRight-ReceivePage.webp'
import SignaLogo_v1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import BGSignupLogo from '../../assets/BGSignupLogo.svg'

const AuthenticationCard: React.FC<AuthenticationCardPropsInterface> = ({
  children,
}) => {
  const { isAuthenticated, profile, authClient, createProfile } =
    useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  async function handleSubmit() {
    if (!authClient) return;
    if (username === '') return;

    setIsLoading(true);
    createProfile(username).then(() => {
      setIsLoading(false);
    });
  }

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(e.target.value)) {
      setIsEmailValid(true);
      setUsername(e.target.value);
    } else {
      setIsEmailValid(false);
    }
  }

  return profile === undefined ? (
    <div className="flex items-center justify-center min-h-screen">
      <svg className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"></svg>
      <p className="text-gray-500 dark:text-gray-400 ml-2">Loading...</p>
    </div>
  ) : !isAuthenticated ? (
    <LoginModule />
  ) : profile === null ? (
    <div className="flex [width:inherit] gap-5 justify-normal bg-white max-md:flex-wrap">
        <div className="flex w-[20%] gap-0">
            <SidebarMenu name={"signup"} />
            <div className="flex relative flex-col items-start px-11 pt-6 pb-20 aspect-[0.1] w-[101px]">
                <img
                    loading="lazy"
                    src={AssetLeftReceivePage}
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="absolute flex">
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
                    <div className="relative w-full shrink-0 leading-[300%]">|</div>
                    <div className="relative w-full shrink-0">Sign In Email</div>
                </div>
            </div>
        </div>
        <div className="flex w-[90%] gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
            <div className="flex mt-[15%] w-full pl-[10%] pr-[15%] flex-col self-start mt-[20%] max-md:mt-10 max-md:max-w-full">
                <div className="px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="self-stretch text-left my-auto font-bold leading-10 text-cyan-900 max-md:mt-10">
                                Congratulations on
                                Signing Up to
                                Internet Identity!
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src={BGSignupLogo}
                                className="w-full aspect-square max-md:mt-10"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-3.5 py-8 mt-6 text-lg text-center rounded-xl bg-zinc-100 max-md:max-w-full">
                  <input
                  type="text"
                  name="email"
                  placeholder="Please Input Your Email Address Here to Continue"
                  onChange={ validateEmail }
                  className="self-center max-w-full bg-transparent w-1/2 h-12 p-4" />
                  
                  {!isEmailValid && <p className="text-red-500 text-xs italic my-2">Please enter a valid email.</p>}
                  <button type="submit" disabled={isLoading} className="justify-center items-center whitespace-nowrap mt-4 py-4 bg-sky-300 rounded-md text-white transition-color duration-500 hover:bg-sky-500" onClick={handleSubmit}>
                    {isLoading ? 'Loading...' : 'Submit'}
                  </button>
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
  ) : (
    children
  );
};

export default AuthenticationCard;