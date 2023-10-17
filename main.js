// Get all the skill detail elements
const skillDetails = document.querySelectorAll('.skill_details');

// Iterate over each skill detail element
skillDetails.forEach(skill => {
  // Find the percentage element and get its text value
  const percentageElement = skill.querySelector('.percentage');
  const percentage = parseInt(percentageElement.innerText);

  // Find the progress bar element
  const progressBar = skill.querySelector('.percentage_clr');

  // Set the initial width of the progress bar to 0%
  progressBar.style.width = '0%';

  // Function to update the width of the progress bar
  const updateProgressBar = () => {
    progressBar.style.width = `${percentage}%`;
  };

  // Call the updateProgressBar function initially
  updateProgressBar();

  // Attach an event listener to the window, and update the progress bar when the user scrolls
  window.addEventListener('scroll', () => {
    // Check if the skill detail element is in the viewport
    const rect = skill.getBoundingClientRect();
    const isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    // If the skill detail element is in the viewport, update the progress bar
    if (isInViewport) {
      updateProgressBar();
    } else {
      // If the skill detail element is not in the viewport, set the progress bar width to 0%
      progressBar.style.width = '0%';
    }
  });
});


// Select all list items with class "list"
const listItems = document.querySelectorAll('.list');

// Attach click event listener to each list item
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function(event) {
    // Remove "project-filter-active" class from currently active list item
    const currentActive = document.querySelector('.project-filter-active');
    currentActive.classList.remove('project-filter-active');

    // Add "project-filter-active" class to clicked list item
    event.target.classList.add('project-filter-active');
  });
}





  // Function to filter projects based on the selected class
  function filterProjects(filter) {
    const projectBoxes = document.querySelectorAll(".project-box");

    projectBoxes.forEach((box) => {
      if (filter === "all" || box.classList.contains(filter)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  }

  // Event listener for filter clicks
  const projectFilterItems = document.querySelectorAll(".project-filter li");
  projectFilterItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      projectFilterItems.forEach((item) =>
        item.classList.remove("project-filter-active")
      );
      this.classList.add("project-filter-active");
      filterProjects(filter);
    })
  });

  // Show all projects initially
  filterProjects("all");








// correction slide show
let currentImageIndex = 0;
let currentImages = [];
const slideshow = document.getElementById('slideshow');

function openSlideshow(images) {
  currentImages = images;
  currentImageIndex = 0;
  updateSlideshow();
  slideshow.style.display = 'block';
}

function closeSlideshow() {
  slideshow.style.display = 'none';
}

function updateSlideshow() {
  if (currentImages.length > 0) {
    const slideshowImg = document.getElementById('slideshow-img');
    slideshowImg.src = currentImages[currentImageIndex];
  }
}

document.getElementById('prev-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  updateSlideshow();
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  updateSlideshow();
});

// Close the slideshow if clicked outside the image
window.addEventListener('click', (event) => {
  if (event.target === slideshow) {
    closeSlideshow();
  }
});

// Prevent closing the slideshow when clicking inside the slideshow content
document.querySelector('.slideshow-content').addEventListener('click', (event) => {
  event.stopPropagation();
});

// Attach event handlers to project boxes
const projectBoxes = document.querySelectorAll('.project-box');
projectBoxes.forEach((projectBox) => {
  projectBox.addEventListener('click', () => {
    const imagesJSON = projectBox.querySelector('img').getAttribute('data-images');
    const images = JSON.parse(imagesJSON);
    openSlideshow(images);
  });
});






// new code for navbar
document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.querySelector(".menu.open");
  const closeMenuButton = document.querySelector(".menu.hide");
  const navContainer = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav_links ul li a");

  openMenuButton.addEventListener("click", function () {
    navContainer.style.left = "0";
    openMenuButton.classList.remove("active");
    closeMenuButton.classList.add("active");
    closeMenuButton.classList.add("posfix");
  });
  
  closeMenuButton.addEventListener("click", function () {
    navContainer.style.left = "-100%";
    openMenuButton.classList.add("active");
    closeMenuButton.classList.remove("active");
    closeMenuButton.style.display = "absolute";
    closeMenuButton.classList.remove("posfix");
  });

  // Close the navigation menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navContainer.style.left = "-100%";
      openMenuButton.classList.add("active");
      closeMenuButton.classList.remove("active");
      closeMenuButton.style.display = "absolute";
      closeMenuButton.classList.remove("posfix");
    });
  });
});




// gototop button
/*
const goToTopButton = document.querySelector(".goToTopButton");

// Function to check if user is at the top of the page
function isAtTop() {
  return window.scrollY === 0;
}

// Function to handle scroll event
function handleScroll() {
  if (!isAtTop()) {
    goToTopButton.classList.add('visible');
    setTimeout(() => {
      goToTopButton.classList.remove('visible');
    }, 2500); // Button will disappear after 2 seconds
  } else {
    goToTopButton.classList.remove('visible');
  }
}

// Add scroll event listener to window
window.addEventListener('scroll', handleScroll);

// Add click event listener to the button to scroll to the top
goToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
*/

// correction
document.addEventListener('DOMContentLoaded', () => {
  const goToTopButton = document.getElementById("goToTopButton");

  function isAtTop() {
    return window.scrollY === 0;
  }

  function handleScroll() {
    if (!isAtTop()) {
      goToTopButton.classList.add('visible');
      setTimeout(() => {
        goToTopButton.classList.remove('visible');
      }, 5000);
    } else {
      goToTopButton.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll);

  goToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});




// change theme
const theme = document.getElementById("theme");
theme.onclick = function () {
  document.body.classList.toggle("white_theme");
  if (document.body.classList.contains("white_theme")) {
    theme.src = "imgs/theme/moon.svg";
  }
  else  {
    theme.src = "imgs/theme/sun.svg";
  }
}