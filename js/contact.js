// ===== FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        submitBtn.disabled = true;

        // Hide previous messages
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';

        // Simulate form submission (replace with actual backend call)
        try {
            // REPLACE THIS with your actual form submission logic
            // Example with Formspree, EmailJS, or your own backend
            
            /*
            const response = await fetch('YOUR_FORM_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }
            */

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Show success message
            formMessage.textContent = '✓ Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';
            formMessage.classList.add('success');
            formMessage.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Log form data (for testing - remove in production)
            console.log('Form submitted:', data);

        } catch (error) {
            // Show error message
            formMessage.textContent = '✗ Oops! Something went wrong. Please try again or contact us directly via phone or email.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';

            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateInput(input);
            }
        });
    });

    function validateInput(input) {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            input.classList.add('error');
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            input.style.borderColor = '#e74c3c';
            input.classList.add('error');
        } else {
            input.style.borderColor = '#27ae60';
            input.classList.remove('error');
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}


// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});


// ===== SMOOTH SCROLL FOR MAP LINK =====
const mapLink = document.querySelector('a[href="#map-section"]');

if (mapLink) {
    mapLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mapSection = document.getElementById('map-section');
        
        if (mapSection) {
            mapSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
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
    const sections = document.querySelectorAll(
        '.quick-contact, .contact-form-section, .faq-section, .map-section'
    );
    sections.forEach(section => observer.observe(section));

    // Animate quick contact cards
    const qcCards = document.querySelectorAll('.quick-contact-card');
    qcCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});


// ===== FORM FIELD ANIMATIONS =====
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, select, textarea');
    
    if (input) {
        input.addEventListener('focus', () => {
            group.style.transform = 'scale(1.01)';
        });

        input.addEventListener('blur', () => {
            group.style.transform = 'scale(1)';
        });
    }
});


// ===== PREVENT SPAM SUBMISSIONS =====
let lastSubmitTime = 0;
const SUBMIT_COOLDOWN = 5000; // 5 seconds

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const now = Date.now();
        
        if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
            e.preventDefault();
            formMessage.textContent = 'Please wait a few seconds before submitting again.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            return;
        }
        
        lastSubmitTime = now;
    });
}