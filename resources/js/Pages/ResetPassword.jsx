import AuthLayout from '@/Components/Layouts/AuthLayout';
import { useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/reset-password', {
            onFinish: () => {
                // Optional: Redirect after reset
            },
        });
    };

    return (
        <AuthLayout title="Reset Password">
            <h4 className="center-align">Reset Password</h4>
            
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input
                            id="email"
                            type="email"
                            className="validate"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled
                        />
                        <label htmlFor="email">Email</label>
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
                        <label htmlFor="password">New Password</label>
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
                            className="validate"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <label htmlFor="password_confirmation">Confirm New Password</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12 center-align">
                        <button
                            type="submit"
                            className="btn waves-effect waves-light blue"
                            disabled={processing}
                        >
                            {processing ? 'Resetting...' : 'Reset Password'}
                            <i className="material-icons right">autorenew</i>
                        </button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}