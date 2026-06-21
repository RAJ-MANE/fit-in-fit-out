/* ----------------------------------------------------
   FIT IN FIT OUT - Dietitian Website JavaScript
   Designed for Dt. Poonam Kalia
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. Intro Loader Animation Control
    // ==========================================
    const introLoader = document.getElementById('intro-loader');
    
    const hideLoader = () => {
        setTimeout(() => {
            if (introLoader) {
                introLoader.classList.add('fade-out');
                document.body.classList.remove('no-scroll');
                
                // Completely remove from DOM after slide-up completes (800ms)
                setTimeout(() => {
                    introLoader.remove();
                }, 800);
            }
        }, 2000); // Show logo and animation for exactly 2 seconds
    };

    // Trigger hide on window load or immediately if already loaded
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }
    
    // ==========================================
    // 1. Sticky Header & Scroll Progress
    // ==========================================
    const header = document.querySelector('.header');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        // Sticky Header Class Toggle
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll Progress Bar Width Calculation
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScrollHeight > 0) {
            const scrollPercent = (window.scrollY / totalScrollHeight) * 100;
            scrollProgress.style.width = `${scrollPercent}%`;
        }
    });


    // ==========================================
    // 2. Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('open');
            
            // Set active class on clicked link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Simple scroll spy to set active nav link based on viewport scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}` || (currentSectionId === 'home' && link.getAttribute('href') === '#')) {
                    link.classList.add('active');
                }
            });
        }
    });


    // ==========================================
    // 3. Reveal on Scroll (Intersection Observer)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        revealElements.forEach(element => {
            element.classList.add('reveal-active');
        });
    }


    // ==========================================
    // 4. Interactive BMI Calculator
    // ==========================================
    const bmiForm = document.getElementById('bmi-form');
    const bmiResult = document.getElementById('bmi-result');
    const bmiVal = document.getElementById('bmi-val');
    const bmiStatus = document.getElementById('bmi-status');
    const bmiAdvice = document.getElementById('bmi-advice');
    const bmiCta = document.getElementById('bmi-cta');

    bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const heightCm = parseFloat(document.getElementById('bmi-height').value);

        if (weight > 0 && heightCm > 0) {
            const heightM = heightCm / 100;
            const bmi = (weight / (heightM * heightM)).toFixed(1);
            
            // Show result container
            bmiResult.classList.remove('hidden');

            // Render score
            bmiVal.textContent = bmi;

            // Reset class names
            bmiStatus.className = 'bmi-status';
            
            let statusText = '';
            let adviceText = '';
            let statusClass = '';

            // Categorize and provide specific advice
            if (bmi < 18.5) {
                statusText = 'Underweight';
                statusClass = 'underweight';
                adviceText = 'You are in the underweight category. A customized, calorie-dense nutrition plan focusing on clean carbs, healthy proteins, and essential micronutrients is recommended to safely gain healthy mass.';
            } else if (bmi >= 18.5 && bmi < 25) {
                statusText = 'Healthy Weight';
                statusClass = 'healthy';
                adviceText = 'Excellent! Your weight is in the ideal range. Maintaining a balanced diet rich in seasonal organic produce, staying active, and sleeping well will sustain this health score. Let Dt. Poonam Kalia help you optimize your sports performance or address any pediatric/clinical concerns.';
            } else if (bmi >= 25 && bmi < 30) {
                statusText = 'Overweight';
                statusClass = 'overweight';
                adviceText = 'You are in the overweight range. To prevent metabolic complications, we recommend a personalized fat loss plan that emphasizes portion control, natural foods, and sustainable daily habits over crash-dieting.';
            } else {
                statusText = 'Obese';
                statusClass = 'obese';
                adviceText = 'Your BMI is in the obese range. This increases your risk for clinical conditions like Type 2 Diabetes, High Blood Pressure, and Thyroid imbalances. Dt. Poonam Kalia can design an evidence-based clinical diet and continuous support plan tailored to your profile.';
            }

            bmiStatus.textContent = statusText;
            bmiStatus.classList.add(statusClass);
            bmiAdvice.textContent = adviceText;

            // Update CTA WhatsApp Link with customized message containing user details
            const waNumber = '919920659600';
            const waMsg = encodeURIComponent(`Hello Dt. Poonam, I calculated my BMI using your website calculator. My weight is ${weight}kg, height is ${heightCm}cm, and my calculated BMI is ${bmi} (${statusText}). I want to book a personalized diet consultation.`);
            bmiCta.href = `https://wa.me/${waNumber}?text=${waMsg}`;
            
            // Smooth scroll to the result
            setTimeout(() => {
                bmiResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    });


    // ==========================================
    // 5. Tabs Switcher (Seasonal Guide)
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Toggle active button
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle active tab pane
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.getAttribute('id') === targetTab) {
                    pane.classList.add('active');
                }
            });
        });
    });


    // ==========================================
    // 6. Dynamic Video Modal (YouTube Podcasts)
    // ==========================================
    const podcastCards = document.querySelectorAll('.podcast-card');
    const videoModal = document.getElementById('video-modal');
    const videoModalClose = document.getElementById('video-modal-close');
    const videoModalBackdrop = document.getElementById('video-modal-backdrop');
    const ytPlayerPlaceholder = document.getElementById('youtube-player-placeholder');

    // Open video modal
    podcastCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video-id');
            if (videoId) {
                // Insert responsive YouTube iframe player dynamically with autoplay
                ytPlayerPlaceholder.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                `;
                
                // Show modal
                videoModal.classList.add('active');
                videoModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Stop background scroll
            }
        });
    });

    // Close video modal function
    const closeModal = () => {
        videoModal.classList.remove('active');
        videoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto'; // Re-enable scroll
        
        // Remove iframe completely to stop video playback
        ytPlayerPlaceholder.innerHTML = '';
    };

    // Close button click
    videoModalClose.addEventListener('click', closeModal);

    // Backdrop click
    videoModalBackdrop.addEventListener('click', closeModal);

    // Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });

});
