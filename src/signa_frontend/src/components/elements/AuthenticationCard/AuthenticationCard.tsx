
import { useAuthContext } from '../../contexts/UseAuthContext/index.tsx';
import { AuthenticationCardPropsInterface } from './interface';
import {Link} from 'react-router-dom'

const AuthenticationCard: React.FC<AuthenticationCardPropsInterface> = ({
  children,
}) => {
  const { isAuthenticated } = useAuthContext();

  return !isAuthenticated && (localStorage.getItem("identityICP") === null) ? (
    <div className="flex flex-col items-center gap-5">
      <div>You are not authenticated yet</div>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  ) : (
    children
  );
};

export default AuthenticationCard;
