document.addEventListener('DOMContentLoaded', () => {
    const filmsList = document.getElementById('films');
    const poster = document.getElementById('poster');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const ticketNum = document.getElementById('ticket-num');
    const buyTicketBtn = document.getElementById('buy-ticket');
  
    // Movie details
    const movieDetails = {
        "Game of Thrones": {
            description: "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img1.jpg"
        },
        "Teen Wolf": {
            description: "Scott McCall, an awkward teen, turns into a werewolf after being bitten by one a day before sophomore year. He must learn to adapt to his new identity while handling life as a teenager.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img2.jpg"
        },
        "Kong Skull Island": {
            description: "A crew that reaches Skull Island to map it, is attacked by a humongous ape. The survivors then regroup to find out more about the ape, the island's natives and underground monsters.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img3.jpg"
        },
        "Furiosa": {
            description: "Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a great biker horde led by the warlord Dementus. Sweeping through the Wasteland, they come across the Citadel, presided over by the Immortan Joe. As the two tyrants fight for dominance, Furiosa soon finds herself in a nonstop battle to make her way home.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img4.jpg"
        },
        "Fast and Furious 11": {
            description: "Fast & Furious 11, also known as Fast X Part 2, is the eleventh film in the Fast & Furious series, the twelfth film overall, and the concluding film of main Fast & Furious timeline. The film will be directed by Louis Leterrier and released on April 4th, 2025.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img5.webp"
        },
        "The Boys": {
            description: "Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good. What happens when the heroes go rogue and start abusing their powers?",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img6.jpgg"
        },
        "House of the Dragon": {
            description: "After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img7.jpeg"
        },
        "Parasyte: The Grey": {
            description: "People must rise to combat unidentified parasites after they violently take over human hosts and gain power.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img8.jpg"
        },
        "Heart of the Hunter": {
            description: "The quiet retirement of a once-feared assassin in South Africa is interrupted by a desperate call from the daughter of an old and trusted friend whose father has been kidnapped. He uncovers a conspiracy at the heart of the government.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img9.jpeg"
        },
        "The Incredibles": {
            description: "Forced to adopt a civilian identity and stuck in a white-collar job, Mr Incredible itches to get back into action. When he is lured into a trap by the evil Syndrome, his family contrives to save him.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img10.jpeg"
        },
        "She-hulk": {
            description: "Jennifer Walters has a complicated life as a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/image11.jpeg"
        },
        "Dawn of the planets of the apes": {
            description: "Caesar, a chimpanzee and leader of the evolved apes, allows a human family into his territory. However, due to a vindictive bonobo, misunderstandings arise between the two species, resulting in war.",
            imagePath: "/home/riko/home/phase1/flatdango-code-challenge/images/img12.jpeg"
        }
    };
  
    // Event listener for clicking on a movie title
    filmsList.addEventListener('click', event => {
        const movieTitle = event.target.textContent;
        updateMovieDetails(movieTitle);
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
  
    // Function to update movie details
    function updateMovieDetails(movieTitle) {
        const { description, imagePath } = movieDetails[movieTitle];
        poster.src = imagePath;
        title.textContent = movieTitle;
        description.textContent = description;
        ticketNum.textContent = `${remainingTickets} remaining tickets`;
    }
  
    // Function to update remaining tickets in the UI
    function updateRemainingTickets(remaining) {
        ticketNum.textContent = `${remaining} remaining tickets`;
    }
});
