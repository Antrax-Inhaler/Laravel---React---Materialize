import '../css/app.css';
import './bootstrap';
import '../css/materialize-custom.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import AppLayout from '@/Components/Layouts/AppLayout';
import AdminLayout from '@/Components/Layouts/AdminLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        let page = await pages[`./Pages/${name}.jsx`];

        // Attach layout based on auth role
        page.default.layout = page.default.layout || ((pageProps) => {
            const auth = pageProps.props?.auth;

            if (auth?.user?.role === 'admin') {
                return <AdminLayout>{pageProps}</AdminLayout>;
            }

            return <AppLayout>{pageProps}</AppLayout>;
        });

        return page;
    },
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
