import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts.",
    },
    {
      id: 4,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
    {
      id: 6,
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese!",
    },
    {
      id: 7,
      title: "Why did the math book look sad?",
      content: "Because it had too many problems.",
    },
    {
      id: 8,
      title: "What do you call a bear with no teeth?",
      content: "A gummy bear!",
    },
    {
      id: 9,
      title: "Why did the golfer bring two pairs of pants?",
      content: "In case he got a hole in one!",
    },
    {
      id: 10,
      title: "What do you call a snowman with a six-pack?",
      content: "An abdominal snowman!",
    },
    {
      id: 11,
      title: "What did one wall say to the other?",
      content: "I'll meet you at the corner!",
    },
    {
      id: 12,
      title: "Why can’t your nose be 12 inches long?",
      content: "Because then it would be a foot!",
    },
    {
      id: 13,
      title: "What did the ocean say to the beach?",
      content: "Nothing, it just waved.",
    },
    {
      id: 14,
      title: "Why was the math lecture so long?",
      content: "The professor kept going off on a tangent!",
    },
    {
      id: 15,
      title: "What did the janitor say when he jumped out of the closet?",
      content: "Supplies!",
    },
    {
      id: 16,
      title: "Why did the computer go to the doctor?",
      content: "It had a virus!",
    },
    {
      id: 17,
      title: "Why did the tomato turn red?",
      content: "Because it saw the salad dressing!",
    },
    { id: 18, title: "Why was the broom late?", content: "It swept in!" },
    {
      id: 19,
      title: "Why don’t some couples go to the gym?",
      content: "Because some relationships don’t work out.",
    },
    {
      id: 20,
      title: "Why did the cookie go to the doctor?",
      content: "Because it felt crummy!",
    },
    {
      id: 21,
      title: "Why did the golfer bring extra socks?",
      content: "In case he got a hole in one!",
    },
    {
      id: 22,
      title: "What do you get when you cross a snowman and a dog?",
      content: "Frostbite!",
    },
    {
      id: 23,
      title: "Why did the coffee file a police report?",
      content: "It got mugged!",
    },
    {
      id: 24,
      title: "How does a penguin build its house?",
      content: "Igloos it together!",
    },
    {
      id: 25,
      title: "What do you call a factory that makes okay products?",
      content: "A satisfactory!",
    },
    {
      id: 26,
      title: "What’s orange and sounds like a parrot?",
      content: "A carrot!",
    },
    {
      id: 27,
      title: "Why did the math book look depressed?",
      content: "It had too many problems.",
    },
    {
      id: 28,
      title: "Why couldn’t the leopard play hide and seek?",
      content: "Because he was always spotted!",
    },
    {
      id: 29,
      title: "Why did the chicken go to the séance?",
      content: "To talk to the other side!",
    },
    {
      id: 30,
      title: "Why do bees have sticky hair?",
      content: "Because they use honeycombs!",
    },
    {
      id: 31,
      title: "What did one hat say to the other?",
      content: "Stay here, I'm going on ahead!",
    },
    {
      id: 32,
      title: "Why did the man run around his bed?",
      content: "Because he was trying to catch up on his sleep!",
    },
    {
      id: 33,
      title: "What do you call a dinosaur with an extensive vocabulary?",
      content: "A thesaurus!",
    },
    {
      id: 34,
      title: "Why did the belt go to jail?",
      content: "For holding up a pair of pants!",
    },
    {
      id: 35,
      title: "What’s a skeleton’s least favorite room in the house?",
      content: "The living room!",
    },
    {
      id: 36,
      title: "Why did the banana go to the doctor?",
      content: "Because it wasn’t peeling well!",
    },
    {
      id: 37,
      title: "Why do cows have hooves instead of feet?",
      content: "Because they lactose!",
    },
    {
      id: 38,
      title: "What do you call a pile of cats?",
      content: "A meowtain!",
    },
    {
      id: 39,
      title: "Why can’t you give Elsa a balloon?",
      content: "Because she’ll let it go!",
    },
    {
      id: 40,
      title: "What do you call a sleeping bull?",
      content: "A bulldozer!",
    },
    {
      id: 41,
      title: "Why did the fish blush?",
      content: "Because it saw the ocean’s bottom!",
    },
    {
      id: 42,
      title: "What did the left eye say to the right eye?",
      content: "Between you and me, something smells!",
    },
    {
      id: 43,
      title: "Why are ghosts bad liars?",
      content: "Because they are too transparent!",
    },
    { id: 44, title: "What’s a tornado’s favorite game?", content: "Twister!" },
    {
      id: 45,
      title: "Why did the stadium get hot?",
      content: "All the fans left!",
    },
    {
      id: 46,
      title: "What do you call a belt made of watches?",
      content: "A waist of time!",
    },
    {
      id: 47,
      title: "Why did the picture go to jail?",
      content: "It was framed!",
    },
    {
      id: 48,
      title: "Why was six afraid of seven?",
      content: "Because seven eight nine!",
    },
    {
      id: 49,
      title: "What kind of shoes do ninjas wear?",
      content: "Sneakers!",
    },
    {
      id: 50,
      title: "Why don’t eggs tell jokes?",
      content: "They’d crack each other up!",
    },
    { id: 51, title: "What’s brown and sticky?", content: "A stick!" },
    {
      id: 52,
      title: "Why did the frog take the bus?",
      content: "His car got toad!",
    },
    {
      id: 53,
      title: "What do you call a cow with no legs?",
      content: "Ground beef!",
    },
    {
      id: 54,
      title: "Why did the man put his money in the blender?",
      content: "He wanted to make some liquid assets!",
    },
    {
      id: 55,
      title: "Why do seagulls fly over the ocean?",
      content: "Because if they flew over the bay, they’d be bagels!",
    },
    {
      id: 56,
      title: "Why can’t a leopard hide?",
      content: "Because he’s always spotted!",
    },
    {
      id: 57,
      title: "Why do ducks make great detectives?",
      content: "They always quack the case!",
    },
    {
      id: 58,
      title: "Why don’t programmers like nature?",
      content: "It has too many bugs!",
    },
    {
      id: 59,
      title: "Why did the clock get kicked out of class?",
      content: "It tocked too much!",
    },
    {
      id: 60,
      title: "What did the big flower say to the little flower?",
      content: "Hi, bud!",
    },
    {
      id: 61,
      title: "Why was the cat sitting on the computer?",
      content: "To keep an eye on the mouse!",
    },
    {
      id: 62,
      title: "Why did the barber win the race?",
      content: "He knew all the shortcuts!",
    },
    {
      id: 63,
      title: "Why do vampires seem sick?",
      content: "They’re always coffin!",
    },
    {
      id: 64,
      title: "What did one plate say to the other?",
      content: "Dinner’s on me!",
    },
    {
      id: 65,
      title: "Why was the belt arrested?",
      content: "It held up a pair of pants!",
    },
    {
      id: 66,
      title: "Why did the student eat his homework?",
      content: "Because the teacher said it was a piece of cake!",
    },
    {
      id: 67,
      title: "Why did the music teacher go to jail?",
      content: "Because she got caught with the wrong notes!",
    },
    {
      id: 68,
      title: "Why did the cow go to space?",
      content: "To see the moooon!",
    },
    {
      id: 69,
      title: "Why don’t oysters share their pearls?",
      content: "Because they’re shellfish!",
    },
    {
      id: 70,
      title: "Why did the smartphone go to therapy?",
      content: "It lost its touch!",
    },
    {
      id: 71,
      title: "Why can’t your hand be 12 inches long?",
      content: "Because then it would be a foot!",
    },
    {
      id: 72,
      title: "What did the grape do when it got stepped on?",
      content: "Nothing, it just let out a little wine!",
    },
    { id: 73, title: "What’s Forrest Gump’s password?", content: "1forrest1!" },
    {
      id: 74,
      title: "Why don’t candles ever win races?",
      content: "They always burn out!",
    },
    {
      id: 75,
      title: "What do you call an alligator in a vest?",
      content: "An investigator!",
    },
    {
      id: 76,
      title: "Why do bananas never get lonely?",
      content: "Because they hang out in bunches!",
    },
    {
      id: 77,
      title: "Why did the chicken join the band?",
      content: "Because it had the drumsticks!",
    },
    {
      id: 78,
      title: "Why did the golfer bring an extra shirt?",
      content: "In case he got a hole in one!",
    },
    {
      id: 79,
      title: "Why do elephants never use computers?",
      content: "They’re afraid of the mouse!",
    },
    {
      id: 80,
      title: "What do you call a fish that wears a bowtie?",
      content: "Sofishticated!",
    },
    {
      id: 81,
      title: "Why did the crab never share?",
      content: "Because he’s a little shellfish!",
    },
    {
      id: 82,
      title: "What kind of music do mummies listen to?",
      content: "Wrap music!",
    },
    {
      id: 83,
      title: "Why don’t koalas count as bears?",
      content: "They don’t have the koalafications!",
    },
    {
      id: 84,
      title: "Why did the duck get bad grades?",
      content: "Because he was always quacking jokes!",
    },
    {
      id: 85,
      title: "Why did the police arrest the turkey?",
      content: "They suspected fowl play!",
    },
    {
      id: 86,
      title: "Why did the man put his car in the oven?",
      content: "He wanted a hot rod!",
    },
    {
      id: 87,
      title: "What do you call a boomerang that doesn’t come back?",
      content: "A stick!",
    },
    { id: 88, title: "What did zero say to eight?", content: "Nice belt!" },
    {
      id: 89,
      title: "Why did the scarecrow keep getting promoted?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 90,
      title: "Why did the fish blush?",
      content: "Because it saw the ocean’s bottom!",
    },
    {
      id: 91,
      title: "Why did the broom get a promotion?",
      content: "It swept the competition!",
    },
    {
      id: 92,
      title: "Why did the student bring a ladder to school?",
      content: "He wanted to go to high school!",
    },
    {
      id: 93,
      title: "Why did the cow sit down at the computer?",
      content: "To keep an eye on the moooouse!",
    },
    {
      id: 94,
      title: "Why did the chicken sit on the egg?",
      content: "To keep it warm!",
    },
    {
      id: 95,
      title: "Why did the spider go to the computer?",
      content: "To check his web site!",
    },
    {
      id: 96,
      title: "Why did the orange stop halfway up the hill?",
      content: "It ran out of juice!",
    },
    {
      id: 97,
      title: "Why did the bicycle stand up by itself?",
      content: "Because it was two-tired!",
    },
    {
      id: 98,
      title: "Why do hummingbirds hum?",
      content: "Because they don’t know the words!",
    },
    {
      id: 99,
      title: "Why did the tomato turn red?",
      content: "Because it saw the salad dressing!",
    },
    {
      id: 100,
      title: "Why did the moon skip dinner?",
      content: "It was already full!",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
