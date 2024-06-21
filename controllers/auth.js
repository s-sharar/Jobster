const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { 
    name: user.name,
    lastName: user.lastName,
    location: user.location,
    email: user.email,
    token,
  }})
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { 
    name: user.name,
    lastName: user.lastName,
    location: user.location,
    email: user.email,
    token,
  }})
}

const updateUser = async(req, res) => {
  const {email, name, lastName, location} = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOneAndUpdate({_id: req.user.userId}, req.body);
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { 
    name: user.name,
    lastName: user.lastName,
    location: user.location,
    email: user.email,
    token,
  }})
}

module.exports = {
  register,
  login,
  updateUser
}
