const CREAT_URL = (path = "") => `http://localhost:4040/api/villains/${path}`;

export const getById = id => {
  return fetch(CREAT_URL(id))
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getAll = id => {
  return fetch(CREAT_URL())
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const create = data => {
  return fetch(CREAT_URL(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const update = (id, data) => {
  return fetch(CREAT_URL(id), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const remove = id => {
  return fetch(CREAT_URL(id), {
    method: "DELETE"
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};
