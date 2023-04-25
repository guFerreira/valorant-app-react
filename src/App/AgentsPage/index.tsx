import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { CharacterType } from '../types';
import characterService from '../components/CharacterCard/service/CharacterService';
import CharacterCard from '../components/CharacterCard';

function AgentsPage() {
    const [agents, setAgents] = useState<CharacterType[]>([]);

    const loadAgents = async () => {
      try {
        const loadAgents:CharacterType[] = await characterService.getAllAgents()
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
    <div className="App" style={{display:'flex', justifyContent:'center', width:'100%'}}>
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center'
        }}>

        { agents.length > 0 ? agents.map((agent: CharacterType, key) => (
              <CharacterCard  key={key} agent={agent}></CharacterCard>
              
            ))
            : ''
        }
      </div>
    </div>
  );
}

export default AgentsPage;
