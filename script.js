const questions = [
  {
    "question": "Which of the following is NOT a close-packed crystal structure?",
    "options": ["FCC", "BCC", "HCP", "None of the above"],
    "answer": 1 // Index of the correct answer in the options array (starts from 0)
  },
  {
    "question": "The eutectoid reaction in the iron-carbon system occurs at:",
    "options": ["727°C", "912°C", "1148°C", "1495°C"],
    "answer": 0
  },
  {
    "question": "Which of the following is a point defect in a crystal lattice?",
    "options": ["Grain boundary", "Dislocation", "Vacancy", "Phase boundary"],
    "answer": 2
  },
  {
    "question": "Hardenability of steel is assessed by:",
    "options": ["Tensile test", "Impact test", "Jominy end quench test", "Fatigue test"],
    "answer": 2
  },
  {
    "question": "Which of the following is NOT a strengthening mechanism in metals?",
    "options": ["Grain size reduction", "Solid solution strengthening", "Recrystallization", "Strain hardening"],
    "answer": 2
  },
  {
    "question": "The Hall-Petch equation relates:",
    "options": ["Yield strength and grain size", "Tensile strength and strain rate", "Fracture toughness and crack length", "Creep rate and temperature"],
    "answer": 0
  },
  {
    "question": "Which of the following is NOT a type of casting defect?",
    "options": ["Shrinkage porosity", "Cold shut", "Hydrogen embrittlement", "Misrun"],
    "answer": 2
  },
  {
    "question": "The process of removing carbon from pig iron to produce steel is called:",
    "options": ["Smelting", "Refining", "Roasting", "Calcination"],
    "answer": 1
  },
  {
    "question": "Which of the following is a common stainless steel grade?",
    "options": ["1018", "4140", "304", "6061"],
    "answer": 2
  },
  {
    "question": "Which of the following heat treatments is used to improve the machinability of steel?",
    "options": ["Annealing", "Normalizing", "Quenching and tempering", "Spheroidizing"],
    "answer": 3
  },
  {
    "question": "The driving force for grain growth is:",
    "options": ["Reduction in grain boundary energy", "Increase in dislocation density", "Increase in internal stress", "Decrease in vacancy concentration"],
    "answer": 0
  },
  {
    "question": "Which of the following is NOT a type of corrosion?",
    "options": ["Galvanic corrosion", "Stress corrosion cracking", "Erosion corrosion", "Precipitation hardening"],
    "answer": 3
  },
  {
    "question": "The process of coating steel with zinc is called:",
    "options": ["Galvanizing", "Anodizing", "Electroplating", "Painting"],
    "answer": 0
  },
  {
    "question": "Which of the following is a non-ferrous alloy?",
    "options": ["Cast iron", "Stainless steel", "Aluminum alloy", "High-speed steel"],
    "answer": 2
  },
  {
    "question": "The purpose of adding alloying elements to steel is to:",
    "options": ["Improve its mechanical properties", "Enhance its corrosion resistance", "Modify its physical properties", "All of the above"],
    "answer": 3
  },
  {
    "question": "What is the primary function of a blast furnace in steelmaking?",
    "options": ["To refine molten steel", "To reduce iron ore to pig iron", "To cast steel into ingots", "To produce alloying elements"],
    "answer": 1
  },
  {
    "question": "Which of the following is a common method for producing seamless tubes?",
    "options": ["Sand casting", "Extrusion", "Rolling", "Forging"],
    "answer": 1
  },
  {
    "question": "What is the purpose of tempering heat treatment?",
    "options": ["To increase hardness", "To improve ductility and toughness", "To refine grain size", "To induce residual stresses"],
    "answer": 1
  },
  {
    "question": "Which of the following is NOT a type of welding defect?",
    "options": ["Lack of fusion", "Porosity", "Stress corrosion cracking", "Undercut"],
    "answer": 2
  },
  {
    "question": "What is the main alloying element in stainless steel?",
    "options": ["Chromium", "Nickel", "Manganese", "Molybdenum"],
    "answer": 0
  },
  {
    "question": "What is the name of the phase diagram that depicts the equilibrium phases of a binary alloy system as a function of temperature and composition?",
    "options": ["TTT diagram", "Iron-carbon diagram", "Phase equilibrium diagram", "Eutectic diagram"],
    "answer": 2
  },
  {
    "question": "Which of the following is a type of solid solution where the solute atoms replace the solvent atoms in the crystal lattice?",
    "options": ["Interstitial solid solution", "Substitutional solid solution", "Intermetallic compound", "None of the above"],
    "answer": 1
  },
  {
    "question": "What is the name of the process where a metal is heated to a specific temperature and then cooled slowly to relieve internal stresses and soften the material?",
    "options": ["Quenching", "Tempering", "Annealing", "Normalizing"],
    "answer": 2
  },
  {
    "question": "Which of the following is NOT a common method for testing the mechanical properties of metals?",
    "options": ["Tensile test", "Impact test", "Hardness test", "Magnetic particle inspection"],
    "answer": 3
  },
  {
    "question": "What is the name of the phenomenon where a metal undergoes plastic deformation under a constant load over time at elevated temperatures?",
    "options": ["Fatigue", "Creep", "Fracture", "Yielding"],
    "answer": 1
  },
  {
    "question": "Which of the following is a common type of steel used for structural applications?",
    "options": ["Tool steel", "Stainless steel", "Mild steel", "High-speed steel"],
    "answer": 2
  },
  {
    "question": "What is the purpose of adding flux during welding?",
    "options": ["To increase the melting point of the base metal", "To prevent oxidation of the weld pool", "To reduce the electrical conductivity of the base metal", "To increase the viscosity of the weld pool"],
    "answer": 1
  },
  {
    "question": "Which of the following is NOT a common type of heat treatment furnace?",
    "options": ["Induction furnace", "Muffle furnace", "Salt bath furnace", "Blast furnace"],
    "answer": 3
  },
  {
    "question": "What is the name of the process where a metal is deformed plastically at a temperature below its recrystallization temperature?",
    "options": ["Hot working", "Cold working", "Annealing", "Tempering"],
    "answer": 1
  },
  {
    "question": "Which of the following is a common method for joining dissimilar metals?",
    "options": ["Fusion welding", "Friction welding", "Brazing", "Adhesive bonding"],
    "answer": 2
  },
  {
    "question": "What is the name of the heat treatment process used to improve the toughness of hardened steel?",
    "options": ["Annealing", "Normalizing", "Quenching", "Tempering"],
    "answer": 3
  },
  {
    "question": "Which of the following is NOT a common type of corrosion prevention technique?",
    "options": ["Cathodic protection", "Protective coatings", "Inhibitors", "Stress relieving"],
    "answer": 3
  },
  {
    "question": "What is the name of the process used to produce large single crystals of metals?",
    "options": ["Casting", "Powder metallurgy", "Czochralski process", "Zone refining"],
    "answer": 2
  },

{
    "question": "Explain the difference between pearlite and bainite in terms of their microstructure and mechanical properties.",
    "options": [
      "Pearlite is harder and stronger than bainite.",
      "Bainite is formed at higher temperatures than pearlite.",
      "Pearlite has a lamellar structure, while bainite has a needle-like or plate-like structure.",
      "Bainite is softer and more ductile than pearlite."
    ],
    "answer": 2
  },
  {
    "question": "Describe the role of chromium in stainless steel and explain why it provides corrosion resistance.",
    "options": [
      "Chromium increases the strength and hardness of stainless steel.",
      "Chromium forms a protective oxide layer that prevents corrosion.",
      "Chromium reduces the melting point of stainless steel.",
      "Chromium improves the electrical conductivity of stainless steel."
    ],
    "answer": 1
  },
  {
    "question": "What is the difference between ductile fracture and brittle fracture? Explain the factors that influence the ductile-to-brittle transition temperature (DBTT).",
    "options": [
      "Ductile fracture occurs with little or no plastic deformation, while brittle fracture involves significant plastic deformation.",
      "DBTT is higher for FCC metals than for BCC metals.",
      "Increasing grain size generally lowers the DBTT.",
      "Notches and stress concentrations can significantly increase the DBTT."
    ],
    "answer": 3
  },
  {
    "question": "Explain the concept of solid solution strengthening and how it affects the mechanical properties of alloys.",
    "options": [
      "Solid solution strengthening decreases the strength and hardness of alloys.",
      "Solute atoms distort the crystal lattice, hindering dislocation movement and increasing strength.",
      "Solid solution strengthening only occurs in interstitial solid solutions.",
      "Solid solution strengthening has no effect on the ductility of alloys."
    ],
    "answer": 1
  },
  {
    "question": "Describe the process of age hardening (precipitation hardening) and its effect on the strength of aluminum alloys.",
    "options": [
      "Age hardening involves heating an alloy to dissolve all precipitates.",
      "Age hardening decreases the strength of aluminum alloys.",
      "Age hardening involves quenching an alloy to supersaturate the solid solution and then aging to allow precipitation.",
      "Age hardening only occurs in ferrous alloys."
    ],
    "answer": 2
  },
  {
    "question": "What is the difference between austenite, ferrite, and cementite in the iron-carbon system?",
    "options": [
      "Austenite is a BCC iron allotrope, ferrite is an FCC iron allotrope, and cementite is a pure iron phase.",
      "Austenite can dissolve a significant amount of carbon, ferrite has low carbon solubility, and cementite is an iron carbide.",
      "Austenite is stable at low temperatures, ferrite is stable at high temperatures, and cementite is a soft and ductile phase.",
      "Austenite, ferrite, and cementite are all allotropes of iron."
    ],
    "answer": 1
  },
  {
    "question": "Explain the concept of recrystallization and its effect on the microstructure and mechanical properties of metals.",
    "options": [
      "Recrystallization increases the strength and hardness of metals.",
      "Recrystallization involves the formation of new, strain-free grains, leading to lower strength and higher ductility.",
      "Recrystallization occurs only in cold-worked metals.",
      "Recrystallization has no effect on the grain size of metals."
    ],
    "answer": 1
  },
  {
    "question": "Describe the different types of stainless steels and their applications.",
    "options": [
      "Austenitic stainless steels are magnetic and have poor corrosion resistance.",
      "Ferritic stainless steels are non-magnetic and have excellent formability.",
      "Martensitic stainless steels are used in food processing and medical devices.",
      "Duplex stainless steels combine austenitic and ferritic structures for high strength and corrosion resistance."
    ],
    "answer": 3
  },
  {
    "question": "Explain the mechanism of galvanic corrosion and how it can be prevented.",
    "options": [
      "Galvanic corrosion occurs when two similar metals are in electrical contact.",
      "Galvanic corrosion can be prevented by using electrical insulation between dissimilar metals.",
      "The less active metal in a galvanic couple corrodes preferentially.",
      "Galvanic corrosion is not affected by the presence of an electrolyte."
    ],
    "answer": 1
  },
  {
    "question": "What is the difference between fatigue and creep?",
    "options": [
      "Fatigue is time-dependent deformation under constant load, while creep is failure under cyclic loading.",
      "Fatigue occurs at elevated temperatures, while creep occurs at room temperature.",
      "Fatigue is the failure of a material under cyclic loading, while creep is time-dependent deformation under constant load at elevated temperatures.",
      "Fatigue and creep are both types of elastic deformation."
    ],
    "answer": 2
  },

{
    "question": "Which of the following elements is not a common alloying element in steel?",
    "options": ["Carbon", "Chromium", "Zinc", "Manganese"],
    "answer": 2 
  },
  {
    "question": "What is the primary purpose of annealing steel?",
    "options": ["Increase hardness", "Refine grain size", "Soften the metal", "Improve corrosion resistance"],
    "answer": 2
  },
  {
    "question": "Which of the following is a phase present in steel at room temperature?",
    "options": ["Ferrite", "Austenite", "Martensite", "Bainite"],
    "answer": 0
  },
  {
    "question": "In the blast furnace process, what is the role of limestone?",
    "options": ["Reducing agent", "Fuel", "Flux", "Ore"],
    "answer": 2
  },
  {
    "question": "The steel designation '1018' indicates:",
    "options": ["High carbon steel", "Medium carbon steel", "Low carbon steel", "Stainless steel"],
    "answer": 2
  },
  {
    "question": "In an iron-carbon phase diagram, what is the eutectoid composition of steel?",
    "options": ["0.8% Carbon", "4.3% Carbon", "2.1% Carbon", "0.2% Carbon"],
    "answer": 0
  },
  {
    "question": "What process is used to make stainless steel corrosion-resistant?",
    "options": ["Quenching", "Pickling", "Chromium addition", "Cold rolling"],
    "answer": 2
  },
  {
    "question": "Which of the following has the highest hardness?",
    "options": ["Ferrite", "Pearlite", "Martensite", "Austenite"],
    "answer": 2
  },
  {
    "question": "The main constituent of brass is:",
    "options": ["Copper and Zinc", "Copper and Tin", "Copper and Nickel", "Copper and Lead"],
    "answer": 0
  },
  {
    "question": "What is the primary product of a BOF (Basic Oxygen Furnace) in steelmaking?",
    "options": ["Pig iron", "Cast iron", "Steel", "Slag"],
    "answer": 2
  },
  {
    "question": "Which is the main reduction reaction in a blast furnace?",
    "options": ["C + O₂ → CO₂", "Fe₂O₃ + CO → 2Fe + 3CO₂", "C + CO₂ → 2CO", "FeO + CO → Fe + CO₂"],
    "answer": 3
  },
  {
    "question": "What is the maximum carbon content in cast iron?",
    "options": ["2.1%", "4.5%", "1.5%", "6%"],
    "answer": 1
  },
  {
    "question": "Which of the following is an example of a non-ferrous metal?",
    "options": ["Steel", "Brass", "Cast iron", "Wrought iron"],
    "answer": 1
  },
  {
    "question": "Which metal is extracted by the Hall-Héroult process?",
    "options": ["Copper", "Aluminum", "Zinc", "Iron"],
    "answer": 1
  },
  {
    "question": "Hot working of metals results in:",
    "options": ["Strain hardening", "Decreased ductility", "Refined grain structure", "Increased hardness"],
    "answer": 2
  },
  {
    "question": "In which process is coke used as a reducing agent?",
    "options": ["BOF process", "Open-hearth furnace", "Blast furnace", "Electric arc furnace"],
    "answer": 2
  },
  {
    "question": "Bainite is formed by:",
    "options": ["Quenching from the austenitic region", "Slow cooling from the pearlitic region", "Intermediate cooling between martensite and pearlite", "Tempering martensite"],
    "answer": 2
  },
  {
    "question": "The unit cell of austenite is:",
    "options": ["Body-Centered Cubic (BCC)", "Face-Centered Cubic (FCC)", "Hexagonal Close-Packed (HCP)", "Simple Cubic"],
    "answer": 1
  },
  {
    "question": "Which of the following processes improves surface hardness without affecting the core of steel?",
    "options": ["Annealing", "Tempering", "Nitriding", "Normalizing"],
    "answer": 2
  },
  {
    "question": "What is the main function of manganese in steel?",
    "options": ["Increase hardness", "Decrease brittleness", "Improve machinability", "Prevent oxidation"],
    "answer": 1
  },
  {
    "question": "Which test measures the hardness of a material?",
    "options": ["Charpy test", "Rockwell test", "Tensile test", "Fatigue test"],
    "answer": 1
  },
  {
    "question": "The process of heating steel to just below its melting point and then cooling slowly is called:",
    "options": ["Quenching", "Tempering", "Annealing", "Normalizing"],
    "answer": 2
  },
  {
    "question": "In the Hall-Petch relationship, the strength of the material is inversely proportional to:",
    "options": ["Grain size", "Temperature", "Dislocation density", "Carbon content"],
    "answer": 0
  },
  {
    "question": "What is the common heat treatment for increasing toughness in quenched steel?",
    "options": ["Normalizing", "Tempering", "Annealing", "Case hardening"],
    "answer": 1
  },
  {
    "question": "In the powder metallurgy process, sintering is performed to:",
    "options": ["Compact the metal powder", "Alloy the elements", "Increase the temperature", "Bond the powder particles"],
    "answer": 3
  },

{
    "question": "What is the typical carbon content in mild steel?",
    "options": ["0.05-0.25%", "0.30-0.60%", "0.70-0.90%", "1.0-1.5%"],
    "answer": 0
  },
  {
    "question": "What is the primary element added to stainless steel to make it corrosion-resistant?",
    "options": ["Nickel", "Manganese", "Chromium", "Carbon"],
    "answer": 2
  },
  {
    "question": "What does the term 'ductility' refer to in metallurgy?",
    "options": [
      "The ability of a material to resist deformation",
      "The ability of a material to conduct heat",
      "The ability of a material to be stretched into a wire",
      "The ability of a material to break under tension"
    ],
    "answer": 2
  },
  {
    "question": "In metallurgy, what is martensite?",
    "options": [
      "A phase in cast iron",
      "A heat treatment process",
      "A hard phase formed by rapid cooling of steel",
      "A type of stainless steel"
    ],
    "answer": 2
  },
  {
    "question": "What is the main function of tempering in steel heat treatment?",
    "options": [
      "Increase hardness",
      "Relieve internal stresses and reduce brittleness",
      "Improve surface finish",
      "Increase carbon content"
    ],
    "answer": 1
  },
  {
    "question": "What is the eutectic composition of iron-carbon alloy in the phase diagram?",
    "options": ["0.8% Carbon", "2.14% Carbon", "4.3% Carbon", "6.67% Carbon"],
    "answer": 2
  },
  {
    "question": "Which of the following techniques is used to measure the grain size of a metal?",
    "options": ["X-ray diffraction", "Optical microscopy", "Ultrasonic testing", "Eddy current testing"],
    "answer": 1
  },
  {
    "question": "Which metal is typically used as a cathode in electroplating?",
    "options": ["Copper", "Iron", "Zinc", "Nickel"],
    "answer": 3
  },
  {
    "question": "What is the process of forming metal into thin sheets called?",
    "options": ["Forging", "Rolling", "Extrusion", "Casting"],
    "answer": 1
  },
  {
    "question": "Which property describes the ability of a material to absorb energy before fracturing?",
    "options": ["Hardness", "Toughness", "Elasticity", "Strength"],
    "answer": 1
  },
  {
    "question": "Which of the following metals is used in the Galvanization process to prevent corrosion of steel?",
    "options": ["Copper", "Zinc", "Aluminum", "Tin"],
    "answer": 1
  },
  {
    "question": "What is the primary difference between cast iron and steel?",
    "options": ["Amount of manganese", "Amount of carbon", "Amount of chromium", "Amount of silicon"],
    "answer": 1
  },
  {
    "question": "What is the typical carbon content in high carbon steel?",
    "options": ["0.1-0.3%", "0.3-0.6%", "0.6-0.9%", "0.9-1.5%"],
    "answer": 3
  },
  {
    "question": "What is the main purpose of using refractory bricks in a blast furnace?",
    "options": ["To reduce oxidation", "To withstand high temperatures", "To increase the carbon content of steel", "To improve the flow of molten metal"],
    "answer": 1
  },
  {
    "question": "Which test is used to determine the impact resistance of a material?",
    "options": ["Brinell test", "Rockwell test", "Charpy test", "Vickers test"],
    "answer": 2
  },
  {
    "question": "What is the purpose of quenching in metallurgy?",
    "options": ["To anneal the material", "To harden the material", "To reduce grain size", "To improve machinability"],
    "answer": 1
  },
  {
    "question": "Which gas is primarily responsible for decarburization in steelmaking?",
    "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    "answer": 0
  },
  {
    "question": "What is the primary function of a flux in metal refining?",
    "options": ["Reduce oxidation", "Dissolve impurities", "Add strength", "Increase toughness"],
    "answer": 1
  },
  {
    "question": "Which method is commonly used for producing powder metals?",
    "options": ["Rolling", "Sintering", "Forging", "Atomization"],
    "answer": 3
  },
  {
    "question": "What type of phase transformation occurs in steel when it is cooled from the austenitic region to room temperature?",
    "options": ["Martensitic transformation", "Bainitic transformation", "Pearlite formation", "Ferrite formation"],
    "answer": 0
  },
  {
    "question": "Which of the following steels is known for its non-magnetic properties?",
    "options": ["High carbon steel", "Ferritic stainless steel", "Austenitic stainless steel", "Low alloy steel"],
    "answer": 2
  },
  {
    "question": "What is the key process that occurs in sintering?",
    "options": ["Melting of metal powders", "Compaction of metal powders", "Bonding of metal particles through diffusion", "Solidification of molten metal"],
    "answer": 2
  },
  {
    "question": "In the Hall-Petch relationship, the strength of a material is inversely proportional to:",
    "options": ["Grain size", "Temperature", "Carbon content", "Dislocation density"],
    "answer": 0
  },
  {
    "question": "What is the primary function of an electric arc furnace (EAF) in steel production?",
    "options": ["Remove impurities from molten iron", "Melt scrap steel and direct reduced iron (DRI)", "Add alloying elements", "Improve grain structure"],
    "answer": 1
  },
  {
    "question": "What is the result of cold working a metal?",
    "options": ["Increased ductility", "Increased toughness", "Increased strength and hardness", "Decreased grain size"],
    "answer": 2
  }
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.question;

  for (let i = 0; i < current.options.length; i++) {
    const option = document.getElementById(`option${i + 1}`);
    option.textContent = current.options[i];
    option.onclick = () => checkAnswer(i);
    option.classList.remove("correct", "incorrect");
  }

  prevButton.disabled = currentQuestion === 0;
  nextButton.disabled = currentQuestion === questions.length - 1;

  // Enable options when loading a new question
  const options = document.querySelectorAll(".option");
  options.forEach(option => option.disabled = false); 
}

function checkAnswer(selected) {
  const current = questions[currentQuestion];
  const correctOption = document.getElementById(`option${current.answer + 1}`);

  if (selected === current.answer) {
    correctOption.classList.add("correct");
    score++;
  } else {
    correctOption.classList.add("correct");
    const selectedOption = document.getElementById(`option${selected + 1}`);
    selectedOption.classList.add("incorrect");
  }

  const options = document.querySelectorAll(".option");
  options.forEach(option => option.disabled = true);
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}

function prevQuestion() {
  currentQuestion--;
  loadQuestion();
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

// Event listeners
nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", prevQuestion);
submitButton.addEventListener("click", showResult);

// Initial load
loadQuestion();