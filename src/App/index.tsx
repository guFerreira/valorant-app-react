import React, { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CharacterCard from './components/CharacterCard';
import characterService from './components/CharacterCard/service/CharacterService';
import { CharacterType } from './types';

function App() {
  const [agents, setAgents] = useState<CharacterType[]>([]);

    const loadAgents = async () => {
      try {
        const loadAgents:CharacterType[] = await characterService.getAllAgents()
        console.log('loadAgents',loadAgents)
        setAgents(loadAgents)
      } catch (error : any) {
        console.log(error)
      }
    }

  useEffect(() => {
    const getAllAgents = async () => {
      loadAgents()
    }

    getAllAgents()
  }, []);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: '#042e27'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              VALORANT 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
      }}>

      {agents.length > 0 ? agents.map((agent: CharacterType, key) => (
              <CharacterCard  key={key} agent={agent}></CharacterCard>
            ))
            : ''
            }
      </div>

    
    
    </div>
  );
}

export default App;
