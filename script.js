const flashcards = [
    { question: "What is the title of your research?", answer: "Automatic Tissue Dispenser Integrated with UV-C Sterilization and Real-Time Tissue Depletion Sensor." },
    { question: "What problem does your study aim to solve?", answer: "It solves hygiene concerns by sterilizing tissues and ensures timely replenishment." },
    { question: "How does your project contribute to public health?", answer: "It prevents germ spread by sterilizing tissues and providing clean dispensing." },
    { question: "What are the objectives of your study?", answer: "1. Design a dispenser with UV-C sterilization. 2. Monitor tissue depletion in real time." },
    { question: "How does your study differ from existing solutions?", answer: "Our system combines UV-C sterilization and tissue monitoring, which existing dispensers lack." },
    { question: "What inspired you to conduct this research?", answer: "The COVID-19 pandemic highlighted the need for better hygiene systems." },
    { question: "What is the primary innovation in your study?", answer: "Integrating UV-C sterilization with real-time tissue monitoring in one system." },
    { question: "Why did you focus on UV-C sterilization?", answer: "UV-C light is highly effective in killing microorganisms without contact." },
    { question: "How does your research address hygiene in public areas?", answer: "It ensures tissues are germ-free and replenished on time, reducing contamination risks." },
    { question: "What are the expected benefits of your study?", answer: "Improved hygiene, reduced tissue wastage, and operational efficiency." },
    { question: "What is the significance of integrating UV-C sterilization with tissue dispensing?", answer: "It ensures tissues are germ-free before use, addressing contamination issues." },
    { question: "How did the COVID-19 pandemic influence your research?", answer: "The pandemic emphasized the importance of hygiene and automation in public spaces." },
    { question: "What existing technologies influenced your design?", answer: "Hand sanitizer dispensers, UV-C light systems, and IoT sensors." },
    { question: "Why is tissue wastage a critical issue to address?", answer: "Tissue wastage increases costs and environmental harm, which our system reduces." },
    { question: "How does your study align with sustainable practices?", answer: "By reducing tissue waste and improving efficiency, we support sustainability." },
    { question: "What gaps in current systems does your study address?", answer: "It addresses the lack of sterilization and real-time monitoring in tissue dispensers." },
    { question: "What research supported your project?", answer: "Studies on UV-C light sterilization and sensor technologies guided our design." },
    { question: "How does your project reduce contamination risks?", answer: "The UV-C light sterilizes tissues, ensuring users only handle germ-free materials." },
    { question: "How does your system ensure operational efficiency?", answer: "The real-time sensor alerts staff about low tissue levels to prevent downtime." },
    { question: "What makes your study relevant today?", answer: "The ongoing need for hygiene and contactless systems post-COVID makes it essential." },
    { question: "How does UV-C sterilization work in your system?", answer: "UV-C light disrupts DNA in microorganisms, making them inactive." },
    { question: "What type of sensor did you use for tissue depletion detection?", answer: "We used an ultrasonic sensor to measure remaining tissue levels." },
    { question: "Why did you choose Arduino for this project?", answer: "Arduino is cost-effective, easy to program, and integrates well with sensors and motors." },
    { question: "How does the dispensing mechanism work?", answer: "A servo motor dispenses tissues one at a time while activating UV-C sterilization." },
    { question: "What safety measures are in place for the UV-C light?", answer: "The UV-C light operates only during dispensing and remains enclosed." },
    { question: "How is the sensor data processed?", answer: "The sensor sends data to the Arduino, which calculates tissue levels and triggers notifications." },
    { question: "What materials were used in the dispenser's construction?", answer: "We used plywood for the enclosure and high-quality electronic components." },
    { question: "How is the system powered?", answer: "The system runs on a 5V DC power supply connected to the Arduino." },
    { question: "How accurate is the tissue depletion sensor?", answer: "The ultrasonic sensor has a ±1 cm margin of error, ensuring high accuracy." },
    { question: "What challenges did you face during development?", answer: "Integrating UV-C light and calibrating the sensor for accuracy were key challenges." },
    { question: "How does the UV-C light activate and deactivate?", answer: "It activates during tissue dispensing and deactivates immediately after." },
    { question: "What alternatives to UV-C light did you consider?", answer: "We considered ozone and chemical sterilization but chose UV-C for efficiency." },
    { question: "How does your system notify staff about low tissue levels?", answer: "A buzzer or LED light alerts staff when the tissue supply is low." },
    { question: "What range does your ultrasonic sensor cover?", answer: "It detects distances from 2 cm to 400 cm, sufficient for this application." },
    { question: "What programming language did you use?", answer: "We used C/C++ for Arduino programming." },
    { question: "What mechanisms prevent tissue jamming?", answer: "The servo motor ensures controlled dispensing, preventing tissue overlap." },
    { question: "How does your system ensure accessibility for all users?", answer: "The dispenser is placed at a height accessible to children and wheelchair users." },
    { question: "How does your system promote sustainability?", answer: "It reduces waste by dispensing controlled amounts of tissue and alerts for refills." },
    { question: "What feedback did users provide during testing?", answer: "Users appreciated the touchless design and the germ-free assurance." },
    { question: "What are the limitations of your system?", answer: "The system may require additional adjustments for non-standard tissue sizes." },
    { question: "What industries can benefit from your system?", answer: "Healthcare, hospitality, transportation, and educational facilities." },
    { question: "What is the response time of your system?", answer: "The system responds to dispensing requests within 1 second." },
    { question: "What happens if the tissue runs out?", answer: "The system alerts staff via LED or buzzer when the tissue supply is low." },
    { question: "What feedback did you receive on your design?", answer: "Users appreciated the intuitive interface and efficient dispensing." },
    { question: "What are the energy requirements of your system?", answer: "The system uses low power, operating efficiently on a 5V power source." },
    { question: "Can your system operate in high-traffic environments?", answer: "Yes, the system is designed for durability and high-volume use." },
    { question: "What is the greatest advantage of your system?", answer: "The combination of germ-free dispensing and real-time monitoring." },
    { question: "What future improvements can you make?", answer: "Adding IoT functionality and solar power options are planned." },
    { question: "How did you validate the sensor's accuracy?", answer: "We conducted repeated trials to test its performance under various conditions." },
    { question: "How does the dispenser reduce tissue wastage?", answer: "The system dispenses controlled amounts of tissue per use, minimizing overuse." },
    { question: "How scalable is your system?", answer: "The system can easily be scaled for large facilities by adding multiple units." },
    { question: "What impact does your system have on staff workload?", answer: "It reduces workload by automating tissue monitoring and alerting for refills." },
    { question: "How does the sensor communicate with the Arduino?", answer: "The sensor sends real-time data to the Arduino via analog signals." },
    { question: "Can your system be integrated with other hygiene systems?", answer: "Yes, the system can be connected with other smart hygiene devices for coordinated action." },
    { question: "How does the Arduino control the servo motor?", answer: "The Arduino sends PWM signals to control the position of the servo motor for tissue dispensing." },
    { question: "How long does the UV-C light remain on during dispensing?", answer: "The UV-C light remains on for a few seconds while the tissue is dispensed." },
    { question: "What materials did you use for the UV-C light housing?", answer: "We used UV-resistant plastic to ensure the housing safely contains the UV-C light." },
    { question: "How is the data logged during testing?", answer: "Sensor data is logged on a connected device and analyzed using serial communication." },
    { question: "How is the dispenser activated?", answer: "The dispenser is activated via a touchless motion sensor or button press." },
    { question: "Can the system handle different tissue sizes?", answer: "The system is optimized for standard tissue sizes but can be adjusted with minor modifications." },
    { question: "How does the system ensure tissue dispensing accuracy?", answer: "The servo motor ensures precise dispensing of tissues one at a time." },
    { question: "How is the system maintained?", answer: "Regular maintenance includes cleaning the sensor, changing the batteries, and checking UV-C light functionality." },
    { question: "What happens if the sensor fails?", answer: "The system will alert the staff if the sensor is not functioning properly." },
    { question: "What is the expected lifespan of the system?", answer: "The system is designed to last for several years with minimal maintenance." },
    { question: "How does your system handle different environmental conditions?", answer: "The system is designed to operate within typical indoor environments with temperature control." },
    { question: "How does the system react to power interruptions?", answer: "The system has a backup battery and automatically resumes operation once power is restored." },
    { question: "What is the typical range for the UV-C light?", answer: "The UV-C light is effective within a 10 cm range of the tissue." },
    { question: "Can the system be customized for specific environments?", answer: "Yes, the system can be adjusted for different environments such as hospitals or restaurants." },
    { question: "What is the cost-effectiveness of your system?", answer: "Our system is cost-effective due to its low power consumption and efficient design." },
    { question: "How does your system compare to traditional dispensers?", answer: "Our system provides UV-C sterilization and real-time monitoring, which traditional dispensers lack." },
    { question: "What certifications does your system have?", answer: "Our system complies with relevant safety and hygiene standards for public environments." },
    { question: "How does the system detect when the tissue has been fully dispensed?", answer: "The sensor detects the position of the tissue, ensuring complete dispensing." },
    { question: "How can the system be improved to work outdoors?", answer: "We plan to introduce weatherproof housing and solar power options." },
    { question: "How does your system ensure user privacy?", answer: "The system operates without capturing personal data, focusing solely on tissue dispensing." },
    { question: "What testing methods did you use?", answer: "We performed functional testing, user feedback collection, and stress tests." },
    { question: "How does the system prevent UV-C exposure to users?", answer: "The UV-C light is shielded during operation, ensuring safety from direct exposure." },
    { question: "What role does automation play in your system?", answer: "Automation reduces human intervention, improving efficiency and hygiene." },
    { question: "How often does the system need to be recalibrated?", answer: "The system is calibrated during initial setup, and recalibration is only necessary if significant errors occur." },
    { question: "How do you plan to market your system?", answer: "We will target sectors like healthcare, schools, and public transportation for adoption." },
    { question: "What kind of maintenance schedule do you recommend?", answer: "We recommend quarterly checks and annual servicing to ensure optimal performance." },
    { question: "What potential upgrades could you make in future versions?", answer: "We plan to integrate AI to predict tissue usage patterns and automate refills." },
    { question: "How does your system integrate with smart buildings?", answer: "The system can be connected to a central smart building network for monitoring and management." },
    { question: "What are the main benefits of UV-C sterilization?", answer: "UV-C sterilization effectively kills germs and viruses without the need for chemicals." },
    { question: "What challenges did you face in integrating the sensor with Arduino?", answer: "Calibrating the sensor and ensuring accurate readings in varying conditions was a challenge." },
    { question: "How does your system contribute to the environment?", answer: "It reduces paper waste and promotes sustainability through efficient tissue use." },
    { question: "What software tools did you use for development?", answer: "We used the Arduino IDE for programming and Fritzing for circuit design." }
];


// Initialize the current card index
let currentIndex = 0;
const flashcardElement = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const progressElement = document.getElementById("progress");
const flipButton = document.getElementById("flip-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

function updateCard() {
    questionElement.innerHTML = `<span class="card-label">Question</span> ${flashcards[currentIndex].question}`;
    answerElement.innerHTML = `<span class="card-label">Answer</span> ${flashcards[currentIndex].answer}`;
    progressElement.style.width = `${(currentIndex + 1) / flashcards.length * 100}%`;

   
    flashcardElement.classList.remove("is-flipped");
    flashcardElement.style.opacity = '0'; 
    flashcardElement.style.transform = 'scale(0.9)';  

    
    setTimeout(() => {
        flashcardElement.style.opacity = '1';  
        flashcardElement.style.transform = 'scale(1)';  
    }, 200);
}

function flipCard() {
    flashcardElement.classList.toggle("is-flipped");
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length; 
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; 
    updateCard();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        toggleDarkModeButton.textContent = "🌞"; 
    } else {
        toggleDarkModeButton.textContent = "🌙";  
    }
}


flipButton.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
prevButton.addEventListener("click", prevCard);
toggleDarkModeButton.addEventListener("click", toggleDarkMode);


updateCard();