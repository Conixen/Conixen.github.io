document.addEventListener("DOMContentLoaded", getDataResume);

async function getDataResume() {
    try {
        const dataResponse = await fetch ("data.json");
        // console.log(dataResponse)
        if (!dataResponse.ok) {
            throw new Error("fel 1");
        }
        const data = await dataResponse.json();
        // console.log(data);
        showEducationInfo(data.Education)
        showExperienceInfo(data.Work)
        showContactInfo(data.Contact)
    }
    catch(error) {
        console.log("fel 2", error); 
    }
}

function showEducationInfo(Education) {

    const educationListElem = document.getElementById("my-education");
    Education.forEach(element => {

        schoolElement = document.createElement("div");
        schoolElement.classList.add("kurs");
        
        schoolElement.innerHTML =`
        <h2>${element.school}</h2>
        <p><strong>Programme:</strong> ${element.course}</p>
        <p><strong>Year:</strong> ${element.lenght}</p>`;

        educationListElem.appendChild(schoolElement)
    });
}
function showExperienceInfo(Work) {
    const workListElem = document.getElementById("my-experience");
    Work.forEach(element => {

        workElement = document.createElement("div");
        workElement.classList.add("kurs");
        
        workElement.innerHTML =`
        <h2>${element.workplace}</h2>
        <p><strong>Title:</strong> ${element.title}</p>
        <p><strong>Time:</strong> ${element.time}</p>`;

        workListElem.appendChild(workElement)
    });
}
function showContactInfo(Contact) {
    const contactElement = document.getElementById("contact-info");

    contactElement.innerHTML = `
        <h2>${Contact.fullname}</h2>
        <p><strong>Mail:</strong> ${Contact.email}</p>
        <p><strong>###:</strong> ${Contact.number}</p>
    `
}