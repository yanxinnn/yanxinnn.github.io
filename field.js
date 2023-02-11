//** Variables **********

//Background
var gradientRange = 80;

// Player Animation
var lastKey = "";
var playerIdle1 = "images/characters/playerIdle1.png";
var playerIdle2 = "images/characters/playerIdle2.png";
var playerIdle3 = "images/characters/playerIdle3.png";
var playerIdle;
var playerRun1 = "images/characters/playerRun1.png";
var playerRun2 = "images/characters/playerRun2.png";
var playerRun3 = "images/characters/playerRun3.png";
var playerRun4 = "images/characters/playerRun4.png";
var playerRun;
var staticMoveSpeed = 6.5;
var moveSpeed = staticMoveSpeed;
var jump = false;
var moved = false;

// Characters
var yanxinIdle1 = "images/characters/yanxinIdle1.png";
var yanxinIdle2 = "images/characters/yanxinIdle2.png";
var yanxinIdle3 = "images/characters/yanxinIdle3.png";
var yanxinIdle;

// Text
var yanxinTexts = [
  "Hi! Welcome to my portfolio! Feel free to take a look around!",
  "Use the teleporters to my right to travel to different areas faster!",
  "Glad to have you here!",
  "Where are these petals coming from?",
  "Mouths don't exist in this world",
  "I'm always adding new things to this world. Come by again soon!",
  "*bounce bounce bounce*",
  "Don't forget to drink water!",
  "The sky isn't blue, it's actually #90c7f7🤓"
]
var firstGreeting = false;
var firstGreetingFinished = false;
var greetingUsed = true;
var randomText = "";
var chatCounter = 0;
var chatTimer = 0;
var globalTimer = 0;
var hoverAmnt = 0;

// Sounds
var snd_windyPetals;
var continueSound = false;

// Environment
var numOfPlatforms = 80;
var platformsGroup;
var middlePlatform; // where camera snaps to following player
var endPlatform = 63; 
var groundTopLeft;
var groundBottomLeft;
var groundTop;
var groundBot;
var grass;
var dirt;
var petal;
var petalsGroup;
var pinkPetal;
var grassBlade;
var grassblade;
var grassBlade1 = "images/environment/grassblade1.png";
var grassBlade2 = "images/environment/grassblade2.png";
var grassBlade3 = "images/environment/grassblade3.png";
var grassBlade4 = "images/environment/grassblade4.png";
var grassBlade5 = "images/environment/grassblade5.png";
var whiteTpFrames;
var whiteTp1 = "images/environment/whiteTp1.png";
var whiteTp2 = "images/environment/whiteTp2.png";
var whiteTp3 = "images/environment/whiteTp3.png";
var beginningTp;
var beginningSection;
var threeDTp;
var blueTpFrames;
var blueTp1 = "images/environment/blueTp1.png";
var blueTp2 = "images/environment/blueTp2.png";
var blueTp3 = "images/environment/blueTp3.png";
var threeDSection;
var uiUxTp;
var greenTpFrames;
var greenTp1 = "images/environment/greenTp1.png";
var greenTp2 = "images/environment/greenTp2.png";
var greenTp3 = "images/environment/greenTp3.png";
var uiUxSection;
var gameTp;
var redTpFrames;
var redTp1 = "images/environment/redTp1.png";
var redTp2 = "images/environment/redTp2.png";
var redTp3 = "images/environment/redTp3.png";
var gameSection;
var videoTp;
var purpleTpFrames;
var purpleTp1 = "images/environment/purpleTp1.png";
var purpleTp2 = "images/environment/purpleTp2.png";
var purpleTp3 = "images/environment/purpleTp3.png";
var videoSection;

var tpLabelTextHeight = 70;
var tpLabelChatboxHover = 78;
var tpInstructionChatboxHover = 132;
var tpInteractTextHover = -110;

// UI/UX
var slideNum = 0;
var dotCount = 0;
var currentSlides;
var currentSlidesName;
var dotUpdated = false;
var newSlides = true;
var newSlide = true;

var floatItFrames;
var floatIt1 = "images/environment/floatItFountain1.png";
var floatIt2 = "images/environment/floatItFountain2.png";
var floatIt3 = "images/environment/floatItFountain3.png";
var floatIt4 = "images/environment/floatItFountain4.png";
var floatItNotes;
var floatItSection;
var floatItSlides = [
  "images/slides/floatItTrailer.mov",
  "images/slides/floatItQuestions.png",
  "images/slides/floatItUserResearch.png",
  "images/slides/floatItCompetitor.png",
  "images/slides/floatItMoscow.png",
  "images/slides/floatIt01.png",
  "images/slides/floatIt02.png",
  "images/slides/floatIt03.png",
  "images/slides/floatItDocumentation1.png",
  "images/slides/floatItDocumentation2.mov"
]
var aboutFloatItNotes = [
  "Float-it Notes - Float Your Stress Away <br><br> \
  <div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Chrome Extension, Productivity</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>HTML/CSS, Javascript, Adobe Photoshop, Medibang Paint</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Front-End Development, UI Design, UX Research, Graphic Design</div></div><br>\
  <button class='slidesLink' onclick=\"window.open('https://github.com/yanxinnn/float-it-notes','_blank')\">View Github Repository</button><br> \
  <div class='projectSubtitles'>The Problem</div>Staying on track with classes, work, meetings, assignments, and deadlines is hard. It's stressful enough when life seems to have it out for you and throws all the lemons it's got at you. But on top of that, you have to deal with schoolwork, work-work, life-work, all the things you need to work on, but for some reason, it's just not working out. <br><br><div class='projectSubtitles'>The Solution</div>I decided to tackle this great woe of our generation by building a chrome extension that helps users stay afloat in the hecticity of their everyday by providing them with a sanctuary in their New Tab page where they can stay organized, motivated, and sane, with light-hearted aesthetics, daily inspirational quotes, and built-in task management tools. <br><br>Users store their tasks as bottles that get added onto their New Tab page's waterscape and can view/update their tasks throughout the day. <br><br>Features include a time/date display, planner functionalities (create/edit/delete tasks, create/edit/delete subjects, progress tracker for tasks, and customizable color coded subjects), hand-drawn images and animations, and daily inspirational quotes.<br><br>This was my undergrad Senior Capstone Project that I plan to release onto the Chrome Web Store and is for those who need a planner and appreciate a bit of playfulness throughout their daily chrome browsing experience!<br><br><div class='projectSubtitles'>The Process</div>To create Float-it Notes, I: <br><div class='descriptionsIndent'>○ Conducted user research amongst 14-25 year olds to learn their planner usage and habits<br>○ Analyzed competitor tools and their funcitonalities<br>○ Conceptualized an alternative planner design that was whimsical and unique<br>○ Created and drew graphical assets for user interface<br>○ Designed and developed working prototype of chrome extension</div>",

  "My target audience is Chrome users on laptops/desktops ages 14-25. My initial user research goal was to find out my target audience's general online habits, their usage of planners, if any (physical and/or digital), their favorite aspects of their current solution, and parts of their current solution that don’t work for them. <br><br>These are the user research questions that I asked participants (ages 16-23) during one-on-one interviews.",

  "From my user research, I was able to understand who popular competitors are for futher competitive analysis, important planner functionalities that users preferred, and what tools are considered “fluff” and/or unnecessary by a majority of them. <br><br>Here are some of the big takeaways from the interviews: <br><div class='descriptionsIndent'>1. Most of the participants use a digital planner with a few using a mix of both/only physical planners. Most of the digital planner users used Google Calenders, Notes app, or Trello to keep track of their schedules and to-do lists. <br><br>2. Benefits of using digital planners for participants include ease of organization (pre-formatted unlike physical planners), easy access on the phone/computer, being able to see a daily/weekly view of their schedule, a place to have important links, and reminders. Pain points of using digital planners include the lack of customization outside of text boxes, an overwhelming amount of tools that go unused, and the lack of sorting by subject/groups. <br><br>3. Benefits of physical planners include the freedom of formatting (not prestructured like digital planners), ability to add creative non-text additions, and a space for brain dump. Pain points include not being able to edit tasks like digital planners, it being harder to find what you’re looking for in all the pages, and needing to carry it around everywhere.",

  "Here are some of the competitors I researched that take over the New Tab page. I took note of each of their taglines, audiences, purposes, features, scopes, and visual styles.",

  "Based on my research findings, I came up with a list of considerations for my chrome extension to include features that users appreciate in a planner/task manager. I used the MoSCoW method to prioritize certain features to be completed in time for my Undergrad Senior Capstone Project Gallery Exhibition but plan to implement more of them before releasing my chrome extension onto the Chrome App Store!",

  "Screenshots of page when there are no tasks (top) and when there are tasks (bottom).",

  "Screenshots of page when users click/hover bottles (top) and confirmation pop-up for deletion of a task (bottom).",

  "Screenshots of create a new subject form (top left), create a new task form (right), and view of existing subjects (bottom left).",

  "An early rough sketch of Float-it Notes (top) and a work-in-progress screenshot (bottom). <br><div class='funFact'>✿ Fun fact: The name Float-it Notes is a wordplay of Post-it Notes, because instead of posting stuff, you're floating them :)!</div>",

  "An early in-progress video showcasing creating/deleting tasks. <br><div class='funFact'>✿ Fun fact: Another name considered for Float-it Notes was Task in a Flask, but the name Float-it Notes was picked because it was easier to say!</div>"
]

var inertiaFrames;
var inertia1 = "images/environment/inertia1.png";
var inertia2 = "images/environment/inertia2.png";
var inertia3 = "images/environment/inertia3.png";
var inertia4 = "images/environment/inertia4.png";
var inertia;
var inertiaSection;
var inertiaSlides = [
  "images/slides/inertiaTrailer.mov",
  "images/slides/inertiaResearch.png",
  "images/slides/inertiaQuestions1.png",
  "images/slides/inertiaFindings1.png",
  "images/slides/inertiaFlow.png",
  "images/slides/inertiaQuestions2.png",
  "images/slides/inertiaFindings2.png",
  "images/slides/inertiaGame.png",
  "images/slides/inertiaWorkout.png",
  "images/slides/inertiaStyleGuide.png"
]
var aboutInertia = [
  "Inertia - The Mobile Game That Mobilizes Gamers <br><br> \
  <div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Mobile App, Fitness, Gaming</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Figma, Adobe Photoshop</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>UX Design, UX Research, UI Design, Wireframing</div></div><br>\
  <button class='slidesLink' onclick=\"window.open('https://www.figma.com/file/4GKpbsBQxAKKfarmcLW0tp/Inertia','_blank')\">View Figma Designs</button><br>\
  <div class='projectSubtitles'>The Problem</div>Studies in 2021 have shown that more than 82 million US residents aged 6 and above don't exercise at all, making it more likely for them to develop a host of health problems like high blood pressure, high cholesterol, and heart disease. On the other hand, the mobile gaming market is booming, with global mobile games revenue on track to surpass the $100 billion mark by 2023. <br><br>So here are our two facts: <div class='descriptionsIndent'>1. A lot of people don't exercise enough. <br> 2. A lot of people love their mobile games.</div><div class='projectSubtitles'>The Solution</div>This brought me to ask the question, what if working out was as addicting as a game? What if... it was a game? <br><br> \
  I designed Inertia, a mobile fitness game that helps members of the gaming community and RPG fans transform their gaming passions into a healthier lifestyle. <br><br>Inertia gives users a setting they are familiar and drawn to, RPG games, and motivates users to workout by recognizing their efforts with in-game rewards and progression. While the rewards of physical body changes from working out might take at least a few months to show, Inertia helps keep users excited for their next session by providing more immediate feedback every time they complete a run or workout.\
  <br><br><div class='projectSubtitles'>The Process</div>For this project, I: <div class='descriptionsIndent'>○ Researched exercise and mobile gaming statistics in the US <br>○ Analyzed competitor fitness apps and their features<br>○ Conducted two rounds of user research amongst gamers to learn my target audience's core needs and workout habits (1st round) and to recieve insight for how users interact with the mobile prototype (2nd round) <br>○ Generated user flows for different user experiences <br>○ Created a style guide for the app's colors, typography, buttons, and branding <br>○ Designed low and high-fidelity wireframes prototyping the sign-in/sign-up process for mobile and desktop, character creation, various game features (inventory, shop, skills, and Battle Tower system) and the workout experience for users.</div><button class='slidesLink' onclick=\"window.open('https://www.figma.com/file/4GKpbsBQxAKKfarmcLW0tp/Inertia','_blank')\">View Figma Designs</button>",

  "I started this project with background research on exercise and mobile gaming, primarily in the US, to gain an understanding of how my hybrid app can potentially bridge the gap between these two industries. <br><br>Further competitive analysis of various fitness apps showed how current solutions were addressing the problem of inactivity among US residents and the various features that made them successful/stand out, giving me ideas for features to incorporate into Inertia.",

  "My first round of user research's goal was to learn my target audience's core needs and workout habits. <br><br>I surveyed 16 participants, ages 15-21, that played at least 3 hours of games a week, and asked them questions concerning their gaming and exercise habits and preferences. These surveys were done through Google Forms for anonymity as some people may not be comfortable disclosing sensitive information such as how much they exercise, how long they spend playing games, etc.",

  "Main findings from the first round of user research included: <div class='descriptionsIndent'>1. Participants’ reasons for playing games were for entertainment, escape, or socialization. <br>2. What participants found most appealing about RPGs were the storylines, the game completion/achievements, ability to play with friends, the sense of progression, and character creation and customization. <br>3. Most of participants that did work out either did light workouts a few times a week just to keep active and did not have workout equipment. <br>4. Participants' motivations for working out were for physical changes, more energy, self-esteem, sports-related, and mental health reasons. </div>This research was crucial in understanding the target audience and their needs and served as a guide for the brainstorming and subsequent designs of Inertia.",

  "I created multiple user-flows for different user motives, such as a user-flow for returning users logging on to complete a workout (using Workout) and a user-flow for returning users preparing character for the Battle Tower (using Shop, Skills, Inventory, Battle Tower).",

  "The second round of user research was live 1-on-1 recorded interviews with participants on either Zoom or Discord testing for app navigation and usability. <br><br>In these 10-15 minute interviews, participants were given a link to a mobile prototype of Inertia and asked to share their screen while I asked them a series of questions and gave them tasks to complete within the app.",

  "From the second round of user research, I got a lot of valuable feedback that I incorporated into the final design of Inertia. As my users were all gamers interacting with Inertia for the first time, they were able to bring in their own knowledge and understanding of games they are used to playing, helping me improve the user experience of Inertia as not only a fitness app, but also as a functional and enjoyable game. <br><br>Highlighted bullet points in the image indicate popular/repeated feeback from participants.",

  "The app's game portion is an RPG. Users play as a character of a class of their choosing (warrior, mage, priest, archer, or assassin) as they battle their way through floors of the virtual world’s dungeon, called the Battle Tower, either solo or with friends. The battle system is turn based, with each player/enemy character using their mana to cast an ability on their turn. The battle ends when all the characters of a side has no health left. <br><br>Players can make their characters stronger with equipment and skill points they gain from working out. They can sell/buy/customize their equipment in the Shop, level up their unique class skills/abilities in Skills, and change their equipment and character appearance in Inventory.",

  "The fitness portion of the app consists players completing runs or workouts for the chance to obtain better equipment and to gain skill points to aid them in their Battle Tower climb. <br><br>The first few floors of the Battle Tower can be defeated without grinding out runs and workouts to give users a taste of what the gameplay is like and hopefully, make them excited to exercise to continue advancing. The rewards from these workouts scales with the user's in-game progression. <br><br>To ensure that users are honestly working out, the app will require users to verify their exercises by scanning QR codes on workout machines, using their phone's camera to track their movements, or linking to a heart rate monitor.",

  "Inertia's designs adhere to a style guide to make sure that the app's colors, typography, buttons, and branding are consistent throughout all the pages for a holistic user experience."
]

var roomFrames;
var room1 = "images/environment/room-1.png";
var room2 = "images/environment/room-2.png";
var room3 = "images/environment/room-3.png";
var room;
var roomSection;
var roomSlides = [
  "images/slides/room.mov",
  "images/slides/roomCompetitiveResearch.png",
  "images/slides/roomQuestions.png",
  "images/slides/roomFindings.png",
  "images/slides/roomPersonas.png",
  "images/slides/roomJourneyMaps.png",
  "images/slides/roomFlows.png",
  "images/slides/roomStrategy.png"
]
var aboutRoom = [
  "Room and Roommate Finder App<br><br> \
  <div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Mobile App, Social Networking</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Figma</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>UX Design, UX Research, UI Design, Wireframing</div></div><br>\
  <button class='slidesLink' onclick=\"window.open('https://www.figma.com/file/oEjvYKDuItXKElZCPmSFCE/Room?node-id=0%3A1')\">View Figma Designs</button><br>\
  <div class='projectSubtitles'>The Problem</div>54% of the world’s population live in urban communities. The average age for men is 29 (up from 26 two decades ago) and for women is 27 (up from 23 in the same time period). Given these trends, city dwellers tend to spend most of their twenties living with roommates. Find and keeping a good roommate, however, gets harder as more people swarm into cities. <br><br>Propose a mobile product experience that appeals to millenials that makes it safe to find the ideal roommate in New York City.<br><br><div class='projectSubtitles'>The Solution</div>Room is an app designed by a team of 3 that helps users with finding the perfect roommate match, finding a place to live, and navigating their new independent life with their new roommates in a peaceful and harmonious fashion.\
  <br><br><div class='projectSubtitles'>The Process</div>For Room, my teammates and I: <div class='descriptionsIndent'>○ Analyzed competitors in the current roommate matching market<br>○ Conducted surveys amongst our targeted demographic to learn the objectives and pain points of their roommate/room experiences<br>○ Generated personas and journey maps from the collected user research data<br>○ Constructed user flows for both new and returning users with different objectives<br>○ Created a strategy document outlining product objectives, market opportunities, and product visions<br>○ Designed high fidelity wireframes prototyping the sign-in/sign-up process, user profile customizations, roommate matching system and apartment listings search system</div>",

  "Competitive analysis was done with 6 of the most popular room and/or roommate finder and other apps with similar functionalities. They were distinguished by competitor type, priorities, key features, region accessibility, and KPIs. <br><br>From this research, opportunities were found to include the following features into Room:<div class='descriptionsIndent'>○ Combine Tinder's swiping feature with Roomi's background checks and in-depth questionnaires to ensure mutual safety and increase user excitement for sharing commonalities with their matches<br>○ Have a wide selection of search parameters for users to filter roommates and rentable rooms<br>○ Make app accessible worldwide and available in multiple languages<br>○ Landlords' profiles and details shown on listings for easy user access<br>○ Different communication methods available such as text, call, and video call so people can familiarize with one another online before meeting in person<br>○ Include ratings and testimonials for landlords and rooms/apartments from past renters<br>○ Include additional resources to help users transition smoothly into their new shared space (paying bills, splitting chores, buying shared groceries, etc.)</div>",
  
  "The goal of our user research was to understand the concerns and desires 18-25 year olds have in regards to the roommate/room  searching process. Participants were asked about their past or current rooming experiences, their experience with NYU's roommate matching system (if applicable), their current solutions to finding a roommate or room, and their level of comfort in using quick digital transaction to pay for rent.<br><br>The surveys were carried out through anonymous Google Forms which were sent out to the NYU community, friends, and friends of friends.",

  "Our research of 21 participants, with an age range of mostly 18-23, found that the majority of them:<div class='descriptionsIndent'>○ Have a roommate<br>○   Prefer to live with one roommate<br>○ Find NYU's roommate matching system's personality quiz successful in pairing roommates that get along<br>○ Would love for NYU's process to have more options/preferences for selecting roommates and to have the ability to connect with potential roommates beforehand<br>○ Use Zillow as the main app to find places to live</div><br>\
  The main worries participants have surrounding finding a roommate all fell into the categories of:<div class='descriptionsIndent'>○ The cleanliness of the roommate<br>○ Possible personality/lifestyle clashes<br>○ Communication problems</div><br>\
  It was also found that:<div class='descriptionsIndent'>○ There is a 50/50 divide in trusting Venmo<br>○ Those that said they trusted Venmo for paying their rent expressed it was because of the convenience and ability to confirm transactions with checks<br>○ Those that expressed concern about using Venmo for their rent gave the reason of Venmo being informal</div>",

  "From the user research, we were able to optimize Room's filtering system to make sure that users are able to search for roommates and rooms by the categories most important to them. It also gave us a clear picture of who our target demographic was, their situations, their motives, and their fears, informing the construction of our 2 personas, Naomi and Arjun.<br><br>While Naomi and Arjun are both searching for a roommate, their differences in age, occupation, personalities, likes/dislikes, and circumstances mean that their criterias for a roommate are very different. During the designing of Room, we looked through the eyes of Naomi and Arjun to make sure that the experience our app provided was versatile and useful for a broad spectrum of users.",

  "Journey maps created for Naomi and Arjun showcase two scenarios where users use Room to find a roommate. Each of these experiences have their own high and low points of user satisfaction. These journey maps pinpoint pivitol moments where we can capitalize on the positives emotions and take proactive steps to ease the negative feelings.",

  "Our 2 user flows for new and returning users show the different screens they visit and decisions they make as they complete their goals within the app. This ensures that each step of their in-app experience is efficient and makes sense.",

  "Lastly, here is a strategy document that compiles Room's product objectives, market opportunities, and product vision."
]

var askAppsFrames;
var askApps1 = "images/environment/askApps-1.png";
var askApps2 = "images/environment/askApps-2.png";
var askApps3 = "images/environment/askApps-3.png";
var askApps4 = "images/environment/askApps-4.png";
var askApps;
var askAppsSection;
var askAppsSlides = [
  "images/slides/askApps1.png",
  "images/slides/askApps3.png",
  "images/slides/askApps4.png",
  "images/slides/askApps5.png",
  "images/slides/askApps6.png",
  "images/slides/askApps7.png"
]
var aboutAskApps = [
  "Uninstall Pages for Ask Apps Browser Extensions<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Website, E-Commerce</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Photoshop</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Web Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>Ask Applications' usual uninstall pages are unstyled feedback forms returning data that often go unread, unorganized, and unused due to the large quantity of them.<br><br><div class='projectSubtitles'>The Solution</div>This project was a collaboration with the product management intern to boost install rates for other company products after users uninstall the browser extension. Our proposal aims to use the space in a more effective and productive way by referring users to other products.",

  "Ad Designs for Slimware Product<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Web Ad, E-Commerce</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Photoshop</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Web Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>Ask Applications needs ads for their Slimware brand advertising one of their PC products.<br><br><div class='projectSubtitles'>The Solution</div>This is a sample of ad designs made for Slimware in accordance to Google compliant ad specifications.",

  "Landing Pages for Ask Apps Browser Extensions Sample #1<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Website, E-Commerce</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Photoshop, proprietary CMS, HTML/CSS</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Web Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>Ask Applications needs landing pages for a multitude of their browser-based tools.<br><br><div class='projectSubtitles'>The Solution</div>As Ask Apps has over a hundred browser extensions, many with the same generic/brandless landing page design, I aimed to differentiate and liven them up by giving them their own unique landing page designs that were related to the extension's function in some way. <br><br>This is a sample of the landing page designs I created for various browser extensions.",

  "Landing Pages for Ask Apps Browser Extensions Sample #2<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Website, E-Commerce</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Photoshop, proprietary CMS, HTML/CSS</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Web Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>Ask Applications needs landing pages for a multitude of their browser-based tools.<br><br><div class='projectSubtitles'>The Solution</div>As Ask Apps has over a hundred browser extensions, many with the same generic/brandless landing page design, I aimed to differentiate and liven them up by giving them their own unique landing page designs that were related to the extension's function in some way. <br><br>This is a sample of the landing page designs I created for various browser extensions.",

  "Landing Pages for Ask Apps Browser Extensions Sample #3<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Website, E-Commerce</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Photoshop, proprietary CMS, HTML/CSS</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Web Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>Ask Applications needs landing pages for a multitude of their browser-based tools.<br><br><div class='projectSubtitles'>The Solution</div>As Ask Apps has over a hundred browser extensions, many with the same generic/brandless landing page design, I aimed to differentiate and liven them up by giving them their own unique landing page designs that were related to the extension's function in some way. <br><br>This is a sample of the landing page designs I created for various browser extensions.",

  "Landing Pages for Ask Apps Browser Extensions Sample #4<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Website, E-Commerce</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Photoshop, proprietary CMS, HTML/CSS</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Web Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>Ask Applications needs landing pages for a multitude of their browser-based tools.<br><br><div class='projectSubtitles'>The Solution</div>As Ask Apps has over a hundred browser extensions, many with the same generic/brandless landing page design, I aimed to differentiate and liven them up by giving them their own unique landing page designs that were related to the extension's function in some way. <br><br>This is a sample of the landing page designs I created for various browser extensions."
]

var acornStationFrames;
var acornStation;
var acornSection;
var acornSlides = [
  "images/slides/acornLogo.png",
  "images/slides/acornDrafts02.png",
  "images/slides/acornApplications01.png",
  "images/slides/acornApplications02.png",
  "images/slides/acornBottles.png"
]
var aboutAcorn = [

  "Logo for Health and Wellness Company<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Logo, Merch Design</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Illustrator, Adobe Photoshop, vinyl cutter</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Graphic Design, User Research, Product Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>\"acorn\" is a fictional health and wellness company that is dedicated to helping people live healthier and more eco-friendly lifestlyes. It needs a logo and branded merchandise that reflect its values and brand.<br><br><div class='projectSubtitles'>The Solution</div>For the logo, I chose a simplistic and geometric design \
  to emphasize the company's clean and environmental conscious mission. Squirrel-like shapes and \
  custom lettering were created from transformations on circles.",

  "In the brainstorming stage, I came up with 10 unique designs for the \"acorn\" logo.<br><br>\
  I conducted a survey with 25 people to find out which of these 10 were the most appealing to others. From this feedback, I was able to narrow down the possible designs to 3. <br><br>I then created sevaral iterations of the 3 designs, playing around with fonts, colors, spacing, and other design elements. Shown in the image are some of the iterations of the 3 chosen designs.",

  "In the next step, I took the logo I've made for \"acorn\" and created prototypes of possible company merchandise.",

  "The water bottle was chosen as the physical application and three design iterations were made.",

  "Here are the final branded water bottles!"

]

// var timeInterfaceFrames;
// var timeInterface1 = "images/environment/timeInterface1.png";
// var timeInterface2 = "images/environment/timeInterface2.png";
// var timeInterface3 = "images/environment/timeInterface3.png";
// var timeInterface4 = "images/environment/timeInterface4.png";
// var timeInterface5 = "images/environment/timeInterface5.png";
// var timeInterface;
// var timeInterfaceSection;
// var timeInterfaceSlides = [
//   "images/slides/timeInterface02.png",
//   "images/slides/timeInterface01.png",
//   "images/slides/timeInterface03.png",
//   "images/slides/timeInterface04.png"
// ]
// var aboutTimeInterface = [
//   "Clock Interface For LinkNYC Kiosks<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Digital Interface</div>\
//   <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Adobe Photoshop</div>\
//   <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Graphic Design</div></div><br><br><div class='projectSubtitles'>The Problem</div>Clock interfaces are usually similar in design. For this project, I challenge myself to build an alternative clock that tells time in an unconventional way.<br><br><div class='projectSubtitles'>The Solution</div>I created a clock interface design scaled for LinkNYC kiosks that explores the relationship between time and weather.",

//   "The interface shows the progression of time through the passing weathers.<br><br>The 1st column images show the first screen that distinguishes the type and severity of the current percipitation within the span of an hour. The 2nd column shows the second screen that displays the weather forecast for tomorrow, and the 3rd column shows the last screen, showing the forecast for the next few days.",

//   "Drafts #1. Initial low fidelity prototype.",

//   "Drafts #2. Sample of iterations made for the 3 screens."
// ]

// Game
var outcastFrames;
var outcast1 = "images/environment/outcast1.png";
var outcast2 = "images/environment/outcast2.png";
var outcast;
var outcastSection;
var outcastSlides = [
  "images/slides/outcastVideo.mov",
  "images/slides/outCast1.jpg",
  "images/slides/outCast2.jpg",
  "images/slides/outCast3.jpg",
  "images/slides/outCast4.jpg",
  "images/slides/outCast5.jpg"
]
var aboutOutcast = [
  "Narrative RPG Adventure Game<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Digital Game</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>GameMaker Studio 2, Medibang Paint, Adobe Photoshop</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Game UI, Narrative Design, Game Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>\"Outcast\" is a narrative RPG adventure game developed by a team of 3. My role was the game's lead artist and map designer. I was to bring the game to life with an immersive and fantastical world.<br><br><div class='projectSubtitles'>The Solution</div>I created all the sprites and graphical components (other than the main character), drawn in a relatively clean and simple 2D art style. Strategic asset layering and placement, along with small animations and effects sprinkled throughout, work together to create a cohesive and enjoyable gaming experience.<br><br><div class='projectSubtitles'>The Plot</div>A young boy who once weilded the most powerful sword known to man loses everything and everyone he knows and loves when his village is attacked by strange hostile creatures. The hostile race steals the legendary sword and banishes the main character into an unfamiliar world.",

  "Snapshot #1.",

  "Snapshot #2.",

  "Snapshot #3.",

  "Snapshot #4.",

  "Snapshot #5."
]

var missileCommandFrames;
var missileCommand1 = "images/environment/missileCommand1.png";
var missileCommand2 = "images/environment/missileCommand2.png";
var missileCommand3 = "images/environment/missileCommand3.png";
var missileCommand;
var missileCommandSection;
var missileCommandSlides = [
  "images/slides/missileCommandVideo.mov",
  "images/slides/missileCommand1.png",
  "images/slides/missileCommand2.png"
]
var aboutMissileCommandClone = [
  "Clone of A Classic Arcade Game<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Digital Game</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>GameMaker Studio 2</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Game Development, Game UI</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>I challenge myself to recreate the game Missile Command by Atari that is as close to the original as possible, gameplay-wise and visually.<br><br><div class='projectSubtitles'>The Solution</div> My version of Missile Command is complete with a menu page, scaling level difficulty, various enemies, true-to-original sprites, a point system, and a game-over screen.",

  "Snapshot #1.",

  "Snapshot #2."
]

var wizardsJourneyFrames;
var wizardsJourney1 = "images/environment/wizardsJourney1.png";
var wizardsJourney2 = "images/environment/wizardsJourney2.png";
var wizardsJourney3 = "images/environment/wizardsJourney3.png";
var wizardsJourney4 = "images/environment/wizardsJourney4.png";
var wizardsJourney;
var wizardsJourneySection;
var wizardsJourneySlides = [
  "images/slides/wizardsJourney.mov",
  "images/slides/wizardsJourney01.png",
  "images/slides/wizardsJourney02.jpg",
  "images/slides/wizardsJourney03.jpg"
]
var aboutWizardsJourney = [
  "Multiplayer Race Game<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>Digital Game</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>GameMaker Studio 2, Adobe Photoshop</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>Game Development, Game UI, Game Design</div></div><br>\
  <div class='projectSubtitles'>The Problem</div>Make original multiplayer game.<br><br><div class='projectSubtitles'>The Solution</div>I designed and developed a multiplayer vertical obstacle race game.<br><br>Rules:<br><div class='descriptionsIndent'>○ 3 playable characters each with different spells that can be used to hinder other players or to destroy incoming map projectiles<br>○ Mana bars at the top indicate the respective color's ability to use spells and teleport back into view if they fall behind<br>○ Characters that run out of mana are removed from the race<br>○ First to the top wins!</div><div class='funFact'>✿ Fun fact: This video showcasing the gameplay took multiple takes because my sister/opponent was not the best gamer and unfortunately kept dying before we could reach the top.",

  "Snapshot #1 of starting match countdown.",

  "Snapshot #2 of characters climbing up obstacle course.",

  "Snapshot #3 of end game screen. Confetti matches color of winning character. If there is no winner (no one made it to the top), no one ends up on the pedestal and there is no confetti :(<br><div class='funFact'>✿ Fun fact: The confetti in this game is the same sprite used for the falling petals on this portfolio, just recolored!"
]

// 3D Modeling + Animation
var tantrumFrames;
var tantrum;
var tantrumSection;
var tantrumSlides = [
  "images/slides/tantrum.mov",
  "images/slides/tantrum01.png",
  "images/slides/tantrum02.png",
  "images/slides/tantrum03.png"
]
var aboutTantrum = [
  "Short 3D Animation<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>3D Animated Video</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Autodesk Maya, Adobe Photoshop, Adobe Premiere Pro</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>3D Animation, Video Editing</div></div>\
  <br><div class='projectSubtitles'>The Problem</div>Make animated short that tells a story.<br><br><div class='projectSubtitles'>The Solution</div>I created a 1 minute animation of a child going through the stages of grief over a box of KitKat.",

  "Snapshot #1 of bargaining stage.",

  "Snapshot #2 of anger stage.",

  "Snapshot #3 of acceptance stage."
]

var deskRoomFrames;
var deskRoom;
var deskRoomSection;
var deskRoom1 = "images/environment/deskRoom1.png";
var deskRoom2 = "images/environment/deskRoom2.png";
var deskRoomSlides = [
  "images/slides/deskRoom01.png",
  "images/slides/deskRoom02.png",
  "images/slides/deskRoom03.png"
]
var aboutDeskRoom = [
  "3D Environment Model<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>3D Environment</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Autodesk Maya</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>3D Modeling</div></div>\
  <br><div class='projectSubtitles'>The Problem</div>3D model a room from a reference photo.<br><br><div class='projectSubtitles'>The Solution</div>I created a 3d model of a study room complete with textures and lighting.",

  "Reference photo used for room model. Thanks Pinterest!",

  "Work in progress screenshot of room."
]

var raygunFrames;
var raygun;
var raygunSection;
var raygunSlides = [
  "images/slides/raygun.mov",
  "images/slides/raygunReference.png"
]
var aboutRaygun = [
  "3D Raygun Model<br><br><div class='projectCardsSection'><div class='projectCards'><div class='projectCardsTitle'>Product</div>3D Model</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Technologies</div>Autodesk Maya</div>\
  <div class='projectCards'><div class='projectCardsTitle'>Key Skills</div>3D Modeling</div></div>\
  <br><div class='projectSubtitles'>The Problem</div>3D model a raygun from a reference photo.<br><br><div class='projectSubtitles'>The Solution</div>I created a 3d model of a raygun.",

  "Reference used for raygun model.",
]

// Slideshow
var slideShowing = false;
var expandedImageShowing = false;

//** Preload *************
function preload() {

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  playerRun = loadAnimation(playerRun1, playerRun2, playerRun3, playerRun2, playerRun1, playerRun4, playerRun3, playerRun2);

  // Characters
  yanxinIdle = loadAnimation(yanxinIdle1, yanxinIdle2, yanxinIdle1, yanxinIdle3, yanxinIdle1, yanxinIdle3);

  // Widgets
  snd_windyPetals = new sound("sounds/windyPetals.mp3");

  // Environment
  grass = loadImage("images/environment/grass.png");
  dirt = loadImage("images/environment/dirt.png");
  pinkPetal = loadImage("images/environment/petal.png");
  grassBlade = loadAnimation(grassBlade1, grassBlade2, grassBlade3, grassBlade4, grassBlade5, grassBlade4, grassBlade3, grassBlade2);
  whiteTpFrames = loadAnimation(whiteTp1, whiteTp2, whiteTp3);
  blueTpFrames = loadAnimation(blueTp1, blueTp2, blueTp3);
  greenTpFrames = loadAnimation(greenTp1, greenTp2, greenTp3);
  redTpFrames = loadAnimation(redTp1, redTp2, redTp3);
  purpleTpFrames = loadAnimation(purpleTp1, purpleTp2, purpleTp3);

  // UI/UX 
  floatItFrames = loadAnimation(floatIt1, floatIt2, floatIt3, floatIt4);
  inertiaFrames = loadAnimation(inertia1, inertia2, inertia3, inertia4);
  roomFrames = loadAnimation(room1, room2, room3, room2);
  askAppsFrames = loadAnimation(askApps1, askApps2, askApps3, askApps4);
  acornStationFrames = loadImage("images/environment/acornStation.png");
  // timeInterfaceFrames = loadAnimation(timeInterface1, timeInterface2, timeInterface3, timeInterface4, timeInterface5);

  // Game
  outcastFrames = loadAnimation(outcast1, outcast1, outcast1, outcast2);
  missileCommandFrames = loadAnimation(missileCommand1, missileCommand2, missileCommand3);
  wizardsJourneyFrames = loadAnimation(wizardsJourney1, wizardsJourney2, wizardsJourney3, wizardsJourney4);

  // 3D Modeling + Animation
  tantrumFrames = loadImage("images/environment/tantrum.png");
  deskRoomFrames = loadAnimation(deskRoom1, deskRoom2);
  raygunFrames = loadImage("images/environment/raygun.png");

}

//** Setup *************
function setup() {

	var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("field-div");
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  document.getElementById("onIcon").setAttribute("draggable", false);
  document.getElementById("offIcon").setAttribute("draggable", false);
  document.getElementById("slides").setAttribute("draggable", false);
  document.getElementById("backToStartLink").style.backgroundColor = "rgba(0,0,0,0.3)";
  document.getElementById("widgets").style.backgroundColor = "rgba(0,0,0,0.3)";
  document.getElementById("movementDesktopMessage").style.backgroundColor = "rgba(0,0,0,0.3)";

  // Platforms
  platformsGroup = new Group();
  for (i = 0; i < numOfPlatforms; ++i) { // top layer
    groundTop = createSprite(i * 100, window.innerHeight-100, 100, 100);
    groundTop.addImage(grass);
    platformsGroup.add(groundTop);
  }
  for (i = 0; i < 2; ++i) { // top layer left
    groundTopLeft = createSprite(i * -100, window.innerHeight-100, 100, 100);
    groundTopLeft.addImage(grass);
  }
  for (i = 0; i < numOfPlatforms; ++i) { // bottom layer
    groundBot = createSprite(i * 100, window.innerHeight, 100, 100);
    groundBot.addImage(dirt);
  }
  for (i = 0; i < 2; ++i) { // top layer left
    groundBottomLeft = createSprite(i * -100, window.innerHeight, 100, 100);
    groundBottomLeft.addImage(dirt);
  }
  middlePlatform = floor((window.innerWidth/2)/100);

  // Characters
  yanxinIdle.frameDelay = 18;

  yanxin = createSprite(platformsGroup[12].position.x, window.innerHeight-200, 100, 100);
  yanxin.addAnimation("idle", yanxinIdle);

  // Text
  textSize(18);
  fill(255);
  textAlign(LEFT);
  textFont("silkscreennormal");

  // Teleporters
  // Back to Beginning
  whiteTpFrames.frameDelay = 12;
  beginningTp = createSprite(platformsGroup[61].position.x, window.innerHeight-200, 100, 100);
  beginningTp.addAnimation("static", whiteTpFrames);
  beginningSection = platformsGroup[13].position.x;

  // UI/UX Design
  greenTpFrames.frameDelay = 12;
  uiUxTp = createSprite(platformsGroup[15].position.x, window.innerHeight-200, 100, 100);
  uiUxTp.addAnimation("static", greenTpFrames);
  uiUxSection = platformsGroup[21].position.x;

  // Game Design
  redTpFrames.frameDelay = 12;
  gameTp = createSprite(platformsGroup[17].position.x, window.innerHeight-200, 100, 100);
  gameTp.addAnimation("static", redTpFrames);
  gameSection = platformsGroup[39].position.x;

  // 3D Modeling + Animation
  purpleTpFrames.frameDelay = 12;
  threeDTp = createSprite(platformsGroup[19].position.x, window.innerHeight-200, 100, 100);
  threeDTp.addAnimation("static", purpleTpFrames);
  threeDSection = platformsGroup[49].position.x;

  // Video Editing
  // purpleTpFrames.frameDelay = 12;
  // videoTp = createSprite(platformsGroup[21].position.x, window.innerHeight-200, 100, 100);
  // videoTp.addAnimation("static", purpleTpFrames);
  // videoSection = platformsGroup[60].position.x;

  // UI/UX (back)
  inertiaFrames.frameDelay = 25;
  inertiaSection = uiUxSection + 250;
  inertia = createSprite(inertiaSection, window.innerHeight-225, 180, 150);
  inertia.addAnimation("static", inertiaFrames);

  floatItFrames.frameDelay = 15;
  floatItSection = uiUxSection + 550;
  floatItNotes = createSprite(floatItSection, window.innerHeight-220, 220, 140);
  floatItNotes.addAnimation("static", floatItFrames);

  roomFrames.frameDelay = 20;
  roomSection = uiUxSection + 860;
  room = createSprite(roomSection, window.innerHeight-225, 180, 150);
  room.addAnimation("static", roomFrames);

  askAppsFrames.frameDelay = 20;
  askAppsSection = uiUxSection + 1180;
  askApps = createSprite(askAppsSection, window.innerHeight-225, 160, 150);
  askApps.addAnimation("static", askAppsFrames);

  acornSection = uiUxSection + 1500;
  acornStation = createSprite(acornSection, window.innerHeight-225, 300, 150);
  acornStation.addImage(acornStationFrames);

  // timeInterfaceFrames.frameDelay = 100;
  // timeInterfaceSection = uiUxSection + 1500;
  // timeInterface = createSprite(timeInterfaceSection, window.innerHeight-225, 100, 150);
  // timeInterface.addAnimation("static", timeInterfaceFrames);

  // Game (back)
  outcastFrames.frameDelay = 8;
  outcastSection = gameSection + 250;
  outcast = createSprite(outcastSection, window.innerHeight-220, 150, 130);
  outcast.addAnimation("static", outcastFrames);

  missileCommandFrames.frameDelay = 8;
  missileCommandSection = gameSection + 500;
  missileCommand = createSprite(missileCommandSection, window.innerHeight-210, 100, 120);
  missileCommand.addAnimation("static", missileCommandFrames);

  wizardsJourneyFrames.frameDelay = 10;
  wizardsJourneySection = gameSection + 740;
  wizardsJourney = createSprite(wizardsJourneySection, window.innerHeight-210, 150, 120);
  wizardsJourney.addAnimation("static", wizardsJourneyFrames);

  // 3D Animation + Modeling (back)
  tantrumSection = threeDSection + 220;
  tantrum = createSprite(tantrumSection, window.innerHeight-225, 170, 100);
  tantrum.addImage(tantrumFrames);

  deskRoomFrames.frameDelay = 25;
  deskRoomSection = threeDSection + 470;
  deskRoom = createSprite(deskRoomSection, window.innerHeight-260, 160, 220);
  deskRoom.addAnimation("static", deskRoomFrames);

  raygunSection = threeDSection + 760;
  raygun = createSprite(raygunSection, window.innerHeight-220, 210, 140);
  raygun.addImage(raygunFrames);

  // Player Animations
  playerIdle.frameDelay = 18;
  playerRun.frameDelay = 13;

  player = createSprite(platformsGroup[2].position.x, window.innerHeight-200, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

  // Environment
  // Petals
  var numOfPetals = window.innerWidth/80;
  petalsGroup = new Group();
  for (i = 0; i < numOfPetals; ++i) {
    let randomX = random(0, window.innerWidth * 1.2);
    let randomY = random(0, window.innerHeight);
    let petalX = random(-0.2, -1);
    let petalY = random(1.5, 3.5);
    let petalRotation = random(0, 4);
    let scaleX = random(0.8, 1);
    petal = createSprite(randomX, randomY, 14, 14);
    petal.addImage(pinkPetal);
    petal.rotation = random(0, 360);
    petal.setVelocity(petalX, petalY);
    petal.rotationSpeed = petalRotation;
    petal.scale = scaleX;
    petalsGroup.add(petal);
  }

  // Grassblades
  grassBlade.frameDelay = 11;
  var numOfGrassblades = floor(numOfPlatforms/1.85);
  for (i = 0; i < numOfGrassblades; ++i) {
    let randomX = random(0, numOfPlatforms*100);
    grassblade = createSprite(randomX, window.innerHeight-162);
    grassblade.addAnimation("grassBlade", grassBlade);
  }

} // function setup

//** Draw ****************
function draw() {

  // Debugging
  //console.log("position:", floor(player.position.x/100));

  background(color(134, 193, 239));
  globalTimer++;

  if (deviceType() != "desktop") {
    alert("Uh oh! The mobile version of this page is in the works. Please view using a laptop or desktop!");
  }

  // Player Movements
  player.velocity.x = 0;
  player.velocity.y += 0.85;
  player.changeAnimation("idle");
  if (lastKey == "right") {
    if (moved == false) {
      moved = true;
    }
    player.mirrorX(1);
  }
  else if (lastKey == "left") {
    if (moved == false) {
      moved = true;
    }
    player.mirrorX(-1);
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    if (moved == false) {
      moved = true;
    }
    lastKey = "right";
    player.changeAnimation("run");
    player.velocity.x = moveSpeed;
  }
  else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    if (moved == false) {
      moved = true;
    }
    lastKey = "left";
    player.changeAnimation("run");
    player.velocity.x = -(moveSpeed);
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87) || keyIsDown(32)) {
    if (moved == false) {
      moved = true;
    }
    if (!jump) {
      player.changeAnimation("idle");
      player.velocity.y = -16;
      jump = true;
    }
  }
  if (moved == true) {
    movementDesktopMessageFade();
  }

  // Camera
  if (player.position.x >= platformsGroup[middlePlatform].position.x) { // snaps camera onto player
    camera.position.x = player.position.x;
  }

  if (player.position.x >= platformsGroup[endPlatform].position.x) { // camera stops moving player at end
    camera.position.x = platformsGroup[endPlatform].position.x;
  }

  // Characters
  yanxin.changeAnimation("idle");
  yanxin.mirrorX(-1);

  if (player.position.x > yanxin.position.x) { // Faces player at all times)
    yanxin.mirrorX(1);
  }
  if (abs(yanxin.position.x - player.position.x) <= 130) {
    if (keyPressed() == "E" && firstGreeting == false) {
      chatBox(yanxin, 200, 450, 135, 80, 0);
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"), LEFT, 18);
      typeWriter(yanxinTexts[0], yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
      firstGreetingFinished = true;
    } else if (keyPressed() == "E") {
      if (greetingUsed == true) {
        randomText = random(yanxinTexts);
        greetingUsed = false;
      }
      chatBox(yanxin, 200, 450, 135, 80, 0);
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"), LEFT, 18);
      typeWriter(randomText, yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
    } else {
      chatBox(yanxin, 77, 270, 32, 50, 0);
      interactText("Press \"E\" to interact", yanxin, -55, 0);
      chatCounter = 0;
      chatTimer = 0;
      if (firstGreetingFinished == true) {
        firstGreeting = true;
      }
      greetingUsed = true;
    }
  }

  if (expandedImageShowing) { // turn off widgets in expanded image mode
    document.getElementById("widgets").style.visibility = "hidden";
    document.getElementById("widgets").style.opacity = "0";
  } 
  else {
    document.getElementById("widgets").style.visibility = "visible";
    document.getElementById("widgets").style.opacity = "1";
  }

  // Location Labels + Back to Start Link
  if (player.position.x >= uiUxSection) {
    document.getElementById("locationMessage").style.visibility = "visible";
    document.getElementById("locationMessage").style.opacity = "1";
    document.getElementById("locationMessage").style.backgroundColor = "#5A89AD";
  }
  // if (player.position.x >= videoSection) {
  //   document.getElementById("locationMessage").innerHTML = "Video Editing";
  // } else if 
  if (player.position.x >= threeDSection - 100) {
    document.getElementById("locationMessage").innerHTML = "3D Modeling + Animation";
    document.getElementById("locationMessage").style.backgroundColor = "#D3D1FF";
    let startColor = color(148,193,234);
    let endColor = color(158,187,230);
    background(lerpColor(startColor, endColor, map(player.position.x - threeDSection, -gradientRange, gradientRange, 0, 1)));
  }
  else if (player.position.x >= gameSection - 100) {
    document.getElementById("locationMessage").innerHTML = "Game Design";
    document.getElementById("locationMessage").style.backgroundColor = "#FFD0CC";
    let startColor = color(135, 198, 221);
    let endColor = color(148,193,234);
    background(lerpColor(startColor, endColor, map(player.position.x - gameSection, -gradientRange, gradientRange, 0, 1)));
  }
  else if (player.position.x >= uiUxSection - 100) {
    document.getElementById("locationMessage").innerHTML = "UI/UX Design";
    document.getElementById("locationMessage").style.backgroundColor = "#BEE8CC";
    let startColor = color(134, 193, 239);
    let endColor = color(135, 198, 221);
    background(lerpColor(startColor, endColor, map(player.position.x - uiUxSection, -gradientRange, gradientRange, 0, 1)));
  } 
  else {
    document.getElementById("locationMessage").style.visibility = "hidden";
    document.getElementById("locationMessage").style.opacity = "0";
  }
  if (player.position.x < platformsGroup[15].position.x || expandedImageShowing) {
    document.getElementById("backToStartLink").style.visibility = "hidden";
    document.getElementById("backToStartLink").style.opacity = "0";
  }
  else {
    document.getElementById("backToStartLink").style.visibility = "visible";
    document.getElementById("backToStartLink").style.opacity = "1";
  }

  // Sound
  var sound = document.getElementById("sound");

  // Teleporters
  if (globalTimer >= 20) { // hover effect for teleporter text
    hoverAmnt = 4;
    if (globalTimer >= 60) {
      hoverAmnt = -4;
      globalTimer = -20;
    }
  }

  // Back to Beginning 
  chatBox(beginningTp, tpLabelChatboxHover, 170, 60, 255, 0, 'rgb(220, 220, 220)', hoverAmnt);
  displayText("Back to Teleporters", beginningTp, tpLabelTextHeight, 120, 5, 95, CENTER, 20, hoverAmnt);
  if (abs(beginningTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = beginningSection;
    }
    else {
      chatBox(beginningTp, tpInstructionChatboxHover, 270, 32, 50, 0);
      interactText("Press \"E\" to teleport", beginningTp, tpInteractTextHover, 0);
    }
  }

  // UI/UX Design
  chatBox(uiUxTp, tpLabelChatboxHover, 115, 60, 255, 0, 'rgb(190, 232, 204)', hoverAmnt);
  displayText("UI/UX Design", uiUxTp, tpLabelTextHeight, 160, 5, '#53665A', CENTER, 20, hoverAmnt);
  if (abs(uiUxTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = uiUxSection;
    }
    else {
      chatBox(uiUxTp, tpInstructionChatboxHover, 270, 32, 50, 0);
      interactText("Press \"E\" to teleport", uiUxTp, tpInteractTextHover, 0);
    }
  }
  // Float-it Notes
  if (abs(floatItNotes.position.x - player.position.x) <= 140) {
    if (keyPressed() == "E") {
      slideShow("Float-it Notes");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(floatItNotes, 107, 230, 32, 50, 0);
      interactText("Press \"E\" to view", floatItNotes, -85, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Inertia
  if (abs(inertia.position.x - player.position.x) <= 130) {
    if (keyPressed() == "E") {
      slideShow("Inertia");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(inertia, 97, 230, 32, 50, 0);
      interactText("Press \"E\" to view", inertia, -75, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

  // Room
  if (abs(room.position.x - player.position.x) <= 130) {
    if (keyPressed() == "E") {
      slideShow("Room");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(room, 117, 230, 32, 50, 5);
      interactText("Press \"E\" to view", room, -95, 5);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

  // Ask Apps
  if (abs(askApps.position.x - player.position.x) <= 120) {
    if (keyPressed() == "E") {
      slideShow("Ask Applications Internship");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(askApps, 117, 230, 32, 50, 0);
      interactText("Press \"E\" to view", askApps, -95, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Acorn Station
  if (abs(acornStation.position.x - player.position.x) <= 180) {
    if (keyPressed() == "E") {
      slideShow("acorn");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(acornStation, 117, 230, 32, 50, 5);
      interactText("Press \"E\" to view", acornStation, -95, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // // Time Interface
  // if (abs(timeInterface.position.x - player.position.x) <= 100) {
  //   if (keyPressed() == "E") {
  //     slideShow("LinkNYC Time Interface");
  //     if (sound.checked) { continueSound = true; }
  //     else { continueSound = false; }
  //     slideShowing = true;
  //   }
  //   else if (slideShowing == true) {
  //     leaveSlidesCheck();
  //   }
  //   else {
  //     interactText("Press \"E\" to view", timeInterface, -90);
  //     noSlideShow();
  //     if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
  //   }
  // }

  // Game
  chatBox(gameTp, tpLabelChatboxHover, 115, 60, 255, 0, 'rgb(255, 208, 204)', hoverAmnt);
  displayText("Game Design", gameTp, tpLabelTextHeight, 150, 5, 'rgb(127, 102, 102)', CENTER, 20, hoverAmnt);
  if (abs(gameTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = gameSection;
    }
    else {
      chatBox(gameTp, tpInstructionChatboxHover, 270, 32, 50, 0);
      interactText("Press \"E\" to teleport", gameTp, tpInteractTextHover, 0);
    }
  }
  // Outcast
  if (abs(outcast.position.x - player.position.x) <= 120) {
    if (keyPressed() == "E") {
      slideShow("Outcast");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(outcast, 112, 230, 32, 50, 0);
      interactText("Press \"E\" to view", outcast, -90, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Missile Command
  if (abs(missileCommand.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      slideShow("Missile Command Clone");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(missileCommand, 107, 230, 32, 50, 0);
      interactText("Press \"E\" to view", missileCommand, -85, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Wizard's Journey
  if (abs(wizardsJourney.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      slideShow("Wizard's Journey");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(wizardsJourney, 107, 230, 32, 50, 0);
      interactText("Press \"E\" to view", wizardsJourney, -85, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

  // 3D Modeling + Animation
  chatBox(threeDTp, tpLabelChatboxHover, 180, 60, 255, 0, 'rgb(211, 209, 255)', hoverAmnt);
  displayText("3D Modeling + Animation", threeDTp, tpLabelTextHeight, 180, 5, 'rgb(105, 104, 127)', CENTER, 20, hoverAmnt);
  if (abs(threeDTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = threeDSection;
    }
    else {
      chatBox(threeDTp, tpInstructionChatboxHover, 270, 32, 50, 0);
      interactText("Press \"E\" to teleport", threeDTp, tpInteractTextHover, 0);
    }
  }
  // Tantrum
  if (abs(tantrum.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      slideShow("Tantrum");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(tantrum, 127, 230, 32, 50, 0);
      interactText("Press \"E\" to view", tantrum, -105, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Desk Room
  if (abs(deskRoom.position.x - player.position.x) <= 120) {
    if (keyPressed() == "E") {
      slideShow("3D Room");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(deskRoom, 154, 230, 32, 50, 0);
      interactText("Press \"E\" to view", deskRoom, -132, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Raygun
  if (abs(raygun.position.x - player.position.x) <= 140) {
    if (keyPressed() == "E") {
      slideShow("Raygun");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      chatBox(raygun, 117, 230, 32, 50, 0);
      interactText("Press \"E\" to view", raygun, -95, 0);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

    // Video
    // displayText("Video Editing", videoTp, tpLabelTextHeight, 150, 5, 255, CENTER, 20, hoverAmnt);
    // if (abs(videoTp.position.x - player.position.x) <= 100) {
    //   if (keyPressed() == "E") {
    //     fadeInEffect();
    //     player.position.x = videoSection;
    //   }
    //   else {
    //     interactText("Press \"E\" to teleport", videoTp, -100, 0);
    //   }
    // }

  // Platforms
  for (var i = 0; i < numOfPlatforms; i++) {
    if (platformsGroup[i].overlapPixel(player.position.x, player.position.y+50)) {
      player.position.y -= 1;
      player.velocity.y = 0;
      jump = false;
    }
  }
  if (player.position.x < 24) { // keeps player in screen
    player.position.x = 24;
  }
  if (player.position.x >= platformsGroup[endPlatform].position.x + 1) { // keeps player in screen
    player.position.x -= 6.5;
  }

  // Petals
  for (i = 0; i < petalsGroup.length; ++i) {
    if (petalsGroup[i].position.x < (player.position.x - window.innerWidth/2) || petalsGroup[i].position.y > window.innerHeight) {
      petalsGroup[i].remove();
      let randomX = random(player.position.x - window.innerWidth/2, player.position.x + window.innerWidth/2 + 100);
      let randomY = random(-100, 0);
      let petalX = random(-0.75, -1.8);
      let petalY = random(1.5, 3.5);
      let petalRotation = random(0, 4);
      let scaleX = random(0.8, 1);
      petal = createSprite(randomX, randomY, 14, 14);
      petal.addImage(pinkPetal);
      petal.rotation = random(0, 360);
      petal.setVelocity(petalX, petalY);
      petal.rotationSpeed = petalRotation;
      petal.scale = scaleX;
      petalsGroup.add(petal);
    }
  }
  drawSprites();
} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// Widgets
function toggleSound() {
  var sound = document.getElementById("sound");
  if (sound.checked) {
    snd_windyPetals.play();
    snd_windyPetals.loop = true;
  }
  else {
    snd_windyPetals.stop();
  }
}

function movementDesktopMessageFade() {
  document.getElementById("movementDesktopMessage").style.opacity = "0";
}

// Text
function interactText(txt, target, hover, horizontal) {
  fill(255, 255, 255);
  textSize(18);
  textAlign(CENTER);
  text(txt, target.position.x+horizontal, target.position.y+hover);
}

function keyPressed() {
  if (keyCode == 69) {
    return "E";
  }
  return true;
}

function displayText(line, target, hover, length, custom, color, align, size, hoveramnt=0) {
  textSize(size);
  textAlign(align);
  fill(color);
  text(line, target.position.x-(length/2)+custom, target.position.y-hover+hoveramnt, length);
}

function typeWriter(script, target, hover, length, counter, timer, customX, color) {
  textSize(18);
  fill(color);
  textAlign(LEFT);
  if (counter < script.length){
    chatTimer++;
    text(script.substring(0, counter), target.position.x-(length/2)+customX, target.position.y-hover, length);
    if (timer % 2 == 0) {
      chatCounter++;
    }
  } else {
    text(script, target.position.x-(length/2)+customX, target.position.y-hover, length);
  }
}

function chatBox(target, hover, length, height, alpha, horizontal, clr='rgb(0,0,0)', hoveramnt=0) {
  var boxColor = color(clr);
  boxColor.setAlpha(alpha);
  fill(boxColor);
  noStroke();
  rect(target.position.x-(length/2)+horizontal, target.position.y-hover+hoveramnt, length, height, 5);
}

function slideShow(title) {
  snd_windyPetals.stop();
  moveSpeed = 0;
  player.changeAnimation("idle");

  document.getElementById("widgets").style.gridTemplateRows = "15px 30px 15px";
  document.getElementById("soundIcon").style.display = "none";
  document.getElementById("slideshow").style.visibility = "visible";
  document.getElementById("slideshow").style.opacity = "1";
  document.getElementById("title").innerHTML = title;

  // Graphics and Web Design
  if (title == "Float-it Notes") {
    currentSlides = floatItSlides;
    currentSlidesName = "FloatItNotes";
  } else if (title == "Inertia") {
    currentSlides = inertiaSlides;
    currentSlidesName = "Inertia";
  } else if (title == "Room") {
    currentSlides = roomSlides;
    currentSlidesName = "Room";
  } else if (title == "Ask Applications Internship") {
    currentSlides = askAppsSlides;
    currentSlidesName = "AskApplicationsInternship";
  } else if (title == "acorn") {
    currentSlides = acornSlides;
    currentSlidesName = "Acorn";
  // } else if (title == "LinkNYC Time Interface") {
  //   currentSlides = timeInterfaceSlides;
  //   currentSlidesName = "TimeInterface";
  // } 
  // Game Design
  } else if (title == "Outcast") {
    currentSlides = outcastSlides;
    currentSlidesName = "Outcast";
  } else if (title == "Missile Command Clone") {
    currentSlides = missileCommandSlides;
    currentSlidesName = "MissileCommandClone";
  } else if (title == "Wizard's Journey") {
    currentSlides = wizardsJourneySlides;
    currentSlidesName = "WizardsJourney";
  } 
  // 3D Modeling + Animation 
  else if (title == "Tantrum") {
    currentSlides = tantrumSlides;
    currentSlidesName = "Tantrum";
  } else if (title == "3D Room") {
    currentSlides = deskRoomSlides;
    currentSlidesName = "DeskRoom";
  } else if (title == "Raygun") {
    currentSlides = raygunSlides;
    currentSlidesName = "Raygun";
  }

  if (newSlides == true) { // new set of slides
    while (dotCount < currentSlides.length) { // creates dots based on amount of slides
      var child = document.createElement("div");
      child.setAttribute("class", "dots");
      document.getElementById("dotsLayout").appendChild(child);
      dotCount++;
    }
    let dotsList = document.getElementsByClassName("dots");
    for (i = 0; i < dotCount; i++) { // navigating using dots
      dotsList[i].setAttribute("onclick", "showSlide(" + i + ")");
    }
    dotsList[slideNum].className += " active"; // shows inital active dot
    newSlides = false;
  }
  if (newSlide == true) { // new slide showing
    if (document.getElementById("slides").firstChild) { // refreshes showing slide
      (document.getElementById("slides")).removeChild((document.getElementById("slides")).firstChild);
    }
    var string = currentSlides[slideNum];
    if (string.charAt(string.length-1) == "g") { // checks if jpg, png
      var currentSlide = document.createElement("img");
      document.getElementById("expandButton").style.visibility = "visible"; // hides expand image button since video has prebuilt expand
      document.getElementById("expandButton").style.opacity = 1;

      // Prepare a space for a new expanded image for new slide
      if (document.getElementById("expandedSlideImage").firstChild) {
          document.getElementById("expandedSlideImage").removeChild((document.getElementById("expandedSlideImage")).firstChild);
      }
      
    } else if (string.charAt(string.length-1) == "v") { // checks if mov
      var currentSlide = document.createElement("video");
      currentSlide.controls = true;
      currentSlide.disablePictureInPicture = true;
      currentSlide.controlsList = "nodownload";
      currentSlide.autoplay = true;
      currentSlide.volume = 0.2;
      document.getElementById("expandButton").style.visibility = "hidden"; // hides expand image button since video has prebuilt expand
      document.getElementById("expandButton").style.opacity = 0;
    }
    currentSlide.src = currentSlides[slideNum]; //shows slide or video
    document.getElementById("slides").appendChild(currentSlide); 
    newSlide = false;
  }
  if (dotUpdated == false) { // dot updates
    dotUpdate();
    dotUpdated = true;
  }
}

function dotUpdate() { // dot update, description, and subtitle update
  let dotsList = document.getElementsByClassName("dots");
  for (i = 0; i < dotsList.length; i++) { // refreshes dots
    $(dotsList[i]).removeClass("active");
  }
  dotsList[slideNum].className += " active"; // shows active dot

  let currentAbout = document.getElementById("descriptions"); //description update
  let currentSubtitle = document.getElementById("aboutSectionHeader");
  if (slideNum == 0) {
    currentSubtitle.innerHTML = "About";
  }
  // UI/UX Design
  // Float-it Notes
  if (currentSlidesName == "FloatItNotes") {
    if (slideNum == 0) {
      currentSubtitle.innerHTML = "About";
    } else if (slideNum == 1 || slideNum == 2) {
      currentSubtitle.innerHTML = "User Research";
    } else if (slideNum == 3) {
      currentSubtitle.innerHTML = "Competitive Analysis";
    } else if (slideNum == 4) {
      currentSubtitle.innerHTML = "Feature Prioritization List";
    } else if (slideNum == 5 || slideNum == 6 || slideNum == 7) {
      currentSubtitle.innerHTML = "Screenshots";
    } else if (slideNum >= 8) {
      currentSubtitle.innerHTML = "Documentation";
    }
    currentAbout.innerHTML = aboutFloatItNotes[slideNum];
  // Inertia
  } else if (currentSlidesName == "Inertia") {
    if (slideNum == 0) {
      currentSubtitle.innerHTML = "About";
    } else if (slideNum == 1) {
      currentSubtitle.innerHTML = "Background and Competitive Research";
    } else if (slideNum == 2) {
      currentSubtitle.innerHTML = "User Research #1";
    } else if (slideNum == 3) {
      currentSubtitle.innerHTML = "User Research #1 Findings";
    } else if (slideNum == 4) {
      currentSubtitle.innerHTML = "User Flows";
    } else if (slideNum == 5) {
      currentSubtitle.innerHTML = "User Research #2";
    } else if (slideNum == 6) {
      currentSubtitle.innerHTML = "User Research #2 Findings";
    } else if (slideNum == 7) {
      currentSubtitle.innerHTML = "The Game";
    } else if (slideNum == 8) {
      currentSubtitle.innerHTML = "The Fitness App";
    } else if (slideNum == 9) {
      currentSubtitle.innerHTML = "Style Guide";
    }
    currentAbout.innerHTML = aboutInertia[slideNum];
  } else if (currentSlidesName == "Room") {
    if (slideNum == 1) {
      currentSubtitle.innerHTML = "Competitive Analysis";
    } else if (slideNum == 2) {
      currentSubtitle.innerHTML = "User Research";
    } else if (slideNum == 3) {
      currentSubtitle.innerHTML = "User Research Findings";
    } else if (slideNum == 4) {
      currentSubtitle.innerHTML = "Personas";
    } else if (slideNum == 5) {
      currentSubtitle.innerHTML = "Journey Maps";
    } else if (slideNum == 6) {
      currentSubtitle.innerHTML = "User Flows";
    } else if (slideNum == 7) {
      currentSubtitle.innerHTML = "Strategy Document";
    }
    currentAbout.innerHTML = aboutRoom[slideNum];
  // Ask Applications
  } else if (currentSlidesName == "AskApplicationsInternship") {
    if (slideNum == 0) {
      currentSubtitle.innerHTML = "Uninstall Pages";
    } else if (slideNum == 1) {
      currentSubtitle.innerHTML = "Ad Designs";
    } else if (slideNum >= 2) {
      currentSubtitle.innerHTML = "Landing Pages";
    } 
    currentAbout.innerHTML = aboutAskApps[slideNum];
  // Acorn Station
  } else if (currentSlidesName == "Acorn") {
    if (slideNum == 1) {
      currentSubtitle.innerHTML = "Logo Drafts and User Research";
    } else if (slideNum == 2 || slideNum == 3) {
      currentSubtitle.innerHTML = "Product Design Drafts";
    } else if (slideNum == 4) {
      currentSubtitle.innerHTML = "Final Product Design";
    }
    currentAbout.innerHTML = aboutAcorn[slideNum];
  // } else if (currentSlidesName == "TimeInterface") {
  //   if (slideNum == 1) {
  //     currentSubtitle.innerHTML = "About";
  //   } else if (slideNum >= 2) {
  //     currentSubtitle.innerHTML = "Drafts";
  //   }
  //   currentAbout.innerHTML = aboutTimeInterface[slideNum];
  // Game Design
  // Outcast 
  } else if (currentSlidesName == "Outcast") {
    if (slideNum >= 1) {
      currentSubtitle.innerHTML = "Snapshots";
    }
    currentAbout.innerHTML = aboutOutcast[slideNum];
  // Missile Command Clone
  } else if (currentSlidesName == "MissileCommandClone") {
    if (slideNum >= 1) {
      currentSubtitle.innerHTML = "Snapshots";
    }
    currentAbout.innerHTML = aboutMissileCommandClone[slideNum];
  // Wizard's Journey
  } else if (currentSlidesName == "WizardsJourney") {
    if (slideNum >= 1) {
      currentSubtitle.innerHTML = "Snapshots";
    }
    currentAbout.innerHTML = aboutWizardsJourney[slideNum];
  // 3D Modeling + Animation
  // Tantrum
  } else if (currentSlidesName == "Tantrum") {
    if (slideNum >= 1) {
      currentSubtitle.innerHTML = "Snapshots";
    }
    currentAbout.innerHTML = aboutTantrum[slideNum];
  // Desk Room
  } else if (currentSlidesName == "DeskRoom") {
    if (slideNum == 1) {
      currentSubtitle.innerHTML = "Reference";
    } else if (slideNum == 2) {
      currentSubtitle.innerHTML = "WIP";
    }
    currentAbout.innerHTML = aboutDeskRoom[slideNum];
  // Raygun
  } else if (currentSlidesName == "Raygun") {
    if (slideNum == 1) {
      currentSubtitle.innerHTML = "Reference";
    }
    currentAbout.innerHTML = aboutRaygun[slideNum];
  } else {
    currentAbout.innerHTML = "";
  }
}

function showSlide(n) {
  slideNum = n;
  dotUpdated = false;
  newSlide = true;
}

function nextSlide(n) {
  slideNum += n;
  if (currentSlides.length <= slideNum) {
    slideNum = 0;
  }
  if (slideNum < 0) {
    slideNum = currentSlides.length-1;
  }
  dotUpdated = false;
  newSlide = true;
}

function expandCurrentImage() { 
  document.getElementById("expandedSlideScreen").style.visibility = "visible";
  document.getElementById("expandedSlideScreen").style.opacity = "1";
  expandedImageShowing = true;

  var currentSlide = document.getElementById("slides").firstChild;
  if (document.getElementById("expandedSlideImage").firstChild) { // if coming from expanded image view (an expanded image is already prepared), keep same image if on same slide
    return;
  }
  // Otherwise, ready a new expanded image for new slide
  var expandedImage = document.createElement("img");
  expandedImage.src = currentSlide.getAttribute("src");
  expandedImage.style.maxWidth = window.innerWidth;
  expandedImage.style.maxHeight = window.innerHeight;
  expandedImage.style.objectFit = "scale-down";
  document.getElementById("expandedSlideImage").appendChild(expandedImage);
}

function compressCurrentImage() {
  document.getElementById("expandedSlideScreen").style.visibility = "hidden";
  document.getElementById("expandedSlideScreen").style.opacity = "0";
  expandedImageShowing = false;
}

function noSlideShow() {
  if (document.getElementById("slides").firstChild) { // refreshes showing slide
    (document.getElementById("slides")).removeChild((document.getElementById("slides")).firstChild);
  }
  if (document.getElementById("expandedSlideImage").firstChild) { // refreshes expanded slide image space and hides it
    document.getElementById("expandedSlideImage").removeChild((document.getElementById("expandedSlideImage")).firstChild);
  }
  compressCurrentImage();

  document.getElementById("widgets").style.gridTemplateRows = "15px 30px 30px 30px 15px";
  document.getElementById("soundIcon").style.display = "initial";
  document.getElementById("slideshow").style.visibility = "hidden";
  document.getElementById("slideshow").style.opacity = "0";
  moveSpeed = staticMoveSpeed;
  slideNum = 0;
  dotCount = 0;
  dotUpdated = false;
  var parent = document.getElementById("dotsLayout");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  newSlides = true;
  newSlide = true;
}

function noMoving() {
  moveSpeed = 0;
  player.changeAnimation("idle");
  player.velocity.y = 0;
}

function leaveSlidesCheck() {
  if (keyPressed()) {
    slideShowing = false;
  }
  noMoving();
}

function fadeInEffect () {
  $(".bouncingDaisies").remove();
  $(".loader-wrapper").fadeIn(0);
  $(".loader-wrapper").delay(200).fadeOut(800, "linear");
}

function sound(src) { // reference: https://www.w3schools.com/graphics/game_sound.asp
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function backToStart() {
  player.position.x = beginningSection;
  fadeInEffect();
  noSlideShow();
}

 function mainMenu() {
   window.location = "index.html";
 }

 //  Reference: https://attacomsian.com/blog/javascript-detect-mobile-device
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
  }
  return "desktop";
};

function joystickUserInput() {
  console.log("");
  document.getElementById("joystick-innerCircle").style.top = "20%";
  document.getElementById("joystick-innerCircle").style.left = "20%";
}