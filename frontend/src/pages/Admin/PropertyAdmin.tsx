import { useState, useEffect } from 'react'
import { propertyApi, Property, PropertyCreate } from '../../services/api'
import './PropertyAdmin.css'

const PropertyAdmin = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)

  const [formData, setFormData] = useState<PropertyCreate>({
    address: '',
    city: 'Orlando',
    state: 'FL',
    zip_code: '',
    neighborhood: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    square_feet: undefined,
    lot_size: undefined,
    year_built: undefined,
    property_type: 'House',
    property_tax: undefined,
    insurance_estimate: undefined,
    hoa_fee: undefined,
    status: 'Available',
    description: '',
    image_urls: [],
    mls_number: undefined,
  })

  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    try {
      setLoading(true)
      const response = await propertyApi.getAll()
      setProperties(response.properties)
      setError(null)
    } catch (err) {
      setError('Failed to load properties')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'price' ||
        name === 'bedrooms' ||
        name === 'bathrooms' ||
        name === 'square_feet' ||
        name === 'lot_size' ||
        name === 'year_built' ||
        name === 'property_tax' ||
        name === 'insurance_estimate' ||
        name === 'hoa_fee'
          ? value === '' || value === undefined
            ? undefined
            : parseFloat(value) || 0
          : value,
    }))
  }

  const handleImageUrlsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const urls = e.target.value
      .split('\n')
      .map((url) => url.trim())
      .filter((url) => url.length > 0)
    setFormData((prev) => ({ ...prev, image_urls: urls }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    try {
      setLoading(true)
      if (editingProperty) {
        await propertyApi.update(editingProperty.id.toString(), formData)
        setSuccess('Property updated successfully!')
      } else {
        await propertyApi.create(formData)
        setSuccess('Property added successfully!')
      }
      await fetchProperties()
      resetForm()
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to save property')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (property: Property) => {
    setEditingProperty(property)
    setFormData({
      address: property.address,
      city: property.city,
      state: property.state,
      zip_code: property.zip_code,
      neighborhood: property.neighborhood || '',
      price: property.price,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      square_feet: property.square_feet || undefined,
      lot_size: property.lot_size || undefined,
      year_built: property.year_built || undefined,
      property_type: property.property_type,
      property_tax: property.property_tax || undefined,
      insurance_estimate: property.insurance_estimate || undefined,
      hoa_fee: property.hoa_fee || undefined,
      status: property.status,
      description: property.description || '',
      image_urls: property.image_urls || [],
      mls_number: property.mls_number || undefined,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this property?')) {
      return
    }

    try {
      setLoading(true)
      await propertyApi.delete(id.toString())
      setSuccess('Property deleted successfully!')
      await fetchProperties()
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to delete property')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      address: '',
      city: 'Orlando',
      state: 'FL',
      zip_code: '',
      neighborhood: '',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      square_feet: undefined,
      lot_size: undefined,
      year_built: undefined,
      property_type: 'House',
      property_tax: undefined,
      insurance_estimate: undefined,
      hoa_fee: undefined,
      status: 'Available',
      description: '',
      image_urls: [],
      mls_number: undefined,
    })
    setEditingProperty(null)
    setShowForm(false)
  }

  return (
    <div className="property-admin">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Property Management</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              resetForm()
              setShowForm(true)
            }}
          >
            + Add New Property
          </button>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            {success}
            <button onClick={() => setSuccess(null)}>×</button>
          </div>
        )}

        {showForm && (
          <div className="admin-form-container">
            <h2>{editingProperty ? 'Edit Property' : 'Add New Property'}</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Zip Code *</label>
                  <input
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Neighborhood</label>
                  <input
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>MLS Number</label>
                  <input
                    type="text"
                    name="mls_number"
                    value={formData.mls_number || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price || ''}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="1000"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Bedrooms *</label>
                    <input
                      type="number"
                      name="bedrooms"
                      value={formData.bedrooms || ''}
                      onChange={handleInputChange}
                      required
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <label>Bathrooms *</label>
                    <input
                      type="number"
                      name="bathrooms"
                      value={formData.bathrooms || ''}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="0.5"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Square Feet</label>
                  <input
                    type="number"
                    name="square_feet"
                    value={formData.square_feet || ''}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Lot Size (acres)</label>
                  <input
                    type="number"
                    name="lot_size"
                    value={formData.lot_size || ''}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Year Built</label>
                  <input
                    type="number"
                    name="year_built"
                    value={formData.year_built || ''}
                    onChange={handleInputChange}
                    min="1800"
                    max="2100"
                  />
                </div>
                <div className="form-group">
                  <label>Property Type *</label>
                  <select
                    name="property_type"
                    value={formData.property_type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Property Tax (annual)</label>
                  <input
                    type="number"
                    name="property_tax"
                    value={formData.property_tax || ''}
                    onChange={handleInputChange}
                    min="0"
                    step="100"
                  />
                </div>
                <div className="form-group">
                  <label>Insurance Estimate (annual)</label>
                  <input
                    type="number"
                    name="insurance_estimate"
                    value={formData.insurance_estimate || ''}
                    onChange={handleInputChange}
                    min="0"
                    step="100"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>HOA Fee (monthly)</label>
                  <input
                    type="number"
                    name="hoa_fee"
                    value={formData.hoa_fee || ''}
                    onChange={handleInputChange}
                    min="0"
                    step="10"
                  />
                </div>
                <div className="form-group">
                  <label>Status *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Available">Available</option>
                    <option value="Under Contract">Under Contract</option>
                    <option value="Sold">Sold</option>
                    <option value="Off Market">Off Market</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>

              <div className="form-group">
                <label>Image URLs (one per line)</label>
                <textarea
                  value={formData.image_urls?.join('\n') || ''}
                  onChange={handleImageUrlsChange}
                  rows={4}
                  placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Saving...' : editingProperty ? 'Update Property' : 'Add Property'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="admin-properties-list">
          <h2>Existing Properties ({properties.length})</h2>
          {loading && !showForm ? (
            <p>Loading properties...</p>
          ) : properties.length === 0 ? (
            <p>No properties found. Add your first property above.</p>
          ) : (
            <div className="properties-table">
              <table>
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>City</th>
                    <th>Price</th>
                    <th>Beds/Baths</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.id}>
                      <td>{property.address}</td>
                      <td>{property.city}</td>
                      <td>${property.price.toLocaleString()}</td>
                      <td>
                        {property.bedrooms} bed / {property.bathrooms} bath
                      </td>
                      <td>
                        <span className={`status-badge status-${property.status.toLowerCase().replace(' ', '-')}`}>
                          {property.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-edit"
                          onClick={() => handleEdit(property)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-delete"
                          onClick={() => handleDelete(property.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PropertyAdmin

