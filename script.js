document.addEventListener('DOMContentLoaded', () => {
    const filmsList = document.getElementById('films');
    const poster = document.getElementById('poster');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const ticketNum = document.getElementById('ticket-num');
    const buyTicketBtn = document.getElementById('buy-ticket');
  
    // Event listener for clicking on a movie title
    filmsList.addEventListener('click', event => {
      const movieTitle = event.target.textContent;
      // Assuming each movie has an ID from 1 to 12
      fetchMovieDetails(movieTitle); 
    });
  
    // Buy ticket for a movie
    let remainingTickets = 3; // Initial tickets available
    buyTicketBtn.addEventListener('click', () => {
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
  
    // Function to fetch movie details by title
    function fetchMovieDetails(title) {
      // Fetch movie details based on title and update the UI
      // This part depends on how you fetch and structure your movie data
      // I'll leave it as a placeholder for your server-side logic
      // For example, you can fetch movie details from an API based on the title
      // and then update the poster, title, description, and ticket number accordingly
      // Here, we'll just update the UI with placeholders
      poster.src = 'assets/placeholderImage.png';
      title.textContent = title;
      description.textContent = getMovieDescription(title);
      ticketNum.textContent = `${remainingTickets} remaining tickets`;
    }
  
    // Function to update remaining tickets in the UI
    function updateRemainingTickets(remaining) {
      ticketNum.textContent = `${remaining} remaining tickets`;
    }
  
    // Helper function to get movie description based on title
    function getMovieDescription(title) {
      switch (title) {
        case 'Game of Thrones':
          return "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.";
        case 'Teen Wolf':
          return "Scott McCall, an awkward teen, turns into a werewolf after being bitten by one a day before sophomore year. He must learn to adapt to his new identity while handling life as a teenager.";
        case 'Kong Skull Island':
          return "A crew that reaches Skull Island to map it, is attacked by a humongous ape. The survivors then regroup to find out more about the ape, the island's natives and underground monsters.";
        case 'Furiosa':
          return "Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a great biker horde led by the warlord Dementus. Sweeping through the Wasteland, they come across the Citadel, presided over by the Immortan Joe. As the two tyrants fight for dominance, Furiosa soon finds herself in a nonstop battle to make her way home.";
        case 'Fast and Furious 11':
          return "Fast & Furious 11, also known as Fast X Part 2, is the eleventh film in the Fast & Furious series, the twelfth film overall, and the concluding film of main Fast & Furious timeline. The film will be directed by Louis Leterrier and released on April 4th, 2025.";
        case 'The Boys':
          return "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good. What happens when the heroes go rogue and start abusing their powers?";
        case 'House of the Dragon':
          return "After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons.";
        case 'Parasyte: The Grey':
          return "People must rise to combat unidentified parasites after they violently take over human hosts and gain power.";
        case 'Heart of the Hunter':
          return "The quiet retirement of a once-feared assassin in South Africa is interrupted by a desperate call from the daughter of an old and trusted friend whose father has been kidnapped. He uncovers a conspiracy at the heart of the government.";
        case 'The Incredibles':
          return "Forced to adopt a civilian identity and stuck in a white-collar job, Mr Incredible itches to get back into action. When he is lured into a trap by the evil Syndrome, his family contrives to save him.";
        case 'She-hulk':
          return "Jennifer Walters has a complicated life as a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.";
        case 'Dawn of the planets of the apes':
          return "Caesar, a chimpanzee and leader of the evolved apes, allows a human family into his territory. However, due to a vindictive bonobo, misunderstandings arise between the two species, resulting in war.";
        default:
          return "";
      }
    }
  });
  