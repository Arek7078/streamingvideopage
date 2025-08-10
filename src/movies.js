export async function moviesData() {
  
}


//kategorie filmy 


    export async function categoryMovies(){
      const response = await fetch('./movies.json');
      const data = await response.json();
      const dramatContainer = document.querySelector('.dramat-container');
      data.dramat.forEach(movie =>{
        const movieDiv = document.createElement('div');
        movieDiv.className = 'dramat-movie bg-gray-800 p-2 rounded-lg transition-transform duration-300';
        movieDiv.innerHTML = `
          <img src="${movie.obraz}" alt="${movie.tytul}" class="w-full h-40 object-contain rounded">
          <h3 class="font-bold text-xs md:text-lg font-semibold mt-2">${movie.tytul}</h3>
          <p class="font-bold text-yellow-400 text-xs md:text-lg">Ocena: ${movie.ocena}</p>
          <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer"
             class="font-bold inline-flex items-center gap-2 mt-2 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-xs md:text-lg">
            Obejrzyj trailer
          </a>
        `;
        dramatContainer.appendChild(movieDiv);
      })
      const horrorContainer = document.querySelector('.horror-container');
      data.horror.forEach(movie =>{
        const movieDiv = document.createElement('div');
        movieDiv.className = 'horror-movie bg-gray-800 p-2 rounded-lg transition-transform duration-300';
        movieDiv.innerHTML = `
          <img src="${movie.obraz}" alt="${movie.tytul}" class="w-full h-40 object-contain rounded">
          <h3 class="font-bold text-xs md:text-lg font-semibold mt-2">${movie.tytul}</h3>
          <p class="font-bold text-yellow-400 text-xs md:text-lg">Ocena: ${movie.ocena}</p>
          <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer"
             class="font-bold inline-flex items-center gap-2 mt-2 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-xs md:text-lg">
            Obejrzyj trailer
          </a>
        `;
        horrorContainer.appendChild(movieDiv);
      })
      const comedyContainer = document.querySelector('.comedy-container');
      data.komedie.forEach(movie =>{
        const movieDiv = document.createElement('div');
        movieDiv.className = 'comedy-movie bg-gray-800 p-2 rounded-lg transition-transform duration-300';
        movieDiv.innerHTML = `
          <img src="${movie.obraz}" alt="${movie.tytul}" class="w-full h-40 object-contain rounded">
          <h3 class="font-bold text-xs md:text-lg font-semibold mt-2">${movie.tytul}</h3>
          <p class="font-bold text-yellow-400 text-xs md:text-lg">Ocena: ${movie.ocena}</p>
          <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer"
             class="font-bold inline-flex items-center gap-2 mt-2 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-xs md:text-lg">
            Obejrzyj trailer
          </a>
        `;
        comedyContainer.appendChild(movieDiv);
      })
      const documentaryContainer = document.querySelector('.documentary-container');
      data.dokument.forEach(movie =>{
        const movieDiv = document.createElement('div');
        movieDiv.className = 'documentary-movie bg-gray-800 p-2 rounded-lg transition-transform duration-300';
        movieDiv.innerHTML = `
          <img src="${movie.obraz}" alt="${movie.tytul}" class="w-full h-40 object-contain rounded">
          <h3 class="font-bold text-xs md:text-lg font-semibold mt-2">${movie.tytul}</h3>
          <p class="font-bold text-yellow-400 text-xs md:text-lg">Ocena: ${movie.ocena}</p>
          <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer"
             class="font-bold inline-flex items-center gap-2 mt-2 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-xs md:text-lg">
            Obejrzyj trailer
          </a>
        `;
        documentaryContainer.appendChild(movieDiv);
      })

    }
    
