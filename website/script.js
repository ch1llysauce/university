const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function toggleDropdown(dropdownClass) {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
    
    var dropdownContent = document.querySelector(dropdownClass);
    dropdownContent.classList.toggle('show');

    window.addEventListener('click', function(event) {
        // Close the dropdown if clicked outside
        if (!event.target.matches('.dropdown-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
}
function toggleDropdown(selector) {
    // Get the targeted dropdown content
    const dropdownContent = document.querySelector(selector);
    
    // Toggle the visibility of the clicked dropdown
    dropdownContent.classList.toggle('show');
    
    // Close other dropdowns if open
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        if (dropdown !== dropdownContent) {
            dropdown.classList.remove('show');
        }
    });
}


function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}


function showVisionMission(event) {
    event.preventDefault();
    hideAllSections();  // Hide all sections
    const visionMissionSection = document.getElementById('vision-mission');
    visionMissionSection.style.display = 'block';  // Show the Vision & Mission section
    visionMissionSection.scrollIntoView({ behavior: 'smooth' });

    // Reset the browser history state
    history.replaceState(null, null, ' ');
}

function showCoreValues(event) {
    event.preventDefault();
    hideAllSections();  // Hide all sections
    const CoreValuesSection = document.getElementById('core-values');
    CoreValuesSection.style.display = 'block';  // Show the Vision & Mission section
    CoreValuesSection.scrollIntoView({ behavior: 'smooth' });

    // Reset the browser history state
    history.replaceState(null, null, ' ');
}

function showSealLogo(event) {
    event.preventDefault();
    hideAllSections();  // Hide all sections
    const SealLogoSection = document.getElementById('seal-logo');
    SealLogoSection.style.display = 'block';  // Show the Vision & Mission section
    SealLogoSection.scrollIntoView({ behavior: 'smooth' });

    // Reset the browser history state
    history.replaceState(null, null, ' ');
}

function showCCS(event) {
    event.preventDefault();
    hideAllSections();  // Hide all sections
    const ccs = document.getElementById('ccs');
    ccs.style.display = 'block';  // Show the Vision & Mission section
    ccs.scrollIntoView({ behavior: 'smooth' });

    // Reset the browser history state
    history.replaceState(null, null, ' ');
}



registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});


dropdownToggle.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});


// Close the dropdown if the user clicks outside of it
