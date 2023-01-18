import React from 'react'

const LayoutAdmin = ({ children }) => {
  return (
    <div className="admin__container">
      <div className="admin__sidebar">Sidebar</div>
      <div className="admin__main">
        { children }
      </div>
    </div>
  )
}

export default LayoutAdmin