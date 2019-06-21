import { useEffect, useState } from 'react'

import { apiEndpoint } from '../config'

const DEFAULT_GAMES = []
const ERROR_MESSAGE = 'Oops.. It seems like you\'ve failed to become a billionaire!'

export default () => {
  const [games, setGames] = useState(DEFAULT_GAMES)

  useEffect(() => {
    fetch(apiEndpoint)
      .then(res => res.json())
      .then(res => setGames(res.data))
      .catch(() => alert(ERROR_MESSAGE))
  }, [])

  useEffect(() => {
    if (!games.length) return
    document.title = `${games.length} NBA games - GRAYS SPORT ALMANAC`
  }, [games])

  return { games }
}
