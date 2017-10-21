const NBA = require('nba')
const url = require('url')

exports.slashBallers = (req, res) => {
  const query = url.parse(req.url, true).query
  if (!query.text) {
    return res.send('You must supply a players name')
  }

  const baller = NBA.findPlayer(query.text);

  if (!baller || !baller.firstName) {
    return res.send(`Couldn't find player with name ${query.text}`)
  } 

  const data = NBA.stats.playerInfo({ PlayerID: baller.playerId })
    .then((stats) => {
      if (stats && stats.playerHeadlineStats) {
        const {
          pts,
          ast,
          reb,
        } = stats.playerHeadlineStats[0]

        const name = baller.firstName + ' ' + baller.lastName

        const message = `
          ${name} had ${pts ? pts : 'unfetchable'} points,
          ${reb ? reb : 'unfetchable'} rebounds, and ${ast ? ast :`unfetchable`} assits.
        `
        res.send(message);
      }
    });
}