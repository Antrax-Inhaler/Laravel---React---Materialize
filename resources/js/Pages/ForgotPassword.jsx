import AuthLayout from '@/Components/Layouts/AuthLayout';
import { useForm } from '@inertiajs/react';

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/forgot-password');
    };

    return (
        <AuthLayout title="Forgot Password">
            <h4 className="center-align">Reset Password</h4>
            
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s12">
                        <p className="flow-text">Enter your email address and we'll send you a password reset link.</p>
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
                    <div className="col s12 center-align">
                        <button
                            type="submit"
                            className="btn waves-effect waves-light blue"
                            disabled={processing}
                        >
                            {processing ? 'Sending...' : 'Send Reset Link'}
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12 center-align">
                        <Link href="/login" className="blue-text">Back to Login</Link>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}