/**
 * Mobile Wedding Invitation - JavaScript
 * Features: Countdown timer, Gallery lightbox, Scroll animations, Map integration, Copy to clipboard
 */

// ===== Initialize AOS Animation =====
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// ===== Countdown Timer =====
const weddingDate = new Date('2026-06-14T13:10:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<p style="font-size: 1.5rem; color: var(--primary-color);">결혼식이 진행중입니다! 💒</p>';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// ===== Kakao Map Integration =====
window.addEventListener('load', function() {
    // Check if Kakao Maps API is loaded
    if (typeof kakao !== 'undefined' && kakao.maps) {
        initKakaoMap();
    } else {
        // Fallback: Show a static map or message
        console.warn('Kakao Maps API not loaded. Please add your API key.');
        showFallbackMap();
    }
});

function initKakaoMap() {
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.3166, 126.8309), // AW Convention coordinates
        level: 3
    };

    const map = new kakao.maps.Map(container, options);

    // Add marker
    const markerPosition = new kakao.maps.LatLng(37.3166, 126.8309);
    const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map
    });

    // Add info window
    const iwContent = '<div style="padding:15px;font-size:14px;text-align:center;"><strong>안산 AW 컨벤션</strong><br>경기도 안산시 단원구 광덕대로 285</div>';
    const infowindow = new kakao.maps.InfoWindow({
        content: iwContent
    });

    // Show info window on marker click
    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

    // Show info window by default
    infowindow.open(map, marker);
}

function showFallbackMap() {
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = `
        <div style="width:100%;height:100%;background:linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px;text-align:center;">
            <i class="fas fa-map-marked-alt" style="font-size:4rem;color:#d4af37;margin-bottom:20px;"></i>
            <p style="font-size:1.2rem;color:#333;margin-bottom:10px;"><strong>안산 AW 컨벤션</strong></p>
            <p style="font-size:1rem;color:#666;">경기도 안산시 단원구 광덕대로 285</p>
            <p style="font-size:0.9rem;color:#999;margin-top:20px;">* 카카오맵 API 키를 설정하면 지도가 표시됩니다</p>
        </div>
    `;
}

// ===== Copy Address Function =====
function copyAddress() {
    const address = '경기도 안산시 단원구 광덕대로 285';
    copyToClipboard(address, '주소가 복사되었습니다!');
}

// ===== Gallery Lightbox =====
let currentImageIndex = 0;
const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg',
    'images/photo7.jpg',
    'images/photo8.jpg'
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    
    lightbox.classList.add('active');
    lightboxImg.src = images[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    
    lightboxImg.src = images[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});

// Close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('lightbox').addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.getElementById('lightbox').addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            changeImage(1);
        } else {
            // Swipe right - previous image
            changeImage(-1);
        }
    }
}

// ===== Copy Account Number Function =====
function copyAccount(type) {
    let accountNumber;
    if (type === 'groom') {
        accountNumber = document.getElementById('groom-account').textContent;
    } else if (type === 'bride') {
        accountNumber = document.getElementById('bride-account').textContent;
    }
    
    copyToClipboard(accountNumber, '계좌번호가 복사되었습니다!');
}

// ===== Generic Copy to Clipboard Function =====
function copyToClipboard(text, message) {
    // Modern approach
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function() {
            showNotification(message);
        }).catch(function(err) {
            console.error('복사 실패:', err);
            fallbackCopy(text, message);
        });
    } else {
        // Fallback for older browsers
        fallbackCopy(text, message);
    }
}

function fallbackCopy(text, message) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        // Note: document.execCommand('copy') is deprecated but used as fallback for older browsers
        document.execCommand('copy');
        showNotification(message);
    } catch (err) {
        console.error('복사 실패:', err);
        showNotification('복사에 실패했습니다. 수동으로 복사해주세요.');
    }
    
    document.body.removeChild(textArea);
}

// ===== Notification Function =====
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 20px 40px;
        border-radius: 30px;
        font-size: 1rem;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: fadeInOut 2s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(function() {
        if (notification && notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 2000);
}

// Add fadeInOut animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        15% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Scroll Indicator Animation =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const invitationSection = document.querySelector('.invitation-section');
        if (invitationSection) {
            invitationSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ===== Lazy Loading Images (Optional Performance Enhancement) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Log initialization =====
console.log('Wedding Invitation Website Loaded Successfully! 💒');
console.log('Wedding Date: 2026년 6월 14일 (토) 오후 1시 10분');
console.log('Location: 안산 AW 컨벤션');
