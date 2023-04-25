import React from 'react';
import { Backdrop, Box, Button, Card, CardContent, Fade, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AbilityType, CharacterType } from '../../types';
import Ability from './components/Ability';
import Role from './components/Role';
import Abilities from './components/Abilities';
import CharacterDescription from './components/CharacterDescription';

interface AgentProp {
  agent: CharacterType
}

const StyledCard = styled(Card)({
  maxWidth: 345,
  width: '345px',
  backgroundColor:'#292929',
  margin:'10px',
  flexGrow:'10',
  transition: 'all 0.4s',
  cursor: 'pointer',
  ":hover":{
      filter: 'drop-shadow(10px 15px 5px rgba(0,0,0,.5))',
      transform:' scale(1.02)'
  }
});

const CharacterCard = (agentProp:AgentProp) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    display:'flex',
    flexDirection: 'row'
  };
  

  return (
    <StyledCard style={{width:'340px'}} onClick={handleOpen}>
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
        <CharacterDescription character={agentProp.agent}></CharacterDescription>
        
      </CardContent>

     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{
              display:'flex',
              flexDirection:'column',
              backgroundColor:'white',
              justifyContent:'space-between',
              position:'relative',
              width:'350px'
            }}>
              <img style={{width:330}} src={agentProp.agent.displayIcon}/>
              <Role role={agentProp.agent.role}/>
              <CharacterDescription character={agentProp.agent} ></CharacterDescription>
            </div>
            <div style={{background:'#ff4655', width:'100%'}}>
              <Abilities abilities={agentProp.agent.abilities}></Abilities>
            </div>
          </Box>
        </Fade>
      </Modal>



    </StyledCard>
  );
};

export default CharacterCard;