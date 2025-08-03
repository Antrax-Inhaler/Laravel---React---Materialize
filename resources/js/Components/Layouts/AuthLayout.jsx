import { Head, Link } from '@inertiajs/react';

export default function AuthLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <nav className="blue darken-2">
                <div className="nav-wrapper container">
                    <Link href="/" className="brand-logo">MyApp</Link>
                </div>
            </nav>
            
            <main className="container">
                <div className="row">
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <div className="card-panel">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        document.addEventListener('DOMContentLoaded', function() {
                            M.updateTextFields();
                        });
                    `,
                }}
            />
        </>
    );
}