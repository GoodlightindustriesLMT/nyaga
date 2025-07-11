document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality for main navigation
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    const activateTab = (targetTabId) => {
        // Remove 'active' class from all tab links
        tabLinks.forEach(item => item.classList.remove('active'));

       

        // Hide all tab content
        tabContents.forEach(content => content.classList.remove('active'));

        // Show the corresponding tab content
        const targetTabContent = document.getElementById(targetTabId);
        if (targetTabContent) {
            targetTabContent.classList.add('active');
        }

        // Close the mobile menu if it's open
        const navMenu = document.querySelector('header nav');
        const mobileMenuIcon = document.querySelector('.mobile-menu i');
        if (navMenu && navMenu.classList.contains('mobile-active')) {
            navMenu.classList.remove('mobile-active');
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        }
    };

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetTabId = link.getAttribute('href').substring(1);
            activateTab(targetTabId);
        });
    });

    // Functionality for "Explore Collections" and "Order Now" buttons (and similar)
    const navTabLinks = document.querySelectorAll('.nav-tab-link'); // Select elements with this class

    navTabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetTabId = link.getAttribute('data-tab'); // Use data-tab for these buttons
            if (targetTabId) {
                activateTab(targetTabId);
            }
        });
    });

    // Set initial active tab (Home tab)
    const defaultTabLink = document.querySelector('.tab-link[href="#home"]');
    if (defaultTabLink) {
        // Only set active if no hash in URL, to allow direct linking
        if (!window.location.hash) {
            defaultTabLink.classList.add('active');
            document.getElementById('home').classList.add('active');
        } else {
            // If there's a hash, activate that tab
            const initialTabId = window.location.hash.substring(1);
            activateTab(initialTabId);
        }
    }

    // --- Hamburger Menu Functionality ---
    const mobileMenuIcon = document.querySelector('.mobile-menu i');
    const navMenu = document.querySelector('header nav');

    if (mobileMenuIcon && navMenu) {
        mobileMenuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');

            if (navMenu.classList.contains('mobile-active')) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times');
            } else {
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a navigation link within the menu is clicked
        // This is already covered by the activateTab function now.
    }

    // --- Accordion Functionality (for FAQ) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            accordionItem.classList.toggle('active');

            const icon = header.querySelector('.accordion-icon');
            if (accordionItem.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // --- Blog Post Detail Sections ---
    const blogReadMoreBtns = document.querySelectorAll('.btn-read-more');
    const backToBlogBtns = document.querySelectorAll('.back-to-blog-btn');

    blogReadMoreBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = btn.getAttribute('data-target');
            document.querySelector('#blog-faq').classList.remove('active'); // Hide main blog/faq
            document.getElementById(targetId).classList.add('active'); // Show specific blog post
        });
    });

    backToBlogBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const currentDetailSection = btn.closest('.blog-post-detail-section');
            if (currentDetailSection) {
                currentDetailSection.classList.remove('active'); // Hide specific blog post
            }
            document.querySelector('#blog-faq').classList.add('active'); // Show main blog/faq
        });
    });

    // --- Collection Detail Sections (New) ---
    // Add "View Details" buttons to each collection item in HTML with data-target
    // Example: <a href="#" class="btn btn-collection view-collection-details" data-target="aromatherapy-collection-detail">View Collection</a>

    // NOTE: You don't have "View Collection" buttons in your HTML for collection items.
    // If you add them, you would need to uncomment and adapt the following:

    /*
    const viewCollectionDetailsBtns = document.querySelectorAll('.view-collection-details');
    const backToCollectionsBtns = document.querySelectorAll('.back-to-collections-btn');

    viewCollectionDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = btn.getAttribute('data-target');
            document.querySelector('#collections').classList.remove('active'); // Hide main collections
            document.getElementById(targetId).classList.add('active'); // Show specific collection detail
        });
    });

    backToCollectionsBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const currentDetailSection = btn.closest('.collection-detail-section');
            if (currentDetailSection) {
                currentDetailSection.classList.remove('active'); // Hide specific collection detail
            }
            document.querySelector('#collections').classList.add('active'); // Show main collections
        });
    });
    */
});document.addEventListener('DOMContentLoaded', function() {
    // ... other logic ...

    // --- Mobile Menu Logic (Hamburger) ---
    const hamburger = document.querySelector('.hamburger');
    const navTabs = document.querySelector('nav .tabs');

    hamburger.addEventListener('click', function() {
        navTabs.classList.toggle('open');
        // Close menu if a tab is clicked inside the mobile menu
        navTabs.querySelectorAll('.tab-link').forEach(link => {
            link.addEventListener('click', () => {
                navTabs.classList.remove('open');
            });
        });
    });

    // ... rest of the logic ...
});