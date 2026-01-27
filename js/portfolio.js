// ===== PROJECT DATA =====
const projectsData = {
    1: {
        category: "Branding & Design",
        title: "EcoGreen Rebranding",
        client: "EcoGreen Solutions Ltd.",
        description: "A complete brand transformation for EcoGreen, an environmental consulting firm looking to modernize their image and appeal to a younger, eco-conscious audience. We created a fresh, vibrant brand identity that reflects their commitment to sustainability while maintaining professional credibility.",
        services: [
            "Brand Strategy Development",
            "Logo Design & Identity",
            "Color Palette & Typography",
            "Brand Guidelines",
            "Marketing Collateral",
            "Social Media Templates"
        ],
        results: [
            { number: "250%", label: "Brand Recognition" },
            { number: "180%", label: "Social Engagement" },
            { number: "95%", label: "Client Satisfaction" }
        ],
        hasBeforeAfter: true,
        beforeImage: "../assets/images/ecogreen-before.jpg",
        afterImage: "../assets/images/ecogreen-after.jpg"
    },
    2: {
        category: "Social Media Management",
        title: "StyleHub Social Campaign",
        client: "StyleHub Fashion",
        description: "A strategic 6-month social media campaign designed to increase brand awareness and drive online sales for StyleHub, a emerging fashion retailer. Through compelling content, influencer partnerships, and community engagement, we transformed their social presence.",
        services: [
            "Social Media Strategy",
            "Content Creation & Curation",
            "Community Management",
            "Influencer Partnerships",
            "Paid Social Advertising",
            "Analytics & Reporting"
        ],
        results: [
            { number: "320%", label: "Follower Growth" },
            { number: "280%", label: "Engagement Rate" },
            { number: "150%", label: "Website Traffic" }
        ],
        hasBeforeAfter: false,
        image: "https://res.cloudinary.com/djmyiuu5k/image/upload/v1769555645/stylehub_stjxiv.jpg"
    },
    3: {
        category: "Web Design & Development",
        title: "TechVision Website Redesign",
        client: "TechVision Innovations",
        description: "A modern, conversion-focused website redesign for TechVision, a B2B technology solutions provider. We created an intuitive user experience with clean design, improved navigation, and strategic calls-to-action that significantly increased lead generation.",
        services: [
            "UX/UI Design",
            "Responsive Development",
            "Content Management System",
            "SEO Optimization",
            "Performance Optimization",
            "Analytics Integration"
        ],
        results: [
            { number: "150%", label: "Online Inquiries" },
            { number: "40%", label: "Bounce Rate Reduction" },
            { number: "220%", label: "Page Speed Increase" }
        ],
        hasBeforeAfter: false,
        image: "../https://res.cloudinary.com/djmyiuu5k/image/upload/v1769555647/techvision_vcclpq.jpg"
    },
    4: {
        category: "Content Creation",
        title: "FreshBites Content Series",
        client: "FreshBites Restaurant Group",
        description: "A comprehensive content creation campaign for FreshBites, featuring professional food photography, recipe videos, and engaging social media content. We helped them build a consistent brand voice and visual identity across all platforms.",
        services: [
            "Professional Photography",
            "Video Production",
            "Recipe Content Writing",
            "Social Media Graphics",
            "Content Calendar Planning",
            "Brand Voice Development"
        ],
        results: [
            { number: "200%", label: "Content Engagement" },
            { number: "175%", label: "Share Rate" },
            { number: "130%", label: "Foot Traffic" }
        ],
        hasBeforeAfter: false,
        image: "../assets/images/project-4.jpg"
    },
    5: {
        category: "Digital PR",
        title: "UrbanLife PR Campaign",
        client: "UrbanLife Magazine",
        description: "A targeted digital PR campaign to increase brand visibility and establish UrbanLife as a thought leader in urban lifestyle content. Through strategic media outreach, press releases, and influencer partnerships, we secured premium coverage in major publications.",
        services: [
            "PR Strategy Development",
            "Press Release Writing",
            "Media Outreach",
            "Influencer Relations",
            "Crisis Management",
            "Media Monitoring"
        ],
        results: [
            { number: "45", label: "Media Placements" },
            { number: "12M", label: "Media Impressions" },
            { number: "350%", label: "Brand Mentions" }
        ],
        hasBeforeAfter: false,
        image: "../assets/images/project-5.jpg"
    },
    6: {
        category: "Branding & Design",
        title: "PureWave Brand Identity",
        client: "PureWave Water Co.",
        description: "Creating a complete brand identity from scratch for PureWave, a new premium bottled water company. We developed a clean, minimalist brand that communicates purity, health, and sustainability while standing out in a crowded market.",
        services: [
            "Brand Naming & Strategy",
            "Logo & Visual Identity",
            "Packaging Design",
            "Brand Guidelines",
            "Marketing Materials",
            "Launch Campaign"
        ],
        results: [
            { number: "500K", label: "First Year Sales" },
            { number: "85%", label: "Brand Recall" },
            { number: "4.8/5", label: "Customer Rating" }
        ],
        hasBeforeAfter: true,
        beforeImage: "../assets/images/purewave-before.jpg",
        afterImage: "../assets/images/purewave-after.jpg"
    },
    7: {
        category: "Social Media Management",
        title: "FitZone Instagram Growth",
        client: "FitZone Fitness Studios",
        description: "An Instagram-focused growth strategy for FitZone, helping them build an engaged community of fitness enthusiasts. Through authentic content, strategic hashtags, and interactive stories, we dramatically increased their following and class bookings.",
        services: [
            "Instagram Strategy",
            "Content Production",
            "Community Engagement",
            "Instagram Stories & Reels",
            "Hashtag Research",
            "Influencer Collaborations"
        ],
        results: [
            { number: "400%", label: "Follower Increase" },
            { number: "180%", label: "Story Views" },
            { number: "250%", label: "Class Bookings" }
        ],
        hasBeforeAfter: false,
        image: "../assets/images/project-7.jpg"
    },
    8: {
        category: "Web Design & Development",
        title: "Luxe Hotel E-Commerce",
        client: "Luxe Boutique Hotels",
        description: "A sophisticated e-commerce website for Luxe Hotels, featuring online booking, virtual tours, and seamless payment integration. The design emphasizes luxury and user experience, resulting in increased direct bookings and reduced reliance on third-party platforms.",
        services: [
            "E-Commerce Development",
            "Booking System Integration",
            "Virtual Tour Implementation",
            "Payment Gateway Setup",
            "Mobile App Development",
            "CRM Integration"
        ],
        results: [
            { number: "300%", label: "Direct Bookings" },
            { number: "60%", label: "Commission Savings" },
            { number: "95%", label: "User Satisfaction" }
        ],
        hasBeforeAfter: false,
        image: "../assets/images/project-8.jpg"
    }
};


// ===== FILTER FUNCTIONALITY =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.portfolio-project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projects.forEach((project, index) => {
            const category = project.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                project.classList.remove('hide');
                setTimeout(() => {
                    project.classList.add('show');
                }, index * 50);
            } else {
                project.classList.remove('show');
                project.classList.add('hide');
            }
        });
    });
});

// Initial animation for projects
document.addEventListener('DOMContentLoaded', () => {
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('show');
        }, index * 100);
    });
});


// ===== MODAL FUNCTIONALITY =====
const modal = document.getElementById('projectModal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');
const viewProjectButtons = document.querySelectorAll('.view-project-btn');

// Open modal
viewProjectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = button.getAttribute('data-project');
        openModal(projectId);
    });
});

// Close modal
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function openModal(projectId) {
    const project = projectsData[projectId];
    
    // Populate modal content
    modal.querySelector('.modal-category').textContent = project.category;
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-client').textContent = `Client: ${project.client}`;
    modal.querySelector('.modal-description').textContent = project.description;

    // Services list
    const servicesList = modal.querySelector('.modal-services');
    servicesList.innerHTML = '';
    project.services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
    });

    // Results
    const resultsGrid = modal.querySelector('.modal-results');
    resultsGrid.innerHTML = '';
    project.results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <div class="result-number">${result.number}</div>
            <div class="result-label">${result.label}</div>
        `;
        resultsGrid.appendChild(resultItem);
    });

    // Handle Before/After or Regular Image
    const beforeAfterContainer = modal.querySelector('.before-after-container');
    const modalImageContainer = modal.querySelector('.modal-image-container');

    if (project.hasBeforeAfter) {
        beforeAfterContainer.style.display = 'block';
        modalImageContainer.style.display = 'none';
        
        modal.querySelector('.ba-before').src = project.beforeImage;
        modal.querySelector('.ba-after').src = project.afterImage;
        
        // Reset slider
        const slider = modal.querySelector('.ba-slider');
        slider.value = 50;
        updateBeforeAfter(50);
    } else {
        beforeAfterContainer.style.display = 'none';
        modalImageContainer.style.display = 'block';
        modal.querySelector('.modal-image').src = project.image;
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}


// ===== BEFORE/AFTER SLIDER =====
const baSlider = document.getElementById('baSlider');

if (baSlider) {
    baSlider.addEventListener('input', (e) => {
        updateBeforeAfter(e.target.value);
    });
}

function updateBeforeAfter(value) {
    const afterImage = modal.querySelector('.ba-after');
    afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
}


// ===== LOAD MORE FUNCTIONALITY =====
const loadMoreBtn = document.querySelector('.load-more-btn');
let projectsShown = 8; // Initially show all 8 projects

if (loadMoreBtn) {
    // Hide the button initially since we're showing all projects
    loadMoreBtn.style.display = 'none';

    // If you want to implement actual load more functionality:
    /*
    // Hide projects beyond the initial count
    projects.forEach((project, index) => {
        if (index >= 4) {
            project.style.display = 'none';
        }
    });

    loadMoreBtn.addEventListener('click', () => {
        const hiddenProjects = Array.from(projects).filter(p => p.style.display === 'none');
        
        hiddenProjects.slice(0, 4).forEach((project, index) => {
            setTimeout(() => {
                project.style.display = 'block';
                project.classList.add('show');
            }, index * 100);
        });

        projectsShown += 4;
        
        if (projectsShown >= projects.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
    */
}


// ===== SCROLL ANIMATIONS =====
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

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.trusted-by, .portfolio-section');
    sections.forEach(section => observer.observe(section));
});