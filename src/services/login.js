import axios from 'axios'
const url = `${process.env.REACT_APP_API_URL}/login`

const login = async (credentials) => {
  const response = await axios.post(url, credentials)
  return response.data
}

export default { login }