import axios from 'axios'
import  {baseUrl} from './components/constants/constants'

const instance = axios.create({
    baseURL: baseUrl,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance
