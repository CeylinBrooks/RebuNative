import axios from 'axios';

const routes = (action) => {
  const api = 'https://rebu-react-native.herokuapp.com/rebu/v2';

  const get = (callback) => {
    axios.get(api).then(response => {
      const array = response.data;
      callback(array);
    })
  }

  const add = (data, callback) => {
    // console.log(`inside addItem ${data.text}`, data.assignee, data.completed, data.difficulty);
    axios({
      method: 'post',
      url: api,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: data,
    }).then(response => {
      const newItem = response.data;
      callback(newItem);
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
