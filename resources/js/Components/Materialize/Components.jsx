import { useState } from 'react';

export default function Components() {
    const [activeTab, setActiveTab] = useState('buttons');
    
    return (
        <div className="section" id="components">
            <h2 className="header">Components</h2>
            
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3">
                            <a 
                                href="#buttons" 
                                className={activeTab === 'buttons' ? 'active' : ''}
                                onClick={() => setActiveTab('buttons')}
                            >
                                Buttons
                            </a>
                        </li>
                        <li className="tab col s3">
                            <a 
                                href="#cards" 
                                className={activeTab === 'cards' ? 'active' : ''}
                                onClick={() => setActiveTab('cards')}
                            >
                                Cards
                            </a>
                        </li>
                        <li className="tab col s3">
                            <a 
                                href="#forms" 
                                className={activeTab === 'forms' ? 'active' : ''}
                                onClick={() => setActiveTab('forms')}
                            >
                                Forms
                            </a>
                        </li>
                    </ul>
                </div>
                
                {/* Buttons */}
                <div id="buttons" className="col s12" style={{ display: activeTab === 'buttons' ? 'block' : 'none' }}>
                    <div className="card-panel">
                        <h4>Buttons</h4>
                        <div className="row">
                            <div className="col s12 m4 center-align">
                                <button className="btn waves-effect waves-light">Normal</button>
                                <p>Standard button</p>
                            </div>
                            <div className="col s12 m4 center-align">
                                <button className="btn waves-effect waves-light">
                                    <i className="material-icons left">cloud</i>With Icon
                                </button>
                                <p>Button with icon</p>
                            </div>
                            <div className="col s12 m4 center-align">
                                <button className="btn waves-effect waves-light disabled">Disabled</button>
                                <p>Disabled button</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col s12 m4 center-align">
                                <button className="btn waves-effect waves-light btn-large">Large</button>
                                <p>Large button</p>
                            </div>
                            <div className="col s12 m4 center-align">
                                <button className="btn waves-effect waves-light btn-small">Small</button>
                                <p>Small button</p>
                            </div>
                            <div className="col s12 m4 center-align">
                                <button className="btn-floating btn-large waves-effect waves-light red">
                                    <i className="material-icons">add</i>
                                </button>
                                <p>Floating button</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Cards */}
                <div id="cards" className="col s12" style={{ display: activeTab === 'cards' ? 'block' : 'none' }}>
                    <div className="row">
                        <div className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://materializecss.com/images/sample-1.jpg" />
                                    <span className="card-title">Card Title</span>
                                    <button className="btn-floating halfway-fab waves-effect waves-light red">
                                        <i className="material-icons">add</i>
                                    </button>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#!">Link</a>
                                    <a href="#!">Link</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col s12 m6 l4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Card Title</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#!">Link</a>
                                    <a href="#!">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Forms */}
                <div id="forms" className="col s12" style={{ display: activeTab === 'forms' ? 'block' : 'none' }}>
                    <div className="card-panel">
                        <h4>Forms</h4>
                        <form>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="text" type="text" className="validate" />
                                    <label htmlFor="text">Text Input</label>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                    <span className="helper-text" data-error="Invalid email"></span>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="input-field col s12">
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Materialize Select</label>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col s12">
                                    <label>Checkboxes</label>
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" checked="checked" />
                                            <span>Filled in</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>Default</span>
                                        </label>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}