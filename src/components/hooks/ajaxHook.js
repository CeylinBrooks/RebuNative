import axios from 'axios';

const routes = (action) => {
  const api = 'https://brsmith-auth-api.herokuapp.com/api/v2/users';

  const get = (callback) => {
    axios.get(api).then(response => {
      const array = response.data;
      callback(array);
    })
  }

  const add = (data, callback) => {
    console.log('inside ajax', data);
    // console.log(`inside addItem ${data.text}`, data.assignee, data.completed, data.difficulty);
    axios({
      method: 'post',
      url: api,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: data,
    }).then(response => {
      console.log('response data', response);
      const newUser = response.data;
      callback(newUser);
    }).catch(err => console.log(err))
  }

  const remove = (id, callback) => {
    axios({
      method: 'delete',
      url: `${api}/${id}`
    }).then(response => {
      callback();
    }).catch(err => console.log(err));
  }

  const update = (id, data, callback) => {
    axios({
      method: 'put',
      url: `${api}/${id}`,
      data: data
    }).then(response => {
      const updatedItem = response.data;
      callback(updatedItem);
    }).catch(err => console.log(err));
  }

  return [
    get,
    add,
    remove,
    update
  ]
}
export default routes;
