import { AbilityType } from '../../../../types';


interface AbilityProp {
  ability: AbilityType,
  selectAbility: React.Dispatch<React.SetStateAction<any>>;
}

const Ability = (abilityProp:AbilityProp) => {
  const ability = abilityProp.ability;
  const selectAbility = () => {
    abilityProp.selectAbility(ability)
  }
  
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#0f1923',
        padding:'6px',
        width:'54px',
        borderRadius:'12px',
        cursor:'pointer'
      }}
      onClick={() =>{selectAbility() }}>
        <img src={ability.displayIcon} style={{
          height:'54px',
        }}/>
        <span style={{
          color:'white',
          fontWeight:'600',
          fontSize:'10px'
        }}>{ability.displayName}</span>
    </div>
  );
};

export default Ability;