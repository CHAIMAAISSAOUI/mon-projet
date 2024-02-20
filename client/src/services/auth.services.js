import axios from 'axios'
import toast from 'react-hot-toast'

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}`
})

export async function register (username, email, password) {
  try {
    const response = await axiosClient.post('/register', {
      username,
      email,
      password
    });
    console.log (response);
    toast.success(response.data.massage)

    return response
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.massage)
    return error
  }
}



export async function login ( email, password) {
  try {
    
    const response = await axiosClient.post('/login', {
    
      email,
      password
    } ,{withCredentials: true});
    console.log(response)
    toast.success(response.data.massage)
    return response
  } catch (error) {
    console.log(error,"here")
    toast.error(error?.response?.data?.message)
    return error
  }
}
