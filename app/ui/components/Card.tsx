import Image from 'next/image';
import React, { ReactNode } from 'react'

interface props {
    children: ReactNode;
    className: string;
}

const basicStyle = {
    display: "flex",
    background: "#171835",
    color: "#fff",
    margin: "1rem",
    padding: "1rem",
    border: "2px #d5d5d5 solid",
    borderRadius: "20px"
}

const Card = ({ children, className }: props) => {
  return (
    <div className={className} style={basicStyle}>{children}</div>
  )
}

export default Card