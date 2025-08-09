
import Api from './api';

export async function User(id:string) {
    return Api.get('/users/get',{params:{id}});
}

export async function Users() {
    return Api.get('/users/getAll')
}