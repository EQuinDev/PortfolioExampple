const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  const percent = skill.querySelector('.progress').style.width;
  skill.querySelector('.percent').setAttribute('data-percent', percent);
});
