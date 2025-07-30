import { useState } from 'react';

export default function GridSystem() {
    const [activeTab, setActiveTab] = useState('basic');
    
    return (
        <>
            <h2 className="header">Grid System</h2>
            <p className="flow-text">Materialize uses a standard 12 column fluid responsive grid system</p>
            
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3">
                            <a 
                                href="#basic-grid" 
                                className={activeTab === 'basic' ? 'active' : ''}
                                onClick={() => setActiveTab('basic')}
                            >
                                Basic Grid
                            </a>
                        </li>
                        <li className="tab col s3">
                            <a 
                                href="#responsive-grid" 
                                className={activeTab === 'responsive' ? 'active' : ''}
                                onClick={() => setActiveTab('responsive')}
                            >
                                Responsive Grid
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div id="basic-grid" className="col s12" style={{ display: activeTab === 'basic' ? 'block' : 'none' }}>
                    <div className="row">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="col s1 card-panel teal center white-text">
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div id="responsive-grid" className="col s12" style={{ display: activeTab === 'responsive' ? 'block' : 'none' }}>
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <div className="card-panel blue center white-text">
                                s12 m4 l3
                            </div>
                        </div>
                        <div className="col s12 m4 l6">
                            <div className="card-panel green center white-text">
                                s12 m4 l6
                            </div>
                        </div>
                        <div className="col s12 m4 l3">
                            <div className="card-panel orange center white-text">
                                s12 m4 l3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}