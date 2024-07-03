const axios = require('axios');

async function fetchAndSortGames() {
  try {
    // Buscar os dados JSON do URL fornecido
    const response = await axios.get('https://hydralinks.cloud/sources/empress.json');
    const data = response.data;
    
    // Extrair o array de downloads
    const downloads = data.downloads;
    
    // Ordenar os downloads por fileSize (convertido para GB)
    downloads.sort((a, b) => {
      const fileSizeA = parseFloat(a.fileSize.split(' ')[0]);
      const fileSizeB = parseFloat(b.fileSize.split(' ')[0]);
      return fileSizeA - fileSizeB;
    });
    
    // Preparar os dados para console.table
    const formattedDownloads = downloads.map(download => ({
      Nome: formatTitle(download.title),
      Tamanho: download.fileSize
    }));
    
    // Imprimir os resultados no formato de tabela
    console.table(formattedDownloads);
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

fetchAndSortGames();
