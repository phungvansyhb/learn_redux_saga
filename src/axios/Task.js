import AxiosService from '../Utils/Axios'
import {API_ENDPOINT} from '../Contant/'

const url = "task";

export const  fetchDataTask = () => {
    return AxiosService.get(`${API_ENDPOINT}/${url}`)
}