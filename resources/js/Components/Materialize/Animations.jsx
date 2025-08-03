import { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
export default function Animations() {
    const [activeTab, setActiveTab] = useState('hover');
    const [scaleVisible, setScaleVisible] = useState(true);
    const [fadeVisible, setFadeVisible] = useState(true);
      const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        stock: 0,
        price: 0,
        is_active: true,
        available_from: '',
        image: ''
      })
    
      const handleSubmit = (e) => {
        e.preventDefault()
        post('/api/v1/materialize')
      }
    useEffect(() => {
        // Initialize Materialize components
        if (typeof M !== 'undefined') {
            M.AutoInit();
        }
    }, []);

    return (
        <div className="section" id="animations">
            <h2 className="header">Animations</h2>
            
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3">
                            <a 
                                href="#hover-animations" 
                                className={activeTab === 'hover' ? 'active' : ''}
                                onClick={() => setActiveTab('hover')}
                            >
                                Hover
                            </a>
                        </li>
                        <li className="tab col s3">
                            <a 
                                href="#transition-animations" 
                                className={activeTab === 'transition' ? 'active' : ''}
                                onClick={() => setActiveTab('transition')}
                            >
                                Transitions
                            </a>
                        </li>
                        <li className="tab col s3">
                            <a 
                                href="#component-animations" 
                                className={activeTab === 'components' ? 'active' : ''}
                                onClick={() => setActiveTab('components')}
                            >
                                Components
                            </a>
                        </li>
                    </ul>
                </div>
                
                {/* Hover Animations */}
                <div id="hover-animations" className="col s12" style={{ display: activeTab === 'hover' ? 'block' : 'none' }}>
                    <h4>Hover Animations</h4>
                    <div className="row">
                        <div className="col s12 m4 center-align">
                            <div className="animation-box hoverable">hoverable</div>
                            <p>Basic hover effect</p>
                        </div>
                        <div className="col s12 m4 center-align">
                            <div className="animation-box hoverable z-depth-1">z-depth-1</div>
                            <p>Shadow level 1</p>
                        </div>
                        <div className="col s12 m4 center-align">
                            <div className="animation-box hoverable z-depth-3">z-depth-3</div>
                            <p>Shadow level 3</p>
                        </div>
                    </div>
                </div>
                
                {/* Transition Animations */}
                <div id="transition-animations" className="col s12" style={{ display: activeTab === 'transition' ? 'block' : 'none' }}>
                    <h4>Transition Effects</h4>
                    <div className="row">
                        <div className="col s12 m6 center-align">
                            <div 
                                className={`animation-box scale-transition ${scaleVisible ? 'scale-in' : 'scale-out'}`}
                                onClick={() => setScaleVisible(!scaleVisible)}
                            >
                                {scaleVisible ? 'Scale In' : 'Scale Out'}
                            </div>
                            <p>Click to toggle scale</p>
                            <button 
                                className="btn waves-effect waves-light"
                                onClick={() => setScaleVisible(!scaleVisible)}
                            >
                                Toggle Scale
                            </button>
                        </div>
                        <div className="col s12 m6 center-align">
                            <div 
                                className={`animation-box fade-transition ${fadeVisible ? 'fade-in' : 'fade-out'}`}
                                onClick={() => setFadeVisible(!fadeVisible)}
                            >
                                {fadeVisible ? 'Fade In' : 'Fade Out'}
                            </div>
                            <p>Click to toggle fade</p>
                            <button 
                                className="btn waves-effect waves-light"
                                onClick={() => setFadeVisible(!fadeVisible)}
                            >
                                Toggle Fade
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Component Animations */}
                <div id="component-animations" className="col s12" style={{ display: activeTab === 'components' ? 'block' : 'none' }}>
                    <h4>Component Animations</h4>
                    
                    <div className="row">
                        <div className="col s12 m6">
                            <h5>Modal</h5>
                            <button 
                                className="btn waves-effect waves-light modal-trigger" 
                                data-target="demo-modal"
                            >
                                Create Product
                            </button>
                            
                            <div id="demo-modal" className="modal">
                                <div className="modal-content">
                                    <h4>Modal Demo</h4>
                                                    <form onSubmit={handleSubmit} className="container">

      {/* Product Name */}
      <div className="input-field">
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => setData("name", e.target.value)}
          className="validate"
        />
        <label htmlFor="name">Product Name</label>
      </div>

      {/* Description */}
      <div className="input-field">
        <textarea
          id="description"
          className="materialize-textarea validate"
          value={data.description}
          onChange={(e) => setData("description", e.target.value)}
        ></textarea>
        <label htmlFor="description">Description</label>
      </div>

      <div className="row">
        {/* Stock */}
        <div className="input-field col s6">
          <input
            id="stock"
            type="number"
            value={data.stock}
            onChange={(e) => setData("stock", e.target.value)}
          />
          <label htmlFor="stock">Stock</label>
        </div>

        {/* Price */}
        <div className="input-field col s6">
          <input
            id="price"
            type="number"
            step="0.01"
            value={data.price}
            onChange={(e) => setData("price", e.target.value)}
          />
          <label htmlFor="price">Price</label>
        </div>
      </div>

      {/* Available From */}
      <div className="input-field">
        <input
          id="available_from"
          type="date"
          value={data.available_from}
          onChange={(e) => setData("available_from", e.target.value)}
          className="datepicker"
        />
        <label htmlFor="available_from">Available From</label>
      </div>

      {/* Image URL */}
      <div className="input-field">
        <input
          id="image"
          type="text"
          value={data.image}
          onChange={(e) => setData("image", e.target.value)}
        />
        <label htmlFor="image">Image URL</label>
      </div>

      {/* Active Checkbox */}
      <p>
        <label>
          <input
            type="checkbox"
            checked={data.is_active}
            onChange={(e) => setData("is_active", e.target.checked)}
          />
          <span>Active</span>
        </label>
      </p>

      {/* Submit Button */}
      
    </form>
                                </div>
                                <div className="modal-footer">

                                    <button className="modal-close btn waves-effect">Close</button>
        <button
          className="modal-close btn waves-effect waves-light"
          type="submit"
          disabled={processing}
        >
          Save
          <i className="material-icons right">send</i>
        </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col s12 m6">
                            <h5>Collapsible</h5>
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header">
                                        <i className="material-icons">filter_drama</i>First
                                    </div>
                                    <div className="collapsible-body">
                                        <span>Content with expand/collapse animation</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header">
                                        <i className="material-icons">place</i>Second
                                    </div>
                                    <div className="collapsible-body">
                                        <span>Another animated panel</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}