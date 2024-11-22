const date = new Date();
const technicalQuestions = {};

// You can also pass an optional settings object

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  const supportButton = document.getElementById("supportButton");
  const chatPopup = document.getElementById("chatPopup");
  const closeModal = document.getElementsByClassName("close")[0];
  const chatBody = document.querySelector(".chat-body");
  const techButton = document.getElementById("technicalSupportButton");
  const tutorialBtn = document.getElementById("guideButton");
  const updateBtn = document.getElementById("updateBtn");
  const chatbody = document.querySelector(".chat-body");
  const footer = document.querySelector(".footer");
  const close = document.querySelector(".close");
  const messagePop = document.getElementById("messagePop");
  const contact = document.querySelector(".contact");
  const number = document.querySelector(".number");
  const menuBtn = document.querySelector(".menuBtn");
  const bottomBtns = document.querySelector(".bottomBtns");
  const welcomeBody = document.querySelector(".chatBodyInfo");
  // (messagePop)?console.log('fx exists') : console.error('no audio')

  contact.addEventListener("mouseenter", () => {
    console.log("mouse left from bottom div");
    number.style.display = "block";
    menuBtn.style.display = "block";
    number.classList.add("fade-right");
    menuBtn.classList.add("fade-left");
  });
  bottomBtns.addEventListener("mouseleave", () => {
    console.log("mouse left from bottom div");
    number.style.display = "none";
    menuBtn.style.display = "none";
  });

  contact.onclick = function () {
    contact.classList.add("disabled");
  };

  close.addEventListener("click", () => {
    supportButton.style.display = "block";
  });

  //replace with text on hover for techSupport button.
  {
    // Store the original content of the button
    const techContent = techButton.innerHTML;

    // Predefined text to show on mouse enter
    const techText = "Technical";

    techButton.addEventListener("mouseenter", () => {
      techButton.innerHTML = techText;
    });

    // Add mouseleave event listener to restore the original content
    techButton.addEventListener("mouseleave", function () {
      techButton.innerHTML = techContent;
    });
  }

  //replace with text on hover for tutorialSupport button.
  {
    const tutorialContent = tutorialBtn.innerHTML;

    tutorialBtn.addEventListener("mouseenter", () => {
      tutorialBtn.innerHTML = "Tutorials";
    });

    // Add mouseleave event listener to restore the original content
    tutorialBtn.addEventListener("mouseleave", function () {
      tutorialBtn.innerHTML = tutorialContent;
    });
  }

  {
    const updateContent = updateBtn.innerHTML;

    updateBtn.addEventListener("mouseenter", () => {
      updateBtn.innerHTML = "Updates";
    });

    // Add mouseleave event listener to restore the original content
    updateBtn.addEventListener("mouseleave", function () {
      updateBtn.innerHTML = updateContent;
    });
  }

  supportButton.onclick = function () {
    chatPopup.classList.toggle("show");
    console.log("hello world");
    supportButton.style.display = "none";
  };

  closeModal.onclick = function () {
    chatPopup.classList.toggle("show");
  }; // Close chat popup on close button click

  // Load technical support questions when 'Need technical support' button is clicked
  techButton.onclick = function () {
    loadQuestions("technicalQuestion"); // Fetch and display technical support questions
    techButton.classList.add("disabled");
    setTimeout(() => {
      techButton.classList.remove("disabled");
    }, 3000);
    //  welcomeBody.style.display = "none";
  };

  tutorialBtn.onclick = function () {
    loadQuestions("tutorialQuestion");
    tutorialBtn.classList.add("disabled");
    setTimeout(() => {
      tutorialBtn.classList.remove("disabled");
    }, 3000);
    //  welcomeBody.style.display = "none";
  };

  updateBtn.onclick = function () {
    loadQuestions("update");
    updateBtn.classList.add("disabled");
    setTimeout(() => {
      updateBtn.classList.remove("disabled");
    }, 3000);
  };

  // Function to fetch and display questions from the database by category

  function loadQuestions(category) {
    console.log(category);
    fetch(`https://d1gtxdhkrjh95.cloudfront.net/sgdms/${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (category == "update") {
          // Create new answer container
          var answerContainer = document.createElement("div");
          answerContainer.classList.add("answerContainer");

          // Create the answer paragraph
          var res = document.createElement("p");
          res.innerHTML = data.data[0].question;
          res.classList.add("answerDisplayClass");
          res.style.display = "block";

          // Append paragraph to answer container
          answerContainer.appendChild(res);
          answerContainer.style.alignSelf = "flex-end";
          answerContainer.style.marginRight = "3%";
          answerContainer.style.marginTop = "1%";
          answerContainer.style.width = "300px";
          // Append container to answer chatbody
          chatbody.appendChild(answerContainer);
          var chatbodyheight = chatBody.offsetHeight;
          var footerHeight = footer.offsetHeight;
          var totalHeight = chatbodyheight + footerHeight;
          chatBody.scrollTop = chatBody.scrollHeight - totalHeight + 100;
        } else {
          // Create container for questions\
          var queryContainer = document.createElement("div");
          var query = document.createElement("p");
          query.style.display = "block";
          query.classList.add("userMsg");

          // add title
          var questionTitle = document.createElement("li");
          questionTitle.setAttribute("class", "questionTitles");

          if (category == "technicalQuestion") {
            questionTitle.textContent = `Technical FAQs`;
            query.appendChild(questionTitle);
          } else if (category == "tutorialQuestion") {
            questionTitle.textContent = `Tutorials and guides`;
            query.appendChild(questionTitle);
          }

          data.data.forEach((element, index) => {
            console.log(element);
            var li = document.createElement("li");
            li.textContent = element.question;
            li.classList.add("liButtons");

            li.addEventListener("click", () => {
              // Create new answer container
              var answerContainer = document.createElement("div");
              answerContainer.classList.add("answerContainer");

              // Create the answer paragraph
              var res = document.createElement("p");
              res.innerHTML = element.answer;
              res.classList.add("answerDisplayClass");
              res.style.display = "block";
              res.classList.add("liButtons");

              // Append paragraph to answer container
              answerContainer.appendChild(res);
              res.setAttribute("data-aos", "fade-left");
              res.setAttribute("data-aos-delay", `${index * 100}`); // Optional stagger effect
              res.setAttribute("data-aos-anchor", ".chat-popup");
              answerContainer.style.alignSelf = "flex-end";
              answerContainer.style.marginRight = "3%";
              answerContainer.style.marginTop = "1%";
              answerContainer.style.width = "300px";
              // Append container to answer chatbody
              chatbody.appendChild(answerContainer);
              var chatbodyheight = chatBody.offsetHeight;
              var footerHeight = footer.offsetHeight;
              var totalHeight = chatbodyheight + footerHeight;
              chatBody.scrollTop = chatBody.scrollHeight - totalHeight + 100;
            });
            li.setAttribute("data-aos", "fade-right");
            li.setAttribute("data-aos-delay", `${index * 100}`); // Optional stagger effect
            li.setAttribute("data-aos-anchor", ".chat-popup");

            query.appendChild(li);

            AOS.refresh();
            // After appending elements
          });
        }

        // Append questions container
        queryContainer.appendChild(query);
        // queryContainer.style.alignSelf ="flex-start"
        chatbody.appendChild(queryContainer);
        messagePop.play();
        // Scroll the newly added queryContainer into view
        // calculate chatbody view port for scrollig
        var chatbodyheight = chatBody.offsetHeight;
        var footerHeight = footer.offsetHeight;
        var totalHeight = chatbodyheight + footerHeight;
        // queryContainer.scrollIntoView({ behavior: "smooth", block: "end" });
        chatBody.scrollTop = chatBody.scrollHeight - totalHeight + 100;

        AOS.refresh();
      })

      .catch((error) => console.error("Error fetching questions:", error));
  }

  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  AOS.refresh();
});
