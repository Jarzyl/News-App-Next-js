import React from 'react';
import { IconType } from 'react-icons';

interface MenuItemProps {
  icon: IconType;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, text }) => (
  <div className="flex gap-3 mt-5 px-3">
    <Icon size={25} className="text-sky-600" />
    <p className="text-gray-500 text-center text-lg cursor-pointer">{text}</p>
  </div>
);

export default MenuItem;
