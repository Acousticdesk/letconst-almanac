import React from 'react'

import { getHomeTeamName, getHomeTeamScore, getVisitorTeamName, getVisitorTeamScore } from '../utils/getters'

export default ({ game }) => (
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
