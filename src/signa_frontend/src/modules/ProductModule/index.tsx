import { Link } from 'react-router-dom'
import KeiraBurtonLogo from '../../assets/AssetKeiraBurton_ProductPage.png'
import InternetIdentityLogo from '../../assets/InternetIdentityLogo-ProductPage.png'
import SignaSignature from '../../assets/SignaSignature.png'
import SignaLogo from '../../assets/SignaLogo_v1.png'

const ProductModule = () => {
    return (
        <div className="flex relative flex-col pt-[5%] bg-[linear-gradient(180deg,_#FFF_27.4%,_#7AC4E2_100%)]">
            <div className="flex gap-5 justify-between items-center self-center px-5 w-full max-w-[1272px] max-md:flex-wrap max-md:max-w-full">
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
                <div className="flex gap-10 justify-between my-auto text-center text-black max-md:flex-wrap max-md:max-w-full">
                    <Link to="/">
                        <div className="flex gap-2 whitespace-nowrap opacity-100 z-10 transition-opacity duration-500 hover:opacity-40">
                            <div>Homepage</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd64f0122aa24978678434d8320b1bd47a2c24a416f0a9e55d92db19d51832b5?apiKey=77b90fc2290346248c9501f26423abd9&"
                                className="shrink-0 w-[1.5vw] aspect-square"
                            />
                        </div>
                    </Link>
                    <Link to="/product">
                        <div className="flex gap-2 whitespace-nowrap opacity-100 z-10 transition-opacity duration-500 hover:opacity-40">
                            <div>Product</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd64f0122aa24978678434d8320b1bd47a2c24a416f0a9e55d92db19d51832b5?apiKey=77b90fc2290346248c9501f26423abd9&"
                                className="shrink-0 w-[1.5vw] aspect-square"
                            />
                        </div>
                    </Link>
                    <Link to="/pricing">
                        <div className="flex gap-2 whitespace-nowrap opacity-100 z-10 transition-opacity duration-500 hover:opacity-40">
                            <div>Plan & Pricing</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd64f0122aa24978678434d8320b1bd47a2c24a416f0a9e55d92db19d51832b5?apiKey=77b90fc2290346248c9501f26423abd9&"
                                className="shrink-0 w-[1.5vw] aspect-square"
                            />
                        </div>
                    </Link>
                </div>
                <button className="bg-transparent hover:bg-blue-500 text-black font-semibold transition-colors duration-500 t-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">
                    Contact us!
                </button>
            </div>
            <div className="py-1 pl-[5%] pr-[5%] mt-[5%] mb-[10%] w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                            <div className="text-left text-2xl max-md:max-w-full">
                                <span className="font-bold text-orange-600">ICP Web3.0</span>{" "}
                                offers a more secure solution with its decentralized data, so
                                you can feel safe about the crucial documents. Consequently,{" "}
                                <span className="font-bold text-teal-700 underline">
                                    it is also cheaper
                                </span>
                                <span className="text-teal-700">.</span>
                            </div>
                            <div className="mt-[10%] text-left max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col max-md:mt-8">
                                            <div className="text-4xl font-bold leading-10 text-cyan-900">
                                                &gt;50%
                                            </div>
                                            <div className="mt-8 text-2xl text-neutral-900">
                                                <span className="font-bold text-cyan-900">Cheaper</span>
                                                <span className="font-bold">.</span> Canister simplifies
                                                developing and maintaining online systems and services,
                                                leading to significant cost savings.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow max-md:mt-8">
                                            <div className="text-4xl font-bold leading-10 text-cyan-900">
                                                Web2
                                            </div>
                                            <div className="mt-8 text-2xl text-neutral-900">
                                                <span className="font-bold text-blue-900">
                                                    Compatible
                                                </span>
                                                <span className="font-bold">.</span> Web experiences
                                                searchable on Google, powered by smart contracts. True
                                                World Computer capabilities with Web2 APIs validated by
                                                consensus.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[10%] text-left max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow max-md:mt-8">
                                            <div className="text-4xl font-bold leading-10 text-cyan-900">
                                                10x
                                            </div>
                                            <div className="mt-8 text-2xl text-neutral-900">
                                                <span className="font-bold text-blue-900">
                                                    More Secured
                                                </span>
                                                <span className="font-bold">.</span> ICP Web 3.0 secured
                                                by Chain-Key Cryptography, is tamper-proof, and is
                                                immune to ransomware / backdoors.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow max-md:mt-8">
                                            <div className="text-4xl font-bold leading-10 text-cyan-900">
                                                100%
                                            </div>
                                            <div className="mt-8 text-2xl text-neutral-900">
                                                <span className="font-bold text-blue-900">
                                                    On Chain
                                                </span>
                                                . ICP Web 3.0 offers nearly 99% uptime, making it a
                                                robust platform capable of handling high bandwidth.
                                                <br />
                                                Fred not, It is very reliable 😊
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src={KeiraBurtonLogo}
                            className="grow w-full object-cover max-md:mt-10 max-md:max-w-full"
                        />
                        <img
                            loading="lazy"
                            src={InternetIdentityLogo}
                            className="absolute bottom-0 right-0 grow h-[20%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModule;
