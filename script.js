// Smooth scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Typing animation
const roles = [
  "AI & Data Science Student",
  "Python Developer",
  "Aspiring AI Engineer"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function type(){
  if(charIndex < roles[roleIndex].length){
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type,100);
  } else {
    setTimeout(erase,2000);
  }
}

function erase(){
  if(charIndex > 0){
    typingEl.textContent = roles[roleIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type,500);
  }
}
type();

// Scroll reveal + skill bars
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.querySelectorAll(".bar div").forEach(bar=>{
        bar.style.width = bar.dataset.width;
      });
    }
  });
},{threshold:0.2});

reveals.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  observer.observe(el);
});


// Contact form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit",function(e){
    e.preventDefault();
    alert("Form submission is currently disabled.");
});
// You can integrate with a backend service or email API here.

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");            
    if(document.body.classList.contains("dark-mode")){
        darkModeToggle.textContent = "Light Mode";
    }
    else{
        darkModeToggle.textContent = "Dark Mode";
    }   
});
// Initialize dark mode based on system preference
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
} else {
    darkModeToggle.textContent = "Dark Mode";
}   
