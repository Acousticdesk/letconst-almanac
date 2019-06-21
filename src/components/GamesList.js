import React from 'react'

import { getGameId } from '../utils'
import Result from './Result'

export default ({ games }) => (
  <>
    <h1>1979</h1>
    {games.map(game => (
      <Result
        key={getGameId(game)}
        game={game}
      />
    ))}
  </>
)
