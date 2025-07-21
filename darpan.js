const addCardButtons = document.querySelectorAll('.add-card');
const modal = document.getElementById('modal');
const editBtn = document.getElementById('edit-btn');
const deleteBtn = document.getElementById('delete-btn');
const cancelBtn = document.getElementById('cancel-btn');

let currentCard = null;

addCardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cardText = prompt('Enter task name:');
    if (cardText) {
      const card = document.createElement('div');
      card.textContent = cardText;
      card.className = 'card';

      card.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCard = card;
        modal.style.display = 'flex';
      });

      button.previousElementSibling.appendChild(card);
    }
  });
});

editBtn.addEventListener('click', () => {
  if (currentCard) {
    const newText = prompt('Edit task:', currentCard.textContent);
    if (newText) currentCard.textContent = newText;
    modal.style.display = 'none';
  }
});

deleteBtn.addEventListener('click', () => {
  if (currentCard) {
    currentCard.remove();
    modal.style.display = 'none';
  }
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: close modal when clicking outside the modal box
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
