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
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeSwitch").checked = true;
    }
}

// Load the sidebar dynamically
fetch('../html text/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));