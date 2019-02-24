const users = [
  {
    id: 1,
    email: 'officialtoanurag@gmail.com',
    password: 'test',
    firstName: 'Anurag',
    lastName: 'V'
  }
]

async function authenticate ({ email, password }) {
  console.log('email, password', email, password)
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
