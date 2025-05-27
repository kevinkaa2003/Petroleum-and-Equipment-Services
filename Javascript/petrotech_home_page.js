
let currentRow = 0;
const slideshows = {
   slideshow1: {
       currentRow: 0,
       rows: document.querySelectorAll("#slideshowtable tr")
   }
}
function showRow(slideshowId, index) {
hideRowsExceptCurrent(slideshowId, index);
}

function nextRow(slideshowId) {
   const slideshow = slideshows[slideshowId];
   if (slideshow.currentRow < slideshow.rows.length - 1) {
       slideshow.currentRow++;
   } else {
       slideshow.currentRow = 0;
   }
   showRow(slideshowId, slideshow.currentRow);
}

function previousRow(slideshowId) {
   const slideshow = slideshows[slideshowId];
   if (slideshow.currentRow > 0) {
       slideshow.currentRow--;
   } else {
       slideshow.currentRow = slideshow.rows.length - 1;
   }
   showRow(slideshowId, slideshow.currentRow);
}

function startSlideshow(slideshowId, interval) {
setInterval(() => nextRow(slideshowId), interval);
}

function hideRowsExceptCurrent(slideshowId, currentIndex) {
const slideshow = slideshows[slideshowId];
slideshow.rows.forEach((row, i) => {
   const message = row.querySelector(".message");
   const orderbuttoncontainer = row.querySelector(".orderbuttoncontainer");
   row.classList.remove("fade-in");
   message.classList.remove("expand-width");
   row.style.display = i === currentIndex ? "" : "none";
   if (i === currentIndex) {
       // Adding the fade-in class for the current row
       row.classList.add("fade-in");
       // Add the fade-in class for the order button container
       orderbuttoncontainer.classList.add("fade-in");
        // Adding the expand-width animation for the message
       message.classList.add("expand-width");
       }
});
}   

// Initialize the first row as visible
Object.keys(slideshows).forEach(slideshowId => {
   showRow(slideshowId, 0);
   startSlideshow(slideshowId, 10000); // Change slide every 5 seconds
  
});
const services = [
   { name: "Home", url: "index.html" },
   { name: "Casing and Tubing", url: "petrotech_casing_and_tubing_page.html" },
   { name: "Cementing Equipment", url: "petrotech_cementing_equipment_page.html" },
   { name: "Completion Equipment", url: "petrotech_completion_equipment_page.html" },
   { name: "Downhole Tools", url: "petrotech_downhole_tools_page.html" },
   { name: "Drill Bit", url: "petrotech_drill_bit_page.html" },
   { name: "Drill Pipes", url: "petrotech_drill_pipes_page.html" },
   { name: "Drilling Fluids", url: "petrotech_drilling_fluids_and_mud_systems_page.html" },
   { name: "Mud Systems", url: "petrotech_drilling_fluids_and_mud_systems_page.html" },
   { name: "Drilling Rigs", url: "petrotech_drilling_rigs_and_equipment_page.html" },
   { name: "Fishing Tools", url: "petrotech_fishing_tools_page.html" },
   { name: "Logging and Measurement Tools", url: "petrotech_logging_and_measurement_tools_page.html" },
   { name: "Safety and Control Equipment", url: "petrotech_safety_and_control_equipment_page.html" },
   { name: "Surface Equipment", url: "petrotech_surface_equipment_page.html" },
   { name: "Wellheads and Christmas Trees", url: "petrotech_wellheads_and_christmas_trees_page.html" },


   { name: "Tubing", url: "petrotech_casing_and_tubing_page.html" },
   { name: "Cement", url: "petrotech_cementing_equipment_page.html" },
   { name: "Completion", url: "petrotech_completion_equipment_page.html" },
   { name: "Downhole", url: "petrotech_downhole_tools_page.html" },
   { name: "Bits", url: "petrotech_drill_bit_page.html" },
   { name: "Pipes", url: "petrotech_drill_pipes_page.html" },
   { name: "Fluids", url: "petrotech_drilling_fluids_and_mud_systems_page.html" },
   { name: "Rigs", url: "petrotech_drilling_rigs_and_equipment_page.html" },
   { name: "Fishing", url: "petrotech_fishing_tools_page.html" },
   { name: "Measurement", url: "petrotech_logging_and_measurement_tools_page.html" },
   { name: "Control", url: "petrotech_safety_and_control_equipment_page.html" },
   { name: "Surface", url: "petrotech_surface_equipment_page.html" },
   { name: "Christmas Trees", url: "petrotech_wellheads_and_christmas_trees_page.html" }
   
   
];

function searchServices() {
   const input = document.getElementById("searchbar").value.toLowerCase();
   const resultsDiv = document.getElementById("search-results");
   resultsDiv.innerHTML = "";
   let hasResults = false;

   services.forEach(service => {
       if (service.name.toLowerCase().includes(input)) {
           hasResults = true;
           const link = document.createElement("a");
           link.href = service.url;
           link.textContent = service.name;
           resultsDiv.appendChild(link);
       }
   });
   if (!hasResults) {
       const noResultsMessage = document.createElement("div");
       noResultsMessage.textContent = "No results match your search.";
       noResultsMessage.style.color = "rgb(0, 157, 255)";
       noResultsMessage.className = "no-results";
       resultsDiv.appendChild(noResultsMessage);
   }
}

document.addEventListener('DOMContentLoaded', function() {
   const missionStatement = document.querySelector('.missionstatement');
   const dropdownMissionStatement = document.querySelector('.dropdownmissionstatement');

   const history = document.querySelector('.history');
   const dropdownHistory = document.querySelector('.dropdownhistory');

   const goals = document.querySelector('.goals');
   const dropdownGoals = document.querySelector('.dropdowngoals');

   const missionStatementfooter = document.querySelector('.missionstatementfooter');
   const dropdownMissionstatementFooter = document.querySelector('.dropdownmissionstatementfooter');

   const historyFooter = document.querySelector('.historyfooter');
   const dropdownHistoryfooter = document.querySelector('.dropdownhistoryfooter');

   const goalsFooter = document.querySelector('.goalsfooter');
   const dropdownGoalsfooter = document.querySelector('.dropdowngoalsfooter');




   missionStatement.addEventListener('mouseenter', function() {
       const rect = missionStatement.getBoundingClientRect();
       dropdownMissionStatement.style.display = 'block';
       // Trigger reflow to ensure the transition works
       dropdownMissionStatement.offsetHeight;

       dropdownMissionStatement.style.height = '500px'; // Set to desired height
       
   });

   missionStatement.addEventListener('mouseleave', function() {
       dropdownMissionStatement.style.height = '0';
       setTimeout(() => {
       dropdownMissionStatement.style.display = 'none';
   }, 300); // Timeout matches the duration of the transition
   });

   history.addEventListener('mouseenter', function() {
       const rect = history.getBoundingClientRect();
       dropdownHistory.style.display = 'block';
       // Trigger reflow to ensure the transition works
       dropdownHistory.offsetHeight;

       dropdownHistory.style.height = '500px'; // Set to desired height

       
   });

   history.addEventListener('mouseleave', function() {
       dropdownHistory.style.height = '0';
       setTimeout(() => {
       dropdownHistory.style.display = 'none';
   }, 300); // Timeout matches the duration of the transition
   });

   goals.addEventListener('mouseenter', function() {
       const rect = goals.getBoundingClientRect();
       dropdownGoals.style.display = 'block';
       // Trigger reflow to ensure the transition works
       dropdownGoals.offsetHeight;

       dropdownGoals.style.height = '500px'; // Set to desired height

   });

   goals.addEventListener('mouseleave', function() {
       dropdownGoals.style.height = '0';
       setTimeout(() => {
       dropdownGoals.style.display = 'none';
   }, 300); // Timeout matches the duration of the transition
   });











   missionStatementfooter.addEventListener('mouseenter', function() {
       const rect = missionStatementfooter.getBoundingClientRect();
       dropdownMissionstatementFooter.style.display = 'block';
       // Trigger reflow to ensure the transition works
       dropdownMissionstatementFooter.offsetHeight;

       dropdownMissionstatementFooter.style.height = '450px'; // Set to desired height
   });

   missionStatementfooter.addEventListener('mouseleave', function() {
       dropdownMissionstatementFooter.style.height = '0';
       setTimeout(() => {
       dropdownMissionstatementFooter.style.display = 'none';
   }, 300); // Timeout matches the duration of the transition
   });

   historyFooter.addEventListener('mouseenter', function() {
       const rect = historyFooter.getBoundingClientRect();
       dropdownHistoryfooter.style.display = 'block';
       // Trigger reflow to ensure the transition works
       dropdownHistoryfooter.offsetHeight;

       dropdownHistoryfooter.style.height = '450px'; // Set to desired height

       
   });

   historyFooter.addEventListener('mouseleave', function() {
       dropdownHistoryfooter.style.height = '0';
       setTimeout(() => {
       dropdownHistoryfooter.style.display = 'none';
   }, 300); // Timeout matches the duration of the transition
   });

   goalsFooter.addEventListener('mouseenter', function() {
       const rect = goalsFooter.getBoundingClientRect();
       dropdownGoalsfooter.style.display = 'block';
       // Trigger reflow to ensure the transition works
       dropdownGoalsfooter.offsetHeight;

       dropdownGoalsfooter.style.height = '450px'; // Set to desired height

   });

   goalsFooter.addEventListener('mouseleave', function() {
       dropdownGoalsfooter.style.height = '0';
       setTimeout(() => {
       dropdownGoalsfooter.style.display = 'none';
   }, 300); // Timeout matches the duration of the transition
   });




   

});
