//Toggle Mobile

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.mobile-menu .checkbox');
    const lines = document.querySelectorAll('.mobile-menu .hamburger-lines .line');
    const mobileMenu = document.querySelector('.mobile-menu-container .nav-links'); // Ensure this exists
    const modal = document.querySelector('.modal'); // Ensure this exists
    const closeModalButton = document.querySelector('.modal .close-button'); // Ensure this exists
    const modalLinks = document.querySelectorAll('.modal-content li'); // Ensure this exists
  
    function toggleMenu() {
        if (mobileMenu) {
            mobileMenu.classList.toggle('active');
        }
        lines.forEach(line => line.classList.toggle('active'));
        if (modal) {
            modal.classList.toggle('active');
        }
    }
  
    checkbox.addEventListener('change', toggleMenu); // Fix: added 'change' event
  
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            if (modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Add event listener to each li inside .modal-content
    modalLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (modal) {
                modal.classList.remove('active');
            }
            lines.forEach(line => line.classList.remove('active')); // Remove active class from lines
        });
    });
});

//GSAP Smooth

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 121; // Adjust according to your navbar height
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  //navbar-script
/*
  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.mobile-menu .checkbox');
    const lines = document.querySelectorAll('.mobile-menu .hamburger-lines .line');
    const mobileMenu = document.querySelector('.mobile-menu-container .nav-links');
    const navLinks = document.querySelectorAll('.mobile-menu-container .nav-links a');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        lines.forEach(line => line.classList.toggle('active'));
        checkbox.checked = !checkbox.checked;  // Uncheck the checkbox if it was checked
    }

    checkbox.addEventListener('change', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

*/


  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Adjust if using different section tags
    const navLinks = document.querySelectorAll("nav ul li a"); // Adjust based on your navigation structure

    const observerOptions = {
        root: null, // Uses the viewport as the container
        rootMargin: "-50% 0px -50% 0px", // Triggers when the section is in the middle of the screen
        threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove .active from all links
                navLinks.forEach(link => link.parentElement.classList.remove("active"));

                // Find the corresponding link and add .active
                const id = entry.target.getAttribute("id");
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);

                if (activeLink) {
                    activeLink.parentElement.classList.add("active");
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});


  
  


document.addEventListener("DOMContentLoaded", function() {
    var heroSlider = new Flickity('#custom-slider', {
        cellAlign: 'center',
        contain: true,
        autoPlay: 4000,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true
    });

    heroSlider.resize(); // Force Flickity to recalculate image sizes

    // Synchronize desktop navigation
    document.querySelectorAll('.navigator li').forEach((li, index) => {
        li.addEventListener('click', function() {
            heroSlider.select(index);
            updateNavigation(index);
        });
    });

    // Sync mobile navigator when slider changes
    heroSlider.on('change', function(index) {
        updateNavigation(index);
    });

    function updateNavigation(index) {
        document.querySelectorAll('.navigator li, .mobile-navigator li').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.navigator li')[index].classList.add('active');
        document.querySelectorAll('.mobile-navigator li')[index].classList.add('active');
    }

    // Initial state update
    updateNavigation(0);
});





document.addEventListener("DOMContentLoaded", function () {
    var flkty = new Flickity('.carousel', {
        cellAlign: 'center',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false, // Disable wrapAround for better performance
        autoPlay: 5000 // Time in milliseconds (5 seconds)
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        [
            { title: "01.", subtitle: "ENSAIOS ANTIMICROBIANOS", details: "ANTIBACTERIANOS<br>ANTIFÚNGICOS<br>ANTIVÍRICOS" },
            { title: "02.", subtitle: "ENSAIOS BIOCOMPATIBILIDADE", details: "CITOTOXICIDADE<br>TOXICIDADE<br>HEMOCOMPATIBILIDADE" },
            { title: "03.", subtitle: "ENSAIOS BIOQUÍMICOS", details: "BIODEGRADABILIDADE<br>OXIDATIVOS<br>ODOR" },
            { title: "04.", subtitle: "I&D CONSULTADORIA", details: "I&D DE PRODUTOS<br>I&D DE PROCESSOS<br>I&D DE TECNOLOGIAS<br>FORMAÇÃO<br>CONFORMIDADE REGULAMENTAR" }
        ]
    ];

    const cards = document.querySelectorAll(".desktop-card");
    
    const defaultData = [
        { title: "01.", subtitle: "ENSAIOS ANTIMICROBIANOS", details: "" },
        { title: "02.", subtitle: "ENSAIOS BIOCOMPATIBILIDADE", details: "" },
        { title: "03.", subtitle: "ENSAIOS BIOQUÍMICOS", details: "" },
        { title: "04.", subtitle: "I&D CONSULTADORIA", details: "" }
    ];

    cards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            const h1 = card.querySelector("h1");
            const h3 = card.querySelector("h3");
            let details = card.querySelector(".card-content");

            if (!details) {
                details = document.createElement("p");
                details.classList.add("card-content");
                card.appendChild(details);
            }

            // Apply fade-out effect before updating content
            h1.classList.add("fade-out-text");
            h3.classList.add("fade-out-text");
            details.classList.add("fade-out-text");

            setTimeout(() => {
                h1.innerHTML = cardData[0][index].title;
                h3.innerHTML = cardData[0][index].subtitle;
                details.innerHTML = cardData[0][index].details;

                // Apply fade-in effect after content update
                h1.classList.remove("fade-out-text");
                h3.classList.remove("fade-out-text");
                details.classList.remove("fade-out-text");
                
                h1.classList.add("fade-in-text");
                h3.classList.add("fade-in-text");
                details.classList.add("fade-in-text");

                // Remove fade-in effect after animation completes
                setTimeout(() => {
                    h1.classList.remove("fade-in-text");
                    h3.classList.remove("fade-in-text");
                    details.classList.remove("fade-in-text");
                }, 500);
            }, 300);
        });

        card.addEventListener("mouseleave", () => {
            const h1 = card.querySelector("h1");
            const h3 = card.querySelector("h3");
            const details = card.querySelector(".card-content");

            // Reset content to default state
            h1.innerHTML = defaultData[index].title;
            h3.innerHTML = defaultData[index].subtitle;
            details.innerHTML = defaultData[index].details;
        });
    });
});


//Mobile dropdowns

function toggleDropdown(id) {
    const card = document.getElementById(`card-${id}`);
    card.classList.toggle("active");
  }
  



// Autoplay video
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("processVideo");

    if (!video) return;

    video.setAttribute("muted", "true"); // FORCE mute (mandatory)
    video.setAttribute("playsinline", "true");
    video.setAttribute("autoplay", "true");

    let playTimeout;

    function playVideo() {
        clearTimeout(playTimeout); // Clear any previous timeouts
        playTimeout = setTimeout(() => {
            video.play().then(() => {
                console.log("Autoplay success after delay!");
            }).catch(error => {
                console.warn("Autoplay blocked, retrying...");
                setTimeout(() => video.play(), 500);
            });
        },200); // 0.3s delay before play
    }

    // Force play when scrolling into viewport with delay
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                playVideo();
            } else {
                video.pause();
                video.currentTime = 0; // Reset when out of viewport
            }
        });
    }, { threshold: 0.6 });

    observer.observe(video);

    // Force play on user interaction (backup for extreme cases)
    document.addEventListener("click", playVideo);
    document.addEventListener("touchstart", playVideo);
    document.addEventListener("scroll", () => {
        if (video.paused) playVideo();
    });

    console.log("Autoplay script loaded with 0.7s delay.");
});






//Lottie Animation Script



document.addEventListener("DOMContentLoaded", function () {
    var lottieContainer = document.getElementById("lottie-news");

    var animation = lottie.loadAnimation({
        container: lottieContainer, // The div where it will render
        renderer: "svg", // 'svg' provides better quality
        loop: false, // Play only once
        autoplay: false, // Don't play immediately
        path: "assets/lottie-animations/news-green.json" // Path to your JSON file
    });

    // Function to check if the div is in the viewport
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animation.play(); // Play the animation when in viewport
                observer.unobserve(lottieContainer); // Stop observing after playing
            }
        });
    }

    

    // Create an Intersection Observer
    var observer = new IntersectionObserver(handleIntersection, {
        root: null, // Observe relative to the viewport
        threshold: 1 // Trigger when 50% of the div is visible
    });

    observer.observe(lottieContainer); // Start observing the Lottie div
});






document.addEventListener("DOMContentLoaded", function () {
    const lottieContainer = document.querySelector(".lottie-container");

    if (!lottieContainer) {
        console.error("❌ Lottie container not found!");
        return;
    }

    console.log("✅ Lottie container detected, waiting for viewport...");

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("🔄 Lottie animation is now in view, adding it to the DOM...");

                // ✅ Remove any existing Lottie element
                lottieContainer.innerHTML = "";

                // ✅ Create a new Lottie element with fixes
                const lottieElement = document.createElement("dotlottie-wc");
                lottieElement.setAttribute("src", "https://lottie.host/5aee6ff8-7809-49ef-a5b0-c522d01e6bcd/FMizGjSp57.lottie");
                lottieElement.setAttribute("speed", "0.75");
                lottieElement.setAttribute("style", "width: 100%; height: 100%; display: block;");
                lottieElement.setAttribute("mode", "forward");
                lottieElement.setAttribute("autoplay", "true");

                lottieContainer.appendChild(lottieElement); // Add the animation to the DOM

                observer.unobserve(lottieContainer); // Stop observing after adding the animation
            }
        });
    }

    // Create an Intersection Observer
    const intersectionObserver = new IntersectionObserver(handleIntersection, {
        root: null, // Observe relative to viewport
        threshold: 0.8 // Trigger when 70% of the div is visible
    });

    intersectionObserver.observe(lottieContainer);
});






//Newsletter Popup
document.addEventListener("DOMContentLoaded", function () {
    const newsletterButton = document.getElementById("brevo-form-overlay");
    const nlPopup = document.getElementById("newsletter-pop-up"); // FIXED: Using ID instead of class
    const mobileNewsletterButton = document.getElementById("mobile-newsletter-menu-overlay");

    if (!nlPopup) {
        console.error("Element with ID 'newsletter-pop-up' not found.");
        return; // Stop execution if the pop-up doesn't exist
    }

    const formContainer = document.querySelector("#sib-container"); // Form container
    let closeBtn = document.querySelector(".close-btn");

    // If close button doesn't exist, create it
    if (!closeBtn) {
        closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.innerHTML = "&times;";
        nlPopup.appendChild(closeBtn);
    }

    function openPopup() {
        nlPopup.classList.add("active");
    }

    function closePopup() {
        nlPopup.classList.remove("active");
    }

    // ✅ Open pop-up when clicking the button
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (event) {
            event.preventDefault();
            openPopup();
        });
    } else {
        console.error("Button with ID 'brevo-form-overlay' not found.");
    }

       // ✅ Open pop-up when clicking the mobile newsletter button
       if (mobileNewsletterButton) {
        mobileNewsletterButton.addEventListener("click", function (event) {
            event.preventDefault();
            openPopup();
        });
    } else {
        console.error("Button with ID 'mobile-newsletter-menu-overlay' not found.");
    }

    // ✅ Close pop-up when clicking the close button
    closeBtn.addEventListener("click", closePopup);

    // ✅ Close pop-up when clicking outside the form
    nlPopup.addEventListener("click", function (event) {
        if (!formContainer.contains(event.target)) {
            closePopup();
        }
    });

    // ✅ Close pop-up after form submission (delayed for effect)
    const form = document.getElementById("sib-form");
    if (form) {
        form.addEventListener("submit", function () {
            setTimeout(closePopup, 1500);
        });
    }
});