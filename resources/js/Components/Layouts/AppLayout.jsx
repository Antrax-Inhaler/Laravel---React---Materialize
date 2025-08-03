import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Shared/Navbar';
import Footer from '@/Components/Shared/Footer';
import FlashMessages from '@/Components/Materialize/FlashMessages';
export default function AppLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <FlashMessages />
            <main className="children">
                {children}
            </main>
            <Footer />
            
            {/* Materialize JS Initialization */}
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
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