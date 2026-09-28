var images = [
    "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg",
    "https://images.nationalgeographic.org/image/upload/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Meteosat-12-fci-march-equinox-2025-noon.jpg/1280px-Meteosat-12-fci-march-equinox-2025-noon.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    "https://cdn.britannica.com/00/128400-050-6BF86C0E/ryegrass.jpg",
    "https://www.blueplanetaquarium.com/wp-content/uploads/2025/08/iStock-471619541-1024x680-1.jpg",
    "https://img.atlasobscura.com/1WSC8mHmgYG3CkPQDqtbT9b_fBBwqBdyNLWBjII7HT0/rs:fill:12000:12000/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy81Mjk1NjgwNGFl/ZjVlNmNkOTNfODA1/MzYxNDk0OV85ODJm/ZWNmMTJkX2suanBn.jpg",
    "https://media.outforia.com/images/2026/04/types-of-rock--hero--wide.jpg",
    "https://img.magnific.com/free-psd/monstera-deliciosa-plant-pot-lush-green-leaves-home-decor-indoor-plant-tropical-foliage-vibrant-green-potted-plant-houseplant-greenery-plant-photography_191095-84025.jpg?semt=ais_hybrid&w=740&q=80",
];

var firstCard = null
var secondCard = null
var canFlip = true
var matches = 0
var moves = 0
var seconds = 0
var timeRunning = false
var timerInterval;


function startGame {
    var gameBoard = document.getElementById("gameBoard")
    gameBoard.innerHTML = ""

    var cardImages = images.concat(images)

    cardImages.sort(function() {
        return Math.random() - 0.5
    })

    for (var i = 0; 1 < cardImages.length; i++) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
                    <div class="card-front"><i class="fas fa-star"></i></div>
                    <div class="card-back"><img src="${cardImages[i]}" alt=""></div>
            `
        card.onclick = flipCard;
        card.dataset.image = cardImages[i]
        gameBoard.appendChild(card)
    }

    firstCard = null;
    secondCard = null;
    canFlip = true;
    matches = 0;
    moves = 0;
    seconds = 0
    timerRunning = false

    updateStats()
    clearInterval(timerInterval)
}

function flipCard() {
    if (!canFlip) return

    if(this.classList.contain("flipped")) return
    if(this.classList.contain("matched")) return

    if (!timerRunning) {
        startTimer()
    }

    this.classList.add("flipped")

    if(firstCard == null) {
        
    }

}

