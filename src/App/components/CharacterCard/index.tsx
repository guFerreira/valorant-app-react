import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AbilityType, CharacterType } from '../../types';
import Ability from './components/Ability';
import Role from './components/Role';

interface AgentProp {
  agent: CharacterType
}

const StyledCard = styled(Card)({
  maxWidth: 345,
  width: '345px',
  backgroundColor:'#292929',
  margin:'10px',
  flexGrow:'10'
});

const CharacterCard = (agentProp:AgentProp) => {
  const {
    displayName,
    description,
    displayIcon,
    role,
    bustPortrait,
    fullPortrait,
    abilities
  } = agentProp.agent;

  console.log(fullPortrait)
  return (
    <StyledCard style={{width:'340px'}}>
      <CardContent style={{
        borderRadius:'10px',
      }}>
        <div style={{
          display:'flex',
          backgroundColor:'white',
          justifyContent:'space-between',
          position:'relative'
        }}>
          <img src={agentProp.agent.fullPortraitV2}  style={{width:'300px', height:'272px'}}/>
          <Role role={agentProp.agent.role}/>
        </div>
        
        <Box sx={{backgroundColor:'#ff4655', padding:'10px'}}>
          <Typography variant="h5" component="h2" fontWeight={700}>
            {displayName}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Box>

        <div style={{backgroundColor:'#0f1923', padding:'10px'}}>
          <Typography variant="h5" component="h2" fontWeight={700} color={'white'}>
            Abilities
          </Typography>
         
         <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'12px'}}>

          { abilities.map((ability) =>{
            return ability.displayIcon ? <Ability ability={ability}></Ability> : ''
          })}

        </div>

        </div>
      </CardContent>
    </StyledCard>
  );
};

export default CharacterCard;