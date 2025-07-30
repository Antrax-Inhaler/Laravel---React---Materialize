import { useForm } from '@inertiajs/react'

export default function Edit({ product }) {
  const { data, setData, put, processing, errors } = useForm({ ...product })

  const handleSubmit = (e) => {
    e.preventDefault()
    put(`/api/v1/products/${product.id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Product</h1>
      {/* same inputs as Create.jsx */}
        <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Name" />
      <textarea value={data.description} onChange={e => setData('description', e.target.value)} placeholder="Description"></textarea>
      <input type="number" value={data.stock} onChange={e => setData('stock', e.target.value)} placeholder="Stock" />
      <input type="number" step="0.01" value={data.price} onChange={e => setData('price', e.target.value)} placeholder="Price" />
      <input type="date" value={data.available_from} onChange={e => setData('available_from', e.target.value)} />
      <input type="text" value={data.image} onChange={e => setData('image', e.target.value)} placeholder="Image URL" />
      <label>
        <input type="checkbox" checked={data.is_active} onChange={e => setData('is_active', e.target.checked)} />
        Active
      </label>
      <button type="submit" disabled={processing}>Update</button>
    </form>
  )
}
