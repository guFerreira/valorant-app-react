import React from 'react';

import { AbilityType } from '../../../../types';


interface AbilityProp {
  ability: AbilityType
}

const Ability = (abilityProp:AbilityProp) => {
  const ability = abilityProp.ability;

  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      }}>
        <img src={ability.displayIcon} style={{width:'54px'}}/>
        <span style={{
          color:'white',
          fontWeight:'600',
          fontSize:'10px'
        }}>{ability.displayName}</span>
    </div>
  );
};

export default Ability;