import React from 'react';

const CustomButton=(
    {height="45px",
    
    radius="1px",
    label="button",
    backgroundColor="#FFF",
    color="#8A8C8F",
    border="none",
    click=()=>{}}
)=>{
 const buttonStyle={
    height,
    width:"100%",
    backgroundColor,
    borderRadius: radius,
    color:color,
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    padding:"9px 18px",
    display:"flex",
    alignItems:"center",
    justifyContent: 'center',
    border: border !== 'none' ? '2px solid #6B728080' : 'none',
    
  };
  return(
    <button style={buttonStyle} onClick={click}>
        {label}
    </button>
  )
 }
export default CustomButton;