import axios from 'axios'

const clickUrl = `${process.env.REACT_APP_API_URL}/click`

const getClicks = async () => {
  const response = await axios.get(clickUrl)
  return response.data
}

const initClicks = async () => {
  const request = await axios.post(clickUrl)
  return request.data
}

const addClick = async (amount, id) => {
  const request = await axios.put(`${clickUrl}/${id}`, amount)
  return request.data
}

export default { getClicks, initClicks, addClick }