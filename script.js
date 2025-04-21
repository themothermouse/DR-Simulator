// --- DUMMY DATA (Replace with your actual data) ---
const ALL_QUEENS = [
    { id: "Onya Nurve", name: "Onya Nurve", image: "queens/OnyaNurve.webp", stats: { acting: 15, improv: 12, comedy: 12, dance: 12, lipsync: 12, singing: 14, runway: 10, design: 8, branding: 11, charisma: 12, storyline: 15 } },
    { id: "Jewels Sparkles", name: "Jewels Sparkles", image: "queens/JewelsSparkles.webp", stats: { acting: 9, improv: 10, comedy: 8, dance: 12, lipsync: 12, singing: 9, runway: 11, design: 12, branding: 9, charisma: 11, storyline: 9 } },
    { id: "Lexi Love", name: "Lexi Love", image: "queens/LexiLove.webp", stats: { acting: 10, improv: 7, comedy: 7, dance: 14, lipsync: 13, singing: 10, runway: 12, design: 10, branding: 12, charisma: 8, storyline: 9 } },
    { id: "Sam Star", name: "Sam Star", image: "queens/SamStar.webp", stats: { acting: 11, improv: 10, comedy: 12, dance: 9, lipsync: 10, singing: 10, runway: 13, design: 15, branding: 9, charisma: 8, storyline: 9 } },
    { id: "Acacia Forgot", name: "Acacia Forgot", image: "queens/AcaciaForgot.webp", stats: { acting: 7, improv: 7, comedy: 7, dance: 6, lipsync: 8, singing: 9, runway: 6, design: 4, branding: 7, charisma: 4, storyline: 9 } },
    { id: "Hormona Lisa", name: "Hormona Lisa", image: "queens/HormonaLisa.webp", stats: { acting: 9, improv: 8, comedy: 10, dance: 6, lipsync: 8, singing: 11, runway: 6, design: 4, branding: 7, charisma: 8, storyline: 9 } },
    { id: "Crystal Envy", name: "Crystal Envy", image: "queens/CrystalEnvy.webp", stats: { acting: 9, improv: 8, comedy: 9, dance: 10, lipsync: 10, singing: 10, runway: 12, design: 12, branding: 9, charisma: 8, storyline: 9 } },
    { id: "Arrietty", name: "Arrietty", image: "queens/Arrietty.webp", stats: { acting: 7, improv: 7, comedy: 7, dance: 6, lipsync: 8, singing: 9, runway: 15, design: 15, branding: 7, charisma: 6, storyline: 9 } },
    { id: "Kori King", name: "Kori King", image: "queens/KoriKing.webp", stats: { acting: 6, improv: 6, comedy: 7, dance: 6, lipsync: 8, singing: 9, runway: 6, design: 4, branding: 7, charisma: 11, storyline: 9 } },
    { id: "Lydia B. Kollins", name: "Lydia B. Kollins", image: "queens/LydiaBKollins.webp", stats: { acting: 8, improv: 7, comedy: 13, dance: 10, lipsync: 12, singing: 8, runway: 10, design: 8, branding: 5, charisma: 10, storyline: 9 } },
    { id: "Joella", name: "Joella", image: "queens/Joella.webp", stats: { acting: 5, improv: 5, comedy: 5, dance: 5, lipsync: 5, singing: 5, runway: 5, design: 5, branding: 5, charisma: 5, storyline: 9 } },
    { id: "Lucky Starzzz", name: "Lucky Starzzz", image: "queens/LuckyStarzzz.webp", stats: { acting: 4, improv: 4, comedy: 4, dance: 6, lipsync: 4, singing: 4, runway: 6, design: 2, branding: 4, charisma: 3, storyline: 9 } },
    { id: "Suzie Toot", name: "Suzie Toot", image: "queens/SuzieToot.webp", stats: { acting: 12, improv: 12, comedy: 11, dance: 10, lipsync: 10, singing: 12, runway: 9, design: 4, branding: 11, charisma: 10, storyline: 9 } },
    { id: "Lana JaRae", name: "Lana JaRae", image: "queens/LanaJaRae.webp", stats: { acting: 7, improv: 7, comedy: 7, dance: 15, lipsync: 15, singing: 9, runway: 6, design: 8, branding: 8, charisma: 13, storyline: 9 } },  
    {
        "id": "AkeriaCDavenport",
        "name": "A'keria C. Davenport",
        "image": "queens/AkeriaCDavenport.webp",
        "stats": {
          "acting": 10, // Ep 2 SAFE, Ep 9 WIN (+3)
          "improv": 9, // Ep 3 BTM6 (-1), Ep 8 SAFE, Ep 9 WIN (+3)
          "comedy": 8, // Ep 3 BTM6 (-1), Ep 8 SAFE, Ep 9 WIN (+3)
          "dance": 10, // Ep 6 WIN (+3), Ep 12 HIGH (+2)
          "lipsync": 9, // BTM2 Win (Ep 7) (+2), Final LS Loss (-1) = Base + 1 -> 8 -> +1 win = 9
          "singing": 9, // Ep 4 SAFE, Ep 12 HIGH (+2)
          "runway": 11, // Strong consistent runways, High Makeover (Ep 11) (+2)
          "design": 8, // Ep 1 HIGH (+2), Ep 5 SAFE, Ep 7 BTM2 (-2), Ep 11 HIGH (+2) = Base 7+4=11 (adjust down for BTM) -> 8 seems fair
          "branding": 9, // Ep 12 HIGH (+2)
          "charisma": 12, // Strong presence, polished, finalist
          "storyline": 11  // Pageant queen showing versatility, finalist arc
        }
      },
      {
        "id": "ArielVersace",
        "name": "Ariel Versace",
        "image": "queens/ArielVersace.webp",
        "stats": {
          "acting": 6,  // Ep 2 LOW (-1)
          "improv": 7,  // Ep 3 SAFE
          "comedy": 7,  // Ep 3 SAFE
          "dance": 7,   // Ep 4 SAFE
          "lipsync": 6, // BTM2 Loss (Ep 5) (-1)
          "singing": 7, // Ep 4 SAFE
          "runway": 9,  // Known for looks, decent runways
          "design": 7,  // Ep 1 SAFE, Ep 5 BTM2 (-2)
          "branding": 7,
          "charisma": 8,
          "storyline": 7 // Early out, some conflict
        }
      },
      {
        "id": "BrookeLynnHytes",
        "name": "Brooke Lynn Hytes",
        "image": "queens/BrookeLynnHytes.webp",
        "stats": {
          "acting": 12, // Ep 2 LOW (-1), Ep 4 HIGH (+2), Ep 9 HIGH (+2), Ep 10 HIGH (+2) = Base 7+5=12
          "improv": 7,  // Ep 3 SAFE, Ep 8 BTM2 (-2), Ep 9 HIGH (+2) = Base 7+0=7
          "comedy": 7,  // Ep 3 SAFE, Ep 8 BTM2 (-2), Ep 9 HIGH (+2), Ep 10 HIGH (+2) = Base 7+2=9 - feels low, let's make it 8 based on overall. Or stick to 7 due to Snatch game? let's do 7
          "dance": 10,  // Ep 4 HIGH (+2), Ep 6 SAFE, Ep 12 BTM2 (-2) = Base 7+0 = 7. Highly regarded dancer, adjust up to 10
          "lipsync": 14, // BTM2 Win (Ep 8) (+2), BTM2 Win (Ep 12) (+2), Final LS Win (+2), Final LS Loss (-1) = Base 7+5=12. Known lipsyncer -> 14
          "singing": 8, // Ep 4 HIGH (+2), Ep 12 BTM2 (-2) = Base 7 + 0 = 7 -> Needs Rusical bump? 8
          "runway": 14, // Ep 5 WIN (+3), Ep 11 WIN (+3) -> Many strong runways -> 14
          "design": 15, // Ep 1 WIN (+3), Ep 5 WIN (+3), Ep 7 HIGH (+2), Ep 11 WIN (+3) = Base 7+11=18 -> 15 cap
          "branding": 6, // Ep 12 BTM2 (-2) = Base 7-2=5 -> needs some boost? 6
          "charisma": 12, // Polished, professional, runner-up
          "storyline": 13  // Relationship arc, top competitor, runner-up
        }
      },
      {
        "id": "HoneyDavenport",
        "name": "Honey Davenport",
        "image": "queens/HoneyDavenport.webp",
        "stats": {
          "acting": 7,  // Ep 2 SAFE
          "improv": 6,  // Ep 3 BTM6 ELIM (-3)
          "comedy": 6,  // Ep 3 BTM6 ELIM (-3)
          "dance": 7,   // N/A
          "lipsync": 5, // BTM6 Loss (Ep 3) (-1) = Base 7-1= 6. Adjust 5 seems right for elim.
          "singing": 7, // N/A
          "runway": 7,  // Avg runways
          "design": 7,  // Ep 1 SAFE
          "branding": 7,
          "charisma": 8,
          "storyline": 7 // Early out, Davenport connection
        }
      },
       {
        "id": "KahannaMontrese",
        "name": "Kahanna Montrese",
        "image": "queens/KahannaMontrese.webp",
        "stats": {
          "acting": 6,  // Ep 2 BTM2 ELIM (-3)
          "improv": 7,  // N/A
          "comedy": 7,  // N/A
          "dance": 7,   // N/A
          "lipsync": 7, // BTM2 Win (Ep 1) (+2), BTM2 Loss (Ep 2) (-1) = Base 7+1 = 8 -> feels high? lets try 7
          "singing": 7, // N/A
          "runway": 6,  // Below avg runways
          "design": 6,  // Ep 1 BTM2 (-2)
          "branding": 7,
          "charisma": 7,
          "storyline": 6 // Very early out
        }
      },
     {
        "id": "MercedesImanDiamond",
        "name": "Mercedes Iman Diamond",
        "image": "queens/MercedesImanDiamond.webp",
        "stats": {
          "acting": 7,  // Ep 2 BTM2 (+/- 0) -> neg crit safe. Let's use BTM as base. Ep 4 BTM2 (-2) ELIM (-3)= -5
          "improv": 7,  // Ep 3 SAFE
          "comedy": 7,  // Ep 3 SAFE
          "dance": 6,   // Ep 4 BTM2 (-2) -> Musical Role -> Low Dance stat -> 6
          "lipsync": 6, // BTM2 Win (Ep 2) (+2), BTM2 Loss (Ep 4) (-1) = Base 7+1 = 8 -> Adjust 6 seem more fair.
          "singing": 6, // Ep 4 BTM2 (-2) -> Low performance overall -> 6
          "runway": 7,  // Average
          "design": 7,  // Ep 1 LOW (-1)
          "branding": 7,
          "charisma": 9, // Memorable personality despite run
          "storyline": 8 // "Opulence" moment
        }
      },
      {
        "id": "NinaWest",
        "name": "Nina West",
        "image": "queens/NinaWest.webp",
        "stats": {
          "acting": 12, // Ep 2 SAFE, Ep 3 WIN (+3), Ep 4 SAFE, Ep 8 HIGH (+2), Ep 10 WIN (+3) = Base 7+8=15 -> Let's reduce to 12 due to non-acting wins
          "improv": 13, // Ep 3 WIN (+3), Ep 8 HIGH (+2), Ep 9 SAFE, Ep 10 WIN (+3) = Base 7+8=15 -> Camp queen 13 is good
          "comedy": 14, // Ep 3 WIN (+3), Ep 8 HIGH (+2), Ep 9 SAFE, Ep 10 WIN (+3) = Base 7+8=15 -> Strongest skill, 14
          "dance": 7,   // Ep 4 SAFE, Ep 6 LOW (-1)
          "lipsync": 6, // BTM2 Loss (Ep 11) (-1) -> 6
          "singing": 8, // Ep 4 SAFE, Ep 8 HIGH (+2) -> based on snatch game characters -> 8 seems right
          "runway": 8,  // Often critiqued on runway
          "design": 5,  // Ep 1 LOW (-1), Ep 5 SAFE, Ep 7 LOW (-1), Ep 11 BTM2 (-2) -> Base 7-4 = 3 -> Feels low? Raise to 7 based on safe placements? lets try 7
          "branding": 10, // Strong brand identity
          "charisma": 10, // Miss Congeniality, fan favorite
          "storyline": 12  // Camp queen, late-game stumble, MC win
        }
      },
     {
        "id": "PlastiqueTiara",
        "name": "Plastique Tiara",
        "image": "queens/PlastiqueTiara.webp",
        "stats": {
          "acting": 8,  // Ep 2 HIGH (+2), Ep 9 BTM2 (-2) = Base 7+0 = 7 -> Give +1 = 8
          "improv": 6,  // Ep 3 BTM6 (-1), Ep 8 SAFE, Ep 9 BTM2 ELIM (-3) = Base 7-4 = 3 -> low is correct? -> Let's make it 6
          "comedy": 7,  // Ep 3 BTM6 (-1), Ep 8 SAFE, Ep 9 BTM2 ELIM (-3) -> let's make it 7
          "dance": 8,   // Ep 6 SAFE -> Good dancer, let's give it an 8.
          "lipsync": 6, // BTM2 Loss (Ep 9) (-1) = Base 7-1 = 6
          "singing": 7, // Ep 4 SAFE
          "runway": 14, // Very polished, known for looks, High Ep 5 (+2), High Ep 7 (+2), Makeover look bonus (Brooke Win)
          "design": 11, // Ep 1 HIGH (+2), Ep 5 HIGH (+2), Ep 7 WIN (+3) = Base 7+7 = 14 -> feels high maybe 11?
          "branding": 11, // Strong Instagram brand
          "charisma": 10,
          "storyline": 10 // Look queen finding performance
        }
      },
      {
        "id": "RajahOHara",
        "name": "Ra'Jah O'Hara",
        "image": "queens/RajahOHara.webp",
        "stats": {
          "acting": 7,  // Ep 2 SAFE, Ep 4 BTM2 (-2)
          "improv": 6,  // Ep 3 BTM6 (-1)
          "comedy": 6,  // Ep 3 BTM6 (-1)
          "dance": 6,   // Ep 4 BTM2 (-2), Ep 6 BTM2 (-2) = Base 7-4=3 -> Feels Low adjust to 6?
          "lipsync": 10, // BTM2 Win (Ep 4) (+2), BTM2 Win (Ep 6) (+2), BTM2 Loss (Ep 7) (-1) = Base 7+3 = 10
          "singing": 6, // Ep 4 BTM2 (-2) -> 6
          "runway": 8,  // Average
          "design": 8,  // Ep 1 SAFE, Ep 5 SAFE, Ep 7 BTM2 (-2)
          "branding": 7,
          "charisma": 9, // Memorable confessionals
          "storyline": 9 // Lip Sync Assassin narrative, conflict
        }
      },
     {
        "id": "ScarletEnvy",
        "name": "Scarlet Envy",
        "image": "queens/ScarletEnvy.webp",
        "stats": {
          "acting": 11, // Ep 2 WIN (+3)
          "improv": 6,  // Ep 3 BTM6 (-1)
          "comedy": 7,  // Ep 3 BTM6 (-1)
          "dance": 6,   // Ep 4 SAFE, Ep 6 BTM2 ELIM (-3) = Base 7-3=4 -> Raise to 6?
          "lipsync": 6, // BTM2 Loss (Ep 6) (-1) -> 6
          "singing": 7, // Ep 4 SAFE
          "runway": 10, // Generally strong runways
          "design": 8,  // Ep 1 SAFE, Ep 5 SAFE, Ep 7 SAFE -> let's give 8 seems ok.
          "branding": 8,
          "charisma": 9,
          "storyline": 8 // Delusion narrative, early potential
        }
      },
      {
        "id": "ShugaCain",
        "name": "Shuga Cain",
        "image": "queens/ShugaCain.webp",
        "stats": {
          "acting": 8, // Ep 2 HIGH (+2), Ep 9 LOW (-1), Ep 10 BTM2 (-2)
          "improv": 7, // Ep 3 BTM6 (-1), Ep 8 HIGH (+2), Ep 9 LOW (-1)
          "comedy": 8, // Ep 3 BTM6 (-1), Ep 8 HIGH (+2), Ep 9 LOW (-1), Ep 10 BTM2 (-2) = Base 7 -2 -> Raise to 8 seem more fair
          "dance": 8,  // Ep 6 SAFE
          "lipsync": 6, // BTM2 Win (Ep 5) (+2), BTM2 Loss (Ep 10) (-1) = Base 7+1 = 8 -> Adjusted to 6 seem more fair
          "singing": 9, // Ep 4 SAFE, Ep 8 HIGH (+2) -> Snatch Game + Safe Rusical -> 9
          "runway": 9, // Generally good runways
          "design": 7, // Ep 1 SAFE, Ep 5 BTM2 (-2), Ep 7 SAFE -> Seems fine 7.
          "branding": 8,
          "charisma": 10, // Nana energy
          "storyline": 9 // Late bloomer narrative
        }
      },
       {
        "id": "SilkyNutmegGanache",
        "name": "Silky Nutmeg Ganache",
        "image": "queens/SilkyNutmegGanache.webp",
        "stats": {
          "acting": 10,  // Ep 2 SAFE, Ep 4 WIN (+3), Ep 9 HIGH (+2), Ep 10 LOW (-1) = Base 7+4=11 -> feels high lets say 9
          "improv": 11, // Ep 3 SAFE, Ep 8 WIN (+3), Ep 9 HIGH (+2) = Base 7+5=12 -> reduce to 11 due to low placement late
          "comedy": 11, // Ep 3 SAFE, Ep 8 WIN (+3), Ep 9 HIGH (+2), Ep 10 LOW (-1) = Base 7+4=11
          "dance": 8,   // Ep 4 WIN (+3), Ep 6 SAFE, Ep 12 LOW (-1) = Base 7+2 = 9 -> Adjust to 8 based on critique
          "lipsync": 9, // BTM2 Win (Ep 11) (+2), Final LS Loss (-1) = Base 7+1=8 -> She can turn it out, 9 seems ok
          "singing": 12, // Ep 4 WIN (+3), Ep 8 WIN (+3), Ep 12 LOW (-1) = Base 7+5 = 12 -> reduce to 9 seems fair
          "runway": 7,  // Often simple or ill-fitting critiques
          "design": 6,  // Ep 1 SAFE, Ep 5 LOW (-1), Ep 11 BTM2 (-2) -> 7 - 3 = 4 -> raise to 6 seems fair?
          "branding": 10, // Strong brand and personality
          "charisma": 13, // Big personality, very present
          "storyline": 12  // Early frontrunner, loud personality, conflict, finalist
        }
      },
      {
        "id": "Soju",
        "name": "Soju",
        "image": "queens/Soju.webp",
        "stats": {
          "acting": 7,  // N/A
          "improv": 7,  // N/A
          "comedy": 7,  // N/A
          "dance": 7,   // N/A
          "lipsync": 5, // BTM2 Loss (Ep 1) (-1) -> 6 -> Very Weak lip-sync 5 seem more fair.
          "singing": 7, // N/A
          "runway": 5,  // Critiqued runway
          "design": 5,  // Ep 1 BTM2 ELIM (-3) -> 4 -> let's give it a 5?
          "branding": 8, // Known pre-show via YouTube
          "charisma": 7,
          "storyline": 7 // Cyst story, first out
        }
      },
     {
        "id": "VanessaVanjieMateo",
        "name": "Vanessa Vanjie Mateo",
        "image": "queens/VanessaVanjieMateo.webp",
        "stats": {
          "acting": 8, // Ep 2 SAFE, Ep 4 LOW (-1), Ep 9 BTM2 (+0 Safe?), Ep 10 BTM2 (-2) = Base 7-3 = 4 -> Add High EP 11 (+2) -> 6 -> Add high ep 1 (+2) -> 8
          "improv": 9, // Ep 3 SAFE, Ep 8 LOW (-1), Ep 9 BTM2 (+0) -> 7 - 1 = 6 -> Let's add (+2) based on high ep1 and ep11? + (+1?) based on overall personality -> 9
          "comedy": 9, // Ep 3 SAFE, Ep 8 LOW (-1), Ep 9 BTM2 (+0) -> 7-1 = 6 -> Adjust up due to personality, 9
          "dance": 8,  // Ep 4 LOW (-1), Ep 12 BTM2 ELIM (-3) -> Let's add 1 based on ep 1 High (+2)? -> 8 Seems ok?
          "lipsync": 9, // BTM2 Win (Ep 9) (+2), BTM2 Win (Ep 10) (+2), BTM2 Loss (Ep 12) (-1) = Base 7+3 = 10 -> Adjust 9 seems fair
          "singing": 7, // Ep 4 LOW (-1), Ep 12 BTM2 (-2) = 7 - 3 = 4 -> Low seems correct but raise to 7 seems more fair based on SAFE?
          "runway": 9, // Generally improved from S10, some strong looks
          "design": 9, // Ep 1 HIGH (+2), Ep 11 HIGH (+2) = Base 7+4 = 11 -> reduce to 9 seems more fair
          "branding": 14, // Extremely strong brand identity ("Vanjie")
          "charisma": 15, // Massive charisma, catchphrases
          "storyline": 14  // Comeback queen, Branjie, finalist journey
        }
      },
     {
        "id": "YvieOddly",
        "name": "Yvie Oddly",
        "image": "queens/YvieOddly.webp",
        "stats": {
          "acting": 10,  // Ep 2 WIN (+3), Ep 4 HIGH (+2), Ep 10 SAFE, Ep 12 HIGH (+2) = Base 7+7 = 14 -> feels high 10 is better.
          "improv": 9, // Ep 3 SAFE, Ep 8 BTM2 (-2), Ep 9 SAFE -> 7 - 2 = 5 -> Raise to 9 seem fair?
          "comedy": 9, // Ep 3 SAFE, Ep 8 BTM2 (-2), Ep 10 SAFE -> 7 - 2 = 5 -> raise to 9 seem fair?
          "dance": 11,   // Ep 4 HIGH (+2), Ep 6 SAFE, Ep 12 HIGH (+2) = Base 7+4 = 11
          "lipsync": 14, // BTM2 Win (Ep 8) (+2), Final LS Win (+2), Final LS Win (+2) = Base 7+6=13 -> Known performer +1? = 14
          "singing": 10, // Ep 4 HIGH (+2), Ep 12 HIGH (+2) = Base 7+4 = 11 -> lower seems more appropriate -> 10
          "runway": 13, // Very unique and creative runway POV, Ep 5 HIGH (+2), Ep 11 LOW (-1) -> seems fair.
          "design": 14, // Ep 1 SAFE, Ep 5 HIGH (+2), Ep 7 HIGH (+2), Ep 11 LOW (-1) = Base 7 + 3 = 10 -> known for unique constructions -> adjust 14 seem fair
          "branding": 13, // Very distinct oddball brand
          "charisma": 13, // Unique charisma, winner presence
          "storyline": 14  // Oddball vs Pageant, conflict with Silky, winner arc
        }
      },      // Add more queens here...
];
const PREDEFINED_CASTS = {
    "RPDR Season 17": [
        "Onya Nurve", "Jewels Sparkles", "Lexi Love", "Sam Star", "Acacia Forgot",
        "Hormona Lisa", "Crystal Envy", "Arrietty", "Kori King", "Lydia B. Kollins",
        "Joella", "Lucky Starzzz", "Suzie Toot", "Lana JaRae"
        // Add more Queen IDs here if you expand the cast later
    ],
    // Add other casts like:
"RPDR Season 11": [
        "AkeriaCDavenport",
        "ArielVersace",
        "BrookeLynnHytes",
        "HoneyDavenport",
        "KahannaMontrese",
        "MercedesImanDiamond",
        "NinaWest",
        "PlastiqueTiara",
        "RajahOHara",
        "ScarletEnvy",
        "ShugaCain",
        "SilkyNutmegGanache",
        "Soju",
        "VanessaVanjieMateo",
        "YvieOddly"
    ],
    // Add other casts like:
    // "All Stars 9": ["QueenID1", "QueenID5", "QueenID8", ...],
};
// === UPDATE Constant: PREDEFINED_CHALLENGE_SEQUENCES ===
const PREDEFINED_CHALLENGE_SEQUENCES = {
    "RPDR Season 17": [
        "Drag Queens Got Talent",           // Ep 1 (Group A)
        "Drag Queens Got Talent",           // Ep 2 (Group B) -> Will select same challenge again
        "Monopulence!",                     // Ep 3
        "Bitch, I'm a Drag Queen!",         // Ep 4
        "RDR Live!",                        // Ep 5
        "Let's Get Sea Sickening Ball",     // Ep 6
        "Snatch Game",                      // Ep 7
        "The Wicked Wiz of Oz: The Rusical!",// Ep 8
        "Heavens to Betsey!",               // Ep 9
        "The Villains Roast",               // Ep 10
        "Ross Mathews vs. The Ducks",       // Ep 11
        "CUNT Monologues",                  // Ep 12 (Using shorter name, match below)
        "Drag Baby Mamas",                  // Ep 13
        "How's Your Headliner?"             // Ep 14
        // Ep 15 Lalaparuza & Ep 16 Finale are handled by other logic
    ],
    "RPDR Season 11": [ // Example using types mostly
        "Design",    // Ep 1: Monster Ball Prep (Counts as Design)
        "Acting",    // Ep 2: Good God Girl Get Out (Scripted Acting)
        "Improv",    // Ep 3: Diva Worship (Improv Presentation)
        "Acting",    // Ep 4: Trump Rusical (Considered Acting/Performance more than pure Singing)
        "Design",    // Ep 5: Monster Ball Runway
        "Dance",     // Ep 6: Draglympics (Choreo/Dance)
        "Design",    // Ep 7: Farm to Runway
        "Snatch Game", // Ep 8: Snatch Game at Sea
        "Improv",    // Ep 9: LAPD drag patrol (Improv Acting)
        "Acting",    // Ep 10: Magic Show
        "Makeover",  // Ep 11: Makeover
        "Rumix"      // Ep 12: Queens Everywhere
        // Finale is separate
    ]
    // Add other season sequences here...
};
// Keep this as it might be used if sequence specifies generic "Ball" etc.
const SPECIFIC_CHALLENGE_TYPES_FOR_SEQUENCE = ["Snatch Game", "Rusical", "Makeover", "Ball", "Rumix", "Talent Show"];

const CHALLENGES = [
    // == Season 17 Specific (Ensure these are added/correct) ==
    {
        name: "Drag Queens Got Talent",
        type: "Talent Show", // Use existing type if suitable
        primaryStat: "DYNAMIC", // Use DYNAMIC for talent show
        secondaryStats: ["charisma", "runway"],
        tertiaryStats: ["branding", "storyline"],
        possibleFocuses: ["singing", "dance", "comedy", "lipsync", "acting", "design", "improv"], // Cover all bases
        minQueens: 3, // Talent show minimum
        description: "Queens showcase their unique talents for the judges and the competing group.",
        // Add unique critique texts if desired, or reuse generic Talent Show text
        winText: ["Your talent shined the brightest!", "A standout performance!"],
        highText: ["A very strong showing!", "You entertained us."],
        safeText: ["A solid talent display.", "You held your own."],
        lowText: ["Your talent needed a bit more polish.", "Didn't quite land the way you hoped."],
        btmText: ["Your performance fell flat tonight.", "Unfortunately, your talent wasn't enough."]
    },
    {
        name: "Monopulence!",
        type: "Design",
        primaryStat: "design",
        secondaryStats: ["runway"],
        tertiaryStats: ["charisma"],
        minQueens: 3,
        description: "Design a monochromatic high-fashion look inspired by a property from the classic Monopoly board game.",
        winText: ["You passed Go and collected $5000!", "Pure fashion opulence!"],
        highText: ["A luxurious design!", "You understood the assignment."],
        safeText: ["It's a look.", "Met the property brief."],
        lowText: ["Ended up in fashion jail.", "Needed more concept or better execution."],
        btmText: ["Bankrupt! This look was poorly constructed.", "Do not pass Go, do not collect Condragulations."]
    },
     {
        name: "Bitch, I'm a Drag Queen!",
        type: "Singing", // Or Performance Mix? Let's stick with Singing focus
        primaryStat: "singing", // Or 'acting' if focused on embodying the original queen?
        secondaryStats: ["lipsync", "charisma", "branding"],
        tertiaryStats: ["dance"],
        minQueens: 4,
        description: "Queens star in commercials performing remix tracks inspired by past Drag Race legends.",
         winText: ["Your commercial was a chart-topper!", "You embodied that legend perfectly!"],
         highText: ["Great energy and vocals!", "A memorable performance."],
         safeText: ["Your track was fine.", "You fit the commercial."],
         lowText: ["A bit off-key or off-brand.", "Needed more star power."],
         btmText: ["That commercial track was cancelled.", "Painful to the eyes and ears."]
    },
    {
        name: "RDR Live!",
        type: "Improv", // Mix of Improv & Acting
        primaryStat: "improv",
        secondaryStats: ["acting", "comedy", "charisma"],
        tertiaryStats: ["storyline"],
        minQueens: 4, // Needs multiple sketches
        description: "Live from New York, it's RDR Live! Queens perform in various live sketch comedy scenarios.",
         winText: ["Ready for prime time! Hilarious performance!", "You stole the show! Comedy gold!"],
         highText: ["Great character work!", "You landed some killer jokes."],
         safeText: ["You played your part.", "Kept the scene going."],
         lowText: ["The sketch fell flat.", "Needed funnier choices."],
         btmText: ["That performance bombed hard.", "Painfully unfunny."]
    },
    {
        name: "Let's Get Sea Sickening Ball",
        type: "Ball",
        primaryStat: "runway", // Overall presentation across looks
        secondaryStats: ["design"], // For the self-made look
        tertiaryStats: ["charisma"],
        minQueens: 4,
        description: "Serve three sickening seafood looks: Bathing Beauties, Sea Creature Couture (Self-Made), and Sea Sickening Eleganza.",
         winText: ["Poseidon could never! You are the queen of the sea!", "10s across the sunken board!"],
         highText: ["Stunning looks, a real catch!", "Strong showing in all categories."],
         safeText: ["You made waves on the runway.", "Covered all the categories."],
         lowText: ["Some looks were a bit fishy.", "One category dragged you down."],
         btmText: ["Washed ashore! These looks didn't make a splash.", "A tragic shipwreck of fashion."]
    },
    // Ensure Snatch Game exists - maybe rename your existing one to just "Snatch Game"?
    {
        name: "Snatch Game", // Ensure NAME matches sequence EXACTLY
        type: "Improv", // Keeping original type logic
        primaryStat: "improv", secondaryStats: ["comedy", "charisma", "acting"], tertiaryStats: ["branding"],
        minQueens: 5,
        description: "The legendary Snatch Game! Queens must impersonate celebrities and make RuPaul laugh.",
        winText: ["You *are* Snatch Game royalty!", "Iconic performance!"], highText: ["Great character!", "Made Ru laugh!"],
        safeText: ["Impersonation was...a choice.", "Stayed in character."], lowText: ["Character was off.", "Not funny enough."],
        btmText: ["Snatch Game disaster.", "Painful to watch."]
    },
     {
        name: "The Wicked Wiz of Oz: The Rusical!",
        type: "Rusical", // Keep specific type if needed
        primaryStat: "singing", // Or mix? singing/acting/dance based on role
        secondaryStats: ["acting", "dance", "charisma", "lipsync"],
        tertiaryStats: ["storyline"],
        minQueens: 5,
        description: "Ease on down the runway in this musical mashup of Oz and Wicked!",
        winText: ["Brava! A Tony-worthy performance!", "You commanded that stage, truly magical!"],
        highText: ["Show-stopping!", "Excellent vocals and character work."],
        safeText: ["You followed the yellow brick road.", "Played your part well."],
        lowText: ["Got lost somewhere over the rainbow.", "Missed cues or lacked energy."],
        btmText: ["A performance only a wicked witch could love.", "Off-key and off-character."]
    },
     {
        name: "Heavens to Betsey!",
        type: "Design",
        primaryStat: "design",
        secondaryStats: ["runway", "branding"], // Matching Betsey's brand
        tertiaryStats: ["charisma"],
        minQueens: 3,
        description: "Design and create a high-fashion look inspired by the iconic and quirky collections of Betsey Johnson.",
         winText: ["Cartwheels across the runway! This is pure Betsey!", "Fun, fearless, fashion!"],
         highText: ["Captured the Betsey spirit!", "Well-constructed and creative."],
         safeText: ["It's definitely a look.", "You understood the assignment."],
         lowText: ["Lacked the Betsey Johnson punk energy.", "Construction issues were apparent."],
         btmText: ["This design is DOA.", "What Betsey were you looking at?"]
    },
    {
        name: "The Villains Roast",
        type: "Comedy", // Specific type Roast might be better
        primaryStat: "comedy",
        secondaryStats: ["charisma", "improv", "storyline"], // Storyline for knowing villains
        tertiaryStats: [],
        minQueens: 5, // Needs roastees and roasters
        description: "The library is open, officially! Queens must roast a panel of iconic Drag Race villains.",
         winText: ["You absolutely murdered those villains!", "Sickening reads, comedy assassin!"],
         highText: ["Sharp, funny, and fearless!", "You knew how to work the room."],
         safeText: ["Landed a few good jabs.", "Some jokes hit, some missed."],
         lowText: ["Your jokes needed more bite.", "Felt more like tickling than roasting."],
         btmText: ["The only villain here was your set.", "Crickets... and maybe some tears."]
    },
    {
        name: "Ross Mathews vs. The Ducks",
        type: "Acting", // Seems primarily acting
        primaryStat: "acting",
        secondaryStats: ["comedy", "charisma"],
        tertiaryStats: ["improv"], // Might be some improv with Ross
        minQueens: 4, // Usually group/pair challenges
        description: "In a mockumentary style, queens act alongside Ross Mathews in absurd scenarios involving... ducks?",
         winText: ["And the Emmy goes to...", "Hilarious and committed performance!"],
         highText: ["Great comedic timing with Ross!", "You held your own in the scene."],
         safeText: ["You were present.", "Didn't drop your lines."],
         lowText: ["Seemed a bit lost in the scene.", "Needed bigger choices."],
         btmText: ["That performance was for the birds.", "Quack, quack, you're in the bottom."]
    },
    {
        name: "CUNT Monologues", // Match key used in sequence
        type: "Dance", // Performance/Dance focus
        primaryStat: "dance",
        secondaryStats: ["acting", "charisma", "storyline"], // Requires vulnerability/performance
        tertiaryStats: ["lipsync"],
        minQueens: 3,
        description: "Queens write and perform powerful interpretative dance monologues based on Charisma, Uniqueness, Nerve, and Talent.",
         winText: ["A truly moving and powerful performance!", "You embodied C.U.N.T!"],
         highText: ["Visually stunning and emotionally resonant.", "Great choreography and execution."],
         safeText: ["You performed the piece well.", "Solid interpretative dance."],
         lowText: ["The message didn't quite land.", "Needed stronger connection or technique."],
         btmText: ["Lost the plot and the rhythm.", "Felt disconnected from the performance."]
    },
    {
        name: "Drag Baby Mamas",
        type: "Makeover", // Classic makeover
        primaryStat: "design", // Transformation, family resemblance
        secondaryStats: ["runway", "charisma", "branding"], // Coaching, look cohesion
        tertiaryStats: ["storyline"],
        minQueens: 4, // Needs pairs
        description: "It's the makeover challenge! Queens transform unsuspecting guests into members of their drag family.",
         winText: ["Your drag family resemblance is uncanny!", "A star is born... again!"],
         highText: ["Great concept and execution!", "Your partner shone brightly."],
         safeText: ["A successful transformation.", "They looked related."],
         lowText: ["The family resemblance wasn't strong enough.", "Your partner seemed unsure."],
         btmText: ["Looks like two distant cousins twice removed.", "A makeover miss."]
    },
     {
        name: "How's Your Headliner?",
        type: "Rumix", // Based on description/placement in season
        primaryStat: "DYNAMIC", // Mix of performance skills
        secondaryStats: ["singing", "dance", "lipsync", "charisma", "branding"],
        tertiaryStats: ["storyline"],
        possibleFocuses: ["singing", "dance", "lipsync", "comedy"], // Rumix focuses
        minQueens: 3, // Usually top queens
        description: "Queens write, record, and perform their own verses and choreography for a RuPaul megamix.",
        winText: ["Your star quality is undeniable!", "You ATE that Rumix performance!"],
        highText: ["Incredible verse and stage presence!", "You looked like a winner up there."],
        safeText: ["Your verse fit well.", "Held your own in the number."],
        lowText: ["Got lost in the shuffle.", "Lacked the 'it' factor."], // Less likely at this stage
        btmText: ["Performance wasn't headliner ready.", "Faded into the background."] // Should be rare Top 4/5
    },
    // === Acting Type ===
    {
        name: "Acting Challenge (Scripted)",
        type: "Acting",
        primaryStat: "acting",
        secondaryStats: ["comedy", "charisma"],
        tertiaryStats: ["storyline"],
        minQueens: 4,
        description: "Queens must learn lines and deliver a side-splitting performance in a pre-written script.",
        winText: ["Category is: Thespian Realness! You acted the house down.", "A star is born! Your performance was Academy Award worthy."],
        highText: ["You nailed that role!", "A solid performance, you held your own."],
        safeText: ["You blended into the scene.", "Your performance was adequate."],
        lowText: ["Your performance felt a bit wooden.", "We lost you in the scene, darling."],
        btmText: ["That performance was a tragedy, and not in a good way.", "The prompter was working overtime for you."]
    },
    {
        name: "TV Pilot Acting Challenge",
        type: "Acting",
        primaryStat: "acting",
        secondaryStats: ["branding", "charisma", "comedy"],
        tertiaryStats: ["storyline"],
        minQueens: 5,
        description: "In teams, queens must create, write, and star in a pilot episode for a potential new hit TV show.",
        winText: ["Greenlit! Your show is a smash hit!", "You stole the show! Amazing star power."],
        highText: ["Great character work!", "Your team had great chemistry."],
        safeText: ["Your role was fine.", "A standard performance."],
        lowText: ["Your pilot wasn't quite ready for prime time.", "Needed more rehearsal."],
        btmText: ["Cancelled! That performance was dreadful.", "Where was the character?"]
    },

    // === Improv Type ===
    {
        name: "Improv Challenge",
        type: "Improv",
        primaryStat: "improv",
        secondaryStats: ["comedy", "charisma"],
        tertiaryStats: ["acting"],
        minQueens: 4,
        description: "Queens are thrown into unpredictable scenarios and must rely on their wit and quick thinking.",
        winText: ["You are a comedy genius!", "Flawless improv! You had us in stitches."],
        highText: ["Quick on your feet!", "You got some great laughs."],
        safeText: ["You kept up with the scene.", "A decent effort."],
        lowText: ["You seemed hesitant.", "The jokes didn't quite land."],
        btmText: ["That scene died on stage.", "Crushed under the pressure."]
    },
    {
        name: "Snatch Game", // Iconic Improv
        type: "Improv",
        primaryStat: "improv",
        secondaryStats: ["comedy", "charisma", "acting"], // Acting helps embody character
        tertiaryStats: ["branding"], // Choosing a good character matters
        minQueens: 5,
        description: "The legendary Snatch Game! Queens must impersonate celebrities, stay in character, and make RuPaul laugh.",
        winText: ["You *are* Snatch Game royalty!", "An iconic performance! Hilarious!"],
        highText: ["Great character choice and execution!", "You definitely made Ru laugh!"],
        safeText: ["Your impersonation was... a choice.", "You stayed in character, mostly."],
        lowText: ["Your characterization was off.", "You weren't funny enough."],
        btmText: ["That was a Snatch Game disaster.", "Not funny, didn't know the character."]
    },

    // === Comedy Type ===
    {
        name: "Stand-Up Comedy",
        type: "Comedy",
        primaryStat: "comedy",
        secondaryStats: ["charisma", "storyline"], // Personal stories often used
        tertiaryStats: ["branding"],
        minQueens: 4,
        description: "Each queen must write and perform their own stand-up comedy routine in front of a live audience.",
        winText: ["Comedy gold!", "You slayed that stand-up set!"],
        highText: ["Great jokes!", "You worked the crowd well."],
        safeText: ["Your set was okay.", "Got a few chuckles."],
        lowText: ["Your routine needed punchlines.", "The delivery was flat."],
        btmText: ["Crickets... That set bombed hard.", "Painfully unfunny."]
    },
    {
        name: "Roast Challenge",
        type: "Comedy",
        primaryStat: "comedy",
        secondaryStats: ["charisma", "improv"], // Need to handle audience/judges
        tertiaryStats: ["storyline"],
        minQueens: 5, // Roasts need a few targets
        description: "Reading is fundamental! Queens participate in a classic roast, poking fun at judges and fellow contestants.",
        winText: ["You absolutely roasted the competition!", "Sickening reads!"],
        highText: ["Funny and sharp!", "Great roasting skills."],
        safeText: ["You landed a few jabs.", "Some jokes hit, some missed."],
        lowText: ["Your jokes fell flat.", "Too safe, or just not funny."],
        btmText: ["You were roasted more than you roasted.", "Mean, not funny."]
    },

    // === Dance Type ===
    {
        name: "Choreography Challenge",
        type: "Dance",
        primaryStat: "dance",
        secondaryStats: ["charisma", "lipsync"],
        tertiaryStats: ["acting"], // Performance aspect
        minQueens: 3,
        description: "Queens must learn and perform complex choreography, often as part of a group.",
        winText: ["A true dancing diva!", "Your moves were flawless!"],
        highText: ["Great energy and execution!", "You hit those steps!"],
        safeText: ["You kept up with the group.", "Solid dance performance."],
        lowText: ["You looked a bit lost out there.", "Missed a few steps."],
        btmText: ["Two left feet! That was hard to watch.", "Out of sync and out of luck."]
    },
    {
        name: "Disco Dance-Off",
        type: "Dance",
        primaryStat: "dance",
        secondaryStats: ["charisma", "runway"], // Disco needs flair!
        tertiaryStats: ["lipsync"],
        minQueens: 4,
        description: "Get your boogie on! Queens compete in a high-energy disco choreography challenge.",
        winText: ["Disco inferno! You burned up the dance floor!", "Studio 54 realness!"],
        highText: ["Great rhythm and stage presence!", "You caught the disco fever!"],
        safeText: ["You did the hustle.", "Kept the beat."],
        lowText: ["Looked more like the electric slide.", "A bit stiff for disco."],
        btmText: ["More like disco nap.", "The groove was not with you."]
    },

    // === Lip Sync Type === (Focus on LSFYL simulation for these)
    {
        name: "Lip Sync LaLaPaRuza", // Treated as lipsync scores directly
        type: "Lip Sync",
        primaryStat: "lipsync",
        secondaryStats: ["dance", "charisma"],
        tertiaryStats: ["storyline"], // High stakes performance
        minQueens: 4, // Usually a mid-season thing
        description: "A smackdown tournament where queens lip sync against each other until only one remains.",
        // Placement text might not be used directly, outcome handled by tournament logic
        winText: ["You are the LaLaPaRUza champion!"],
        highText: ["Strong lip sync performance!"], // For runner-up etc.
        safeText: ["Survived the round."],
        lowText: ["Almost didn't make it through."],
        btmText: ["Eliminated from the tournament."] // Represents losing a match
    },
    {
        name: "Music Video Challenge", // Blend of Lip Sync, Dance, Acting
        type: "Lip Sync", // Primary scoring could be Lip Sync focused
        primaryStat: "lipsync",
        secondaryStats: ["dance", "acting", "charisma"],
        tertiaryStats: ["branding"],
        minQueens: 4,
        description: "Queens star in a music video, performing verses, choreography, and showcasing their star quality.",
        winText: ["Video vanguard award!", "You slayed that music video performance!"],
        highText: ["Memorable verse and performance!", "You looked like a pop star."],
        safeText: ["You played your part well.", "Fit into the video concept."],
        lowText: ["You faded into the background.", "Performance lacked energy."],
        btmText: ["That performance was out of sync.", "Ended up on the cutting room floor."]
    },

    // === Singing Type ===
    {
        name: "Girl Group Challenge",
        type: "Singing",
        primaryStat: "singing",
        secondaryStats: ["dance", "charisma", "branding"],
        tertiaryStats: ["lipsync"], // Selling the performance
        minQueens: 4,
        description: "Queens form girl groups, write lyrics, record vocals, and perform a choreographed number.",
        winText: ["Pop sensation! You topped the charts!", "A star vocalist and performer!"],
        highText: ["Great vocals and stage presence!", "Your group had chemistry."],
        safeText: ["Your part was sung competently.", "Blended in with the group."],
        lowText: ["Sounded a bit pitchy.", "Lacked vocal power or charisma."],
        btmText: ["Autotune couldn't save that performance.", "Off-key and off-putting."]
    },
    {
        name: "Bitch, I'm a Drag Queen!",
        type: "Singing",
        primaryStat: "singing",
        secondaryStats: ["charisma", "branding"],
        tertiaryStats: ["lipsync"], // Selling the performance
        minQueens: 4,
        description: "Queens record and perform songs for commercials of the Bitch, I’m A Drag Queen!.",
        winText: ["Pop sensation! You topped the charts!", "A star vocalist and performer!"],
        highText: ["Great vocals and stage presence!", "Your group had chemistry."],
        safeText: ["Your part was sung competently.", "Blended in with the group."],
        lowText: ["Sounded a bit pitchy.", "Lacked vocal power or charisma."],
        btmText: ["Autotune couldn't save that performance.", "Off-key and off-putting."]
    },
    {
        name: "Rusical",
        type: "Singing", // Often involves live singing or demanding lip sync
        primaryStat: "singing",
        secondaryStats: ["acting", "dance", "charisma"],
        tertiaryStats: ["lipsync", "storyline"],
        minQueens: 5,
        description: "The iconic Rusical! Queens perform in a live musical theater production, requiring singing, acting, and dancing.",
        winText: ["Brava! You deserve a Tony Award!", "A true triple threat performance!"],
        highText: ["Show-stopping number!", "Commanded the stage."],
        safeText: ["Played your part adequately.", "Didn't drop the ball."],
        lowText: ["You missed your cue.", "Seemed overwhelmed by the production."],
        btmText: ["That performance was off-Broadway... way off.", "Flubbed lines, vocals, and choreo."]
    },

    // === Design Type ===
    {
        name: "Design Challenge (Unconventional)",
        type: "Design",
        primaryStat: "design",
        secondaryStats: ["runway", "charisma"], // Selling the garment
        tertiaryStats: ["storyline"], // Having a concept helps
        minQueens: 3,
        description: "Queens must create high-fashion looks from unconventional materials.",
        winText: ["Fashion forward!", "You turned trash into treasure!"],
        highText: ["Innovative design!", "Great construction."],
        safeText: ["It's a look.", "You made it work."],
        lowText: ["The construction looks questionable.", "Unflattering silhouette."],
        btmText: ["What is going on here?", "A craft project gone wrong."]
    },
    {
        name: "Makeover Challenge",
        type: "Design", // Transformation is key
        primaryStat: "design",
        secondaryStats: ["charisma", "branding", "runway"], // Family resemblance, teaching charisma
        tertiaryStats: ["storyline"],
        minQueens: 4, // Needs pairs
        description: "Queens makeover special guests, creating a family resemblance and coaching them for the runway.",
        winText: ["A star transformation!", "Your drag family resemblance is uncanny!"],
        highText: ["Great makeover concept!", "Your partner shone on the runway."],
        safeText: ["A successful makeover.", "They looked related."],
        lowText: ["The resemblance isn't quite there.", "Your partner seemed uncomfortable."],
        btmText: ["Looks like two different families.", "A makeover fail."]
    },

    // === Ball Type ===
    {
        name: "The Ball Challenge",
        type: "Ball", // Distinct type
        primaryStat: "runway", // Requires multiple strong runway presentations
        secondaryStats: ["design"], // Often includes a self-made look
        tertiaryStats: ["charisma"], // Selling all the looks
        minQueens: 4,
        description: "A legendary Ball! Queens must serve multiple looks on the runway, often including one they've constructed themselves.",
        winText: ["10s across the board!", "You are the Belle of the Ball!"],
        highText: ["Stunning runway presentations!", "Strong showing in all categories."],
        safeText: ["You served the looks.", "Met the brief for each category."],
        lowText: ["Some looks missed the mark.", "Inconsistent across categories."],
        btmText: ["It wasn't a Ball, it was a stumble.", "Failed to deliver in key categories."]
    },

    // === Branding Type ===
    {
        name: "Branding Challenge (Commercial)",
        type: "Branding",
        primaryStat: "branding",
        secondaryStats: ["acting", "comedy", "charisma"],
        tertiaryStats: ["storyline"],
        minQueens: 4,
        description: "Queens must create and sell a product or concept in a compelling commercial.",
        winText: ["Sold! You're a marketing genius!", "That commercial was iconic!"],
        highText: ["Great brand concept!", "Funny and memorable commercial."],
        safeText: ["Your commercial was fine.", "The brand message was clear."],
        lowText: ["Confusing brand message.", "The commercial wasn't engaging."],
        btmText: ["What were you even selling?", "A branding disaster."]
    },
    {
        name: "Social Media Challenge",
        type: "Branding",
        primaryStat: "branding",
        secondaryStats: ["charisma", "comedy"],
        tertiaryStats: ["runway", "design"], // Visuals matter online
        minQueens: 4,
        description: "Queens leverage social media trends to build their brand and create viral content.",
        winText: ["You went viral! Internet sensation!", "#Winner! Your brand is strong!"],
        highText: ["Great online presence!", "Engaging and on-trend content."],
        safeText: ["Your post was adequate.", "Understood the assignment."],
        lowText: ["A bit #basic.", "Didn't capture the trend well."],
        btmText: ["#Fail. That post was cringe.", "Logged off and blocked."]
    },

     // === Performance Mix Type (DYNAMIC) ===
     {
        name: "Talent Show", // Changed name slightly
        type: "Talent Show", // Specific type
        primaryStat: "DYNAMIC",
        secondaryStats: ["charisma"], // Always important for performance
        tertiaryStats: ["storyline", "branding"],
        possibleFocuses: ["singing", "dance", "comedy", "lipsync", "acting", "design", "improv", "runway"], // Wide range
        minQueens: 3,
        description: "Show us what you got! Queens showcase their unique talents in a variety extravaganza.",
        // Focus-dependent text needs handling in display logic
        winText: ["You are a superstar!", "An outstanding showcase of talent!"],
        highText: ["Impressive talent!", "You entertained us!"],
        safeText: ["A decent display.", "Showed some skill."],
        lowText: ["Needed more polish.", "Talent wasn't fully realized."],
        btmText: ["Maybe stick to your day job.", "A misguided talent."]
    },
    {
        name: "Rumix Challenge",
        type: "Rumix", // Specific type
        primaryStat: "DYNAMIC",
        secondaryStats: ["charisma", "branding"],
        tertiaryStats: ["lipsync"],
        possibleFocuses: ["dance", "singing", "lipsync", "comedy"], // Typical Rumix focuses
        minQueens: 4,
        description: "Queens write and perform their own verses for a RuPaul mega-hit remix!",
        // Focus-dependent text
        winText: ["Your verse slayed!", "You ate that Rumix up!"],
        highText: ["Great verse and performance!", "Stood out in the group number."],
        safeText: ["Your verse fit the song.", "Held your own in the performance."],
        lowText: ["Verse was forgettable.", "Lacked energy or star quality."],
        btmText: ["Sounded like a rough demo.", "Completely lost in the mix."]
    },
];
// --- Helper function to get a random critique text ---
function getRandomCritique(critiqueArray) {
    if (!critiqueArray || critiqueArray.length === 0) return "Critique unavailable.";
    return critiqueArray[Math.floor(Math.random() * critiqueArray.length)];
}
// DYNAMIC_CHALLENGE_STATS remains the same
const DYNAMIC_CHALLENGE_STATS = {
     "Talent Show": ["singing", "dance", "comedy", "lipsync", "acting", "design", "improv"], // Added more potential talent types
     "Rumix": ["dance", "singing", "lipsync"] // Added lipsync focus possibility
 };

const getRandomChallenge = (excludeTypes = []) => {
    const availableChallenges = CHALLENGES.filter(c => !excludeTypes.includes(c.type));
    if (availableChallenges.length === 0) return CHALLENGES[0]; // Fallback
    return availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
};


// --- DOM Elements ---
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const trackRecordScreen = document.getElementById('track-record-screen');
const finalResultsScreen = document.getElementById('final-results-screen');

// Setup Screen Elements
const simulationModeSelect = document.getElementById('simulation-mode');
const premiereFormatSelect = document.getElementById('premiere-format');
const finaleFormatSelect = document.getElementById('finale-format');
const riggoryLevelInput = document.getElementById('riggory-level');
const riggoryValueSpan = document.getElementById('riggory-value');
const queenSelectionGrid = document.getElementById('queen-selection-grid');
const selectedCountSpan = document.getElementById('selected-count');
const startSeasonButton = document.getElementById('start-season-button');

// Game Screen Elements (Ensure these specific ones are present and correct)
const episodeTitle = document.getElementById('episode-title');
const remainingQueensCount = document.getElementById('remaining-queens-count');
const activeQueensDisplay = document.getElementById('active-queens-display');
const challengeAnnouncement = document.getElementById('challenge-announcement');
const challengeDescriptionElement = document.getElementById('challenge-description'); // Added earlier

// ---> RuPaul Winner Selection UI <---
const rupaulWinnerSelectionUI = document.getElementById('rupaul-winner-selection');
const calculatedWinnerName = document.getElementById('calculated-winner-name');
const winnerChoiceOptions = document.getElementById('winner-choice-options');
const confirmWinnerButton = document.getElementById('confirm-winner-button'); // *** MUST EXIST ***

const resultsDisplay = document.getElementById('results-display');
const resultsCritiquesSection = document.getElementById('results-critiques-section'); // Added earlier

// ---> Lipsync UI <---
const lipsyncInfo = document.getElementById('lipsync-info');
const lipsyncContestants = document.getElementById('lipsync-contestants');
const lipsyncResultText = document.getElementById('lipsync-result-text');

// ---> RuPaul Lipsync Decision UI <---
const rupaulDecision = document.getElementById('rupaul-decision');
// Buttons inside rupaul-decision are dynamically generated, but confirm button isn't needed here

// ---> All Stars Elimination Choice UI <---
const allStarsEliminationChoiceUI = document.getElementById('allstars-elimination-choice'); // Get the container
const eliminationChoiceOptions = document.getElementById('elimination-choice-options');
const allStarsChooserName = document.getElementById('allstars-chooser-name');
// const confirmAllStarsElimButton = document.getElementById('confirm-allstars-elim-button'); // *** THIS IS HANDLED BY ID lookup ***

// ---> Manual Challenge Selection UI <---
const challengeSelectorUI = document.getElementById('challenge-selector-ui'); // Get the container
// const confirmChallengeButton = document.getElementById('confirm-challenge-button'); // *** THIS IS HANDLED BY ID lookup ***

const outcomeText = document.getElementById('outcome-text');
const viewTrackRecordMidButton = document.getElementById('view-track-record-mid-button');
const nextEpisodeButton = document.getElementById('next-episode-button');
const finishSeasonButton = document.getElementById('finish-season-button');
const restartButton = document.getElementById('restart-button'); // In-game restart
// Track Record Screen Elements
const trackRecordTable = document.getElementById('track-record-table');
const trackRecordHeader = document.getElementById('track-record-header');
const trackRecordBody = document.getElementById('track-record-body');
const backToGameButton = document.getElementById('back-to-game-button');
const restartFromTrackRecordButton = document.getElementById('restart-from-track-record-button');

// Final Results Screen Elements
const winnerAnnouncement = document.getElementById('winner-announcement');
const finalistsDisplay = document.getElementById('finalists-display');
const viewFinalTrackRecordButton = document.getElementById('view-final-track-record-button');
const startNewSeasonButton = document.getElementById('start-new-season-button');

// --- Game State Variables ---
let queens = []; // Holds the active season's queen objects
// === ADD NEW Global State Variable ===
let currentSeasonName = null; // Holds the name of the preset cast, if used
let allQueensData = []; // Populated from ALL_QUEENS constant
let seasonLog = []; // Could store episode summaries later
let currentEpisode = 1; // Tracks episode number
let maxEpisodesCeiling = 17; // Max episodes before forcing finale
let gameMode = 'simulation';
let premiereFormat = 'Normal';
let finaleFormat = 'LSFTC';
let riggory = 7; // Default riggory level
let initialCastSize = 0;
let currentChallenge = null; // Holds the challenge object for the current episode
let bottomQueens = []; // Queens in the bottom for the current episode (for lipsync)
let episodeResults = { win: [], high: [], safe: [], low: [], btm: [], immune: [] }; // Placements for the current episode
let eliminatedQueenThisEpisode = null; // Array of queen object(s) eliminated
let isFinale = false; // Flag for finale state
let selectedQueenIDs = new Set(); // Stores IDs of queens selected for the season
let hasDoubleShantayOccurred = false; // Tracks if a double shantay happened this season
let ruPaulChosenWinner = null; // Stores the queen object if RuPaul manually picks winner
let finalWinner = null; // Stores the final winner queen object
let finalRunnersUp = []; // Stores runner-up queen objects
let winnerChoiceResolver = null; // Promise resolver for RuPaul winner choice
let lastEpWasDoubleWin = false; // Flag to prevent consecutive double wins in sim mode
let splitPremiereGroupA_IDs = []; // Queen IDs for Group A in split premiere
let splitPremiereGroupB_IDs = []; // Queen IDs for Group B
let currentPremiereGroup = null; // 'A' or 'B'
let splitPremiereStage = null; // 'A_Perf', 'B_Perf', 'Lipsync', or null
let challengeChoiceResolver = null; // Promise resolver for challenge choice
let userSelectedChallenge = null; // Stores the challenge object clicked by user
let isManualChallengeSelectionEnabled = false; // Default to automatic
let bandokadontSavesScheduled = []; // Array to store episode numbers where a save *should* occur
let bandokadontSavesUsed = 0; // Counter for how many saves have actually occurred
let isBandokadontEnabled = false; // Default to OFF
let currentDynamicFocus = null; // Holds the primary stat for dynamic challenges this ep
// --- NEW Global Variable ---
let currentStepContext = null; // Stores context like 'NORMAL', 'AS10_MERGE' etc. for async handlers
// --- Add New Global State Variables (near the top) ---
let episodeRiggoryActions = new Map(); // Map: queenId => 'FAVOR' or 'PENALTY'
// Keep riggoryResolver
let riggoryResolver = null;
let lipsyncWinner = null; // Stores the winner of the LSFYL/LSFYLegacy
let bottomQueensAS = []; // Stores the bottom queens for All Stars elim choice
let elimChoiceResolver = null; // Promise resolver for All Stars elim choice
let allStars10_groups = { A: [], B: [], C: [] }; // Stores arrays of queen IDs
let allStars10_currentGroup = null; // 'A', 'B', 'C', or 'MERGE', 'PRE_LALA', 'FINALE_LALA'
let allStars10_groupEpisode = 0; // 1, 2, or 3 within the current group's cycle
let allStars10_mergeQualifiers_IDs = new Set(); // Use Set for easier checking
let allStars10_nonQualifiers_IDs = new Set(); // IDs of queens who DID NOT qualify initially
let allStars10_mqpDonationQueue = []; // Stores { donor: queenObj, recipients: [queenObj] }
let allStars10_lalaparuzaLog = []; // Stores strings describing matchups/winners
let allStars10_preMergeLalaWinnerID = null; // ID of the LaLa winner joining merge
let mqpDistributionResolver = null; // Promise resolver for MQP donation steps
let lalaparuzaResolver = null; // Promise resolver for LaLaPaRuza steps
let ruPaulChosenWinners = []; // Array for 1 or 2 winners in Ru Mode
let lowSaveResolver = null; // Promise resolver for RuPaul Low Save choice
let preliminaryBottomQueens = []; // Stores tentative bottom queens before low save
// --- Add this global flag ---
let ruPaulWantsDoubleWin = false; // Track if Ru checks the double win box


// --- Constants ---
const PLACEMENT_POINTS = { WIN: 5, TOP2: 4.5, HIGH: 4, SAFE: 3, LOW: 2, BTM: 1, ELIM: 0, IMMUNE: 0};
const AS10_MQP_POINTS = { WIN: 3, TOP2: 2, BTM: 0 }; // MQP points for LSFYL outcome
const MIN_QUEENS_AS10 = 18; // AS10 requires exactly 18 queens
const SCORE_CLOSE_THRESHOLD = 0.1; // Threshold for considering scores 'close' for potential double win
const DOUBLE_WIN_CHANCE = 0.15; // Base chance for a double win if scores are close (sim mode)
const MIN_QUEENS = 8; // Minimum queens required to start

// Replace this ENTIRE function
function initializeSimulator() {
    // Deep copy queen data to prevent modifications to original constant
    allQueensData = JSON.parse(JSON.stringify(ALL_QUEENS));
    loadQueenSelectors();
    loadCastSelectionButtons(); // Load predefined cast buttons
    bindEventListeners();
    currentDynamicFocus = null;
    riggoryLevelInput.value = riggory; // Set initial slider value
    riggoryValueSpan.textContent = riggory;
    // Initial mode update for AS10 requirements
    handleSimulationModeChange();
    showScreen('setup');
}
// --- Function to Update Challenge Announcement ---
function updateChallengeAnnouncement(challenge, focus = null) {
    const challengeAnnounceElement = document.getElementById('challenge-announcement');
    const challengeDescElement = document.getElementById('challenge-description'); // NEW

    if (challengeAnnounceElement) {
        let titleText = `Maxi Challenge: ${challenge.name}`;
        if (focus) {
           titleText += ` (Focus: ${focus.charAt(0).toUpperCase() + focus.slice(1)})`;
        }
        if (isNonEliminationChallenge) { // Use global flag set in runNextEpisodeStep
           titleText += " (Non-Elimination)";
        }
        challengeAnnounceElement.textContent = titleText;
    } else {
       console.warn("Element #challenge-announcement not found");
    }

    if(challengeDescElement) {
       challengeDescElement.textContent = challenge.description || "";
       challengeDescElement.classList.toggle('hidden', !challenge.description); // Show/hide based on description
    } else {
       console.warn("Element #challenge-description not found");
    }
}

// Add this NEW function
// COMPLETE FUNCTION: loadCastSelectionButtons
function loadCastSelectionButtons() {
    const container = document.getElementById('cast-selection-buttons');
    if (!container) {
        console.error("Cast selection buttons container not found.");
        return; // Exit if container doesn't exist
    }
    container.innerHTML = ''; // Clear previous buttons

    // Create a button for each predefined cast
    for (const castName in PREDEFINED_CASTS) {
        const button = document.createElement('button');
        button.textContent = `${castName}`; // Just the name for brevity
        button.title = `Select ${castName}`; // Full action in tooltip
        button.classList.add('button-style', 'cast-preset-button'); // Add classes for styling
        button.onclick = () => handleCastSelection(castName);
        container.appendChild(button);
    }

    // // REMOVED: The clear button is now separate in the HTML structure
    // const clearButton = document.createElement('button');
    // clearButton.textContent = "Clear Selection";
    // clearButton.classList.add('button-style', 'clear-button'); // Different style?
    // clearButton.onclick = () => {
    //     selectedQueenIDs.clear();
    //     document.querySelectorAll('.queen-selector.selected').forEach(el => el.classList.remove('selected'));
    //     updateSelectedCount();
    // };
    // container.appendChild(clearButton);
}

// Add this NEW function (Handler for the cast buttons)
function handleCastSelection(castName) {
    const castQueenIDs = PREDEFINED_CASTS[castName];

    if (!castQueenIDs) {
        console.error(`Cast "${castName}" not found in PREDEFINED_CASTS.`);
        return;
    }

    // Clear current selection
    selectedQueenIDs.clear();

    // Create a Set from the cast list for efficient lookup
    const castSet = new Set(castQueenIDs);
    const allQueenSelectors = document.querySelectorAll('.queen-selector');
    let addedCount = 0;
    let notFoundCount = 0;

    // Update the main selectedQueenIDs set and visual indicators
    allQueenSelectors.forEach(element => {
        const queenId = element.dataset.queenId;
        if (castSet.has(queenId)) {
            selectedQueenIDs.add(queenId);
            element.classList.add('selected');
            addedCount++;
        } else {
            element.classList.remove('selected'); // Deselect if not in the cast
        }
    });

     // Verify if all cast IDs were found in the loaded ALL_QUEENS
     castQueenIDs.forEach(id => {
         if (!allQueensData.some(q => q.id === id)) {
            console.warn(`Queen ID "${id}" from cast "${castName}" not found in ALL_QUEENS data.`);
            notFoundCount++;
         }
     });


    updateSelectedCount(); // Update count display and button state
}

function getInitialQueenData() {
    // Return a fresh deep copy each time a season starts
    return JSON.parse(JSON.stringify(allQueensData));
}


function loadQueenSelectors() {
    queenSelectionGrid.innerHTML = '';
    allQueensData.forEach(queen => {
        const div = document.createElement('div');
        div.classList.add('queen-selector');
        div.dataset.queenId = queen.id;
        div.innerHTML = `<img src="${queen.image}" alt="${queen.name}" title="${queen.name}"><span>${queen.name.split(' ')[0]}</span>`;
        div.addEventListener('click', () => toggleQueenSelection(queen.id, div));
        queenSelectionGrid.appendChild(div);
    });
    updateSelectedCount();
}

function toggleQueenSelection(queenId, element) {
    if (selectedQueenIDs.has(queenId)) {
        selectedQueenIDs.delete(queenId);
        element.classList.remove('selected');
    } else {
        selectedQueenIDs.add(queenId);
        element.classList.add('selected');
    }
    updateSelectedCount();
}

// COMPLETE FUNCTION: updateSelectedCount
function updateSelectedCount() {
    const count = selectedQueenIDs.size;
    selectedCountSpan.textContent = `Selected: ${count}`;

    const currentMode = simulationModeSelect.value;
    let isStartable = false;
    let minRequirementText = '';
    const minDisplaySpan = document.getElementById('min-queens-display');
    const minReqSpan = document.querySelector('.min-req');
    const as10ReqSpan = document.querySelector('.as10-req');

    // Show/Hide specific requirement text
    if (minReqSpan) minReqSpan.classList.toggle('hidden', currentMode === 'allstars10');
    if (as10ReqSpan) as10ReqSpan.classList.toggle('hidden', currentMode !== 'allstars10');

    if (currentMode === 'allstars10') {
        isStartable = (count === MIN_QUEENS_AS10);
        selectedCountSpan.style.color = isStartable ? 'var(--text-color-dark)' : 'var(--elim-color)';
        selectedCountSpan.title = isStartable ? '' : `Select exactly ${MIN_QUEENS_AS10} queens for AS10 mode`;
        if (!isStartable) selectedCountSpan.style.fontWeight = '700'; else selectedCountSpan.style.fontWeight = '600';
    } else {
        isStartable = (count >= MIN_QUEENS);
        selectedCountSpan.style.color = isStartable ? 'var(--text-color-dark)' : 'var(--elim-color)';
        selectedCountSpan.title = isStartable ? '' : `Select at least ${MIN_QUEENS} queens`;
        if (!isStartable) selectedCountSpan.style.fontWeight = '700'; else selectedCountSpan.style.fontWeight = '600';
        if (minDisplaySpan) minDisplaySpan.textContent = MIN_QUEENS; // Update standard min display
    }

    startSeasonButton.disabled = !isStartable;
}

// COMPLETE FUNCTION: bindEventListeners
// =========================================================
// ===        COMPLETE bindEventListeners Function       ===
// =========================================================
// Added null checks before adding listeners to elements retrieved by ID.

function bindEventListeners() {
    console.log("Binding event listeners V2 (Inc. Low Save)..."); // Debugging start

    // --- Setup Screen Elements (Using global vars + null checks) ---
    if (startSeasonButton) { startSeasonButton.addEventListener('click', startSeason); } else { console.error("Bind EL Error: #start-season-button missing."); }
    if (simulationModeSelect) { simulationModeSelect.addEventListener('change', handleSimulationModeChange); } else { console.error("Bind EL Error: #simulation-mode missing."); }
    if (premiereFormatSelect) { premiereFormatSelect.addEventListener('change', updateSelectedCount); } else { console.warn("Bind EL Warn: #premiere-format missing?"); } // Warn is ok?
    if (finaleFormatSelect) { finaleFormatSelect.addEventListener('change', updateSelectedCount); } else { console.warn("Bind EL Warn: #finale-format missing?"); }
    if (riggoryLevelInput) { riggoryLevelInput.addEventListener('input', (e) => { riggory = parseInt(e.target.value, 10); if (riggoryValueSpan) { riggoryValueSpan.textContent = riggory; } }); } else { console.error("Bind EL Error: #riggory-level missing."); }

    // Clear Cast Button (Fetched by ID)
    const clearCastButton = document.getElementById('clear-cast-button');
    if (clearCastButton) { clearCastButton.addEventListener('click', () => { selectedQueenIDs.clear(); document.querySelectorAll('.queen-selector.selected').forEach(el => el.classList.remove('selected')); updateSelectedCount(); }); } else { console.warn("Bind EL Warn: #clear-cast-button missing."); }

    // Toggles (Fetched by ID)
    const challengeToggleCheckbox = document.getElementById('toggle-challenge-selection');
    if (challengeToggleCheckbox) { challengeToggleCheckbox.addEventListener('change', (e) => { isManualChallengeSelectionEnabled = e.target.checked; }); } else { console.warn("Bind EL Warn: #toggle-challenge-selection missing."); }
    const bandokadontToggleCheckbox = document.getElementById('toggle-bandokadont-twist');
    if (bandokadontToggleCheckbox) { bandokadontToggleCheckbox.addEventListener('change', (e) => { const isAS10 = simulationModeSelect.value === 'allstars10'; if (isAS10) { e.target.checked = false; isBandokadontEnabled = false; } else { isBandokadontEnabled = e.target.checked; } }); } else { console.warn("Bind EL Warn: #toggle-bandokadont-twist missing."); }

    // === Interaction Buttons (Fetched by ID) ===
    const confirmChallengeBtn = document.getElementById('confirm-challenge-button');
    if (confirmChallengeBtn) { confirmChallengeBtn.addEventListener('click', handleChallengeConfirmation); } else { console.warn("Bind EL Warn: #confirm-challenge-button missing."); }
// Riggory Confirmation Button
const confirmRiggoryBtn = document.getElementById('confirm-riggory-button');
if (confirmRiggoryBtn) {
    confirmRiggoryBtn.addEventListener('click', handleRiggoryConfirmation);
} else {
    // Only an error if RuPaul mode might be used
    if (simulationModeSelect && simulationModeSelect.value === 'rupaul') {
        console.error("Bind EL Error: #confirm-riggory-button missing (Needed for Ru mode Riggory!)");
    } else {
        console.warn("Bind EL Warn: #confirm-riggory-button missing.");
    }
}
    // ** confirmWinnerButton uses global var defined at top **
    if (confirmWinnerButton) { confirmWinnerButton.addEventListener('click', handleRuPaulWinnerConfirmation); } else { console.error("Bind EL Error: GLOBAL 'confirmWinnerButton' not found!"); }

    // ** NEW: Confirm Low Save Button **
    const confirmLowSaveBtn = document.getElementById('confirm-low-save-button');
    if (confirmLowSaveBtn) { confirmLowSaveBtn.addEventListener('click', handleRuPaulLowSaveConfirmation); } else { console.error("Bind EL Error: #confirm-low-save-button NOT FOUND!"); } // Error because critical for Ru mode

    const confirmAllStarsElimBtn = document.getElementById('confirm-allstars-elim-button');
    if (confirmAllStarsElimBtn) { confirmAllStarsElimBtn.addEventListener('click', handleAllStarsEliminationConfirmation); } else { console.warn("Bind EL Warn: #confirm-allstars-elim-button missing."); }

    // --- Game Screen Buttons (Using global vars) ---
    if (nextEpisodeButton) { nextEpisodeButton.addEventListener('click', () => runNextEpisodeStep(true)); } else { console.error("Bind EL Error: Global 'nextEpisodeButton' not found."); }
    if (viewTrackRecordMidButton) { viewTrackRecordMidButton.addEventListener('click', showTrackRecordMidSeason); } else { console.error("Bind EL Error: Global 'viewTrackRecordMidButton' not found."); }
    if (restartButton) { restartButton.addEventListener('click', resetToSetup); } else { console.error("Bind EL Error: Global 'restartButton' (Game Screen) not found."); }

    // --- MQP Auto-confirm button (Fetched by ID) ---
    const confirmMQPButton = document.getElementById('confirm-mqp-button');
    if (confirmMQPButton) { confirmMQPButton.addEventListener('click', () => { console.log("MQP Auto-Confirm Clicked (manual trigger from listener)"); }); } else { console.warn("Bind EL Warn: #confirm-mqp-button missing (Needed for AS10)."); }

    // --- Track Record Screen Buttons (Using global vars / ID) ---
    if (backToGameButton) { backToGameButton.addEventListener('click', handleBackToGame); } else { console.error("Bind EL Error: Global 'backToGameButton' not found."); }
    const restartFromTrackRecordButton = document.getElementById('restart-from-track-record-button');
    if (restartFromTrackRecordButton) { restartFromTrackRecordButton.addEventListener('click', resetToSetup); } else { console.error("Bind EL Error: #restart-from-track-record-button not found."); }

    // --- Final Results Screen Buttons (Using global vars) ---
    if (finishSeasonButton) { finishSeasonButton.addEventListener('click', handleFinishSeasonClick); } else { console.error("Bind EL Error: Global 'finishSeasonButton' not found."); }
    if (viewFinalTrackRecordButton) { viewFinalTrackRecordButton.addEventListener('click', handleViewFinalTrackRecord); } else { console.error("Bind EL Error: Global 'viewFinalTrackRecordButton' not found."); }
    if (startNewSeasonButton) { startNewSeasonButton.addEventListener('click', resetToSetup); } else { console.error("Bind EL Error: Global 'startNewSeasonButton' not found."); }

    console.log("Event listener binding complete V2."); // Debugging end
} // === END bindEventListeners V2 === //
function promptRiggoryChoice(riggableQueens, challengeName) {
    return new Promise(resolve => {
        console.log("%c[RuPaul Riggory] Prompting for Favor/Penalty choice (V3 Multi)...", "color: #e67e22; font-weight: bold;");

        riggoryResolver = resolve; // Store resolver
        // episodeRiggoryActions Map should be cleared by runNextEpisodeStep

        // Get UI Elements
        const uiContainer = document.getElementById('rupaul-riggory-selection');
        const optionsContainer = document.getElementById('riggory-choice-options');
        const confirmButton = document.getElementById('confirm-riggory-button');
        const challengeInfoP = document.getElementById('riggory-challenge-info');
        const statusP = document.getElementById('riggory-selection-status');

        if (!uiContainer || !optionsContainer || !confirmButton || !challengeInfoP || !statusP) { console.error("Riggory UI Error V3: Elements missing!"); resolve(); return; }

        // Reset UI
        optionsContainer.innerHTML = '';
        statusP.textContent = 'Optionally select Favor (+) or Penalty (-) for any queen(s).'; // Initial status
        challengeInfoP.querySelector('.challenge-name-placeholder').textContent = challengeName || 'Unknown';

        // Generate cards for riggable queens
        riggableQueens.forEach(queen => {
            const card = document.createElement('div');
            card.className = 'choice-button-card enhanced riggory-choice-card';
            card.dataset.queenId = queen.id;

            const summaryDivHTML = generateCardStatsSummaryHTML(queen, false, false, false); // V1.3+ expected

            // Action Buttons
            const riggoryButtonsHTML = `
                <div class="riggory-actions">
                    <button class="riggory-action-btn favor-btn" data-action="FAVOR" data-queen-id="${queen.id}" title="Favor this Queen (+)">+</button>
                    <button class="riggory-action-btn penalty-btn" data-action="PENALTY" data-queen-id="${queen.id}" title="Penalize this Queen (-)">−</button>
                </div>
            `;

            card.innerHTML = `
                 <div class="card-main-info"> /* ... card content ... */ </div>
                 ${summaryDivHTML}
                 ${riggoryButtonsHTML}
             `;
             // Assemble full card HTML
             card.innerHTML = `
                 <div class="card-main-info">
                    <img src="${queen.image}" alt="${queen.name}">
                    <div class="name-score-group">
                        <span class="queen-name">${queen.name}</span>
                     </div>
                 </div>
                 ${summaryDivHTML}
                 ${riggoryButtonsHTML}
             `;


            optionsContainer.appendChild(card);
        }); // End forEach riggableQueen

        // === Event Listener for +/- Buttons (Delegated is slightly better, but this works) ===
        optionsContainer.querySelectorAll('.riggory-action-btn').forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.stopPropagation();

                const clickedAction = btn.dataset.action;
                const clickedQueenId = btn.dataset.queenId;
                const parentCard = btn.closest('.choice-button-card');
                if (!parentCard) return;

                const favorBtn = parentCard.querySelector('.favor-btn');
                const penaltyBtn = parentCard.querySelector('.penalty-btn');

                // Check current state in the Map
                const currentAction = episodeRiggoryActions.get(clickedQueenId);

                // --- Update Map ---
                if (currentAction === clickedAction) {
                    // Clicked the currently active button -> Deselect
                    episodeRiggoryActions.delete(clickedQueenId);
                } else {
                    // Clicked a new action (or no action selected) -> Select this one
                    episodeRiggoryActions.set(clickedQueenId, clickedAction);
                }

                // --- Update Visuals for THIS CARD ---
                parentCard.classList.remove('selected-favor', 'selected-penalty');
                favorBtn.style.opacity = 1; favorBtn.style.pointerEvents = 'auto';
                penaltyBtn.style.opacity = 1; penaltyBtn.style.pointerEvents = 'auto';

                const newAction = episodeRiggoryActions.get(clickedQueenId); // Get updated action
                if (newAction === 'FAVOR') {
                    parentCard.classList.add('selected-favor');
                    // Dim the other button
                    if (penaltyBtn) { penaltyBtn.style.opacity = 0.5; penaltyBtn.style.pointerEvents = 'none'; }
                } else if (newAction === 'PENALTY') {
                    parentCard.classList.add('selected-penalty');
                    // Dim the other button
                    if (favorBtn) { favorBtn.style.opacity = 0.5; favorBtn.style.pointerEvents = 'none'; }
                }

                // Update status text to show all current selections
                let statusTextParts = [];
                 episodeRiggoryActions.forEach((action, qId) => {
                     const qName = queens.find(q => q.id === qId)?.name || qId;
                     statusTextParts.push(`${action} ${qName}`);
                 });
                 statusP.textContent = statusTextParts.length > 0 ? "Applied: " + statusTextParts.join(', ') : 'Optionally select Favor (+) or Penalty (-)...';

                console.log(`[Ru Riggory Map]:`, episodeRiggoryActions);

            }); // End button click listener
        }); // End button listener setup


        // Show the UI
        confirmButton.disabled = false; // Always enabled
        uiContainer.classList.remove('hidden');
        console.log("Riggory choice UI (V3 Multi) displayed. Waiting for confirmation/continuation.");
    }); // End Promise
} // === END promptRiggoryChoice (V3 Multi-Select) === //
function handleRiggoryConfirmation() {
    console.log(`[RuPaul Riggory] Confirmed/Continued. Current Map:`, episodeRiggoryActions);

    // Hide UI
    document.getElementById('rupaul-riggory-selection')?.classList.add('hidden');
    document.getElementById('riggory-selection-status').textContent = '';

    // Resolve the promise
    if (riggoryResolver) {
        riggoryResolver();
        riggoryResolver = null;
    } else {
        console.error("Riggory resolver was null!");
    }
    // episodeRiggoryActions Map retains its state for use in calculateChallengeScores
}
// Also create the handler function:
function handleChallengeConfirmation() {
    const errorMessageP = document.getElementById('challenge-error-message');
    const confirmButton = document.getElementById('confirm-challenge-button');

    if (userSelectedChallenge && challengeChoiceResolver) {
        errorMessageP.textContent = ''; // Clear error
        confirmButton.disabled = true; // Prevent double clicks
        document.getElementById('challenge-selector-ui').classList.add('hidden'); // Hide the selector

         // Log the selected challenge (if not already logged by another process for this ep)
         if (userSelectedChallenge && !seasonLog.some(log => log.episode === currentEpisode)) {
             seasonLog.push({
                episode: currentEpisode,
                stage: splitPremiereStage || 'Normal',
                challenge: userSelectedChallenge.name,
                type: userSelectedChallenge.type
             });
        }

        // Resolve the promise to let runNextEpisodeStep continue
        challengeChoiceResolver(userSelectedChallenge); // Pass the object

        // Clean up state
        challengeChoiceResolver = null;
        userSelectedChallenge = null;

    } else {
         console.warn("No challenge selected or resolver missing.");
         errorMessageP.textContent = "Please select a challenge before confirming!";
    }
}
// --- Event Handlers ---
function handleSimulationModeChange() {
    const mode = simulationModeSelect.value;
    const setupScreenActive = !setupScreen.classList.contains('hidden');

    // If switching TO track record view mid-game (and game has started)
    if (mode === 'trackRecord' && queens.length > 0 && !isFinale && currentEpisode > 1 && !setupScreenActive) {
        updateTrackRecordTable();
        showScreen('trackRecord', false); // Show TR, don't allow back to game via this mode switch
    }

    // AS10 requires 18 queens - update selection count UI and disable unrelated options
    updateSelectedCount();
    const isAS10 = (mode === 'allstars10');
    // Disable incompatible options if AS10 selected
    premiereFormatSelect.disabled = isAS10;
    finaleFormatSelect.disabled = isAS10;
    if (isAS10) {
        premiereFormatSelect.value = 'Split'; // Force split-like structure
        finaleFormatSelect.value = 'LSFTC'; // Force LSFTC-like (Top 6 Lala) structure
    }
    // Disable Bandokadont toggle for AS10
    const bandokadontToggle = document.getElementById('toggle-bandokadont-twist');
    if (bandokadontToggle) {
         bandokadontToggle.disabled = isAS10;
         if(isAS10) bandokadontToggle.checked = false; // Uncheck if switching to AS10
         isBandokadontEnabled = bandokadontToggle.checked && !isAS10;
    }
    // Maybe disable manual challenge selection toggle initially for AS10?
    const challengeToggle = document.getElementById('toggle-challenge-selection');
     if (challengeToggle) {
         // Allow enabling it, but functionality might be limited to merge phase by runNextEpisodeStep
         // challengeToggle.disabled = isAS10;
         // if (isAS10) challengeToggle.checked = false;
         // isManualChallengeSelectionEnabled = challengeToggle.checked && !isAS10; // Or allow based on merge stage
     }

}
function handleSelectedCountClick() {
    if (startSeasonButton.disabled) {
        alert(`Please select at least ${MIN_QUEENS} queens to start the season.`);
    }
}
function showTrackRecordMidSeason() {
    if (isFinale && finalWinner) { // If finale concluded, show final TR
         updateTrackRecordTable(true);
         showScreen('trackRecord', false); // No back to game from final TR
         return;
    }
    // Otherwise show mid-season TR
    updateTrackRecordTable();
    showScreen('trackRecord', true); // Allow back to game
}
function handleBackToGame() {
    if (!isFinale) {
        showScreen('game');
        // Determine if game is waiting for RuPaul input
        const waitingForRuWinner = !rupaulWinnerSelectionUI.classList.contains('hidden');
        const waitingForRuLipsync = !rupaulDecision.classList.contains('hidden');

        if (!waitingForRuWinner && !waitingForRuLipsync) {
            // Re-enable next button if appropriate state
             nextEpisodeButton.disabled = false;
             nextEpisodeButton.classList.remove('hidden');
             viewTrackRecordMidButton.disabled = false; // Re-enable this too

             // Determine correct button text based on state
            let finaleTrigger = (finaleFormat === 'LSFTC' ? 4 : 3);
            if(initialCastSize <= finaleTrigger) finaleTrigger = Math.max(2, initialCastSize); // Adjust for small casts
            const activeCount = queens.filter(q => q.isActive).length;

            if (splitPremiereStage === 'A_Perf') nextEpisodeButton.textContent = "Start Group B Premiere";
            else if (splitPremiereStage === 'B_Perf') nextEpisodeButton.textContent = "Start Premiere Lipsync";
            else if (activeCount <= finaleTrigger) nextEpisodeButton.textContent = "Proceed to Finale";
            else nextEpisodeButton.textContent = "Next Episode";

        } else {
             viewTrackRecordMidButton.disabled = false; // Re-enable this
        }
    } else {
        // Should not happen if finale UI flow is correct, but handle defensively
        backToGameButton.classList.add('hidden');
        console.warn("Attempted 'Back to Game' during finale - not allowed.");
    }
}
function handleFinishSeasonClick() {
    if (!finalWinner) {
        console.error("Winner not set before showing final results! Attempting recovery...");
        // Basic recovery: find highest PPE among active/finalist queens
        const potentialWinners = queens.filter(q => q.isActive || q.trackRecord.includes("WINNER") || q.trackRecord.includes("RUNNER-UP"))
                                      .sort((a, b) => (b.ppe || 0) - (a.ppe || 0));
        if (potentialWinners.length > 0) {
             finalWinner = potentialWinners[0];
             finalRunnersUp = potentialWinners.slice(1, (finaleFormat === 'LSFTC' ? 4 : 3)); // Adjust slice based on format
             console.warn("Recovered winner based on PPE:", finalWinner.name);
             showFinalResultsDirect(finalWinner, finalRunnersUp);
        } else {
            // Absolute fallback
             winnerAnnouncement.innerHTML = "<p>Error determining winner!</p>";
             finalistsDisplay.innerHTML = "";
             showScreen('finalResults');
        }
        return;
    }
    showFinalResultsDirect(finalWinner, finalRunnersUp);
}
function handleViewFinalTrackRecord() {
    updateTrackRecordTable(true); // Force final update calculation
    showScreen('trackRecord', false); // No back to game from final TR
}
// No changes needed here normally, part of the trigger flow
function handleRuPaulWinnerConfirmation() {
    const selectedCards = winnerChoiceOptions.querySelectorAll('.choice-button-card.selected');

    if (selectedCards.length === 0 || selectedCards.length > 2) {
        alert(`Please select ${selectedCards.length > 2 ? 'no more than' : 'at least'} one winner! (Select 1 or 2)`);
        return; // Stop if invalid number selected
    }

    // --- Store the chosen winner OBJECTS directly ---
    ruPaulChosenWinners = []; // Clear previous just in case
    selectedCards.forEach(card => {
        const winnerId = card.dataset.queenId;
        const foundWinner = queens.find(q => q.id === winnerId);
        if (foundWinner) {
            ruPaulChosenWinners.push(foundWinner);
        } else {
            console.error(`Ru Winner Confirm Error: Could not find queen object for ID: ${winnerId}`);
            // Optionally handle this more gracefully, e.g., show error, don't resolve
        }
    });

    if (ruPaulChosenWinners.length !== selectedCards.length) {
         console.error("Mismatch between selected cards and found queen objects!");
         alert("An error occurred identifying the selected winners. Please try again.");
         ruPaulChosenWinners = []; // Clear faulty array
         return; // Prevent proceeding with bad data
    }

    console.log(`[RuPaul Mode Debug] RuPaul Confirmed Winner(s): ${ruPaulChosenWinners.map(q => q.name).join(' & ')} (${ruPaulChosenWinners.length})`);

    // Hide UI and resolve the promise
    rupaulWinnerSelectionUI.classList.add('hidden');
    confirmWinnerButton.disabled = true; // Disable button after use
    if (winnerChoiceResolver) {
        winnerChoiceResolver(); // Resolve promise to continue runNextEpisodeStep
        winnerChoiceResolver = null;
        console.log(" > Resolved winner choice promise.");
    } else {
        console.error("Winner choice resolver was null!");
    }
} // === END handleRuPaulWinnerConfirmation V2 === //

// Replace the ENTIRE handleRuPaulLipsyncDecision function with this updated version:

// Replace the ENTIRE handleRuPaulLipsyncDecision function with this version

/**
 * Handles RuPaul's decision in a lipsync for your life scenario.
 * Determines the eliminated queen, checks for Bandokadont twist,
 * sets state, and triggers subsequent processing.
 * @param {number} savedQueenIndex - Index (0 or 1) of the queen RuPaul chose to save.
 */
// ===================================================================
// ===       COMPLETE handleRuPaulLipsyncDecision Function V2      ===
// ===================================================================
// Uses the global `currentStepContext` variable.
// Replaces the ENTIRE old function.

function handleRuPaulLipsyncDecision(savedQueenIndex) {
    console.log(`[RuPaul Mode Debug] Handling LSFYL Decision. Saved Index: ${savedQueenIndex}`);
    // Disable interactions temporarily
    document.querySelectorAll('#lipsync-choice-options .choice-button-card').forEach(card => card.onclick = null);
    document.querySelector('#double-shantay-option button')?.setAttribute('disabled', 'true');

    if (!bottomQueens || bottomQueens.length < 2) {
        console.error("Lipsync decision made but bottomQueens array is invalid.");
        rupaulDecision.classList.add('hidden');
        return;
    }

    // --- Handle Double Shantay ---
    if (savedQueenIndex === -1) {
        console.log("  Decision: Double Shantay");
        eliminatedQueenThisEpisode = null; // No elimination
        if(gameMode !== 'allstars10') { // AS10 doesn't have global shantay flag? Assume standard logic.
            hasDoubleShantayOccurred = true; // Set flag for season (Standard Mode)
        }
        lipsyncResultText.textContent = `${bottomQueens[0].name}, ${bottomQueens[1].name}, Shantay, you BOTH stay!`;

    }
    // --- Handle Single Shantay ---
    else {
         if (savedQueenIndex !== 0 && savedQueenIndex !== 1) {
             console.error(`Invalid savedQueenIndex: ${savedQueenIndex}`);
             rupaulDecision.classList.add('hidden');
             return;
         }
        const savedQueen = bottomQueens[savedQueenIndex];
        const elimQueen = bottomQueens.find((q, i) => i !== savedQueenIndex);

        if (!savedQueen || !elimQueen) {
             console.error("Could not determine saved/eliminated queen from index.");
             eliminatedQueenThisEpisode = null;
             lipsyncResultText.textContent = "Error: Could not determine queens.";
        } else {
            console.log(`  Decision: Save ${savedQueen.name}, Eliminate ${elimQueen.name}`);
            let wasTwistTriggeredAndSucceeded = false;

            // Check Bandokadont save *only* if NOT a Double Shantay (Standard mode only)
            if (gameMode === 'simulation' || gameMode === 'rupaul') { // Twist applies in Normal/Ru modes
                wasTwistTriggeredAndSucceeded = runDunkTankTwist(elimQueen);
            }

            if (wasTwistTriggeredAndSucceeded) {
                 eliminatedQueenThisEpisode = null; // Twist overrides elimination
                 lipsyncResultText.textContent = `${savedQueen.name}, Shantay you stay. ${elimQueen.name}... the dunk tank SAVES you! Condragulations!`;
                 console.log(`  Bandokadont Twist saved ${elimQueen.name}`);
            } else {
                 // ** SET GLOBAL ELIMINATION VARIABLE **
                 eliminatedQueenThisEpisode = [elimQueen];
                 lipsyncResultText.textContent = `${savedQueen.name}, Shantay you stay. ${elimQueen.name}, Sashay away.`;
                 console.log(`  Marked ${elimQueen.name} for elimination.`);
            }
        }
    } // End of Single Shantay logic

    // --- Process Elimination and Update State (Common Logic) ---
    try {
        // ** READ context from the GLOBAL variable **
         const context = currentStepContext;
         if (!context) {
             console.error("FATAL ERROR in handleRuPaulLipsyncDecision: currentStepContext is null or undefined!");
             // Handle this critical error - maybe try to deduce context or show error and stop?
             alert("Critical error processing decision! Context lost. Please restart.");
             resetToSetup();
             return;
         }
         console.log(` Processing elimination in handleRuPaulLipsyncDecision using global context: ${context}`);

        // Find the queens who were actually *competing* in the step where Ru was paused.
        // This might require storing 'activeQueensForStep' globally too, or recalculating.
        // For simplicity now, let's ASSUME 'processElimination' can correctly handle using the elim var
        // and apply it to the main 'queens' array. It updates TR based on who participated IN THE EPISODE LOG.
        // We may need to refine how TR update gets its list of involved queens after Ru mode pause.

         processElimination(context, queens, isNonEliminationChallenge); // PASS FULL queens list for now, processElimination needs to be robust enough internally OR we need to store activeQueensForStep globally

        // Display final outcome message set above
         displayEliminationOutcome(); // Displays text & updates count/active display

        // Hide Ru's decision UI after processing
         rupaulDecision.classList.add('hidden');


        // Re-enable NEXT button logic if not in finale
        if (!isFinale) {
            const nextActiveCount = queens.filter(q => q.isActive).length;
            let finaleTriggerCount = (finaleFormat === 'LSFTC' ? 4 : 3);
             if(gameMode === 'allstars') finaleTriggerCount = 4; // Adjust for AS LSFYLegacy Finale size
            if (initialCastSize <= finaleTriggerCount) finaleTriggerCount = Math.max(2, initialCastSize);

            let nextButtonText = "Next Episode";
             // Logic to determine if NEXT step triggers finale (using updated counts)
             const isNextFinale = (splitPremiereStage === null && (nextActiveCount <= finaleTriggerCount || currentEpisode + 1 > maxEpisodesCeiling)); // Check if NEXT ep is finale

            if (isNextFinale) {
                  nextButtonText = "Proceed to Finale";
            } else if (splitPremiereStage === 'B_Perf') { // Should use the globally advanced stage for next step
                   nextButtonText = "Start Group B Premiere";
            } else if (gameMode === 'allstars10') {
                 // Add AS10 next button text logic here, similar to runNextEpisodeStep end
                 const nextEp = currentEpisode; // Should have been advanced by processElimination
                 const nextAs10Phase = getAS10Phase(nextEp);
                 const nextGroup = allStars10_currentGroup;
                 const nextGroupEp = allStars10_groupEpisode;
                  if (nextAs10Phase === 'PRE_MERGE') nextButtonText = `Start ${nextGroup} Ep ${nextGroupEp}`;
                  else if (nextAs10Phase === 'PRE_LALA') nextButtonText = "Start Pre-Merge LaLaPaRuza";
                  else if (nextAs10Phase === 'MERGE') nextButtonText = `Start Merge Episode ${nextEp}`;
                  else if (allStars10_finalLalaparuzaStage) nextButtonText = "Start Final LaLaPaRuza";
                  else nextButtonText = `Next Episode (${nextEp})`; // Fallback
             } else {
                 nextButtonText = `Next Episode (${currentEpisode})`; // Display current ep number (already advanced)
            }

            nextEpisodeButton.textContent = nextButtonText;
            nextEpisodeButton.disabled = false;
            viewTrackRecordMidButton.disabled = false;
            nextEpisodeButton.classList.remove('hidden');
            console.log("  Next episode button re-enabled.");
        } else {
             // Finale logic (Enable finish/view final TR)
              console.log("  Finale is active, enabling final buttons.");
              finishSeasonButton.classList.remove('hidden');
             viewTrackRecordMidButton.disabled = false; viewTrackRecordMidButton.textContent = "View Final Track Record";
             viewTrackRecordMidButton.onclick = handleViewFinalTrackRecord;
         }

    } catch (error) {
        console.error("Error during post-RuPaul lipsync decision processing:", error);
        // Failsafe unlock UI if needed
         if (!isFinale) { nextEpisodeButton.disabled = false; nextEpisodeButton.classList.remove('hidden'); viewTrackRecordMidButton.disabled = false; }
    }
} // === End handleRuPaulLipsyncDecision V2 (Corrected) === // === End handleRuPaulLipsyncDecision (Corrected) ===
function showScreen(screenName, allowBackToGame = true) {
    
    // Hide all screens first
    setupScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    trackRecordScreen.classList.add('hidden');
    finalResultsScreen.classList.add('hidden');

    // Hide action buttons that depend on screen context
    nextEpisodeButton.classList.add('hidden');
    finishSeasonButton.classList.add('hidden');
    backToGameButton.classList.add('hidden');
    viewTrackRecordMidButton.classList.add('hidden'); // Hide by default, show in 'game'

    switch (screenName) {
        case 'setup':
            setupScreen.classList.remove('hidden');
            break;
        case 'game':
            gameScreen.classList.remove('hidden');
            // Show mid-season track record button only if not finale
            if (!isFinale) {
                 viewTrackRecordMidButton.classList.remove('hidden');
                 // Disable if waiting for RuPaul decision? Maybe not, allow checking TR.
                 // viewTrackRecordMidButton.disabled = !rupaulDecision.classList.contains('hidden') || !rupaulWinnerSelectionUI.classList.contains('hidden');
            }
            break;
        case 'trackRecord':
            trackRecordScreen.classList.remove('hidden');
             // Show back button only if allowed and not in finale state
             if (allowBackToGame && !isFinale) {
                 backToGameButton.classList.remove('hidden');
             }
            break;
        case 'finalResults':
            finalResultsScreen.classList.remove('hidden');
            break;
    }
}

// --- Season Setup & Start ---
function startSeason() {
    // --- 1. Validation ---
    gameMode = simulationModeSelect.value; // Get mode first for validation
    if (gameMode === 'allstars10') {
        if (selectedQueenIDs.size !== MIN_QUEENS_AS10) {
            alert(`All Stars 10 mode requires exactly ${MIN_QUEENS_AS10} queens. You have selected ${selectedQueenIDs.size}.`);
            return;
        }
    } else {
        if (selectedQueenIDs.size < MIN_QUEENS) {
            alert(`Please select at least ${MIN_QUEENS} queens to start the season.`);
            return;
        }
    }

    // --- 2. Get Settings ---
    premiereFormat = premiereFormatSelect.value; finaleFormat = finaleFormatSelect.value; riggory = parseInt(riggoryLevelInput.value, 10);
    initialCastSize = selectedQueenIDs.size;
    if (gameMode === 'allstars10') { premiereFormat = 'Split'; finaleFormat = 'LSFTC'; }

    // --- 3. Initialize Cast ---
    queens = getInitialQueenData().filter(q => selectedQueenIDs.has(q.id));
    if (queens.length !== initialCastSize || queens.length === 0) { alert("Cast error."); console.error("Cast init failed.", selectedQueenIDs, queens); resetToSetup(); return; }

    // *** NEW: Identify Preset Season Name ***
    currentSeasonName = null; // Reset season name
    for (const castName in PREDEFINED_CASTS) {
        const presetQueenIDs = new Set(PREDEFINED_CASTS[castName]);
        // Check if the selected set has the same size and all elements as the preset
        if (selectedQueenIDs.size === presetQueenIDs.size &&
            [...selectedQueenIDs].every(id => presetQueenIDs.has(id)))
        {
            currentSeasonName = castName;
            console.log(`Preset cast identified: ${currentSeasonName}`);
            break; // Found match, stop checking
        }
    }
    if (!currentSeasonName) {
        console.log("Custom cast selected or no matching preset found.");
    }
    // *** END: Identify Preset Season Name ***


    console.log(`Starting Season - Name: ${currentSeasonName || 'Custom'}, Mode: ${gameMode}, Queens: ${initialCastSize}, Riggory: ${riggory}`);

    // --- 4. Reset Core Game State ---
    currentEpisode = 1; isFinale = false; seasonLog = []; eliminatedQueenThisEpisode = null; bottomQueens = []; hasDoubleShantayOccurred = false;
    ruPaulChosenWinners = []; finalWinner = null; finalRunnersUp = []; winnerChoiceResolver = null; lastEpWasDoubleWin = false;
    lipsyncWinner = null; bottomQueensAS = []; elimChoiceResolver = null; challengeChoiceResolver = null; userSelectedChallenge = null;
    mqpDistributionResolver = null; lalaparuzaResolver = null; lowSaveResolver = null; preliminaryBottomQueens = []; episodeRiggoryActions.clear(); // Clear riggory map
    // --- 5. Reset Queen Properties & AS10 Specific Init ---
    queens.forEach(q => {
        q.trackRecord = []; q.wins = 0; q.highs = 0; q.safes = 0; q.lows = 0; q.bottoms = 0;
        q.ppe = 0; q.isActive = true; q.isImmune = false; q.episodeScore = 0; q.eliminatedInEpisode = null;
        q.winsInARow = 0; q.nonWinStreak = 0; q.lipsyncScore = undefined;
        // AS10 specific properties
        q.mqp = 0; q.mqp_donated = 0; q.mqp_received = 0; q.as10_group = null; q.as10_qualified = false;
    });

    // --- 6. Handle Setup Based on Mode ---
    splitPremiereGroupA_IDs = []; splitPremiereGroupB_IDs = []; currentPremiereGroup = null; splitPremiereStage = null; // Reset standard premiere
    allStars10_groups = { A: [], B: [], C: [] }; allStars10_currentGroup = null; allStars10_groupEpisode = 0; // Reset AS10 groups/ep
    allStars10_mergeQualifiers_IDs = new Set(); allStars10_nonQualifiers_IDs = new Set(); allStars10_mqpDonationQueue = []; allStars10_lalaparuzaLog = [];
    allStars10_preMergeLalaWinnerID = null; allStars10_finalLalaparuzaStage = false;

    if (gameMode === 'allstars10') {
        const setupSuccess = setupAS10Groups(); // Calls internal setup
        if (!setupSuccess) return; // Exit if AS10 setup failed validation
    } else if (premiereFormat === 'Split') {
        // Setup standard Split Premiere (logic unchanged)
        const ids = Array.from(selectedQueenIDs).sort(() => 0.5 - Math.random());
        const mid = Math.ceil(ids.length / 2);
        splitPremiereGroupA_IDs = ids.slice(0, mid); splitPremiereGroupB_IDs = ids.slice(mid);
        currentPremiereGroup = 'A'; splitPremiereStage = 'A_Perf';
    } else {
        // Normal or other formats don't need specific group setup here
    }

    // --- Reset Twist Variables (handled earlier now, but ensure correct defaults) ---
     isBandokadontEnabled = document.getElementById('toggle-bandokadont-twist').checked && mode !== 'allstars10';
     if (isBandokadontEnabled) {
         // Schedule saves if needed (existing logic) - should not run for AS10 due to check above
         // bandokadontSavesScheduled = ...;
     } else { bandokadontSavesScheduled = []; bandokadontSavesUsed = 0; }

    // --- 7. Setup UI & Start ---
    setupTrackRecordHeader(); // Set up the table header columns

    if (gameMode === 'trackRecord') {
        updateTrackRecordTable(); // Show initial empty track record
        showScreen('trackRecord', false); // Show TR screen, no back button
        return; // Don't proceed to game screen
    }

    showScreen('game');
    runNextEpisodeStep(); // Run the first logical step
}
function getChallengeForEpisode(episode, competingQueens, stage = null) {
    console.log(`[ChalSelect V2] Ep ${episode}, Stage: ${stage}, Season: ${currentSeasonName||'Custom'}`);
    const queenCount = competingQueens.length;
    const challengesRunThisSeasonByName = seasonLog.map(log => log.challenge); // Get names already run

    // --- Attempt 1: Use Predefined Sequence by NAME ---
    if (currentSeasonName && PREDEFINED_CHALLENGE_SEQUENCES[currentSeasonName]) {
        const sequence = PREDEFINED_CHALLENGE_SEQUENCES[currentSeasonName];
        let sequenceIndex = episode - 1; // Default 0-based index

        // --- Adjust Index for Specific Formats ---
        if (premiereFormat === 'Split' && episode === 1) {
             // For episode 1, check stage explicitly
             sequenceIndex = (stage === 'B_Perf') ? 1 : 0; // Index 0 for Group A, Index 1 for Group B
             console.log(` > Split Premiere Ep 1 adjustment. Stage: ${stage}, Index: ${sequenceIndex}`);
        } else if (premiereFormat === 'Split' && episode > 1 && stage === null) {
             // After split premiere, logical Ep 2 maps to sequence index 2, Ep 3 to 3, etc.
             sequenceIndex = episode; // +1 offset because index 0,1 were used by premiere
             console.log(` > Post-Split Premiere adjustment. Logical Ep: ${episode}, Index: ${sequenceIndex}`);
        }
        // AS10 would need specific logic here based on group & groupEpisode

        sequenceIndex = Math.max(0, Math.min(sequenceIndex, sequence.length - 1)); // Clamp index

        if (sequenceIndex < sequence.length) {
            const requiredChallengeName = sequence[sequenceIndex];
            console.log(` > Sequence Req: "${requiredChallengeName}" at index ${sequenceIndex}`);

            // Find the EXACT challenge object by name
            const requiredChallengeObject = CHALLENGES.find(c => c.name === requiredChallengeName);

            if (requiredChallengeObject) {
                // Check if challenge meets queen count minimums
                let countCheckPassed = true;
                 if (requiredChallengeObject.minQueens && queenCount < requiredChallengeObject.minQueens) countCheckPassed = false;
                 if (requiredChallengeObject.name === "Snatch Game" && queenCount < 5) countCheckPassed = false;
                 if (requiredChallengeObject.name === "Makeover" && queenCount < 4) countCheckPassed = false; // Makeover needs >= 4 typically for pairs
                 // Add other specific name checks if needed (e.g., Roast might need more)

                if (countCheckPassed) {
                     console.log(`  > Sequence Match Found & Valid: "${requiredChallengeObject.name}"`);
                     return requiredChallengeObject; // Return the specific challenge object
                 } else {
                     console.warn(`  > Sequence Warning: Required challenge "${requiredChallengeName}" queen count not met (${queenCount}/${requiredChallengeObject.minQueens || 'N/A'}). Fallback.`);
                 }
            } else {
                 console.error(`  > Sequence FATAL ERROR: Challenge named "${requiredChallengeName}" not found in main CHALLENGES array! Check spelling/existence. Fallback.`);
                 // Return null or fallback immediately? Let's fallback to random for now.
            }
        } else {
             console.log(`  > Sequence index ${sequenceIndex} out of bounds (${sequence.length}). Fallback.`);
        }
    } else {
        console.log("  > No predefined sequence or custom cast. Using random.");
    }

    // --- Fallback: Use Existing Random Selection Logic ---
    console.log("  > Falling back to random selection via selectEpisodeChallenge...");
    return selectEpisodeChallenge(competingQueens); // Calls the old phase-based random selector
}
// === END getChallengeForEpisode V2 === //
// === END getChallengeForEpisode === //
function getAS10TrackRecordIndex(logicalEpisode, groupLetter = null, groupEpisodeNum = 0) {
    const phase = getAS10Phase(logicalEpisode);

    if (phase === 'PRE_MERGE') {
        if (!groupLetter || !groupEpisodeNum || groupEpisodeNum < 1 || groupEpisodeNum > 3) {
            console.error(`Invalid input for AS10 pre-merge index calculation: Ep ${logicalEpisode}, Group ${groupLetter}, GroupEp ${groupEpisodeNum}`);
            return Math.max(0, logicalEpisode - 1); // Fallback guess
        }
        let baseIndex = 0;
        if (groupLetter === 'B') baseIndex = 3;
        if (groupLetter === 'C') baseIndex = 6;
        return baseIndex + (groupEpisodeNum - 1); // GroupEp 1->Index 0, GroupEp 2->Index 1, etc.
    } else if (phase === 'PRE_LALA') {
        return 9; // Pre-merge LaLaPaRuZa always occupies index 9 (conceptual Ep 10)
    } else if (phase === 'MERGE') {
        // Merge episodes start conceptually at 11, map to index 10 onwards
        return 9 + (logicalEpisode - 10);
    } else if (phase === 'FINALE') {
         // The final LS happens in the last logical merge episode. The index should be the last merge index.
         // Example: Top 6 Lala starts after logical Ep 14 (index 13). It occupies index 13 conceptually.
         return 9 + (logicalEpisode - 10);
    } else { // Should not happen
         console.error("Unknown AS10 phase for track record index:", phase, logicalEpisode);
         return Math.max(0, logicalEpisode - 1);
    }
}
function getAS10Phase(logicalEpisode) {
    if (logicalEpisode >= 1 && logicalEpisode <= 9) {
        return 'PRE_MERGE';
    } else if (logicalEpisode === 10) {
        return 'PRE_LALA';
    } else if (logicalEpisode >= 11) {
         // Determine if it's the Final Top 6 LaLa or regular merge
         // Finale LaLa starts when active count <= 6 AFTER pre-merge LS
         const expectedFinaleStartEpisode = 11 + (10 - 6); // Starts after 4 merge elims = Ep 15
         if (logicalEpisode >= expectedFinaleStartEpisode && allStars10_finalLalaparuzaStage) { // Need a flag set when final LaLa starts
             return 'FINALE';
         } else if (logicalEpisode >= 11) {
             return 'MERGE';
         }
    }
    return 'UNKNOWN';
}

function runDunkTankTwist(potentialEliminee) {
    // 1. Is the twist globally enabled?
    if (!isBandokadontEnabled) {
        // 
        return false;
    }

    // 2. Check if a save is SCHEDULED for this exact episode
    const isScheduled = bandokadontSavesScheduled.includes(currentEpisode);
    if (!isScheduled) {
        // 
        return false;
    }

    // --- Trigger the Save! ---
    // No need to check count here, scheduling logic handles the max of 2 attempts
    bandokadontSavesUsed++; // Track that a scheduled save occurred
    // Remove this episode from the schedule in case of weird race conditions/re-checks (though shouldn't happen)
    bandokadontSavesScheduled = bandokadontSavesScheduled.filter(ep => ep !== currentEpisode);

    
    return true; // Queen is saved!
}
// --- Full Reset Function --- (Called by Restart Buttons)
function resetToSetup() {
    console.log("Resetting Simulation V2 to Setup...");

    // Reset core game state variables
    queens = []; currentEpisode = 1; seasonLog = []; isFinale = false;
    bottomQueens = []; eliminatedQueenThisEpisode = null; hasDoubleShantayOccurred = false;
    ruPaulChosenWinner = null; initialCastSize = 0; finalWinner = null; finalRunnersUp = [];
    winnerChoiceResolver = null; lastEpWasDoubleWin = false; selectedQueenIDs.clear();

    // === Reset RuPaul Mode Specific ===
    ruPaulChosenWinners = [];
    lowSaveResolver = null;
    preliminaryBottomQueens = [];
    episodeRiggoryActions.clear(); // Clear the riggory map
    riggoryResolver = null;
// Hide UI etc.
document.getElementById('rupaul-riggory-selection')?.classList.add('hidden');
document.getElementById('riggory-choice-options').innerHTML = '';
document.getElementById('riggory-selection-status').textContent = '';

    // Reset format-specific variables
    splitPremiereGroupA_IDs = []; splitPremiereGroupB_IDs = []; currentPremiereGroup = null; splitPremiereStage = null;
    isManualChallengeSelectionEnabled = false; document.getElementById('toggle-challenge-selection').checked = false;
    challengeChoiceResolver = null; userSelectedChallenge = null;
    isBandokadontEnabled = false; document.getElementById('toggle-bandokadont-twist').checked = false; bandokadontSavesScheduled = []; bandokadontSavesUsed = 0;
    lipsyncWinner = null; bottomQueensAS = []; elimChoiceResolver = null;

    // --- Reset AS10 Specific Variables ---
    allStars10_groups = { A: [], B: [], C: [] }; allStars10_currentGroup = null; allStars10_groupEpisode = 0;
    allStars10_mergeQualifiers_IDs = new Set(); allStars10_nonQualifiers_IDs = new Set();
    allStars10_mqpDonationQueue = []; allStars10_lalaparuzaLog = []; allStars10_preMergeLalaWinnerID = null;
    allStars10_finalLalaparuzaStage = false; mqpDistributionResolver = null; lalaparuzaResolver = null;

    // Clear UI elements safely
    try {
        document.getElementById('active-queens-display').innerHTML = '';
        document.getElementById('active-queens-display-container').classList.add('hidden');
        document.getElementById('results-display').classList.add('hidden');
        const resultsGrid = document.querySelector('#results-display .results-grid'); if (resultsGrid) resultsGrid.innerHTML = '';
        const critiquesSection = document.getElementById('results-critiques-section'); if (critiquesSection) critiquesSection.innerHTML = ''; // Clear critiques too
        document.getElementById('lipsync-info').classList.add('hidden');
        document.getElementById('lipsync-contestants').innerHTML = '';
        document.getElementById('lipsync-result-text').textContent = '';
        document.getElementById('rupaul-decision').classList.add('hidden');
        document.getElementById('rupaul-winner-selection').classList.add('hidden');
        document.getElementById('winner-choice-options').innerHTML = '';
        document.getElementById('calculated-winner-name').textContent = '';
        document.getElementById('rupaul-low-save-selection').classList.add('hidden'); // Hide new UI
        document.getElementById('low-save-choice-options').innerHTML = '';            // Clear new UI
        document.getElementById('outcome-text').textContent = '';
        document.getElementById('track-record-body').innerHTML = '';
        document.getElementById('track-record-header').innerHTML = '';
        // Reset Winner announcement more carefully
         const winnerAnnounceContainer = document.getElementById('winner-announcement');
         const winnerImgElement = document.getElementById('winner-img');
         const winnerNameElement = document.getElementById('winner-name');
         const revealTexts = winnerAnnounceContainer?.querySelectorAll('.reveal-text');
         const finalWords = winnerAnnounceContainer?.querySelector('.final-words');
         const winnerReveal = winnerAnnounceContainer?.querySelector('.winner-reveal');
         if (winnerAnnounceContainer && winnerImgElement && winnerNameElement && revealTexts && finalWords && winnerReveal) {
             winnerImgElement.src = ""; winnerImgElement.alt = "Season Winner";
             winnerNameElement.textContent = "WINNER NAME"; // Placeholder
             // Optionally reset reveal texts if modified dynamically, otherwise leave default HTML
             // revealTexts[0].textContent = "Ladies, the time has come...";
             // revealTexts[1].textContent = "America's Next Drag Superstar is...";
             // finalWords.textContent = "Condragulations, you're a winner, baby!";
         } else { console.error("UI Reset Error: Could not fully reset winner announcement elements."); }

        document.getElementById('finalists-display').classList.add('hidden');
        document.getElementById('episode-title').textContent = 'Episode X';
        document.getElementById('remaining-queens-count').textContent = 'N/A';
        document.getElementById('challenge-announcement').textContent = 'Challenge: Awaiting Assignment...'; // Reset challenge title
         document.getElementById('challenge-description').classList.add('hidden'); // Hide description
         document.getElementById('challenge-description').textContent = '';
        // Hide optional UI sections
        document.getElementById('challenge-selector-ui')?.classList.add('hidden');
        document.getElementById('mqp-distribution-ui')?.classList.add('hidden');
        document.getElementById('mqp-choice-options').innerHTML = '';
        document.getElementById('mqp-donation-log').classList.add('hidden');
        const donationLogUL = document.querySelector('#mqp-donation-log ul'); if (donationLogUL) donationLogUL.innerHTML = '';
        document.getElementById('merge-announcement-ui')?.classList.add('hidden');
        document.getElementById('lalaparuza-ui')?.classList.add('hidden');
        document.getElementById('format-info-box').classList.add('hidden');
        document.getElementById('allstars-elimination-choice')?.classList.add('hidden');
        // Hide navigation buttons during reset
         if(nextEpisodeButton) nextEpisodeButton.classList.add('hidden');
         if(finishSeasonButton) finishSeasonButton.classList.add('hidden');

    } catch (e) { console.error("UI Reset Error:", e); }

    // Reset selections on Setup screen visually
    document.querySelectorAll('.queen-selector.selected').forEach(el => el.classList.remove('selected'));
    handleSimulationModeChange(); // Re-apply mode-specific UI constraints/text
    updateSelectedCount(); // Update counter and button state based on selected mode

    showScreen('setup');
    console.log("Reset V2 complete.");
} // === END resetToSetup V2 === //
// --- Add NEW Function: setupAS10Groups ---
// COMPLETE FUNCTION: setupAS10Groups
function setupAS10Groups() {
    allStars10_groups = { A: [], B: [], C: [] };
    allStars10_mergeQualifiers_IDs = new Set(); // Clear any previous qualifiers
    allStars10_nonQualifiers_IDs = new Set(); // Clear non-qualifiers

    if (queens.length !== MIN_QUEENS_AS10) {
        console.error(`AS10 group setup failed: Expected ${MIN_QUEENS_AS10} queens, found ${queens.length}.`);
        alert(`Error: All Stars 10 requires exactly ${MIN_QUEENS_AS10} queens.`);
        resetToSetup(); // Go back to setup if count is wrong
        return false; // Indicate failure
    }

    const shuffledQueens = [...queens].sort(() => 0.5 - Math.random()); // Shuffle the cast

    for (let i = 0; i < shuffledQueens.length; i++) {
        const queen = shuffledQueens[i];
        if (i < 6) {
            allStars10_groups.A.push(queen.id);
        } else if (i < 12) {
            allStars10_groups.B.push(queen.id);
        } else {
            allStars10_groups.C.push(queen.id);
        }
        queen.mqp = 0; // Initialize MQP points
        queen.mqp_donated = 0; // Track donations given
        queen.mqp_received = 0; // Track donations received
        queen.as10_group = (i < 6) ? 'A' : (i < 12) ? 'B' : 'C'; // Assign group letter
        queen.as10_qualified = false; // Flag for merge qualification
    }

    console.log("AS10 Groups Assigned:");
    console.log("Group A:", allStars10_groups.A.map(id => queens.find(q => q.id === id)?.name));
    console.log("Group B:", allStars10_groups.B.map(id => queens.find(q => q.id === id)?.name));
    console.log("Group C:", allStars10_groups.C.map(id => queens.find(q => q.id === id)?.name));

    // Set initial state for the first group
    allStars10_currentGroup = 'A';
    allStars10_groupEpisode = 1;
    currentEpisode = 1; // Conceptual episode 1

    return true; // Indicate success
}

function setupTrackRecordHeader() {
    trackRecordHeader.innerHTML = ''; // Clear existing
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Queen</th>'; // First column is always Queen name

    // Determine max columns needed based on potential episodes
    // Use initialCastSize as a proxy for likely max episodes needed in header
    // This avoids excessively long headers for short seasons that end early
    // let maxHeaderEpisodes = Math.min(maxEpisodesCeiling, initialCastSize + 2); // Add a couple buffer
     let maxHeaderEpisodes = maxEpisodesCeiling; // Or just always use the ceiling for consistency

    for (let i = 1; i <= maxHeaderEpisodes; i++) {
        headerRow.appendChild(Object.assign(document.createElement('th'), { textContent: `Ep ${i}` }));
    }
    headerRow.innerHTML += '<th>W</th><th>H</th><th>S</th><th>L</th><th>B</th><th>PPE</th><th>Place</th>';
    trackRecordHeader.appendChild(headerRow);
}
/**
 * Generates HTML for a mini visual track record (colored squares).
 * @param {string[]} trackRecordArray - The queen's full track record.
 * @param {number} [limit=7] - Max number of recent placements to show.
 * @returns {string} - HTML string for the mini track record display.
 */
/**
 * Generates HTML for a mini visual track record (colored squares/dots).
 * Limits to the most recent entries.
 * @param {string[]} trackRecordArray - The queen's full track record array.
 * @param {number} [limit=7] - Max number of recent placements to show. Adjust card min-height if limit changes.
 * @returns {string} - HTML string for the mini track record display.
 */
function generateVisualTrackRecord(trackRecordArray, limit = 7) {
    const recentPlacements = trackRecordArray.slice(-limit);
    let html = `<div class="mini-track-record-container" title="Recent Track Record (hover item for details)">`;

    const paddingNeeded = Math.max(0, limit - recentPlacements.length);
    for (let i = 0; i < paddingNeeded; i++) {
        // Use a neutral color for upcoming/empty slots
        html += `<span class="mini-tr-item" style="background-color: #ccc;" title="Upcoming"></span>`;
    }

    recentPlacements.forEach((placement, index) => {
        const episodeNum = trackRecordArray.length - recentPlacements.length + index + 1;
        if (placement && placement !== '' && placement !== ' ') {
            // Use existing track-PLACEMENT classes for color and add tooltip
            // Tooltip now includes episode number
            html += `<span class="mini-tr-item track-${placement}" title="Ep ${episodeNum}: ${placement}"></span>`;
        } else {
            // Use the same neutral color for past empty/uninvolved slots
            html += `<span class="mini-tr-item" style="background-color: #ccc;" title="Ep ${episodeNum}: N/A"></span>`;
        }
    });
    html += '</div>';
    return html;
}
/**
 * Runs the main logic for a single episode step (including premiere parts).
 * Determines context, selects challenge, calculates scores, determines placements,
 * handles lipsyncs (premiere or LSFYL), processes outcomes, and sets up the next step.
 * @param {boolean} userInitiated - Whether the step was triggered by user interaction (usually Next button).
 */
// ===============================================
// ===   COMPLETE runNextEpisodeStep Function  ===
// ===============================================
// Incorporates challenge description, dynamic focus, and critiques display.
// Replaces the ENTIRE existing runNextEpisodeStep function.

async function runNextEpisodeStep(userInitiated = false) {
    // --- 1. Initial Setup & Clear State ---
    const stepContextIdentifier = `MODE: ${gameMode} | EP: ${currentEpisode} | ${gameMode==='allstars10'?`GROUP:${allStars10_currentGroup||'N/A'}(${allStars10_groupEpisode}/3)`:`STAGE:${splitPremiereStage||'Normal'}`}`;
    console.log(`%c START runNextEpisodeStep (V10 Lipsync Fix) for: ${stepContextIdentifier}`, 'color: blue; font-weight: bold;');

    // --- Hide UI / Clear State ---
    nextEpisodeButton.disabled = true; nextEpisodeButton.classList.add('hidden'); viewTrackRecordMidButton.disabled = true;
    outcomeText.textContent = ''; outcomeText.classList.add('hidden');
    lipsyncInfo.classList.add('hidden'); rupaulDecision.classList.add('hidden'); rupaulWinnerSelectionUI.classList.add('hidden');
    document.getElementById('lsfyl-winner-announcement')?.classList.add('hidden'); document.getElementById('allstars-elimination-choice')?.classList.add('hidden');
    document.getElementById('challenge-selector-ui')?.classList.add('hidden'); document.getElementById('mqp-distribution-ui')?.classList.add('hidden');
    document.getElementById('merge-announcement-ui')?.classList.add('hidden'); document.getElementById('lalaparuza-ui')?.classList.add('hidden');
    document.getElementById('format-info-box').classList.add('hidden'); document.getElementById('challenge-description')?.classList.add('hidden');
    document.getElementById('rupaul-low-save-selection')?.classList.add('hidden');
    document.getElementById('rupaul-riggory-selection')?.classList.add('hidden');
    document.getElementById('results-display')?.classList.add('hidden');
    try{/* Clear dynamic UIs */ const rg=document.querySelector('#results-display .results-grid'); if(rg)rg.innerHTML='';const crS=document.getElementById('results-critiques-section');if(crS)crS.innerHTML='';document.getElementById('lipsync-contestants').innerHTML='';document.getElementById('lipsync-result-text').textContent='';document.getElementById('winner-choice-options').innerHTML='';document.getElementById('elimination-choice-options').innerHTML='';document.getElementById('mqp-choice-options').innerHTML='';document.getElementById('mqp-donation-log').classList.add('hidden');const lUL=document.querySelector('#mqp-donation-log ul');if(lUL)lUL.innerHTML='';document.getElementById('lalaparuza-round-display').innerHTML='';document.getElementById('low-save-choice-options').innerHTML='';document.getElementById('riggory-choice-options').innerHTML=''; }catch(e){console.warn("Err clear UI:",e);}
    userSelectedChallenge=null;eliminatedQueenThisEpisode=null;bottomQueens=[];bottomQueensAS=[];lipsyncWinner=null;
    episodeResults={win:[],top2:[],high:[],safe:[],low:[],btm:[],immune:[]};ruPaulChosenWinners=[];
    currentChallenge=null;currentDynamicFocus=null;winnerChoiceResolver=null;elimChoiceResolver=null;challengeChoiceResolver=null;
    mqpDistributionResolver=null;lalaparuzaResolver=null;premiereLipsyncParticipants=[];allStars10_mqpDonationQueue=[];
    isNonEliminationChallenge=false;skipChallengeScoring=false;lowSaveResolver=null;preliminaryBottomQueens=[];
    episodeRiggoryActions.clear(); riggoryResolver=null;

    // --- 2. Pre-computation Checks ---
    if(!queens||queens.length===0){console.error("No Q! Reset.");resetToSetup();return;}

    // --- 3. Determine Context ---
    let activeQueensForStep = []; let stepTitle = `Episode ${currentEpisode}`; let currentProcessingContext;
    const originalPremiereStage = splitPremiereStage; // Capture original stage
    const as10Phase=(gameMode==='allstars10')?getAS10Phase(currentEpisode):null;const formatInfoBox=document.getElementById('format-info-box');
    // Context setting logic (no changes needed here)
    if(gameMode==='allstars10'){const gN=allStars10_currentGroup;currentProcessingContext=`AS10_${as10Phase}`;formatInfoBox.classList.remove('hidden');if(as10Phase==='PRE_MERGE'){if(!gN||!allStars10_groups[gN]){console.error(`AS10 Err:Gr ${gN}`);resetToSetup();return}activeQueensForStep=queens.filter(q=>allStars10_groups[gN].includes(q.id)&&q.isActive);stepTitle=`Gr ${gN} Ep ${allStars10_groupEpisode}`;isNonEliminationChallenge=true;formatInfoBox.innerHTML=`Comp: <strong>Gr ${gN}</strong>(Ep ${allStars10_groupEpisode}/3) MQP`}else if(as10Phase==='PRE_LALA'){currentProcessingContext='AS10_PRE_LALA';stepTitle=`Ep ${currentEpisode}:Pre-Merge LaLa!`;activeQueensForStep=queens.filter(q=>allStars10_nonQualifiers_IDs.has(q.id)&&q.isActive);isNonEliminationChallenge=true;skipChallengeScoring=true;formatInfoBox.innerHTML=`<strong>LaLa!</strong> 1 merges`}else if(as10Phase==='MERGE'){stepTitle=`Ep ${currentEpisode}: Merge!`;activeQueensForStep=queens.filter(q=>q.isActive);isNonEliminationChallenge=false;formatInfoBox.innerHTML=`<strong>Merge!</strong> LSFYL`}else if(as10Phase==='FINALE'){currentProcessingContext='AS10_FINALE_LALA';stepTitle=`Finale:Top 6 LaLa!`;activeQueensForStep=queens.filter(q=>q.isActive);isNonEliminationChallenge=true;skipChallengeScoring=true;allStars10_finalLalaparuzaStage=true;formatInfoBox.innerHTML=`<strong>FINALE LaLa!</strong>`}else{console.error(`AS10 Err:Ph ${as10Phase}`);resetToSetup();return}}
    else if(originalPremiereStage==='A_Perf'||originalPremiereStage==='B_Perf'){currentProcessingContext='PREMIERE_GROUP';const grp=originalPremiereStage==='A_Perf'?'A':'B';activeQueensForStep=queens.filter(q=>(originalPremiereStage==='A_Perf'?splitPremiereGroupA_IDs:splitPremiereGroupB_IDs).includes(q.id)&&q.isActive);stepTitle=`Prem Pt ${grp==='A'?1:2}:Gr ${grp}(Ep ${currentEpisode})`;isNonEliminationChallenge=true;formatInfoBox.innerHTML=`Comp: <strong>Gr ${grp}</strong>`;formatInfoBox.classList.remove('hidden');}
    else if(gameMode==='allstars'){currentProcessingContext='ALLSTARS';stepTitle=`Ep ${currentEpisode}(AS)`;activeQueensForStep=queens.filter(q=>q.isActive);isNonEliminationChallenge=false;formatInfoBox.innerHTML=`<strong>AS Rules:</strong> LSFYL`;formatInfoBox.classList.remove('hidden');}
    else{currentProcessingContext='NORMAL';stepTitle=`Ep ${currentEpisode}`;activeQueensForStep=queens.filter(q=>q.isActive);if(premiereFormat==='TalentShowNonElim'&currentEpisode===1){isNonEliminationChallenge=true;formatInfoBox.innerHTML=`<strong>Talent Show!</strong>(Non-Elim)`;formatInfoBox.classList.remove('hidden');}else{formatInfoBox.classList.add('hidden');isNonEliminationChallenge=false;}}
    currentStepContext = currentProcessingContext; console.log(`[Debug] StepContext: ${currentStepContext}`);

    // --- 4. Update Core UI ---
    episodeTitle.textContent=stepTitle;const totalActive=queens.filter(q=>q.isActive).length;remainingQueensCount.textContent=totalActive;
    updateActiveQueensDisplay((['PREMIERE_GROUP','AS10_PRE_MERGE'].includes(currentProcessingContext)) ? activeQueensForStep : null, gameMode==='allstars10');
    if(activeQueensForStep.length<=0&&!isFinale&&!['AS10_PRE_LALA','AS10_FINALE_LALA'].includes(currentProcessingContext)){console.error(`No active Q! Reset.`);resetToSetup();return;}

    // --- 5. Finale Check (Std Modes) ---
    if(gameMode!=='allstars10'){let fTC=(finaleFormat==='LSFTC'?4:3);if(gameMode==='allstars')fTC=4;if(initialCastSize<=fTC)fTC=Math.max(2,initialCastSize);const chkFin=(currentProcessingContext!=='PREMIERE_GROUP'&&!isFinale);if(chkFin&&(totalActive<=fTC||currentEpisode>maxEpisodesCeiling)){console.log(`FINALE! Std.`);isFinale=true;runFinale(queens.filter(q=>q.isActive));return;}if(isFinale&&gameMode!=='allstars10'){console.log(`Std Finale triggered.`);return;}}

    // --- 6. Immunity Reset (Std Modes) ---
    if(gameMode!=='allstars10'&currentEpisode>1&currentProcessingContext!=='PREMIERE_GROUP'){let immR=false;if(currentEpisode===2&&premiereFormat==='TalentShowNonElim')immR=true;if(immR)queens.forEach(q=>{if(q.isImmune){q.isImmune=false;console.log(`Immun reset ${q.name}`)}});}

    // --- 7. Select Challenge ---
    let challengeWasSelected=false;if(!skipChallengeScoring){try{console.log("Select challenge...");let allowManual=isManualChallengeSelectionEnabled&&['simulation','allstars10'].includes(gameMode);if(['PREMIERE_GROUP','ALLSTARS','AS10_PRE_MERGE'].includes(currentProcessingContext)){allowManual=false;console.log(`>Man disabled:${currentProcessingContext}`)}if(allowManual){currentChallenge=await promptChallengeSelection(activeQueensForStep);}else{currentChallenge=getChallengeForEpisode(currentEpisode,activeQueensForStep,originalPremiereStage);console.log(`>Auto/Seq Sel:${currentChallenge?.name||'ERR'}`)}if(!currentChallenge)throw new Error("No challenge!");
        if(currentChallenge.primaryStat==="DYNAMIC"){ // Dynamic Focus Logic Start
             if(currentChallenge.possibleFocuses?.length > 0){
                 currentDynamicFocus = currentChallenge.possibleFocuses[Math.floor(Math.random()*currentChallenge.possibleFocuses.length)];
                 console.log(`Dynamic Focus:${currentDynamicFocus}`);
             } else {
                 console.error(`${currentChallenge.name} DYNAMIC focus options missing!`);
                 const cS=["charisma","lipsync","comedy","dance"]; // Fallback focus types
                 currentDynamicFocus = cS[Math.floor(Math.random()*cS.length)];
                 console.warn(`Fallback DFocus:${currentDynamicFocus}`);
             }
         } else { // Non-Dynamic
             currentDynamicFocus=null;
         } // Dynamic Focus Logic End
         updateChallengeAnnouncement(currentChallenge,currentDynamicFocus);console.log(`>Chal Confirmed:${currentChallenge.name}${currentDynamicFocus?`(${currentDynamicFocus})`:''}`);
         /*Log*/const logId=`${currentEpisode}-${allStars10_currentGroup||originalPremiereStage||'Normal'}`;if(!seasonLog.some(l=>`${l.episode}-${l.as10_group||l.stage||'Normal'}`===logId))seasonLog.push({episode:currentEpisode,as10_group:allStars10_currentGroup,as10_group_ep:allStars10_groupEpisode,stage:originalPremiereStage,challenge:currentChallenge.name,type:currentChallenge.type,focus:currentDynamicFocus});
         challengeWasSelected=true;}catch(error){console.error("Chal select err:",error);resetToSetup();return;}}else{challengeAnnouncement.textContent=`Event:${stepTitle}`;document.getElementById('challenge-description')?.classList.add('hidden');challengeWasSelected=false;}

    // --- 7.5 RUPAUL RIGGORY INTERVENTION ---
    if(gameMode==='rupaul'&&challengeWasSelected&&!skipChallengeScoring&&['NORMAL','AS10_MERGE'].includes(currentProcessingContext)){console.log("[Ru]Check Riggory...");const rigQ=activeQueensForStep.filter(q=>!q.isImmune);if(rigQ.length>0){await promptRiggoryChoice(rigQ,currentChallenge.name);/*PAUSE*/}else{console.log(">No riggable Qs.");}}

    // --- 8. Scoring & Placements / LaLa ---
    if(['AS10_PRE_LALA','AS10_FINALE_LALA'].includes(currentProcessingContext)){/*LaLa Logic*/try{const type=(currentProcessingContext==='AS10_FINALE_LALA')?'FINALE':'PRE_MERGE';const wId=await runLaLaPaRuZa(activeQueensForStep,type);displayLaLaPaRuZaResults(type);if(type==='FINALE')isFinale=true;else allStars10_preMergeLalaWinnerID=wId;}catch(error){console.error(`LaLa err:${error}`)} }
    else if(!skipChallengeScoring){/*Standard Scoring/Placements*/try{console.log("Calc scores(rig)...");calculateChallengeScores(activeQueensForStep,currentChallenge,currentDynamicFocus);
        if(gameMode==='rupaul'&&['NORMAL','AS10_MERGE'].includes(currentProcessingContext)){console.log("[Ru]Prompt win...");const elW=activeQueensForStep.filter(q=>!q.isImmune);if(elW.length>0){await promptRuPaulWinnerChoice(elW);/*PAUSE*/determinePlacements(activeQueensForStep,currentProcessingContext);if(preliminaryBottomQueens.length===3){await promptRuPaulLowSaveChoice(preliminaryBottomQueens);/*PAUSE*/}else{preliminaryBottomQueens=[]}}else{console.warn("No elig Ru.");}}
        else{determinePlacements(activeQueensForStep,currentProcessingContext);}
        console.log("Display results post-place...");displayEpisodeResults();}catch(error){console.error(`Score/Place Err:${error}`);}}else{console.log("Skip score/place");}

// --- 9. Lipsyncs / Decisions / MQP ---
    // *** CORRECTED PREMIERE GROUP HANDLING ***
    console.log(` > Entering Lipsync/Decision block check (Context: ${currentProcessingContext}, OrigStage: ${originalPremiereStage})`);
    try {
        const top2 = episodeResults.top2 || [];
        bottomQueens = episodeResults.btm || [];
        bottomQueensAS = episodeResults.btm || [];

        if (currentProcessingContext === 'PREMIERE_GROUP') { // Handle BOTH A_Perf and B_Perf here for LSFYW
             console.log(`Premiere Group ${originalPremiereStage === 'A_Perf' ? 'A' : 'B'} LSFYW...`);
             document.getElementById('lipsync-title').textContent = 'Lipsync For The WIN!';
             if (top2.length >= 2) {
                 lipsyncInfo.classList.remove('hidden');
                 prepareLipsync(top2);
                 simulateLipsyncOutcome(top2, false, true, false); // isPremiereLSFYW = true
                 if (premiereLipsyncParticipants.length === 2) {
                      // Important: Assign WIN/TOP2 but ONLY within episodeResults.
                      // processElimination will handle actual TR update based on final placements.
                      episodeResults.win = [premiereLipsyncParticipants[0]];
                      episodeResults.top2 = [premiereLipsyncParticipants[1]];
                      displayEpisodeResults(); // Re-display results to show LSFYW outcome
                      console.log(` > Premiere LSFYW Winner: ${premiereLipsyncParticipants[0].name}`);
                 } else { console.error("LSFYW simulation failed to return 2 participants."); }
             } else if (top2.length === 1) { // Unopposed Winner in Premiere Group
                 episodeResults.win = [top2[0]];
                 episodeResults.top2 = []; // Clear top2 if only one winner
                 lipsyncInfo.classList.remove('hidden'); // Still show info box
                 prepareLipsync(top2); // Show the single winner card maybe? Or just text.
                 document.getElementById('lipsync-contestants').innerHTML = ''; // Clear contestant cards if only 1
                 lipsyncResultText.textContent = `Winner (Unopposed): ${episodeResults.win[0].name}!`;
                 displayEpisodeResults(); // Re-display results
                 console.log(` > Premiere Unopposed Winner: ${episodeResults.win[0].name}`);
             } else {
                  console.warn("Not enough Top 2 queens for Premiere LSFYW.");
                  // Maybe hide lipsync box if no lipsync?
                  lipsyncInfo.classList.add('hidden');
             }
             eliminatedQueenThisEpisode = null; // Explicitly no elimination in premiere
        }

            if (currentProcessingContext === 'AS10_PRE_MERGE') {
                console.log("AS10 PreMerge LSFYL..."); document.getElementById('lipsync-title').textContent = 'LSFYLegacy!'; lipsyncInfo.classList.remove('hidden');
                if (top2.length >= 2) { prepareLipsync(top2); simulateLipsyncOutcome(top2, false, false, true); if (lipsyncWinner) { episodeResults.win=[lipsyncWinner]; episodeResults.top2=top2.filter(q=>q.id!==lipsyncWinner.id);displayEpisodeResults();document.getElementById('lsfyl-winner-name').textContent=lipsyncWinner.name;document.getElementById('lsfyl-winner-announcement').classList.remove('hidden');const bottomGroupLS=bottomQueens;/*Assign for clarity*/if(bottomGroupLS.length > 0) { const gk = d => d.as10_group; allStars10_mqpDonationQueue = bottomGroupLS.map(d => ({ donor: d, recipients: queens.filter(q => q.as10_group === gk(d) && q.id !== d.id && q.isActive) })); console.log(`MQP Q:${allStars10_mqpDonationQueue.length} for Gr ${gk(bottomGroupLS[0])}`); await new Promise(r => { mqpDistributionResolver = r; handleAS10_MQP_Distribution(); }); console.log(`MQP Done.`); } else { console.log("No MQP Btm"); } } else { console.error("AS10 LSFYL fail!") } } else { console.warn("No Top2"); } eliminatedQueenThisEpisode = null;
            }
            else if (currentProcessingContext === 'ALLSTARS') {
                console.log("Std AS LSFYL..."); document.getElementById('lipsync-title').textContent = 'LSFYLegacy!'; lipsyncInfo.classList.remove('hidden');
                if (top2.length >= 2) { prepareLipsync(top2); simulateLipsyncOutcome(top2, false, false, false); if (lipsyncWinner) { document.getElementById('lsfyl-winner-name').textContent=lipsyncWinner.name;document.getElementById('lsfyl-winner-announcement').classList.remove('hidden');if(bottomQueensAS.length > 0) { console.log(`Prompt AS Elim`); await promptAllStarsEliminationChoice(lipsyncWinner, bottomQueensAS); } else { eliminatedQueenThisEpisode=null;console.log("No AS Btm"); } } else { console.error("Std AS LSFYL fail"); eliminatedQueenThisEpisode=null; } } else { console.warn("No Top2"); lipsyncWinner = null; eliminatedQueenThisEpisode = null; lipsyncInfo.classList.add('hidden'); }
            }
            else if (currentProcessingContext === 'PREMIERE_GROUP' /* && originalPremiereStage === 'B_Perf' implied */) {
                 console.log("Prem Grp B LSFYW..."); document.getElementById('lipsync-title').textContent = 'LSFYW!';
                 if (top2.length >= 2) { lipsyncInfo.classList.remove('hidden'); prepareLipsync(top2); simulateLipsyncOutcome(top2, false, true, false); /* Checks premiereParticipants */ if (premiereLipsyncParticipants.length === 2) { episodeResults.win=[premiereLipsyncParticipants[0]]; episodeResults.top2=[premiereLipsyncParticipants[1]]; displayEpisodeResults(); } else { console.error("LSFYW fail"); } } else if (top2.length === 1) { /* Unopposed winner logic */ episodeResults.win=[top2[0]]; episodeResults.top2=[]; lipsyncInfo.classList.remove('hidden'); lipsyncResultText.textContent=`Winner:${episodeResults.win[0].name}`; displayEpisodeResults(); } else { console.warn("No Top2 for LSFYW"); } eliminatedQueenThisEpisode = null;
            }
            else if (['NORMAL', 'AS10_MERGE'].includes(currentProcessingContext)) {
                const isASMerge = currentProcessingContext === 'AS10_MERGE'; console.log(`${isASMerge?'ASMerge':'Norm'} LSFYL...`); document.getElementById('lipsync-title').textContent = 'LSFYLife!';
                if (bottomQueens.length >= 2 && !isNonEliminationChallenge) {
                    lipsyncInfo.classList.remove('hidden'); prepareLipsync(bottomQueens); let dShantay = false; if (currentProcessingContext === 'NORMAL') { dShantay = checkForNonEliminationTwist(bottomQueens); if(dShantay) console.log("DShantay!"); }
                    if (!dShantay) {
                        if (gameMode === 'simulation' || gameMode === 'allstars10') { console.log(`${isASMerge?'ASMrg Sim':'Sim'} LSFYL outcome...`); simulateLipsyncOutcome(bottomQueens, false, false, false); }
                        else if (gameMode === 'rupaul') { console.log("Setup Ru LSFYL buttons..."); setupRuPaulLipsyncButtons(bottomQueens); viewTrackRecordMidButton.disabled=false; console.log("Wait Ru LSFYL..."); return; /*PAUSE*/ }
                    } else { console.log("DShantay handled."); }
                } else { /* Log skipped LSFYL */ if(isNonEliminationChallenge)console.log(`LSFYL Skip:NonElim`); else if(!bottomQueens || bottomQueens.length < 2)console.log(`LSFYL Skip:Only ${bottomQueens?.length||0} BTM`); eliminatedQueenThisEpisode=null; lipsyncInfo.classList.add('hidden'); }
            } // End Lipsync Context Check
        } catch(error){ console.error(`Error Lipsync/Decision Block: ${error}`); }

    // --- 10. Process Elimination & State Update ---
    try{console.log(`Process elim/adv...`);processElimination(currentProcessingContext, activeQueensForStep, isNonEliminationChallenge);console.log(`Post: Ep ${currentEpisode}, Stage ${splitPremiereStage}, AS10 Gr ${allStars10_currentGroup} Ep ${allStars10_groupEpisode}`);}catch(error){console.error(`Err elim/adv:${error}`);}

    // --- 11. Display Final Outcome & UI Updates ---
    try{if(!(currentProcessingContext==='PREMIERE_GROUP'&&originalPremiereStage==='A_Perf')) displayEliminationOutcome(); updateTrackRecordTable();updateActiveQueensDisplay((gameMode==='allstars10'&&getAS10Phase(currentEpisode)==='PRE_MERGE')?queens.filter(q=>allStars10_groups[allStars10_currentGroup]?.includes(q.id)&&q.isActive):null, gameMode==='allstars10');}catch(error){console.error(`Err outcome/UI:${error}`);}

    // --- 12. Enable Next Controls ---
    try { const finaleIsActive=isFinale||allStars10_finalLalaparuzaStage;if(!finaleIsActive){nextEpisodeButton.disabled=false;viewTrackRecordMidButton.disabled=false;nextEpisodeButton.classList.remove('hidden');const nxtEp=currentEpisode;const nxtStage=splitPremiereStage;const nxtPhase=gameMode==='allstars10'?getAS10Phase(nxtEp):null;const nxtAct=queens.filter(q=>q.isActive).length;const nxtGNu=allStars10_groupEpisode;const nxtGNa=allStars10_currentGroup;let btnTxt="Next";
        if(gameMode==='allstars10'){if(nxtPhase==='PRE_MERGE')btnTxt=`Start ${nxtGNa} Ep ${nxtGNu}`;else if(nxtPhase==='PRE_LALA')btnTxt="Start Pre-Merge LaLa";else if(nxtPhase==='MERGE')btnTxt=`Start Merge Ep ${nxtEp}`;else if(allStars10_finalLalaparuzaStage)btnTxt="Start Final LaLa";}
        else if(premiereFormat === 'Split'){if(originalPremiereStage === 'A_Perf'){btnTxt="Start Group B Premiere";}else{/* If coming FROM B_Perf or Normal Split */ let fTCS=(finaleFormat==='LSFTC'?4:3);if(initialCastSize<=fTCS)fTCS=Math.max(2,initialCastSize); const nextIsF=(nxtStage===null&&(nxtAct<=fTCS||nxtEp>maxEpisodesCeiling)); if(nextIsF)btnTxt="Proceed to Finale"; else btnTxt=`Next Episode (${nxtEp})`;}}
        else{let fTCS=(finaleFormat==='LSFTC'?4:3);if(initialCastSize<=fTCS)fTCS=Math.max(2,initialCastSize);const nextIsF=(nxtStage===null&&(nxtAct<=fTCS||nxtEp>maxEpisodesCeiling));if(nextIsF)btnTxt="Proceed to Finale";else btnTxt=`Next Episode (${nxtEp})`;}
        nextEpisodeButton.textContent=btnTxt;}else{console.log("Enable final btns");finishSeasonButton.classList.remove('hidden');viewTrackRecordMidButton.disabled=false;viewTrackRecordMidButton.textContent="View Final TR";viewTrackRecordMidButton.onclick=handleViewFinalTrackRecord;}}
    catch(error){console.error(`Err controls:${error}`);}

    // --- Cleanup ---
    ruPaulChosenWinners = []; episodeRiggoryActions.clear();

    console.log(`%c[Debug] === END runNextEpisodeStep V10 for: ${stepContextIdentifier} ===`, 'color: blue; font-weight: bold;');
} // === END runNextEpisodeStep V10 (Corrected Lipsync Skip) === //// === END runNextEpisodeStep V10 (Corrected Lipsync Skip) === // // === END runNextEpisodeStep V9 (Split Premiere Button Fix) === //// === END runNextEpisodeStep V8 (Sequence Selection) === // // === END runNextEpisodeStep V7 (Riggory) === //
 // === END of runNextEpisodeStep === // === END of runNextEpisodeStep ===
// Replace this ENTIRE function
// Replace this ENTIRE function
// Modified to include Visual Track Record and Warning Icon in HTML
// Replace this ENTIRE function in script.js
/**
 * Generates HTML for the track record summary EMOJIS on queen choice cards.
 * @param {Object} queen - The queen object.
 * @param {boolean} [isLipsyncCard=false] - Indicates if the card is for a lipsync (affects bottom count check).
 * @returns {string} - The HTML string for the summary.
 */
function generateCardStatsSummaryHTML(queen, isLipsyncCard = false, isMQPContext = false, isCurrentBottom = false) {
    // console.log(`Generating card stats V1.3 NO WARNING for ${queen?.name}`);
    if (!queen || typeof queen.stats === 'undefined') {
        console.warn("generateCardStatsSummaryHTML V1.3: Queen data invalid", queen);
        return '<div class="card-stats-summary enhanced"><span class="card-stat-line error">Data Error</span></div>';
    }

    // Calculate stats
    const wins = queen.wins || 0;
    const highsAndTop2 = queen.highs || 0;
    const historicalBottomPlacements = (queen.trackRecord || []).filter(p => p === 'BTM' || p === 'ELIM').length;

    // --- Assemble Stat Text Lines ---
    let statsLines = [];
    if (wins > 0) statsLines.push(`<span class="card-stat-line win"><span class="stat-icon">👑</span>${wins}x WIN</span>`);
    if (highsAndTop2 > 0) statsLines.push(`<span class="card-stat-line high"><span class="stat-icon">⭐</span>${highsAndTop2}x HIGH/TOP2</span>`);
    if (historicalBottomPlacements > 0) statsLines.push(`<span class="card-stat-line btm"><span class="stat-icon">🔻</span>${historicalBottomPlacements}x BTM/ELIM</span>`);
    if (statsLines.length === 0) statsLines.push(`<span class="card-stat-line safe"><span class="stat-icon">➖</span>No Wins/Highs/Btms yet</span>`);
    if (isMQPContext && queen.mqp !== undefined) statsLines.push(`<span class="card-stat-line mqp"><span class="stat-icon">🪙</span>${queen.mqp}x MQP</span>`);

    // --- Generate Summary DIV HTML ---
    const summaryDivHTML = `
        <div class="card-stats-summary enhanced">
            ${statsLines.join('\n')}
        </div>
    `;

    // --- Return ONLY the summary div string ---
    return summaryDivHTML;

} // === END generateCardStatsSummaryHTML (V1.3 - No Warning) === // // === END generateCardStatsSummaryHTML (V1.1 FIX) === //
// Replace this ENTIRE function in script.js
function promptRuPaulLowSaveChoice(preliminaryBottom3) {
    return new Promise(resolve => {
        console.log("%c[RuPaul Mode Debug] Prompting for LOW SAVE choice...", "color: #fd7e14; font-weight: bold;"); // Orange info color

        // Reset relevant global state if needed (should be clear before call usually)
        lowSaveResolver = null;

        // Get UI Elements and Validate
        const uiContainer = document.getElementById('rupaul-low-save-selection');
        const optionsContainer = document.getElementById('low-save-choice-options');
        const confirmButton = document.getElementById('confirm-low-save-button');

        if (!uiContainer || !optionsContainer || !confirmButton) {
            console.error("Ru LOW SAVE Choice UI Error: One or more critical elements missing!");
             console.error(" Status - UI Container:", !!uiContainer, "Options:", !!optionsContainer, "Confirm Btn:", !!confirmButton);
            resolve(); // Resolve silently, let normal BTM happen? Or reject? Let's resolve.
            return;
        }

        // Validate Input Queens
        if (!Array.isArray(preliminaryBottom3) || preliminaryBottom3.length !== 3) {
            console.error("Ru LOW SAVE Choice Error: Invalid input. Expected exactly 3 queens. Got:", preliminaryBottom3?.length);
             uiContainer.classList.add('hidden'); // Hide UI if input invalid
            resolve(); // Resolve to proceed without save
            return;
        }
        console.log(`  > Candidates for Save (Prelim Bottom): ${preliminaryBottom3.map(q=>q.name).join(', ')}`);

        // Prepare UI
        lowSaveResolver = resolve;
        uiContainer.classList.remove('hidden');
        optionsContainer.innerHTML = '';
        confirmButton.disabled = true; // Must select one

        // --- Generate Enhanced Cards for the Bottom 3 ---
        preliminaryBottom3.forEach(queen => {
            const card = document.createElement('div');
            card.className = 'choice-button-card enhanced low-save-choice'; // Base class + specific context
            card.dataset.queenId = queen.id;

            // Score might be useful context here, although LOW placement is likely
            const score = (queen.episodeScore !== undefined ? queen.episodeScore.toFixed(2) : 'N/A');

            // *** CALL THE NEW SUMMARY FUNCTION -> GET STRING ***
            const summaryDivHTML = generateCardStatsSummaryHTML(queen, true, false, true); // V1.3+

            // *** ASSEMBLE HTML USING ONLY SUMMARY STRING ***
            card.innerHTML = `
                 <div class="card-main-info">
                    <img src="${queen.image}" alt="${queen.name}">
                    <div class="name-score-group">
                          <span class="queen-name">SAVE:<br>${queen.name}</span>
                          <span class="queen-score">Score: ${score}</span>
                     </div>
                 </div>
                 ${summaryDivHTML} 
            `;
            // *** END OF NEW ASSEMBLY ***

            // --- Click Handler for single Selection ---
            card.onclick = () => {
                 // Only one can be selected
                 optionsContainer.querySelectorAll('.choice-button-card.selected').forEach(c => c.classList.remove('selected'));
                 card.classList.add('selected');
                 confirmButton.disabled = false; // Enable confirm button
            };
            optionsContainer.appendChild(card);
        }); // End forEach queen in Bottom 3

        console.log("  LOW SAVE choice cards displayed. Waiting for 1 selection...");

    }); // End Promise
} // === END promptRuPaulLowSaveChoice === //
function promptRuPaulWinnerChoice(eligibleQueens) {
    return new Promise(resolve => {
        console.log("%c[RuPaul Mode Debug] Prompting for winner choice (Top 3, Multi-Select)...", "color: #007bff; font-weight: bold;"); // Blue info color

        // Reset Ru's global choices for this prompt
        ruPaulChosenWinner = null; // Not needed if assigning directly
        ruPaulChosenWinners = []; // USE THIS ARRAY now
        ruPaulWantsDoubleWin = false; // Redundant if based on selection count

        // Get UI Elements and Validate
        const uiContainer = document.getElementById('rupaul-winner-selection');
        const optionsContainer = document.getElementById('winner-choice-options');
        const confirmButton = document.getElementById('confirm-winner-button'); // Check correct ID
        const calculatedWinnerP = document.getElementById('calculated-winner-name'); // Check correct ID
        const doubleWinCheckbox = document.getElementById('rupaul-double-win-checkbox'); // Find the checkbox

        if (!uiContainer || !optionsContainer || !confirmButton || !calculatedWinnerP || !doubleWinCheckbox) {
            console.error("Ru Winner Choice UI Error: One or more critical elements missing!");
            // Attempt to log details
             console.error(" Status - UI Container:", !!uiContainer, "Options:", !!optionsContainer, "Confirm Btn:", !!confirmButton, "Calc Winner P:", !!calculatedWinnerP, "Checkbox:", !!doubleWinCheckbox);
            resolve(); // Resolve silently to avoid blocking, log error
            return;
        }

        // Prepare UI States
        winnerChoiceResolver = resolve;
        uiContainer.classList.remove('hidden');
        optionsContainer.innerHTML = '';
        confirmButton.disabled = true; // Disable confirm initially
        doubleWinCheckbox.checked = false; // Uncheck the toggle/checkbox
        doubleWinCheckbox.parentElement.style.display = 'none'; // Hide the explicit double win toggle - selection determines it now
        calculatedWinnerP.textContent = 'Calculating...'; // Placeholder

        // Ensure eligibleQueens is an array and not empty
        if (!Array.isArray(eligibleQueens) || eligibleQueens.length === 0) {
            console.warn("No eligible queens provided for RuPaul winner choice.");
            calculatedWinnerP.textContent = 'N/A (No eligible queens)';
            // Consider hiding the entire UI? or just show N/A? Keep UI, show N/A.
            // uiContainer.classList.add('hidden');
            resolve(); // Resolve as no choice to make
            return;
        }

        // Sort queens by score (descending) and get Top 3
        eligibleQueens.sort((a, b) => (b.episodeScore || -Infinity) - (a.episodeScore || -Infinity));
        const top3Queens = eligibleQueens.slice(0, 3); // Get exactly the top 3
        const calculatedTopPerformer = top3Queens[0];

        // Display calculated top performer
        calculatedWinnerP.textContent = `${calculatedTopPerformer.name} (${calculatedTopPerformer.episodeScore !== undefined ? calculatedTopPerformer.episodeScore.toFixed(2) : 'N/A'})`;
        console.log(`  > Top 3 Contenders: ${top3Queens.map(q => `${q.name}(${(q.episodeScore||0).toFixed(2)})`).join(', ')}`);

        // --- Generate Enhanced Cards for Top 3 ---
        top3Queens.forEach(queen => {
            const card = document.createElement('div');
            card.className = 'choice-button-card enhanced winner-choice'; // Base class + specific context
            card.dataset.queenId = queen.id;

            const score = (queen.episodeScore !== undefined ? queen.episodeScore.toFixed(2) : 'N/A');

            // *** CALL THE NEW SUMMARY FUNCTION -> GET STRING ***
            const summaryDivHTML = generateCardStatsSummaryHTML(queen, true, false, true); // V1.3+

            // *** ASSEMBLE HTML USING ONLY SUMMARY STRING ***
            card.innerHTML = `
                 <div class="card-main-info">
                    <img src="${queen.image}" alt="${queen.name}">
                    <div class="name-score-group">
                          <span class="queen-name">WIN:<br>${queen.name}</span>
                          <span class="queen-score">Score: ${score}</span>
                     </div>
                 </div>
                 ${summaryDivHTML} 
            `;
            // *** END OF NEW ASSEMBLY ***
            // --- Click Handler for 1 or 2 Selections ---
            card.onclick = () => {
                 const currentlySelected = optionsContainer.querySelectorAll('.choice-button-card.selected');
                 // Check if this card is already selected
                 if (card.classList.contains('selected')) {
                     card.classList.remove('selected'); // Deselect if clicked again
                 } else {
                     // If trying to select a third card, do nothing (or maybe give feedback?)
                     if (currentlySelected.length >= 2) {
                          // Optional: visual feedback like a quick shake or message
                          console.log(" Max 2 winners can be selected.");
                          alert("You can only select up to two winners!"); // Simple feedback
                          return;
                     } else {
                         card.classList.add('selected'); // Select the card
                     }
                 }

                 // Enable/Disable Confirm Button based on whether 1 or 2 are selected
                 const finalSelectedCount = optionsContainer.querySelectorAll('.choice-button-card.selected').length;
                 confirmButton.disabled = (finalSelectedCount === 0 || finalSelectedCount > 2);
            };
            optionsContainer.appendChild(card);
        }); // End forEach queen in Top 3

        console.log("  Winner choice cards displayed. Waiting for 1 or 2 selections...");
    }); // End Promise
} // === END promptRuPaulWinnerChoice V3 === //
function handleRuPaulLowSaveConfirmation() {
    const selectedCards = document.querySelectorAll('#low-save-choice-options .choice-button-card.selected');

    if (selectedCards.length !== 1) {
        alert("Please select exactly one queen to save (give LOW placement).");
        return;
    }

    const savedQueenId = selectedCards[0].dataset.queenId;
    const savedQueen = preliminaryBottomQueens.find(q => q.id === savedQueenId); // Find from the temp bottom list

    if (!savedQueen) {
        console.error("LOW SAVE Confirm Error: Could not find selected queen object from ID:", savedQueenId);
        alert("Error confirming save. Please try again.");
        return; // Don't resolve if error finding queen
    }

    console.log(`[RuPaul Mode Debug] RuPaul Confirmed SAFE (LOW): ${savedQueen.name}`);

    // --- Update the episodeResults object directly ---
    // 1. Remove the saved queen from the BTM array
    const initialBtmLength = episodeResults.btm.length;
    episodeResults.btm = episodeResults.btm.filter(q => q.id !== savedQueenId);
    if (episodeResults.btm.length === initialBtmLength) {
        console.warn(`LOW SAVE Warning: Saved queen ${savedQueen.name} was not found in episodeResults.btm. Results may be inconsistent.`);
    }

    // 2. Add the saved queen to the LOW array
    if (!episodeResults.low) episodeResults.low = []; // Ensure LOW array exists
    episodeResults.low.push(savedQueen);
    console.log(`  > ${savedQueen.name} moved from BTM to LOW. New BTM count: ${episodeResults.btm.length}, LOW count: ${episodeResults.low.length}`);

    // Reset the preliminary list
    preliminaryBottomQueens = [];

    // --- Hide UI & Resolve Promise ---
    document.getElementById('rupaul-low-save-selection').classList.add('hidden');
    document.getElementById('confirm-low-save-button').disabled = true;

    if (lowSaveResolver) {
        lowSaveResolver();
        lowSaveResolver = null;
        console.log(" > Resolved LOW SAVE choice promise.");
    } else {
        console.error("LOW SAVE choice resolver was null!");
    }

    // runNextEpisodeStep will now continue and prepare the lipsync using the *modified* episodeResults.btm
} // === END handleRuPaulLowSaveConfirmation === //
// Replace this ENTIRE function in script.js
 // === End setupRuPaulLipsyncButtons (Complete V_Enhanced) === // === End setupRuPaulLipsyncButtons (Complete) ===
 function promptAllStarsEliminationChoice(lsfylWinner, bottomQueensAS) {
    console.log(`[AS Elim Choice V3] Prompting ${lsfylWinner?.name} to choose from ${bottomQueensAS?.map(q=>q.name).join('/')}`);
    return new Promise((resolve, reject) => { // Return promise
        // Get UI Elements & Check
        const choiceUI = document.getElementById('allstars-elimination-choice');
        const optionsContainer = document.getElementById('elimination-choice-options');
        const chooserNameSpan = document.getElementById('allstars-chooser-name');
        const confirmButton = document.getElementById('confirm-allstars-elim-button');

        if (!choiceUI || !optionsContainer || !chooserNameSpan || !confirmButton || !lsfylWinner || !bottomQueensAS || bottomQueensAS.length === 0) {
             console.error("promptAllStarsEliminationChoice V3 Error: Invalid input or missing UI elements.");
             reject(new Error("All Stars Elimination UI or data invalid."));
             return;
        }

        // Store the resolver globally
        elimChoiceResolver = resolve;

        // Update UI text
        chooserNameSpan.textContent = lsfylWinner.name;
        optionsContainer.innerHTML = ''; // Clear previous cards

        // Create enhanced choice cards for bottom queens
        bottomQueensAS.forEach(queen => {
            const card = document.createElement('div');
            card.className = 'choice-button-card enhanced elim-choice'; // Enhanced + specific class
            card.dataset.queenId = queen.id; // Store ID to identify choice

            // *** CALL THE NEW SUMMARY FUNCTION -> GET STRING ***
            const summaryDivHTML = generateCardStatsSummaryHTML(queen, true, false, true); // V1.3+

            // *** ASSEMBLE HTML USING ONLY SUMMARY STRING ***
            card.innerHTML = `
                 <div class="card-main-info">
                    <img src="${queen.image}" alt="${queen.name}">
                    <div class="name-score-group">
                          <span class="queen-name">SAVE:<br>${queen.name}</span>
                          <span class="queen-score">Score: ${score}</span>
                     </div>
                 </div>
                 ${summaryDivHTML} 
            `;
            // *** END OF NEW ASSEMBLY ***

            card.onclick = () => {
                document.querySelectorAll('#elimination-choice-options .choice-button-card').forEach(c => c.classList.remove('selected'));
                 card.classList.add('selected');
                 confirmButton.disabled = false; // Enable confirm button
            };
            optionsContainer.appendChild(card);
        }); // End forEach

        // Setup confirm button (handler assigned in bindEventListeners)
        confirmButton.disabled = true; // Disabled until a choice is made
        choiceUI.classList.remove('hidden');
        console.log("[AS Elim Choice V3] UI displayed. Waiting for selection...");

    }); // End Promise
} // === End promptAllStarsEliminationChoice V3 ===
 // === End promptAllStarsEliminationChoice V2 (Complete) ===

function handleAllStarsEliminationConfirmation() {
    
    const optionsContainer = document.getElementById('elimination-choice-options');
    const confirmButton = document.getElementById('confirm-allstars-elim-button');
    const selectedQueenCard = optionsContainer.querySelector('.choice-button-card.selected');

    if (!selectedQueenCard) {
        alert("Please choose a queen to eliminate!");
        return;
    }

    const eliminatedQueenId = selectedQueenCard.dataset.queenId;
    const chosenQueen = bottomQueensAS.find(q => q.id === eliminatedQueenId); // Find from stored bottom list

    if (!chosenQueen) {
        console.error("Could not find selected queen object for elimination:", eliminatedQueenId);
        alert("Error confirming elimination choice.");
        return;
    }

    
    eliminatedQueenThisEpisode = [chosenQueen]; // Set the global variable for processElimination

    // Clean up UI
    document.getElementById('allstars-elimination-choice').classList.add('hidden');
    confirmButton.disabled = true; // Disable after use
    optionsContainer.innerHTML = ''; // Clear cards

    // Resolve the promise to continue runNextEpisodeStep
    if (elimChoiceResolver) {
        elimChoiceResolver();
        elimChoiceResolver = null;
        
    } else {
         console.error("Elimination choice resolver was null!");
    }
     // The flow now continues within runNextEpisodeStep after the 'await promptAllStarsEliminationChoice' line.
     // processElimination will be called next.
}
 function promptChallengeSelection(participatingQueens) {
    return new Promise((resolve, reject) => {
        
        const selectorUI = document.getElementById('challenge-selector-ui');
        const optionsList = document.getElementById('challenge-options-list');
        const confirmButton = document.getElementById('confirm-challenge-button');
        const participantsCountSpan = document.getElementById('challenge-participants-count');
        const participantsListDiv = document.getElementById('challenge-participants-list');
        const errorMessageP = document.getElementById('challenge-error-message');

        errorMessageP.textContent = ''; // Clear previous error
        optionsList.innerHTML = ''; // Clear previous options
        userSelectedChallenge = null; // Reset internal selection state

        if (!participatingQueens || participatingQueens.length === 0) {
            console.error("Cannot select challenge, no participating queens provided.");
            selectorUI.classList.add('hidden'); // Hide UI if error
            return reject(new Error("No participating queens for challenge selection."));
        }

        // --- Filter Available Challenges (Same logic as automatic selection) ---
        const challengesRunThisSeason = seasonLog.map(log => log.challenge);
        

        let availableChallenges = CHALLENGES.filter(challenge => {
            // Cond 1: Not run yet
            if (challengesRunThisSeason.includes(challenge.name)) return false;
            // Cond 2: Min queen counts
            const queenCount = participatingQueens.length;
            if (challenge.name === "Snatch Game" && queenCount < 5) return false;
            if (challenge.name === "Makeover Challenge" && queenCount < 4) return false;
             // Add more filters if needed
            return true;
        });
        

        // Handle case where no filtered challenges are left
        if (availableChallenges.length === 0) {
             console.warn("No suitable UNUSED challenges found for manual selection!");
             errorMessageP.textContent = "Warning: All unique challenges may have been run. Showing re-usable options.";
              // Filter the FULL list again, just for queen count (allow reuse)
              availableChallenges = CHALLENGES.filter(challenge => {
                   const queenCount = participatingQueens.length;
                   if (challenge.name === "Snatch Game" && queenCount < 5) return false;
                   if (challenge.name === "Makeover Challenge" && queenCount < 4) return false;
                   return true;
              });
             if (availableChallenges.length === 0) {
                  // Absolute fallback
                  console.error("FATAL: No challenges meet constraints even allowing reuse!");
                  alert("Error: No suitable challenges found!");
                  selectorUI.classList.add('hidden');
                  return reject(new Error("No challenges meet constraints"));
             }
        }

        // --- Populate UI ---
        participantsCountSpan.textContent = participatingQueens.length;
        participantsListDiv.textContent = participatingQueens.map(q => q.name.split(" ")[0]).join(', '); // Show first names

         // Sort available challenges alphabetically for display
         availableChallenges.sort((a,b) => a.name.localeCompare(b.name));

        availableChallenges.forEach(challenge => {
            const button = document.createElement('button');
            button.textContent = challenge.name;
            button.title = `Type: ${challenge.type}, Primary Stat: ${challenge.primaryStat}`; // Tooltip
            button.className = 'challenge-option-button';
            button.dataset.challengeName = challenge.name; // Store name maybe useful later

            button.onclick = () => {
                 // Handle selection visually
                 document.querySelectorAll('.challenge-option-button').forEach(btn => btn.classList.remove('selected'));
                 button.classList.add('selected');
                 // Store the selected challenge *object*
                 userSelectedChallenge = challenge; // Store the actual challenge object
                 errorMessageP.textContent = ''; // Clear error on selection
                 
            };
            optionsList.appendChild(button);
        });


        // --- Store Resolver & Show UI ---
        challengeChoiceResolver = resolve; // Store the resolver function
        confirmButton.disabled = false; // Ensure confirm button is enabled
        selectorUI.classList.remove('hidden'); // Show the whole selector UI

        // Promise waits here until handleChallengeConfirmation resolves it...
    });
}
// --- Helper Functions for Episode Logic ---

// This function is now PRIMARILY for automatic selection (e.g., premiere groups)
// Or as a fallback if the manual selector fails.
function selectEpisodeChallenge(activeQueensForStep) {
    const queenCount = activeQueensForStep.length;
    const episodeNum = currentEpisode; // Use the global currentEpisode
    

    // 1. Get Context & History
    const seasonPhase = getSeasonPhase(episodeNum, initialCastSize);
    const challengesRunThisSeason = seasonLog.map(log => log.challenge); // Names run so far
    const lastChallengeLog = seasonLog[seasonLog.length - 1];
    const secondLastChallengeLog = seasonLog[seasonLog.length - 2];
    const recentTypes = [lastChallengeLog?.type, secondLastChallengeLog?.type].filter(t => t); // Types of last 1-2 challenges run

    

    // 2. Initial Mandatory Filtering (All Available Challenges)
    let mandatoryFiltered = CHALLENGES.filter(challenge => {
        // Filter 1: Not already run this season by name
        if (challengesRunThisSeason.includes(challenge.name)) return false;
        // Filter 2: Minimum queen counts
        if (challenge.name === "Snatch Game" && queenCount < 5) return false;
        if (challenge.name === "Makeover Challenge" && queenCount < 4) return false;
        // Add more specific count filters if needed (e.g., Roast needing maybe 6?)
        // if (challenge.name === "Roast Challenge" && queenCount < 6) return false;
        return true;
    });

    
    if (mandatoryFiltered.length === 0) {
        console.warn("No challenges meet mandatory filters! Relaxing 'already run' constraint...");
        // Fallback 1: Allow name reuse, just filter by queen count
        mandatoryFiltered = CHALLENGES.filter(challenge => {
            if (challenge.name === "Snatch Game" && queenCount < 5) return false;
            if (challenge.name === "Makeover Challenge" && queenCount < 4) return false;
            return true;
        });
        if (mandatoryFiltered.length === 0) {
             console.error("FATAL: No challenges meet even minimum queen counts! Returning first challenge.");
             return CHALLENGES[0]; // Absolute fallback
        }
    }

    // 3. Phase-Based Filtering & Prioritization
    let phaseFiltered = [];
    switch (seasonPhase) {
        case 'EARLY':
            phaseFiltered = mandatoryFiltered.filter(c =>
                !["Snatch Game", "Ball", "Makeover", "Roast"].includes(c.type) && // Exclude iconic mid-game challenges
                !["The Ball Challenge", "Roast Challenge", "Makeover Challenge"].includes(c.name) // Specific name check too
            );
            // Prioritize performance/design early on if possible
            // (Selection within this pool is random, but the pool is restricted)
            
            break;
        case 'MID':
            phaseFiltered = mandatoryFiltered; // Mid-game can potentially have anything
            // No specific filtering *out*, but selection below might prioritize staples
            
            break;
        case 'LATE':
            phaseFiltered = mandatoryFiltered.filter(c =>
                c.name !== "Snatch Game" || challengesRunThisSeason.includes("Snatch Game") // Allow Snatch Game only if already run (unlikely late)
            );
            // Prioritize Rumix, Final Ball/Design, Branding etc. late
            
            break;
    }
    // If phase filtering somehow removes all options, revert to the mandatory filtered list
    if (phaseFiltered.length === 0) {
        console.warn(`Phase filtering (${seasonPhase}) removed all options. Reverting to mandatory filtered list.`);
        phaseFiltered = mandatoryFiltered;
    }


    // 4. Type Variety Filtering
    let typeVarietyFiltered = phaseFiltered;
    if (recentTypes.length > 0 && phaseFiltered.length > 1) { // Only filter if >1 option left
        typeVarietyFiltered = phaseFiltered.filter(c => !recentTypes.includes(c.type));
        
        // If type filtering removes all options, revert to the phase-filtered list
        if (typeVarietyFiltered.length === 0) {
            console.warn("Type variety filter removed all options. Allowing recent type repetition.");
            typeVarietyFiltered = phaseFiltered; // Fallback to phase list
        }
    } else {
         
    }


    // 5. Final Selection
    let chosenChallenge = null;

    // Prioritize Mid-Game Staples if in MID phase and available in the final filtered list
    if (seasonPhase === 'MID') {
        const midGameStaples = ["Snatch Game", "The Ball Challenge", "Rusical", "Roast Challenge", "Makeover Challenge"];
        const availableStaples = typeVarietyFiltered.filter(c => midGameStaples.includes(c.name));
        if (availableStaples.length > 0) {
            chosenChallenge = availableStaples[Math.floor(Math.random() * availableStaples.length)];
            
        }
    }

    // If no staple selected or not mid-game, choose randomly from the most filtered list
    if (!chosenChallenge) {
        if (typeVarietyFiltered.length > 0) {
            chosenChallenge = typeVarietyFiltered[Math.floor(Math.random() * typeVarietyFiltered.length)];
            
        } else {
             // Should have been caught by fallbacks above, but final safety net
             console.error("Error in filtering logic, no challenges left! Selecting first available mandatory challenge.");
             chosenChallenge = mandatoryFiltered[0] || CHALLENGES[0];
        }
    }

    // Log choice for debugging
    
    return chosenChallenge;
}
/**
 * Determines the current phase of the season based on episode number and initial cast size.
 * @param {number} currentEpisode - The current episode number (starting from 1).
 * @param {number} initialCastSize - The number of queens at the start of the season.
 * @returns {('EARLY'|'MID'|'LATE')} - The current phase of the season.
 */
function getSeasonPhase(currentEpisode, initialCastSize) {
    // Define rough phase boundaries (can be tuned)
    // Example: 14 queens -> Early (1-4), Mid (5-9), Late (10+)
    const earlyGameEnd = Math.max(3, Math.floor(initialCastSize * 0.3)); // Ends ~30% mark, min Ep 3
    const midGameEnd = Math.max(earlyGameEnd + 3, Math.floor(initialCastSize * 0.7)); // Ends ~70% mark, min 3 eps after early

    if (currentEpisode <= earlyGameEnd) {
        return 'EARLY';
    } else if (currentEpisode <= midGameEnd) {
        return 'MID';
    } else {
        return 'LATE';
    }
}
// Replace this ENTIRE function in script.js
/**
 * Calculates challenge scores with enhanced variability, harsher penalties for
 * sustained success or coasting, and stronger riggory/storyline intervention.
 * Aims to create more realistic track records with ups and downs, even for top queens.
 * @param {Array<Object>} activeQueensForStep - Queens competing in this step.
 * @param {Object} challenge - The current challenge object.
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calculateChallengeScores(activeQueensForStep, challenge, dynamicFocus = null) {
    const functionVersion = "V12 [Multi-Riggory Read]";
    console.log(`--- Running ${functionVersion} for Ep ${currentEpisode}, Chal: ${challenge.name}${dynamicFocus ? ' Focus:'+dynamicFocus : ''} ---`);
    const actualPrimaryStat = dynamicFocus || challenge.primaryStat;

    if (actualPrimaryStat === "DYNAMIC" || !actualPrimaryStat) { console.error("Score Error: Invalid primary stat!", challenge, dynamicFocus); activeQueensForStep.forEach(q => q.episodeScore = Math.random() * 30); return; }

    activeQueensForStep.forEach(queen => {
        if (queen.isImmune) { queen.episodeScore = -999; console.log(`  ${queen.name}: IMMUNE`); return; }

        const stats = queen.stats; const DEFAULT_STAT = 7; let tempPenaltyScore = 0; let statCount = 0;
        const breakdown = { primary: 0, secondary: 0, tertiary: 0, baseRandom: 0, runway: 0, comeback: 0, fatigue: 0, riggory: 0, finalScore: 0, primaryStatUsed: actualPrimaryStat };

        // --- Stat Penalty Calc --- (No change here)
        const calculateStatPenalty=(n, w)=>(16-Math.max(1,Math.min((stats[n]||DEFAULT_STAT),15)))*w;
        const pPen=calculateStatPenalty(actualPrimaryStat,1.0); tempPenaltyScore+=pPen; breakdown.primary=parseFloat(pPen.toFixed(2));statCount++;
        let secPen=0; challenge.secondaryStats?.forEach(sN=>{secPen+=calculateStatPenalty(sN,0.35);statCount++;}); tempPenaltyScore+=secPen; breakdown.secondary=parseFloat(secPen.toFixed(2));
        let terPen=0; challenge.tertiaryStats?.forEach(sN=>{terPen+=calculateStatPenalty(sN,0.15);statCount++;}); tempPenaltyScore+=terPen; breakdown.tertiary=parseFloat(terPen.toFixed(2));
        if(statCount===0)tempPenaltyScore+=(16-DEFAULT_STAT);

        // --- Base Randomness & Score Inversion --- (No change)
        const rBPen=randomNumber(15, 35); tempPenaltyScore+=rBPen; breakdown.baseRandom=rBPen;
        let currentScore = parseFloat((100 - tempPenaltyScore).toFixed(2));
        breakdown.challengeBase = currentScore;

        // --- Runway, Comeback, Fatigue --- (No change)
        breakdown.runwayBonus=0; if(challenge.type!=="Runway"&&challenge.type!=="Ball"){const rS=stats.runway||DEFAULT_STAT;breakdown.runwayBonus=parseFloat(((rS-7.5)*0.15*(1+(Math.random()-0.5)*0.8)).toFixed(2));currentScore+=breakdown.runwayBonus;}
        breakdown.comebackBonus=0; const rBtm=(queen.trackRecord||[]).slice(-3).filter(p=>p==="LOW"||p==="BTM").length; if(rBtm>=2&currentScore>62){breakdown.comebackBonus=parseFloat((2.0+(riggory*0.2)+(Math.random()*1.5)).toFixed(2)); currentScore+=breakdown.comebackBonus;}
        breakdown.fatiguePenalty=0; const rTop=(queen.trackRecord||[]).slice(-3).filter(p=>p==="WIN"||p==="HIGH"||p==="TOP2").length; if(rTop>=3&currentScore>68){breakdown.fatiguePenalty=parseFloat((2.5+(riggory*0.15)+(Math.random()*2.0)).toFixed(2)); currentScore-=breakdown.fatiguePenalty;}

        const scoreBeforeRiggory = currentScore;
        breakdown.scoreBeforeRiggory = parseFloat(scoreBeforeRiggory.toFixed(2));

        // --- ** RUPAUL RIGGORY APPLICATION (Reads Map) ** ---
        breakdown.riggory = 0;
        // Check if this queen ID exists as a key in the riggory Map
        if (gameMode === 'rupaul' && episodeRiggoryActions.has(queen.id)) {
             const action = episodeRiggoryActions.get(queen.id); // Get the action ('FAVOR' or 'PENALTY')

             const baseMagnitude = 5.0; const riggoryMagnitude = riggory * 0.5; const randomMagnitude = Math.random() * 3.0;
             const totalMagnitude = baseMagnitude + riggoryMagnitude + randomMagnitude;

             if (action === 'FAVOR') {
                  breakdown.riggory = parseFloat(totalMagnitude.toFixed(2));
                  currentScore += breakdown.riggory;
                  console.log(`%c  RIGGORY BOOST Applied to ${queen.name}: ${scoreBeforeRiggory.toFixed(2)} + ${breakdown.riggory} = ${currentScore.toFixed(2)}`, "color: green; font-weight: bold;");
             } else if (action === 'PENALTY') {
                 breakdown.riggory = parseFloat((-totalMagnitude).toFixed(2));
                  currentScore += breakdown.riggory;
                  console.log(`%c  RIGGORY PENALTY Applied to ${queen.name}: ${scoreBeforeRiggory.toFixed(2)} ${breakdown.riggory} = ${currentScore.toFixed(2)}`, "color: red; font-weight: bold;");
             }
        }
        // --- End Riggory Application ---

         // --- Final Score Assignment ---
         currentScore = Math.max(5, Math.min(currentScore, 95)); // Clamp
         queen.episodeScore = parseFloat(currentScore.toFixed(2));
         breakdown.finalScore = queen.episodeScore;

         // Optional Log: console.log(`    ${queen.name} Breakdown V12: ${JSON.stringify(breakdown)}`);
    });
    console.log(`--- ${functionVersion} finished ---`);
} // === End calculateChallengeScores V12 === //
/**
 * Determines placements (WIN, HIGH, etc.) for a list of competing queens based on their scores.
 * For PREMIERE_GROUP context, it identifies potential Top 2, High, and Safe queens.
 * Final WIN/TOP2 assignment for premieres happens *after* the lipsync in runNextEpisodeStep.
 * For NORMAL context, assigns standard placements including double wins/max 1 LOW.
 * @param {Array<Object>} activeQueensForStep - Queens competing in this step.
 * @param {string} context - 'PREMIERE_GROUP' or 'NORMAL'.
 */
// =========================================================
// ===      COMPLETE determinePlacements Function        ===
// =========================================================
// Accepts ruChoiceWinner and ruWantsDoubleWin parameters.
// Overrides calculated winner/double win in RuPaul mode.
// Replaces the ENTIRE old determinePlacements function. V9.2 Rupaul Fix

function determinePlacements(
    activeQueensForStep,
    context,
    ruChoiceWinner_UNUSED = null, // Parameter for RuPaul's chosen winner object - Not used now, uses global
    ruWantsDoubleWin_UNUSED = false // Parameter for RuPaul's double win intention - Not used now, uses global
) {
    const functionVersion = "V10.1 [RuPaul Winner+High Fix]";
    console.log(`--- Running ${functionVersion} for Ep ${currentEpisode}, Context: ${context} ---`);

    // Reset episode results object and preliminary bottom
    episodeResults = { win: [], top2: [], high: [], safe: [], low: [], btm: [], immune: [] };
    preliminaryBottomQueens = []; // Clear potential BTM queens for this round

    // Handle immune queens
    const immuneQueens = activeQueensForStep.filter(q => q.isImmune);
    immuneQueens.forEach(queen => episodeResults.immune.push(queen));
    let competingQueens = activeQueensForStep.filter(q => !q.isImmune); // Use let, as it might be filtered
    const count = competingQueens.length;

    if (count === 0) {
        console.log("No competing (non-immune) queens for placement.");
        return; // Nothing more to do
    }

    // --- 1. Sort Queens by Score ---
    // Create a sorted copy to preserve the original order if needed,
    // but main logic below will use the filtered 'competingQueens' which might change
    const sortedCompetingQueens = [...competingQueens].sort((a, b) => (b.episodeScore || -Infinity) - (a.episodeScore || -Infinity));
    console.log(`  Sorted Competing (Score): ${sortedCompetingQueens.map(q => `${q.name}(${(q.episodeScore !== undefined ? q.episodeScore.toFixed(2) : 'N/A')})`).join(', ')}`);

    // --- 2. Placement Logic ---
    let numWin = 0, numHigh = 0, numSafe = 0, numLow = 0, numBtm = 0, numTop2 = 0;
    let requiresLowSaveCheck = false; // Flag if RuPaul LOW save interaction is needed

    // --- 2.A SPLIT PREMIERE LOGIC ---
    if (context === 'PREMIERE_GROUP') {
        console.log(`  Context: ${context}`);
        // Use the sorted list for premiere placements
        const sortedForPremiere = sortedCompetingQueens;
        if (count <= 1) { numTop2 = count; } else if (count === 2) { numTop2 = 2; } else if (count === 3) { numTop2 = 2; numHigh = 1; } else { numTop2 = 2; numHigh = 1; numSafe = Math.max(0, count - 3); }
        let assignedIDsPremiere = new Set();
        sortedForPremiere.slice(0, numTop2).forEach(q => { episodeResults.top2.push(q); assignedIDsPremiere.add(q.id); console.log(`  PREMIERE TOP 2 Assigned: ${q.name}`); });
        sortedForPremiere.slice(numTop2, numTop2 + numHigh).forEach(q => { episodeResults.high.push(q); assignedIDsPremiere.add(q.id); console.log(`  PREMIERE HIGH Assigned: ${q.name}`); });
        sortedForPremiere.forEach(q => { if (!assignedIDsPremiere.has(q.id)) { episodeResults.safe.push(q); assignedIDsPremiere.add(q.id); console.log(`  PREMIERE SAFE Assigned: ${q.name}`); } });

    // --- 2.B STANDARD ALL STARS LOGIC (Non-AS10 LSFYL) ---
    } else if (context === 'ALLSTARS') {
        console.log(`  Context: ${context}`);
        // Use the sorted list for AS placements
        const sortedForAllStars = sortedCompetingQueens;
        numTop2 = Math.min(count, 2); // Ensure max 2 Top 2
        numHigh = Math.min(Math.max(0, count - numTop2), 1); // Max 1 High
        numBtm = (count > 6 && Math.random() < (0.4 + riggory * 0.03)) ? 3 : 2;
        numBtm = Math.min(numBtm, Math.max(0, count - numTop2 - numHigh)); // Adjust bottoms based on available
        numLow = (count - numTop2 - numHigh - numBtm) >= 2 ? 1 : 0;
        numSafe = Math.max(0, count - (numTop2 + numHigh + numLow + numBtm));

        let assignedIDsAS = new Set();
        let assignableQueensAS = [...sortedForAllStars]; // Use sorted list

        assignableQueensAS.slice(0, numTop2).forEach(q => { episodeResults.top2.push(q); assignedIDsAS.add(q.id); console.log(`  AS LSFYL TOP 2 Assigned: ${q.name}`); }); assignableQueensAS.splice(0, numTop2);
        assignableQueensAS.slice(0, numHigh).forEach(q => { episodeResults.high.push(q); assignedIDsAS.add(q.id); console.log(`  AS LSFYL HIGH Assigned: ${q.name}`); }); assignableQueensAS.splice(0, numHigh);

        // Assign BTM from remaining lowest
        assignableQueensAS.sort((a, b) => (a.episodeScore || Infinity) - (b.episodeScore || Infinity)); // Sort ascending
        let bottomQueensTemp = assignableQueensAS.slice(0, numBtm);
        bottomQueensTemp.forEach(q => { episodeResults.btm.push(q); assignedIDsAS.add(q.id); console.log(`  AS LSFYL BTM Assigned: ${q.name}`); });
        assignableQueensAS.splice(0, numBtm); // Remove assigned bottoms

        // Assign LOW from remaining lowest (if any)
        let lowQueensTemp = assignableQueensAS.slice(0, numLow);
        lowQueensTemp.forEach(q => { episodeResults.low.push(q); assignedIDsAS.add(q.id); console.log(`  AS LSFYL LOW Assigned: ${q.name}`); });
        assignableQueensAS.splice(0, numLow);

        // Assign SAFE (Everyone left)
        assignableQueensAS.forEach(q => { if (!assignedIDsAS.has(q.id)) { episodeResults.safe.push(q); assignedIDsAS.add(q.id); console.log(`  AS LSFYL SAFE Assigned: ${q.name}`); } });


    // --- 2.C ALL STARS 10 PRE-MERGE LOGIC ---
    } else if (context === 'AS10_PRE_MERGE') {
        // Use the sorted list for AS10 Pre-Merge
        const sortedForAS10Pre = sortedCompetingQueens;
        console.log(`  Context: ${context}`);
        numTop2 = Math.min(count, 2);
        numBtm = Math.min(Math.max(0, count - numTop2), 4);
        numSafe = Math.max(0, count - numTop2 - numBtm);
        numWin = 0; numHigh = 0; numLow = 0;

        console.log(`  AS10 Placement Counts Target: TOP2=${numTop2}, SAFE=${numSafe}, BTM=${numBtm}`);
        let assignedIDsAS10 = new Set();
        let assignableQueensAS10 = [...sortedForAS10Pre];

        assignableQueensAS10.slice(0, numTop2).forEach(q => { episodeResults.top2.push(q); assignedIDsAS10.add(q.id); console.log(`    AS10 TOP 2 Assigned: ${q.name}`); }); assignableQueensAS10.splice(0, numTop2);

        // Assign BTM from remaining lowest
        assignableQueensAS10.sort((a, b) => (a.episodeScore || Infinity) - (b.episodeScore || Infinity)); // Sort ascending
        let bottomQueensTempAS10 = assignableQueensAS10.slice(0, numBtm);
        bottomQueensTempAS10.forEach(q => { episodeResults.btm.push(q); assignedIDsAS10.add(q.id); console.log(`    AS10 BTM Assigned: ${q.name}`); });
        assignableQueensAS10.splice(0, numBtm);

        // Assign SAFE (everyone else remaining)
        assignableQueensAS10.forEach(q => { if (!assignedIDsAS10.has(q.id)) { episodeResults.safe.push(q); assignedIDsAS10.add(q.id); console.log(`    AS10 SAFE Assigned: ${q.name}`); } });

        const assignedCount = episodeResults.top2.length + episodeResults.safe.length + episodeResults.btm.length; if (assignedCount !== count) { console.error(` AS10 Placement Mismatch! Assigned ${assignedCount} / ${count}.`); }

    // --- 2.D NORMAL / AS10 MERGE LOGIC ---
    } else { // context === 'NORMAL' or 'AS10_MERGE' or Fallback
        console.log(`  Context: ${context} (Processing Normal/Merge)`);
        let demotedSim = []; // Keep track of simulation demotions

        // === A. Assign WINNERS ===
        if (gameMode === 'rupaul' && ruPaulChosenWinners.length > 0) {
            console.log(`%c RUPAUL MODE: Assigning Winner(s) from Ru's choice: ${ruPaulChosenWinners.map(q => q.name).join(' & ')}`, "color: purple; font-weight: bold;");
            episodeResults.win = [...ruPaulChosenWinners];
            numWin = ruPaulChosenWinners.length;
            lastEpWasDoubleWin = (numWin === 2);
            // **FIX: Filter the competingQueens array IMMEDIATELY after Ru choice assignment**
            const winnerIDs = new Set(ruPaulChosenWinners.map(q => q.id));
            competingQueens = competingQueens.filter(q => !winnerIDs.has(q.id));
            console.log(`  > Filtered winners from competing pool. Remaining: ${competingQueens.length}`);

        } else { // Simulation Mode winner assignment
            console.log("  Simulation Mode: Calculating winner(s)...");
            let targetNumWinSim = 1; const checkLastEpDouble = lastEpWasDoubleWin; lastEpWasDoubleWin = false;
            if (count >= 2 && !checkLastEpDouble) { const score1=sortedCompetingQueens[0]?.episodeScore??-Infinity; const score2=sortedCompetingQueens[1]?.episodeScore??-Infinity; const scoreThreshold=1.5+(riggory*0.1); const scoresAreClose=Math.abs(score1-score2)<=scoreThreshold; const randomChance=0.30+(riggory*0.025); if(scoresAreClose&&Math.random()<randomChance){console.log("  Potential Sim Double Win triggered!");targetNumWinSim=2;lastEpWasDoubleWin=true;}}
            const MAX_WINS_CAP_SIM=4; let assignedWinCountSim=0; let eligibleForWinSim=[...sortedCompetingQueens];
            console.log(`  Sim: Targeting ${targetNumWinSim}, Cap ${MAX_WINS_CAP_SIM}. Pool size: ${eligibleForWinSim.length}`);
            while(assignedWinCountSim < targetNumWinSim && eligibleForWinSim.length > 0){ const potentialWinner=eligibleForWinSim[0]; if((potentialWinner.wins||0)<MAX_WINS_CAP_SIM){ episodeResults.win.push(potentialWinner); eligibleForWinSim.shift(); assignedWinCountSim++; console.log(`    > Sim WIN: ${potentialWinner.name}`); } else { console.warn(`%c SIM WIN CAP: ${potentialWinner.name}. Demoting.`, 'color: red;'); demotedSim.push(eligibleForWinSim.shift()); } }
            numWin = assignedWinCountSim;
            if (targetNumWinSim === 2 && numWin < 2){ console.log("  > Sim Double Win failed (cap). Flag reset."); lastEpWasDoubleWin = false; }
             // **FIX: Correctly filter winners and add demoted for simulation path**
             const simWinnerIDs = new Set(episodeResults.win.map(q => q.id));
             // Start from the ORIGINAL competing pool and filter out winners
             competingQueens = activeQueensForStep.filter(q => !q.isImmune && !simWinnerIDs.has(q.id));
             // Add back demoted queens if any
             competingQueens.unshift(...demotedSim);
             console.log(`  > Sim path: Filtered winners, added demoted. Remaining competing: ${competingQueens.length}`);
        } // End Winner Assignment (Ru or Sim)


        // === B. Assign HIGH/SAFE/LOW/BTM from remaining pool ===
        let assignedIDs = new Set(episodeResults.win.map(q => q.id)); // IDs already assigned (only winners at this point)
        // Use the already filtered 'competingQueens' array which excludes winners but includes demoted
        let remainingPool = [...competingQueens];
        remainingPool.sort((a, b) => (b.episodeScore || -Infinity) - (a.episodeScore || -Infinity)); // Sort remaining DESCENDING for HIGH

        // --- Determine remaining placement counts ---
        const remainingCompetingCount = remainingPool.length; // Count queens left after winners removed/demoted added

        if (remainingCompetingCount <= 0) { numHigh=0; numLow=0; numBtm=0; numSafe=0; }
        else if (remainingCompetingCount === 1) { numHigh=0; numLow=0; numBtm = 1; numSafe=0; }
        else if (remainingCompetingCount === 2) { numHigh=0; numLow = 0; numBtm = 2; numSafe=0; }
        else if (remainingCompetingCount === 3) { numHigh=1; numLow = 0; numBtm = 2; numSafe=0; }
        else if (remainingCompetingCount === 4) { numHigh=2; numLow = 0; numBtm = 2; numSafe=0; }
        else if (remainingCompetingCount === 5) { numHigh=2; numLow = 1; numBtm = 2; numSafe=0; }
        else { numHigh=2; numLow = 1; numBtm = 2; numSafe=0; } // Default for 6+

        // ** RUPAUL LOW SAVE PREPARATION Check**
        requiresLowSaveCheck = false; // Reset check flag
        // Only check if Ru mode AND expecting exactly one LOW placement AND have enough remaining for BTM3 choice
        if (gameMode === 'rupaul' && numLow === 1 && remainingCompetingCount >= 3) {
             requiresLowSaveCheck = true;
             numBtm = 3; // Target 3 for preliminary identification
             numLow = 0;  // Ru decides the single LOW
             console.log("%c RUPAUL LOW SAVE: Identified need for save. Target BTM=3, LOW=0.", "color: #fd7e14;");
        }

        numSafe = Math.max(0, remainingCompetingCount - (numHigh + numLow + numBtm)); // Final Safe count

        console.log(`  NORMAL/MERGE Final Counts Target (Post-Win): HIGH=${numHigh}, SAFE=${numSafe}, LOW=${numLow}, BTM=${numBtm} from ${remainingCompetingCount} remaining`);

        // --- Assign Placements from the remaining pool ---

        // Assign HIGH (from top of sorted remaining pool)
        remainingPool.slice(0, numHigh).forEach(q => {
            episodeResults.high.push(q); assignedIDs.add(q.id); console.log(`    > High Assigned: ${q.name}`);
        });
        remainingPool.splice(0, numHigh); // Remove assigned HIGH

        // Sort remaining by ASCENDING score for LOW/BTM
        remainingPool.sort((a, b) => (a.episodeScore || Infinity) - (b.episodeScore || Infinity));

        // Assign BOTTOM
        let btmAssignedCount = 0;
        let queensForBtm = remainingPool.slice(0, numBtm); // Get the lowest scoring from START of ASC list
        queensForBtm.forEach(queen => {
            episodeResults.btm.push(queen);
            assignedIDs.add(queen.id);
            console.log(`    > Btm Assigned: ${queen.name}`);
            if (requiresLowSaveCheck) { preliminaryBottomQueens.push(queen); } // Store the preliminary bottoms
            btmAssignedCount++;
        });
        remainingPool.splice(0, btmAssignedCount); // Remove assigned BTM from START

        // Assign LOW (Only if not RuPaul Low Save Check required)
        let lowAssignedCount = 0;
        if (!requiresLowSaveCheck) {
            let queensForLow = remainingPool.slice(0, numLow); // Get next lowest from START
            queensForLow.forEach(queen => {
                episodeResults.low.push(queen); assignedIDs.add(queen.id); console.log(`    > Low Assigned: ${queen.name}`); lowAssignedCount++;
            });
            remainingPool.splice(0, lowAssignedCount); // Remove assigned LOW from START
        }

        // Assign SAFE (all remaining in the pool)
        remainingPool.forEach(q => { if (!assignedIDs.has(q.id)) { episodeResults.safe.push(q); assignedIDs.add(q.id); console.log(`    > Safe Assigned: ${q.name}`); }});

        // Log preliminary bottoms if Ru interaction needed
        if (requiresLowSaveCheck) {
            preliminaryBottomQueens.sort((a,b) => (a.episodeScore || Infinity) - (b.episodeScore || Infinity)); // Ensure sorted by score
            console.log(`%c RUPAUL LOW SAVE: Preliminary Bottom 3 identified: ${preliminaryBottomQueens.map(q=>q.name).join(', ')}. Awaiting Ru decision...`, "color: #fd7e14;");
        }

    } // End NORMAL / AS10_MERGE context


    // --- 3. FINAL VERIFICATION ---
    const allAssignedIDs = new Set([
        ...episodeResults.win.map(q => q.id), ...episodeResults.top2.map(q => q.id),
        ...episodeResults.high.map(q => q.id), ...episodeResults.safe.map(q => q.id),
        ...episodeResults.low.map(q => q.id), ...episodeResults.btm.map(q => q.id),
    ]);
    const totalCompetingOriginal = activeQueensForStep.filter(q => !q.isImmune).length; // Original non-immune count
    const totalAssignedCount = allAssignedIDs.size;

    if (totalAssignedCount !== totalCompetingOriginal) {
        console.error(`%c Placement assignment error V10.1! Assigned ${totalAssignedCount} non-immune queens out of ${totalCompetingOriginal}. Context: ${context}.`, 'color: red; font-weight: bold;');
        console.log(" Final Results Obj:", episodeResults);
        console.log(" Original Competing Queens:", activeQueensForStep.filter(q => !q.isImmune).map(q=>q.name));
        // Log which competing queens weren't assigned
        activeQueensForStep.filter(q => !q.isImmune).forEach(q => { if (!allAssignedIDs.has(q.id)) { console.error(`  > Unassigned Competing Queen: ${q.name}`); } });
        // Recovery attempt
        activeQueensForStep.filter(q => !q.isImmune).forEach(q => { if (!allAssignedIDs.has(q.id)) { console.warn(`   Recovery: Placing unassigned ${q.name} into SAFE.`); if(!Array.isArray(episodeResults.safe)) episodeResults.safe = []; episodeResults.safe.push(q); allAssignedIDs.add(q.id); } });
    } else {
        console.log(`  Placement assignment verified successfully for ${totalAssignedCount} competing queens.`);
    }

    console.log(`--- ${functionVersion} finished ---`);
} // === End determinePlacements V10.1 (FIX) === // // === End determinePlacements V10 === // // End determinePlacements V9.2 (Complete) // End determinePlacements V9.1 // End determinePlacements V9
function assignAS10PreMergePlacements(queens, counts, context) {
    const assignedIDs = new Set(episodeResults.immune.map(q => q.id)); // Start with immune
    // Assign TOP 2 based on scores (they go to LSFYL)
    for (let i = 0; i < counts.numTop2 && i < queens.length; i++) {
         if (!assignedIDs.has(queens[i].id)) { episodeResults.top2.push(queens[i]); assignedIDs.add(queens[i].id); console.log(`   AS10 -> TOP2 (LSFYL): ${queens[i].name}`); }
    }
    // Assign BOTTOM (everyone else)
    queens.forEach(queen => {
        if (!assignedIDs.has(queen.id)) { episodeResults.btm.push(queen); assignedIDs.add(queen.id); console.log(`   AS10 -> BTM (MQP): ${queen.name}`); }
    });
}
 // End determinePlacements
// =======================================================
// ===      COMPLETE displayEpisodeResults Function    ===
// =======================================================
// Displays both the placement grid (mini cards) and the detailed critiques.
// Replaces the ENTIRE old function. Version V3 (Final Integration).

function displayEpisodeResults() {
    console.log("[DisplayResults V3 - COMPLETE] Attempting to display enhanced episode results...");
    const resultsContainer = document.getElementById('results-display');
    const resultsGrid = resultsContainer?.querySelector('.results-grid');
    const critiquesSection = document.getElementById('results-critiques-section'); // Get the new critiques div

    // --- Critical Element Checks ---
    if (!resultsContainer || !resultsGrid || !critiquesSection) {
        console.error("DisplayResults V3 Error: Missing critical UI elements! Container:", !!resultsContainer, "Grid:", !!resultsGrid, "Critiques:", !!critiquesSection);
        if (resultsContainer) { // Display error if possible
             resultsContainer.innerHTML = `<p style="color: red; font-weight: bold; padding: 20px;">DEVELOPER ERROR: UI elements for results/critiques missing. Check HTML structure (results-grid, results-critiques-section) and JS.</p>`;
             resultsContainer.classList.remove('hidden');
        }
        return; // Stop if basic structure isn't there
    } else {
        console.log("[DisplayResults V3] Found UI elements. Clearing previous content.");
    }

    // --- Clear Previous Content ---
    resultsGrid.innerHTML = '';
    critiquesSection.innerHTML = ''; // Clear previous critiques

    // --- Check if there are any results AND challenge info to display ---
    let hasResults = false;
    const allPlacements = Object.values(episodeResults).flat(); // Get all queens with placements
    if (allPlacements.length > 0 && currentChallenge) { // Crucial: Check if currentChallenge is set
        hasResults = true;
    }

    // --- Show/Hide Main Container ---
    resultsContainer.classList.toggle('hidden', !hasResults);
    if (!hasResults) {
        console.log("[DisplayResults V3] No results or challenge info available to display.");
        return;
    } else {
         console.log("[DisplayResults V3] Results found, populating grid and critiques.");
         resultsContainer.classList.remove('hidden'); // Explicitly ensure it's shown
    }

    // --- Populate Results Grid (Mini Cards) ---
    console.log("[DisplayResults V3] Populating results grid...");
    const orderedCategoriesGrid = ['win', 'top2', 'high', 'safe', 'low', 'btm', 'immune'];
    orderedCategoriesGrid.forEach(category => {
        const queensInCategory = episodeResults[category];
        if (queensInCategory && queensInCategory.length > 0) {

            // Create the column container for this category
            const categoryColumn = document.createElement('div');
            categoryColumn.className = `result-category-column ${category}`;

            // Create and append the title
            const title = document.createElement('h4');
            let titleText = category.toUpperCase();
            // Simplified Titles (Includes count)
            if (category === 'win') titleText = `🏆 WIN`;
            else if (category === 'top2') titleText = '⭐ TOP 2';
            else if (category === 'high') titleText = '🌟 HIGH';
            else if (category === 'safe') titleText = '➖ SAFE';
            else if (category === 'low') titleText = '🔻 LOW';
            else if (category === 'btm') titleText = `🆘 BTM`;
            else if (category === 'immune') titleText = '🛡️ IMMUNE';
            title.innerHTML = `${titleText} (${queensInCategory.length})`; // Add count to title
            categoryColumn.appendChild(title);

            // Create a container for the mini-cards within this column
            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'result-cards-container-column';

            // Add queen mini-cards to the card container
            queensInCategory.forEach(queen => {
                 const card = document.createElement('div');
                 card.className = `result-card mini track-${category} ${queen.isImmune ? 'immune' : ''}`; // Add 'mini' class
                 const scoreValue = (queen.episodeScore !== undefined && !isNaN(queen.episodeScore) && queen.episodeScore !== -999) ? queen.episodeScore.toFixed(2) : 'N/A';
                 card.title = `${queen.name} - Score: ${scoreValue}`; // Tooltip includes name and score

                 const imgHTML = `<img src="${queen.image}" alt="${queen.name}" class="result-card-img mini">`;
                 const nameHTML = `<span class="result-card-name mini">${queen.name.split(" ")[0]}</span>`; // Use first name for mini card
                 const immuneBadgeHTML = queen.isImmune ? '<div class="immunity-badge small-badge" title="Immune">🛡️</div>' : '';

                 card.innerHTML = `${imgHTML}${nameHTML}${immuneBadgeHTML}`;
                 cardsContainer.appendChild(card);
             });

             categoryColumn.appendChild(cardsContainer);
             resultsGrid.appendChild(categoryColumn); // Add column to the grid
        }
    });
    console.log("[DisplayResults V3] Finished populating results grid.");


    // --- Populate Critiques Section ---
    console.log("[DisplayResults V3] Populating critiques section...");
    const critiquesTitle = document.createElement('h3');
     // Ensure currentChallenge and its name are available
     let challengeTitleText = `Critiques: ${currentChallenge?.name || "Unknown Challenge"}`;
     if (currentDynamicFocus) { challengeTitleText += ` (Focus: ${currentDynamicFocus.charAt(0).toUpperCase() + currentDynamicFocus.slice(1)})`; }
    critiquesTitle.textContent = challengeTitleText;
    critiquesTitle.className = 'critiques-section-title';
    critiquesSection.appendChild(critiquesTitle);

    // Define order for critiques display (may differ slightly from grid if desired)
    const orderedCategoriesCritiques = ['win', 'top2', 'high', 'low', 'btm']; // Exclude SAFE and IMMUNE from detailed critiques
    orderedCategoriesCritiques.forEach(category => {
        const queensInCategory = episodeResults[category];
        if (queensInCategory && queensInCategory.length > 0) {

            const placementCritiquesDiv = document.createElement('div');
            placementCritiquesDiv.className = `critiques-placement-group ${category}`;

             const placementHeader = document.createElement('h5');
             placementHeader.textContent = category.toUpperCase(); // Display placement as header
             placementCritiquesDiv.appendChild(placementHeader);


             queensInCategory.forEach(queen => {
                const critiqueP = document.createElement('p');
                critiqueP.className = 'critique-entry';

                // Get the appropriate critique text from the challenge object
                let critiqueText = "";
                // Check challenge object exists before accessing properties
                if (currentChallenge) {
                    switch (category) {
                         case 'win': critiqueText = getRandomCritique(currentChallenge.winText); break;
                         case 'top2': critiqueText = getRandomCritique(currentChallenge.highText || currentChallenge.winText); break; // Fallback for TOP2
                         case 'high': critiqueText = getRandomCritique(currentChallenge.highText); break;
                         case 'low': critiqueText = getRandomCritique(currentChallenge.lowText); break;
                         case 'btm': critiqueText = getRandomCritique(currentChallenge.btmText); break;
                         default: critiqueText = "No specific critique available.";
                    }
                } else {
                    critiqueText = "Challenge data missing, cannot provide critique."; // Error case
                }

                // Format the critique entry
                critiqueP.innerHTML = `<strong>${queen.name}</strong> ${critiqueText}`;
                placementCritiquesDiv.appendChild(critiqueP);
            });

            critiquesSection.appendChild(placementCritiquesDiv); // Add this placement group to the main critiques section
        }
    }); // End loop through critique categories
    console.log("[DisplayResults V3] Finished populating critiques section.");


    console.log("[DisplayResults V3 - COMPLETE] Finished displaying all results.");
} // === End displayEpisodeResults (Complete V3) ===
 // Add this NEW function to your script.js
/**
 * Sets up the UI elements for RuPaul to choose which lipsyncing queen to save.
 * @param {Array<Object>} bottomQueens - The two queens in the bottom who lipsynced.
 */
// Modified to use enhanced choice card HTML generation
// Replace this ENTIRE function in script.js

function setupRuPaulLipsyncButtons(bottomQueens) {
    console.log("%c[RuPaul Mode Debug] Setting up LSFYL decision buttons (V4 Robustness)...", "color: orange; font-weight: bold;");

    // Get UI Elements and Validate
    const lipsyncChoiceContainer = document.getElementById('lipsync-choice-options');
    const doubleShantayContainer = document.getElementById('double-shantay-option');
    const rupaulDecisionDiv = document.getElementById('rupaul-decision');

    // Rigorous check for essential elements AND valid input array
    if (!bottomQueens || !Array.isArray(bottomQueens) || bottomQueens.length !== 2 || !lipsyncChoiceContainer || !doubleShantayContainer || !rupaulDecisionDiv) {
        console.error("!!! setupRuPaulLipsyncButtons V4 FATAL Error: Invalid input or missing UI elements. Cannot proceed.", {
            bottomQueensValid: Array.isArray(bottomQueens) && bottomQueens.length === 2,
            lipsyncChoiceContainer: !!lipsyncChoiceContainer,
            doubleShantayContainer: !!doubleShantayContainer,
            rupaulDecisionDiv: !!rupaulDecisionDiv
        });
        // Try to hide the container if it exists, even on error
        if(rupaulDecisionDiv) rupaulDecisionDiv.classList.add('hidden');
        // Avoid infinite loops or blocking by returning if setup is bad
        return;
    }

    // Clear previous options
    lipsyncChoiceContainer.innerHTML = '';
    doubleShantayContainer.innerHTML = '';
    console.log("  > Cleared previous lipsync choice/shantay options.");

    // Generate the enhanced cards
    try {
        bottomQueens.forEach((queen, index) => {
            // **Enhanced Data Validation WITHIN the loop**
            if (!queen || typeof queen !== 'object' || !queen.id || !queen.name || !queen.image ) {
                 console.error(`!!! ERROR processing queen at index ${index} in bottomQueens array. Invalid data:`, queen);
                 // Skip this iteration and continue with the next queen, prevents breaking the loop
                 return;
            }
            console.log(`  > Generating card (V4) for: ${queen.name} (Index: ${index})`);

            const card = document.createElement('div');
            card.className = 'choice-button-card enhanced lipsync-choice';
            card.dataset.queenIndex = index; // Index (0 or 1) to identify saved queen

            // *** CALL SUMMARY FUNCTION (Expects V1.3+ String Return) ***
            // Wrap the helper call in its own try...catch to isolate errors
            let summaryDivHTML = '<div class="card-stats-summary enhanced"><span class="card-stat-line error">Stats Error</span></div>'; // Default error display
            try {
                // Flags: queen, isLipsync=true (current bottom), isMQP=false
                // isCurrentBottom=true
                 summaryDivHTML = generateCardStatsSummaryHTML(queen, true, false, true); // V1.3+
            } catch (summaryError) {
                console.error(`!!! ERROR occurred within generateCardStatsSummaryHTML for ${queen.name}:`, summaryError);
                // Keep default error HTML for summary
            }


            // *** ASSEMBLE HTML (No Warning) ***
            const cardHTML = `
                 <div class="card-main-info">
                    <img src="${queen.image}" alt="${queen.name}">
                    <div class="name-score-group">
                        <span class="queen-name">Save:<br>${queen.name}</span>
                    </div>
                 </div>
                 ${summaryDivHTML} 
             `;
            card.innerHTML = cardHTML;

            card.onclick = () => handleRuPaulLipsyncDecision(index); // Index 0 or 1
            lipsyncChoiceContainer.appendChild(card);
            console.log(`   -> Appended card for ${queen.name}`);
        }); // End forEach loop

        // --- Add the Double Shantay Button ---
        const doubleShantayButton = document.createElement('button');
        doubleShantayButton.textContent = "It's a Double Shantay!";
        doubleShantayButton.className = 'control-button double-shantay';
        doubleShantayButton.onclick = () => handleRuPaulLipsyncDecision(-1); // -1 signifies double shantay
        doubleShantayContainer.appendChild(doubleShantayButton);
        console.log("  > Added Double Shantay button.");

        // --- Show the RuPaul Decision Area ---
        const lipsyncResultTextEl = document.getElementById('lipsync-result-text');
        if (lipsyncResultTextEl) lipsyncResultTextEl.textContent = "Make your decision...";
        rupaulDecisionDiv.classList.remove('hidden');
        console.log("%c[RuPaul Mode Debug] LSFYL decision UI (V4) should be visible.", "color: green;");

    } catch (error) { // Catch errors occurring during the card generation loop or button addition
        console.error("!!!!!!!! UNEXPECTED ERROR IN setupRuPaulLipsyncButtons V4 try block !!!!!!!!", error);
        // Display error message in the UI
        lipsyncChoiceContainer.innerHTML = `<p style='color:red; font-weight:bold;'>Critical error generating decision cards. Check console.</p>`;
        // Ensure the UI section is visible so the error message can be seen
        if (rupaulDecisionDiv) rupaulDecisionDiv.classList.remove('hidden');
    }

} // === End setupRuPaulLipsyncButtons V4 (Robustness) === // // === End setupRuPaulLipsyncButtons V3 === // // === End setupRuPaulLipsyncButtons (V_Definitive_Fix) ===


function checkForNonEliminationTwist(btmQueensLocal) {
    
    const activeCount = queens.filter(q => q.isActive).length;
    let finaleTriggerCount = (finaleFormat === 'LSFTC' ? 4 : 3);
    if (initialCastSize <= finaleTriggerCount) finaleTriggerCount = Math.max(2, initialCastSize); // Adjust for small casts

    // --- Basic Exclusions ---
    // 1. Can't happen right before finale episode or in it
    if (activeCount <= finaleTriggerCount + 1) { // Need at least final 5/6 for Top 3/4 finale
        
        return false;
    }
    // 2. Needs exactly 2 queens in the bottom
    if (!btmQueensLocal || btmQueensLocal.length !== 2) {
        
        return false;
    }

    const q1 = btmQueensLocal[0];
    const q2 = btmQueensLocal[1];

    // --- Check if Double Shantay already happened ---
    if (hasDoubleShantayOccurred) {
        
        return false;
    }

    // --- PREFERRED SCENARIO: Clash of Frontrunners ---
    
    const calculateFrontrunnerScore = (queen) => {
        const wins = queen.trackRecord.filter(p => p === 'WIN').length;
        const topHigh = queen.trackRecord.filter(p => p === 'HIGH' || p === 'TOP2').length;
        const ppeFactor = Math.max(0.1, 1 - (queen.trackRecord.filter(p=>p==='BTM'||p==='ELIM').length * 0.15));
        return (wins * 4) + (topHigh * 1.5) + ((queen.ppe || 0) * ppeFactor * 0.1);
    };
    const q1FScore = calculateFrontrunnerScore(q1);
    const q2FScore = calculateFrontrunnerScore(q2);
    const frontrunnerThreshold = (currentEpisode < 6) ? 4 : (currentEpisode < 9 ? 6 : 8); // Adjusted thresholds
    const areBothFrontrunners = q1FScore >= frontrunnerThreshold && q2FScore >= frontrunnerThreshold;

    

    if (areBothFrontrunners) {
        simulateLipsyncOutcome(btmQueensLocal, true); // Prediction only
        const scoreDiff = Math.abs((q1.lipsyncScore || 0) - (q2.lipsyncScore || 0));
        delete q1.lipsyncScore; delete q2.lipsyncScore;

        // High base chance, more likely if lipsync is close/riggory high
        let chance = 0.65 + (riggory * 0.025);
        if (scoreDiff < 3.5) chance += 0.10;
        if (scoreDiff < 1.8) chance += 0.15;
        chance = Math.min(chance, 0.95); // Cap below 100%

        

        if (Math.random() < chance) {
            
            hasDoubleShantayOccurred = true; // Set the flag!
            eliminatedQueenThisEpisode = null;
            lipsyncResultText.textContent = `My Queens! This is legendary... ${q1.name}, ${q2.name}... Shantay, you BOTH stay!`;
            return true; // Double shantay happened
        } else {
            
        }
    } else {
        
    }


    // --- If frontrunner shantay didn't happen, check standard score-based chance ---
    if (!hasDoubleShantayOccurred) { // Double check flag just in case
        
        simulateLipsyncOutcome(btmQueensLocal, true);
        const score1 = q1.lipsyncScore; const score2 = q2.lipsyncScore;
        delete q1.lipsyncScore; delete q2.lipsyncScore;

        if (score1 !== undefined && score2 !== undefined) {
            const scoreDifference = Math.abs(score1 - score2);
            const storylineFactor = ((q1.stats.storyline || 5) + (q2.stats.storyline || 5)) / 2;
            let chance = 0.04 + (riggory * 0.01); // Low base chance
            if (storylineFactor > 7.5) chance += 0.04;
            if (scoreDifference < (2.0 - riggory * 0.08)) chance += 0.10; // Close scores boost
            if (scoreDifference < (0.8 - riggory * 0.04)) chance += 0.15; // VERY close boost
            chance = Math.min(chance, 0.40); // Cap standard chance lower
            

            if (Math.random() < chance) {
                
                hasDoubleShantayOccurred = true; // Set the flag!
                eliminatedQueenThisEpisode = null;
                lipsyncResultText.textContent = `In a shocking twist... ${q1.name} and ${q2.name}, Shantay, you BOTH stay!`;
                return true; // Double shantay happened
            }
        }
    }


    // --- GUARANTEED DOUBLE SHANTAY MECHANIC (If none happened yet) ---
    // Define the window where this backup trigger can happen
    const guaranteeWindowStartEp = Math.max(4, Math.floor(initialCastSize * 0.3)); // e.g., starts Ep 4 or ~30% mark
    const guaranteeWindowEndEp = initialCastSize - finaleTriggerCount - 1; // Last elimination before the pre-finale setup

    

    // Check if we are within the window AND it hasn't happened yet
    if (!hasDoubleShantayOccurred &&
        currentEpisode >= guaranteeWindowStartEp &&
        currentEpisode <= guaranteeWindowEndEp &&
        guaranteeWindowEndEp > guaranteeWindowStartEp) { // Ensure window is valid

        const totalWindowEpisodes = guaranteeWindowEndEp - guaranteeWindowStartEp + 1;
        const episodesPassedInWindow = currentEpisode - guaranteeWindowStartEp;
        // Chance increases linearly from ~15% up to ~95% by the end of the window
        const guaranteeChance = 0.15 + (episodesPassedInWindow / totalWindowEpisodes) * 0.80;

        

        if (Math.random() < guaranteeChance) {
            
            hasDoubleShantayOccurred = true; // Set the flag!
            eliminatedQueenThisEpisode = null; // No elimination
             // Use a slightly less exciting message for the forced one
            lipsyncResultText.textContent = `Condragulations, my queens... ${q1.name}, ${q2.name}... based on that lipsync, you have BOTH been saved! Shantay, you stay.`;
             // Clear prediction scores if somehow still present
            delete q1.lipsyncScore; delete q2.lipsyncScore;
            return true; // Double shantay happened
        } else {
            
        }
    }


    // --- If no double shantay triggered by any means ---
    
    return false; // Default: Elimination proceeds as normal
}
// Replace the ENTIRE simulateLipsyncOutcome function with this version,
// ensuring the text setting logic is corrected.

/**
 * Simulates the lipsync outcome based on scores and potentially triggers the Bandokadont twist.
 * Assigns winner/loser and sets the eliminatedQueenThisEpisode variable or nullifies it.
 * @param {Array} lipsyncers - Array containing the two queens lipsyncing.
 * @param {boolean} predictionOnly - If true, only calculates scores, doesn't apply outcome.
 * @param {boolean} isPremiereLSFYW - If true, applies special rules for premiere lipsync.
 */
function simulateLipsyncOutcome(lipsyncers, predictionOnly = false, isPremiereLSFYW = false, isAS10_LSFYL = false) {
    if (!lipsyncers || lipsyncers.length < 2) { console.warn("simulateLipsyncOutcome: Invalid input"); return; }
    const modeContext = isPremiereLSFYW ? 'Premiere LSFYW' : (isAS10_LSFYL ? 'AS10 LSFYL' : (gameMode === 'allstars' ? 'Std AS LSFYL' : 'Normal LSFYL'));
    const functionVersion = "V6 Lipsync - AS10 MQP";
    console.log(` Running Lipsync Simulation V6 - Context: ${modeContext}`);

    // --- 1. Calculate Scores (Use V5 Logic - Finalist Potential Intervention) ---
    const currentCompetingCount = queens.filter(q => q.isActive).length;
    const LATE_GAME_THRESHOLD = 7;
    const isLateGame = currentCompetingCount <= LATE_GAME_THRESHOLD;

    lipsyncers.forEach(queen => { /* ... V5 Score Calculation Logic ... */
       let score=0;const lipsyncStat=queen.stats.lipsync||5;const danceStat=queen.stats.dance||5;const charismaStat=queen.stats.charisma||5;const ppe=queen.ppe||0;const wins=queen.wins||0;const trackRecord=queen.trackRecord||[];const storyline=queen.stats.storyline||5;score+=lipsyncStat*1.5+danceStat*0.4+charismaStat*0.6;const r1=Math.random();const r2=Math.random();const randomNormal=(r1+r2-1);const randomFactor=randomNormal*(2.5+riggory*0.2);score+=randomFactor;let performanceScoreMod=0;performanceScoreMod+=wins*(3.0+riggory*0.2);performanceScoreMod+=(queen.highs||0)*(1.0+riggory*0.1);performanceScoreMod+=ppe*0.10;const btmCount=trackRecord.filter(p=>p==='BTM'||p==='ELIM').length||0;performanceScoreMod-=btmCount*(2.0+riggory*0.2);score+=performanceScoreMod;let consecutiveSurvivedBottoms=0;for(let i=trackRecord.length-1;i>=0;i--){if(trackRecord[i]==='BTM')consecutiveSurvivedBottoms++;else if(trackRecord[i]==='ELIM'){consecutiveSurvivedBottoms=0;break;}else if(trackRecord[i]!=='')break;}if(!isPremiereLSFYW&&!isAS10_LSFYL&&consecutiveSurvivedBottoms>=1){let repeatPenalty=0;if(consecutiveSurvivedBottoms===1){repeatPenalty=-(3.0*(1+riggory/20));}else{repeatPenalty=-(Math.pow(consecutiveSurvivedBottoms,2.3)*3.2*(1+riggory/18));}score+=repeatPenalty;}if(!isPremiereLSFYW&&!isAS10_LSFYL&&riggory>4){score+=(storyline-7.5)*0.15*(riggory/10);}const MIN_LS_SCORE=-20;const MAX_LS_SCORE=70;score=Math.max(MIN_LS_SCORE,Math.min(score,MAX_LS_SCORE));queen.lipsyncScore=parseFloat(score.toFixed(2));
    });

    // --- Apply Finalist Potential Intervention (Late Game, High Riggory, Not AS10 LSFYL?) ---
     // Should FP apply to AS10 LSFYL? Maybe not, points should dominate pre-merge. Let's exclude it.
     if (isLateGame && riggory >= 6 && !isPremiereLSFYW && !isAS10_LSFYL) {
         /* ... V5 Finalist Potential Intervention Logic ... */
          const queen1=lipsyncers[0];const queen2=lipsyncers[1];const fpScore1=calculateFinalistPotential(queen1);const fpScore2=calculateFinalistPotential(queen2);const fpDifference=fpScore1-fpScore2;const FP_DIFFERENCE_THRESHOLD=15;const FP_MIN_SCORE_THRESHOLD=5;if(fpDifference>FP_DIFFERENCE_THRESHOLD&&fpScore1>FP_MIN_SCORE_THRESHOLD){const potentialBonus=(fpDifference*0.5)*(riggory/10);queen1.lipsyncScore+=potentialBonus;console.log(`  FP INTERVENTION: +${potentialBonus.toFixed(2)} for ${queen1.name}`);}else if(fpDifference<-FP_DIFFERENCE_THRESHOLD&&fpScore2>FP_MIN_SCORE_THRESHOLD){const potentialBonus=(Math.abs(fpDifference)*0.5)*(riggory/10);queen2.lipsyncScore+=potentialBonus;console.log(`  FP INTERVENTION: +${potentialBonus.toFixed(2)} for ${queen2.name}`);}
     }

    // --- 2. Sort & Determine Winner/Loser ---
    lipsyncers.sort((a, b) => (b.lipsyncScore || 0) - (a.lipsyncScore || 0));
    let finalWinner = lipsyncers[0];
    let finalLoser = lipsyncers[1];
     console.log(` Lipsync Scores -> Winner: ${finalWinner.name} (${finalWinner.lipsyncScore?.toFixed(2)}), Loser: ${finalLoser.name} (${finalLoser.lipsyncScore?.toFixed(2)})`);


    if (predictionOnly) { lipsyncers.forEach(q => delete q.lipsyncScore); return; } // Exit if only predicting

    // --- 3. Apply Outcome & Update State ---
    lipsyncWinner = null; // Reset global lipsync winner initially
    premiereLipsyncParticipants = []; // Reset premiere participants
    eliminatedQueenThisEpisode = null; // Reset elimination

    if (isPremiereLSFYW) { // Standard Premiere LSFYW
        premiereLipsyncParticipants = [finalWinner, finalLoser];
        lipsyncResultText.textContent = `Condragulations ${finalWinner.name}, you're the WINNER of this week's premiere! ${finalLoser.name}, you are safe.`;
    } else if (isAS10_LSFYL) { // AS10 LSFYLegacy
        lipsyncWinner = finalWinner; // Set winner for potential AS logic later (elim choice)
        finalWinner.mqp = (finalWinner.mqp || 0) + AS10_MQP_POINTS.WIN; // 3 points for WIN
        finalLoser.mqp = (finalLoser.mqp || 0) + AS10_MQP_POINTS.TOP2; // 2 points for TOP2
        console.log(`   AS10 Points: ${finalWinner.name} +${AS10_MQP_POINTS.WIN} -> ${finalWinner.mqp}, ${finalLoser.name} +${AS10_MQP_POINTS.TOP2} -> ${finalLoser.mqp}`);
        lipsyncResultText.textContent = `Condragulations ${finalWinner.name}, you're a winner baby, you've earned 3 My Queen Points! ${finalLoser.name}, you are safe, and earned 2 points.`;
    } else if (gameMode === 'allstars') { // Standard AS LSFYLegacy (Non-AS10)
        lipsyncWinner = finalWinner; // Set winner for elimination choice phase
        lipsyncResultText.textContent = `${finalWinner.name}, you're a winner baby! Now, you must choose who to eliminate...`; // Text hints at next step
    } else { // NORMAL LSFYL (Check twists/elim)
        let wasTwistTriggeredAndSucceeded = runDunkTankTwist(finalLoser); // Bandokadont Check

        if (wasTwistTriggeredAndSucceeded) {
            lipsyncResultText.textContent = `${finalWinner.name}, Shantay you stay. ${finalLoser.name}... the Dunk Tank SAVES you! Condragulations!`;
        } else {
            // Check Double Sashay (V5 Logic)
            const activeCountLS = queens.filter(q => q.isActive).length; const doubleSashayChance = 0.001+(riggory*0.002);
             if (activeCountLS > 5 && Math.random()<doubleSashayChance && (finalWinner.lipsyncScore||0)<(0.0-riggory*0.1) && (finalLoser.lipsyncScore||0)<(-2.0-riggory*0.05)) {
                  eliminatedQueenThisEpisode = [finalLoser, finalWinner];
                  lipsyncResultText.textContent = `I'm sorry my dears, but based on that lipsync... I must ask *both* of you... to Sashay Away.`;
                  console.log("%c!!! Double Sashay !!!", 'color: red; font-weight: bold;');
             } else { // Standard Elimination
                 eliminatedQueenThisEpisode = [finalLoser];
                 lipsyncResultText.textContent = `${finalWinner.name}, Shantay you stay. ${finalLoser.name}, Sashay away.`;
             }
        }
    }

    // 4. Clean up temporary scores
    lipsyncers.forEach(q => delete q.lipsyncScore);
} // End of simulateLipsyncOutcome V5 // End of simulateLipsyncOutcome V4.1 // End of simulateLipsyncOutcome V4 // End of simulateLipsyncOutcome V3 (Complete) // End of simulateLipsyncOutcome V2

/**
 * Processes the outcome of an episode step: marks elimination, grants immunity,
 * updates track records, and advances the episode or premiere stage.
 * @param {string} context - 'PREMIERE_GROUP' or 'NORMAL' / 'NORMAL_LIPSYNC_DECIDED'.
 * @param {Array<Object>} queensInvolvedInStep - All queens who participated in this step.
 * @param {Object | null} premiereOverallWinner - Argument is no longer used, pass null.
 */
function processElimination(context, involvedQueensList, isNonEliminationChallenge) {
    // ** CAPTURE Episode number BEFORE potential advancement **
    const episodeNumberForProcessing = currentEpisode;
    // Capture group ep number (if AS10) BEFORE potential advancement
    const groupEpisodeForProcessing = (gameMode === 'allstars10' && ['AS10_PRE_MERGE', 'AS10_PRE_LALA', 'AS10_MERGE'].includes(context))
                                        ? allStars10_groupEpisode : 0;

    console.log(`---> Processing Elimination/Advancement for Logical Ep ${episodeNumberForProcessing}, Context: ${context}, GroupEp#: ${groupEpisodeForProcessing}, NonElim: ${isNonEliminationChallenge}`);
    let eliminationOccurredThisStep = false;

    // Determine queens involved correctly. If called from RuPaul handler,
    // `involvedQueensList` might be the full list. We rely on `eliminatedQueenThisEpisode` for actual elim.
    // Track Record update needs list of *everyone* participating in the episode log.
    // For simplicity, updateAllTrackRecords will use episodeResults and the full queens list internally for now.
    const participatingQueenIDs = new Set(involvedQueensList.map(q => q.id)); // IDs who were active in this step/context


    // --- 1. Handle Standard Elimination (Normal, AllStars, AS10 Merge) ---
    if (['NORMAL', 'ALLSTARS', 'AS10_MERGE'].includes(context) && !isNonEliminationChallenge) {
        if (eliminatedQueenThisEpisode && eliminatedQueenThisEpisode.length > 0) {
            eliminatedQueenThisEpisode.forEach(elimQueen => {
                 const queenToUpdate = queens.find(q => q.id === elimQueen.id);
                 if (queenToUpdate && queenToUpdate.isActive) {
                     queenToUpdate.isActive = false;
                     // ** Assign elimination episode number correctly **
                     queenToUpdate.eliminatedInEpisode = episodeNumberForProcessing;
                     eliminationOccurredThisStep = true;
                     console.log(`   ELIMINATED: ${queenToUpdate.name} in Ep ${episodeNumberForProcessing}`);
                 } else if (queenToUpdate) {
                    console.warn(`Attempted to eliminate ${elimQueen.name} in Ep ${episodeNumberForProcessing}, but already inactive.`);
                 } else {
                    console.error(`Failed to find queen ${elimQueen.id} for elimination.`);
                 }
             });
        } else {
            console.log("   No standard elimination triggered this step.");
        }
    } else {
        console.log(`   Elimination processing skipped (Context: ${context}, NonElim Flag: ${isNonEliminationChallenge})`);
    }


    // --- 2. Handle Immunity (Specific Case: Talent Show Premiere) ---
    if (context === 'NORMAL' && episodeNumberForProcessing === 1 && premiereFormat === 'TalentShowNonElim') {
        console.log("   Checking for Talent Show Non-Elim immunity grant...");
        // episodeResults.win should be populated by determinePlacements or RuPaul choice
        (episodeResults.win || []).forEach(winnerQueen => {
            const queenToGrantImmunity = queens.find(q => q.id === winnerQueen.id);
             if (queenToGrantImmunity && queenToGrantImmunity.isActive) {
                  queenToGrantImmunity.isImmune = true;
                  console.log(`   IMMUNITY Granted: ${winnerQueen.name} for next episode.`);
              } else {
                 console.warn(`   Could not grant immunity to winner ${winnerQueen?.name} (not found or inactive?)`);
             }
        });
    } // Note: Immunity is CLEARED at the START of the *next* episode step.


    // --- 3. AS10 State Advancement & Merge Logic ---
    let advanceAS10State = false; // Flag to track if state counters should be updated
    if (gameMode === 'allstars10' && !isFinale) {
        console.log("   Checking AS10 state advancement...");
        advanceAS10State = true; // Assume we might advance unless finale triggered

        // --- Check for Group Completion (PRE_MERGE) ---
        if (context === 'AS10_PRE_MERGE' && groupEpisodeForProcessing === 3) {
             console.log(`   Group ${allStars10_currentGroup} finished its 3 episodes (Processing Ep ${episodeNumberForProcessing}).`);
             // Determine Qualifiers/Non-Qualifiers for this group
             const groupIDs = allStars10_groups[allStars10_currentGroup];
             const groupQueens = queens.filter(q => groupIDs.includes(q.id));
             groupQueens.sort((a, b) => (b.mqp || 0) - (a.mqp || 0)); // Sort by MQP
             const qualifiers = groupQueens.slice(0, 3);
             const nonQualifiers = groupQueens.slice(3);
             console.log(`   Group ${allStars10_currentGroup} Qualifiers (Top 3 MQP): ${qualifiers.map(q => `${q.name}(${q.mqp})`).join(', ')}`);
             announceMergeQualifiers(allStars10_currentGroup, qualifiers); // Update UI and qualifier sets (marks queen.as10_qualified = true)
             nonQualifiers.forEach(nq => allStars10_nonQualifiers_IDs.add(nq.id)); // Add losers to non-qual set for LaLa

             // Decide state for the *next* step
             if (allStars10_currentGroup === 'C') { // If last group finished
                 console.log("   All Pre-Merge groups complete. Setting state for Pre-Merge LaLaPaRuza (Logical Ep 10).");
                 // State is *set* for next step, numbers change at end of func
             } else { // If A or B finished
                 console.log(`   Moving to next group. Setting state for Group ${(allStars10_currentGroup === 'A' ? 'B' : 'C')}.`);
             }
        }
        // --- Check after Pre-Merge LaLaPaRuza ---
        else if (context === 'AS10_PRE_LALA') {
             console.log(`   Pre-Merge LaLaPaRuza complete (Processing Ep ${episodeNumberForProcessing}). Setting state for Merge (Logical Ep 11).`);
             // Add LaLa winner to merge qualifiers (ID is in allStars10_preMergeLalaWinnerID)
             if (allStars10_preMergeLalaWinnerID) {
                 allStars10_mergeQualifiers_IDs.add(allStars10_preMergeLalaWinnerID);
                  const winnerQueen = queens.find(q => q.id === allStars10_preMergeLalaWinnerID);
                  if (winnerQueen) { winnerQueen.as10_qualified = true; } // Mark object
                  console.log(`   ${winnerQueen?.name || 'LaLa Winner'} added to merge qualifiers.`);
             } else { console.warn("   No LaLaPaRuZa winner ID found to add to merge.");}
             // Deactivate LaLa losers (losers were stored in allStars10_nonQualifiers_IDs)
             allStars10_nonQualifiers_IDs.forEach(id => {
                 if (id !== allStars10_preMergeLalaWinnerID) { // Don't deactivate winner
                     const queenToDeactivate = queens.find(q => q.id === id);
                      if (queenToDeactivate && queenToDeactivate.isActive) {
                          queenToDeactivate.isActive = false;
                           queenToDeactivate.eliminatedInEpisode = episodeNumberForProcessing; // Mark elim ep
                           console.log(`   DEACTIVATED (Non-Qualifier / LaLa Loser): ${queenToDeactivate.name}`);
                      }
                 }
             });
        }
        // --- Check within Pre-Merge or Merge ---
        else if (context === 'AS10_PRE_MERGE' || context === 'AS10_MERGE') {
            // Just a standard step, state advances normally later
            console.log(`   Standard step within ${context}. State will advance.`);
        }

        // --- Check for AS10 Finale Trigger (AFTER processing potential eliminations) ---
         const activePostElim = queens.filter(q => q.isActive).length;
         if (gameMode === 'allstars10' && context === 'AS10_MERGE' && activePostElim <= 6 && !allStars10_finalLalaparuzaStage) {
            console.log(`%c AS10 FINALE TRIGGERED! Reached Top ${activePostElim} during Ep ${episodeNumberForProcessing}. Preparing Final LaLaPaRuza.`, 'color: purple; font-weight: bold;');
            // Set stage flags for the NEXT step (runFinale itself handles the actual run)
             allStars10_finalLalaparuzaStage = true; // Flag that the final lala should run next
             advanceAS10State = false; // STOP regular state advancement here, next step IS finale
             isFinale = true; // Set the global finale flag NOW
         } else if (context === 'AS10_FINALE_LALA') {
            // If the Final LaLa *just* happened this step
             console.log("   AS10 Final LaLa just completed.");
             advanceAS10State = false; // No further state advancement needed
             isFinale = true; // Ensure finale flag is set
         } else if (allStars10_finalLalaparuzaStage && !isFinale) {
             // Safety check: If final stage flag was set previously, but we're not in finale? Error or proceed to finale?
             console.warn("   Final LaLa Stage flag was set, proceeding to mark as Finale.");
             advanceAS10State = false; // Prevent advancement
             isFinale = true;
         }

        // *** ACTUAL AS10 STATE ADVANCEMENT (Happens AFTER checks) ***
         if (advanceAS10State) { // Only advance if not entering finale next
              console.log("   Advancing AS10 state counters...");
               if (context === 'AS10_PRE_MERGE' && groupEpisodeForProcessing === 3) {
                     if (allStars10_currentGroup === 'C') { // Moving to LaLa
                         allStars10_currentGroup = 'PRE_LALA'; currentEpisode = 10; allStars10_groupEpisode = 0;
                     } else { // Moving to B or C group
                         allStars10_currentGroup = (allStars10_currentGroup === 'A' ? 'B' : 'C'); allStars10_groupEpisode = 1; currentEpisode++;
                     }
                 } else if (context === 'AS10_PRE_LALA') { // Moving to Merge
                     allStars10_currentGroup = 'MERGE'; currentEpisode = 11; allStars10_groupEpisode = 0;
                 } else if (context === 'AS10_PRE_MERGE') { // Mid-group step
                     allStars10_groupEpisode++; currentEpisode++;
                  } else if (context === 'AS10_MERGE') { // Mid-merge step
                     currentEpisode++; allStars10_groupEpisode = 0;
                  }
               console.log(`   > New AS10 State: Ep ${currentEpisode}, Group ${allStars10_currentGroup}, GroupEp ${allStars10_groupEpisode}`);
         } else {
              console.log("   AS10 State advancement skipped (Likely entering finale).");
         }
    }


    // --- 4. Standard Advancement (Non-AS10) ---
    else if (advanceAS10State === false && !isFinale) {
        console.log("   Advancing standard state...");
        let nextStage = splitPremiereStage;
        let incrementEpisodeNumber = false;

        // Determine next state based on current state
        if (splitPremiereStage === 'A_Perf') { nextStage = 'B_Perf'; incrementEpisodeNumber = false; currentPremiereGroup = 'B'; }
        else if (splitPremiereStage === 'B_Perf') { nextStage = null; incrementEpisodeNumber = true; currentPremiereGroup = null; }
        else { nextStage = null; incrementEpisodeNumber = true; } // Normal episode finished or no split premiere

        // ** UPDATE state variables AFTER using them **
        splitPremiereStage = nextStage;
        if (incrementEpisodeNumber) {
             currentEpisode++;
             console.log(`   > Advanced to Episode ${currentEpisode}`);
        } else {
             console.log(`   > Advanced to Stage: ${splitPremiereStage}`);
        }
    } else if (isFinale && !advanceAS10State) {
        console.log("   Episode advancement skipped (Finale Active).");
    }


    // --- 5. Update Track Records (Using the captured episode/group numbers) ---
     console.log(`   Calling updateAllTrackRecords for processed Logical Ep ${episodeNumberForProcessing}, Group Ep ${groupEpisodeForProcessing}`);
     // It needs the list of queens who PARTICIPATED in this specific step/context
     // Reconstructing based on episodeResults is complex if queens were SAFE.
     // Passing the original list might be the most reliable if updateAllTrackRecords filters correctly.
     // Or, we need to store `activeQueensForStep` globally before potential async pause.
     // Let's rely on `involvedQueensList` which was passed in, assuming it was the correct list for the step.
     updateAllTrackRecords(involvedQueensList, eliminationOccurredThisStep, context, episodeNumberForProcessing, groupEpisodeForProcessing);


    // --- 6. Clean Up Step-Specific State (AFTER TR update) ---
    lipsyncWinner = null; // Clear global lipsync winner if it was set

    console.log(`---> End of Processing for Logical Ep ${episodeNumberForProcessing} <---`);

} // === End processElimination V3 (Complete) === // End of processElimination// End of processElimination// End of processElimination
/**
 * Updates the trackRecord array for all involved queens based on episode results.
 * Handles different contexts (Premiere, Normal) for correct indexing and placements.
 * Recalculates stats like PPE, wins, bottoms etc. for all queens.
 * @param {Array<Object>} involvedQueens - Queens who participated in this step.
 * @param {boolean} eliminationOccurred - Whether an elimination happened this round.
 * @param {string} context - 'PREMIERE_GROUP', 'NORMAL', etc.
 * @param {Object | null} premiereOverallWinner - Argument unused, pass null.
 */
// Update win streak logic for WIN vs TOP2 clarity
function updateAllTrackRecords(involvedQueens, eliminationOccurredThisStep, context, episodeNumber, as10GroupEpisodeNum = 0) {
    if (!involvedQueens) involvedQueens = [];
    // Ensure involvedIDsThisStep contains valid IDs even if involvedQueens has null/undefined entries
    const involvedIDsThisStep = new Set(involvedQueens.map(q => q?.id).filter(id => id));

    // --- Determine Correct Episode Index ---
    let episodeIndex;
    if (gameMode === 'allstars10') { // AS10 Indexing
        let groupLetterForIndex;
         // Determine group based on the episode number *being processed*
         if (episodeNumber >= 1 && episodeNumber <= 3) groupLetterForIndex = 'A';
         else if (episodeNumber >= 4 && episodeNumber <= 6) groupLetterForIndex = 'B';
         else if (episodeNumber >= 7 && episodeNumber <= 9) groupLetterForIndex = 'C';
         else groupLetterForIndex = null; // LaLa (Ep 10) or Merge/Finale doesn't need group letter for index calc here
         // Use the group episode number passed from processElimination
         episodeIndex = getAS10TrackRecordIndex(episodeNumber, groupLetterForIndex, as10GroupEpisodeNum);
    } else if (premiereFormat === 'Split') { // Standard Split Premiere Indexing
        if (episodeNumber === 1) {
             // Determine index based on which group *just finished*
             const firstInvolvedQueenId = involvedQueens.length > 0 ? involvedQueens[0].id : null;
             if (firstInvolvedQueenId && splitPremiereGroupA_IDs.includes(firstInvolvedQueenId)) {
                  episodeIndex = 0; // Group A finished -> Ep 1 column (index 0)
             } else if (firstInvolvedQueenId && splitPremiereGroupB_IDs.includes(firstInvolvedQueenId)) {
                  episodeIndex = 1; // Group B finished -> Ep 2 column (index 1)
             } else {
                 // Fallback: Best guess based on internal stage if group unclear
                  console.warn("UpdateAllTR Warning (Split): Could not determine group. Defaulting index.");
                  episodeIndex = (currentPremiereGroup === 'B') ? 1 : 0; // If group B is set as current, A must have finished (index 0). If A/null, assume A is finishing (index 0) or B is finishing (index 1) - slightly ambiguous fallback
             }
        } else { // Episodes AFTER split premiere (logical Ep 2+)
            episodeIndex = (episodeNumber - 1) + 1; // Index offset by 1
        }
    } else { // Normal Mode (No split premiere)
        episodeIndex = episodeNumber - 1; // Simple zero-based index
    }
    episodeIndex = Math.max(0, episodeIndex); // Ensure non-negative
    console.log(`  Updating Track Records for Logical Episode ${episodeNumber}, Index: ${episodeIndex} (Context: ${context}, AS10 GroupEp#: ${as10GroupEpisodeNum})`);


    // --- Update Track Records for Involved Queens ---
    involvedQueens.forEach(queen => {
        if (!queen) return; // Skip null/undefined entries if any
        if (!Array.isArray(queen.trackRecord)) { queen.trackRecord = []; } // Ensure track record is an array
        while (queen.trackRecord.length <= episodeIndex) { queen.trackRecord.push(''); } // Pad if needed

        let placement = ""; // Initialize placement for this queen/episode
        const eliminatedThisEp = !queen.isActive && queen.eliminatedInEpisode === episodeNumber;

        // --- Placement Determination Logic ---
        if (eliminatedThisEp) {
            placement = "ELIM";
        } else if (queen.isActive || queen.trackRecord.includes("WINNER") || queen.trackRecord.includes("RUNNER-UP")) { // Process active queens or already placed finalists

             // --- SPECIFIC CONTEXT OVERRIDES FIRST ---

             // A. Standard All Stars (Non-AS10) WIN/TOP2 Logic
             if (context === 'ALLSTARS' && lipsyncWinner) {
                 // Check if queen was in the initial Top 2 lipsync pool
                 const wasInTop2Group = (episodeResults.top2 || []).some(q => q?.id === queen.id);
                  if (wasInTop2Group && lipsyncWinner.id === queen.id) {
                      placement = "WIN"; // The LSFYL winner gets WIN
                  } else if (wasInTop2Group) {
                     placement = "TOP2"; // The LSFYL loser gets TOP2
                  }
                  // If not in Top 2 group, 'placement' remains "" for now, will check general results below
             }

             // B. AS10 Pre-Merge LaLa Result (Index 9 / Ep 10)
             if (gameMode === 'allstars10' && context === 'AS10_PRE_LALA' && episodeIndex === 9) {
                 if (allStars10_preMergeLalaWinnerID === queen.id) { placement = "WIN"; queen.as10_qualified = true; }
                 else if (allStars10_nonQualifiers_IDs.has(queen.id)) { placement = "ELIM"; } // Participated but lost LaLa
                 else { placement = "INACTIVE"; } // Wasn't in the LaLa
             }

             // C. AS10 Final LaLa Result (Final Index / Finale Phase)
             if (gameMode === 'allstars10' && (context === 'AS10_FINALE_LALA' || (isFinale && allStars10_finalLalaparuzaStage)) ) {
                  if (finalWinner && finalWinner.id === queen.id) { placement = "WINNER"; }
                  else if (finalRunnersUp && finalRunnersUp.some(ru => ru.id === queen.id)) { placement = "RUNNER-UP"; }
                  // Check if they *participated* in the final lala (were in `involvedQueens`) but didn't place
                  else if(involvedIDsThisStep.has(queen.id)) {
                      placement = "ELIM"; // Effectively eliminated during the finale tournament
                      console.warn(`   Marking final LaLa participant ${queen.name} as ELIM as not Winner/RU.`);
                  } else {
                      placement = ""; // Wasn't in final lala, placement already determined earlier
                  }
             }

             // D. Standard Mode Finale Results
             if (isFinale && gameMode !== 'allstars10' && !allStars10_finalLalaparuzaStage) { // Make sure AS10 finale doesn't run this
                   if (finalWinner && finalWinner.id === queen.id) { placement = "WINNER"; }
                   else if (finalRunnersUp && finalRunnersUp.some(ru => ru.id === queen.id)) { placement = "RUNNER-UP"; }
                   // Preserve existing record for those eliminated before finale index
                   else if (!queen.isActive && queen.trackRecord[episodeIndex]) { placement = queen.trackRecord[episodeIndex]; }
                   else if (involvedIDsThisStep.has(queen.id)) { // Should have been assigned WINNER/RU if involved
                       console.error(`  Finale Placement Error: ${queen.name} involved but not Winner/RU?`);
                       placement = "ERR"; // Error state
                   } else {
                        placement = ""; // Not involved
                   }
             }

            // --- GENERAL PLACEMENT (if not set by specific context above) ---
            if (!placement) {
                 if ((episodeResults.immune || []).some(q => q?.id === queen.id)) { placement = "IMMUNE"; }
                 else if ((episodeResults.win || []).some(q => q?.id === queen.id)) { placement = "WIN"; }    // Catches AS10 LSFYL Win / Premiere Win / Normal Win
                 else if ((episodeResults.top2 || []).some(q => q?.id === queen.id)) { placement = "TOP2"; }   // Catches AS10 LSFYL Loss / Premiere LSFYW Loss / Std AS Loss
                 else if ((episodeResults.high || []).some(q => q?.id === queen.id)) { placement = "HIGH"; }
                 else if ((episodeResults.safe || []).some(q => q?.id === queen.id)) { placement = "SAFE"; }
                 else if ((episodeResults.low || []).some(q => q?.id === queen.id)) { placement = "LOW"; }
                 else if ((episodeResults.btm || []).some(q => q?.id === queen.id)) { placement = "BTM"; }   // Catches AS10 MQP Donors / Normal BTMs / Std AS BTMs
            }

            // Final fallback check (only if active, involved, not inactive marker, and still no placement)
            if (!placement && queen.isActive && involvedIDsThisStep.has(queen.id) && queen.trackRecord[episodeIndex] !== 'INACTIVE') {
                placement = "SAFE";
                console.warn(`   Assigning SAFE fallback to ${queen.name} at index ${episodeIndex} (Existing: '${queen.trackRecord[episodeIndex]}', Context: ${context}).`);
            }

        } // End if queen is active or finalist check

        // --- Assign Placement & Update Streaks ---
        // Only update if placement is determined AND differs from existing OR if cell was null/undefined
        if (placement && placement !== queen.trackRecord[episodeIndex]) {
            console.log(`   - Assigning ${placement} to ${queen.name} at index ${episodeIndex}`);
            queen.trackRecord[episodeIndex] = placement;

            // --- Streak Logic --- (simplified)
            if (placement === "WIN" || placement === "WINNER") { queen.winsInARow = (queen.winsInARow || 0) + 1; queen.nonWinStreak = 0; }
            else if (placement === "TOP2") { queen.winsInARow = 0; queen.nonWinStreak = 0; }
            else if (placement && ["HIGH", "SAFE", "LOW", "BTM", "IMMUNE", "RUNNER-UP"].includes(placement)) { queen.winsInARow = 0; queen.nonWinStreak = (queen.nonWinStreak || 0) + 1; }
            else if (placement === "ELIM") { queen.winsInARow = 0; queen.nonWinStreak = 0; }
            // 'INACTIVE' or '' does not affect streaks

        } else if (!placement && queen.trackRecord[episodeIndex] === null) { // Catch only actual nulls
            queen.trackRecord[episodeIndex] = ''; // Replace null with empty string
        } else if (placement && placement === queen.trackRecord[episodeIndex]){
            // Log if needed for debugging why placement wasn't updated (it was the same)
             // console.log(`   - Placement ${placement} for ${queen.name} at index ${episodeIndex} unchanged.`);
        }

    }); // End loop through involvedQueens


    // --- Pad Track Records & Assign 'INACTIVE' Markers ---
    const maxEpIndexInRecords = queens.reduce((max, q) => Math.max(max, (Array.isArray(q.trackRecord) ? q.trackRecord.length - 1 : -1)), -1);
    const targetLength = Math.max(episodeIndex + 1, maxEpIndexInRecords + 1);

    queens.forEach(queen => {
        if (!Array.isArray(queen.trackRecord)) { queen.trackRecord = []; }
        while (queen.trackRecord.length < targetLength) { queen.trackRecord.push(''); }

        // --- AS10 Inactive Marking ---
        if (gameMode === 'allstars10') {
             for (let i = 0; i < 9; i++) { const group = i<3?'A':i<6?'B':'C'; if (queen.trackRecord[i]==='' && queen.as10_group !== group) { queen.trackRecord[i] = 'INACTIVE'; } } // Pre-Merge groups
             if (targetLength > 9 && queen.trackRecord[9]==='' && !allStars10_nonQualifiers_IDs.has(queen.id) && allStars10_preMergeLalaWinnerID !== queen.id) { queen.trackRecord[9] = 'INACTIVE'; } // Pre-Merge LaLa Non-Participants
        }
        // --- Standard Premiere Inactive Marking ---
         else if (premiereFormat === 'Split') {
              for (let i = 0; i < 2; i++) { if (queen.trackRecord[i] === '') { const group = i===0?'A':'B'; const inA = splitPremiereGroupA_IDs.includes(queen.id); const inB = splitPremiereGroupB_IDs.includes(queen.id); if ((group==='A'&&!inA) || (group==='B'&&!inB)) { queen.trackRecord[i] = 'INACTIVE'; } } }
         }
    });


    // --- Recalculate Aggregate Stats for ALL Queens ---
    queens.forEach(queen => {
        // Ensure track record exists before filtering
        const tr = queen.trackRecord || [];
        queen.wins    = tr.filter(p => p === 'WIN').length;
        queen.highs   = tr.filter(p => p === 'HIGH' || p === 'TOP2').length; // Combine High/Top2 stat
        queen.safes   = tr.filter(p => p === 'SAFE' || p === 'IMMUNE').length; // Combine Safe/Immune stat
        queen.lows    = tr.filter(p => p === 'LOW').length;
        queen.bottoms = tr.filter(p => p === 'BTM' || p === 'ELIM').length; // Combine Btm/Elim stat
        queen.ppe     = calculatePPE(queen); // Recalculate based on potentially updated TR
        // MQP points are updated elsewhere (LSFYL Win, Donations)
    });

    console.log("  Finished recalculating aggregate stats.");
} // End updateAllTrackRecords // End updateAllTrackRecords// End updateAllTrackRecords // End updateAllTrackRecords
// // // Modify displayEliminationOutcome to handle standard messages correctly
function displayEliminationOutcome() {
    
    let outcomeMessage = "";

    // 1. Prioritize lipsyncResultText IF it contains a specific outcome (twist, LSFYLegacy win, premiere win, double sashay)
    // Avoid using it if it's just the placeholder "Make your decision..."
    const specificLipsyncOutcomes = ["saves you", "winner baby", "WINNER of the premiere", "both to Sashay Away"];
    if (lipsyncResultText.textContent && specificLipsyncOutcomes.some(phrase => lipsyncResultText.textContent.includes(phrase))) {
        outcomeMessage = lipsyncResultText.textContent;
        
    }
    // 2. If no specific lipsync text, check for standard elimination
    else if (eliminatedQueenThisEpisode && eliminatedQueenThisEpisode.length > 0) {
        // Construct the standard "Shantay/Sashay" message here
        // Find the winner (the one NOT eliminated from the bottom group)
        const winnerQueen = bottomQueens.find(bq => !eliminatedQueenThisEpisode.some(eq => eq.id === bq.id));
        const elimNames = eliminatedQueenThisEpisode.map(q => q.name).join(' and ');

        if (winnerQueen) {
            outcomeMessage = `${winnerQueen.name}, Shantay you stay. ${elimNames}, Sashay away.`;
        } else {
            // Fallback if winner can't be determined (shouldn't happen in standard elim)
             outcomeMessage = `${elimNames} ${eliminatedQueenThisEpisode.length > 1 ? 'have' : 'has'} sashayed away.`;
        }
        
    }
    // 3. Handle non-elimination cases without specific lipsync text (e.g., standard non-elim challenge)
    else if (outcomeText.textContent && !outcomeText.textContent.includes("competition continues")) { // Use pre-set text if meaningful
        outcomeMessage = outcomeText.textContent;
        
    }
    // 4. Generic fallback if no elimination and no specific text
    else {
        // Check if All Stars elimination choice is pending
        if (gameMode === 'allstars' && !document.getElementById('allstars-elimination-choice').classList.contains('hidden')) {
             outcomeMessage = `${lipsyncWinner?.name || 'The winner'} must now decide who goes home...`;
        } else {
            outcomeMessage = "The competition continues..."; // Generic fallback
        }
        
    }


    outcomeText.textContent = outcomeMessage; // Set the final message
    remainingQueensCount.textContent = queens.filter(q => q.isActive).length; // Update remaining count

    // Update track record and active queens display AFTER state is processed & message decided
    updateTrackRecordTable(); // Update the full table
    updateActiveQueensDisplay(); // Update the active queen cards

    
}
function prepareLipsync(lipsyncers) {
    console.log(`%c[PrepareLipsync V4 - Score Fix] Setting up for: ${lipsyncers?.map(q=>q.name).join(' vs ')}`, "color: blue;");

    // Get UI Elements and Validate
    const lipsyncInfoDiv = document.getElementById('lipsync-info');
    const lipsyncContestantsDiv = document.getElementById('lipsync-contestants');
    const lipsyncResultTextEl = document.getElementById('lipsync-result-text');
    const rupaulDecisionDiv = document.getElementById('rupaul-decision');

    if (!lipsyncers || lipsyncers.length < 2 || !lipsyncInfoDiv || !lipsyncContestantsDiv || !lipsyncResultTextEl || !rupaulDecisionDiv) {
        console.warn("prepareLipsync V4: Invalid input or missing UI elements.", { lipsyncers, lipsyncInfoDiv, lipsyncContestantsDiv, lipsyncResultTextEl, rupaulDecisionDiv });
        if(lipsyncInfoDiv) lipsyncInfoDiv.classList.add('hidden');
        return;
    }

    // Clear previous state
    lipsyncContestantsDiv.innerHTML = '';
    lipsyncResultTextEl.textContent = '';
    rupaulDecisionDiv.classList.add('hidden');
    console.log(" > Cleared previous contestant/result text/decision UI.");

    // Generate enhanced cards for the "vs" display
    try {
        lipsyncers.forEach((queen, index) => {
             if (!queen || !queen.image || !queen.name) {
                 console.error(`!!! Error: Invalid basic queen data for VS card at index ${index}`, queen);
                  const errorP = document.createElement('p'); errorP.textContent = `Error loading ${queen?.name || 'queen ' + index}`; errorP.style.color = 'red';
                  lipsyncContestantsDiv.appendChild(errorP);
                 return;
             }
             console.log(`  > Generating ENHANCED display card (V4) for: ${queen.name}`);
            const card = document.createElement('div');
            card.className = 'choice-button-card enhanced vs-card'; // Display only

            // *** CALL SUMMARY FUNCTION (No Warning Logic) ***
            // Pass flags: queen, isLipsync=true (displaying LSFYL context), isMQP=false
            // Pass isCurrentBottom=true
            const summaryDivHTML = generateCardStatsSummaryHTML(queen, true, false, true); // V1.3+ needed

            // *** ASSEMBLE HTML (REMOVED score display) ***
            const cardHTML = `
                 <div class="card-main-info">
                    <img src="${queen.image}" alt="${queen.name}">
                    <div class="name-score-group">
                        <span class="queen-name">${queen.name}</span>
                    </div>
                 </div>
                  ${summaryDivHTML} 
            `;
            card.innerHTML = cardHTML;
            lipsyncContestantsDiv.appendChild(card);

            // Add 'vs' text between cards
            if (index === 0 && lipsyncers.length === 2) {
                 const vsSpan = document.createElement('span'); vsSpan.className = 'vs-text'; vsSpan.textContent = 'vs'; lipsyncContestantsDiv.appendChild(vsSpan);
            }
        });

        // Make the lipsync info section visible
        lipsyncInfoDiv.classList.remove('hidden');
        console.log("%c[PrepareLipsync V4] Setup complete. Enhanced VS cards should be visible.", "color: green;");

    } catch(error) {
        console.error("!!!!!!!! UNEXPECTED ERROR IN prepareLipsync V4 !!!!!!!!", error);
        lipsyncContestantsDiv.innerHTML = `<p style='color:red; font-weight:bold;'>Critical error preparing lipsync display. Check console.</p>`;
        if (lipsyncInfoDiv) lipsyncInfoDiv.classList.remove('hidden'); // Show error
    }

} // === End prepareLipsync V4 (Score Fix) === // // === End prepareLipsync V3 === //// === End prepareLipsync V2 (COMPLETE - RE-VERIFIED) ===

function calculateFinalistPotential(queen) {
    if (!queen || !queen.trackRecord) return -99; // Very low score if invalid

    const wins = queen.wins || 0;
    const bottoms = (queen.trackRecord || []).filter(p => p === 'BTM' || p === 'ELIM').length;
    const highs = queen.highs || 0; // Includes TOP2
    const ppe = queen.ppe || 0;
    const storyline = queen.stats.storyline || 5; // Add storyline influence

    let potentialScore = 0;
    const functionVersion = "V2 [Win/Btm Heavy]";

    // --- Win Impact (Exponential Growth for 3-4 wins) ---
    if (wins === 0) potentialScore -= 10; // Slight penalty for 0 wins
    else if (wins === 1) potentialScore += 5;
    else if (wins === 2) potentialScore += 15;
    else if (wins === 3) potentialScore += 40; // SIGNIFICANT jump for 3 wins
    else if (wins === 4) potentialScore += 70; // HUGE score for 4 wins
    // No bonus beyond 4 wins (handled by cap elsewhere)

    // --- Bottom Penalties (Harsh for > 2) ---
    if (bottoms === 0) potentialScore += 15; // Strong bonus for zero bottoms
    else if (bottoms === 1) potentialScore += 5; // Small bonus
    else if (bottoms === 2) potentialScore -= 15; // Significant penalty starts
    else if (bottoms >= 3) {
        potentialScore -= 15 + (bottoms - 2) * 25; // Increasingly large penalty
    }

    // --- Minor Factors ---
    potentialScore += highs * 1.0; // Highs contribute moderately
    potentialScore += ppe * 0.05;   // PPE contributes slightly
    potentialScore += (storyline - 7.5) * 1.5; // Storyline can nudge +/-

    console.log(`    ${queen.name} FP Score V2: Wins=${wins}, Btms=${bottoms} -> Potential=${potentialScore.toFixed(2)}`);

    return parseFloat(potentialScore.toFixed(2));
}
function calculatePPE(queen) {
    let totalPoints = 0;
    if (!queen || !Array.isArray(queen.trackRecord)) {
        // console.warn("Cannot calculate PPE for queen:", queen ? queen.name : "undefined");
        return 0; // Return 0 if no track record
    }

    // Ensure PLACEMENT_POINTS is accessible
    if (typeof PLACEMENT_POINTS === 'undefined') {
        console.error("CRITICAL ERROR: PLACEMENT_POINTS constant is not defined! Cannot calculate PPE.");
        return 0; // Avoid crashing
    }

    // Loop through each placement in the track record
    queen.trackRecord.forEach((placement, index) => {
        // Skip empty strings or potential placeholders like '-' if any exist
        if (placement && placement.trim() !== '') {
            // Look up the points for this placement in the constant
            // Use || 0 to handle placements not in the map (e.g., maybe IMMUNE or special cases)
            const pointsForPlacement = PLACEMENT_POINTS[placement.trim()] || 0;
            totalPoints += pointsForPlacement;
             // 
        }
    });

    // Return the raw total points. Do NOT average here unless specifically required elsewhere.
    // The variable name 'ppe' historically might imply average, but sorting usually uses total.
    return parseFloat(totalPoints.toFixed(2)); // Return total points, ensure float w/ 2 decimals
}
function incrementEpisode() {
    if (!isFinale) {
        currentEpisode++;
        
    } else {
         
    }
}

/**
 * Executes the specific finale logic (LSFTC or Top 3 Judged).
 * ASSUMES it is called with the CORRECT number of finalists for the chosen format.
 * Assigns WINNER and RUNNER-UP placements.
 * @param {Array<Object>} finalQueensInput - The array of queens who made it to the finale.
 */
function runFinale(finalQueensInput) {
    const finalEpisodeNumber = currentEpisode;
    console.log(`%c Running Finale - Mode: ${gameMode}, Format: ${finaleFormat}, Episode: ${finalEpisodeNumber}`, 'color: purple; font-weight: bold;');
    isFinale = true;

    // --- 1. Setup Finale UI ---
    episodeTitle.textContent = `Grand Finale - Episode ${finalEpisodeNumber}`;
    let challengeText = (finaleFormat === 'LSFTC' ? 'Lipsync For The Crown!' : 'The Final Judgement!');
    if (gameMode === 'allstars10') challengeText = "Top 6 LaLaPaRUza For The Crown!";
    challengeAnnouncement.textContent = `The Final Challenge: ${challengeText}`;
    resultsDisplay.innerHTML = '<p>The final queens prepare...</p>'; resultsDisplay.classList.remove('hidden');
    lipsyncInfo.classList.add('hidden'); rupaulDecision.classList.add('hidden'); rupaulWinnerSelectionUI.classList.add('hidden'); nextEpisodeButton.classList.add('hidden');
    finishSeasonButton.classList.add('hidden'); // Hide until logic completes
    outcomeText.textContent = '';

    // --- 2. Identify Finalists & Validate Count ---
    let finalists = finalQueensInput.filter(q => q && q.isActive);
    let targetSize;
    if (gameMode === 'allstars10') { targetSize = 6; }
    else { targetSize = (finaleFormat === 'LSFTC' ? 4 : 3); if (initialCastSize <= targetSize) targetSize = Math.max(2, initialCastSize); }

    console.log(` Target Finale Size: ${targetSize}, Actual Finalists: ${finalists.length}`);
    if (finalists.length !== targetSize && gameMode !== 'allstars10') { // AS10 handles Top 6 specificially
        console.error(`FATAL FINALE ERROR (Non-AS10)! Expected ${targetSize}, got ${finalists.length}.`);
         // Recovery Logic (Non-AS10)...
         outcomeText.innerHTML = `<p style="color:var(--elim-color);">Error: Incorrect number of finalists (${finalists.length}/${targetSize}). Recovering...</p>`;
         finalists.forEach(q => q.ppe = calculatePPE(q)); finalists.sort((a, b) => (b.ppe || 0) - (a.ppe || 0));
         finalWinner = finalists[0]; finalRunnersUp = finalists.slice(1, targetSize);
         console.warn(` Recovery: Winner: ${finalWinner?.name}, RUs: ${finalRunnersUp.map(q=>q.name).join(', ')}`);
         // Proceed to assign placements directly...
         assignFinalePlacements(finalists, finalWinner, finalRunnersUp, finalEpisodeNumber);
         updateTrackRecordTable(true); finishSeasonButton.classList.remove('hidden'); viewTrackRecordMidButton.disabled = false; viewTrackRecordMidButton.textContent = "View Final Track Record"; return;
    } else if (gameMode === 'allstars10' && finalists.length === 0) {
         console.error("FATAL AS10 FINALE ERROR! No active finalists found for Top 6 LaLa.");
          outcomeText.innerHTML = `<p style="color:var(--elim-color);">Error: No active finalists found for finale.</p>`;
          finalWinner = null; finalRunnersUp = [];
          assignFinalePlacements([], null, [], finalEpisodeNumber); // Assign empty
          updateTrackRecordTable(true); finishSeasonButton.classList.remove('hidden'); return;
    }

    // --- 3. Execute Finale Format Logic ---
    finalists.forEach(q => q.ppe = calculatePPE(q)); // Ensure up-to-date PPE before using
    let determinedWinner = null; let determinedRunnersUp = [];

    if (gameMode === 'allstars10') {
        // --- AS10 Top 6 LaLaPaRuZa ---
        console.log("Executing AS10 Final LaLaPaRuZa...");
        runLaLaPaRuZa(finalists, 'FINALE').then(winnerId => {
             // runLaLaPaRuZa sets finalWinner directly
             if (finalWinner && finalWinner.id === winnerId) {
                  console.log("AS10 Finale Winner Confirmed:", finalWinner.name);
                  // Runners up are set inside runLaLaPaRuZa as well
                  assignFinalePlacements(finalists, finalWinner, finalRunnersUp, finalEpisodeNumber);
                  outcomeText.textContent = `The winner of All Stars 10 is... ${finalWinner.name}!`;
             } else {
                 console.error("AS10 Finale Error: LaLaPaRuZa winner mismatch or not found.");
                 outcomeText.textContent = "Error: Could not determine AS10 winner.";
                 assignFinalePlacements(finalists, null, finalists, finalEpisodeNumber); // Mark all as RU in error state
             }
             // --- Update Final UI (AS10) ---
             updateTrackRecordTable(true); finishSeasonButton.classList.remove('hidden');
             viewTrackRecordMidButton.disabled = false; viewTrackRecordMidButton.textContent = "View Final Track Record";
        }).catch(error => {
            console.error("AS10 Final LaLaPaRuZa execution error:", error);
             outcomeText.textContent = "Error running final tournament.";
              assignFinalePlacements(finalists, null, finalists, finalEpisodeNumber);
             updateTrackRecordTable(true); finishSeasonButton.classList.remove('hidden');
        });
        // IMPORTANT: The function returns HERE for AS10 because runLaLaPaRuZa is async.
         // The rest of the logic (Assign Placements, Update UI) happens inside the .then() block above.
         return;

    } else if (finaleFormat === 'LSFTC') {
         // Existing LSFTC Logic...
          finalists.sort((a, b) => (b.ppe || 0) - (a.ppe || 0));
          let finaleLogLS = [];
          if (finalists.length === 4) { const p1=[finalists[0],finalists[3]], p2=[finalists[1],finalists[2]]; finaleLogLS.push(`Semi 1: ${p1[0].name} vs ${p1[1].name}`); const w1=determineLipsyncWinner(p1[0],p1[1],true); finaleLogLS.push(` -> Win: ${w1.name}`); p1.forEach(q=>delete q.lipsyncScore); finaleLogLS.push(`Semi 2: ${p2[0].name} vs ${p2[1].name}`); const w2=determineLipsyncWinner(p2[0],p2[1],true); finaleLogLS.push(` -> Win: ${w2.name}`); p2.forEach(q=>delete q.lipsyncScore); const finP=[w1,w2]; finaleLogLS.push(`Final: ${finP[0].name} vs ${finP[1].name}`); determinedWinner=determineLipsyncWinner(finP[0],finP[1],true); finaleLogLS.push(` -> Crowned: ${determinedWinner.name}`); finP.forEach(q=>delete q.lipsyncScore); }
          else if (finalists.length === 3) { const p1=[finalists[1],finalists[2]]; finaleLogLS.push(`R1: ${p1[0].name} vs ${p1[1].name}`); const w1=determineLipsyncWinner(p1[0],p1[1],true); finaleLogLS.push(` -> Win: ${w1.name}`); p1.forEach(q=>delete q.lipsyncScore); const finP=[finalists[0],w1]; finaleLogLS.push(`Final: ${finP[0].name} vs ${finP[1].name}`); determinedWinner=determineLipsyncWinner(finP[0],finP[1],true); finaleLogLS.push(` -> Crowned: ${determinedWinner.name}`); finP.forEach(q=>delete q.lipsyncScore); }
          else if (finalists.length === 2) { const finP=[finalists[0],finalists[1]]; finaleLogLS.push(`Final: ${finP[0].name} vs ${finP[1].name}`); determinedWinner=determineLipsyncWinner(finP[0],finP[1],true); finaleLogLS.push(` -> Crowned: ${determinedWinner.name}`); finP.forEach(q=>delete q.lipsyncScore); }
          else { console.error("LSFTC with unexpected finalist count:", finalists.length); determinedWinner=finalists[0]; /* PPE Fallback */ }
          if (determinedWinner) determinedRunnersUp = finalists.filter(q => q.id !== determinedWinner.id);
          resultsDisplay.innerHTML = `<h4>LSFTC Results:</h4><ul>${finaleLogLS.map(l=>`<li>${l}</li>`).join('')}</ul>`;

    } else if (finaleFormat === 'Top3') {
        // Existing Top 3 Judged Logic...
         finalists.forEach(q => { q.finaleScore = (q.ppe * 1.5)+(q.wins * 3)-(q.bottoms * 0.5)+((q.stats.storyline || 5)-5)*(riggory * 0.2)+(Math.random()-0.5)*(2+riggory); q.finaleScore=Math.max(0,q.finaleScore); });
         finalists.sort((a, b) => (b.finaleScore || 0) - (a.finaleScore || 0));
         determinedWinner = finalists[0]; determinedRunnersUp = finalists.slice(1);
         resultsDisplay.innerHTML = `<h4>Final Judgement:</h4><ol>${finalists.map(q=>`<li>${q.name} (${(q.finaleScore||0).toFixed(2)})</li>`).join('')}</ol>`;
         finalists.forEach(q => delete q.finaleScore);
    } else {
         // PPE Fallback
          console.warn(`Unknown finale format '${finaleFormat}'. Using PPE.`);
          finalists.sort((a, b) => (b.ppe || 0) - (a.ppe || 0));
          determinedWinner = finalists[0]; determinedRunnersUp = finalists.slice(1, targetSize);
          resultsDisplay.innerHTML = `<h4>Finale Results (PPE):</h4><ol>${finalists.map(q=>`<li>${q.name} (PPE: ${q.ppe})</li>`).join('')}</ol>`;
    }

    // --- 4. Assign Final Placements & Update Global State (Non-AS10 / Fallback) ---
     if (gameMode !== 'allstars10') {
         finalWinner = determinedWinner; finalRunnersUp = determinedRunnersUp; // Use logic results
          if (finalWinner) {
               assignFinalePlacements(finalists, finalWinner, finalRunnersUp, finalEpisodeNumber);
               outcomeText.textContent = `The winner of the season is... ${finalWinner.name}!`;
          } else { outcomeText.textContent = "Error: Could not determine a winner."; assignFinalePlacements(finalists, null, finalists, finalEpisodeNumber); } // Mark all RU if error
          // --- 5. Update Final UI (Non-AS10) ---
          updateTrackRecordTable(true); finishSeasonButton.classList.remove('hidden');
          viewTrackRecordMidButton.disabled = false; viewTrackRecordMidButton.textContent = "View Final Track Record";
     }

} // --- END runFinale ---
function assignPremierePlacements(queens, counts, context) {
    const assignedIDs = new Set(episodeResults.immune.map(q => q.id));
    // Assign TOP 2
     for (let i = 0; i < counts.numTop2 && i < queens.length; i++) { if (!assignedIDs.has(queens[i].id)) { episodeResults.top2.push(queens[i]); assignedIDs.add(queens[i].id); console.log(`   Premiere -> TOP2 (LSFYW): ${queens[i].name}`);} }
     // Assign HIGH
     let highStart = counts.numTop2; for (let i = highStart; i < highStart + counts.numHigh && i < queens.length; i++) { if (!assignedIDs.has(queens[i].id)) { episodeResults.high.push(queens[i]); assignedIDs.add(queens[i].id); console.log(`   Premiere -> HIGH: ${queens[i].name}`);} }
     // Assign SAFE
     queens.forEach(queen => { if (!assignedIDs.has(queen.id)) { episodeResults.safe.push(queen); assignedIDs.add(queen.id); console.log(`   Premiere -> SAFE: ${queen.name}`); } });
}
function assignStandardPlacements(queens, counts, context) {
    const assignedIDs = new Set(episodeResults.immune.map(q => q.id));
    const assignMode = (context === 'ALLSTARS') ? 'TOP2' : 'WIN'; // Determine top placement type
    const { numWin, numTop2, numHigh, numSafe, numLow, numBtm } = counts;
    const numTopPlaces = (assignMode === 'WIN') ? numWin : numTop2;

    // Assign TOP places (WIN or TOP2)
    for (let i = 0; i < numTopPlaces && i < queens.length; i++) { if (!assignedIDs.has(queens[i].id)) { if(assignMode === 'WIN') episodeResults.win.push(queens[i]); else episodeResults.top2.push(queens[i]); assignedIDs.add(queens[i].id); console.log(`   Std -> ${assignMode}: ${queens[i].name}`);} }
     // Assign HIGH
     let highStart = numTopPlaces; for (let i = highStart; i < highStart + numHigh && i < queens.length; i++) { if (!assignedIDs.has(queens[i].id)) { episodeResults.high.push(queens[i]); assignedIDs.add(queens[i].id); console.log(`   Std -> HIGH: ${queens[i].name}`);} }
     // Assign BOTTOM (from end)
     let bottomsAssigned = 0; for (let i = 0; i < numBtm && (queens.length - 1 - i) >= 0; i++) { const queenIndex = queens.length - 1 - i; const queen = queens[queenIndex]; if (!assignedIDs.has(queen.id)) { episodeResults.btm.push(queen); assignedIDs.add(queen.id); bottomsAssigned++; console.log(`   Std -> BTM: ${queen.name}`);} if (bottomsAssigned >= numBtm) break;}
     // Assign LOW (before bottoms)
     let lowsAssigned = 0; const lowStartIndex = queens.length - numBtm - numLow; for (let i = lowStartIndex; i < lowStartIndex + numLow && i < queens.length; i++) { if (i < 0) continue; const queen = queens[i]; if (!assignedIDs.has(queen.id)) { episodeResults.low.push(queen); assignedIDs.add(queen.id); lowsAssigned++; console.log(`   Std -> LOW: ${queen.name}`);} if (lowsAssigned >= numLow) break;}
     // Assign SAFE (everyone else)
     queens.forEach(queen => { if (!assignedIDs.has(queen.id)) { episodeResults.safe.push(queen); assignedIDs.add(queen.id); console.log(`   Std -> SAFE: ${queen.name}`);} });
}
 // End runFinale
 function assignFinalePlacements(allFinalists, winner, runnersUp, finalEpisodeNumber) {
    console.log(`Assigning finale placements for Ep ${finalEpisodeNumber}. Winner: ${winner?.name}`);

    // --- Determine Correct Episode Index ---
    let finalEpIndex;
     if (gameMode === 'allstars10') {
         finalEpIndex = getAS10TrackRecordIndex(finalEpisodeNumber); // Use helper for final LaLa episode index
     } else if (premiereFormat === 'Split') {
         finalEpIndex = (finalEpisodeNumber - 1) + 1;
     } else {
         finalEpIndex = finalEpisodeNumber - 1;
     }
     finalEpIndex = Math.max(0, finalEpIndex);
     console.log(` -> Using Final Index: ${finalEpIndex}`);


    if (finalEpIndex < 0) { console.error("Cannot assign finale placements - invalid final index:", finalEpIndex); return; }

    const safeRunnersUp = runnersUp || [];

    allFinalists.forEach(finQueen => {
        const queenRef = queens.find(q => q.id === finQueen.id);
        if (!queenRef) { console.warn(`Could not find queen object for finalist ID ${finQueen.id}`); return; }

        // Ensure track record is long enough
        while (queenRef.trackRecord.length <= finalEpIndex) { queenRef.trackRecord.push(''); }

        let finalPlacement = "";
        if (winner && queenRef.id === winner.id) { finalPlacement = "WINNER"; }
        else if (safeRunnersUp.some(ru => ru.id === queenRef.id)) { finalPlacement = "RUNNER-UP"; }
        else if (gameMode === 'allstars10' && !winner && safeRunnersUp.length === 0) {
            // AS10 error state - mark all participants as Runner-Up if no winner found
             finalPlacement = "RUNNER-UP";
              console.warn(` AS10 Finale Assign: Error state - marking ${queenRef.name} as RU`);
        } else {
             finalPlacement = queenRef.trackRecord[finalEpIndex] || "ERR_FIN"; // Keep potential earlier placement or mark error
             console.error(`Error: Finalist ${queenRef.name} not assigned WINNER/RUNNER-UP. Final Index ${finalEpIndex} left as '${finalPlacement}'.`);
        }

        queenRef.trackRecord[finalEpIndex] = finalPlacement; // Assign placement
         // console.log(`   ${queenRef.name} assigned ${finalPlacement} at index ${finalEpIndex}`);

        // Recalculate final PPE *after* assigning WINNER/RUNNER-UP
        queenRef.ppe = calculatePPE(queenRef); // Use the helper for consistency
    });

    console.log(" Finale Placements Assigned.");
}

function determineLipsyncWinner(queen1, queen2, isFinaleLipsync = false) {
    
    // Use similar logic to simulateLipsyncOutcome but potentially different weights for finale
    const queensToScore = [queen1, queen2];

    queensToScore.forEach(queen => {
        let score = 0;
        const lipsyncStat = queen.stats.lipsync || 5;
        const wins = queen.wins || 0;
        const bottoms = queen.bottoms || 0;
        const ppe = queen.ppe || 0;
        const storyline = queen.stats.storyline || 5;

        // Base score
        score += lipsyncStat * (isFinaleLipsync ? 2.0 : 1.8); // Higher base weight in finale

        // Track Record Modifiers (WEIGHTED DIFFERENTLY FOR FINALE)
        let trackRecordModifier = 0;
        trackRecordModifier += wins * (isFinaleLipsync ? 3.5 : (2.5 + riggory * 0.1)); // Wins MORE important in finale
        trackRecordModifier -= bottoms * (isFinaleLipsync ? 1.0 : (2.8 + riggory * 0.15)); // Bottoms LESS detrimental in finale? Or still significant? Let's keep significant.
        trackRecordModifier += ppe * (isFinaleLipsync ? 0.15 : 0.08); // PPE slightly more important

        score += trackRecordModifier;

        // Randomness Factor
        const randomFactor = (Math.random() - 0.5) * (isFinaleLipsync ? (3.0 + riggory * 0.3) : (4.0 + riggory * 0.5)); // Slightly less random in finale? Or more? Let's keep similar.
        score += randomFactor;

        // Storyline/Riggory Factor
        const riggoryFactor = ((storyline - 5) / 5) * (riggory * (isFinaleLipsync ? 0.3 : 0.2)); // Riggory potentially higher impact in finale
        score += riggoryFactor;

        queen.lipsyncScore = parseFloat(score.toFixed(2)); // Store score temporarily
         
    });

    // Determine winner
    const winner = (queen1.lipsyncScore >= queen2.lipsyncScore) ? queen1 : queen2;
    

    // Return the winner object
    return winner;
}

// COMPLETE FUNCTION: showFinalResultsDirect
function showFinalResultsDirect(winner, runnersUp) {
    console.log("Showing Final Results Direct. Winner:", winner?.name, "RunnersUp:", runnersUp?.map(q => q.name));
    isFinale = true; // Ensure state is correct

    // Get elements and CHECK EACH ONE
    const winnerAnnounceContainer = document.getElementById('winner-announcement');
    const winnerImgElement = document.getElementById('winner-img');
    const winnerNameElement = document.getElementById('winner-name'); // Often h2 inside winner-reveal
    const winnerRevealDiv = winnerAnnounceContainer?.querySelector('.winner-reveal'); // Get the container div for name/img
    const revealTextElements = winnerAnnounceContainer?.querySelectorAll('.reveal-text'); // Get text elements
    const finalWordsElement = winnerAnnounceContainer?.querySelector('.final-words'); // Get final text element

    const finalistsContainer = document.getElementById('finalists-display');
    const finalistsTitleElement = document.getElementById('finalists-title');
    const finalistsNamesElement = document.getElementById('finalists-names');

    // Detailed Check - Log specifically which elements are missing
    let allElementsFound = true;
    if (!winnerAnnounceContainer) { console.error("Final Results Error: #winner-announcement NOT FOUND!"); allElementsFound = false; }
    if (!winnerImgElement) { console.error("Final Results Error: #winner-img NOT FOUND!"); allElementsFound = false; }
    if (!winnerNameElement) { console.error("Final Results Error: #winner-name NOT FOUND!"); allElementsFound = false; }
    if (!winnerRevealDiv) { console.error("Final Results Error: .winner-reveal div NOT FOUND!"); allElementsFound = false; }
    // revealTextElements might be multiple, check length if needed
    if (!revealTextElements || revealTextElements.length < 2) { console.warn("Final Results Warning: Fewer than 2 .reveal-text elements found."); }
    if (!finalWordsElement) { console.error("Final Results Error: .final-words element NOT FOUND!"); allElementsFound = false; }

    if (!finalistsContainer) { console.error("Final Results Error: #finalists-display NOT FOUND!"); allElementsFound = false; }
    if (!finalistsTitleElement) { console.error("Final Results Error: #finalists-title NOT FOUND!"); allElementsFound = false; }
    if (!finalistsNamesElement) { console.error("Final Results Error: #finalists-names NOT FOUND!"); allElementsFound = false; }

    if (!allElementsFound) {
        // If essential elements are missing, display error and stop
        if (winnerAnnounceContainer) { // Try to show error in main container if possible
             winnerAnnounceContainer.innerHTML = "<p style='color:red; font-weight:bold;'>UI Error: Critical elements for the final results screen are missing in the HTML structure. Check console for details.</p>";
             // Ensure static text isn't relying on missing sub-elements
             winnerAnnounceContainer.style.textAlign = 'center'; // Basic styling if needed
        }
        if (finalistsContainer) finalistsContainer.classList.add('hidden'); // Hide finalist section on error
        showScreen('finalResults'); // Still show the screen so error is visible
        return; // Exit the function
    }

    // --- If all elements ARE found, proceed with population ---

    // Clear previous finalists display content
    finalistsContainer.classList.add('hidden'); // Hide initially
    finalistsTitleElement.textContent = '';
    finalistsNamesElement.textContent = '';


    if (!winner) {
        // Handle case where there's no winner object (previous error recovery failed?)
        winnerAnnounceContainer.innerHTML = ""; // Clear previous content
        // Display error message using the found elements
        if(winnerNameElement) winnerNameElement.textContent = "Error Determining Winner"; else winnerAnnounceContainer.innerHTML += "<p>Error Determining Winner</p>";
        if(winnerImgElement) winnerImgElement.style.display = 'none';
        if(winnerRevealDiv) winnerRevealDiv.style.display = 'none'; // Hide whole reveal section
        // Keep static text visible? Or clear it? Let's hide reveal/final words
        if (revealTextElements) revealTextElements.forEach(el => el.style.display = 'none');
        if (finalWordsElement) finalWordsElement.style.display = 'none';

        console.error("showFinalResultsDirect called with no winner object.");
        finalistsContainer.classList.add('hidden');

    } else {
        // Populate Winner Section - Make sure all parts are visible again
         if (revealTextElements) revealTextElements.forEach(el => el.style.display = ''); // Restore default display
         if (finalWordsElement) finalWordsElement.style.display = '';
         if(winnerRevealDiv) winnerRevealDiv.style.display = 'inline-block'; // Restore display
         if(winnerImgElement) {
            winnerImgElement.src = winner.image;
            winnerImgElement.alt = winner.name;
            winnerImgElement.style.display = 'block'; // Ensure block display for centering
         }
         if(winnerNameElement) winnerNameElement.textContent = winner.name;

        console.log(`Winner set: ${winner.name}`);


        // Populate Finalists (Runners-Up) Section
        const safeRunnersUp = Array.isArray(runnersUp) ? runnersUp : [];
        if (safeRunnersUp.length > 0) {
             const runnerUpNames = safeRunnersUp.map(q => q.name).join(', ');
             console.log(`Runners-up: ${runnerUpNames}`);
             finalistsTitleElement.textContent = `Condragulations To Our Runner${safeRunnersUp.length > 1 ? 's' : ''}-Up:`;
             finalistsNamesElement.textContent = runnerUpNames;
             finalistsContainer.classList.remove('hidden'); // Show the section
         } else {
            console.log("No runners-up to display.");
             finalistsContainer.classList.add('hidden'); // Keep hidden if no runners-up
         }

        spawnConfetti(); // Visual flair for the winner
    }

    showScreen('finalResults'); // Show the final screen
}

// COMPLETE FUNCTION: updateActiveQueensDisplay
function updateActiveQueensDisplay(activeGroup = null, showPoints = false) {
    const displayDiv = document.getElementById('active-queens-display');
    const container = document.getElementById('active-queens-display-container');

    if (!displayDiv || !container) { console.warn("Active queens display elements not found."); return; }
    displayDiv.innerHTML = ''; // Clear

    if (!queens) { container.classList.add('hidden'); return; }

    const queensToDisplay = activeGroup ? activeGroup : queens.filter(q => q.isActive);

    if (queensToDisplay.length === 0) { container.classList.add('hidden'); return; }
    container.classList.remove('hidden'); // Show container

    queensToDisplay.sort((a, b) => { // Sort primarily by points (if shown), then name
        if (showPoints) {
            const pointsDiff = (b.mqp || 0) - (a.mqp || 0);
            if (pointsDiff !== 0) return pointsDiff;
        }
        return a.name.localeCompare(b.name);
    });

    queensToDisplay.forEach(queen => {
        const card = document.createElement('div');
        card.className = `active-display-card ${queen.isImmune ? 'immune' : ''}`; // Use specific class
        card.title = queen.name + (showPoints ? ` (MQP: ${queen.mqp || 0})` : ''); // Add points to tooltip

        const pointsHTML = (showPoints && queen.mqp !== undefined)
                         ? `<div class="active-card-points ${queen.mqp === 0 ? 'zero' : ''}">${queen.mqp}</div>`
                         : '';
        const immunityHTML = (queen.isImmune && !showPoints) // Show immunity only if points aren't shown? Or maybe points override badge?
                           ? '<div class="immunity-badge small-badge" title="Immune">🛡️</div>' : '';


        card.innerHTML = `
            ${pointsHTML}
            <img src="${queen.image}" alt="${queen.name}">
            <span>${queen.name.split(" ")[0]}</span>
            ${immunityHTML}
        `;
        displayDiv.appendChild(card);
    });
}

async function handleAS10_MQP_Distribution() {
    console.log("%c--- Starting MQP Distribution Process ---", "color: green; font-weight: bold;");
    const donationLogUL = document.querySelector('#mqp-donation-log ul');
    const logContainer = document.getElementById('mqp-donation-log');
    const mqpUI = document.getElementById('mqp-distribution-ui'); // The main container div
    const choiceOptionsDiv = document.getElementById('mqp-choice-options'); // The div holding the cards
    const donorInfoP = document.getElementById('mqp-donor-info');
    const recipientInfoP = document.getElementById('mqp-recipient-info');
    const DEBUG_SLOWDOWN_MS = 2000; // Increase delay significantly for testing (e.g., 2000ms = 2 seconds)

    // Ensure UI elements exist
    if (!donationLogUL || !logContainer || !mqpUI || !choiceOptionsDiv || !donorInfoP || !recipientInfoP) {
        console.error("MQP UI elements missing! Log:", donationLogUL, "Container:", logContainer, "Main UI:", mqpUI, "Choices:", choiceOptionsDiv, "Donor P:", donorInfoP, "Recip P:", recipientInfoP);
        if (mqpDistributionResolver) { mqpDistributionResolver(); mqpDistributionResolver = null; }
        return;
    }

    // Reset UI states
    donationLogUL.innerHTML = '';
    choiceOptionsDiv.innerHTML = '';
    logContainer.classList.add('hidden'); // Hide log initially
    recipientInfoP.textContent = '';

    // --- Make the main MQP container VISIBLE ---
    mqpUI.classList.remove('hidden');
    console.log(` MQP UI (#mqp-distribution-ui) should now be visible. Hidden class removed.`);

    // Error checks for group data
    const currentDonationGroup = allStars10_currentGroup;
    if (!currentDonationGroup) {
        console.error("MQP Error: Missing current donation group!");
        donorInfoP.innerHTML = `<span style="color:red;">Error: Missing Group Info</span>`;
        await new Promise(r => { mqpUI.offsetHeight; setTimeout(r, 1500); });
        mqpUI.classList.add('hidden');
        if (mqpDistributionResolver) { mqpDistributionResolver(); mqpDistributionResolver = null; } return;
    }
    const groupIDs = allStars10_groups[currentDonationGroup];
    if (!groupIDs || groupIDs.length === 0) {
        console.error(`MQP Error: No queen IDs for group ${currentDonationGroup}.`);
        donorInfoP.innerHTML = `<span style="color:red;">Error: No Queens Found</span>`;
        await new Promise(r => { mqpUI.offsetHeight; setTimeout(r, 1500); });
        mqpUI.classList.add('hidden');
        if (mqpDistributionResolver) { mqpDistributionResolver(); mqpDistributionResolver = null; } return;
    }

    donorInfoP.innerHTML = `Preparing donations for <strong>Group ${currentDonationGroup}</strong>...`;
    mqpUI.offsetHeight; // Force reflow
    await new Promise(r => setTimeout(r, DEBUG_SLOWDOWN_MS / 2)); // Initial prep pause

    const donorsInQueue = [...allStars10_mqpDonationQueue];
    allStars10_mqpDonationQueue = [];

    try {
        // --- Loop through each Donor ---
        for (let i = 0; i < donorsInQueue.length; i++) {
            const donationTask = donorsInQueue[i];
            const donor = donationTask.donor;
            choiceOptionsDiv.innerHTML = ''; // Clear cards for new donor

            console.log(`%cStarting donation ${i + 1}/${donorsInQueue.length} for ${donor.name}`, "color: blue");
            donorInfoP.innerHTML = `<strong class="giver-name">${donor.name}</strong> is donating 1 My Queen Point!`;
            recipientInfoP.textContent = `Eligible queens in Group ${currentDonationGroup}:`;
            logContainer.classList.remove('hidden'); // Ensure log is visible

            const potentialRecipientsInGroup = queens.filter(q =>
                groupIDs.includes(q.id) && q.id !== donor.id
            ).sort((a, b) => a.name.localeCompare(b.name));

            console.log(` -> Eligible Recipients: ${potentialRecipientsInGroup.map(q=>q.name).join(', ') || 'None'}`);

            // --- Display Recipient Cards ---
            if (potentialRecipientsInGroup.length === 0) {
                 choiceOptionsDiv.innerHTML = `<p style='font-style:italic; color:#777;'>No other eligible queens in this group.</p>`;
            } else {
                 potentialRecipientsInGroup.forEach(recipient => {
                     const card = document.createElement('div');
                     card.className = 'choice-button-card mqp-recipient';
                     card.dataset.queenId = recipient.id;
                     card.innerHTML = `<img src="${recipient.image}" alt="${recipient.name}"><span>${recipient.name.split(" ")[0]}</span><div class="mqp-card-points">${recipient.mqp || 0}</div>`;
                     choiceOptionsDiv.appendChild(card);
                 });
            }

            console.log(" -> Recipient cards displayed.");
            mqpUI.offsetHeight; // Force reflow to show cards
            await new Promise(r => setTimeout(r, DEBUG_SLOWDOWN_MS)); // ** INCREASED PAUSE to see options **

            // --- Simulate Choice ---
            let chosenRecipient = null;
            if (potentialRecipientsInGroup.length > 0) {
                chosenRecipient = potentialRecipientsInGroup[Math.floor(Math.random() * potentialRecipientsInGroup.length)];
                console.log(` --> ${donor.name} randomly chose: ${chosenRecipient.name}`);
            }

            // --- Process Choice ---
            if (chosenRecipient) {
                const chosenCard = choiceOptionsDiv.querySelector(`.choice-button-card[data-queen-id="${chosenRecipient.id}"]`);
                donorInfoP.innerHTML = `<strong class="giver-name">${donor.name}</strong> donated point to <strong class="receiver">${chosenRecipient.name}</strong>!`;
                recipientInfoP.textContent = `(+1 MQP for ${chosenRecipient.name})`;

                if (chosenCard) {
                    chosenCard.classList.add('mqp-selected'); // Highlight
                    console.log(" -> Highlighted chosen card.");
                } else {
                     console.warn(" -> Could not find card to highlight.");
                }

                mqpUI.offsetHeight; // Force reflow to show highlight + text
                await new Promise(r => setTimeout(r, DEBUG_SLOWDOWN_MS + 500)); // ** INCREASED PAUSE showing highlight **

                // Update Data AFTER pause
                donor.mqp_donated = (donor.mqp_donated || 0) + 1;
                chosenRecipient.mqp = (chosenRecipient.mqp || 0) + 1;
                chosenRecipient.mqp_received = (chosenRecipient.mqp_received || 0) + 1;
                console.log(` -> Points Updated: ${chosenRecipient.name} now ${chosenRecipient.mqp} MQP.`);

                // Update Log
                const logEntry = document.createElement('li');
                logEntry.innerHTML = `<strong class="giver">${donor.name}</strong> donated point to <strong class="receiver">${chosenRecipient.name}</strong>! (${chosenRecipient.mqp} MQP total)`;
                donationLogUL.appendChild(logEntry);
                logContainer.scrollTop = logContainer.scrollHeight;

                if (chosenCard) {
                    chosenCard.classList.remove('mqp-selected'); // Remove highlight
                    mqpUI.offsetHeight; // Reflow after removing highlight
                    console.log(" -> Removed highlight.");
                }

            } else { // Point lost
                donorInfoP.innerHTML = `<strong class="giver-name">${donor.name}</strong> had no eligible recipients. Point lost.`;
                recipientInfoP.textContent = '';
                const logEntry = document.createElement('li'); logEntry.innerHTML = `<strong class="giver">${donor.name}</strong>'s point was lost.`; logEntry.style.fontStyle = 'italic'; logEntry.style.opacity = '0.7'; donationLogUL.appendChild(logEntry); logContainer.scrollTop = logContainer.scrollHeight;
                console.log(` -> Point lost for ${donor.name}.`);

                mqpUI.offsetHeight; // Force reflow
                await new Promise(r => setTimeout(r, DEBUG_SLOWDOWN_MS)); // Pause showing message
            }

             // No need for pause *before* next donor, pause happens at start of loop's next iteration
        } // End for loop

        console.log("--- MQP Distribution Loop Finished ---");
        donorInfoP.textContent = `All points distributed for Group ${currentDonationGroup}.`;
        recipientInfoP.textContent = '';
        choiceOptionsDiv.innerHTML = ''; // Clear cards

        mqpUI.offsetHeight; // Reflow before final pause
        await new Promise(r => setTimeout(r, DEBUG_SLOWDOWN_MS)); // Final pause before hiding
        mqpUI.classList.add('hidden'); // Hide UI

        // Update active queen display AFTER UI is hidden
        updateActiveQueensDisplay(
            queens.filter(q => groupIDs.includes(q.id) && q.isActive), true
        );

    } finally {
        // Ensure resolver is called
        if (mqpDistributionResolver) {
             console.log("%cMQP Resolver found, resolving now in finally block.", "color: green;");
             mqpDistributionResolver(); mqpDistributionResolver = null;
        } else {
             console.warn("MQP Distribution finished (finally), but no active resolver found.");
        }
    }

} // End handleAS10_MQP_Distribution
function announceMergeQualifiers(groupLetter, qualifiers) {
    const ui = document.getElementById('merge-announcement-ui');
    const groupNameSpan = document.getElementById('merge-group-name');
    const listP = document.getElementById('merge-qualifiers-list');

    if (!ui || !groupNameSpan || !listP) {
        console.error("Merge announcement UI elements not found!");
        return;
    }

    groupNameSpan.textContent = `Group ${groupLetter}`;
    if (qualifiers && qualifiers.length > 0) {
        listP.textContent = qualifiers.map(q => q.name).join(', ');
         // Add qualifiers to the global set
         qualifiers.forEach(q => {
            allStars10_mergeQualifiers_IDs.add(q.id);
            q.as10_qualified = true; // Mark the queen object
        });
    } else {
        listP.textContent = "No qualifiers determined.";
    }

    ui.classList.remove('hidden');
    // Keep UI visible until the next actual challenge step starts in runNextEpisodeStep
}
async function runLaLaPaRuZa(participants, type) {
    console.log(`--- Starting LaLaPaRuZa (${type}) with ${participants.length} participants ---`);
    allStars10_lalaparuzaLog = []; // Clear previous log
    document.getElementById('lalaparuza-round-display').innerHTML = ''; // Clear previous rounds UI

    if (!participants || participants.length < 2) {
        console.error(`LaLaPaRuZa Error: Need at least 2 participants. Got ${participants?.length}`);
        if (participants?.length === 1) return participants[0].id; // Only one left, they win by default
        return null;
    }

    let currentContestants = [...participants];
    let round = 1;
    const isFinale = (type === 'FINALE');

    return new Promise(async (resolve) => {
        lalaparuzaResolver = resolve; // Store resolver for potential async steps/pauses

        document.getElementById('lalaparuza-title').textContent = isFinale ? "FINAL LaLaPaRUza Smackdown!" : "Pre-Merge LaLaPaRUza!";
        document.getElementById('lalaparuza-ui').classList.remove('hidden');
        document.getElementById('lalaparuza-winner-announcement').textContent = 'Tournament in progress...';

        while (currentContestants.length > 1) {
            console.log(` LaLa Round ${round}: ${currentContestants.length} queens remaining.`);
            allStars10_lalaparuzaLog.push(`<h5>Round ${round}</h5>`);
            const roundDisplayContainer = document.getElementById('lalaparuza-round-display');
            const roundHeader = document.createElement('h5');
            roundHeader.textContent = `Round ${round}`;
            roundDisplayContainer.appendChild(roundHeader);


            let winners = [];
            let losers = [];
            let shuffledContestants = [...currentContestants].sort(() => 0.5 - Math.random()); // Shuffle each round

            // Pair up contestants
            while (shuffledContestants.length >= 2) {
                const queen1 = shuffledContestants.shift();
                const queen2 = shuffledContestants.shift();
                console.log(`  Matchup: ${queen1.name} vs ${queen2.name}`);

                 // Use determineLipsyncWinner for consistent simulation
                 // Pass `isFinale` to potentially use different weights if desired
                 const winner = determineLipsyncWinner(queen1, queen2, isFinale);
                 const loser = (winner.id === queen1.id) ? queen2 : queen1;
                 delete queen1.lipsyncScore; delete queen2.lipsyncScore; // Clean up temp score

                winners.push(winner);
                losers.push(loser); // Track losers for potential saving later if needed
                console.log(`  -> Winner: ${winner.name}`);

                 // Log matchup and result visually
                 allStars10_lalaparuzaLog.push(`<div class="lalaparuza-matchup">
                     <span class="queen-name ${winner.id === queen1.id ? 'matchup-winner' : 'matchup-loser'}"><img src="${queen1.image}" class="queen-img-small" alt=""> ${queen1.name}</span>
                     <span class="vs">vs</span>
                     <span class="queen-name ${winner.id === queen2.id ? 'matchup-winner' : 'matchup-loser'}"><img src="${queen2.image}" class="queen-img-small" alt=""> ${queen2.name}</span>
                    </div>`);

                // Display matchup result immediately in UI
                const matchupDiv = document.createElement('div');
                matchupDiv.className = 'lalaparuza-matchup';
                matchupDiv.innerHTML = `
                     <span class="queen-name ${winner.id === queen1.id ? 'matchup-winner' : 'matchup-loser'}"><img src="${queen1.image}" class="queen-img-small" alt=""> ${queen1.name}</span>
                     <span class="vs">vs</span>
                     <span class="queen-name ${winner.id === queen2.id ? 'matchup-winner' : 'matchup-loser'}"><img src="${queen2.image}" class="queen-img-small" alt=""> ${queen2.name}</span>`;
                 roundDisplayContainer.appendChild(matchupDiv);

                  await new Promise(r => setTimeout(r, 300)); // Short pause between matchups display

            }

            // Handle odd number of contestants (one gets a bye)
            if (shuffledContestants.length === 1) {
                 const luckyQueen = shuffledContestants.shift();
                 console.log(`  ${luckyQueen.name} gets a bye!`);
                 allStars10_lalaparuzaLog.push(`<p><em>${luckyQueen.name} gets a bye and advances!</em></p>`);
                 winners.push(luckyQueen); // The lucky queen advances
                 // Update UI
                  const byeDiv = document.createElement('p'); byeDiv.innerHTML = `<em>${luckyQueen.name} gets a bye and advances!</em>`; roundDisplayContainer.appendChild(byeDiv);
                  await new Promise(r => setTimeout(r, 300));
             }

            currentContestants = winners; // Winners move to the next round
            round++;
             await new Promise(r => setTimeout(r, 500)); // Pause between rounds display

        } // End while loop (tournament ends when only 1 winner left)

        const finalWinnerObj = currentContestants[0];
        if (finalWinnerObj) {
            console.log(`--- LaLaPaRuZa Winner: ${finalWinnerObj.name} ---`);
             const announcement = document.getElementById('lalaparuza-winner-announcement');
             announcement.innerHTML = `The winner of the ${isFinale ? 'FINAL' : 'Pre-Merge'} LaLaPaRuZa is... <strong id="lalaparuza-winner-name">${finalWinnerObj.name}</strong>!`;

             await new Promise(r => setTimeout(r, 1000)); // Pause before resolving
            document.getElementById('lalaparuza-ui').classList.add('hidden'); // Hide after showing winner
            if(lalaparuzaResolver) lalaparuzaResolver(finalWinnerObj.id); // Resolve the promise
        } else {
             console.error("LaLaPaRuZa Error: No winner determined!");
             document.getElementById('lalaparuza-winner-announcement').textContent = 'Error: Could not determine LaLaPaRuZa winner.';
              await new Promise(r => setTimeout(r, 1000));
              document.getElementById('lalaparuza-ui').classList.add('hidden');
             if(lalaparuzaResolver) lalaparuzaResolver(null); // Resolve with null on error
        }
        lalaparuzaResolver = null; // Clear resolver
    }); // End Promise
}



function spawnConfetti() {
    const confettiContainer = document.body; // Append to body to overlay everything
    const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)', '#ffffff'];
    for (let i = 0; i < 150; i++) { // More confetti!
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw'; // Start across the full width
        confetti.style.width = (Math.random() * 8 + 5) + 'px'; // Vary size
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.opacity = Math.random() * 0.5 + 0.5; // Vary opacity
        confetti.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Slower fall
        confetti.style.animationDelay = Math.random() * 2 + 's'; // Stagger start times
        confettiContainer.appendChild(confetti);

        // Remove confetti element after animation ends to prevent buildup
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

// Modified to create queen name cell with image and add status class
// Replace this ENTIRE function in script.js

// Replace this ENTIRE function in script.js

// Replace this ENTIRE function in script.js

// COMPLETE FUNCTION: updateTrackRecordTable (Final Fix for "INACTIVE" text & class)
function updateTrackRecordTable(isFinalUpdate = false) {
    // console.log("[Debug TR Update V7] Updating Track Record Table. Final:", isFinalUpdate);
    trackRecordBody.innerHTML = ''; // Clear existing body rows

    if (!queens || queens.length === 0) {
        console.log("[Debug TR Update V7] No queen data found.");
        trackRecordHeader.innerHTML = ''; // Also clear header if no queens
        return;
    }

    // --- Calculate Max Episodes/Columns Based ONLY on Existing Data ---
    let maxRecordIndexUsed = -1;
    queens.forEach(q => {
        if (q.trackRecord && q.trackRecord.length > 0) {
            // Find the last index that isn't empty or just whitespace
            const lastMeaningfulIndex = q.trackRecord.findLastIndex(p => p !== undefined && p !== null && String(p).trim() !== '');
            maxRecordIndexUsed = Math.max(maxRecordIndexUsed, lastMeaningfulIndex);
        }
    });
    // The number of columns needed is the highest index found + 1
    // If no meaningful records found yet (e.g., start of season), default to 1 column if episode >= 1
    const displayColumnsCount = (maxRecordIndexUsed === -1 && currentEpisode >= 1) ? 1 : Math.max(1, maxRecordIndexUsed + 1);
    console.log(`[Debug TR Update V7] Max Record Index Used: ${maxRecordIndexUsed}, Calculated Display Columns: ${displayColumnsCount}`);


    // --- Update Header ---
    trackRecordHeader.innerHTML = ''; // Clear previous header
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th class="queen-header-col">Queen</th>'; // Class applied here
    // Generate header cells based on calculated columns
    for (let i = 0; i < displayColumnsCount; i++) {
        headerRow.appendChild(Object.assign(document.createElement('th'), { textContent: `Ep ${i + 1}` }));
    }
    // Append fixed stat headers
    headerRow.innerHTML += '<th>W</th><th>H</th><th>S</th><th>L</th><th>B</th><th>PPE</th><th>Place</th>';
    trackRecordHeader.appendChild(headerRow);

    // --- Sort Queens & Calculate Ranks (No change from V6 logic) ---
    queens.forEach(q => q.ppe = calculatePPE(q)); // Ensure PPE is up-to-date
    const sortedQueens = [...queens].sort((a, b) => { /* ... Your robust sort logic (same as before) ... */
        const aIsWinner=a.trackRecord?.includes("WINNER"); const bIsWinner=b.trackRecord?.includes("WINNER"); if(aIsWinner&&!bIsWinner)return -1; if(!aIsWinner&&bIsWinner)return 1; const aIsRunnerUp=a.trackRecord?.includes("RUNNER-UP"); const bIsRunnerUp=b.trackRecord?.includes("RUNNER-UP"); if(aIsRunnerUp&&!bIsRunnerUp&&!bIsWinner)return -1; if(!aIsRunnerUp&&bIsRunnerUp&&!aIsWinner)return 1; if(aIsRunnerUp&&bIsRunnerUp)return(b.ppe||0)-(a.ppe||0); const aIsActive=a.isActive&&!aIsWinner&&!aIsRunnerUp; const bIsActive=b.isActive&&!bIsWinner&&!bIsRunnerUp; if(aIsActive&&!bIsActive)return -1; if(!aIsActive&&bIsActive)return 1; if(aIsActive&&bIsActive)return(b.ppe||0)-(a.ppe||0); const elimEpA=a.eliminatedInEpisode||(isFinalUpdate ? 999 : 0); const elimEpB=b.eliminatedInEpisode||(isFinalUpdate ? 999 : 0); if(elimEpB!==elimEpA)return elimEpB-elimEpA; return(b.ppe||0)-(a.ppe||0);
    });
    const queenRanks = new Map();
    sortedQueens.forEach((queen, index) => { queenRanks.set(queen.id, index + 1); });

    // --- Populate Table Body ---
    sortedQueens.forEach(queen => {
        const row = document.createElement('tr');

        // --- Append Queen Name Cell (Relies on V7 CSS Fix for alignment) ---
        const nameCell = document.createElement('td');
        nameCell.className = 'queen-name-col'; // Ensure class is set for styling
        const img = document.createElement('img');
        img.src = queen.image || 'placeholder.png'; // Handle missing images gracefully
        img.alt = queen.name;
        img.className = 'track-record-queen-img';
        const nameSpan = document.createElement('span');
        nameSpan.textContent = queen.name;
        nameCell.appendChild(img);
        nameCell.appendChild(nameSpan);
        // Add status class for highlighting/strikethrough etc.
        const isWinner = queen.trackRecord?.includes("WINNER"); const isRunnerUp = queen.trackRecord?.includes("RUNNER-UP"); const isEliminated = !queen.isActive && !isWinner && !isRunnerUp;
        let statusClass = isWinner ? 'status-winner' : isRunnerUp ? 'status-runnerup' : isEliminated ? 'status-eliminated' : 'status-active';
        nameCell.classList.add(statusClass); nameCell.title = isWinner ? 'Winner' : isRunnerUp ? 'Runner-Up' : isEliminated ? `Eliminated Ep ${queen.eliminatedInEpisode || '?'}` : 'Active';
        row.appendChild(nameCell);


        // --- Loop through required DISPLAY COLUMNS ---
        let queenHasBeenEliminatedThisRow = false; // Track elim status within the row loop
        for (let i = 0; i < displayColumnsCount; i++) {
            const cell = document.createElement('td');
            const recordIndex = i;

            let placement = ""; // Initialize placement
            let cellType = 'future'; // Default type
            let textContent = '-'; // Default text for future cells

            // --- Get Placement Data ---
            if (queen.trackRecord && recordIndex < queen.trackRecord.length) {
                placement = (queen.trackRecord[recordIndex] || "").trim(); // Ensure empty strings if data is null/undefined
            }

            // --- Determine Cell State ---
            // 1. Was queen eliminated *in* this episode (based on ELIM placement value)?
            if (placement === "ELIM") {
                  cellType = 'placement';
                  textContent = "ELIM";
                  queenHasBeenEliminatedThisRow = true; // Set flag for subsequent cells in this row
            }
            // 2. Or, check if the ELIM flag is already set from a *previous* cell in this row loop
             else if (queenHasBeenEliminatedThisRow) {
                cellType = 'inactive';
                textContent = ''; // Blank for inactive
             }
            // 3. If not eliminated yet, check if eliminated *before* this episode using the stored elim ep number
             else if (queen.eliminatedInEpisode && (recordIndex + 1) > queen.eliminatedInEpisode) {
                cellType = 'inactive';
                textContent = ''; // Blank for inactive
             }
            // 4. Check for specific format non-participation (e.g., Split Premiere)
             else if (premiereFormat === 'Split' && (recordIndex === 0 || recordIndex === 1)) {
                const wasInGroupA = splitPremiereGroupA_IDs.includes(queen.id); const wasInGroupB = splitPremiereGroupB_IDs.includes(queen.id);
                if ((recordIndex === 0 && !wasInGroupA) || (recordIndex === 1 && !wasInGroupB)) { cellType = 'inactive'; textContent = ''; }
                 // Fall through if participated, will check placement value below
             }
            // 5. AS10 Pre-Merge Non-participation
            else if (gameMode === 'allstars10' && recordIndex >= 0 && recordIndex < 9) { // Indices for pre-merge group eps
                 const groupForThisIndex = recordIndex < 3 ? 'A' : recordIndex < 6 ? 'B' : 'C';
                 if (queen.as10_group && queen.as10_group !== groupForThisIndex) { cellType = 'inactive'; textContent = ''; }
                 // Fall through if participated
            }
            // 6. AS10 Pre-Lala Non-participation (Index 9)
            else if (gameMode === 'allstars10' && recordIndex === 9) {
                // Inactive if they qualified OR didn't win the lala
                if (queen.as10_qualified || (!allStars10_nonQualifiers_IDs.has(queen.id) && allStars10_preMergeLalaWinnerID !== queen.id)) { cellType = 'inactive'; textContent = ''; }
                 // Fall through if participated, checks actual WIN/ELIM placement below
             }

            // 7. If type is still 'future', determine based on actual placement value
            if (cellType === 'future') {
                  const validPlacements = ["WIN", "TOP2", "HIGH", "SAFE", "LOW", "BTM", "IMMUNE", "WINNER", "RUNNER-UP"]; // Exclude ELIM (already checked)
                 if (placement && validPlacements.includes(placement)) {
                      cellType = 'placement';
                      textContent = placement; // Use the actual placement text
                  } else { // Cell is truly future or contains unexpected data
                      cellType = 'future';
                      textContent = (placement === '' ? '-' : '?'); // Default '-' for blank/future
                  }
            }

            // --- Apply Class and FINAL Text (abbreviations, etc.) ---
            cell.textContent = textContent;
            switch(cellType) {
                case 'placement':
                    cell.classList.add(`track-${placement}`); // Base class for styling
                    if (placement === "IMMUNE") cell.textContent = "IMM";
                    else if (placement === "RUNNER-UP") cell.textContent = "RU";
                    break;
                case 'inactive':
                    cell.classList.add('track-inactive'); // Inactive styling
                    cell.textContent = ''; // Explicitly empty
                    break;
                case 'future': // Includes empty strings from record now
                default:
                    cell.classList.add('track-future'); // Future styling
                    cell.textContent = '-'; // Ensure it's '-'
                    break;
            }
            row.appendChild(cell);
        } // --- End of episode column loop ---

        // --- Append Stats and Final Place Cells ---
        const stats = [ queen.wins || 0, queen.highs || 0, queen.safes || 0, queen.lows || 0, queen.bottoms || 0, parseFloat((queen.ppe || 0).toFixed(2)) ];
        stats.forEach(statValue => { const statCell = document.createElement('td'); statCell.textContent = statValue; row.appendChild(statCell); });
        const finalPlaceCell = document.createElement('td'); finalPlaceCell.className = 'final-place-cell';
        const rank = queenRanks.get(queen.id) || '?';
        let displayPlace = (isWinner) ? "WINNER" : (isRunnerUp) ? "RUNNER-UP" : (isEliminated || (queen.isActive && isFinalUpdate)) ? `#${rank}` : "-";
        if (isWinner) finalPlaceCell.classList.add('track-WINNER'); else if (isRunnerUp) finalPlaceCell.classList.add('track-RUNNER-UP'); else if(isEliminated) finalPlaceCell.classList.add('status-eliminated');
        finalPlaceCell.textContent = displayPlace;
        row.appendChild(finalPlaceCell);

        trackRecordBody.appendChild(row); // Append row to table body
    }); // --- End of sortedQueens loop ---
     console.log("[Debug TR Update V7] Table update process complete.");
} // === End of updateTrackRecordTable V7 (Fixes) === // // --- End of updateTrackRecordTable V6 --- // --- End of updateTrackRecordTable V5 --- // --- End of updateTrackRecordTable V4 --- // --- End of updateTrackRecordTable V3 --- // --- End of updateTrackRecordTable ---// --- End of updateTrackRecordTable ---
document.addEventListener('DOMContentLoaded', initializeSimulator);
