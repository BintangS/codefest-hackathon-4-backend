import AssetLeftSendPage from '../../assets/AssetLeft-SendPage.webp'
import AssetRightSendPage from '../../assets/AssetRight-SendPage.webp'
import DocumentLogo from '../../assets/DocumentLogo.svg'
import SignaLogo_v1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import IconMenuWhite from '../../assets/sidebar/icon-menu white.svg'
import IconProfileWhite from '../../assets/sidebar/icon-profile white.svg'
import IconSignBlue from '../../assets/sidebar/icon-sign blue.svg'
import IconReceiveWhite from '../../assets/sidebar/icon-receive white.svg'
import IconSendWhite from '../../assets/sidebar/icon-send white.svg'
import IconSettingWhite from '../../assets/sidebar/icon-setting white.svg'
import BorderIconBlue from '../../assets/sidebar/border-icon-blue.png'

const SendfileModule = () => {
    return (
        <div className="flex gap-5 justify-between bg-white max-md:flex-wrap">
            <div className="flex gap-0">
                <div className="flex flex-col items-start px-6 py-11 w-[70px] max-w-[85px] bg-[linear-gradient(180deg,_#121212_0%,_#002636_100%)]">
                    <img
                        loading="lazy"
                        src={IconMenuWhite}
                        className="w-full aspect-square"
                    />
                    <img
                        loading="lazy"
                        src={IconProfileWhite}
                        className="w-full aspect-square mt-[572px]"
                    />
                    <img
                        loading="lazy"
                        src={BorderIconBlue}
                        className="self-center mt-8 w-full border border-sky-400 border-solid aspect-[50] stroke-[1px] stroke-sky-400"
                    />
                    <img
                        loading="lazy"
                        src={IconReceiveWhite}
                        className="mt-4 w-full aspect-square"
                    />
                    <img
                        loading="lazy"
                        src={IconSignBlue}
                        className="mt-4 w-full aspect-square"
                    />
                    <img
                        loading="lazy"
                        src={IconSendWhite}
                        className="mt-4 w-full aspect-square"
                    />
                    <img
                        loading="lazy"
                        src={BorderIconBlue}
                        className="self-center mt-4 w-full border border-sky-400 border-solid aspect-[50] stroke-[1px] stroke-sky-400"
                    />
                    <img
                        loading="lazy"
                        src={IconSettingWhite}
                        className="mt-8 w-full aspect-square"
                    />
                </div>
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
                            className="w-[50px] h-[50px] shrink-0 w-12"
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
            <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col my-auto max-md:max-w-full">
                        <div className="flex min-w-[122%] justify-center items-center px-16 py-20 text-lg rounded-xl border border-solid bg-zinc-100 border-zinc-800 text-neutral-400 max-md:px-5 max-md:max-w-full">
                            <div className="flex flex-col mt-11 mb-5 max-w-full w-[168px] max-md:mt-10">
                            <img
                                loading="lazy"
                                src={DocumentLogo}
                                className="self-center aspect-square w-[88px]"
                            />
                            <div className="mt-5">Add your Document</div>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10">
                            <div className="flex flex-col grow shrink-0 min-w-[50%]">
                                <div className="text-lg font-medium text-center text-neutral-900">
                                    Internet Identity
                                </div>
                                <div className="justify-center items-start px-6 py-7 mt-5 text-center rounded-xl border border-solid bg-zinc-100 border-zinc-800 text-neutral-400 max-md:px-5">
                                    Enter Internet Identity
                                </div>
                            </div>
                            <div className="flex flex-col shrink-0 min-w-[10%] text-lg w-fit">
                                <div className="my-auto text-base text-center text-black">
                                    OR
                                </div>
                            </div>
                            <div className="flex flex-col grow shrink-0 min-w-[50%]">
                                <div className="text-lg font-medium text-center text-neutral-900">Email</div>
                                <div className="justify-center items-start px-6 py-7 mt-5 text-center rounded-xl border border-solid bg-zinc-100 border-zinc-800 text-neutral-400 max-md:px-5">
                                    Enter Email
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[122%] justify-center items-center px-16 py-7 mt-20 text-lg font-semibold text-center whitespace-nowrap bg-sky-200 rounded-xl border border-solid border-zinc-800 text-stone-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            Send
                        </div>
                    </div>
                    <img
                    loading="lazy"
                    src={AssetRightSendPage}
                    className="shrink-0 max-w-full aspect-[0.1] w-[100px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SendfileModule;
