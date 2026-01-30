/* ===================================
   CHANNEL CONFIGURATION
   =================================== */

/**
 * Channel ID for SeefSavage
 * This is used to fetch the latest videos
 */
const CHANNEL_ID = 'UCwqQP1iu8Jpq7ECpJc9lbgg';

/* ===================================
   SOCIAL LINKS CONFIGURATION
   =================================== */

/**
 * Central configuration object for all social media links
 * 
 * INSTRUCTIONS FOR EDITING:
 * 1. Replace placeholder URLs with your actual social media URLs
 * 2. You can remove platforms you don't use by deleting the entire object
 * 3. You can reorder platforms by changing their order in this object
 * 4. The 'primary' flag determines which link gets emphasized (keep YouTube as primary)
 */

const socialLinks = {
    tiktok: {
        name: 'TikTok',
        url: 'https://tiktok.com/@YourUsername', // REPLACE with your TikTok URL
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>`,
        className: 'tiktok'
    },
    instagram: {
        name: 'Instagram',
        url: 'https://instagram.com/YourUsername', // REPLACE with your Instagram URL
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>`,
        className: 'instagram'
    },
    twitter: {
        name: 'Twitter / X',
        url: 'https://twitter.com/YourUsername', // REPLACE with your Twitter/X URL
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>`,
        className: 'twitter'
    },
    reddit: {
        name: 'Reddit',
        url: 'https://reddit.com/u/YourUsername', // REPLACE with your Reddit URL
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>`,
        className: 'reddit'
    }
};

/* ===================================
   YOUTUBE SUBSCRIBE BUTTON URL
   =================================== */

/**
 * YouTube channel URL for the primary subscribe button
 * The ?sub_confirmation=1 parameter opens the subscription dialog
 */
const youtubeChannelUrl = 'https://www.youtube.com/@SeefSavage?sub_confirmation=1';

/* ===================================
   DOM MANIPULATION
   =================================== */

/**
 * Dynamically populate social media links and load latest video
 * This function runs when the page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    // Set YouTube subscribe button URL
    const youtubeSubscribeBtn = document.getElementById('youtube-subscribe-btn');
    if (youtubeSubscribeBtn) {
        youtubeSubscribeBtn.href = youtubeChannelUrl;
    }

    // Load latest video from channel
    loadLatestVideo();

    // Generate social media buttons
    const socialLinksContainer = document.getElementById('social-links');
    
    if (socialLinksContainer) {
        // Convert object to array for easier manipulation
        const socialLinksArray = Object.entries(socialLinks);
        
        // Sort so primary (YouTube) appears first if not already
        socialLinksArray.sort((a, b) => {
            if (a[1].primary) return -1;
            if (b[1].primary) return 1;
            return 0;
        });
        
        // Generate HTML for each social link
        socialLinksArray.forEach(([key, social]) => {
            const link = createSocialLink(social);
            socialLinksContainer.appendChild(link);
        });
    }
});

/**
 * Load the latest video from the channel using RSS feed
 * This fetches the most recent upload and updates the iframe
 */
async function loadLatestVideo() {
    try {
        // YouTube provides an RSS feed for each channel
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        
        // Fetch the RSS feed using a CORS proxy
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`);
        const xmlText = await response.text();
        
        // Parse the XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        // Get the first (latest) video entry
        const firstEntry = xmlDoc.querySelector('entry');
        
        if (firstEntry) {
            // Extract video ID from the entry
            const videoId = firstEntry.querySelector('videoId')?.textContent;
            
            if (videoId) {
                // Update the iframe with the latest video
                const iframe = document.querySelector('.video-container iframe');
                if (iframe) {
                    iframe.src = `https://www.youtube.com/embed/${videoId}`;
                }
            }
        }
    } catch (error) {
        console.log('Using default playlist embed');
        // If fetch fails, the playlist embed in HTML will be used as fallback
    }
}

/**
 * Create a social media link element with proper accessibility
 * @param {Object} social - Social media platform object
 * @returns {HTMLElement} - Anchor element with icon and text
 */
function createSocialLink(social) {
    // Create anchor element
    const link = document.createElement('a');
    link.href = social.url;
    link.className = `btn social-link ${social.className}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Visit Seef Savage on ${social.name} (opens in new tab)`);
    
    // Create icon container with aria-hidden since it's decorative
    const iconContainer = document.createElement('span');
    iconContainer.className = 'btn-icon';
    iconContainer.setAttribute('aria-hidden', 'true');
    iconContainer.innerHTML = social.icon;
    
    // Create text node
    const text = document.createTextNode(social.name);
    
    // Append icon and text to link
    link.appendChild(iconContainer);
    link.appendChild(text);
    
    return link;
}

/* ===================================
   SMOOTH SCROLL (OPTIONAL ENHANCEMENT)
   =================================== */

/**
 * Add smooth scrolling behavior for any internal links
 * (Currently not used, but available for future enhancements)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#' && targetId.length > 1) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ===================================
   CONSOLE MESSAGE (OPTIONAL)
   =================================== */

// Optional: Add a console message for fellow developers
console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #FF0000;');
console.log('%cBuilt with ❤️ using vanilla HTML, CSS, and JavaScript', 'font-size: 14px; color: #666;');
console.log('%cNo frameworks, no libraries, just pure web technologies.', 'font-size: 14px; color: #666;');
