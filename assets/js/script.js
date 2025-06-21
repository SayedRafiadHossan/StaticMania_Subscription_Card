function toggleBilling(view) {
    // Toggle Button
    const toggleButtons = document.querySelectorAll('.toggle-option');
    toggleButtons.forEach(button => {
        if(button.classList.contains(view)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if(card.classList.contains(view)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Default view
window.onload = function() {
    toggleBilling('Monthly');
}