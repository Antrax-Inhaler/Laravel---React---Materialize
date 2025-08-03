import { useForm, usePage, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Crud({ products }) {
    const { props } = usePage();
    const [modalInstance, setModalInstance] = useState(null);
    const [datepickerInstance, setDatepickerInstance] = useState(null);
    
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
        description: '',
        stock: '',
        price: '',
        is_active: true,
        available_from: '',
        image: ''
    });

    // Initialize Materialize components
    useEffect(() => {
        if (typeof M !== 'undefined') {
            // Initialize modal
            const modal = M.Modal.init(document.querySelector('#productModal'), {
                onCloseEnd: () => reset()
            });
            setModalInstance(modal);

            // Initialize datepicker
            const datepicker = M.Datepicker.init(document.querySelectorAll('.datepicker'), {
                format: 'yyyy-mm-dd',
                autoClose: true,
                onSelect: (date) => {
                    setData('available_from', date.toISOString().split('T')[0]);
                }
            });
            setDatepickerInstance(datepicker);
        }
    }, []);

    const openCreateModal = () => {
        reset();
        modalInstance.open();
    };

    const openEditModal = (product) => {
        setData({
            name: product.name,
            description: product.description,
            stock: product.stock,
            price: product.price,
            is_active: product.is_active,
            available_from: product.available_from.split('T')[0],
            image: product.image
        });
        modalInstance.open();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const productId = data.id;
        
        productId 
            ? put(route('products.update', productId))
            : post(route('products.store'));
    };

    return (
            <div className="">
                <h3>Product CRUD</h3>
                
                {/* Floating Action Button */}
                <div className="fixed-action-btn">
                    <button className="btn-floating btn-large waves-effect waves-light red" onClick={openCreateModal}>
                        <i className="material-icons">add</i>
                        Create Products
                    </button>
                </div>

                {/* Product Table */}
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Products</span>
                                <table className="highlight responsive-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Stock</th>
                                            <th>Available From</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>${product.price.toFixed(2)}</td>
                                                <td>{product.stock}</td>
                                                <td>{new Date(product.available_from).toLocaleDateString()}</td>
                                                <td>
                                                    <span className={`new badge ${product.is_active ? 'green' : 'orange'}`}>
                                                        {product.is_active ? 'Active' : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button 
                                                        className="btn-floating btn-small blue" 
                                                        onClick={() => openEditModal(product)}
                                                    >
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                    <button 
                                                        className="btn-floating btn-small red"
                                                        onClick={() => {
                                                            if (confirm('Are you sure you want to delete this product?')) {
                                                                router.delete(route('products.destroy', product.id));
                                                            }
                                                        }}
                                                    >
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Modal */}
                <div id="productModal" className="modal">
                    <div className="modal-content">
                        <h4>{data.id ? 'Edit Product' : 'Add New Product'}</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        id="name"
                                        name="name"
                                        type="text" 
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className={errors.name ? 'invalid' : ''}
                                    />
                                    <label htmlFor="name">Product Name</label>
                                    {errors.name && <span className="helper-text red-text">{errors.name}</span>}
                                </div>
                                
                                <div className="input-field col s12">
                                    <textarea 
                                        id="description"
                                        name="description"
                                        className="materialize-textarea"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className={errors.description ? 'invalid' : ''}
                                    />
                                    <label htmlFor="description">Description</label>
                                    {errors.description && <span className="helper-text red-text">{errors.description}</span>}
                                </div>
                                
                                <div className="input-field col s6">
                                    <input 
                                        id="stock"
                                        name="stock"
                                        type="number" 
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        className={errors.stock ? 'invalid' : ''}
                                    />
                                    <label htmlFor="stock">Stock</label>
                                    {errors.stock && <span className="helper-text red-text">{errors.stock}</span>}
                                </div>
                                
                                <div className="input-field col s6">
                                    <input 
                                        id="price"
                                        name="price"
                                        type="number" 
                                        step="0.01"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className={errors.price ? 'invalid' : ''}
                                    />
                                    <label htmlFor="price">Price</label>
                                    {errors.price && <span className="helper-text red-text">{errors.price}</span>}
                                </div>
                                
                                <div className="input-field col s6">
                                    <input 
                                        id="available_from"
                                        name="available_from"
                                        type="text" 
                                        className="datepicker"
                                        value={data.available_from}
                                        readOnly
                                        className={errors.available_from ? 'invalid' : ''}
                                    />
                                    <label htmlFor="available_from">Available From</label>
                                    {errors.available_from && <span className="helper-text red-text">{errors.available_from}</span>}
                                </div>
                                
                                <div className="input-field col s6">
                                    <p>
                                        <label>
                                            <input 
                                                name="is_active"
                                                type="checkbox" 
                                                className="filled-in"
                                                checked={data.is_active}
                                                onChange={(e) => setData('is_active', e.target.checked)}
                                            />
                                            <span>Active</span>
                                        </label>
                                    </p>
                                </div>
                                
                                <div className="input-field col s12">
                                    <input 
                                        id="image"
                                        name="image"
                                        type="text" 
                                        value={data.image}
                                        onChange={(e) => setData('image', e.target.value)}
                                    />
                                    <label htmlFor="image">Image URL</label>
                                </div>
                            </div>
                            
                            <div className="modal-footer">
                                <button type="button" className="modal-close btn-flat" onClick={() => modalInstance.close()}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn waves-effect waves-light" disabled={processing}>
                                    {data.id ? 'Update' : 'Create'} Product
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}