const getData = async userId => {
  const data = await fetch(`https://api.github.com/users/${userId}`).then(resp => resp.json());

  return data;
};

export const getUsersBlogs = usersIdArray => {
  const promisesArr = usersIdArray.map(el => getData(el).then(resp => resp.blog));
  return Promise.all(promisesArr);
};

getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList));
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList));
