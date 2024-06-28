import AssetLeftReceivePage from '../../assets/AssetLeft-ReceivePage.webp'
import AssetRightReceivePage from '../../assets/AssetRight-ReceivePage.webp'
import DocumentLogo from '../../assets/DocumentLogo.svg'
import SignaLogo_v1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import StudyImageViewfile from '../../assets/AssetStudy-ViewfilePage.png'

const ViewfileModule = () => {
    return (
        <div className="flex [width:inherit] gap-5 justify-normal bg-white max-md:flex-wrap">
            <div className="flex w-[20%] gap-0">
                <SidebarMenu name={"receive_pdf"} />
                <div className="flex relative flex-col items-start px-11 pt-6 pb-20 aspect-[0.1] w-[101px]">
                    <img
                        loading="lazy"
                        src={AssetLeftReceivePage}
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="absolute flex gap-[10px]">
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
                        <div className="w-full shrink 0 leading-[300%]">|</div>
                        <div className="w-full shrink 0">Receive PDF</div>
                    </div>
                </div>
            </div>
            <div className="flex w-[90%] gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                <div className="flex [width:inherit] flex-col px-5 my-auto max-md:max-w-full">
                    <div className="flex flex-row">
                        <div className="flex self-start w-[50%]">
                            <img
                                loading="lazy"
                                src={StudyImageViewfile}
                                className="w-[80%] -mb-[22%] xl:-mb-[10%]"
                            />
                        </div>
                        <div className="flex self-end w-[50%] text-[1.5rem] font-medium leading-10 text-center text-black max-md:mr-2.5">
                            [Name of PDF]
                        </div>
                    </div>
                    <div className="flex relative flex-col items-center px-7 pt-20 pb-6 mt-14 text-lg font-semibold rounded-xl border border-solid bg-zinc-100 border-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={DocumentLogo}
                            className="mt-20 aspect-square w-[88px] max-md:mt-10"
                        />
                        <div className="mt-5 text-neutral-400">Your Document</div>
                        <div className="mt-28 text-center text-neutral-900 max-md:mt-10">
                            Your Document has been e-signed
                        </div>
                        <div className="justify-center items-center self-stretch px-16 py-6 mt-5 text-center bg-sky-200 rounded-md border border-solid border-zinc-800 text-stone-600 max-md:px-5 max-md:max-w-full">
                            Sign Document
                        </div>
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
    );
};

export default ViewfileModule;
