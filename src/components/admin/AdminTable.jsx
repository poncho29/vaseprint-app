import React from 'react';

import { capitalize } from '../../utils/capitalize';

import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

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
  renderTableRowHeader = [],
  actionsIcons = IconActions,
  showActionColumnHeader = true,

  onView = (e) => {},
  onEdit = (e) => {},
  onDelete = (e) => {},
}) => {
  // console.log(data)

  return (
    <div className='content__table'>
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
    </div>
  )
}

export default AdminTable