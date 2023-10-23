document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen form, input, daftar belanja, dan tombol "Clear All"
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    const clearButton = document.getElementById('clear');
  
    // Tambahkan item ke daftar belanja saat formulir dikirim
    itemForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah pengiriman formulir
      const newItemText = itemInput.value;
  
      if (newItemText.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
  
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-item btn-link text-red';
        removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        removeButton.addEventListener('click', function () {
          newItem.remove(); // Menghapus item saat tombol di klik
        });
  
        newItem.appendChild(removeButton);
        itemList.appendChild(newItem);
        itemInput.value = ''; // Bersihkan input
      }
    });
  
    // Hapus semua item dari daftar belanja saat tombol "Clear All" diklik
    clearButton.addEventListener('click', function () {
      itemList.innerHTML = ''; // Menghapus semua elemen dalam daftar belanja
    });

  });
  