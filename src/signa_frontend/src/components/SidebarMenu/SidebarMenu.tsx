import IconSignWhite from '../../assets/sidebar/icon-sign white.svg'
import IconSignBlue from '../../assets/sidebar/icon-sign blue.svg'
import IconSendWhite from '../../assets/sidebar/icon-send white.svg'
import IconSendBlue from '../../assets/sidebar/icon-send blue.svg'
import BorderIconBlue from '../../assets/sidebar/border-icon-blue.png'
import IconLogoutWhite from '../../assets/sidebar/icon-logout white.svg'
import { Link } from 'react-router-dom'
import { SidebarmenuInterface } from './interface'
import {useAuthContext } from '../contexts/UseAuthContext'

const SidebarMenu: React.FC<SidebarmenuInterface> = ({name}) => {
    const { logout } = useAuthContext()
    return (
        <div className="flex flex-col items-start px-6 py-11 w-[70px] max-w-[85px] bg-[linear-gradient(180deg,_#121212_0%,_#002636_100%)]">
            <button className="mt-[550px]" onClick={ logout }>
                <img
                    loading="lazy"
                    src={IconLogoutWhite}
                    className="w-full aspect-square"
                />
            </button>
            
            <img
                loading="lazy"
                src={BorderIconBlue}
                className="self-center mt-8 w-full border border-sky-400 border-solid aspect-[50] stroke-[1px] stroke-sky-400"
            />
            <Link to="/dashboard">
                <img
                    loading="lazy"
                    src={(name == 'dashboard') ? IconSignBlue : IconSignWhite}
                    className="mt-4 w-full aspect-square"
                />
            </Link>
            <Link to="/send_pdf">
                <img
                    loading="lazy"
                    src={(name == "send_pdf") ? IconSendBlue : IconSendWhite}
                    className="mt-4 w-full aspect-square"
                />
            </Link>
            <img
                loading="lazy"
                src={BorderIconBlue}
                className="self-center mt-4 w-full border border-sky-400 border-solid aspect-[50] stroke-[1px] stroke-sky-400"
            />
        </div>
    );
};

export default SidebarMenu;
