// ===== TEAM MEMBERS DATA =====
const teamMembersData = {
    1: {
        name: "Nana Adwoa Sey",
        role: "Founder, Creative Director",
        bio: "Hi! Nana here! I'm the Founder and Creative Director here at Apeiron, and I've been here for 3 years. I love being a creative director because I get to bring ideas to life and watch brands transform through strategic creativity. When I'm not working on campaigns, I enjoy exploring new design trends and mentoring young creatives. My favorite kind of project to work on is brand identity design - there's something magical about creating a visual language that truly represents a business.",
        social: [
            { platform: "LinkedIn", url: "https://linkedin.com" },
            { platform: "Instagram", url: "https://instagram.com" }
        ]
    },
    2: {
        name: "Norkor Nortey",
        role: "Senior Graphic Designer",
        bio: "Hi! Norkor here! I'm a Senior Graphic Designer here at Apeiron, and I've been here for 2 years and 6 months. I love being a graphic designer because every project is a new canvas to tell a visual story. When I'm sitting behind a screen, putting an awesome design together, it almost feels like I am a conductor of an orchestra directing elements together to form a visual masterpiece. Outside of design, I really enjoy exploring new art exhibitions and experimenting with different creative mediums. My favorite kind of project to work on is social media campaigns.",
        social: [
            { platform: "Behance", url: "https://behance.net" },
            { platform: "Instagram", url: "https://instagram.com" }
        ]
    },
    3: {
        name: "Kezia Asare-Darko",
        role: "Graphic Designer",
        bio: "Hi! Kezia here! I'm a Graphic Designer here at Apeiron, and I've been here for 1 year and 2 months. I love being a graphic designer because when I'm sitting behind a screen, putting an awesome design together, it almost feels like I am a conductor of an orchestra directing elements together to form a visual masterpiece. And I'm absolutely hooked on that feeling, lol. Outside of design, I really enjoy reading works of fiction by African authors and watching animated tv shows. My favorite kind of project to work on is identity design. If I wasn't a graphic designer, I'd probably be an artisan.",
        social: [
            { platform: "Dribbble", url: "https://dribbble.com" },
            { platform: "Twitter", url: "https://twitter.com" }
        ]
    },
    4: {
        name: "Team Member 4",
        role: "Content Strategist",
        bio: "Hi! I'm a Content Strategist here at Apeiron, and I've been here for 1 year. I love creating content strategies that connect brands with their audiences in meaningful ways. When I'm not crafting campaigns, I enjoy reading, podcasts, and discovering new storytelling formats. My favorite kind of project to work on is brand storytelling campaigns.",
        social: [
            { platform: "LinkedIn", url: "https://linkedin.com" },
            { platform: "Medium", url: "https://medium.com" }
        ]
    }
};


// ===== TEAM MEMBERS FUNCTIONALITY =====
function initTeamMembers() {
    const teamMemberItems = document.querySelectorAll('.team-member-item');
    const panel = document.querySelector('.team-member-panel');
    const overlay = document.querySelector('.panel-overlay');
    const closeBtn = document.querySelector('.panel-close');

    // Check if all elements exist
    if (!panel || !overlay || !closeBtn) {
        console.error('Team panel elements not found');
        return;
    }

    if (teamMemberItems.length === 0) {
        console.warn('No team member items found');
        return;
    }

    // Add click handlers to team members
    teamMemberItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const memberId = item.getAttribute('data-member');
            openPanel(memberId);
        });
    });

    // Close button handler
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closePanel();
    });

    // Overlay click handler
    overlay.addEventListener('click', function() {
        closePanel();
    });

    // ESC key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && panel.classList.contains('active')) {
            closePanel();
        }
    });

    function openPanel(memberId) {
        const member = teamMembersData[memberId];
        
        if (!member) {
            console.error('Member data not found for ID:', memberId);
            return;
        }

        // Find elements in panel-content (not panel-header since we removed it)
        const panelContent = panel.querySelector('.panel-content');
        
        // Populate name and role at the top of panel-content
        let memberName = panelContent.querySelector('.panel-member-name');
        if (!memberName) {
            // Create it if it doesn't exist
            memberName = document.createElement('h2');
            memberName.className = 'panel-member-name';
            panelContent.insertBefore(memberName, panelContent.firstChild);
        }
        memberName.textContent = member.name;

        let memberRole = panelContent.querySelector('.panel-member-role');
        if (!memberRole) {
            memberRole = document.createElement('p');
            memberRole.className = 'panel-member-role';
            panelContent.insertBefore(memberRole, memberName.nextSibling);
        }
        memberRole.textContent = member.role;

        // Populate bio as quote text
        const quoteText = panel.querySelector('.panel-quote-text');
        if (quoteText) {
            quoteText.textContent = member.bio;
        }

        // Populate social links as text buttons
        const socialContainer = panel.querySelector('.panel-social');
        if (socialContainer && member.social) {
            socialContainer.innerHTML = member.social
                .map(function(social) {
                    return '<a href="' + social.url + '" target="_blank" class="panel-social-link">' +
                        social.platform +
                        '</a>';
                })
                .join('');
        }

        // Show panel
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePanel() {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}


// ===== VIDEO PLAY FUNCTIONALITY =====
function initVideos() {
    const videos = document.querySelectorAll('.team-video');
    const playOverlays = document.querySelectorAll('.video-play-overlay');

    videos.forEach(function(video, index) {
        const overlay = playOverlays[index];
        
        if (!overlay) return;

        // Hide overlay when video plays
        video.addEventListener('play', function() {
            overlay.style.display = 'none';
            
            // Pause other videos
            videos.forEach(function(otherVideo, otherIndex) {
                if (otherIndex !== index && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });

        // Show overlay when paused
        video.addEventListener('pause', function() {
            overlay.style.display = 'block';
        });

        // Show overlay when ended
        video.addEventListener('ended', function() {
            overlay.style.display = 'block';
        });

        // Play on overlay click
        overlay.addEventListener('click', function() {
            video.play();
        });
    });
}


// ===== COUNTER ANIMATION FOR STATS =====
function animateCounter(element, target, duration) {
    duration = duration || 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
        }
    }, 16);
}

function initStatsCounter() {
    const statsSection = document.querySelector('.stats-section');
    
    if (!statsSection) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(function(stat) {
                    const text = stat.textContent;
                    const value = parseInt(text);
                    stat.textContent = '0' + (text.includes('+') ? '+' : text.includes('%') ? '%' : '');
                    animateCounter(stat, value);
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}


// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll(
        '.story-section, .mission-vision, .stats-section, .team-members, .team-videos, .why-choose-us'
    );
    
    const elements = document.querySelectorAll(
        '.story-left, .story-right, .mv-card, .stat-box, .video-card, .why-card'
    );
    
    sections.forEach(function(section) {
        observer.observe(section);
    });
    
    elements.forEach(function(element) {
        observer.observe(element);
    });
}


// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    initTeamMembers();
    initVideos();
    initStatsCounter();
    initScrollAnimations();
});