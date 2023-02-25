import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react'

import { deleteUser, getUsers } from '../../../services/users';

import { useAlert } from '../../../hooks';
import { usePagination } from '../../../hooks/UsePagination';

import { AdminTable } from '../../../components'

const offset = 5
const limit = 5;

const AdminUser = () => {
  const navigate = useNavigate();
  // States
  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPages] = useState(1);
  const [loading , setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectValue , setSelectValue] = useState('');

  // Hooks
  const { toast } = useAlert()
  const { 
    viewPage, 
    currentPage,
    handleNextPage,
    handlePreviusPage, 
    setLastPage 
  } = usePagination(0, offset);

  // Effects
  useEffect(() => {    
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
  const getAllUsers = async () => {
    const data = await getUsers(currentPage, limit);

    if (data.errros) {
      toast.error(data.errors[0].msg);
      setLoading(false);
      return;
    }

    const maxPages = Math.ceil(data.count / limit);
    setTotalPages(maxPages);
    setLastPage(maxPages);

    const newUsers = data.users.map((user) => {
      const { roleId, ...rest } = user;

      const newUser = {
        ...rest,
        role: roleId
      }

      return newUser;
    })

    setUsers(newUsers);   
  }

  // Edit user
  const handlerEdit = (user) => {
    if (!user) return;

    navigate(`edit-user/${user.id}`);
  }

  // Delelte User
  const handlerDel = async (user) => {
    if (!user) return;
    setLoading(true);
    const { data } = await deleteUser(user.id);

    if (data.errors) {
      toast.error(data.errors[0].msg);
      setLoading(false);
      return;
    }

    const update = users.filter((usr) => usr.id !== user.id);
    toast.success(data.msg);
    setUsers(update);
    setLoading(false);
  }

  // View User
  // const handlerView = (user) => {
  //   console.log(user)
  // }

  // Add User
  const handlerAdd = () => {
    navigate('new-user');
  }

  return (
    <div className="user__container">
      <AdminTable
        userTable
        loading={loading}
        data={usersFiltered}
        searchText={searchText}
        selectValue={selectValue}
        totalPages={totalPage}
        currentPage={viewPage}
        renderTableRowHeader={['id', 'email', 'role']}
        onAdd={handlerAdd}
        onEdit={handlerEdit}
        // onView={handlerView}
        onDelete={handlerDel}
        onSearch={(e) => setSearchText(e)}
        onSelect={(e) => setSelectValue(e)}
        onNextPage={() => handleNextPage()}
        onPreviusPage={() => handlePreviusPage()}
      />
    </div>
  )
}

export default AdminUser