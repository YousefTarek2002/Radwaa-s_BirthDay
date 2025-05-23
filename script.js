// دالة لإضافة الكونفيتي والبريق لكل كارت
function addEffects(cardNumber) {
    // إضافة قطع الكونفيتي
    const confettiContainer = document.getElementById(`confetti-container-${cardNumber}`);
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#7A77FF', '#FF9A76'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 8 + 4 + 'px';
        confetti.style.height = Math.random() * 8 + 4 + 'px';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.animationDuration = Math.random() * 3 + 3 + 's';
        confettiContainer.appendChild(confetti);
    }
    
    // إضافة تأثير البريق
    const sparklesContainer = document.getElementById(`sparkles-${cardNumber}`);
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparklesContainer.appendChild(sparkle);
    }
}

// إضافة عناصر خلفية إضافية بشكل ديناميكي
function addBackgroundElements() {
    const body = document.body;
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#7A77FF', '#FF9A76'];
    
    // إضافة كونفيتي للخلفية
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'bg-element confetti-bg';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 10 + 's';
        body.appendChild(confetti);
    }
}

// تحسين تأثيرات الكارت الأول وتغيير الرقم من 19 إلى 20
function enhanceFirstCard() {
    const firstCard = document.querySelector('.card-1');
    const giftBox = document.querySelector('.gift-box');
    const giftLid = document.querySelector('.gift-lid');
    const ageNumber = document.getElementById('age-number');
    
    // التأكد من أن الرقم يبدأ بـ 19
    ageNumber.textContent = '١٩';
    
    // إضافة تأثير فتح صندوق الهدية عند النقر
    giftBox.addEventListener('click', function() {
        // تحريك غطاء الصندوق
        giftLid.style.transform = 'rotateX(-60deg) translateZ(40px)';
        
        // تغيير الرقم من 19 إلى 20
        if (ageNumber.textContent === '١٩') {
            ageNumber.style.transform = 'rotateY(90deg)';
            ageNumber.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                ageNumber.textContent = '٢٠';
                ageNumber.style.transform = 'rotateY(0deg)';
                
                // إضافة كونفيتي عند تغيير الرقم
                createClickConfetti(firstCard);
            }, 500);
            
            // إعادة غطاء الصندوق بعد فترة
            setTimeout(() => {
                giftLid.style.transform = 'rotateX(0) translateZ(0)';
            }, 2000);
        } else {
            ageNumber.style.transform = 'rotateY(90deg)';
            ageNumber.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                ageNumber.textContent = '١٩';
                ageNumber.style.transform = 'rotateY(0deg)';
            }, 500);
            
            // إعادة غطاء الصندوق بعد فترة
            setTimeout(() => {
                giftLid.style.transform = 'rotateX(0) translateZ(0)';
            }, 2000);
        }
    });
    
    // إضافة تأثير الضوء المتحرك
    addLightEffects(firstCard);
    
    // تغيير الرقم تلقائيًا بعد فترة
    setTimeout(() => {
        // تحريك غطاء الصندوق
        giftLid.style.transform = 'rotateX(-60deg) translateZ(40px)';
        
        ageNumber.style.transform = 'rotateY(90deg)';
        ageNumber.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            ageNumber.textContent = '٢٠';
            ageNumber.style.transform = 'rotateY(0deg)';
            
            // إضافة كونفيتي عند تغيير الرقم
            createClickConfetti(firstCard);
        }, 500);
        
        // إعادة غطاء الصندوق بعد فترة
        setTimeout(() => {
            giftLid.style.transform = 'rotateX(0) translateZ(0)';
        }, 2000);
    }, 3000);
}

// إضافة كونفيتي عند النقر
function createClickConfetti(element) {
    const colors = ['#FFD166', '#06D6A0', '#FF5E7D', '#118AB2', '#073B4C'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'click-confetti';
        
        // تحديد موقع وحجم وسرعة عشوائية
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // تحديد اتجاه عشوائي للحركة
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        confetti.style.setProperty('--x', x + 'px');
        confetti.style.setProperty('--y', y + 'px');
        
        element.appendChild(confetti);
        
        // إزالة الكونفيتي بعد انتهاء الأنيميشن
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// إضافة تأثيرات ضوئية
function addLightEffects(element) {
    for (let i = 0; i < 5; i++) {
        const light = document.createElement('div');
        light.className = 'light-effect';
        light.style.left = Math.random() * 100 + '%';
        light.style.top = Math.random() * 100 + '%';
        light.style.width = Math.random() * 60 + 40 + 'px';
        light.style.height = Math.random() * 60 + 40 + 'px';
        light.style.animationDelay = Math.random() * 5 + 's';
        element.querySelector('.card-top').appendChild(light);
    }
}

// إضافة حيوية للكروت في الصفحة
function addCardsDynamics() {
    const cards = document.querySelectorAll('.card');
    
    // إضافة تأثير حركة عند التمرير
    window.addEventListener('scroll', function() {
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                card.style.transform = 'translateY(0) rotate(' + (index % 2 === 0 ? '1deg' : '-1deg') + ')';
                card.style.opacity = '1';
            } else {
                card.style.transform = 'translateY(50px) rotate(0deg)';
                card.style.opacity = '0.7';
            }
        });
    });
    
    // تحريك الكروت بشكل عشوائي
    cards.forEach((card, index) => {
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 5;
            const randomY = (Math.random() - 0.5) * 5;
            const randomRotate = (Math.random() - 0.5) * 2;
            
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
            
            setTimeout(() => {
                card.style.transform = 'translate(0, 0) rotate(' + (index % 2 === 0 ? '1deg' : '-1deg') + ')';
            }, 500);
        }, 5000 + index * 1000);
    });
}

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log("تم تحميل الصفحة");
    
    // إضافة التأثيرات لكل الكروت
    for (let i = 1; i <= 5; i++) {
        addEffects(i);
    }
    
    // إضافة عناصر خلفية إضافية
    addBackgroundElements();
    
    // إضافة حيوية للكروت
    addCardsDynamics();
    
    // إضافة تأثير الكونفيتي للكارت الأول عند النقر
    const firstCard = document.querySelector('.card-1');
    if (firstCard) {
        firstCard.addEventListener('click', function() {
            setTimeout(() => {
                createClickConfetti(firstCard);
                
                // إضافة تأثير صوتي (اختياري)
                playBirthdaySound();
            }, 400); // تأخير لإظهار الكونفيتي بعد الدوران
        });
    }
    
    // إضافة تأثيرات إضافية للكارت الأول
    addExtraEffectsToFirstCard();
});

// إضافة تأثيرات إضافية للكارت الأول
function addExtraEffectsToFirstCard() {
    const firstCard = document.querySelector('.card-1');
    const ageBadge = document.querySelector('.age-badge');
    
    // إضافة نجوم متلألئة حول شارة العمر
    if (ageBadge) {
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('div');
            star.className = 'badge-star';
            star.style.position = 'absolute';
            star.style.width = '10px';
            star.style.height = '10px';
            star.style.background = 'white';
            star.style.borderRadius = '50%';
            star.style.filter = 'blur(1px)';
            star.style.opacity = '0';
            
            // تحديد موقع عشوائي حول الشارة
            const angle = Math.random() * Math.PI * 2;
            const distance = 70 + Math.random() * 20;
            star.style.left = `calc(50% + ${Math.cos(angle) * distance}px)`;
            star.style.top = `calc(50% + ${Math.sin(angle) * distance}px)`;
            
            // إضافة أنيميشن
            star.style.animation = `twinkle 2s ease-in-out ${i * 0.4}s infinite`;
            
            ageBadge.appendChild(star);
        }
    }
}

// تشغيل صوت عيد الميلاد (اختياري)
function playBirthdaySound() {
    // يمكن إضافة صوت هنا إذا كنت ترغب
    console.log("تشغيل صوت عيد الميلاد");
}

// إضافة كونفيتي محسن عند النقر
function createClickConfetti(element) {
    console.log("إضافة كونفيتي");
    const colors = ['#FFD166', '#06D6A0', '#FF5E7D', '#118AB2', '#073B4C', '#ff3d00', '#ff9e00'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'click-confetti';
        
        // تحديد موقع وحجم وسرعة عشوائية
        const size = Math.random() * 12 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // إضافة أشكال مختلفة للكونفيتي
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else if (Math.random() > 0.5) {
            confetti.style.borderRadius = '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        } else {
            confetti.style.width = size / 2 + 'px';
            confetti.style.height = size + 'px';
            confetti.style.borderRadius = '50% 50% 50% 50% / 20% 20% 80% 80%';
        }
        
        // تحديد اتجاه عشوائي للحركة
        const x = (Math.random() - 0.5) * 300;
        const y = (Math.random() - 0.5) * 300;
        confetti.style.setProperty('--x', x + 'px');
        confetti.style.setProperty('--y', y + 'px');
        
        element.appendChild(confetti);
        
        // إزالة الكونفيتي بعد انتهاء الأنيميشن
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// إضافة تأثيرات ضوئية
function addLightEffects(element) {
    for (let i = 0; i < 5; i++) {
        const light = document.createElement('div');
        light.className = 'light-effect';
        light.style.left = Math.random() * 100 + '%';
        light.style.top = Math.random() * 100 + '%';
        light.style.width = Math.random() * 60 + 40 + 'px';
        light.style.height = Math.random() * 60 + 40 + 'px';
        light.style.animationDelay = Math.random() * 5 + 's';
        element.querySelector('.card-top').appendChild(light);
    }
}

// إضافة حيوية للكروت في الصفحة
function addCardsDynamics() {
    const cards = document.querySelectorAll('.card');
    
    // إضافة تأثير حركة عند التمرير
    window.addEventListener('scroll', function() {
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                card.style.transform = 'translateY(0) rotate(' + (index % 2 === 0 ? '1deg' : '-1deg') + ')';
                card.style.opacity = '1';
            } else {
                card.style.transform = 'translateY(50px) rotate(0deg)';
                card.style.opacity = '0.7';
            }
        });
    });
    
    // تحريك الكروت بشكل عشوائي
    cards.forEach((card, index) => {
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 5;
            const randomY = (Math.random() - 0.5) * 5;
            const randomRotate = (Math.random() - 0.5) * 2;
            
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
            
            setTimeout(() => {
                card.style.transform = 'translate(0, 0) rotate(' + (index % 2 === 0 ? '1deg' : '-1deg') + ')';
            }, 500);
        }, 5000 + index * 1000);
    });
}

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log("تم تحميل الصفحة");
    
    // إضافة التأثيرات لكل الكروت
    for (let i = 1; i <= 5; i++) {
        addEffects(i);
    }
    
    // إضافة عناصر خلفية إضافية
    addBackgroundElements();
    
    // إضافة حيوية للكروت
    addCardsDynamics();
    
    // إضافة تأثير الكونفيتي للكارت الأول عند النقر
    const firstCard = document.querySelector('.card-1');
    if (firstCard) {
        firstCard.addEventListener('click', function() {
            setTimeout(() => {
                createClickConfetti(firstCard);
            }, 400); // تأخير لإظهار الكونفيتي بعد الدوران
        });
    }
});

// إضافة كونفيتي عند النقر
function createClickConfetti(element) {
    console.log("إضافة كونفيتي");
    const colors = ['#FFD166', '#06D6A0', '#FF5E7D', '#118AB2', '#073B4C'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'click-confetti';
        
        // تحديد موقع وحجم وسرعة عشوائية
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // تحديد اتجاه عشوائي للحركة
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        confetti.style.setProperty('--x', x + 'px');
        confetti.style.setProperty('--y', y + 'px');
        
        element.appendChild(confetti);
        
        // إزالة الكونفيتي بعد انتهاء الأنيميشن
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// إضافة تأثيرات ضوئية
function addLightEffects(element) {
    for (let i = 0; i < 5; i++) {
        const light = document.createElement('div');
        light.className = 'light-effect';
        light.style.left = Math.random() * 100 + '%';
        light.style.top = Math.random() * 100 + '%';
        light.style.width = Math.random() * 60 + 40 + 'px';
        light.style.height = Math.random() * 60 + 40 + 'px';
        light.style.animationDelay = Math.random() * 5 + 's';
        element.querySelector('.card-top').appendChild(light);
    }
}

// إضافة حيوية للكروت في الصفحة
function addCardsDynamics() {
    const cards = document.querySelectorAll('.card');
    
    // إضافة تأثير حركة عند التمرير
    window.addEventListener('scroll', function() {
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                card.style.transform = 'translateY(0) rotate(' + (index % 2 === 0 ? '1deg' : '-1deg') + ')';
                card.style.opacity = '1';
            } else {
                card.style.transform = 'translateY(50px) rotate(0deg)';
                card.style.opacity = '0.7';
            }
        });
    });
    
    // تحريك الكروت بشكل عشوائي
    cards.forEach((card, index) => {
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 5;
            const randomY = (Math.random() - 0.5) * 5;
            const randomRotate = (Math.random() - 0.5) * 2;
            
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
            
            setTimeout(() => {
                card.style.transform = 'translate(0, 0) rotate(' + (index % 2 === 0 ? '1deg' : '-1deg') + ')';
            }, 500);
        }, 5000 + index * 1000);
    });
}

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log("تم تحميل الصفحة");
    
    // إضافة التأثيرات لكل الكروت
    for (let i = 1; i <= 5; i++) {
        addEffects(i);
    }
    
    // إضافة عناصر خلفية إضافية
    addBackgroundElements();
    
    // إضافة حيوية للكروت
    addCardsDynamics();
    
    // إضافة تأثير الكونفيتي للكارت الأول عند النقر
    const firstCard = document.querySelector('.card-1');
    if (firstCard) {
        firstCard.addEventListener('click', function() {
            setTimeout(() => {
                createClickConfetti(firstCard);
            }, 400); // تأخير لإظهار الكونفيتي بعد الدوران
        });
    }
});








