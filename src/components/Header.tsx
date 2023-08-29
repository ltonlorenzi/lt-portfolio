import React from 'react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <header>{title}</header>;
};

export default Header;