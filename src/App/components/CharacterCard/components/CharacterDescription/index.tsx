import { CharacterType } from '../../../../types';
import { Box, Typography } from '@mui/material';


interface CharacterDescriptionProp {
  character: CharacterType
}

const CharacterDescription = (characterDescriptionProp:CharacterDescriptionProp) => {
  const {displayName, description} = characterDescriptionProp.character;

  return (
    <Box sx={{backgroundColor:'#0f1923', color:'white', padding:'10px'}}>
        <Typography variant="h5" component="h2" fontWeight={700}>
            {displayName}
        </Typography>
        <Typography variant="body2" component="p" height={'120px'}>
            {description}
        </Typography>
  </Box>
  );
};

export default CharacterDescription;