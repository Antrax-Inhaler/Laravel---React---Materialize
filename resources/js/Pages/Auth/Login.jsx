import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
<GuestLayout>
    <Head title="Log in" />

    {status && (
        <div className=" teal lighten-2 white-text">
            {status}
        </div>
    )}

        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Log in</span>

                    <form onSubmit={submit}>
                        <div className="input-field">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="validate"
                                autoComplete="username"
                                autoFocus
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                            {errors.email && (
                                <span className="helper-text red-text">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="input-field">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="validate"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                            {errors.password && (
                                <span className="helper-text red-text">
                                    {errors.password}
                                </span>
                            )}
                        </div>

                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className="filled-in"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span>Remember me</span>
                            </label>
                        </p>

                        <div className="flex items-center justify-between">
                            {canResetPassword && (
                                <a
                                    href={route('password.request')}
                                    className="teal-text text-lighten-1"
                                >
                                    Forgot your password?
                                </a>
                            )}

                            <button
                                type="submit"
                                className="btn waves-effect waves-light teal"
                                disabled={processing}
                            >
                                Log in
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</GuestLayout>
    );
}
