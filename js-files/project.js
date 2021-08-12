class Project {
  constructor(
    title,
    language,
    description,
    image,
    altImg,
    website,
    codeLocation
  ) {
    this.title = title;
    this.language = language;
    this.description = description;
    this.image = image;
    this.altImg = altImg;
    this.website = website;
    this.codeLocation = codeLocation;
  }
}

const Projects = [
  new Project(
    "Surprise",
    "JavaScript | HTML/CSS",
    "API call - responsive design - gitflow - team work - grid and flex layout - count-down clock.",
    "images/cakes.JPG",
    "general look of the surprise website",
    "https://catalinac3.github.io/surprise/",
    "https://github.com/catalinac3/surprise.git"
  ),
  new Project(
    "Unit Converter",
    "React",
    "Use of state and customized react class components",
    "images/unitConverter.JPG",
    "length unit converter",
    "https://catalinac3.github.io/unit-converter/",
    "https://github.com/catalinac3/unit-converter"
  ),
  new Project(
    "Book finder",
    "React",
    "Use of React functional components, and browser local storage",
    "images/bookFinder.JPG",
    "book finder general look",
    "https://book-finder-by-caty.netlify.app/",
    "https://github.com/catalinac3/Book-search"
  ),
  new Project(
    "Tic-tac-toe",
    "Python | Tkinter",
    "Event oriented programming: use of buttons - input field - grid layout - frames - score tracking.",
    "images/ai_tkinter_tic_tac_toe1.PNG",
    "tic-tac-toe graphical interface",
    "",
    "https://github.com/catalinac3/Tic-tac-toe"
  ),
];
projectsDiv = document.querySelector("#projects-div");
console.log(projectsDiv);
showProjects(Projects);

function websiteDisplay(project) {
  if (project.website) {
    const show = `  
        <form
            action=${project.website}
            method="get"
            target="_blank"
        >
            <button type="submit">Website</button>
        </form>`;
    return show;
  } else {
    return "";
  }
}

function showProjects(projectArray) {
  projectArray.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-item");
    projectsDiv.appendChild(projectDiv);

    projectDiv.innerHTML = `
        <div class="project-image">
          <img
            src= ${project.image}
            alt= ${project.altImg}
          />
        </div>
        <div class="project-text">
          <h3> ${project.title}</h3>
          <p>${project.language}</p>
          <p> ${project.description}</p>
        </div>
 
        <div class="project-buttons">
          ${websiteDisplay(project)}
          <form
            action=${project.codeLocation}
            method="get"
            target="_blank"
          >
            <button type="submit">Code</button>
        </form>
      </div>`;
  });
}
