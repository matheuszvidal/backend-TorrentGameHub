function formatTitle(title) {
  // Remover o sufixo "-EMPRESS"
  if (title.toUpperCase().endsWith('-EMPRESS')) {
    title = title.slice(0, -8);
  }

  return title.split('.')
    .map(word => (
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )).join(' ');
}

module.exports = formatTitle;