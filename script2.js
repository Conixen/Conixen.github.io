const BASE_URL = "https://api.github.com/Conixen?tab=repositories"; // Global variable 
// const API_KEY = "";

async function getPublicRepos() {
    try{
        const response = await fetch(BASE_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        showPublicResp(data)
    }
    catch (error) { 
        console.error("GitHub Error:", error);
    }
}
// getPublicResp();

function showPublicRespos(data) {
    const portfoliGitHTML = `   <div class="gitReposBox">
        <h2>Title: ${repoTitle}<h2>
        <p>Description: ${repoDescription}</p>
        <p>Link: ${repoLink}</p>
        </div>`;
    
        portfoliGitHTML
}