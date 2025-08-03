import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div>
            <div>
                {/* <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link> */}
            </div>

            <div className="container valign-wrapper center shadow" style={{wieght: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
                {children}
            </div>
        </div>
    );
}
