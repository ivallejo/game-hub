import {CanceledError} from "axios";
import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import UseData from "./useData";
import {Genre} from "./useGenres";
import {GameQuery} from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number
}

const useGames = (gameQuery: GameQuery) =>
  UseData<Game>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }, [gameQuery]);

export default useGames;