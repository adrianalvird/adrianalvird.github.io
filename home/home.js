document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Text Rotation
    const heroTexts = [
        {
            title: "Find Vulnerabilities <span class='home-highlight'>Before Hackers Do</span>",
            desc: "Join thousands of companies securing their digital assets with our elite cybersecurity platform."
        },
        {
            title: "Everything is <span class='home-highlight'>Not Secure</span>",
            desc: "We help businesses identify, mitigate, and prevent security vulnerabilities before attackers do."
        }
    ];
    const heroElements = {
        title: document.querySelector('.home-hero-title'),
        desc: document.querySelector('.home-hero-description'),
        container: document.querySelector('.home-hero-text')
    };

    let currentTextIndex = 0;
    function rotateHeroText() {
        gsap.to(heroElements.container, {
            duration: 0.5,
            opacity: 0,
            y: 20,
            ease: "power2.inOut",
            onComplete: () => {
                currentTextIndex = (currentTextIndex + 1) % heroTexts.length;
                heroElements.title.innerHTML = heroTexts[currentTextIndex].title;
                heroElements.desc.textContent = heroTexts[currentTextIndex].desc;
                gsap.fromTo(heroElements.container, 
                    { opacity: 0, y: -20 },
                    { duration: 0.5, opacity: 1, y: 0, ease: "power2.inOut" }
                );
            }
        });
    }
    setInterval(rotateHeroText, 10000);

    // 2. Animated Number Counters
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const update = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start).toLocaleString();
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        update();
    }

    ScrollTrigger.create({
        trigger: ".home-hero",
        start: "top 50%",
        onEnter: () => {
            document.querySelectorAll('.home-stat-number').forEach(el => {
                animateCounter(el, +el.getAttribute('data-count'));
            });
        },
        once: true
    });

    // 3. Infinite Auto-Scrolling Sections
    function createInfiniteScroller(containerSelector, itemSelector, speed = 1) {
        const container = document.querySelector(containerSelector);
        const scroller = container.querySelector('.home-scroller');
        const items = container.querySelectorAll(itemSelector);
        
        if (!items.length) return;
        
        // Calculate total width
        let totalWidth = 0;
        const gap = parseInt(window.getComputedStyle(scroller).gap) || 30;
        items.forEach(item => totalWidth += item.offsetWidth + gap);
        
        // Duplicate content for seamless looping
        scroller.innerHTML += scroller.innerHTML;
        
        // Animation
        const animation = gsap.to(scroller, {
            x: -totalWidth,
            duration: totalWidth / (50 * speed), // Speed adjustment
            ease: "none",
            repeat: -1,
            modifiers: {
                x: x => parseFloat(x) % totalWidth
            }
        });
        
        // Pause on hover
        container.addEventListener('mouseenter', () => animation.pause());
        container.addEventListener('mouseleave', () => animation.play());
    }

    // Initialize scrollers after slight delay to ensure DOM is ready
    setTimeout(() => {
        createInfiniteScroller('.home-attacks-track', '.home-attack-card', 0.8);
        createInfiniteScroller('.home-partners-track', '.home-partner-logo', 1.2);
    }, 100);

    // 4. Scroll Trigger Animations
    function createScrollAnimation(selector, options) {
        gsap.from(selector, {
            scrollTrigger: {
                trigger: selector,
                start: options.start || 'top 80%',
                toggleActions: 'play none none none'
            },
            y: options.y || 50,
            opacity: 0,
            duration: options.duration || 0.6,
            delay: options.delay || 0,
            ease: options.ease || 'power2.out'
        });
    }

    // Hero section
    gsap.from('.home-hero-title, .home-hero-description', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    gsap.from('.home-cta-group', { duration: 1, y: 50, opacity: 0, delay: 0.4, ease: 'power3.out' });
    gsap.from('.home-stats-grid', { duration: 1, y: 50, opacity: 0, delay: 0.6, ease: 'power3.out' });

    // Features
    document.querySelectorAll('.home-feature-card').forEach((card, i) => {
        createScrollAnimation(card, { delay: i * 0.1, ease: 'back.out(1.7)' });
    });

    // Attacks (entrance only, scrolling handled separately)
    document.querySelectorAll('.home-attack-card').forEach((card, i) => {
        createScrollAnimation(card, { delay: i * 0.1, duration: 0.8 });
    });

    // Partners (entrance only, scrolling handled separately)
    document.querySelectorAll('.home-partner-logo').forEach((logo, i) => {
        createScrollAnimation(logo, { delay: i * 0.05, duration: 0.4 });
    });

    // CTA
    createScrollAnimation('.home-cta', { start: 'top 70%', duration: 0.8 });

    // 5. Floating Hero Animation
    gsap.to('.home-hero-content', {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});