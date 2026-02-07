// ===== VIDEO PLAY FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.team-video');
    const playOverlays = document.querySelectorAll('.video-play-overlay');

    videos.forEach((video, index) => {
        const overlay = playOverlays[index];
        
        // Pause all other videos when this one starts playing
        video.addEventListener('play', () => {
            overlay.style.display = 'none';
            
            // Pause all other videos
            videos.forEach((otherVideo, otherIndex) => {
                if (otherIndex !== index && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
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

// ===== TEAM MEMBERS DATA =====
const teamMembersData = {
    1: {
        name: "Sarah Mensah",
        role: "Founder & Creative Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop",
        quote: "I believe that great marketing is about telling authentic stories that connect with people on a human level. At Apeiron, we don't just create content—we create experiences that matter.",
        story: "I started Apeiron three years ago with a simple vision: to help businesses in Ghana and beyond unlock their full potential through creative, strategic digital marketing. Coming from a background in advertising and design, I saw a gap in the market for truly personalized, high-quality digital services that understood the local context while maintaining global standards.\n\nWhat drives me every day is seeing our clients succeed. Whether it's a startup finding its voice or an established brand reinventing itself, being part of that transformation journey is incredibly fulfilling. I'm passionate about building a team that shares this commitment to excellence and innovation.",
        expertise: [
            "Brand Strategy & Positioning",
            "Creative Direction & Campaign Design",
            "Team Leadership & Business Development",
            "Client Relations & Strategic Planning"
        ],
        stats: [
            { number: "3+", label: "Years Leading" },
            { number: "20+", label: "Brands Transformed" }
        ],
        social: [
            { platform: "linkedin", url: "https://linkedin.com", icon: "fab fa-linkedin-in" },
            { platform: "twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
            { platform: "instagram", url: "https://instagram.com", icon: "fab fa-instagram" }
        ]
    },
    2: {
        name: "Kwame Osei",
        role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop",
        quote: "Data tells stories, but it takes human insight to understand what those stories mean and how to use them to drive real business growth.",
        story: "I joined Apeiron two years ago, bringing with me over five years of experience in digital marketing strategy and analytics. My journey in marketing started when I realized that the most successful campaigns weren't just creative—they were smart, data-driven, and deeply connected to business objectives.\n\nAt Apeiron, I lead our strategic planning efforts, ensuring that every campaign we launch is grounded in solid research and clear metrics for success. I work closely with clients to understand their unique challenges and translate those into actionable marketing strategies. For me, the magic happens when creativity meets analytics—that's where true innovation lives.",
        expertise: [
            "Digital Marketing Strategy",
            "Data Analytics & Insights",
            "Campaign Planning & Optimization",
            "Market Research & Competitive Analysis"
        ],
        stats: [
            { number: "50+", label: "Campaigns Led" },
            { number: "92%", label: "Success Rate" }
        ],
        social: [
            { platform: "linkedin", url: "https://linkedin.com", icon: "fab fa-linkedin-in" },
            { platform: "twitter", url: "https://twitter.com", icon: "fab fa-twitter" }
        ]
    },
    3: {
        name: "Ama Darko",
        role: "Lead Designer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop",
        quote: "Design is not just about making things look beautiful—it's about creating experiences that solve problems and tell compelling stories.",
        story: "I've been with Apeiron since the beginning, and it's been an incredible journey. As a designer, I've always been drawn to work that makes a real impact. Here, I get to do that every single day. From branding startups to refreshing established companies, each project is a chance to push creative boundaries.\n\nWhat I love most about my role is the collaborative process. I work hand-in-hand with our strategy team to ensure that every design decision is purposeful and aligned with our clients' goals. Whether it's a logo, a website, or a full brand identity system, I approach each project with fresh eyes and a commitment to excellence.",
        expertise: [
            "Brand Identity & Visual Design",
            "Web & UI/UX Design",
            "Print & Digital Collateral",
            "Creative Art Direction"
        ],
        stats: [
            { number: "25+", label: "Brands Designed" },
            { number: "100+", label: "Projects Completed" }
        ],
        social: [
            { platform: "behance", url: "https://behance.net", icon: "fab fa-behance" },
            { platform: "instagram", url: "https://instagram.com", icon: "fab fa-instagram" },
            { platform: "dribbble", url: "https://dribbble.com", icon: "fab fa-dribbble" }
        ]
    },
    4: {
        name: "Kofi Asante",
        role: "Content Strategist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
        quote: "In a world of noise, the brands that win are those that have something meaningful to say and know how to say it authentically.",
        story: "I joined Apeiron a year ago, but I've been crafting content and telling brand stories for over six years. What drew me to this team was the emphasis on strategy-first thinking. Too often, content is created without purpose—but here, every word, image, and video serves a specific goal.\n\nMy role involves everything from developing content strategies to writing compelling copy, managing social media calendars, and creating video concepts. I believe that great content doesn't just attract attention—it builds relationships, fosters trust, and drives action. That's the kind of content we create for our clients.",
        expertise: [
            "Content Strategy & Planning",
            "Copywriting & Brand Messaging",
            "Social Media Content Creation",
            "Video Scripting & Storytelling"
        ],
        stats: [
            { number: "500+", label: "Content Pieces" },
            { number: "15+", label: "Brands Managed" }
        ],
        social: [
            { platform: "linkedin", url: "https://linkedin.com", icon: "fab fa-linkedin-in" },
            { platform: "twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
            { platform: "medium", url: "https://medium.com", icon: "fab fa-medium" }
        ]
    }
};


// ===== TEAM MEMBERS FUNCTIONALITY =====
function initTeamMembers() {
    const teamMemberItems = document.querySelectorAll('.team-member-item');
    const panel = document.querySelector('.team-member-panel');
    const overlay = document.querySelector('.panel-overlay');
    const closeBtn = document.querySelector('.panel-close');

    if (!panel || !overlay || !closeBtn) {
        console.warn('Team member panel elements not found');
        return;
    }

    // Open panel when clicking on a team member
    teamMemberItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const memberId = item.getAttribute('data-member');
            openPanel(memberId);
        });
    });

    // Close panel when clicking close button
    closeBtn.addEventListener('click', closePanel);

    // Close panel when clicking overlay
    overlay.addEventListener('click', closePanel);

    // Close panel on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && panel.classList.contains('active')) {
            closePanel();
        }
    });

    function openPanel(memberId) {
        const member = teamMembersData[memberId];
        
        if (!member) {
            console.error('Team member not found:', memberId);
            return;
        }

        // Populate panel with member data
        const headerImage = panel.querySelector('.panel-header-image');
        const memberName = panel.querySelector('.panel-member-name');
        const memberRole = panel.querySelector('.panel-member-role');
        const quoteText = panel.querySelector('.panel-quote-text');

        if (headerImage) {
            headerImage.src = member.image;
            headerImage.alt = member.name;
        }
        if (memberName) memberName.textContent = member.name;
        if (memberRole) memberRole.textContent = member.role;
        if (quoteText) quoteText.textContent = member.quote;

        // Story section
        const storyContent = panel.querySelector('.panel-section-content');
        if (storyContent && member.story) {
            const storyParagraphs = member.story.split('\n\n');
            storyContent.innerHTML = storyParagraphs
                .map(function(p) {
                    return '<p class="panel-section-text">' + p + '</p>';
                })
                .join('');
        }

        // Expertise list
        const expertiseList = panel.querySelector('.panel-expertise-list');
        if (expertiseList && member.expertise) {
            expertiseList.innerHTML = member.expertise
                .map(function(skill) {
                    return '<li>' + skill + '</li>';
                })
                .join('');
        }

        // Stats
        const statsContainer = panel.querySelector('.panel-stats');
        if (statsContainer && member.stats) {
            statsContainer.innerHTML = member.stats
                .map(function(stat) {
                    return '<div class="panel-stat-item">' +
                        '<div class="panel-stat-number">' + stat.number + '</div>' +
                        '<div class="panel-stat-label">' + stat.label + '</div>' +
                        '</div>';
                })
                .join('');
        }

        // Social links
        const socialContainer = panel.querySelector('.panel-social');
        if (socialContainer && member.social) {
            socialContainer.innerHTML = member.social
                .map(function(social) {
                    return '<a href="' + social.url + '" target="_blank" class="panel-social-link" aria-label="' + social.platform + '">' +
                        '<i class="' + social.icon + '"></i>' +
                        '</a>';
                })
                .join('');
        }

        // Show panel and overlay
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

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamMembers);
} else {
    initTeamMembers();
}


// ===== SCROLL ANIMATIONS FOR TEAM MEMBERS =====
function initTeamMembersAnimations() {
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

    // Observe team members section
    const teamSection = document.querySelector('.team-members');
    if (teamSection) {
        observer.observe(teamSection);
    }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamMembersAnimations);
} else {
    initTeamMembersAnimations();
}