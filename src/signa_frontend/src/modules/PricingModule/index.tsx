import { Link } from 'react-router-dom'
import SignaSignature from '../../assets/SignaSignature.png'
import SignaLogo from '../../assets/SignaLogo_v1.png'
import BorderLogoCard from '../../assets/BorderIcon-PricingPage.png'
import ICPMonoLogo from '../../assets/Logo ICP mono.png'
import ICDriveLogo from '../../assets/Logo IC Drive.png'
import AssetTickIcon from '../../assets/Assets Tick.png'
import BGDownPricingPage from '../../assets/BG Down - Pricing Page.png'
import BGImagePricingPage from '../../assets/Assets center - Pricing Page.png'

const PricingModule = () => {
    return (
        <div className="flex overflow-hidden relative flex-col items-center pt-11 pb-20 bg-[linear-gradient(180deg,_#FFF_0%,_#7AC4E2_100%)]">
            <div className="flex gap-5 justify-between items-center px-5 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-0 self-stretch">
                    <img
                        loading="lazy"
                        src={SignaLogo}
                        className="shrink-0 aspect-[1.1] w-[74px]"
                    />
                    <img
                        loading="lazy"
                        src={SignaSignature}
                        className="shrink-0 aspect-[1.3] w-[87px]"
                    />
                </div>
                <div className="flex gap-5 justify-between self-stretch my-auto text-[1.5vw] text-center text-neutral-900 max-md:flex-wrap max-md:max-w-full">
                    <Link to="/">
                        <div className="flex gap-2 whitespace-nowrap">
                            <div>Homepage</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd64f0122aa24978678434d8320b1bd47a2c24a416f0a9e55d92db19d51832b5?apiKey=77b90fc2290346248c9501f26423abd9&"
                                className="shrink-0 w-[1.5vw] aspect-square"
                            />
                        </div>
                    </Link>
                    <Link to="/product">
                        <div className="flex gap-2 whitespace-nowrap">
                            <div>Product</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd64f0122aa24978678434d8320b1bd47a2c24a416f0a9e55d92db19d51832b5?apiKey=77b90fc2290346248c9501f26423abd9&"
                                className="shrink-0 w-[1.5vw] aspect-square"
                            />
                        </div>
                    </Link>
                    <Link to="/pricing">
                        <div className="flex gap-2 font-semibold">
                            <div>Plan & Pricing</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd64f0122aa24978678434d8320b1bd47a2c24a416f0a9e55d92db19d51832b5?apiKey=77b90fc2290346248c9501f26423abd9&"
                                className="shrink-0 w-[1.5vw] aspect-square"
                            />
                        </div>
                    </Link>
                </div>
                <div className="justify-center self-stretch p-2.5 my-auto text-[1.5vw] text-center text-white whitespace-nowrap bg-cyan-600 rounded-xl">
                    Contact
                </div>
            </div>
            <div className="text-[3rem] mt-[5%] pb-[30%] mb-[20%] justify-center items-center self-stretch w-full text-center text-neutral-900 max-md:px-5 max-md:pb-10 max-md:max-w-full max-md:text-4xl">
                Choose Your Plan
            </div>
            <div className="z-10 px-5 mt-0 w-full max-md:max-w-full">
                <div className="flex max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-20 pb-6 w-full bg-white rounded-xl shadow-2xl max-md:mt-4 max-md:max-w-full">
                            <div className="self-center text-[2rem] mt-1.5 text-center text-neutral-900">
                                Personal
                            </div>
                            <div className="min-h-[80px] self-center mt-10 text-[1rem] leading-6 text-center text-neutral-900">
                                For small to medium teams that need to sen, sign, and
                                collaborate
                            </div>
                            <div className="flex [width:inherit] text-center">
                                <div className="flex gap-1 text-[3.5rem] w-[60%] whitespace-nowrap leading-[128px] text-neutral-900 max-md:text-4xl">
                                    <img
                                        loading="lazy"
                                        src={ICPMonoLogo}
                                        className="max-w-[fit-content] w-2/5 h-2/5 mt-[20%]"
                                    />
                                    <div className="flex-auto my-auto max-md:text-4xl">0.3</div>
                                </div>
                                <div className="flex text-left w-[40%] flex-col my-auto text-[0.75rem] leading-5">
                                    <div className="text-neutral-900">/ month</div>
                                    <div className="text-zinc-400">
                                        3 ICP Coins billed annually
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src={BorderLogoCard}
                                className="self-end max-w-full border border-solid border-zinc-400 stroke-[1px] stroke-zinc-400 w-full max-md:mr-2.5"
                            />
                            <div className="min-h-[270px]">
                                <div className="self-start mt-[10%] leading-5 text-center text-neutral-900 max-md:ml-2.5">
                                    Core feature include
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal self-start mt-6 leading-5 text-neutral-900 max-md:ml-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>500+ Documents</div>
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal self-start mt-1 leading-5 text-neutral-900 max-md:ml-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>Mass Upload Feature</div>
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal mt-1 leading-5 text-neutral-900 max-md:mx-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>100+ ICP DApps Ecosystem Integration</div>
                                </div>
                            </div>
                            <div className="justify-center items-center px-16 py-5 font-medium text-center text-white bg-cyan-900 rounded-xl max-md:px-5 max-md:mt-10">
                                Buy Now
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pb-6 w-full bg-white rounded-xl shadow-2xl max-md:mt-4 max-md:max-w-full">
                            <div className="flex leading-4 text-[1rem] overflow-hidden relative flex-col justify-center items-start self-center px-16 py-5 max-w-full text-center text-white aspect-[4.51] fill-green-900 w-[266px] max-md:pr-5 max-md:pl-6">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f9a31fc9a194d84f3984a56d667f674f65fc3693a531b2b9c8e468054c8c4f4?apiKey=77b90fc2290346248c9501f26423abd9&"
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <div className="absolute bottom-[40%] left-[20%] right-[20%]">Most Popular</div>
                            </div>
                            <div className="self-center mt-7 text-[2rem] text-center text-neutral-900">
                                Standard
                            </div>
                            <div className="min-h-[80px] self-center mt-10 text-[1rem] leading-6 text-center text-neutral-900">
                                For small to medium teams that need to sen, sign, and
                                collaborate
                            </div>
                            <div className="flex [width:inherit] text-center">
                                <div className="flex gap-1 text-[3.5rem] w-[60%] whitespace-nowrap leading-[128px] text-neutral-900 max-md:text-4xl">
                                    <img
                                        loading="lazy"
                                        src={ICPMonoLogo}
                                        className="max-w-[fit-content] w-2/5 h-2/5 mt-[20%]"
                                    />
                                    <div className="flex-auto my-auto max-md:text-4xl">0.5</div>
                                </div>
                                <div className="flex text-left w-[40%] flex-col my-auto text-[0.75rem] leading-5">
                                    <div className="text-neutral-900">/ month</div>
                                    <div className="text-zinc-400">
                                        5 ICP Coins billed annually
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src={BorderLogoCard}
                                className="self-end max-w-full border border-solid border-zinc-400 stroke-[1px] stroke-zinc-400 w-full max-md:mr-2.5"
                            />
                            <div className="min-h-[270px]">
                                <div className="self-start mt-[10%] leading-5 text-center text-neutral-900 max-md:ml-2.5">
                                    Personal feature include
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal self-start mt-6 leading-5 text-neutral-900 max-md:ml-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>1000+ Documents</div>
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal self-start mt-1 leading-5 text-neutral-900 max-md:ml-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>Double Encrypted Document Access</div>
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal mt-1 leading-5 text-neutral-900 max-md:mx-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>Restore & BackUp Features</div>
                                </div>
                            </div>
                            <div className="justify-center items-center px-16 py-5 font-medium text-center text-white bg-cyan-900 rounded-xl max-md:px-5 max-md:mt-10">
                                Buy Now
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-20 pb-6 w-full bg-white rounded-xl shadow-2xl max-md:mt-4 max-md:max-w-full">
                            <div className="self-center text-[2rem] mt-1.5 text-center text-neutral-900">
                                Business Pro
                            </div>
                            <div className="min-h-[80px] self-center mt-10 text-[1rem] leading-6 text-center text-neutral-900">
                                For small to medium teams that need to sen, sign, and
                                collaborate
                            </div>
                            <div className="flex [width:inherit] text-center">
                                <div className="flex gap-1 text-[3.5rem] w-[60%] whitespace-nowrap leading-[128px] text-neutral-900 max-md:text-4xl">
                                    <img
                                        loading="lazy"
                                        src={ICPMonoLogo}
                                        className="max-w-[fit-content] w-2/5 h-2/5 mt-[20%]"
                                    />
                                    <div className="flex-auto my-auto max-md:text-4xl">0.7</div>
                                </div>
                                <div className="flex text-left w-[40%] flex-col my-auto text-[0.75rem] leading-5">
                                    <div className="text-neutral-900">/ month</div>
                                    <div className="text-zinc-400">
                                        7 ICP Coins billed annually
                                    </div>
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src={BorderLogoCard}
                                className="self-end max-w-full border border-solid border-zinc-400 stroke-[1px] stroke-zinc-400 w-full max-md:mr-2.5"
                            />
                            <div className="min-h-[270px]">
                                <div className="self-start mt-[10%] leading-5 text-center text-neutral-900 max-md:ml-2.5">
                                    Core & Personal feature include
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal self-start mt-6 leading-5 text-neutral-900 max-md:ml-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>5000+ Documents</div>
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal self-start mt-1 leading-5 text-neutral-900 max-md:ml-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>Platinum Live Agent Call Support</div>
                                </div>
                                <div className="text-left mb-[5%] flex gap-5 justify-normal mt-1 leading-5 text-neutral-900 max-md:mx-2.5">
                                    <img
                                        loading="lazy"
                                        src={AssetTickIcon}
                                        className="shrink-0 my-auto border-2 border-solid aspect-[1.37] border-zinc-800 stroke-[1.8px] stroke-zinc-800 w-[20px]"
                                    />
                                    <div>
                                        100GB Storage at ICP Ecosystem{" "}
                                        <span className="font-bold">IC Drive</span>
                                        <span>
                                            <img
                                                loading="lazy"
                                                src={ICDriveLogo}
                                                className="max-w-full aspect-[2.63] w-[121px] max-md:ml-2.5"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center items-center px-16 py-5 font-medium text-center text-white bg-cyan-900 rounded-xl max-md:px-5 max-md:mt-10">
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                loading="lazy"
                src={BGImagePricingPage}
                className="flex justify-center w-auto absolute bottom-[50%]"
            />
            <img
                loading="lazy"
                src={BGDownPricingPage}
                className="w-full absolute bottom-0 left-0 right-0 h-[50%]"
            />
        </div>
    );
};

export default PricingModule;
