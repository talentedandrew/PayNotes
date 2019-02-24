const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'test',
    firstName: 'Dummy',
    lastName: 'User'
  }
]

async function authenticate ({ email, password }) {
  const user = users.find(u => u.email === email && u.password === password)
  if (user) {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }
}

async function getAll () {
  return users.map(u => {
    const { password, ...userWithoutPassword } = u
    return userWithoutPassword
  })
}
module.exports = {
  authenticate,
  getAll
}
