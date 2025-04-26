const itemsContainer = document.querySelector('.items');
let draggedItem = null;

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', (e) => {
    draggedItem = item;
    setTimeout(() => {
      item.style.display = 'none';
    }, 0);
  });

  item.addEventListener('dragend', (e) => {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  item.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  item.addEventListener('dragenter', (e) => {
    e.preventDefault();
    item.classList.add('drag-over');
  });

  item.addEventListener('dragleave', () => {
    item.classList.remove('drag-over');
  });

  item.addEventListener('drop', (e) => {
    e.preventDefault();
    item.classList.remove('drag-over');
    if (draggedItem !== item) {
      // Insert the dragged item before the one it was dropped on
      itemsContainer.insertBefore(draggedItem, item);
    }
  });
});
