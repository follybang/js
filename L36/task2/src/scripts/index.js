import { fetchUserData, fetchUserRepos } from './gateways.js';
import { renderUserData } from './renderUser.js';
import { renderRepoList } from './renderReposList.js';
import { hideSpinner, showSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showUserButtonElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const reposListElem = document.querySelector('.repo-list');

const onClickButton = async () => {
  reposListElem.innerHTML = '';
  showSpinner();
  const userName = userNameInputElem.value;

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const userReposList = await fetchUserRepos(userData.repos_url);
    renderRepoList(userReposList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

// showUserButtonElem.addEventListener('click', onClickButton);
