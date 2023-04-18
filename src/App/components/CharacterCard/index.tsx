import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AbilityType, CharacterType } from '../../types';

interface AgentProp {
  agent: CharacterType
}

const StyledCard = styled(Card)({
  maxWidth: 345,
  width: '345px',
  backgroundColor:'#042e27',
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
    <StyledCard>
      <CardContent style={{
        borderRadius:'10px'
      }}>
        <div style={{
          display:'flex',
          backgroundColor:'white',
          justifyContent:'space-between'
          
        }}>
          <img src={agentProp.agent.killfeedPortrait} />

          <span>
            {agentProp.agent.role?.displayName ? agentProp.agent.role.displayName : ''}
          </span>

        </div>
        
        <Box sx={{backgroundColor:'#fa4454', padding:'10px'}}>
          <Typography variant="h5" component="h2" fontWeight={700}>
            {displayName}
          </Typography>
          <Typography color="textSecondary">
            {/* {role.displayName} */}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Box>

        <div style={{backgroundColor:'#364966', padding:'10px'}}>
          <Typography variant="h5" component="h2" fontWeight={700}>
            Abilities
          </Typography>
         
         <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'12px'}}>

          <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              
            }}>
              <img src={abilities[0].displayIcon} style={{width:'54px'}}/>
              <span style={{
                color:'white',
                fontWeight:'600',
                fontSize:'10px'
              }}>{abilities[0].displayName}</span>
            </div>

            <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              
            }}>
              <img src={abilities[1].displayIcon} style={{width:'54px'}}/>
              <span style={{
                color:'white',
                fontWeight:'600',
                fontSize:'10px'
              }}>{abilities[1].displayName}</span>
            </div>
    

            <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              
            }}>
              <img src={abilities[2].displayIcon} style={{width:'54px'}}/>
              <span style={{
                color:'white',
                fontWeight:'600',
                fontSize:'10px'
              }}>{abilities[2].displayName}</span>
            </div>
    

            <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              
            }}>
              <img src={abilities[3].displayIcon} style={{width:'54px'}}/>
              <span style={{
                color:'white',
                fontWeight:'600',
                fontSize:'10px'
              }}>{abilities[3].displayName}</span>
          </div>

        </div>

        </div>
      </CardContent>
    </StyledCard>
  );
};

export default CharacterCard;