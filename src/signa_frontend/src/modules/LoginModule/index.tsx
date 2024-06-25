import { useAuthContext } from '../../components/contexts/UseAuthContext';
import { useNavigate } from 'react-router-dom';
import WelcomePageImage from '../../assets/Asset-WelcomePage.webp'
import RoboLoginPageImage from '../../assets/Robo-LoginPage.webp'
import SignaLogo1 from '../../assets/SignaLogo_v1.png'
import SignaSignature from '../../assets/SignaSignature.png'

// interface FormData {
//     email : string,
//     password : string
// }

const LoginModule = () => {
    const navigate = useNavigate()
    const {login, isAuthenticated} = useAuthContext()
    // const [formData, setFormData] = useState<FormData>({email:"", password:""})

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // }
    
    const handleSubmitLogin = () => {
        login()
        if (isAuthenticated) {
            navigate('/upload')
        }
    }

    return (
        <div className="bg-white">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-5 mt-20 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-0 max-md:pr-5">
                    <img
                        loading="lazy"
                        src={SignaLogo1}
                        className="shrink-0 max-w-full aspect-[1.09] w-[132px]"
                    />
                    <img
                        loading="lazy"
                        src={SignaSignature}
                        className="shrink-0 max-w-full aspect-[1.27] w-[154px]"
                    />
                    </div>
                    <div className="mt-7 text-5xl text-[36px] font-semibold text-center text-cyan-600 max-md:max-w-full">
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
                        <div className="relative w-[500px] h-[500px]">
                            <img
                            loading="lazy"
                            src={RoboLoginPageImage}
                            className="w-full aspect-[0.93] max-md:max-w-full"
                            />
                            <div onClick={handleSubmitLogin} className="absolute -translate-y-[510%] text-[#fff] border-[none] cursor-pointer flex gap-3.5 py-4 pr-3.5 pl-7 text-lg font-bold text-center text-white bg-cyan-500 rounded-xl border border-solid border-zinc-800 border-opacity-0">
                                <div className="flex-auto border border-solid border-zinc-800 border-opacity-0">
                                    Sign In Here with Internet Identity
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d59c045641083947c13078a3ea18252171355114f00609bc64903389e4e803d?apiKey=77b90fc2290346248c9501f26423abd9&"
                                    className="shrink-0 max-w-full aspect-[3.7] w-[113px]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 self-center mt-14 max-md:mt-10">
                            <div className="grow my-auto pl-[100px]">Terms of Use</div>
                            <div className="grow my-auto">Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModule;