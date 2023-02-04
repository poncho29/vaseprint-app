import { IoIosCloseCircleOutline } from 'react-icons/io';

export const ModalAuth = ({children, isOpen, closeModal}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div className={`modal__auth ${isOpen && 'isOpen'}`}>
      <div className='auth__ctn' onClick={handleModalContainerClick}>
        <button className="auth__close" onClick={closeModal}>
          <IoIosCloseCircleOutline size={24} />
        </button>
        {children}
      </div>
    </div>
  )
}
