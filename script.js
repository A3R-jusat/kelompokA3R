const modal = document.getElementById('modal');
const $ = (id) => document.getElementById(id);

function openModal(card) {
  const { name, role, desc, photo } = card.dataset;
  $('m-name').textContent = name;
  $('m-role').textContent = role;
  $('m-desc').textContent = desc;
  $('m-initial').textContent = name[0];
  const img = $('m-photo');
  img.style.display = '';
  img.onerror = () => { img.style.display = 'none'; };
  img.src = photo;
  modal.hidden = false;
  $('m-close').focus();
}
const closeModal = () => { modal.hidden = true; };

document.querySelectorAll('.member').forEach((c) =>
  c.addEventListener('click', () => openModal(c))
);
$('m-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
