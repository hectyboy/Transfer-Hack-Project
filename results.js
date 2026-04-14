const clubsByMajor = {
    engineering: [
        "Trition Engineering Student Council",
        "Tau Beta Pi",
        "Theta Tau (TT)",
        "Yonder Dynamics",
        "Triton AI",
        "Society of Women Engineers (SWE)",
        "Society of Asian Scientists and Engineers (SASE)",
        "National Society of Black Engineers (NSBE)",
        "Society of Hispanic Professional Engineers (SHPE)",
        "Out in Science, Technology, Engineering, and Mathematics (oSTEM)",
        "Engineers for a Sustainable World (ESW)",
        "Engineers Without Borders (EWB)",
    ],

    science: [
        "BioScholars Program at UC San Diego",
        "Biological Sciences Student Association",
        "Saltman Quarterly",
        "Biotech Club at UC San Diego",
        "Alpha Epsilong Delta Pre-Health Professional Honor Society",
        "Society of Physics Students at UC San Diego",
        "Astronomy Club at UC San Diego",
        "American Chemical Society Student Affilates (ACSSA)",
        "MMCB Club",
    ],

    technology: [
        "Computer Science and Engineering Society",
        "Association for Computing Machinery (ACM)",
        "Trition Software Engineering",
        "csforeach",
        "Video Game Development Club (VGDC)",
        "Data Science Student Society",
        "Dataworks at UC San Diego",
        "Triton-AI",
        "Trition XR",
        "Institute of Electrical and Electronic Engineers (IEEE)",
        "International Collegiate Programming Contest",
    ],

    mathematics: [
        "Society of Undergraduate Mathematics Students (SUMS)",
        "Women in Math",
        "Out in Science, Technology, Engineering, and Mathematics (oSTEM)",
        "Trition Quantitative Trading",
        "Hedge Fund Club",
    ],

    business: [
        "Start Up Incubator Club",
        "Business Club",
        "Business Council",
        "Business Leaders Association",
        "United Accounting Society",
        "Minority Business Association",
        "Hedge Fund Club",
        "American Advertising Federation at UC San Diego (AdWave)",
        "Product Management CLub @ UC San Diego",
        "SOLARIA Venture Capital at UC San Diego",
        "Undergraduate Economics Society at UC San Diego",
    ],

    economics: [
        "Undergraduate Economics Society at UC San Diego",
        "Hedge Fund Club",
        "Trition Quantitative Trading",
        "SOLARIA Venture Capital aat UC San Diego",
        "Business Leaders Association",
    ],

    social_sciences: [
        "Sociology Community",
        "Psi Chi and Psychology Club at UCSD",
        "Mood Psychology @ UC San Diego",
        "Undergraduate Communication Society",
        "Mindfulness Club at UC San Diego",

    ],

    psychology: [
        "Psi Chi and Psychology Club at UCSD",
        "Mood Psychology @ UC San Diego",
        "Mindfulness Club at UC San Diego",
        "Psychedelic Club at UC San Diego",
        "Trition NeuroTech",
    ],

    political_science: [
        "Trition Democrats",
        "Mock Trial @ UC San Diego",
        "Moot Court at UC San Diego",
        "Students' Civil Liberties Union",
        "Political Voices for Change at UC San Diego",
        "Minority Law Association",
        "Conversation at UC San Diego",
    ],

    communications: [
        "Undergraduate Communication Society",
        "Social Media Production Lab",
        "Reach @ UC San Diego",
        "American Advertising Federation at UC San Diego (AdWave)",
    ],

    music: [
        "Intermission Orchestra",
        "Room 264 Chamber Music Club",
        "Triton Swing Dance",
    ],

    theater: [
        "Themed Entertainment Association @ UC San Diego",
        "Drag Club @ UC San Diego",
        "Kidz Next Door",
    ],

    visual_arts: [
        "Triton Photography Club",
        "Asians & Pacific Islanders for the Arts and Humanities (APIAH)",
        "Kalimat: Arabic Literature & Arts Society",
        "Design Co.",
        "Design for America (DFA)",
    ],

    arts_and_humanities: [
        "Asians & Pacific Islanders for the Arts and Humanities (APIAH)",
        "Kalimat: Arabic Literature & Arts Society",
        "Design Co.",
        "Design for America (DFA)",
        "Triton Photography Club",
    ],

    urban_studies: [
        "Engineers for a Sustainable World (ESW)",
        "Engineers Without Borders (EWB)",
        "Public Transit Enthusiasts at UC San Diego",
    ],

    public_health: [
        "Alpha Epsilon Delta Pre-Health Professional Honor Society",
        "American Medical Student Association",
        "Engineering World Health",
        "Global Medical Missions Alliance",
        "Medics in Armenia",
        "The Youth Movement Against Alzheimers",
    ],

    undeclared: [
        "First Generation Student Alliance",
        "Triton Engineering Student Council",
        "Business Club",
        "Biological Sciences Student Association",
    ],
};

const clubsByInterest = {
    sports: [
    "Triton Pickleball",
    "Sun God Soccer",
    "Men's Club Basketball at UC San Diego",
    "Women's Club Volleyball at UC San Diego",
    "Triton Boxing",
    "Strides Running Club",
    "Triton Ball",
    "Sun God Archery at UC San Diego",
    "Brazilian Jiu-jitsu at UC San Diego",
    "Taekwondo @ UC San Diego",
    "Wushu Club @ UC San Diego",
    "Kendo Club at UC San Diego",
    "National Collegiate Wrestling Association Team at UC San Diego",
  ],

  music: [
    "Intermission Orchestra",
    "Room 264 Chamber Music Club",
    "Triton Swing Dance",
    "4N01 Dance Team",
    "KOTX",
    "KUT Dance Team",
    "Raas Ruckus Dance Team at UC San Diego",
    "Salsa Society",
    "Muse Dance Company",
    "Ikigai Dance and Company",
  ],

  art: [
    "Triton Photography Club",
    "Design Co.",
    "Design for America (DFA)",
    "Asians & Pacific Islanders for the Arts and Humanities (APIAH)",
    "Kalimat: Arabic Literature & Arts Society",
    "Trinket Box",
    "Anime & Manga Enthusiasts at UC San Diego",
  ],

  technology: [
    "Association for Computing Machinery (ACM)",
    "Triton Software Engineering",
    "Video Game Development Club (VGDC)",
    "Triton-AI",
    "Triton XR",
    "Triton Robotics Inc.",
    "Triton Droids",
    "Triton NeuroTech",
    "Institute of Electrical and Electronics Engineers (IEEE)",
    "International Collegiate Programming Contest",
    "Triton Gaming",
  ],
};

function getRecommendations(major, interests) {
    const seen = new Set();
    const results = [];

    function addClubs(clubs) {
        for (const club of clubs) {
            if (!seen.has(club)) {
                seen.add(club);
                results.push(club);
            }
        }
    }

    if (major && clubsByMajor[major]) {
        addClubs(clubsByMajor[major]);
    }

    for (const interest of interests) {
        if (clubsByInterest[interest]) {
            addClubs(clubsByInterest[interest]);
        }
    }

    return results;
}

function displayResults() {
  const major = localStorage.getItem("major");
  const interests = JSON.parse(localStorage.getItem("interests") || "[]");
  const output = document.getElementById("results-output");
 
  if (!major) {
    output.innerHTML = "<p>No quiz results found. Please take the quiz first.</p>";
    return;
  }
 
  const majorClubs = (clubsByMajor[major] || []).slice(0, 3);

  const seenMajor = new Set(majorClubs);
  const interestClubs = [];
  for (const interest of interests) {
    for (const club of (clubsByInterest[interest] || [])) {
      if (!seenMajor.has(club) && !interestClubs.includes(club)) {
        interestClubs.push(club);
        if (interestClubs.length === 5) break;
      }
    }
    if (interestClubs.length === 5) break;
  }

  // Build the HTML with two separate sections
  let html = "";

  if (majorClubs.length > 0) {
    html += `<h3>Major Clubs:</h3>`;
    html += `<ul style="text-align:left; display:inline-block; margin: 0 auto;">`;
    html += majorClubs.map(club => `<li>${club}</li>`).join("");
    html += `</ul>`;
  }

  if (interestClubs.length > 0) {
    html += `<h3>Interest Clubs:</h3>`;
    html += `<ul style="text-align:left; display:inline-block; margin: 0 auto;">`;
    html += interestClubs.map(club => `<li>${club}</li>`).join("");
    html += `</ul>`;
  }

  output.innerHTML = html;
}

displayResults();