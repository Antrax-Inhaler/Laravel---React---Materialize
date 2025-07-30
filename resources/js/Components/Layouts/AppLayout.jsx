import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Shared/Navbar';
import Footer from '@/Components/Shared/Footer';

export default function AppLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <main className="container">
                {children}
            </main>
            <Footer />
            
            {/* Materialize JS Initialization */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        document.addEventListener('DOMContentLoaded', function() {
                            M.AutoInit();
                        });
                    `,
                }}
            />
        </>
    );
}