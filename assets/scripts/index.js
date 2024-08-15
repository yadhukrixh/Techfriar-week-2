


// To set notification count as dynamically
let notificationCount = 1;
document.getElementById('notification-count').innerHTML = notificationCount;

//////////////////////////////////////////////////////////////////////////////



// JavaScript to handle the date-time picker visibility and functionality
const dateTimeSelector = document.getElementById('dateTimeSelector');
const arrivalTimeSelector = document.getElementById('arrivalDateTimeSelector');
const dateTimePicker = document.getElementById('dateTimePicker');
const arrivalDateTimePicker = document.getElementById('arrivalDateTimePicker');
const setDateTimeButton = document.getElementById('setDateTime');
const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');
const selectedDate = document.getElementById('selectedDate');
const selectedArrivalDate = document.getElementById('selectedArrivalDate');
const selectedTime = document.getElementById('selectedTime');
const selectedArrivalTime = document.getElementById('selectedArrivalTime');

// Function to format date and time for display
function formatDate(date) {
    return date.toLocaleDateString('en-GB');
}

function formatTime(date) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Set default date and time
window.onload = function() {
    const now = new Date();

    // Set the inputs to today's date and current time
    dateInput.value = now.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    timeInput.value = now.toTimeString().split(' ')[0].slice(0, 5); // Format as HH:MM

    // Set the displayed date and time
    selectedDate.textContent = formatDate(now);
    selectedTime.textContent = formatTime(now);
    selectedArrivalDate.textContent = formatDate(now);
    selectedArrivalTime.textContent = formatTime(now);
};
// time picker active while click
dateTimeSelector.addEventListener('click', () => {
    dateTimePicker.style.display = dateTimePicker.style.display === 'none' ? 'block' : 'none';
});

arrivalTimeSelector.addEventListener('click',() => {
    arrivalDateTimePicker.style.display = arrivalDateTimePicker.style.display === 'none' ? 'block' : 'none';
});

setDateTimeButton.addEventListener('click', () => {
    if (dateInput.value) {
        selectedDate.textContent = formatDate(new Date(dateInput.value));
    }
    if (timeInput.value) {
        selectedTime.textContent = formatTime(new Date('1970-01-01T' + timeInput.value));
    }
    dateTimePicker.style.display = 'none';
});

// Close picker if clicked outside
document.addEventListener('click', (event) => {
    if (!dateTimeSelector.contains(event.target)) {
        dateTimePicker.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!arrivalDateTimeSelector.contains(event.target)) {
        arrivalDateTimePicker.style.display = 'none';
    }
});

///////////////////////////////////////////////////////////////////////




//Dynamic carousal
const images = [
    {
        url: './assets/photos/carousal.svg',
        caption: {
            beforeButtonText :'Recieve a guranteed ',
            button: 'GIFT VOUCHER',
            afterButtontext: ' on a monthly hire or lease'
        },
        link: 'https://example.com/' // Link to redirect
    },
    {
        url: './assets/photos/carousal.svg',
        caption: {
            beforeButtonText :'Recieve a guranteed ',
            button: 'GIFT VOUCHER',
            afterButtontext: ' on a monthly hire or lease'
        },
        link: 'https://example.com/' // Link to redirect
    },
    {
        url: './assets/photos/carousal.svg',
        caption: {
            beforeButtonText :'Recieve a guranteed ',
            button: 'GIFT VOUCHER',
            afterButtontext: ' on a monthly hire or lease'
        },
        link: 'https://example.com/' // Link to redirect
    }
];

const carouselInner = document.getElementById('carouselInner');
const carouselIndicators = document.getElementById('carouselIndicators');

images.forEach((image, index) => {
    // Create slide
    const slide = document.createElement('div');
    slide.classList.add('carousel-item');
    slide.style.backgroundImage = `url(${image.url})`;

    // Create caption
    const caption = document.createElement('div');
    caption.classList.add('carousel-caption');
    caption.innerHTML = `<p>${image.caption.beforeButtonText} <button>${image.caption.button}</button>${image.caption.afterButtontext}</p>`;

    slide.appendChild(caption);
    carouselInner.appendChild(slide);

    // Add click event for redirection
    slide.addEventListener('click', () => {
        window.location.href = image.link;
    });

    // Create indicator
    const indicator = document.createElement('div');
    indicator.setAttribute('onclick', `goToSlide(${index})`);
    if (index === 0) {
        indicator.classList.add('active');
    }
    carouselIndicators.appendChild(indicator);
});

let currentSlide = 0;
let startX, endX;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators div');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Swipe functionality
carouselInner.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

carouselInner.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
});

carouselInner.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
});

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial display
showSlide(0);
////////////////////////////////////////////////////////////////////////////


// Dynamic popular cars
const container = document.getElementById('card_container');

const cardsData = [
    {
        id: '1',
        imgUrl: './assets/photos/mitsubishi.svg',
        caption: {
            title: 'Mitsubishi Eclipse',
            description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.',
            seatNum: '6',
            shiftType: 'Automatic',
            doors: '5',
            isAc: 'AC',
            rate: 'AED 2700/MONTHLY'
        }
    },
    {
        id: '2',
        imgUrl: './assets/photos/jac.svg',
        caption: {
            title: 'Jac J7',
            description: 'S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.',
            seatNum: '6',
            shiftType: 'Automatic',
            doors: '5',
            isAc: 'AC',
            rate: 'AED 2700/MONTHLY'
        }
    },
    {
        id: '3',
        imgUrl: './assets/photos/mitsubishi.svg',
        caption: {
            title: 'Mitsubishi Eclipse',
            description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.',
            seatNum: '6',
            shiftType: 'Automatic',
            doors: '5',
            isAc: 'AC',
            rate: 'AED 2700/MONTHLY'
        }
    },
    {
        id: '4',
        imgUrl: './assets/photos/jac.svg',
        caption: {
            title: 'Jac J7',
            description: 'S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.',
            seatNum: '6',
            shiftType: 'Automatic',
            doors: '5',
            isAc: 'AC',
            rate: 'AED 2700/MONTHLY'
        }
    },
    {
        id: '5',
        imgUrl: './assets/photos/mitsubishi.svg',
        caption: {
            title: 'Mitsubishi Eclipse',
            description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.',
            seatNum: '6',
            shiftType: 'Automatic',
            doors: '5',
            isAc: 'AC',
            rate: 'AED 2700/MONTHLY'
        }
    }
];

function createCard({ title, description, imgUrl, rate,seatNum,shiftType,doors, isAc}) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'car-photo';
    img.src = imgUrl;
    img.alt = title;

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';//class name = car-description

    const h3 = document.createElement('h3');
    h3.textContent = title;// car name

    const p = document.createElement('p');
    p.textContent = description;// car description

    const  carDetails = document.createElement('div');
    carDetails.className = 'car-details';//class name = car-details

    const seatNumbers = document.createElement('div');
    seatNumbers.innerHTML = `<img src='./assets/photos/icons/seat.svg'><p>${seatNum} People</p>`;//seat number

    const gearType = document.createElement('div');
    gearType.innerHTML = `<img src='./assets/photos/icons/gear.svg' style='width:9px'><p>${shiftType}</p>`;// gear type


    const doorNumbers = document.createElement('div');
    doorNumbers.innerHTML = `<img src='./assets/photos/icons/door.svg'><p>${doors} Doors</p>`;// number of doors
    

    const acType = document.createElement('div');
    acType.innerHTML = `<img src='./assets/photos/icons/ac.svg'><p>${isAc}</p>`;// ac avialability


    const rateAndBook = document.createElement('div');
    rateAndBook.className = 'rate-and-book';//class name = rate-and-book

    const h2 = document.createElement('h2');
    h2.textContent = rate;// car's rent rate

    const button = document.createElement('button');
    button.className = 'book-button';//class name = book-button
    button.textContent = 'Book Now';

    rateAndBook.appendChild(h2);
    rateAndBook.appendChild(button);


    
    card.appendChild(img);
    cardDescription.appendChild(h3);
    cardDescription.appendChild(p);
    carDetails.appendChild(seatNumbers);
    carDetails.appendChild(gearType);
    carDetails.appendChild(doorNumbers);
    carDetails.appendChild(acType);
    cardDescription.appendChild(carDetails);
    cardDescription.appendChild(rateAndBook);
    card.appendChild(cardDescription);

    return card;
}

// taking eack data for card to pass in to function
cardsData.forEach(data => {
    const card = createCard({
        title: data.caption.title,//car name
        description: data.caption.description,// car description
        imgUrl: data.imgUrl,// image url
        rate: data.caption.rate,// rent rate
        seatNum: data.caption.seatNum,// number of seats
        shiftType: data.caption.shiftType,// gear type
        doors: data.caption.doors,// number of doors
        isAc: data.caption.isAc// ac avialability
    });
    container.appendChild(card);
});



////////////////////////////////////////////////////////////////////////////////


// Dynamic Frequently asked Questions

document.addEventListener("DOMContentLoaded", function() {
    const faqContainer = document.querySelector(".faq-container");

    // Sample data (You can fetch or generate this data dynamically)
    const faqData = [
        {
            question: "What is my eligibility to book a car?",
            answer: "You should be 18 years old above and you must possess a valid driving license."
        },
        {
            question: "Can I book for any period of time?",
            answer: "Yes, you can book a car for as long as you need."
        },
        {
            question: "Can I opt for a longer period?",
            answer: "Yes, longer booking periods are available with special rates."
        },
        {
            question: "Can I book a one-way trip?",
            answer: "One-way trips are available depending on the destination."
        },
        {
            question: "Is there a home delivery option available?",
            answer: "Yes, we offer home delivery services for car bookings."
        },
        {
            question: "How can I make the payment?",
            answer: "Payments can be made online via credit card, debit card, or other available options."
        }
    ];

    // Function to create and append FAQ items
    function addFaqItems(faqData) {
        faqData.forEach(item => {
            // Create elements for the FAQ item
            const faqItem = document.createElement("div");
            faqItem.classList.add("faq-item");

            // create an element for question class
            const faqQuestion = document.createElement("div");
            faqQuestion.classList.add("faq-question");

            // create and add question
            const questionText = document.createElement("span");
            questionText.textContent = item.question;

            // collapse button
            const faqToggle = document.createElement("span");
            faqToggle.classList.add("faq-toggle");
            faqToggle.textContent = "+";

            // answer section
            const faqAnswer = document.createElement("div");
            faqAnswer.classList.add("faq-answer");

            // answer content
            const answerText = document.createElement("p");
            answerText.textContent = item.answer;

            // Append elements to the container
            faqAnswer.appendChild(answerText);
            faqQuestion.appendChild(questionText);
            faqQuestion.appendChild(faqToggle);
            faqItem.appendChild(faqQuestion);
            faqItem.appendChild(faqAnswer);
            faqContainer.appendChild(faqItem);

            // Add toggle functionality
            faqQuestion.addEventListener("click", function() {
                const isOpen = faqAnswer.style.display === "block";

                // Close all other answers
                document.querySelectorAll(".faq-answer").forEach(answer => answer.style.display = "none");
                document.querySelectorAll(".faq-toggle").forEach(toggle => toggle.textContent = "+");

                // Toggle the current answer
                if (isOpen) {
                    faqAnswer.style.display = "none";
                    faqToggle.textContent = "+";
                } else {
                    faqAnswer.style.display = "block";
                    faqToggle.textContent = "×";
                }
            });
        });
    }

    // Call the function with the FAQ data
    addFaqItems(faqData);
});

//////////////////////////////////////////////////////////////////

// book a car -block display while click on button
document.getElementById('book-a-car').addEventListener("click",() => {
    document.getElementById('book-a-car').classList.toggle('book-a-car-active');
    document.querySelector('.book-a-car-active')?document.getElementById('mobile-pickup-options').style.display = 'flex':document.getElementById('mobile-pickup-options').style.display = 'none';
    
});

//////////////////////////////////////////////////////////////////////////////

// to change drop location selection
const sameAsPickup = document.getElementById('same-as-pickup');
const differentPickup = document.getElementById('different-pickup');

// event listner on same as pick up, it will hide drop off location selection
sameAsPickup.addEventListener('click',() => {
    sameAsPickup.classList.add('pickup-location-active');
    differentPickup.classList.remove('pickup-location-active');
    document.getElementById('drop-off-location').style.display = "none";
})


// event listner on different pick up, it will show drop off location selection
differentPickup.addEventListener('click',() => {
    differentPickup.classList.add('pickup-location-active');
    sameAsPickup.classList.remove('pickup-location-active');
    document.getElementById('drop-off-location').style.display = "flex";
})



/////////////////////////////////////////////////////////////////////////////////////////////////





document.getElementById('nav-control').addEventListener('click', () => { // to open navigation menu on mobile
    document.getElementById('navigation-menu').classList.add('nav-active');
})


document.getElementById('navigation-close-button').addEventListener('click', () => { // to close navigation menu on mobile
    document.getElementById('navigation-menu').classList.remove('nav-active');
})
