<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const checklist = document.querySelectorAll('input[type="checkbox"]');

  checklist.forEach(box => {
    // Use page title + checkbox id to keep keys unique per page
    const key = `${document.title}_${box.id}`;

    // Restore saved state
    const saved = localStorage.getItem(key);
    if (saved === "true") {
      box.checked = true;
    }

    // Save state when changed
    box.addEventListener("change", () => {
      localStorage.setItem(key, box.checked);
    });
  });
});

// Sidebar functions
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
=======
document.addEventListener("DOMContentLoaded", () => {
  const checklist = document.querySelectorAll('input[type="checkbox"]');

  checklist.forEach(box => {
    // Use page title + checkbox id to keep keys unique per page
    const key = `${document.title}_${box.id}`;

    // Restore saved state
    const saved = localStorage.getItem(key);
    if (saved === "true") {
      box.checked = true;
    }

    // Save state when changed
    box.addEventListener("change", () => {
      localStorage.setItem(key, box.checked);
    });
  });
});

// Sidebar functions
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
>>>>>>> f7818e1e6e5964280369f300f5187bb3a1ac3c3b
