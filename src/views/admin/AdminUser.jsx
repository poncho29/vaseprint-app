import { useEffect, useState } from 'react'

import { getUsers } from '../../services/users';

import { usePagination } from '../../hooks/UsePagination';

import AdminTable from '../../components/admin/AdminTable'

const limit = 5;

const AdminUser = () => {
  // States
  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPages] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [selectValue , setSelectValue] = useState('');

  // Hooks
  const { currentPage, handleNextPage, handlePreviusPage, setLastPage } = usePagination(1);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await getUsers(currentPage, limit);
        const maxPages = Math.ceil(data.count / limit);
        setTotalPages(maxPages);
        setLastPage(maxPages);
        console.log(data);

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
  }, [currentPage]);

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
        totalPages={totalPage}
        currentPage={currentPage}
        renderTableRowHeader={['id', 'email', 'role']}
        onAdd={handlerAdd}
        onEdit={handlerEdit}
        onView={handlerDel}
        onDelete={handlerView}
        onSearch={(e) => setSearchText(e)}
        onSelect={(e) => setSelectValue(e)}
        onNextPage={() => handleNextPage()}
        onPreviusPage={() => handlePreviusPage()}
      />
    </div>
  )
}

export default AdminUser