export type RoleType = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
};

export type AbilityType = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
};

export type VoiceLineType = {
  minDuration: number;
  maxDuration: number;
  mediaList: {
    id: number;
    wwise: string;
    wave: string;
  }[];
};

export type CharacterType = {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: RoleType;
  abilities: AbilityType[];
  voiceLine: VoiceLineType;
};