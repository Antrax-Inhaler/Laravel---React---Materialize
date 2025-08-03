import AuthLayout from '@/Components/Layouts/AuthLayout';
import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
<AuthLayout title="Login">
    <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card">
                <div className="card-content">
                    <span className="card-title center-align teal-text text-darken-2">Login</span>
                    
                    <form onSubmit={handleSubmit}>
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
                                <label htmlFor="email">Email Address</label>
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
                            <div className="col s12">
                                <p>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="filled-in"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span>Remember Me</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col s12 center-align">
                                <button
                                    type="submit"
                                    className="btn waves-effect waves-light teal"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <span>Logging in...</span>
                                            <i className="material-icons right">hourglass_empty</i>
                                        </>
                                    ) : (
                                        <>
                                            <span>Login</span>
                                            <i className="material-icons right">send</i>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col s12 center-align">
                                <div className="divider"></div>
                                <div style={{ margin: '20px 0' }}>
                                    <Link href="/forgot-password" className="teal-text text-darken-1">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/register" className="teal-text text-darken-1">
                                        Don't have an account? Register Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</AuthLayout>
    );
}