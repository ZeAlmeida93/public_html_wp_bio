
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
        imagesLoaded: true // Garante que as imagens são carregadas antes do Flickity ajustar o layout
    });

    heroSlider.resize(); // Força o Flickity a recalcular o tamanho das imagens

    // Sincronizar botões de navegação
    document.querySelectorAll('.navigator li').forEach((li, index) => {
        li.addEventListener('click', function() {
            heroSlider.select(index);
            document.querySelectorAll('.navigator li').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });

    heroSlider.on('change', function(index) {
        document.querySelectorAll('.navigator li').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.navigator li')[index].classList.add('active');
    });
});




document.addEventListener("DOMContentLoaded", function () {
    var flkty = new Flickity('.carousel', {
        cellAlign: 'center',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: 5000 // Time in milliseconds (4 seconds)
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
    
    const cards = document.querySelectorAll(".card");

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

            h1.innerHTML = cardData[cardData.length - 1][index].title;
            h3.innerHTML = cardData[cardData.length - 1][index].subtitle;
            details.innerHTML = cardData[cardData.length - 1][index].details;
            
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            isHovered = false;
            card.classList.remove("hovered");
            startAnimation();
        });
    });
});






// Autoplay video

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("processVideo");

    if (!video) return; // Ensure the video element exists

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0; // Reset when out of viewport
                }
            });
        },
        {
            root: null, // Uses viewport as root
            threshold: 0.5, // 50% of the video must be visible to trigger play
        }
    );

    observer.observe(video);
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





