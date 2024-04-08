document.addEventListener('DOMContentLoaded', () => {
  const filmsList = document.getElementById('films');
  const poster = document.getElementById('poster');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const ticketNum = document.getElementById('ticket-num');
  const buyTicketBtn = document.getElementById('buy-ticket');

  filmsList.addEventListener('click', event => {
    const movieTitle = event.target.textContent;
    fetchMovieDetails(movieTitle);
  });

  buyTicketBtn.addEventListener('click', () => {
    let remainingTickets = parseInt(ticketNum.textContent);
    if (remainingTickets > 0) {
      remainingTickets--;
      updateRemainingTickets(remainingTickets);
      if (remainingTickets === 0) {
        buyTicketBtn.disabled = true;
        buyTicketBtn.textContent = 'Sold Out';
      }
    } else {
      alert('Sorry, this movie is sold out!');
    }
  });

  function fetchMovieDetails(title) {
    fetch('http://localhost:3000/films')
      .then(response => response.json())
      .then(movies => {
        const movie = movies.find(movie => movie.title === title);
        if (movie) {
          poster.src = movie.poster;
          title.textContent = movie.title;
          description.textContent = movie.description;
          const remainingTickets = movie.capacity - movie.tickets_sold;
          ticketNum.textContent = `${remainingTickets} remaining tickets`;
        }
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }

  function updateRemainingTickets(remaining) {
    ticketNum.textContent = `${remaining} remaining tickets`;
  }
});
