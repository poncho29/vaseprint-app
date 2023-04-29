import React from 'react'
import { Card, Select } from '../components'

import { FaFilter } from 'react-icons/fa';
import Mouse from '../assets/images/mouse-genius-dx-120-usb.png';

const products = [
  {id: 1, url: Mouse, title: 'product 1', price: '20000'},
  {id: 2, url: Mouse, title: 'product 2', price: '35000'},
  {id: 3, url: Mouse, title: 'product 3', price: '2000'},
]

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
        { products.map((card) => (
          <Card
            key={card.id}
            url={card.url}
            title={card.title}
            price={card.price}
          />
        ))}
        
        {/* <Card
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
        /> */}
      </section>
    </div>
  )
}
