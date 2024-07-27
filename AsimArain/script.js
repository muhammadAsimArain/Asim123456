const testimonials = [
    {
        name: 'Katy Abrams',
        text: '1"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
        image: 'img/review/1.jpg'
    },
    {
        name: 'Head of Design',
        text: '2"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
        image: 'img/review/2.jpg'
    },
    {
        name: 'Jane Smith',
        text: '3"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
        image: 'img/review/3.jpg'
    }
];

let currentTestimonial = 0;

const nameElement = document.getElementById('name');
const positionElement = document.getElementById('position');
const testimonialElement = document.getElementById('testimonial');
const profileImageElement = document.getElementById('profileImage');

document.getElementById('next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    nameElement.textContent = testimonial.name;
    positionElement.textContent = testimonial.position;
    testimonialElement.textContent = testimonial.text;
    profileImageElement.src = testimonial.image;
}

updateTestimonial();

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);