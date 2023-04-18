import React from 'react'
import { Card, Select } from '../components'

import { FaFilter } from 'react-icons/fa';
import Mouse from '../assets/images/mouse-genius-dx-120-usb.png';

export const Store = () => {
  return (
    <div className='store container'>
      <h2 className='title'>Tienda</h2>

      <section className='filters'>
        <div className='filter-content'>
          <Select
            id='order'
            name='order'
            value=''
            handlerChange={() => {}}
          />
          <div className='more-options'>
            <FaFilter color='white' />
            <span>Filtrar</span>
          </div>
        </div>
      </section>

      <section className='grid'>
        <Card
          key='1'
          url={Mouse}
          title='Mouse'
          price='20000'
        />
        <Card
          key='1'
          url={Mouse}
          title='Mouse'
          price='20000'
        />
        <Card
          key='1'
          url={Mouse}
          title='Mouse'
          price='20000'
        />
        <Card
          key='1'
          url={Mouse}
          title='Mouse'
          price='20000'
        />
        <Card
          key='1'
          url={Mouse}
          title='Mouse'
          price='20000'
        />
        <Card
          key='1'
          url={Mouse}
          title='Mouse'
          price='20000'
        />
      </section>
    </div>
  )
}
