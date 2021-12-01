import { axiosClient } from "./axiosClient"
import { isAuthenticated } from "./userApi";
const user = isAuthenticated()
const todoApi = {
    getPages(number) {
        const url = `/api/todos?page=${number}`;
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        });
    },
    getId(id) {
        const url = `/api/todos/${id}`;
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        });
    },
    remove(id){
      const url = `/api/todos/${id}`
      return axiosClient.delete(url, {
          headers: {
              Authorization: `Bearer ${user.token}`
          }
      })
    },
    update(data, id){
       const url = `/api/todos/${id}`
       return axiosClient.put(url, data, {
           headers: {
               Authorization: `Bearer ${user.token}`
           }
       })
    },
    add(data){
        const url = `/api/todos`
        return axiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
    }
}
export default todoApi