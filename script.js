const itemsContainer = document.querySelector('.items');
const items = document.querySelectorAll('.item');

let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    selectedItem = item;
    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    item.style.cursor = 'grabbing';
  });
});

document.addEventListener('mousemove', (e) => {
  if (!selectedItem) return;

  const containerRect = itemsContainer.getBoundingClientRect();
  const itemRect = selectedItem.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Keep inside the container
  x = Math.max(0, Math.min(itemsContainer.clientWidth - itemRect.width, x));
  y = Math.max(0, Math.min(itemsContainer.clientHeight - itemRect.height, y));

  selectedItem.style.left = `${x}px`;
  selectedItem.style.top = `${y}px`;
});

document.addEventListener('mouseup', () => {
  if (selectedItem) {
    selectedItem.style.cursor = 'grab';
  }
  selectedItem = null;
});
