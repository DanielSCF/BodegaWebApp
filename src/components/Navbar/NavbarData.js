import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs'
import * as VscIcons from 'react-icons/vsc'

export const NavbarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Productos',
    path: '/productos',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Proveedores',
    path: '/proveedores',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text'
  },
  {
    title: 'Usuarios',
    path: '/usuarios',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text'
  },
  {
    title: 'Trabajador',
    path: '/trabajadores',
    icon: <VscIcons.VscPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Pedidos de cliente',
    path: '/pedidos',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Órdenes de compra',
    path: '/ordenes',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Cerrar sesión',
    path: '/',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];
