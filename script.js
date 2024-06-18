document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM LOADED");
  
    const featuresBtn = document.getElementById("btn-features");
    const capabilitesBtn = document.getElementById("btn-capabilities");
    const practicesBtn = document.getElementById("btn-practies");
    const skillsBtn = document.getElementById("btn-skills");
    const methodBtn = document.getElementById("btn-methods");
  
    const tabContent = document.getElementById("tab-content");
  
    function updateTabContent(featuresArg) {
      const list = document.createElement("ul");
      let listContent = "";
      featuresArg.forEach((feature) => {
        listContent += `<li>${feature}</li>`;
      });
      list.innerHTML = listContent;
      tabContent.innerHTML = "";
      tabContent.appendChild(list);
    }
  
    const removeActive = function () {
      featuresBtn.classList.remove("active");
      capabilitesBtn.classList.remove("active");
      practicesBtn.classList.remove("active");
      skillsBtn.classList.remove("active");
      methodBtn.classList.remove("active");
  
      updateTabContent(features[selectedTabIndex]);
    };
  
    const features = [
      //features
      [
        "Use Descriptive Variable and Function Names",
        "Keep Functions Small and Focused",
        "Prefer const and let over var",
        "Avoid Global Variables",
        "Write Modular Code",
      ],
      //capabilities
      [
        "Asynchronous Programming",
        "DOM Manipulation",
        "Event Handling",
        "Frameworks and Libraries",
        "APIs and AJAX",
      ],
      //practies
      [
        "Use Meaningful and Consistent Naming Conventions",
        "Keep Functions Short and Focused",
        "Avoid Global Variables",
        "Use Promises or Async/Await for Asynchronous Code",
        "Write Unit Tests",
      ],
      [
        //skills
        "Programming Skills",
        "Problem-Solving Skills",
        "Debugging Skills",
        "Testing Skills",
        "Design Skills",
      ],
      //methods
      ["Instance", "Static", "Built-in", "Getter and Setter", "Lifecycle"],
    ];
  
    let selectedTabIndex = 0;
    updateTabContent(features[selectedTabIndex]); //features[0];
  
    featuresBtn.addEventListener("click", function () {
      selectedTabIndex = 0;
      removeActive();
      featuresBtn.classList.add("active");
  
      tabContent.classList.add("tab-active");
    });
  
    capabilitesBtn.addEventListener("click", function () {
      selectedTabIndex = 1;
      removeActive();
      capabilitesBtn.classList.add("active");
    });
  
    practicesBtn.addEventListener("click", function () {
      selectedTabIndex = 2;
      removeActive();
      practicesBtn.classList.add("active");
    });
  
    skillsBtn.addEventListener("click", function () {
      selectedTabIndex = 3;
      removeActive();
      skillsBtn.classList.add("active");
    });
  
    methodBtn.addEventListener("click", function () {
      selectedTabIndex = 4;
      removeActive();
      methodBtn.classList.add("active");
    });
  });
  