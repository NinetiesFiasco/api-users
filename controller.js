const User = require('./model')

const initial = (req, res) => {
  return res.status(200).send('Hi from API Users')
}

const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    return res.status(200).json({message: 'User created'})
  } catch (err) {
    return res.status(400).json({err})
  }
}

module.exports = {initial, create}