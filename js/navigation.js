// Add to each HTML file - Interactive Navigation
document.addEventListener('DOMContentLoaded', function() {
  // Bottom Navigation
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  bottomNavItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const pages = ['02-dashboard.html', '03-schedule-list.html', '06-marketplace.html', '12-notifications.html', '08-profile.html'];
      if (pages[index]) {
        window.location.href = pages[index];
      }
    });
  });
  
  // FAB (Check-in button)
  const fab = document.querySelector('.fab');
  if (fab) {
    fab.style.cursor = 'pointer';
    fab.addEventListener('click', function() {
      window.location.href = '11-checkin.html';
    });
  }
  
  // Make cards clickable
  const cards = document.querySelectorAll('.card, .shift-card, .list-item');
  cards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      window.location.href = '05-schedule-detail.html';
    });
  });
});
