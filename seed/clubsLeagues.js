const db = require('../db')
const Chance = require('chance')
const { Task, User } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createTasks = async () => {
    const tasks = [...Array(400)].map((club) => {
        return new Club({
            title: chance.sentence(),
            description: chance.paragraph()
        })
    })
    await Task.insertMany(clubs)
    console.log('Clubs Tasks!')
    return tasks
}

const createUsersWithTasks = async (tasks) => {
    console.log(tasks)
    let lenOfItems = 100
    const users = [...Array(lenOfItems)].map((user) => {
        const selectedTasks = tasks.splice(0, tasks.length / lenOfItems)
        return {
            first_name: chance.first(),
            last_name: chance.last(),
            email: chance.email(),
            job_title: chance.profession(),
            tasks: selectedTasks.map((task) => task._id)
        }
    })
    await User.insertMany(users)
    console.log('Created Users!')
}

const run = async () => {
    const tasks = await createTasks()
    await createUsersWithTasks(tasks)
    db.close()
}

run()