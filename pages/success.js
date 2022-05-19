import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Orden completa, gracias por tu confianza!</h2>
        <p className='email-msg'>Hemos enviado a tu correo el recibo</p>
        <p className='description'>
          Si tienes dudas, escribenos al siguiente correo
          <a href='mailto:order@example.com' className='email'>
            order@example.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' className='btn' width='300px'>
            Continuar comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
