import axios from 'axios'
// const CallApi = ( method , endPoint ,data) =>{
//     axios({
//         method : method,
//         url: `${url.API_ENDPOINT}/${endPoint}`,
//         data:data
//     }).then( (err) => {
//         console.log(err)
//     })
// }
// export default CallApi;
class AxiosService {
    constructor () {
        this.instance = axios.create();
       this.instance.interceptors.response.use(this.handleSuccess , this.handleFail)
    }
    handleSuccess (response){
        return response
    }
    handleFail (error){
        return Promise.reject(error)
    }
    get(url){
        return this.instance.get(url)
    }
    post(url){
        return this.instance.post(url)
    }
    put(url){
        return this.instance.put(url)
    }
    delete(url){
        return this.instance.delete(url)
    }

}
export default new AxiosService();