import React from 'react';

import { capitalize } from '../../utils/capitalize';

import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const IconActions = [
  {
    name: 'edit',
    icon: <FaEdit />
  },
  {
    name: 'delete',
    icon: <FaTrash />
  },
  {
    name: 'view',
    icon: <FaEye />
  }
]

const AdminTable = ({
  data = [],
  renderTableRowHeader = [],
  actionsIcons = IconActions,
  showActionColumnHeader = true,

  onView = (e) => {},
  onEdit = (e) => {},
  onDelete = (e) => {},
}) => {
  // console.log(data)

  return (
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
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              { showActionColumnHeader && 
                <td className='td__actions'>
                  <span onClick={() => onEdit(item)}>{ actionsIcons[0].icon}</span>
                  <span onClick={() => onDelete(item)}>{ actionsIcons[1].icon}</span>
                  <span onClick={() => onView(item)}>{ actionsIcons[2].icon}</span>                 
                </td>
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default AdminTable