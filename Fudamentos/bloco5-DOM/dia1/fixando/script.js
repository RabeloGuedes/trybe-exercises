let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = "#59B16A";

let emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = "#F49E83";

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasks[0].style.backgroundColor = "#F9DB5E";

let emergencySubtitle = document.querySelectorAll('.emergency-tasks div h3');

for (let index = 0; index < emergencySubtitle.length; index += 1) {
  emergencySubtitle[index].style.backgroundColor = "#AD70F3"
}

let noEmergencySubtitle = document.querySelectorAll('.no-emergency-tasks div h3');

for (let index = 0; index < noEmergencySubtitle.length; index += 1) {
  noEmergencySubtitle[index].style.backgroundColor = "#232525";
}

let footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = "#123633";
footerContainer.style.position = 'fixed';
footerContainer.style.bottom = '0';
footerContainer.style.width = '100%';
