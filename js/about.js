// ===== VIDEO PLAY FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.team-video');
    const playOverlays = document.querySelectorAll('.video-play-overlay');

    videos.forEach((video, index) => {
        const overlay = playOverlays[index];
        
        // Hide overlay when video starts playing
        video.addEventListener('play', () => {
            overlay.style.display = 'none';
        });

        // Show overlay when video is paused
        video.addEventListener('pause', () => {
            overlay.style.display = 'block';
        });

        // Show overlay when video ends
        video.addEventListener('ended', () => {
            overlay.style.display = 'block';
        });

        // Click on overlay to play video
        overlay.addEventListener('click', () => {
            video.play();
        });
    });
});


// ===== SCROLL ANIMATIONS FOR ABOUT PAGE =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections and elements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll(
        '.story-section, .mission-vision, .stats-section, .team-videos, .why-choose-us'
    );
    
    const elements = document.querySelectorAll(
        '.story-left, .story-right, .mv-card, .stat-box, .video-card, .why-card'
    );
    
    sections.forEach(section => observer.observe(section));
    elements.forEach(element => observer.observe(element));
});


// ===== COUNTER ANIMATION FOR STATS =====
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '%');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
        }
    }, 16);
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const value = parseInt(text);
                stat.textContent = '0' + (text.includes('+') ? '+' : text.includes('%') ? '%' : '');
                animateCounter(stat, value);
            });
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});