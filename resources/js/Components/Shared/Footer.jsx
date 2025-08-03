export default function Footer() {
    return (
        <footer className="page-footer blue darken-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Materialize App</h5>
                        <p className="grey-text text-lighten-4">
                            A modern responsive front-end framework based on Material Design.
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li>
                                <a 
                                    className="grey-text text-lighten-3" 
                                    href="https://materializecss.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Materialize Docs
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="grey-text text-lighten-3" 
                                    href="https://laravel.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Laravel
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="grey-text text-lighten-3" 
                                    href="https://inertiajs.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Inertia.js
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Material with React
                    <a 
                        className="grey-text text-lighten-4 right" 
                        href="#!"
                    >
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
}