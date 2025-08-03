import GridSystem from '@/Components/Materialize/GridSystem';
import ColorSystem from '@/Components/Materialize/ColorSystem';
import Typography from '@/Components/Materialize/Typography';
import Components from '@/Components/Materialize/Components';
import Animations from '@/Components/Materialize/Animations';
import Hero from '@/Components/Materialize/Hero';
import Floater from '@/Components/Materialize/Floater';
import { useForm } from '@inertiajs/react'

export default function Showcase() {
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
    
    return (
        <div title="Materialize Showcase">

                <div className='main'>
                <Hero />
            </div>
            <div className="container">
  <div className="section scrollspy" id="grid">
                <GridSystem />
            </div>
            
            <div className="section scrollspy" id="colors">
                <ColorSystem />
            </div>
            
            <div className="section scrollspy" id="typography">
                <Typography />
            </div>
            
            <div className="section scrollspy" id="components">
                <Components />
                <form onSubmit={handleSubmit} className="container">
      <h4 className="center-align">Create Product</h4>

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
      <div className="center-align">
        <button
          className="btn waves-effect waves-light"
          type="submit"
          disabled={processing}
        >
          Save
          <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
            </div>
            
            <div className="section scrollspy" id="animations">
                <Animations />
            </div>
            
            </div>
          <Floater></Floater>
        </div>
    );
}