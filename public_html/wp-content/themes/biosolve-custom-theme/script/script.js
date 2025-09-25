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

//card-script-animation

document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        [
            { title: "01.", subtitle: "ENSAIOS ANTIMICROBIANOS", details: "" },
            { title: "02.", subtitle: "ENSAIOS BIOCOMPATIBILIDADE", details: "" },
            { title: "03.", subtitle: "ENSAIOS BIOQUÍMICOS", details: "" },
            { title: "04.", subtitle: "I&D CONSULTADORIA", details: "" }
        ],
        [
            { title: "01.", subtitle: "ENSAIOS ANTIMICROBIANOS", details: "ANTIBACTERIANOS<br>ANTIFÚNGICOS<br>ANTIVÍRICOS" },
            { title: "02.", subtitle: "ENSAIOS BIOCOMPATIBILIDADE", details: "" },
            { title: "03.", subtitle: "ENSAIOS BIOQUÍMICOS", details: "" },
            { title: "04.", subtitle: "I&D CONSULTADORIA", details: "" }
        ],
        [
            { title: "01.", subtitle: "ENSAIOS ANTIMICROBIANOS", details: "" },
            { title: "02.", subtitle: "ENSAIOS BIOCOMPATIBILIDADE", details: "CITOTOXICIDADE<br>TOXICIDADE<br>HEMOCOMPATIBILIDADE" },
            { title: "03.", subtitle: "ENSAIOS BIOQUÍMICOS", details: "" },
            { title: "04.", subtitle: "I&D CONSULTADORIA", details: "" }
        ],
        [
            { title: "01.", subtitle: "ENSAIOS ANTIMICROBIANOS", details: "" },
            { title: "02.", subtitle: "ENSAIOS BIOCOMPATIBILIDADE", details: "" },
            { title: "03.", subtitle: "ENSAIOS BIOQUÍMICOS", details: "BIODEGRADABILIDADE<br>OXIDATIVOS<br>ODOR" },
            { title: "04.", subtitle: "I&D CONSULTADORIA", details: "" }
        ],
        [
            { title: "01.", subtitle: "ENSAIOS ANTIMICROBIANOS", details: "" },
            { title: "02.", subtitle: "ENSAIOS BIOCOMPATIBILIDADE", details: "" },
            { title: "03.", subtitle: "ENSAIOS BIOQUÍMICOS", details: "" },
            { title: "04.", subtitle: "I&D CONSULTADORIA", details: "I&D DE PRODUTOS<br>I&D DE PROCESSOS<br>I&D DE TECNOLOGIAS<br>FORMAÇÃO<br>CONFORMIDADE REGULAMENTAR" }
        ]
    ];

    let currentState = 0;
    let animationInterval;
    let isHovered = false;
    
    const cards = document.querySelectorAll(".desktop-card");

    function updateCardContent(index) {
        // Reset all cards before applying changes
        cards.forEach((card, i) => {
            const h1 = card.querySelector("h1");
            const h3 = card.querySelector("h3");
            let details = card.querySelector(".card-content");

            if (!details) {
                details = document.createElement("p");
                details.classList.add("card-content");
                card.appendChild(details);
            }

            if (i !== index) {
                // Reset cards that are NOT the active one
                h1.innerHTML = cardData[0][i].title;
                h3.innerHTML = cardData[0][i].subtitle;
                details.innerHTML = cardData[0][i].details;
            }
        });

        // Update only the active card
        const activeCard = cards[index];
        const h1 = activeCard.querySelector("h1");
        const h3 = activeCard.querySelector("h3");
        let details = activeCard.querySelector(".card-content");

        // Apply fade-out + slide down effect only to the changing card
        h1.classList.add("fade-out-text");
        h3.classList.add("fade-out-text");
        details.classList.add("fade-out-text");

        setTimeout(() => {
            h1.innerHTML = cardData[currentState][index].title;
            h3.innerHTML = cardData[currentState][index].subtitle;
            details.innerHTML = cardData[currentState][index].details;

            // Apply fade-in + slide up only to the updated card
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
        }, 400);
    }

    function updateCards() {
        if (!isHovered) {
            updateCardContent(currentState % cards.length);
            currentState = (currentState + 1) % cardData.length;
        }
    }

    function startAnimation() {
        animationInterval = setInterval(updateCards, 4000);
    }

    function stopAnimation() {
        clearInterval(animationInterval);
    }

    // Start animation on page load
    updateCards();
    startAnimation();

    // Hover Effect: Stop animation & reveal full content
    cards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            isHovered = true;
            stopAnimation();
            
            // Instantly show full content for the hovered card
            const h1 = card.querySelector("h1");
            const h3 = card.querySelector("h3");
            let details = card.querySelector(".card-content");

            if (cardData[cardData.length - 1] && cardData[cardData.length - 1][index]) {
                h1.innerHTML = cardData[cardData.length - 1][index].title;
                h3.innerHTML = cardData[cardData.length - 1][index].subtitle;
                details.innerHTML = cardData[cardData.length - 1][index].details;
            }
            
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            isHovered = false;
            card.classList.remove("hovered");
            startAnimation();
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
    }, { threshold: 0.2 });

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






