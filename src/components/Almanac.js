import React from 'react'

import GamesList from './GamesList'
import useGames from './useGames'

export default () => {
  const { games } = useGames()

  return (
    games.length
      ? <GamesList games={games} />
      : 'Loading...'
  )
}
