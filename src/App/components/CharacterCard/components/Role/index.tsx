import React from 'react';
import { RoleType } from '../../../../types';


interface RoleProp {
  role: RoleType
}

const Role = (roleProp:RoleProp) => {
  const role = roleProp.role;

  return (
    <div style={{
        backgroundColor:'#708090',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'10px',
        width:'72px',
        height:'20px',
        borderRadius:'36px',
        position:'absolute',
        margin:'4px',
        right:'0'
      }}>
        <img src={role.displayIcon} style={{width:'26px'}}/>
        <span style={{
          color:'white',
          fontWeight:'600',
          fontSize:'10px'
        }}>{role.displayName}</span>
    </div>
  );
};

export default Role;