const userDataRequest = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Failed to fetch');
  }
};

const getUsersBlogs = userIdArr => {
  try {
    const promisesArr = userIdArr.map(el => userDataRequest(el).then(response => response.blog));

    return Promise.all(promisesArr);
  } catch {
    throw new Error('Failed to fetch');
  }
};

// getUsersBlogs(['google', 'facebook']).then(linksList => console.log(linksList));
