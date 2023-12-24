const nameInput = document.getElementById("username");
const submitButton = document.getElementById("submit");
const about = document.getElementById("about");
const pictureUrl = "https://avatars.githubusercontent.com/u/";

submitButton.addEventListener("click", () => {
  const name = nameInput.value;
  const apiUrl = "https://api.github.com/users/" + name;

  about.innerHTML = '<p class="text-gray-600">Getting your stats...</p>';

  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((userDetails) => {
      setTimeout(() => {
        about.innerHTML = `
          <div id="details" class="mt-4">
            <img src="${userDetails.avatar_url}" class="mx-auto rounded-full" height="250px" width="250px"> <br>
            <span class="text-xl font-bold">${userDetails.name}</span> <br>
            <b><i class="text-gray-600">${userDetails.bio}</i></b> <br>
            Followers: ${userDetails.followers} <br>
            Following: ${userDetails.following} <br>
            Location: ${userDetails.location} <br>
            Repository count: ${userDetails.public_repos}
          </div>`;
      }, 2000); 
    })
    .catch((error) => {
      about.innerHTML = '<p class="text-red-500">Error fetching data. Please try again.</p>';
    });
});
