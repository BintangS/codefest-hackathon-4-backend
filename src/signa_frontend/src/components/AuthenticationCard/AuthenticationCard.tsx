import { useState } from 'react';
import { useAuthContext } from '../contexts/UseAuthContext';
import { AuthenticationCardPropsInterface } from './interface';

const AuthenticationCard: React.FC<AuthenticationCardPropsInterface> = ({
  children,
}) => {
  const { isAuthenticated, login, profile, authClient, createProfile } =
    useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  async function handleSubmit() {
    if (!authClient) return;
    if (username === '') return;

    setIsLoading(true);
    createProfile(username).then(() => {
      setIsLoading(false);
    });
  }

  return profile === undefined ? (
    <div>Loading...</div>
  ) : !isAuthenticated ? (
    <div className="flex flex-col items-center gap-5">
      <div>You are not authenticated yet</div>

      <button onClick={login}>
        Login
      </button>
    </div>
  ) : profile === null ? (
    <div className="flex flex-col items-center gap-5">
      <div>You are authenticated</div>

      <form onSubmit={ (e) => { e.preventDefault() }}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={(e) => { setUsername(e.target.value) }}
        />
        <button type="submit" disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  ) : (
    children
  );
};

export default AuthenticationCard;