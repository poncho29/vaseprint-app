import React from 'react'

const AdminUser = () => {
  return (
    <div className="user__container">
      <div className="user__filters">
        <h2>Filtros</h2>
      </div>

      <table style={{ width: '100%', border: '1px solid #333' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #333' }}>ID</th>
            <th style={{ border: '1px solid #333' }}>Email</th>
            <th style={{ border: '1px solid #333' }}>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #333' }}>1</td>
            <td style={{ border: '1px solid #333' }}>Sebas@gmail.com</td>
            <td style={{ border: '1px solid #333' }}>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminUser