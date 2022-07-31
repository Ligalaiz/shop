export const set = (name, value) => window.localStorage.setItem(name, JSON.stringify(value));

export const get = (name) => {
  const result = localStorage.getItem(name);
  return result ? JSON.parse(result) : null;
};

export const del = (name) => localStorage.removeItem(name);
