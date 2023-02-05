import { useCallback, useEffect, useMemo, useState } from 'react'
import AdminTable from '../../components/admin/AdminTable'
import { getUsers } from '../../services/users';

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
  const [users, setUsers] = useState([]);

  // const usersCallback = useCallback(() => getUsers(), []);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await getUsers();
        console.log(users);

        const newUsers = data.users.map((user) => {
          const { roleId, ...rest } = user;

          const newUser = {
            ...rest,
            role: roleId
          }

          return newUser
        })

        setUsers(newUsers);       
      } catch (error) {
        console.log(error);
      }
    }

    getAllUsers()
  }, []);

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
        data={users}
        userTable
        renderTableRowHeader={['id', 'email', 'role']}
        onEdit={editUser}
        onView={viewUser}
        onDelete={deleteUser}
      />
    </div>
  )
}

export default AdminUser