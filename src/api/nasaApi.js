export async function fetchImagens(astro, page = 1) {
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${astro}&page=${page}`);
      const data = await response.json();
  
      return data.collection.items.map((item) => ({
        id: item.data[0].nasa_id,
        titulo: item.data[0].title,
        imagem: item.links ? item.links[0].href : null,
        autor: item.data[0].photographer || "Desconhecido",
        descricao: item.data[0].description || "Sem descrição",
      }));
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      return [];
    }
  }
  