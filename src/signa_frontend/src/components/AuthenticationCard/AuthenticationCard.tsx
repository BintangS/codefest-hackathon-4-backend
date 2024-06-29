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
    <div>Loading...</div>
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
                            <div className="self-stretch text-left my-auto text-[1.5rem] font-bold leading-10 text-cyan-900 max-md:mt-10">
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
                <div className="flex flex-col px-3.5 py-8 mt-6 text-lg font-semibold text-center rounded-xl border border-solid bg-zinc-100 border-zinc-800 max-md:max-w-full">
                  <form onSubmit={ (e) => { e.preventDefault() }}>
                    <input
                    type="text"
                    name="email"
                    placeholder="Please Input Your Email Address Here to Continue"
                    onChange={ validateEmail }
                    className="self-center text-neutral-900 max-md:max-w-full" />
                    
                    {!isEmailValid && <div style={{ color: 'red' }}>Please enter a valid email.</div>}
                    
                    <button type="submit" disabled={isLoading} className="rounded-sm" onClick={handleSubmit}>
                      {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                    </form>
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