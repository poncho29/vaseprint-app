import { NavLink } from 'react-router-dom';

import { FaUsers, FaBoxOpen } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';

const adminLinks = [
  {
    title: 'Usuarios',
    path: '/admin',
    icon: <FaUsers />
  },
  {
    title: 'Productos',
    path: 'products',
    icon: <FaBoxOpen />
  },
  {
    title: 'Tips',
    path: 'tips',
    icon: <MdTipsAndUpdates />
  },
  {
    title: 'Blog',
    path: 'blog',
    icon: <IoDocumentText />
  }
]

const LayoutAdmin = ({ children }) => {
  return (
    <div className="admin__container">
      <div className="admin__sidebar">
        <nav className='admin__menu'>
          {
            adminLinks.map((link, id) => (
              <NavLink
                end
                key={id}
                to={link.path}
                className={({isActive}) => `nav__item ${isActive ? 'active' : ''}`}
              >
                {link.icon} {link.title}
              </NavLink>
            ))
          }
        </nav>
      </div>
      <div className="admin__main">
        { children }
      </div>
    </div>
  )
}

export default LayoutAdmin