// Course Search and Filter

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const courses = document.querySelectorAll(".mission-card");


if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let searchValue = searchInput.value.toLowerCase();

        courses.forEach(course => {

            let text = course.innerText.toLowerCase();

            if(text.includes(searchValue)){
                course.style.display = "block";
            }
            else{
                course.style.display = "none";
            }

        });

    });

}


filterButtons.forEach(button => {

    button.addEventListener("click", function(){

        filterButtons.forEach(btn=>{
            btn.classList.remove("active");
        });

        button.classList.add("active");

        let category = button.innerText.toLowerCase();


        courses.forEach(course=>{

            let content = course.innerText.toLowerCase();


            if(category === "all" || content.includes(category)){

                course.style.display = "block";

            }
            else{

                course.style.display = "none";

            }

        });

    });

});

/* =========================================================
   ASTROLEARN QUIZ
   60 QUESTIONS — 10 FROM EACH COURSE
   ========================================================= */

const questions = [

    /* =====================================================
       COURSE 1 — INTRODUCTION TO ASTRONOMY
       ===================================================== */

    {
        question: "What is astronomy?",
        answers: [
            "The study of Earth's weather",
            "The scientific study of objects and phenomena beyond Earth",
            "The study of Earth's rocks",
            "The study of human biology"
        ],
        correct: 1
    },

    {
        question: "What is a light-year?",
        answers: [
            "The time light takes to reach the Sun",
            "The brightness of a star",
            "The distance light travels in one year",
            "The age of the universe"
        ],
        correct: 2
    },

    {
        question: "Which branch of astronomy studies the physical properties of stars?",
        answers: [
            "Astrophysics",
            "Archaeology",
            "Meteorology",
            "Geology"
        ],
        correct: 0
    },

    {
        question: "What is an astronomical unit (AU) approximately equal to?",
        answers: [
            "The distance from Earth to the Moon",
            "The average distance from Earth to the Sun",
            "The diameter of the Milky Way",
            "The distance from Earth to Jupiter"
        ],
        correct: 1
    },

    {
        question: "Which type of electromagnetic radiation has the shortest wavelength?",
        answers: [
            "Radio waves",
            "Microwaves",
            "Visible light",
            "Gamma rays"
        ],
        correct: 3
    },

    {
        question: "Why do astronomers use telescopes?",
        answers: [
            "To make planets move",
            "To collect and study electromagnetic radiation from space",
            "To change the temperature of stars",
            "To create galaxies"
        ],
        correct: 1
    },

    {
        question: "Which scientist is famous for using telescopic observations to support heliocentrism?",
        answers: [
            "Galileo Galilei",
            "Isaac Newton",
            "Albert Einstein",
            "Charles Darwin"
        ],
        correct: 0
    },

    {
        question: "What does the heliocentric model place at the center of the Solar System?",
        answers: [
            "Earth",
            "The Moon",
            "The Sun",
            "Jupiter"
        ],
        correct: 2
    },

    {
        question: "Which force keeps planets in orbit around the Sun?",
        answers: [
            "Magnetism",
            "Gravity",
            "Friction",
            "Electricity"
        ],
        correct: 1
    },

    {
        question: "What does spectroscopy allow astronomers to study?",
        answers: [
            "Only the size of planets",
            "The composition and physical properties of astronomical objects",
            "Only the distance to the Moon",
            "Only Earth's atmosphere"
        ],
        correct: 1
    },


    /* =====================================================
       COURSE 2 — SOLAR SYSTEM
       ===================================================== */

    {
        question: "Which planet is closest to the Sun?",
        answers: [
            "Venus",
            "Earth",
            "Mercury",
            "Mars"
        ],
        correct: 2
    },

    {
        question: "Which planet is the largest in the Solar System?",
        answers: [
            "Saturn",
            "Jupiter",
            "Neptune",
            "Earth"
        ],
        correct: 1
    },

    {
        question: "Which planet is known for its prominent ring system?",
        answers: [
            "Mars",
            "Venus",
            "Saturn",
            "Mercury"
        ],
        correct: 2
    },

    {
        question: "Which planet has the strongest evidence for liquid water existing on its surface in the past?",
        answers: [
            "Mars",
            "Mercury",
            "Jupiter",
            "Venus"
        ],
        correct: 0
    },

    {
        question: "What is the asteroid belt mainly located between?",
        answers: [
            "Earth and Mars",
            "Mars and Jupiter",
            "Jupiter and Saturn",
            "Venus and Earth"
        ],
        correct: 1
    },

    {
        question: "Which planet is famous for its extremely thick carbon-dioxide atmosphere and very high surface temperature?",
        answers: [
            "Mars",
            "Venus",
            "Neptune",
            "Mercury"
        ],
        correct: 1
    },

    {
        question: "What causes the phases of the Moon?",
        answers: [
            "Earth's shadow always covering part of the Moon",
            "The changing relative positions of the Sun, Earth, and Moon",
            "The Moon producing different amounts of light",
            "Changes in the Moon's size"
        ],
        correct: 1
    },

    {
        question: "Which planet is known for its Great Red Spot?",
        answers: [
            "Saturn",
            "Neptune",
            "Jupiter",
            "Uranus"
        ],
        correct: 2
    },

    {
        question: "What is a comet's tail primarily produced by?",
        answers: [
            "Earth's gravity",
            "Solar radiation and the solar wind acting on material released from the comet",
            "The comet's rotation alone",
            "Jupiter's atmosphere"
        ],
        correct: 1
    },

    {
        question: "Which planet rotates on its side with a very large axial tilt?",
        answers: [
            "Uranus",
            "Mars",
            "Earth",
            "Mercury"
        ],
        correct: 0
    },


    /* =====================================================
       COURSE 3 — LIFE CYCLE OF STARS
       ===================================================== */

    {
        question: "What is a star primarily made of?",
        answers: [
            "Solid rock",
            "Hydrogen and helium plasma",
            "Liquid water",
            "Iron only"
        ],
        correct: 1
    },

    {
        question: "Where are most stars born?",
        answers: [
            "Inside planets",
            "In molecular clouds",
            "Inside black holes",
            "In asteroid belts"
        ],
        correct: 1
    },

    {
        question: "What causes a protostar to become hot enough to begin nuclear fusion?",
        answers: [
            "Gravity causes the material to contract and heat up",
            "It absorbs sunlight",
            "It collides with a planet",
            "Its magnetic field disappears"
        ],
        correct: 0
    },

    {
        question: "What process powers a main-sequence star like the Sun?",
        answers: [
            "Chemical combustion",
            "Nuclear fusion",
            "Nuclear fission",
            "Gravitational radiation only"
        ],
        correct: 1
    },

    {
        question: "What does a star mainly fuse during its main-sequence stage?",
        answers: [
            "Hydrogen into helium",
            "Helium into hydrogen",
            "Iron into hydrogen",
            "Oxygen into carbon only"
        ],
        correct: 0
    },

    {
        question: "What can happen to a Sun-like star after it leaves the main sequence?",
        answers: [
            "It becomes a red giant",
            "It immediately becomes a black hole",
            "It becomes a planet",
            "It disappears instantly"
        ],
        correct: 0
    },

    {
        question: "What event can occur at the end of the life of a massive star?",
        answers: [
            "A supernova",
            "A lunar eclipse",
            "A solar eclipse",
            "A meteor shower"
        ],
        correct: 0
    },

    {
        question: "What is a white dwarf?",
        answers: [
            "The dense remnant of a low- or intermediate-mass star",
            "A young massive star",
            "A galaxy",
            "A type of planet"
        ],
        correct: 0
    },

    {
        question: "What is a neutron star mainly composed of?",
        answers: [
            "Hydrogen gas",
            "Neutrons",
            "Liquid water",
            "Ordinary rock"
        ],
        correct: 1
    },

    {
        question: "What determines whether a stellar remnant can become a black hole?",
        answers: [
            "The original star's mass and the mass of its remnant",
            "Its color alone",
            "Its distance from Earth",
            "The number of planets it had"
        ],
        correct: 0
    },


    /* =====================================================
       COURSE 4 — GALAXIES
       ===================================================== */

    {
        question: "What is a galaxy?",
        answers: [
            "A single star",
            "A gravitationally bound system of stars, gas, dust, dark matter, and other material",
            "A single planet",
            "A cloud inside Earth's atmosphere"
        ],
        correct: 1
    },

    {
        question: "Which galaxy type has prominent spiral arms?",
        answers: [
            "Elliptical",
            "Spiral",
            "Irregular",
            "Ringless"
        ],
        correct: 1
    },

    {
        question: "What is the approximate shape of an elliptical galaxy?",
        answers: [
            "Disk with clear spiral arms",
            "Roughly spherical or ellipsoidal",
            "Perfect cube",
            "Long straight line"
        ],
        correct: 1
    },

    {
        question: "Which type of galaxy has no well-defined regular shape?",
        answers: [
            "Spiral",
            "Elliptical",
            "Irregular",
            "Lenticular only"
        ],
        correct: 2
    },

    {
        question: "What type of galaxy is the Milky Way?",
        answers: [
            "Elliptical galaxy",
            "Spiral galaxy",
            "Irregular galaxy",
            "Ring galaxy"
        ],
        correct: 1
    },

    {
        question: "What is located at the center of the Milky Way?",
        answers: [
            "A supermassive black hole",
            "The Solar System",
            "A neutron star",
            "A giant planet"
        ],
        correct: 0
    },

    {
        question: "What is the name of the supermassive black hole at the center of the Milky Way?",
        answers: [
            "Cygnus X-1",
            "Sagittarius A*",
            "Betelgeuse",
            "Andromeda X"
        ],
        correct: 1
    },

    {
        question: "What is a galaxy cluster?",
        answers: [
            "A group of galaxies gravitationally associated with one another",
            "A group of planets around one star",
            "A collection of asteroids",
            "A single galaxy's spiral arms"
        ],
        correct: 0
    },

    {
        question: "What is the cosmic web?",
        answers: [
            "A network-like large-scale structure of galaxies, clusters, filaments, and voids",
            "A web around a black hole",
            "A planetary ring",
            "The atmosphere of a galaxy"
        ],
        correct: 0
    },

    {
        question: "What can cause galaxies to change their structure over time?",
        answers: [
            "Galaxy mergers and interactions",
            "Only sunlight",
            "Earth's seasons",
            "The Moon's phases"
        ],
        correct: 0
    },


    /* =====================================================
       COURSE 5 — BLACK HOLES
       ===================================================== */

    {
        question: "What is a black hole?",
        answers: [
            "A region of spacetime where gravity is so strong that nothing can escape once inside the event horizon",
            "An empty region of space",
            "A very dark planet",
            "A giant cloud of dust"
        ],
        correct: 0
    },

    {
        question: "What is the event horizon?",
        answers: [
            "The physical surface of a black hole",
            "The boundary beyond which escape from a black hole is impossible",
            "The center of a galaxy",
            "The edge of an accretion disk"
        ],
        correct: 1
    },

    {
        question: "What happens to matter falling toward a black hole?",
        answers: [
            "It can form an accretion disk and become extremely hot",
            "It always becomes a planet",
            "It immediately turns into sunlight",
            "It stops moving outside the black hole"
        ],
        correct: 0
    },

    {
        question: "What is an accretion disk?",
        answers: [
            "A disk of material orbiting and falling toward a massive object",
            "A planet's atmosphere",
            "A type of galaxy",
            "The surface of a neutron star"
        ],
        correct: 0
    },

    {
        question: "How can a black hole affect a nearby star?",
        answers: [
            "Its gravity can alter the star's orbit or pull material from it",
            "It always destroys the star instantly",
            "It makes the star stop emitting light",
            "It turns the star into a planet"
        ],
        correct: 0
    },

    {
        question: "What is a supermassive black hole?",
        answers: [
            "A black hole with a mass ranging from millions to billions of solar masses",
            "A black hole smaller than an atom",
            "A neutron star",
            "A giant planet"
        ],
        correct: 0
    },

    {
        question: "Where are supermassive black holes commonly found?",
        answers: [
            "At the centers of galaxies",
            "Inside planetary rings",
            "Only between planets",
            "Inside asteroids"
        ],
        correct: 0
    },

    {
        question: "How can astronomers detect a black hole that emits no light itself?",
        answers: [
            "By observing its effects on nearby matter and light",
            "By seeing its surface directly",
            "By listening to sound from space",
            "By measuring its temperature with a thermometer"
        ],
        correct: 0
    },

    {
        question: "What is gravitational lensing?",
        answers: [
            "The bending of light by gravity",
            "The reflection of light from planets",
            "The production of light by stars",
            "The absorption of radio waves by Earth"
        ],
        correct: 0
    },

    {
        question: "What happens to time for an observer far away when an object approaches a black hole's event horizon, according to general relativity?",
        answers: [
            "The distant observer can see the object's clock appear increasingly slowed",
            "Time completely stops everywhere in the universe",
            "Time moves backward throughout the galaxy",
            "The object becomes younger"
        ],
        correct: 0
    },


    /* =====================================================
       COURSE 6 — COSMOLOGY
       ===================================================== */

    {
        question: "What does cosmology study?",
        answers: [
            "The origin, evolution, structure, and fate of the universe",
            "Only the planets in our Solar System",
            "Only stars in the Milky Way",
            "Earth's weather"
        ],
        correct: 0
    },

    {
        question: "What does the Big Bang model describe?",
        answers: [
            "The expansion and evolution of the universe from an extremely hot, dense early state",
            "An explosion occurring at one location in empty space",
            "The formation of Earth",
            "The birth of the Solar System"
        ],
        correct: 0
    },

    {
        question: "What happens to the average distance between distant galaxies as the universe expands?",
        answers: [
            "It generally increases",
            "It always decreases",
            "It remains exactly constant",
            "All galaxies move toward the Milky Way"
        ],
        correct: 0
    },

    {
        question: "What is the cosmic microwave background (CMB)?",
        answers: [
            "Radiation left over from the early universe",
            "Radiation produced by modern stars",
            "Light from the Moon",
            "Radio signals from Earth"
        ],
        correct: 0
    },

    {
        question: "Approximately what is the present temperature of the cosmic microwave background?",
        answers: [
            "2.7 K",
            "27 K",
            "270 K",
            "2700 K"
        ],
        correct: 0
    },

    {
        question: "What is dark matter?",
        answers: [
            "Matter inferred from its gravitational effects that does not significantly interact with light",
            "A black hole",
            "Ordinary dark-colored rock",
            "The empty space between galaxies"
        ],
        correct: 0
    },

    {
        question: "What evidence supports the existence of dark matter?",
        answers: [
            "Galaxy rotation curves and gravitational lensing, among other observations",
            "Only the color of the night sky",
            "Earth's seasons",
            "The phases of Venus"
        ],
        correct: 0
    },

    {
        question: "What is dark energy associated with?",
        answers: [
            "The observed accelerated expansion of the universe",
            "The formation of Earth's oceans",
            "The rotation of planets",
            "The brightness of the Sun"
        ],
        correct: 0
    },

    {
        question: "What is a cosmic void?",
        answers: [
            "A large region of space containing relatively few galaxies",
            "The center of a black hole",
            "A type of star",
            "The atmosphere of a planet"
        ],
        correct: 0
    },

    {
        question: "Which observation is strong evidence that the universe has been expanding?",
        answers: [
            "The redshift of distant galaxies",
            "The phases of the Moon",
            "The seasons on Earth",
            "Solar eclipses"
        ],
        correct: 0
    }

];


/* =========================================================
   QUIZ VARIABLES
   ========================================================= */

let currentQuestion = 0;
let score = 0;
let answered = false;


/* =========================================================
   QUIZ ELEMENTS
   ========================================================= */

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".quiz-option");
const progressElement = document.getElementById("progress");
const nextButton = document.getElementById("next-btn");


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    answered = false;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    progressElement.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    answerButtons.forEach((button, index) => {

        button.textContent = current.answers[index];

        button.disabled = false;

        button.style.backgroundColor = "";
        button.style.color = "";
        button.style.borderColor = "";

        button.classList.remove("correct");
        button.classList.remove("wrong");

        button.onclick = function () {
            selectAnswer(index);
        };

    });

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish Quiz →";
    } else {
        nextButton.textContent = "Next Question →";
    }

}


/* =========================================================
   ANSWER SYSTEM
   ========================================================= */

function selectAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    const current = questions[currentQuestion];

    answerButtons.forEach(button => {
        button.disabled = true;
    });


    /* Correct answer */

    answerButtons[current.correct].style.backgroundColor = "#22c55e";
    answerButtons[current.correct].style.color = "white";
    answerButtons[current.correct].style.borderColor = "#22c55e";


    /* Selected answer */

    if (selectedIndex === current.correct) {

        score++;

    } else {

        answerButtons[selectedIndex].style.backgroundColor = "#ef4444";
        answerButtons[selectedIndex].style.color = "white";
        answerButtons[selectedIndex].style.borderColor = "#ef4444";

    }

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

nextButton.addEventListener("click", function () {

    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        finishQuiz();

    }

});


/* =========================================================
   FINISH QUIZ
   ========================================================= */

function finishQuiz() {

    const percentage =
        Math.round((score / questions.length) * 100);


    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", questions.length);
    localStorage.setItem("quizPercentage", percentage);


    if (percentage >= 70) {

        localStorage.setItem("quizPassed", "true");

    } else {

        localStorage.setItem("quizPassed", "false");

    }


    questionElement.textContent =
        "🎉 Quiz Completed!";

    document.getElementById("answers").innerHTML = `
        <div style="
            text-align:center;
            padding:25px;
            font-size:1.2rem;
        ">

            <h2>🌌 Your Result</h2>

            <p>
                You scored
                <strong>${score}/${questions.length}</strong>
            </p>

            <p>
                <strong>${percentage}%</strong>
            </p>

            ${
                percentage >= 70
                ?
                `<p style="color:#22c55e;font-weight:bold;">
                    🎉 Congratulations! You passed the quiz.
                </p>`
                :
                `<p style="color:#ef4444;font-weight:bold;">
                    Keep learning and try again!
                </p>`
            }

        </div>
    `;


    progressElement.textContent =
        "Quiz Complete";

    nextButton.style.display = "none";

}


/* =========================================================
   START QUIZ
   ========================================================= */

loadQuestion();

// ===============================
// GLOBAL LOGIN STATE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const isLoggedIn =
        localStorage.getItem("astroLearnLoggedIn") === "true";

    const authButtons = document.querySelectorAll(".auth-buttons");

    if (!authButtons.length) return;

    let dashboardPath = "pages/dashboard.html";

    const path = window.location.pathname;

    if (path.includes("/pages/course5/") ||
        path.includes("/pages/course6/")) {

        dashboardPath = "../dashboard.html";

    } else if (path.includes("/pages/")) {

        dashboardPath = "dashboard.html";

    }


    authButtons.forEach(function (auth) {

        if (isLoggedIn) {

            auth.innerHTML = `
                <a href="${dashboardPath}" class="login-btn">
                    👤 Dashboard
                </a>

                <button
                    type="button"
                    class="signup-btn logout-btn">
                    Log Out
                </button>
            `;

            const logoutBtn = auth.querySelector(".logout-btn");

            if (logoutBtn) {

                logoutBtn.addEventListener("click", function () {

                    localStorage.removeItem("astroLearnLoggedIn");
                    localStorage.removeItem("astroLearnCurrentUser");
                    localStorage.removeItem("studentName");

                    window.location.reload();

                });

            }

        }

    });

});