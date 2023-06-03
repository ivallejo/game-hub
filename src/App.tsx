import {Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import {useState} from 'react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import {Genre} from './hooks/useGenres';
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from './hooks/useGames';
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState({} as GameQuery)
//  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
//  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)


  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // 1024px
    }}
          templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
          }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelecGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5F}>
            <PlatformSelector selectedPlatform={gameQuery.platform}
                              onSelectPlatform={(platform) =>
                                setGameQuery({...gameQuery, platform})}/>
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder}
                        onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </Flex>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App;
