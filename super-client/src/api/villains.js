const CREATE_URL = (path = "") => `http://localhost:4040/api/villains/${path}`;

export const getById = id => {
  return fetch(CREATE_URL(id))
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getAll = id => {
  return fetch(CREATE_URL())
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const create = data => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const update = (id, data) => {
  return fetch(CREATE_URL(id), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const remove = id => {
  return fetch(CREATE_URL(id), {
    method: "DELETE"
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const addHero = (id, data) => {
  return fetch(CREATE_URL(`${id}/hero`), {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const removeHero = (id, data) => {
  return fetch(CREATE_URL(`${id}/hero/${data.id}`), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};
