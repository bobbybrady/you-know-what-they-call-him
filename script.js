const names = [
  "Dies three times on the motorcycle",
  "2 plates 1 picture",
  "Goes on a date",
  "Dr Pepper",
  "That guy with those shoes",
  "Is worried about the track",
  "Is the water fountain",
  "Gets fucked",
  "Loves Jews and blacks 4 trump",
  "Doesn’t understand how there is so much liquid in the carpet",
  "takes the dog out for a walk and a Hawk drops a dead pigeon on his roof but his ladder isn’t tall enough so he has to ask his neighbor for one",
  "lost all ability to laugh cause he is in Mexico",
  "Drug addict",
  "Snorts all of the cocaine",
  "Loves having puke on his hands",
  "Is last in the 3 way 4th tie",
  "Blast it past it",
  "Dr. Rough Putt",
  "That sentence",
  "Coronavirus Joe Biden Leg Hair Is",
  "Gif master",
  "Mr luggage hold",
  "Finishes behind Ghost Higgy",
  "Has heard that about celery",
  "Ryan Matthews",
  "Danny Lindquist",
  "Hates the first period",
  "The only thing I want to do is get a baby gate",
  "Doesn’t mind it sleeps in the dent",
  "Still hates wearing it",
  "Ate the peanuts very slow and sipped on the water",
  "Talks a lot",
  "Mr. Boob",
  "fucking hates Pizza Hut because they always fuck him",
  "2 poops 1 bag",
  "Has seen much larger beetles on this trip",
  "MDicaprio",
  "Has a softball game but it’s at 6",
  "Is",
  "Will be fucking out of town",
  "Is so hip with his Disney dog",
  "Hairy dog no brakes",
  "Won’t have friends that use chip clips",
  "Washes the rental mustang cause he wants to",
  "Hates when Bob thinks it’s Johnny Depp",
  "Keys of phone games",
  "bought a hot and spicy pickle at the store and it just seems like a lot of picked to eat at once",
  "Mr variety",
  "the keys of that one move in chess",
  "Mayor of boob city",
  "Is Hawaii",
  "Goes to church",
  "Big point",
  "Doesn’t want to do anything but that, now",
  "Is Zuby",
  "Mr. phone call",
  "Got an extra pizz",
  "Is angry and hates everything",
  "Government covid",
  "Is fucking retarded",
  "That’s you you are retarded",
  "This is ducking possum me tree",
  "Can’t afford their house cause of Finn",
  "is waiting for this practice session to be over so he’s looking at Facebook",
  "Mr Miss City",
  "Mr Plinkster",
  "Camera on the wood",
  "Doesn’t like the sound of Schoish Maloish",
  "Celebrates by standing in the kitchen",
  "Flat tire",
  "/DMt",
  "Keys of cock fighting",
  "Thinks everything is the croc taxi",
  "Not the best of the week",
  "Just wishes he had the privilege of looking at it",
  "Mr Chonk",
  "Loves halo",
  "Is Emile",
  "Has become halo",
  "Skinned knee",
  "isn’t opposed to playing halo, but he wont play it cause he is opposed",
  "Caitlyn Guy",
  "Crowdy McCrowderson",
  "Knack wonks",
  "That",
  "Diabetes",
  "only watches videos from people he subscribes to",
  "Big hands",
  "I’m boogie toes is Dallas wind",
  "FartBoxCucomber",
  "Ty trek Hook is very flow",
  "Is a truck driver",
  "Sunrise isn’t voices",
  "2 darts",
  "Needs the Maw",
  "100% the orange twam",
  "Bustfasteatass",
  "Ragu mcscrumpleface",
  "Autocorrect has been doing everyone I screwball",
  "Skittle turds",
  "Gets stomped by SusanBot",
  "SatinsA55Hole",
  "Is a sponge",
  "Someone thinks I’m Fanny",
  "I never newspaper",
  "Gillian’s Island Expert",
  "Cluehands",
  "Is retarded and doesn’t listen to the poison ivy signs",
  "2 bows",
  "is going to lunch with Johnny, going to the store, and then changing the oil in his generator",
  "Leechophone (beats a dead horse)",
  "Goes to the brothel",
  "Has sex with that girl in her office cause that hefty girl fainted at the minor league baseball game and had to Uber home",
  "Girls only want to have sex with Marco and not date him",
  "Sees that guy",
  "Likes the toothpaste",
  "3 yeet",
  "Jason Statham",
  "That whole thing",
  "Can’t get yeeted when the pressure is on",
  "Workin in a coal mine",
  "PL GweenR",
  "Mr. Astral",
  "Im rustier gloop",
  "Thinks Gregorio is the name of the tiger in the jungle book",
  "I like Venison",
  "Is going to give Nicolas cage a run for his money",
  "Doesn’t know what half this shit is",
  "Still doesn’t like the sound of Schoish Maloish",
  "Joe Tiden",
  "Appreciates craft beer but also appreciates bud light",
  "Liney McLinerson",
  "Neck Snappin",
  "I spoon bligfur",
  "2 star bucket yeet",
  "Bobby has more money than he knows what to do with",
  "Sorry Mang we accidentally the whole cheese",
  "Big dog",
  "True facts",
  "Doesn’t know the difference between coke and Pepsi",
  "Shoulder stripes",
  "1 hamburger bun",
  "is an art collector and likes the separated pieces but doesn’t like when gravity does it’s thing and makes it look like a penis",
  "Pretzel brain",
  "Slicey McSlicer",
  "Doesn’t confirm his kills",
  "Must’ve missed the first foot loss",
  "dicaptio",
  "Breaker",
  "Doesn’t play competitive",
  "I LIKE UNTUCKIT",
  "I’ll be on at halftime",
  "Pump house",
  "maroc",
  "has a list of things they call me",
  "Boob cut",
  "Has been to Boston",
  "less than 50 percentage lover",
  "Arch mage",
  "That guy from storage wars",
  "Endorses FireMaster",
  "Same shoulder different symptoms",
  "One week no phone calls",
  "Pork rib bundle",
  "Squady",
  "The Nasai scooper",
  "Brain break",
  "830 pot pie",
  "By bill to go",
  "Old Dutch",
  "Bullshit Bullet",
  "Likes that street light",
  "Minds sleeping in the dent",
  "This dent I do mind",
  "Grouchy glasses",
  "Simple Jack",
  "Has seen a million prairie dogs",
  "Likes the DJ",
  "Piss kink",
  "Travis Kelce in a million miles of pussy, Taylor Swift",
  "5G Lover",
  "Always thinks he has enough repel and then doesn’t",
  "Loves Kohls",
  "Bobby’s Grandma",
  "JYHForLife",
  "The table",
  "Aiden",
  "2 kills with the fire grenade",
  "Hates the keyboard"
];
let current = Math.floor(Math.random() * names.length);
let remaining = 5;
const nickname = document.getElementById("nickname");
const number = document.getElementById("number");
const countdown = document.getElementById("countdown");
const list = document.getElementById("name-list");
const resultCount = document.getElementById("result-count");
const empty = document.getElementById("empty");

function showName(index) {
  current = index;
  nickname.classList.add("out");
  setTimeout(() => {
    nickname.textContent = names[current];
    const length = names[current].length;
    const mobileSize = length > 115 ? "18px" : length > 75 ? "21px" : length > 45 ? "25px" : length > 28 ? "30px" : "clamp(32px, 9vw, 42px)";
    nickname.style.setProperty("--mobile-name-size", mobileSize);
    number.textContent = String(current + 1).padStart(3, "0");
    nickname.classList.remove("out");
  }, 180);
  remaining = 5;
  countdown.textContent = remaining;
}

function randomIndex() {
  if (names.length < 2) return 0;
  let next;
  do next = Math.floor(Math.random() * names.length); while (next === current);
  return next;
}

function openTab(tab) {
  document.querySelectorAll(".panel").forEach(panel => panel.classList.toggle("active", panel.id === tab));
  document.querySelectorAll(".nav-button").forEach(button => button.classList.toggle("active", button.dataset.tab === tab));
  if (tab === "archive") document.getElementById("search").focus();
}

function renderList(query = "") {
  const needle = query.trim().toLocaleLowerCase();
  const matches = names.map((name, index) => ({ name, index })).filter(item => item.name.toLocaleLowerCase().includes(needle));
  list.replaceChildren(...matches.map(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.tabIndex = 0;
    li.title = "Use this name";
    li.onclick = () => { showName(item.index); openTab("generator"); };
    li.onkeydown = event => { if (event.key === "Enter") li.click(); };
    return li;
  }));
  resultCount.textContent = matches.length + (matches.length === 1 ? " name" : " names");
  empty.hidden = matches.length !== 0;
}

document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", event => {
  event.preventDefault();
  openTab(button.dataset.tab);
}));
document.getElementById("shuffle").onclick = () => showName(randomIndex());
document.getElementById("random-from-list").onclick = () => { showName(randomIndex()); openTab("generator"); };
document.getElementById("search").oninput = event => renderList(event.target.value);
document.getElementById("nav-count").textContent = "(" + names.length + ")";
const tickerText = names.map(name => "Marco " + name + " DiCaprio").join("  ·  ") + "  ·  ";
const tickerTrack = document.getElementById("ticker-track");
for(let copy=0;copy<2;copy++){const span=document.createElement("span");span.textContent=tickerText;tickerTrack.append(span);}
setInterval(() => {
  if (!document.getElementById("generator").classList.contains("active")) return;
  remaining -= 1;
  countdown.textContent = remaining;
  if (remaining <= 0) showName(randomIndex());
}, 1000);
renderList();
showName(current);
