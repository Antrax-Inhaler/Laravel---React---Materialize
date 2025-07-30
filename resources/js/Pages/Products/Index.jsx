import { Link, useForm } from '@inertiajs/react'
import axios from 'axios'
export default function Index({ products }) {
  const { delete: destroy } = useForm()


const handleDelete = async (id) => {
  if (confirm('Are you sure?')) {
    try {
      await axios.delete(`/api/v1/products/${id}`)
      window.location.reload()
    } catch (error) {
      alert('Delete failed')
    }
  }
}
  return (
<div>
  <h1>Product List</h1>
  <Link href="/products/create">Add Product</Link>
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <strong>{product.name}</strong> - ₱{product.price} <br />
        📅 Available From: {new Date(product.available_from).toLocaleDateString()} <br />
        <Link href={`/products/${product.id}/edit`}>Edit</Link>
        <button onClick={() => handleDelete(product.id)}>Delete</button>
      </li>
    ))}
  </ul>
</div>

  )
}
