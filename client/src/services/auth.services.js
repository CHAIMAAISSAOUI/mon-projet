import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}`
})

export async function register (username, email, password) {
  try {
    const response = await axiosClient.post('/register', {
      username,
      email,
      password
    })
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
