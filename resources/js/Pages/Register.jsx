import AuthLayout from '@/Components/Layouts/AuthLayout';
import { useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <AuthLayout title="Register">
            <h4 className="center-align">Register</h4>
            
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">person</i>
                        <input
                            id="name"
                            type="text"
                            className={`validate ${errors.name ? 'invalid' : ''}`}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                        {errors.name && (
                            <span className="helper-text" data-error={errors.name}></span>
                        )}
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input
                            id="email"
                            type="email"
                            className={`validate ${errors.email ? 'invalid' : ''}`}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        {errors.email && (
                            <span className="helper-text" data-error={errors.email}></span>
                        )}
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                        <input
                            id="password"
                            type="password"
                            className={`validate ${errors.password ? 'invalid' : ''}`}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && (
                            <span className="helper-text" data-error={errors.password}></span>
                        )}
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">lock_outline</i>
                        <input
                            id="password_confirmation"
                            type="password"
                            className={`validate ${errors.password_confirmation ? 'invalid' : ''}`}
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <label htmlFor="password_confirmation">Confirm Password</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12 center-align">
                        <button
                            type="submit"
                            className="btn waves-effect waves-light blue"
                            disabled={processing}
                        >
                            {processing ? 'Registering...' : 'Register'}
                            <i className="material-icons right">person_add</i>
                        </button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12 center-align">
                        <Link href="/login" className="blue-text">Already have an account? Login</Link>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}