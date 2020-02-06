import axios from 'axios'

const clickUrl = `${process.env.REACT_APP_API_URL}/click`
const userUrl = `${process.env.REACT_APP_API_URL}/user`

const getClicks = async () => {
  const response = await axios.get(clickUrl)
  return response.data
}

const initClicks = async () => {
  const request = await axios.post(clickUrl)
  return request.data
}

const addClick = async (id) => {
  const request = await axios.put(`${clickUrl}/${id}`)
  return request.data
}

const reducePoint = async (id) => {
  const request = await axios.put(`${userUrl}/${id}`)
  return request.data
}

const addPoints = async (id, points) =>{
  const body ={
    points: points
  }
  const request = await axios.put(`${userUrl}/${id}/add`, body)
  return request.data
}

export default { getClicks, initClicks, addClick, reducePoint, addPoints }