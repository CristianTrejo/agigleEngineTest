import axios from 'axios'
export default axios.create({
  baseURL: 'http://interview.agileengine.com',
  headers: {
    Authorization: 'Bearer a81e44812741cc84798c2bd94238b605fadfc323'
  }
})
