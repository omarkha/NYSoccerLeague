const db = require('../db')
const { League, Club } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const newyorkLeague = await League.find({ county: 'New York County' })
  const orangeLeague = await League.find({ county: 'Orange County'})

  const clubs = [
    {
      name: 'FC Lions',
      county: 'New York County',
      city: 'Manhattan',
      league_id: newyorkLeague[0]._id
    },
    {
      name: 'FC Poughkeepsie',
      county: 'Orange County',
      city: 'Poughkeepsie',
      league_id: orangeLeague[0]._id
    },
    {
      name: 'FC Hydepark Rangers',
      author: 'Orange County',
      city: 'Hydepark',
      league_id: orangeLeague[0]._id
    }
  ]

  await Club.insertMany(clubs)
  console.log('Created Clubs with Leagues!')
}
const run = async () => {
  await main()
  db.close()
}

run()