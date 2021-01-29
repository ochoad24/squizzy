import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/TopPlayers.css'
import leaderboard from './styles/Leaderboard.css'
import Squizzy from './Squizzy'

const Crown = () => (
  <svg strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
  </svg>
)

const TopPlayers = props => {
  const {players} = props
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Squizzy mouth="happy" className={styles.squizzy} />
        <div>
          <h1>Match finished</h1>
          <p>Thank you for playing!</p>
        </div>
      </div>
      <h2>Top players</h2>
      <ul className={leaderboard.list}>
        {players.map((player, index) => (
          <li className={leaderboard.item} key={player._key}>
            <span className={styles.crown} data-rank={index} aria-label={index + 1} role="img">
              <Crown />
            </span>
            <span className={leaderboard.name}>{player.name}</span>
            <span className={leaderboard.points}>{Math.round(player.score)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

TopPlayers.propTypes = {
  players: PropTypes.array
}

export default TopPlayers
