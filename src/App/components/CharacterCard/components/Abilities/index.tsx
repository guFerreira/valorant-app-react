import React, { useState } from 'react';

import { AbilityType } from '../../../../types';
import Ability from '../Ability';
import { Typography } from '@mui/material';


interface AbilitiesProp {
  abilities: AbilityType[]
}

const Abilities = (abilitiesProp:AbilitiesProp) => {
    const [selectedAbility, setSelectedAbility] = useState<AbilityType>(abilitiesProp.abilities[0]);
    const abilities = abilitiesProp.abilities;

  return (
    <div style={{backgroundColor:'#ff4655', padding:'10px'}}>
        <div>
            <Typography variant="h5" component="h2" fontWeight={700} color={'white'}>
                Abilities
            </Typography>
            
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'20px', marginTop:'12px'}}>
            { abilities.map((ability) =>{
                return ability?.displayIcon?  <Ability ability={ability} selectAbility={setSelectedAbility}></Ability> : ''
            })}
            </div>
        </div>

        <div style={{margin:'4px', paddingTop:'10px'}}>
            <Typography variant="h5" component="h2" fontWeight={700} color={'white'}>
                {selectedAbility.displayName}
            </Typography>
            <Typography  component="p" color={'white'} >
                {selectedAbility.description}
            </Typography>
        </div>
    </div>
  );
};

export default Abilities;