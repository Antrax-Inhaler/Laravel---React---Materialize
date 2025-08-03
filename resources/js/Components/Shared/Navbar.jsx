import { Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Navbar() {
    const { auth } = usePage().props;
    const user = auth.user;

    useEffect(() => {
        // Initialize Materialize components
        if (typeof M !== 'undefined') {
            M.Sidenav.init(document.querySelectorAll('.sidenav'));
            M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
        }
    }, []);

    return (
        <nav className="blue darken-2">
            <div className="nav-wrapper container">
                <Link href="/" className="brand-logo">Material with React</Link>
                <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                
                <ul className="right hide-on-med-and-down">
                    <li><Link href="/materialize" className="waves-effect">Showcase</Link></li>
                    <li><Link href="/products" className="waves-effect">CRUD(S)</Link></li>
                    <li><Link href="/messages" className="waves-effect">Messages</Link></li>
                    
                    {user ? (
                        <>
                            <li>
                                <a className="dropdown-trigger waves-effect" href="#" data-target="user-dropdown">
                                    <i className="material-icons left">account_circle</i>
                                    {user.name}
                                    <i className="material-icons right">arrow_drop_down</i>
                                </a>
                            </li>
                            <li>
                                <Link 
                                    href={route('logout')} 
                                    method="post" 
                                    as="button"
                                    className="waves-effect btn red lighten-1"
                                >
                                    <i className="material-icons left">exit_to_app</i>Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href={route('login')} className="waves-effect btn blue lighten-1">
                                    <i className="material-icons left">account_circle</i>Login
                                </Link>
                            </li>
                            <li style={{ marginLeft: '10px' }}>
                                <Link href={route('register')} className="waves-effect btn green lighten-1">
                                    <i className="material-icons left">person_add</i>Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            
            {/* User Dropdown Structure */}
            {user && (
                <ul id="user-dropdown" className="dropdown-content">
                    <li><Link href={route('profile.edit')}><i className="material-icons">person</i>Profile</Link></li>
                    <li><Link href="/settings"><i className="material-icons">settings</i>Settings</Link></li>
                    <li className="divider"></li>
                    <li>
                        <Link 
                            href={route('logout')} 
                            method="post" 
                            as="button"
                            className="red-text"
                        >
                            <i className="material-icons">exit_to_app</i>Logout
                        </Link>
                    </li>
                </ul>
            )}
            
            {/* Mobile Side Nav */}
            <ul className="sidenav" id="mobile-nav">
                <li><Link href="/materialize" className="waves-effect">Showcase</Link></li>
                <li><Link href="/products" className="waves-effect">CRUD(S)</Link></li>
                <li><Link href="/messages" className="waves-effect">Messages</Link></li>
                <li className="divider"></li>
                
                {user ? (
                    <>
                        <li>
                            <div className="user-view">
                                <div className="background blue"></div>
                                <a href="#"><i className="material-icons circle white">account_circle</i></a>
                                <a href="#"><span className="white-text name">{user.name}</span></a>
                                <a href="#"><span className="white-text email">{user.email}</span></a>
                            </div>
                        </li>
                        <li><Link href={route('profile.edit')} className="waves-effect"><i className="material-icons">person</i>Profile</Link></li>
                        <li><Link href="/settings" className="waves-effect"><i className="material-icons">settings</i>Settings</Link></li>
                        <li>
                            <Link 
                                href={route('logout')} 
                                method="post" 
                                as="button"
                                className="waves-effect red-text"
                            >
                                <i className="material-icons">exit_to_app</i>Logout
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href={route('login')} className="waves-effect btn blue lighten-1">
                                <i className="material-icons left">account_circle</i>Login
                            </Link>
                        </li>
                        <li style={{ marginTop: '10px' }}>
                            <Link href={route('register')} className="waves-effect btn green lighten-1">
                                <i className="material-icons left">person_add</i>Sign Up
                            </Link>
                        </li>
                    </>
                )}
            </ul>
            
            {/* Initialize Materialize components */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        document.addEventListener('DOMContentLoaded', function() {
                            M.Sidenav.init(document.querySelectorAll('.sidenav'));
                            M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
                        });
                    `,
                }}
            />
        </nav>
    );
}