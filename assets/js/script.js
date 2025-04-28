const allLinks = document.querySelectorAll(".side-item a"); // select links inside side-item
let currentLocation = window.location.href.split("/").pop(); // get last part

function updateActiveLink(newLinkElement) {
  // Remove 'active' class from all parent elements
  document.querySelectorAll(".side-item.active").forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' to the new one
  if (newLinkElement) {
    newLinkElement.parentElement.classList.add("active");
  }
}

// Set the active link on page load
const initialLink = Array.from(allLinks).find(
  (link) => link.getAttribute("href") === currentLocation
);
if (initialLink) {
  updateActiveLink(initialLink);
}

// Add event listener to each link
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === currentLocation) {
      console.log("Cannot do anything");
    } else {
      currentLocation = href;
      updateActiveLink(link);
    }
  });
});
