import { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import characterService from './components/CharacterCard/service/CharacterService';
import { CharacterType } from './types';
import AgentsPage from './AgentsPage';

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
        <AppBar position="static" sx={{backgroundColor: '#ece8e1'}}>
          <Toolbar style={{backgroundColor:'#111'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              VALORANT 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <AgentsPage></AgentsPage>    
    
    </div>
  );
}

export default App;
