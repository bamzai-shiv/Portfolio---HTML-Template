        // // Mobile menu toggle
        // const menuToggle = document.getElementById('menuToggle');
        // const navLinks = document.getElementById('navLinks');
        
        // menuToggle.addEventListener('click', () => {
        //     navLinks.classList.toggle('active');
        // });
        
        // // Close mobile menu when clicking on a link
        // document.querySelectorAll('.nav-links a').forEach(link => {
        //     link.addEventListener('click', () => {
        //         navLinks.classList.remove('active');
        //     });
        // });
        
        // // Form submission
        // const contactForm = document.getElementById('contactForm');
        
        // contactForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     alert('Thank you for your message! I will get back to you soon.');
        //     contactForm.reset();
        // });
        
        // // Active link highlighting
        // window.addEventListener('scroll', () => {
        //     const sections = document.querySelectorAll('section');
        //     const navLinks = document.querySelectorAll('.nav-links a');
            
        //     let current = '';
            
        //     sections.forEach(section => {
        //         const sectionTop = section.offsetTop;
        //         const sectionHeight = section.clientHeight;
                
        //         if (pageYOffset >= (sectionTop - 200)) {
        //             current = section.getAttribute('id');
        //         }
        //     });
            
        //     navLinks.forEach(link => {
        //         link.classList.remove('active');
        //         if (link.getAttribute('href').includes(current)) {
        //             link.classList.add('active');
        //         }
        //     });
        // });
        
        // // Smooth scrolling
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function(e) {
        //         e.preventDefault();
                
        //         const target = document.querySelector(this.getAttribute('href'));
        //         if (target) {
        //             window.scrollTo({
        //                 top: target.offsetTop - 80,
        //                 behavior: 'smooth'
        //             });
        //         }
        //     });
        // });
        
        // // Project modals
        // const projectCards = document.querySelectorAll('.project-card');
        // const modals = document.querySelectorAll('.project-modal');
        // const closeButtons = document.querySelectorAll('.close-modal');
        
        // projectCards.forEach(card => {
        //     card.addEventListener('click', () => {
        //         const projectId = card.getAttribute('data-project');
        //         const modal = document.getElementById(`${projectId}-modal`);
        //         if (modal) {
        //             modal.style.display = 'block';
        //             document.body.style.overflow = 'hidden';
        //         }
        //     });
        // });
        
        // closeButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         modals.forEach(modal => {
        //             modal.style.display = 'none';
        //             document.body.style.overflow = 'auto';
        //         });
        //     });
        // });
        
        // // Close modal when clicking outside content
        // modals.forEach(modal => {
        //     modal.addEventListener('click', (e) => {
        //         if (e.target === modal) {
        //             modal.style.display = 'none';
        //             document.body.style.overflow = 'auto';
        //         }
        //     });
        // });
        
        // // Console welcome message
        // console.log(`
        // 🚀 Welcome to Hardik Sood's Portfolio!
        // 💼 Data Science & AI Engineer
        // 📧 hardiksood8@gmail.com
        // 🌐 GitHub: https://github.com/hardiksood1
        // 💼 LinkedIn: https://linkedin.com/in/hardiksood1

        // Thanks for checking out the code! 
        // `);
    


//         const toggleBtn = document.getElementById('toggle-theme');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme === 'light') {
//   document.body.classList.add('light-mode');
//   toggleBtn.textContent = '🌞';
// }

// toggleBtn.addEventListener('click', () => {
//   document.body.classList.toggle('light-mode');
//   const isLight = document.body.classList.contains('light-mode');
//   toggleBtn.textContent = isLight ? '🌞' : '🌙';
//   localStorage.setItem('theme', isLight ? 'light' : 'dark');
// });



const toggleBtn = document.getElementById('toggle-theme');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  toggleBtn.textContent = '🌞';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

