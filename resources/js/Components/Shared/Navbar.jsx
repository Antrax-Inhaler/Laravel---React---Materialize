import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="blue darken-2">
            <div className="nav-wrapper container">
                <Link href="/" className="brand-logo">Materialize App</Link>
                <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                
                <ul className="right hide-on-med-and-down">
                    <li><Link href="/materialize" className="waves-effect">Showcase</Link></li>
                    <li><Link href="/features" className="waves-effect">Features</Link></li>
                    <li><Link href="/about" className="waves-effect">About</Link></li>
                    <li>
                        <Link href="/login" className="waves-effect btn blue lighten-1">
                            <i className="material-icons left">account_circle</i>Login
                        </Link>
                    </li>
                </ul>
            </div>
            
            {/* Mobile Side Nav */}
            <ul className="sidenav" id="mobile-nav">
                <li><Link href="/materialize" className="waves-effect">Showcase</Link></li>
                <li><Link href="/features" className="waves-effect">Features</Link></li>
                <li><Link href="/about" className="waves-effect">About</Link></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li>
                    <Link href="/login" className="waves-effect btn blue lighten-1">
                        <i className="material-icons left">account_circle</i>Login
                    </Link>
                </li>
            </ul>
            
            {/* Initialize mobile sidenav */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        document.addEventListener('DOMContentLoaded', function() {
                            M.Sidenav.init(document.querySelectorAll('.sidenav'));
                        });
                    `,
                }}
            />
        </nav>
    );
}