import { Link } from 'react-router-dom'

const HomepageModule = () => {
    return (
        <div>
            Welcome Page !!
            <Link to={'/login'}>
                <button>Go To Login</button>
            </Link>
            <Link to={'/upload'}>
                <button>Go To Upload</button>
            </Link>
        </div>
    );
};

export default HomepageModule;
