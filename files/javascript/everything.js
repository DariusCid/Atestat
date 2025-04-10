function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").classList.add("open");
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidebar").classList.remove("open");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // Save dark mode state to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.removeItem("darkMode");
    }
}

// Apply dark mode if it was enabled previously
window.onload = function() {
    // Check if dark mode is enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        // Temporarily disable transitions
        document.body.style.transition = "none";
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeSwitch").checked = true;

        // Re-enable transitions after a short delay
        setTimeout(() => {
            document.body.style.transition = "";
        }, 0);
    }
};

//remove this and replace "<div id="sidebar-container"></div>" in every html in every file when the project is done
fetch('../html text/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;

        // Add event listeners after the sidebar is loaded
        document.querySelector('.openbtn').addEventListener('click', openNav);
        document.querySelector('.closebtn').addEventListener('click', closeNav);
    })
    .catch(error => console.error('Error loading sidebar:', error));