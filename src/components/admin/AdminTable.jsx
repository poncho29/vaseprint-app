import React, { useState } from 'react';

import { capitalize } from '../../utils/capitalize';

import Select from '../forms/Select';
import InputSearch from '../forms/InputSearch';

import { FaEye, FaEdit, FaTrash, FaPlusCircle, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Spinner from '../common/Spinner';

const IconActions = [
  {
    name: 'edit',
    icon: <FaEdit size={18} />
  },
  {
    name: 'delete',
    icon: <FaTrash size={18} />
  },
  {
    name: 'view',
    icon: <FaEye size={18} />
  }
]

const AdminTable = ({
  data = [],
  searchText = "",
  selectValue = "",
  userTable = false,
  currentPage = 0,
  totalPages = 0,
  showSelect = false,
  loading = false,
  renderTableRowHeader = [],
  actionsIcons = IconActions,
  showActionColumnHeader = true,

  onAdd = (e) => {},
  onView = (e) => {},
  onEdit = (e) => {},
  onDelete = (e) => {},
  onSelect = (e) => {},
  onSearch = (e) => {},
  onNextPage = (e) => {},
  onPreviusPage = (e) => {},
}) => {
  return (
    <div className={`content__table ${loading && 'loading__table'}`}>
      <section className='filter__table'>
        <div className='filter__group'>
          <InputSearch
            showSearch
            id='search'
            name='search'
            sizeLogo={16}
            placeholder='Buscar por email'
            value={searchText}
            onChange={({ target }) => {
              onSearch(target.value)
            }}
          />
          { showSelect &&
            <Select
              id='filter'
              name='filter'
              value={selectValue}
              options={renderTableRowHeader}
              handlerChange={(value) => {
                onSelect(value)
              }}
            />
          }
        </div>
        <div className='buttons__group'>
          <button
            className='btn__clear'
            onClick={() => {
              console.log('clear')
              onSelect("");
              onSearch("");
            }}
          >
            Limpiar
          </button>
          <button
            className='btn__add'
            onClick={onAdd}
          >
            <FaPlusCircle size={32} />
          </button>
        </div>
      </section>

      <table className='admin__table'>
        <thead>
          <tr className='tr__labels'>
            {
              renderTableRowHeader.map((item, idx) => {
                const label = capitalize(item)
                return (<th key={idx}>{label}</th>)
              })
            }
            { showActionColumnHeader && <th className='th__actions'>Actions</th> }          
          </tr>
        </thead>
        <tbody>          
          {
            data.map((item) => (
              <tr className='tr__data' key={item.id}>
                {
                  renderTableRowHeader.map((field, idx) => {
                    if (userTable && field === 'role') {
                      const rolValue = item[field] === 1 
                        ? 'Admin' : item[field] === 2 
                        ? 'Cliente' : 'Usuario'
                      
                      return <td key={idx}>{rolValue}</td>
                    }

                    const value = item[field];

                    return <td key={idx}>{value}</td>
                  })
                }
                { showActionColumnHeader && 
                  <td>
                    <div className='td__actions'>
                      <div onClick={() => onEdit(item)}>{ actionsIcons[0].icon}</div>
                      <div onClick={() => onDelete(item)}>{ actionsIcons[1].icon}</div>
                      <div onClick={() => onView(item)}>{ actionsIcons[2].icon}</div>                 
                    </div>
                  </td>
                }
              </tr>
            ))
          }
        </tbody>
      </table>

      <section className='pagination__table'>
        { currentPage > 1 ?
            <FaAngleLeft
              size={22}
              className
              onClick={() => {onPreviusPage(currentPage)}}
            /> :
            null
        }
        <span className='pagination__text'>
          { currentPage } / { totalPages }
        </span>
        { currentPage < totalPages ?
            <FaAngleRight
              size={22}
              onClick={() => {onNextPage(currentPage)}}
            /> :
            null
        }
      </section>      
    </div>
  )
}

export default AdminTable