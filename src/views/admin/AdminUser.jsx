import React from 'react'
import AdminTable from '../../components/admin/AdminTable'

const dataUser = [
  {
    id: 1,
    name: 'sebastian',
    email: 'sebastian@gmail.com',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Jesus',
    email: 'jesus@gmail.com',
    role: 'admin',
  },
  {
    id: 3,
    name: 'laura',
    email: 'laura@gmail.com',
    role: 'admin',
  }
]

const AdminUser = () => {
  const editUser = (user) => {
    console.log(user)
  }

  const deleteUser = (user) => {
    console.log(user)
  }

  const viewUser = (user) => {
    console.log(user)
  }

  return (
    <div className="user__container">
      {/* <div className="user__filters">
        <h2>Filtros</h2>
      </div> */}
    
      <AdminTable
        data={dataUser}
        renderTableRowHeader={['id', 'name', 'email', 'role']}
        onEdit={editUser}
        onView={viewUser}
        onDelete={deleteUser}
      />
    </div>
  )
}

export default AdminUser