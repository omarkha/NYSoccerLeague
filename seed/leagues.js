const db = require('../db')
const { League } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const leagues = [
    {
        county: "New York County"
    },
    {
        county: "Orange County"
    }
  ]

  await League.insertMany(leagues)
  console.log('Created leagues!')
}
const run = async () => {
  await main()
  db.close()
}

run()