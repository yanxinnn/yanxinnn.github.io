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
  "The sky isn't blue. It's actually #90c7f7🤓"
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
var graphicWebTp;
var greenTpFrames;
var greenTp1 = "images/environment/greenTp1.png";
var greenTp2 = "images/environment/greenTp2.png";
var greenTp3 = "images/environment/greenTp3.png";
var graphicWebSection;
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

// UI/UX + Web
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
  "images/slides/floatIt01.png",
  "images/slides/floatIt02.png",
  "images/slides/floatIt03.png",
  "images/slides/floatItQuestions.png",
  "images/slides/floatItUserResearch.png",
  "images/slides/floatItCompetitor.png",
  "images/slides/floatItMoscow.png",
  "images/slides/floatItDocumentation1.png",
  "images/slides/floatItDocumentation2.mov"
]
var aboutFloatItNotes = [
  "Float-it Notes - Float Your Stress Away <br><br> \
  Staying on track with classes, work, meetings, assignments, and deadlines is hard. It's stressful enough when life seems to have it out for you and throws all the lemons it's got at you. But on top of that, you have to deal with schoolwork, work-work, life-work, all the things you need to work on, but for some reason, it's just not working out. <br><br>I decided to tackle this great woe of our generation by building a chrome extension that helps users stay afloat in the hecticity of their everyday by providing them with a sanctuary in their New Tab page where they can stay organized, motivated, and sane, with light-hearted aesthetics, daily inspirational quotes, and built-in task management tools. <br><br>Users store their tasks as bottles that get added onto their New Tab page's waterscape and can view/update their tasks throughout the day. <br><br>Features include a time/date display, planner functionalities (create/edit/delete tasks, create/edit/delete subjects, progress tracker for tasks, and customizable color coded subjects), hand-drawn images and animations, and daily inspirational quotes.<br><br>This was my undergrad Senior Capstone Project that I am continuing to work on and is for those who need a planner and appreciate a bit of playfulness throughout their daily chrome browsing experience! \
  <br><br><div class='createdWith'>Created with HTML/CSS, Javascript, Adobe Photoshop, and Medibang Paint</div>",

  "Screenshots of page when there are no tasks (top) and when there are tasks (bottom). \
  <br><br><div class='createdWith'>Created with HTML/CSS, Javascript, Adobe Photoshop, and Medibang Paint</div>",

  "Screenshots of page when users click/hover bottles (top) and confirmation pop-up for deletion of a task (bottom). \
  <br><br><div class='createdWith'>Created with HTML/CSS, Javascript, Adobe Photoshop, and Medibang Paint</div>",

  "Screenshots of create a new subject form (top left), create a new task form (right), and view of existing subjects (bottom left). \
  <br><br><div class='createdWith'>Created with HTML/CSS, Javascript, Adobe Photoshop, and Medibang Paint</div>",

  "My target audience is Chrome users on laptops/desktops ages 14-25. My initial user research goal was to find out my target audience's general online habits, their usage of planners, if any (physical and/or digital), their favorite aspects of their current solution, and parts of their current solution that don’t work for them. <br><br>These are the user research questions that I asked participants (ages 16-23) during one-on-one interviews.",

  "From my user research, I was able to understand who popular competitors are for futher competitive analysis, important planner functionalities that users preferred, and what tools are considered “fluff” and/or unnecessary by a majority of them. <br><br>Here are some of the big takeaways from the interviews: <br><br>1. Most of the participants use a digital planner with a few using a mix of both/only physical planners. Most of the digital planner users used Google Calenders, Notes app, or Trello to keep track of their schedules and to-do lists. <br><br>2. Benefits of using digital planners for participants include ease of organization (pre-formatted unlike physical planners), easy access on the phone/computer, being able to see a daily/weekly view of their schedule, \
  a place to have important links, and reminders. Pain points of using digital planners include the lack of \
  customization outside of text boxes, an overwhelming amount of tools that go unused, and the lack of sorting by subject/groups. <br><br>3. Benefits of physical planners include the freedom of formatting (not prestructured like digital planners), ability to add creative non-text additions, and a space for brain dump. Pain points include not being able to edit tasks like digital planners, it being harder to find what you’re looking for in all the pages, and needing to carry it around everywhere.",

  "Here are some of the competitors I researched that take over the New Tab page. I took note of each of their taglines, audiences, purposes, features, scopes, and visual styles.",

  "Based on my research findings, I came up with a list of considerations for my chrome extension to include features that users appreciate in a planner/task manager. I used the MoSCoW method to prioritize certain features to be completed in time for my Undergrad Senior Capstone Project Gallery Exhibition but plan to implement more of them before releasing my chrome extension onto the Chrome App Store!",

  "An early rough sketch of Float-it Notes (top) and a work-in-progress screenshot (bottom). <br><br>Fun fact: The name Float-it Notes is a wordplay of Post-it Notes, because instead of posting stuff, you're floating them :)! \
  <br><br><div class='createdWith'>Created with HTML/CSS, Javascript, Adobe Photoshop, and Medibang Paint</div>",

  "An early in-progress video showcasing creating/deleting tasks. <br><br>Fun fact: Another name considered for Float-it Notes was Task in a Flask, but the name Float-it Notes was picked because it was easier to say!\
  <br><br><div class='createdWith'>Created with HTML/CSS, Javascript, Adobe Photoshop, and Medibang Paint</div>"
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
  <button class='slidesLink' onclick=\"window.open('https://www.figma.com/file/4GKpbsBQxAKKfarmcLW0tp/Inertia','_blank')\">View Figma Designs</button><br><br> \
  Studies in 2021 have shown that more than 82 million US residents aged 6 and above don't exercise at all, making it more likely for them to develop a host of health problems like high blood pressure, high cholesterol, and heart disease. On the other hand, the mobile gaming market is booming, with global mobile games revenue on track to surpass the $100 billion mark by 2023. <br><br>So here are our two facts: <br><br> 1. A lot of people don't exercise enough. <br> 2. A lot of people love their mobile games. <br><br> This brought me to ask the question, what if working out was as addicting as a game? What if... it was a game? <br><br> \
  I designed Inertia, a mobile fitness game that helps members of the gaming community and RPG fans transform their gaming passions into a healthier lifestyle. <br><br>Inertia gives users a setting they are familiar and drawn to, RPG games, and motivates users to workout by recognizing their efforts with in-game rewards and progression. While the rewards of physical body changes from working out might take at least a few months to show, Inertia helps keep users excited for their next session by providing more immediate feedback every time they complete a run or workout.\
  <br><br> For this project, I: <br><br> - Researched exercise and mobile gaming statistics in the US <br>- Analyzed competitor fitness apps and their features<br>- Conducted two rounds of user research amongst gamers to learn my target audience's core needs and workout habits (1st round) and to recieve insight for how users interact with the mobile prototype (2nd round) <br>- Generated user-flows for different user experiences <br>- Created a style guide for the app's colors, typography, buttons, and branding <br>- Designed low and high-fidelity wireframes prototyping the sign-in/sign-up process, character creation, various game features (inventory, shop, skills, and Battle Tower system) and the workout experience for users. \
  <br><br><div class='createdWith'>Created with Figma</div>",

  "I started this project with background research on exercise and mobile gaming, primarily in the US, to gain an understanding of how my hybrid app can potentially bridge the gap between these two industries. Further competitive analysis of various fitness apps showed how current solutions were addressing the problem of inactivity among US residents and the various features that made them successful/stand out, giving me ideas for features to incorporate into Inertia.",

  "My first round of user research's goal was to learn my target audience's core needs and workout habits. <br><br>I surveyed 16 participants, ages 15-21, that played at least 3 hours of games a week, and asked them questions concerning their gaming and exercise habits and preferences. These surveys were done through Google Forms for anonymity as some people may not be comfortable disclosing sensitive information such as how much they exercise, how long they spend playing games, etc.",

  "Main findings from the first round of user research included: <br><br>1. Participants’ reasons for playing games were for entertainment, escape, or socialization. <br><br>2. What participants found most appealing about RPGs were the storylines, the game completion/achievements, ability to play with friends, the sense of progression, and character creation and customization. <br><br>3. Most of participants that did work out either did light workouts a few times a week just to keep active and did not have workout equipment. <br><br>4. Participants' motivations for working out were for physical changes, more energy, self-esteem, sports-related, and mental health reasons. <br><br>This research was crucial in understanding the target audience and their needs and served as a guide for the brainstorming and subsequent designs of Inertia.",

  "I created multiple user-flows for different user motives, such as a user-flow for returning users logging on to complete a workout (using Workout) and a user-flow for returning users preparing character for the Battle Tower (using Shop, Skills, Inventory, Battle Tower). <br><br>In the image is the main user flow, showing all the possible navigations users can make within the app. <br><br><div class='createdWith'>Created with Figma</div>",

  "The second round of user research was live 1-on-1 recorded interviews with participants on either Zoom or Discord testing for app navigation and usability. <br><br>In these 10-15 minute interviews, participants were given a link to a mobile prototype of Inertia and asked to share their screen while I asked them a series of questions and gave them tasks to complete within the app.",

  "From the second round of user research, I got a lot of valuable feedback that I incorporated into the final design of Inertia. As my users were all gamers interacting with Inertia for the first time, they were able to bring in their own knowledge and understanding of games they are used to playing, helping me improve the user experience of Inertia as not only a fitness app, but also as a functional and enjoyable game. <br><br>Highlighted bullet points in the image indicate popular/repeated feeback from participants.",

  "The app's game portion is an RPG. Users play as a character of a class of their choosing (warrior, mage, priest, archer, or assassin) as they battle their way through floors of the virtual world’s dungeon, called the Battle Tower, either solo or with friends. The battle system is turn based, with each player/enemy character using their mana to cast an ability on their turn. The battle ends when all the characters of a side has no health left. <br><br>Players can make their characters stronger with equipment and skill points they gain from working out. They can sell/buy/customize their equipment in the Shop, level up their unique class skills/abilities in Skills, and change their equipment and character appearance in Inventory. <br><br><div class='createdWith'>Created with Figma</div>",

  "The fitness portion of the app consists players completing runs or workouts for the chance to obtain better equipment and to gain skill points to aid them in their Battle Tower climb. <br><br>The first few floors of the Battle Tower can be defeated without grinding out runs and workouts to give users a taste of what the gameplay is like and hopefully, make them excited to exercise to continue advancing. The rewards from these workouts scales with the user's in-game progression. <br><br>To ensure that users are honestly working out, the app will require users to verify their exercises by scanning QR codes on workout machines, using their phone's camera to track their movements, or linking to a heart rate monitor. <br><br><div class='createdWith'>Created with Figma</div>",

  "Last but not least, I also created a style guide for Inertia to make sure that the app's colors, typography, buttons, and branding are consistent throughout all the pages for a holistic user experience. <br><br><div class='createdWith'>Created with Figma</div>"
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
  "images/slides/askApps2.png",
  "images/slides/askApps3.png",
  "images/slides/askApps4.png",
  "images/slides/askApps5.png",
  "images/slides/askApps6.png",
  "images/slides/askApps7.png"
]
var aboutAskApps = [
  "Uninstall pages created for three Ask Apps browser extensions. <br><br>This was a collaboration with the product management intern to boost install rates for other company products after users uninstall these extensions. Instead of the usual uninstall page asking users for feedback after uninstallation (which often went unread and unorganized due to the large quantity), our proposal aims to use the space in a more effective and productive way. <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "Sample #1 of ad designs made for Slimware in accordance to Google compliant ad specifications. <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "Sample #2 of ad designs made for Slimware in accordance to Google compliant ad specifications. <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "Sample #1 of landing page designs created for various browser extensions. <br><br> As Ask Apps has over a hundred browser extensions, many with the same generic landing page design, I aimed to differentiate and liven them up by giving them their own unique landing page designs that were related to the extension's function in some way. <br><br><div class='createdWith'>Created with Adobe Photoshop, proprietary CMS, and HTML/CSS</div>",

  "Sample #2 of landing page designs for various browser extensions. <br><br><div class='createdWith'>Created with Adobe Photoshop, proprietary CMS, and HTML/CSS</div>",

  "Sample #3 of landing page designs for various browser extensions. <br><br><div class='createdWith'>Created with Adobe Photoshop, proprietary CMS, and HTML/CSS</div>",

  "Sample #4 of landing page designs for various browser extensions. <br><br><div class='createdWith'>Created with Adobe Photoshop, proprietary CMS, and HTML/CSS</div>"
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

  "For this project, I conceptualized a company and created a logo and physical applications for it. \
  \"acorn\" is a health and wellness company that is dedicated to helping people live healthier \
  and more eco-friendly lifestlyes. <br><br>For the logo, I chose a simplistic and geometric design \
  to emphasize the company's clean and environmental conscious mission. Squirrel-like shapes and \
  custom lettering were created from transformations on circles. <br><br><div class='createdWith'>Created with Adobe Illustrator</div>",

  "In the brainstorming stage, I came up with 10 unique designs for the \"acorn\" logo. \
  I did a survey with 25 people to find out which of these 10 were the most appealing to others. From \
  this feedback, I was able to narrow down the possible designs to 3. <br><br>I then created sevaral iterations \
  of the 3 designs, playing around with fonts, colors, spacing, and other design elements. \
  Shown in the picture are some of the iterations of the 3 chosen designs. <br><br><div class='createdWith'>Created with Adobe Illustrator</div>",

  "In the next step, I take the logo I've made for \"acorn\" and created drafts for possible company merchandise. \
  <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "I ended up selecting the water bottle and made three design iterations. <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "Here are the final products! <br><br><div class='createdWith'>Created with vinyl sheets, vinyl cutter, and bottles </div>"

]

var timeInterfaceFrames;
var timeInterface1 = "images/environment/timeInterface1.png";
var timeInterface2 = "images/environment/timeInterface2.png";
var timeInterface3 = "images/environment/timeInterface3.png";
var timeInterface4 = "images/environment/timeInterface4.png";
var timeInterface5 = "images/environment/timeInterface5.png";
var timeInterface;
var timeInterfaceSection;
var timeInterfaceSlides = [
  "images/slides/timeInterface02.png",
  "images/slides/timeInterface01.png",
  "images/slides/timeInterface03.png",
  "images/slides/timeInterface04.png"
]
var aboutTimeInterface = [
  "Alternative clock interface designs created and scaled for LinkNYC kiosks. <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "An alternative clock interface design that explores the relationship between time and weather. Distinguishes \
  the type and severity of the current percipitation within the span of an hour (1st column), the forecast for tomorrow (2nd column), \
  and the forecast for the next few days (3rd column). <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "Drafts #1. Initial low fidelity prototype. <br><br><div class='createdWith'>Created with Adobe Photoshop</div>",

  "Drafts #2. Sample of iterations made for the 3 screens. <br><br><div class='createdWith'>Created with Adobe Photoshop</div>"
]

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
  "\"Outcast\" is a narrative RPG adventure developed by a team of 3. My role was the game's lead artist and map designer. All sprites other than the player model are originals. Plot: A young boy who once weilded the most \
  powerful sword known to man loses everything and everyone he knows and loves when his village is attacked by strange hostile creatures. The hostile race steals the legendary sword and banishes the main character into an unfamiliar world. \
  <br><br><div class='createdWith'>Created with Gamemaker Studio 2 and Medibang Paint</div>",

  "Snapshot #1. <br><br><div class='createdWith'>Created with Gamemaker Studio 2 and Medibang Paint</div>",

  "Snapshot #2. <br><br><div class='createdWith'>Created with Gamemaker Studio 2 and Medibang Paint</div>",

  "Snapshot #3. <br><br><div class='createdWith'>Created with Gamemaker Studio 2 and Medibang Paint</div>",

  "Snapshot #4. <br><br><div class='createdWith'>Created with Gamemaker Studio 2 and Medibang Paint</div>",

  "Snapshot #5. <br><br><div class='createdWith'>Created with Gamemaker Studio 2 and Medibang Paint</div>"
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
  "A clone of the classic arcade game Missile Command by Atari. Complete with a menu page, scaling level difficulty, true-to-original sprites, point system, and game-over screen. <br><br><div class='createdWith'>Created with GameMaker Studio 2</div>",

  "Snapshot #1. <br><br><div class='createdWith'>Created with GameMaker Studio 2</div>",

  "Snapshot #2. <br><br><div class='createdWith'>Created with GameMaker Studio 2</div>"
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
  "An original multiplayer vertical obstacle race game. There are 3 playable characters each with different spells that can be used to hinder other players or to destroy incoming map projectiles. Mana bars at the top indicate the respective color's ability to use spells and teleport \
  back into view if they fall behind. Characters that run out of mana are removed from the race. First to the top wins! <br><br><div class='createdWith'>Created with GameMaker Studio 2</div>",

  "Snapshot #1 of starting match countdown. <br><br><div class='createdWith'>Created with GameMaker Studio 2</div>",

  "Snapshot #2 of characters climbing up obstacle course. <br><br><div class='createdWith'>Created with GameMaker Studio 2</div>",

  "Snapshot #3 of end game screen. Confetti matches color of winning character. If there is no winner (no one made it to the top), no one ends up on the pedestal and there is no confetti :(<br><br>Fun fact: The confetti in this game is the same sprite used for the falling petals on this portfolio, just recolored!<br><br><div class='createdWith'>Created with GameMaker Studio 2</div>"
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
  "1 minute animation of a child going through the stages of grief over a box of KitKat. <br><br><div class='createdWith'>Created with Autodesk Maya and Adobe Photoshop</div>",

  "Snapshot #1 of bargaining stage. <br><br><div class='createdWith'>Created with Autodesk Maya</div>",

  "Snapshot #2 of anger stage. <br><br><div class='createdWith'>Created with Autodesk Maya</div>",

  "Snapshot #3 of acceptance stage. <br><br><div class='createdWith'>Created with Autodesk Maya</div>"
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
  "Rendered 3d model of a room created from a reference photo. <br><br><div class='createdWith'>Created with Autodesk Maya</div>",

  "Reference photo used for room model. Thanks Pinterest!",

  "Work in progress screenshot of room, rendered. <br><br><div class='createdWith'>Created with Autodesk Maya</div>"
]

var raygunFrames;
var raygun;
var raygunSection;
var raygunSlides = [
  "images/slides/raygun.mov",
  "images/slides/raygunReference.png"
]
var aboutRaygun = [
  "Rendered 3d model of raygun from reference. <br><br><div class='createdWith'>Created with Autodesk Maya</div>",

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

  // UI/UX + Web
  floatItFrames = loadAnimation(floatIt1, floatIt2, floatIt3, floatIt4);
  inertiaFrames = loadAnimation(inertia1, inertia2, inertia3, inertia4);
  askAppsFrames = loadAnimation(askApps1, askApps2, askApps3, askApps4);
  acornStationFrames = loadImage("images/environment/acornStation.png");
  timeInterfaceFrames = loadAnimation(timeInterface1, timeInterface2, timeInterface3, timeInterface4, timeInterface5);

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

  // UI/UX + Web Design
  greenTpFrames.frameDelay = 12;
  graphicWebTp = createSprite(platformsGroup[15].position.x, window.innerHeight-200, 100, 100);
  graphicWebTp.addAnimation("static", greenTpFrames);
  graphicWebSection = platformsGroup[21].position.x;

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

  // UI/UX + Web (back)
  floatItFrames.frameDelay = 15;
  floatItSection = graphicWebSection + 250;
  floatItNotes = createSprite(floatItSection, window.innerHeight-220, 220, 140);
  floatItNotes.addAnimation("static", floatItFrames);

  inertiaFrames.frameDelay = 25;
  inertiaSection = graphicWebSection + 550;
  inertia = createSprite(inertiaSection, window.innerHeight-225, 180, 150);
  inertia.addAnimation("static", inertiaFrames);

  askAppsFrames.frameDelay = 20;
  askAppsSection = graphicWebSection + 840;
  askApps = createSprite(askAppsSection, window.innerHeight-225, 160, 150);
  askApps.addAnimation("static", askAppsFrames);

  acornSection = graphicWebSection + 1180;
  acornStation = createSprite(acornSection, window.innerHeight-225, 300, 150);
  acornStation.addImage(acornStationFrames);

  timeInterfaceFrames.frameDelay = 100;
  timeInterfaceSection = graphicWebSection + 1500;
  timeInterface = createSprite(timeInterfaceSection, window.innerHeight-225, 100, 150);
  timeInterface.addAnimation("static", timeInterfaceFrames);

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

  background(color(144,199,247));
  globalTimer++;

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
      chatBox(yanxin, 200, 450, 135);
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"), LEFT, 18);
      typeWriter(yanxinTexts[0], yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
      firstGreetingFinished = true;
    } else if (keyPressed() == "E") {
      if (greetingUsed == true) {
        randomText = random(yanxinTexts);
        greetingUsed = false;
      }
      chatBox(yanxin, 200, 450, 135);
      displayText("Yanxin", yanxin, 170, 400, 10, color("#FFBEBE"), LEFT, 18);
      typeWriter(randomText, yanxin, 140, 400, chatCounter, chatTimer, 10, 255);
    } else {
      interactText("Press \"E\" to interact", yanxin, -50);
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
  if (player.position.x >= graphicWebSection) {
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
    document.getElementById("locationMessage").style.backgroundColor = "#FFCCCC";
    let startColor = color(135,201,226);
    let endColor = color(148,193,234);
    background(lerpColor(startColor, endColor, map(player.position.x - gameSection, -gradientRange, gradientRange, 0, 1)));
  }
  else if (player.position.x >= graphicWebSection - 100) {
    document.getElementById("locationMessage").innerHTML = "UI/UX + Web Design";
    document.getElementById("locationMessage").style.backgroundColor = "#BEE8CC";
    let startColor = color(136,195,245);
    let endColor = color(135,201,226);
    background(lerpColor(startColor, endColor, map(player.position.x - graphicWebSection, -gradientRange, gradientRange, 0, 1)));
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

  // Teleporters
  if (globalTimer >= 20) { // hover effect for teleporter text
    hoverAmnt = 4;
    if (globalTimer >= 60) {
      hoverAmnt = -4;
      globalTimer = -20;
    }
  }

  displayText("Back to Teleporters", beginningTp, 30, 120, 5, 255, CENTER, 20);
  if (abs(beginningTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = beginningSection;
    }
    else {
      interactText("Press \"E\" to teleport", beginningTp, -50);
    }
  }

  // Sound
  var sound = document.getElementById("sound");

  // UI/UX + Web Design
  displayText("UI/UX + Web Design", graphicWebTp, 30, 200, 5, 255, CENTER, 20, hoverAmnt);
  if (abs(graphicWebTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = graphicWebSection;
    }
    else {
      interactText("Press \"E\" to teleport", graphicWebTp, -50);
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
      interactText("Press \"E\" to view", floatItNotes, -85);
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
      interactText("Press \"E\" to view", inertia, -85);
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
      interactText("Press \"E\" to view", askApps, -90);
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
      interactText("Press \"E\" to view", acornStation, -90);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }
  // Time Interface
  if (abs(timeInterface.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      slideShow("LinkNYC Time Interface");
      if (sound.checked) { continueSound = true; }
      else { continueSound = false; }
      slideShowing = true;
    }
    else if (slideShowing == true) {
      leaveSlidesCheck();
    }
    else {
      interactText("Press \"E\" to view", timeInterface, -90);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

  // Game
  displayText("Game Design", gameTp, 30, 150, 5, 255, CENTER, 20, hoverAmnt);
  if (abs(gameTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = gameSection;
    }
    else {
      interactText("Press \"E\" to teleport", gameTp, -50);
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
      interactText("Press \"E\" to view", outcast, -80);
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
      interactText("Press \"E\" to view", missileCommand, -80);
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
      interactText("Press \"E\" to view", wizardsJourney, -80);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

  // 3D Modeling + Animation
  displayText("3D Modeling + Animation", threeDTp, 30, 180, 5, 255, CENTER, 20, hoverAmnt);
  if (abs(threeDTp.position.x - player.position.x) <= 100) {
    if (keyPressed() == "E") {
      fadeInEffect();
      player.position.x = threeDSection;
    }
    else {
      interactText("Press \"E\" to teleport", threeDTp, -50);
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
      interactText("Press \"E\" to view", tantrum, -90);
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
      interactText("Press \"E\" to view", deskRoom, -120);
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
      interactText("Press \"E\" to view", raygun, -80);
      noSlideShow();
      if (sound.checked && continueSound == true) { toggleSound(); continueSound = false; }
    }
  }

    // Video
    // displayText("Video Editing", videoTp, 30, 150, 5, 255, CENTER, 20, hoverAmnt);
    // if (abs(videoTp.position.x - player.position.x) <= 100) {
    //   if (keyPressed() == "E") {
    //     fadeInEffect();
    //     player.position.x = videoSection;
    //   }
    //   else {
    //     interactText("Press \"E\" to teleport", videoTp, -50);
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
function interactText(txt, target, hover) {
  textSize(18);
  textAlign(CENTER);
  text(txt, target.position.x, target.position.y+hover);
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

function chatBox(target, hover, length, height) {
  var boxColor = color(0);
  boxColor.setAlpha(80);
  fill(boxColor);
  noStroke();
  rect(target.position.x-(length/2), target.position.y-hover, length, height, 5);
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
  } else if (title == "Ask Applications Internship") {
    currentSlides = askAppsSlides;
    currentSlidesName = "AskApplicationsInternship";
  } else if (title == "acorn") {
    currentSlides = acornSlides;
    currentSlidesName = "Acorn";
  } else if (title == "LinkNYC Time Interface") {
    currentSlides = timeInterfaceSlides;
    currentSlidesName = "TimeInterface";
  } 
  // Game Design
  else if (title == "Outcast") {
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
  // UI/UX + Web Design
  // Float-it Notes
  if (currentSlidesName == "FloatItNotes") {
    if (slideNum == 0) {
      currentSubtitle.innerHTML = "About";
    } else if (slideNum == 1 || slideNum == 2 || slideNum == 3) {
      currentSubtitle.innerHTML = "Screenshots";
    } else if (slideNum == 4 || slideNum == 5) {
      currentSubtitle.innerHTML = "User Research";
    } else if (slideNum == 6) {
      currentSubtitle.innerHTML = "Competitive Analysis";
    } else if (slideNum == 7) {
      currentSubtitle.innerHTML = "Feature Prioritization List";
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
  // Ask Applications
  } else if (currentSlidesName == "AskApplicationsInternship") {
    if (slideNum == 0) {
      currentSubtitle.innerHTML = "Uninstall Pages";
    } else if (slideNum == 1 || slideNum == 2) {
      currentSubtitle.innerHTML = "Ads for Slimware";
    } else if (slideNum >= 3) {
      currentSubtitle.innerHTML = "Landing Pages for Browser Extensions";
    } 
    currentAbout.innerHTML = aboutAskApps[slideNum];
  // Acorn Station
  } else if (currentSlidesName == "Acorn") {
    if (slideNum == 1 || slideNum == 2) {
      currentSubtitle.innerHTML = "Logo Drafts";
    } else if (slideNum == 3 || slideNum == 4) {
      currentSubtitle.innerHTML = "Physical Application Drafts";
    } else if (slideNum == 5) {
      currentSubtitle.innerHTML = "Final Physical Applications";
    }
    currentAbout.innerHTML = aboutAcorn[slideNum];
  } else if (currentSlidesName == "TimeInterface") {
    if (slideNum == 1) {
      currentSubtitle.innerHTML = "About";
    } else if (slideNum >= 2) {
      currentSubtitle.innerHTML = "Drafts";
    }
    currentAbout.innerHTML = aboutTimeInterface[slideNum];
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
