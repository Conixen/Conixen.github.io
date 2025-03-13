const BASE_URL = "https://api.github.com/users/Conixen/repos";// Global variable 
// const API_KEY = "";

async function getPublicRepos() {
    try {
        const response = await fetch(BASE_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        showPublicRepos(data); 
    } catch (error) { 
        console.error("GitHub Error:", error);
    }
}
// getPublicResp();

// function showPublicRespos(data) {
//     const portfoliGitHTML = `   <div class="gitReposBox">
//         <h2>Title: ${repoTitle}<h2>
//         <p>Description: ${repoDescription}</p>
//         <p>Link: ${repoLink}</p>
//         </div>`;
    
//         portfoliGitHTML
// }
function showPublicRepos (data) {
    const projectsContainer = document.getElementById('projects-container');
    const loading = document.getElementById('loading');

    // Ta bort "Loading..." texten
    loading.style.display = 'none';

    // Loopa genom varje repository och skapa ett element för det
    data.forEach(repo => {
        const repoBox = document.createElement('div');
        repoBox.className = 'project';

        const repoTitle = document.createElement('h2');
        repoTitle.textContent = repo.name;

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description || 'No description available.';

        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = 'GitHub Repository';
        repoLink.className = 'github-link';

        repoBox.appendChild(repoTitle);
        repoBox.appendChild(repoDescription);
        repoBox.appendChild(repoLink);

        projectsContainer.appendChild(repoBox);
    });
}

// Kör funktionen för att hämta repositories när sidan laddas
document.addEventListener('DOMContentLoaded', getPublicRepos);