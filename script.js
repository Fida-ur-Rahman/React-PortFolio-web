// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "flex" ? "none" : "flex";
});


const bars = document.querySelectorAll(".bar div");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("style").split(":")[1];
    }
  });
});

bars.forEach(bar => {
  observer.observe(bar);
});


const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

  document.querySelectorAll('.skill-card, .project-card, .service-card')
    .forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', e.clientX - rect.left + 'px');
        card.style.setProperty('--y', e.clientY - rect.top + 'px');
      });
    });


  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let index = 0;

  function showSlide(i) {
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    cards[i].classList.add('active');
    dots[i].classList.add('active');
  }

  next.addEventListener('click', () => {
    index = (index + 1) % cards.length;
    showSlide(index);
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      showSlide(index);
    });
  });

  // Auto slide
  setInterval(() => {
    index = (index + 1) % cards.length;
    showSlide(index);
  }, 5000);


const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});


// Simple animation on scroll (optional)
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }
  });
});
