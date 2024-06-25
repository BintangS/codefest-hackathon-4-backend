import React, { useState } from 'react';
import { useAuthContext } from '../../components/contexts/UseAuthContext';
import { useNavigate } from 'react-router-dom';

interface FormData {
    email : string,
    password : string
}

const LoginModule = () => {
    const navigate = useNavigate()
    const {login, isAuthenticated} = useAuthContext()
    const [formData, setFormData] = useState<FormData>({email:"", password:""})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
    const handleSubmitLogin = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formData.email !== null && formData.password !== null) {
            login(formData.email, formData.password)
        }
        if (isAuthenticated) {
            navigate('/upload')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                Email : <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                Password : <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginModule;