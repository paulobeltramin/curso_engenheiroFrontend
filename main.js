



document.addEventListener('DOMContentLoaded', function () {


    const avatarElement = document.getElementById("avatar");
    const name = document.getElementById("name");
    const bio = document.getElementById("bio");
    const profile = document.getElementById("profile");
    const repositorio = document.getElementById("repositorio");
    const seguidores = document.getElementById("seguidores");
    const seguindo = document.getElementById("seguindo");
    const button = document.getElementById("redirect")


    function setData() {

        const gitApi = "https://api.github.com/users/paulobeltramin"

        fetch(gitApi)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json)
                avatarElement.src = json.avatar_url;
                name.innerHTML = json.name;
                bio.innerHTML = json.bio;
                profile.innerHTML = `@${json.login}`;
                repositorio.innerHTML = json.public_repos;
                seguidores.innerHTML = json.followers;
                seguindo.innerHTML = json.following;
                button.href = json.html_url

            })
            .catch(function (erro) {
                alert(erro)
            })
    }

    setData()


})





