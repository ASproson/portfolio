let fullStack = document.getElementById('full_stack');
let portfolioProject = document.getElementById('portfolio_project');
let languagesFrameworks = document.getElementById('languages_frameworks');

function hover_change () {
  fullStack.style.color = 'red';
}

function hover_reverse () {
  fullStack.style.color = '';
}

fullStack.addEventListener('mouseover', hover_change);
fullStack.addEventListener('mouseleave', hover_reverse);

//

function hover_change_portfolio () {
  portfolio_project.style.color = 'green';
}

function hover_reverse_portfolio () {
  portfolio_project.style.color = '';
}

portfolio_project.addEventListener('mouseover', hover_change_portfolio);
portfolio_project.addEventListener('mouseleave', hover_reverse_portfolio);

//

function hover_change_languages () {
  languagesFrameworks.style.color = 'blue';
}

function hover_reverse_languages () {
  languagesFrameworks.style.color = '';
}

languagesFrameworks.addEventListener('mouseover', hover_change_languages);
languagesFrameworks.addEventListener('mouseleave', hover_reverse_languages);
