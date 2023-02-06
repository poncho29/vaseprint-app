import { useEffect, useMemo, useState } from 'react'

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

  // Effects
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await getUsers(currentPage, limit);
        const maxPages = Math.ceil(data.count / limit);
        setTotalPages(maxPages);
        setLastPage(maxPages);

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
  
  // Memos
  const usersFiltered = useMemo(() => {
    let resultData = users;

    // Filter by search
    if (searchText) {
      const dataBySearch = resultData.filter(user => {
        if (user.email.toLowerCase().trim().includes(searchText.toLowerCase().trim())) {
          return user;
        }

        if ((searchText.toLocaleLowerCase().includes('admin'))) {
          return user.role === 1;
        };

        if ((searchText.toLocaleLowerCase().includes('cliente'))) {
          return user.role === 2;
        };
      });

      resultData = dataBySearch;
    }

    return resultData;
  }, [users, searchText]);

  // Functions
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
        data={usersFiltered}
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