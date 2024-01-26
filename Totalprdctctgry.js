import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Totalprdctctgry = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products
    axios.get('http://localhost:5040/Product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    // Fetch categories
    axios.get('http://localhost:5040/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const tableStyle = {
    width: '50%', // Adjust the width as needed
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '20px',
  };

  const headerCellStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
  };

  const cellStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div>
     <h4 style={{ textAlign: 'center' }}>Total Products and Categories</h4>

      <div>
        <h5>Total number of products: {products.length}</h5>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Name</th>
              <th style={headerCellStyle}>Price</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td style={cellStyle}>{product.name}</td>
                <td style={cellStyle}>{product.price}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h5>Total number of categories: {categories.length}</h5>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Name</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category._id}>
                <td style={cellStyle}>{category.name}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Totalprdctctgry;
