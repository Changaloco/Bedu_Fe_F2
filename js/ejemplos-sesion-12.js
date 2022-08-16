//Sesion 12 API
//!Ejemplo1
const imageContainer = document.getElementById("imagenes-tierra");

getImagesFromNasa().then(function (data) {
  console.log(data);

  data.forEach(function (data) {
    const img = document.createElement("img");
    img.src = getImageUrl(data);
    img.alt = data.caption;

    imageContainer.appendChild(img);
  });
});

function getImagesFromNasa() {
  return fetch("https://epic.gsfc.nasa.gov/api/natural").then(function (
    response
  ) {
    return response.json();
  });
}

function getImageUrl(data) {
  /*
   * URL should look like this:
   * https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
   */
  const baseImageUrl = "https://epic.gsfc.nasa.gov/archive/natural";
  const date = data.date // Looks like 2020-06-19 02:33:19
    .substr(0, 10) // Get first 10 characters from string
    .split("-"); // Split year, month and day into an array

  return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`;
}
//*Ejemplo2
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("button");

const results = document.getElementById("results");

searchButton.addEventListener("click", searchGIFs);

function searchGIFs() {
  results.innerHTML = "";
  const search = searchInput.value;

  if (search) {
    const formattedSearch = formatSearchString(search);
    const url = buildUrl(formattedSearch);

    return getGiphyResults(url).then(function (gifs) {
      console.log(gifs);
      gifs.forEach(function (gif) {
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;

        results.appendChild(img);
      });
    });
  }
}

function formatSearchString(search) {
  return search.replace(/ /g, "+");
}

function buildUrl(search) {
  const API_KEY = "hCZPgLiRkhbBkuBGuZfy0bVBaAEqCfAH"; // Provided by GIPHY
  const baseUrl = "http://api.giphy.com/v1/gifs/search";

  return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
}

function getGiphyResults(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
//!Reto1
const githubApiUrl = "https://api.github.com/users";
async function getInfoUsersGithub(user) {
  try {
    const response = await fetch(githubApiUrl + "/" + user);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
const app = document.getElementById("app");
function createCard(user) {
  const listRepos = createReposList(user.repos);
  const data = user.info;
  let card = document.createElement("div");
  card.className = "card";
  let img = document.createElement("img");
  img.src = data.avatar_url;
  img.alt = data.login;
  card.appendChild(img);
  let title = document.createElement("h2");
  title.textContent = data.login;
  card.appendChild(title);
  let link = document.createElement("a");
  link.href = data.html_url;
  link.textContent = "Github";
  link.className = "button";
  link.target = "blank";
  card.appendChild(listRepos);
  card.appendChild(link);
  app.appendChild(card);
}
function getGithubUsers(users) {
  const usersListInfo = [];
  for (userInd of users) {
    getInfoUsersGithub(userInd).then(function (result) {
      getUserRepos(result.login, 5).then(function (repos) {
        gitUser = {
          info: result,
          repos: repos,
        };
        createCard(gitUser);
        usersListInfo.push(gitUser);
      });
    });
  }
  return usersListInfo;
}
const userList = ["Changaloco", "LittleToxicBoy", "mojombo", "defunkt"];
// console.log(getGithubUsers(userList));
//*Reto2
function getUserRepos(user, number) {
  return fetch(
    githubApiUrl + "/" + user + "/repos?per_page=" + number + "&order=asc"
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      return data;
    })
    .catch((err) => console.log(err));
}
function createReposList(repos) {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const summaryText = document.createTextNode("Repositories:");
  summary.appendChild(summaryText);
  details.appendChild(summary);
  repos.forEach(function (repo) {
    const link = document.createElement("a");
    const linkText = document.createTextNode(repo.name);

    link.appendChild(linkText);
    link.href = repo.html_url;
    link.target = "_blank";
    link.className = "button-repo";

    details.appendChild(link);
  });

  return details;
}

//!Reto3
function getTotalUsersGit() {
  return fetch(githubApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return randomizeInformation(data).slice(0, 4);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function getALLRepositories(user) {
  return fetch(githubApiUrl + "/" + user + "/repos")
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      return randomizeInformation(data).slice(0, 5);
    })
    .catch((err) => console.log(err));
}

function randomizeInformation(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomUsers() {
  usersListInfo = [];
  getTotalUsersGit().then(function (users) {
    users.forEach(function (user) {
      getALLRepositories(user.login).then(function (repos) {
        const gitUser = {
          info: user,
          repos: repos,
        };
        createCard(gitUser);
        usersListInfo.push(gitUser);
      });
    });
  });
  console.log(usersListInfo);
}

getRandomUsers();
