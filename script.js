document.addEventListener('DOMContentLoaded', () => {
    const sosButton = document.getElementById('sos-button');
    let sosHoldTimer;

    // SOS Button Long Press Functionality
    sosButton.addEventListener('mousedown', startSOSTimer);
    sosButton.addEventListener('mouseup', cancelSOSTimer);
    sosButton.addEventListener('mouseleave', cancelSOSTimer);

    // Touch events for mobile
    sosButton.addEventListener('touchstart', startSOSTimer);
    sosButton.addEventListener('touchend', cancelSOSTimer);

    function startSOSTimer() {
        sosHoldTimer = setTimeout(() => {
            activateEmergencyMode();
        }, 3000);
    }

    function cancelSOSTimer() {
        clearTimeout(sosHoldTimer);
    }

    function activateEmergencyMode() {
        alert('Emergency Mode Activated! Sending SOS to emergency contacts.');
        // In a real app, this would:
        // 1. Send location
        // 2. Notify emergency contacts
        // 3. Potentially call emergency services
    }

    // Quick Action Cards Interactivity
    const actionCards = document.querySelectorAll('.action-card');
    
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            const actionTitle = card.querySelector('h3').textContent;
            switch(actionTitle) {
                case 'Fake Call':
                    alert('Simulating an incoming call...');
                    break;
                case 'Safety Walk':
                    alert('Initiating safety walk tracking...');
                    break;
                case 'Check On Me':
                    alert('Setting up safety timer...');
                    break;
                case 'Share Location':
                    alert('Preparing to share live location...');
                    break;
            }
        });
    });

    // Contact Action Buttons
    const contactCallButtons = document.querySelectorAll('.call-btn');
    const contactMessageButtons = document.querySelectorAll('.message-btn');

    contactCallButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const contactName = button.closest('.contact-card').querySelector('h3').textContent;
            alert(`Calling ${contactName}...`);
        });
    });

    contactMessageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const contactName = button.closest('.contact-card').querySelector('h3').textContent;
            alert(`Preparing message to ${contactName}...`);
        });
    });
});