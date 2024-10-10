<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SPLASH</title>
    <link rel="icon" href="https://raw.githubusercontent.com/pizzaddicted4life/SXHUB.github.io/refs/heads/main/assets/images/00-_2_-.ico">
    <style> 
    body {
      font-family: 'HortaRegular';
      font-weight: normal;
      font-style: normal;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    
    .card {
      width: 100%;
      height: auto;
      perspective: 1000px;
    }

    .face {
      width: 100%;
      height: auto;
      border-radius: 3vw;
      position: absolute;
      backface-visibility: hidden;
      transition: transform 0.6s;
    }

    .face-front {
      background-color: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .face-back {
      background-color: none;
      color: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotateY(180deg);
    } 

    .card:hover .face-front {
      transform: rotateY(180deg);
    }

    .card:hover .face-back {
      transform: rotateY(0deg);
    }

    .card .face img {
      border-radius: 3vw;
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    .card-container {
      position: relative;
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-container">
      <div class="face face-front">
        <a href="https://github.com/pizzaddicted4life/savage.github.io">
          <img src="https://cdn.carnalplus.com/content/contentthumbs/498-banner.1723023141.jpg" alt="Front Image">
        </a>
      </div>
      <div class="face face-back">
        <a href="https://github.com/pizzaddicted4life/savage.github.io">
            <img src="https://imagecdn.carnalplus.com/imgsize/custom_assets/images/GrabbysAmerica_Wins_desktop.jpg?v=1717168005&width=1600&type=webp" alt="Back Image">
        </a>
      </div>
    </div>
  </div>
</body>
</html>
