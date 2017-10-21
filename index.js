const NBA = require('nba')
const url = require('url')

module.exports = async request => {
  const query = url.parse(request.url, true).query

  if (!query.text) {
    return 'You must supply a players name'
  }

  const baller = await NBA.findPlayer(query.text)

  const stats = baller ? await NBA.stats.playerInfo({ PlayerID: baller.playerId }) : false

  if (stats && stats.playerHeadlineStats) {
  	const {
  		pts,
  		ast,
  		reb,
  	} = stats.playerHeadlineStats[0]

  	const name = baller.firstName + ' ' + baller.lastName

  	return `
  		${name} had ${pts ? pts : 'unfetchable'} points,
  		${reb ? reb : 'unfetchable'} rebounds, and ${ast ? ast :`unfetchable`} assits.
  	`
  }

  return `
  	Couldn't find ${query.text}. I'm so sorry :(
  `
}