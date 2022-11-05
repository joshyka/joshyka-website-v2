// nav toggle
let links = document.querySelectorAll(".links");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// toggle navbar in mobile view
const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  ul.classList.toggle("active");
});


const aboutMe = () => {
  const github = document.getElementById('github');
  const linkedin = document.getElementById('linkedin');
  const info = document.getElementById('info');
  github.href = 'https://github.com/joshyka';
  linkedin.href = 'https://www.linkedin.com/in/joshykajothi16/';
  info.innerHTML = `Graduated with Master’s degree in Embedded Electronic System Design from Chalmers University of Technology, Sweden and Bachelor’s degree in Electronics & Communication Engineering from Pondicherry University, India. Having my internship and work experiences from esteemed organizations like I.S.R.O, B.S.N.L and now at Volvo Cars. <br><br>

  Currently working in an international agile team at Volvo Cars R&D to enable the company to be a data-driven software company. My job responsibilities involves working with both hardware and software,which makes it fun. <br><br>`;
}

const skills = () => {
  const skills = ['C/C++', 'Python', 'Java', 'Matlab', 'Simulink' , 'Lua scripting' , 'GPU Computing' , 'Machine Learning' , 'Linux OS', 'ISO26262' , 'Scrum' , 'SAFe' , 'Docker', 'Git/Gerrit','Web Development',];
  const skillsDiv = document.getElementById('skills');
  skills.forEach((skill)=> skillsDiv.innerHTML += `<p class="skill-name">${skill}</p>`)
}

aboutMe()
skills()