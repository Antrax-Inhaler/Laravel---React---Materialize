import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

<div className="row">
    <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card">
            <div className="card-content">
                <span className="card-title">Register</span>

                <form onSubmit={submit}>
                    <div className="input-field">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="validate"
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <label htmlFor="name">Name</label>
                        {errors.name && (
                            <span className="helper-text red-text">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className="input-field">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="validate"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
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
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && (
                            <span className="helper-text red-text">
                                {errors.password}
                            </span>
                        )}
                    </div>

                    <div className="input-field">
                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="validate"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        {errors.password_confirmation && (
                            <span className="helper-text red-text">
                                {errors.password_confirmation}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <a
                            href={route('login')}
                            className="teal-text text-lighten-1"
                        >
                            Already registered?
                        </a>

                        <button
                            type="submit"
                            className="btn waves-effect waves-light teal"
                            disabled={processing}
                        >
                            Register
                            <i className="material-icons right">person_add</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        </GuestLayout>
    );
}
