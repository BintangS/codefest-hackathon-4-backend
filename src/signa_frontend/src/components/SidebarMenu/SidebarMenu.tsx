import IconMenuWhite from '../../assets/sidebar/icon-menu white.svg'
import IconProfileWhite from '../../assets/sidebar/icon-profile white.svg'
import IconSignWhite from '../../assets/sidebar/icon-sign white.svg'
import IconSignBlue from '../../assets/sidebar/icon-sign blue.svg'
import IconReceiveWhite from '../../assets/sidebar/icon-receive white.svg'
import IconReceiveBlue from '../../assets/sidebar/icon-receive blue.svg'
import IconSendWhite from '../../assets/sidebar/icon-send white.svg'
import IconSendBlue from '../../assets/sidebar/icon-send blue.svg'
import IconSettingWhite from '../../assets/sidebar/icon-setting white.svg'
import BorderIconBlue from '../../assets/sidebar/border-icon-blue.png'
import { Link } from 'react-router-dom'
import { SidebarmenuInterface } from './interface'

const SidebarMenu: React.FC<SidebarmenuInterface> = ({name}) => {
    return (
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
                src={(name == "receive_pdf") ? IconReceiveBlue : IconReceiveWhite}
                className="mt-4 w-full aspect-square"
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
            <img
                loading="lazy"
                src={IconSettingWhite}
                className="mt-8 w-full aspect-square"
            />
        </div>
    );
};

export default SidebarMenu;
