import axios from 'axios'

const url = `${process.env.REACT_APP_API_URL}/signup`

const signup = async (credentials) => {
  const response = await axios.post(url, credentials)
  return response.data
}

export default { signup }