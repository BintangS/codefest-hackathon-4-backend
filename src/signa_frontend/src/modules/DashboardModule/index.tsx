import AssetupDashboardPage from '../../assets/AssetUp-DashboardPage.webp'
import AssetdownDashboardPage from '../../assets/AssetDown-DashboardPage.webp'
import PeopleLogoWhite from '../../assets/PeopleLogoWhite.svg'
import RoboSigna from '../../assets/RoboSigna.webp'
import SignaLogo_v1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'

const DashboardfileModule = () => {
    return (
        <div className="flex [width:inherit] gap-0 bg-white max-md:flex-wrap">
            <SidebarMenu name={"dashboard"} />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex relative flex-col gap-2.5 items-start px-11 pt-6 pb-16 text-sm font-medium min-h-[134px] text-neutral-900 max-md:flex-wrap max-md:px-5">
                    <img
                        loading="lazy"
                        src={AssetupDashboardPage}
                        className="object-cover absolute inset-0 size-full"
                    />
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
                            Dashboard PDF
                        </div>
                    </div>
                </div>
                <div className="z-10 mx-7 mt-0 bg-gray-900 rounded-xl border border-white border-solid max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col max-w-[25%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-start pt-11 pr-20 pb-20 pl-9 text-sm font-medium text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-6">
                                <div className="flex gap-2 text-sky-400">
                                    <div className="shrink-0 bg-sky-400 rounded-full h-[18px] w-[18px]" />
                                    <div className="my-auto ml-[20px] text-left">All Document</div>
                                </div>
                                <div className="flex gap-2 mt-6">
                                    <div className="shrink-0 bg-white rounded-full h-[18px] w-[18px]" />
                                    <div className="my-auto ml-[20px] text-left">On Hold</div>
                                </div>
                                <div className="flex gap-2 mt-6 whitespace-nowrap">
                                    <div className="shrink-0 bg-white rounded-full h-[18px] w-[18px]" />
                                    <div className="my-auto ml-[20px] text-left">Done</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[95%] max-md:ml-0 max-md:w-full">
                            <div className="flex [width:inherit] z-10 flex-col grow mt-11 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 w-full text-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="flex-auto text-lg font-medium">
                                        All Document
                                    </div>
                                    <div className="flex gap-5 justify-between self-start text-base whitespace-nowrap">
                                        <div>Filter</div>
                                        <div>List</div>
                                    </div>
                                </div>
                                <div className="flex gap-5 px-5 py-3.5 mt-14 text-base rounded-xl border border-white border-solid max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                    <div className="flex-auto my-auto text-white">
                                        Input Your ICP Node Address to find document
                                    </div>
                                    <div className="grow justify-center items-center px-16 py-3.5 rounded-md bg-teal-950 text-slate-500 w-fit max-md:px-5 max-md:max-w-full">
                                        Input here
                                    </div>
                                </div>
                                <div className="flex gap-5 px-5 py-3.5 mt-14 text-base text-white max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <th className='w-2/5'>Document</th>
                                                <th className='w-1/5'>Date Uploaded</th>
                                                <th className='w-1/5'>Receiver</th>
                                                <th className='w-1/5'>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='w-2/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="mt-[7px] shrink-0 self-start w-3 h-3 rounded-full border border-white border-solid stroke-[1px]" />
                                                        <div className="flex-auto">
                                                            Perjanjian Pinjaman Mas Bintang
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="flex-auto">02-02-2024</div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex-auto gap-3.5 mt-7 w-[30px]">
                                                        <div className="flex gap-1.5 mt-5">
                                                            <img
                                                                loading="lazy"
                                                                src={PeopleLogoWhite}
                                                                className="shrink-0 w-full aspect-square"
                                                            />
                                                            <div className="my-auto">1</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="flex-auto justify-center px-2.5 py-1 bg-lime-700 rounded-xl">
                                                            Signed
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='w-2/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="mt-[7px] shrink-0 self-start w-3 h-3 rounded-full border border-white border-solid stroke-[1px]" />
                                                        <div className="flex-auto">
                                                            Perjanjian Pinjaman Mas Bintang
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="flex-auto">02-02-2024</div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex-auto gap-3.5 mt-7 w-[30px]">
                                                        <div className="flex gap-1.5 mt-5">
                                                            <img
                                                                loading="lazy"
                                                                src={PeopleLogoWhite}
                                                                className="shrink-0 w-full aspect-square"
                                                            />
                                                            <div className="my-auto">1</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="flex-auto justify-center px-2.5 py-1 bg-lime-700 rounded-xl">
                                                            Signed
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='w-2/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="mt-[7px] shrink-0 self-start w-3 h-3 rounded-full border border-white border-solid stroke-[1px]" />
                                                        <div className="flex-auto">
                                                            Perjanjian Pinjaman Mas Bintang
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="flex-auto">02-02-2024</div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex-auto gap-3.5 mt-7 w-[30px]">
                                                        <div className="flex gap-1.5 mt-5">
                                                            <img
                                                                loading="lazy"
                                                                src={PeopleLogoWhite}
                                                                className="shrink-0 w-full aspect-square"
                                                            />
                                                            <div className="my-auto">1</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-1/5'>
                                                    <div className="flex gap-3.5 mt-7">
                                                        <div className="flex-auto justify-center px-2.5 py-1 bg-lime-700 rounded-xl">
                                                            Signed
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <img
                                    loading="lazy"
                                    src={RoboSigna}
                                    className="self-end mt-52 max-w-full aspect-[1.05] w-[178px] max-md:mt-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src={AssetdownDashboardPage}
                    className="w-full aspect-[11.11] max-md:max-w-full"
                />
            </div>
        </div>
    );
};

export default DashboardfileModule;
