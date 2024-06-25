import React, { useState } from 'react';

interface FormData {
    email : string,
    password : string
}

const LoginModule = () => {
    const [formData, setFormData] = useState<FormData>({email:"", password:""})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
    const handleSubmitLogin = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                Email : <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                Password : <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
            </form>
        </div>
    );
};

export default LoginModule;