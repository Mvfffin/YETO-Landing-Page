document.addEventListener('DOMContentLoaded', function() {

    // --------------------------------------------------
    // 1. Smooth Scroll for Anchor Links
    // --------------------------------------------------
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of smoothScrollLinks) {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    const elementPosition = targetElement.offsetTop;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // --------------------------------------------------
    // 2. Hero Section: Timed Fade-in Elements on Page Load
    // --------------------------------------------------
    // Selects only .fade-in-element items within the #hero section
    const heroFadeInElements = document.querySelectorAll('#hero .fade-in-element');
    let heroAnimationDelay = 200; // Initial delay in milliseconds

    heroFadeInElements.forEach(element => {
        setTimeout(() => {
            element.classList.add('is-visible');
        }, heroAnimationDelay);
        heroAnimationDelay += 200; // Stagger the animation for each hero element
    });

    // --------------------------------------------------
    // 3. Intersection Observer for .feature-card-animate elements
    // --------------------------------------------------
    const animatedFeatureCards = document.querySelectorAll('.feature-card-animate');

    if (animatedFeatureCards.length > 0) {
        const featureCardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        animatedFeatureCards.forEach(card => {
            featureCardObserver.observe(card);
        });
    }

    // --------------------------------------------------
    // 4. Intersection Observer for .portal-benefit-item-animate elements
    // --------------------------------------------------
    const animatedPortalItems = document.querySelectorAll('.portal-benefit-item-animate');

    if (animatedPortalItems.length > 0) {
        const portalItemObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        animatedPortalItems.forEach(item => {
            portalItemObserver.observe(item);
        });
    }

    // --------------------------------------------------
    // 5. Intersection Observer for .pillar-item-animate elements
    // --------------------------------------------------
    const animatedPillars = document.querySelectorAll('.pillar-item-animate');

    if (animatedPillars.length > 0) {
        const pillarObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        animatedPillars.forEach(pillar => {
            pillarObserver.observe(pillar);
        });
    }

    // --------------------------------------------------
    // 6. Intersection Observer for .social-proof-section .fade-in-element
    //    (This specifically targets .fade-in-element within .social-proof-section)
    // --------------------------------------------------
    const socialProofAnimatedElements = document.querySelectorAll('.social-proof-section .fade-in-element');

    if (socialProofAnimatedElements.length > 0) {
        const socialProofObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const socialProofObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const socialProofScrollObserver = new IntersectionObserver(socialProofObserverCallback, socialProofObserverOptions);

        socialProofAnimatedElements.forEach(el => {
            socialProofScrollObserver.observe(el);
        });
    }

     // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNavUl = document.querySelector('.main-navigation ul');

    if (mobileNavToggle && mainNavUl) { // Check if both elements actually exist on the page
        mobileNavToggle.addEventListener('click', function() {
            // Toggle the .is-active class on the button itself (for the X animation)
            this.classList.toggle('is-active');

            // Toggle the .nav-open class on the <ul> to show/hide the menu
            mainNavUl.classList.toggle('nav-open');

            // Update aria-expanded attribute for accessibility
            // Get the current state (true or false)
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            // Set it to the opposite state
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }

});