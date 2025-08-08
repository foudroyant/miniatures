  // Récupère les paramètres de l'URL
  const params = new URLSearchParams(window.location.search);

  // Gère l'affichage de la miniature selon le paramètre "miniature"
  const miniatureId = params.get('miniature') || 'miniature1';
  document.querySelectorAll('.miniature').forEach(div => {
    if (div.id === miniatureId) {
      div.classList.remove('hidden');
    } else {
      div.classList.add('hidden');
    }
  });

  // Modifie tous les éléments avec la classe .title
  const title = params.get('title');
  if (title) {
    document.querySelectorAll('.title').forEach(el => {
      el.innerHTML = title;
    });
  }

  // Modifie tous les éléments avec la classe .subtitle
  const subtitle = params.get('subtitle');
  if (subtitle) {
    document.querySelectorAll('.subtitle').forEach(el => {
      el.innerHTML = subtitle;
    });
  }