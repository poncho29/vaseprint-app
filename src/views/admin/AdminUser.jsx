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
  const [searchText, setSearchText] = useState('');
  const [selectValue , setSelectValue] = useState('');

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

  const handlerEdit = (user) => {
    console.log(user)
  }

  const handlerDel = (user) => {
    console.log(user)
  }

  const handlerView = (user) => {
    console.log(user)
  }

  const handlerAdd = () => {
    console.log('crear')
  }

  return (
    <div className="user__container">
      <AdminTable
        userTable
        data={users}
        searchText={searchText}
        selectValue={selectValue}
        renderTableRowHeader={['id', 'email', 'role']}
        onAdd={handlerAdd}
        onEdit={handlerEdit}
        onView={handlerDel}
        onDelete={handlerView}
        onSearch={(e) => setSearchText(e)}
        onSelect={(e) => setSelectValue(e)}
      />
    </div>
  )
}

export default AdminUser