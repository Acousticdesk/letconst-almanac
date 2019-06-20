import React, { useState, useEffect } from 'react'

import { getGameId } from '../utils'
import { apiEndpoint } from '../config'
import { getHomeTeamName, getHomeTeamScore, getVisitorTeamName, getVisitorTeamScore } from '../utils/getters'

const Result = ({ game }) => (
  <div className="result">
    <i>{getHomeTeamName(game)}</i>
    {' '}
    <strong>
      {getHomeTeamScore(game)}
    </strong>
    {' '}
    -
    {' '}
    <i>{getVisitorTeamName(game)}</i>
    {' '}
    <strong>
      {getVisitorTeamScore(game)}
    </strong>
  </div>
)

const DEFAULT_GAMES = []
const ERROR_MESSAGE = 'Oops.. It seems like you\'ve failed to become a billionaire!'

const useGames = () => {
  const [games, setGames] = useState(DEFAULT_GAMES)

  useEffect(() => {
    fetch(apiEndpoint)
      .then(res => res.json())
      .then(res => setGames(res.data))
      .catch(() => alert(ERROR_MESSAGE))
  }, [])

  return {games}
}

const GamesList = ({ games }) => (
  <>
    <h1>1979</h1>
    {games.map(game => {

      return (
        <Result
          key={getGameId(game)}
          game={game}
        />
      )
    })}
  </>
)

export default () => {
  const { games } = useGames()

  return (
    games.length
      ? <GamesList games={games} />
      : 'Loading...'
  )
}
