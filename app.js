// ---- Animation texte imprimante ---- //

const title1 = document.querySelector(".txt-animation1");

const txtAnim1 = "I'm a front end developer based in France.";

function typewriter(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      title1.innerHTML += `<span>${word[index]}</span>`;
      typewriter(txtAnim1, index + 1);
    }, 30);
  }
}

setTimeout(() => {
  typewriter(txtAnim1, 0);
}, 500);

// ---- Animation liens barre de navigation ---- //
const spanContainers = document.querySelectorAll(".navigation div");

spanContainers.forEach((item) => {
  const letters = item.children[0].textContent.split("");
  item.innerHTML = "";

  letters.forEach((el, index) => {
    item.innerHTML += `<span style="transition-delay: ${
      0.07 * index
    }s">${el}</span>`;
  });
});

// Barre de navigation qui disparaît au scroll

let header = document.getElementById("site-header");
let lastScrollValue = 0;

document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop;
  if (lastScrollValue < top) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  lastScrollValue = top;
});

// Menu Hamburger

const btnHamburger = document.querySelector(".contLigne");
const navBar = document.querySelector("#navbar");
const listeNavbar = document.querySelectorAll("#navbar li");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("active");
  navBar.classList.toggle("is-open");

  document.addEventListener("scroll", () => {
    header.classList.remove("sticky");
  });

  listeNavbar.forEach((liste) => {
    liste.addEventListener("click", () => {
      btnHamburger.classList.remove("active");
      navBar.classList.remove("is-open");
      body.style.overflow = "auto";
    });
  });
});

// ---- Animation titre et image GSAP ---- //

const titleAnimate = document.querySelector(".title-animate");
const imgMemoji = document.querySelector("#memoji");

const TL1 = gsap.timeline({ paused: true });

TL1.from(titleAnimate, {
  x: -70,
  opacity: 0,
  ease: Power0.easeOut,
  duration: 0.6,
}).from(imgMemoji, 1, {
  x: 100,
  opacity: 0,
  ease: Power2.easeOut,
  duration: 0.6,
});

window.addEventListener("load", () => {
  TL1.play();
});

// Social Media + Email
const socialmediaContainer = document.querySelector(".container-socialmedia");
const emailContainer = document.querySelector(".container-email");
const social = document.querySelector(".social");

const socialTL = gsap.timeline({ paused: true });

socialTL
  .from(socialmediaContainer, { x: -100, opacity: 0, duration: 0.3 }, 1)
  .from(emailContainer, { x: 100, opacity: 0 }, 1);

window.addEventListener("load", () => {
  socialTL.play();
});

// ---- ABOUT ME title + text ---- //
const containerSection2 = document.querySelector(".containerSection2");
const titleSection2 = document.querySelector(".list-nav.l2");
const textSection2 = document.querySelector(".p-about");
const imgSection2 = document.querySelector(".img-about2");

const controller = new ScrollMagic.Controller();

const sectionTL2 = new TimelineMax();

sectionTL2
  .from(titleSection2, { y: -100, opacity: 0, duration: 0.6 })
  .from(textSection2, { x: 200, opacity: 0, duration: 0.6 }, "-=0.5")
  .from(imgSection2, { x: -200, opacity: 0, duration: 0.6 }, "-=0.5");

const sceneSection2 = new ScrollMagic.Scene({
  triggerElement: containerSection2,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(sectionTL2)
  // .addIndicators()
  .addTo(controller);

// ---- SKILLS ---- //
const skillsContainer = document.querySelector(".section-skills");
const skillsTitle = document.querySelector(".section-skills h2");
const skillsItem = document.querySelectorAll(".box-skills");

const skillsTL = new TimelineMax();

skillsTL
  .from(skillsTitle, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(skillsItem, 1, { opacity: 0 }, 0.2, "-=0.5");

const sceneSkills = new ScrollMagic.Scene({
  triggerElement: skillsContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(skillsTL)
  // .addIndicators()
  .addTo(controller);

// ---- Cursor Animation ---- //

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px";
});

// ---- WORK ---- //

const projectContainer1 = document.querySelector(".work1 .project-container");
const projectPresent1 = document.querySelector(".work1 .project-present");
const projectContainer2 = document.querySelector(".work2 .project-container");
const projectPresent2 = document.querySelector(".work2 .project-present");
const projectContainer3 = document.querySelector(".work3 .project-container");
const projectPresent3 = document.querySelector(".work3 .project-present");
const projectContainer4 = document.querySelector(".work4 .project-container");
const projectPresent4 = document.querySelector(".work4 .project-present");

const sectionWorkTL = new TimelineMax();

//WORK1
sectionWorkTL
  .from(projectContainer1, { x: -100, opacity: 0, duration: 0.6 }, "-=5.5")
  .from(projectPresent1, { x: 100, opacity: 0, duration: 0.6 }, "-=5.5");

const sceneWork1 = new ScrollMagic.Scene({
  triggerElement: projectContainer1,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(sectionWorkTL)
  //   .addIndicators()
  .addTo(controller);

//WORK2
const sectionWorkTL2 = new TimelineMax();

sectionWorkTL2
  .from(projectContainer2, { x: -100, opacity: 0, duration: 0.6 }, "-=5.5")
  .from(projectPresent2, { x: 100, opacity: 0, duration: 0.6 }, "-=5.5");

const sceneWork2 = new ScrollMagic.Scene({
  triggerElement: projectContainer2,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(sectionWorkTL2)
  // .addIndicators()
  .addTo(controller);

//WORK3
const sectionWorkTL3 = new TimelineMax();

sectionWorkTL3
  .from(projectContainer3, { x: -100, opacity: 0, duration: 0.6 }, "-=5.5")
  .from(projectPresent3, { x: 100, opacity: 0, duration: 0.6 }, "-=5.5");

const sceneWork3 = new ScrollMagic.Scene({
  triggerElement: projectContainer3,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(sectionWorkTL3)
  // .addIndicators()
  .addTo(controller);

//WORK4

const sectionWorkTL4 = new TimelineMax();

sectionWorkTL4
  .from(projectContainer4, { x: -100, opacity: 0, duration: 0.6 }, "-=5.5")
  .from(projectPresent4, { x: 100, opacity: 0, duration: 0.6 }, "-=5.5");

const sceneWork4 = new ScrollMagic.Scene({
  triggerElement: projectContainer4,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(sectionWorkTL4)
  //   .addIndicators()
  .addTo(controller);

// ---- Animation WEBSITE ---- //

// Anim gallery1

const portfolioContainer = document.querySelector("#website");
const portfolioTitle = document.querySelector("#website h2");
const portfolioItem = document.querySelectorAll(".gallery1");

const portfolio1TL = new TimelineMax();

portfolio1TL
  .from(portfolioTitle, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(portfolioItem, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene1 = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(portfolio1TL)
  // .addIndicators()
  .addTo(controller);

// Anim gallery2
const portfolioItem2 = document.querySelectorAll(".gallery2");

const portfolio2TL = new TimelineMax();

portfolio2TL.staggerFrom(portfolioItem2, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene2 = new ScrollMagic.Scene({
  triggerElement: portfolioItem,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(portfolio2TL)
  // .addIndicators()
  .addTo(controller);

// ---- Animation timeline experience GSAP ---- //
const containerSection4 = document.querySelector(".containerSection4");
const titleSection4 = document.querySelector(".list-nav.l4");

const sectionTL4 = new TimelineMax();

sectionTL4.from(titleSection4, { y: -100, opacity: 0, duration: 0.6 });

const sceneSection4 = new ScrollMagic.Scene({
  triggerElement: containerSection4,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(sectionTL4)
  // .addIndicators()
  .addTo(controller);

const allCircles = document.querySelectorAll(".circle");
const allBoxes = document.querySelectorAll(".box-timeline");

allBoxes.forEach((box) => {
  for (let index = 0; index < allCircles.length; index++) {
    if (
      allCircles[index].getAttribute("data-anim") ===
      box.getAttribute("data-anim")
    ) {
      let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 });

      let scene = new ScrollMagic.Scene({
        triggerElement: allCircles[index],
        reverse: false,
      })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);
    }
  }
});

// ---- Animation CONTACT GSAP ---- //
const containerSection5 = document.querySelector(".containerSection5");
const titleSection5 = document.querySelector(".list-nav.l5");
const formContact = document.querySelector(".contact-style");

const sectionTL5 = new TimelineMax();

sectionTL5
  .from(titleSection5, { y: -100, opacity: 0, duration: 0.6 })
  .from(formContact, { y: -100, opacity: 0, duration: 0.6 });

const sceneSection5 = new ScrollMagic.Scene({
  triggerElement: containerSection5,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(sectionTL5)
  // .addIndicators()
  .addTo(controller);

// ---- CONTACT FORMULAIRE INPUT ---- //
let form = document.querySelector("#forms");

// ---------- Valid Email ---------- //
form.email.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  let small = inputEmail.nextElementSibling;

  if (emailRegExp.test(inputEmail.value)) {
    inputEmail.classList.add("valid");
    inputEmail.classList.remove("error");
    small.innerHTML = "Valid address";
    small.classList.add("small-valid");
    small.classList.remove("small-error");
    return true;
  } else {
    small.innerHTML = "Invalid address";
    inputEmail.classList.add("error");
    inputEmail.classList.remove("valid");
    small.classList.add("small-error");
    small.classList.remove("small-valid");
    return false;
  }
};

// ---------- Valid Name ---------- //
form.name.addEventListener("change", function () {
  validName(this);
});

const validName = function (inputName) {
  let nameRegexp = new RegExp(
    "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
    "g"
  );

  if (nameRegexp.test(inputName.value)) {
    inputName.classList.add("valid");
    inputName.classList.remove("error");
    return true;
  } else {
    inputName.classList.add("error");
    inputName.classList.remove("valid");
    return false;
  }
};

// ---------- Valid Message ---------- //
form.message.addEventListener("change", function () {
  validMessage(this);
});

const validMessage = function (inputMessage) {
  if (inputMessage.value.trim() != "") {
    inputMessage.classList.add("valid");
    inputMessage.classList.remove("error");
    return true;
  } else {
    inputMessage.classList.add("error");
    inputMessage.classList.remove("valid");
    return false;
  }
};

// form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validEmail(form.email) &&
    validName(form.name) &&
    validMessage(form.message)
  ) {
    form.submit();
  }
});
