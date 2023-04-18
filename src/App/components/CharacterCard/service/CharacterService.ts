import axios from "axios";
import { CharacterType } from "../../../types";

const api = axios.create({
  baseURL: "https://valorant-api.com",
});

async function getAllAgents():Promise<CharacterType[]> {
  const response = await api.get<{status:number, data: CharacterType[]}>('/v1/agents')
  console.log('service:', response.data.data)

  return response.data.data
}

const characterService = {
  getAllAgents
}

export default characterService
