'use client';
import { useEffect, useState } from "react"
import { Edit2, Trash2, Save, X } from "lucide-react";
import Image from "next/image";

const ProductsTable = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({
    price: '',
    stock: '',
    sales: ''
  })

  useEffect(() => {
    fetch('/data/productData.json').then(res => res.json()).then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toString().includes(searchTerm)
  )

  const handleEdit = (product) => {
    setEditingId(product.id)
    setEditForm({
      price: product.price,
      stock: product.stock,
      sales: product.sales
    })
  }

  const handleSave = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, ...editForm }
        : product
    ))
    setEditingId(null)
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditForm({ price: '', stock: '', sales: '' })
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id))
    }
  }

  const handleInputChange = (field, value) => {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="bg-(--background-secondary) rounded-xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-white text-2xl font-semibold">Products List</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-auto min-w-[250px] px-4 py-3 border border-[#2a2a3e] rounded-lg bg-neutral-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>
      
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse bg-(--background-secondary)">
          <thead className="hidden lg:table-header-group border-b border-neutral-600">
            <tr>
              {[
                "Name",
                "Product ID",
                "Category",
                "Price",
                "Stock",
                "Sales",
                "Actions",
              ].map((header) => (
                <th key={header} className="px-4 py-4 text-left text-[#a0a0b0] font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-neutral-700 hover:bg-(--background-secondary-hover) transition-colors lg:table-row flex flex-col lg:flex-row mb-4 lg:mb-0 rounded-lg lg:rounded-none">
                <td className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none" data-label="Name">
                  <div className="flex items-center gap-3">
                    <Image src={product.image} alt={product.name} width={40} height={40} className="rounded-md object-cover" />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none" data-label="Product ID">
                  #{product.id}
                </td>
                <td className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none" data-label="Category">
                  <span className="inline-block px-3 py-1.5 bg-(--primary-green) text-white rounded-md text-xs font-medium">
                    {product.category}
                  </span>
                </td>
                <td className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none" data-label="Price">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      value={editForm.price}
                      onChange={(e) => handleInputChange('price', parseFloat(e.target.value || 0))}
                      className="w-20 px-2 py-1.5 border border-indigo-500 rounded bg-[#2a2a3e] text-white text-sm focus:outline-none focus:border-indigo-400"
                      step="0.01"
                    />
                  ) : (
                    `$${product.price.toFixed(2)}`
                  )}
                </td>
                <td className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none" data-label="Stock">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      value={editForm.stock}
                      onChange={(e) => handleInputChange('stock', parseInt(e.target.value || 0))}
                      className="w-20 px-2 py-1.5 border border-indigo-500 rounded bg-[#2a2a3e] text-white text-sm focus:outline-none focus:border-indigo-400"
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none" data-label="Sales">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      value={editForm.sales}
                      onChange={(e) => handleInputChange('sales', parseInt(e.target.value || 0))}
                      className="w-20 px-2 py-1.5 border border-indigo-500 rounded bg-[#2a2a3e] text-white text-sm focus:outline-none focus:border-indigo-400"
                    />
                  ) : (
                    product.sales
                  )}
                </td>
                <td className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none lg:border-none" data-label="Actions">
                  <div className="flex gap-2 justify-end md:justify-start w-full lg:w-auto">
                    {editingId === product.id ? (
                      <>
                        <button
                          onClick={() => handleSave(product.id)}
                          className="p-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center"
                          title="Save"
                        >
                          <Save size={16} />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center"
                          title="Cancel"
                        >
                          <X size={16} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(product)}
                          className="p-2 bg-(--primary-green) hover:bg-green-600 text-white rounded-md transition-all hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-8 text-[#a0a0b0]">
          {`No products found matching "${searchTerm}"`}
        </div>
      )}
    </section>
  )
}

export default ProductsTable