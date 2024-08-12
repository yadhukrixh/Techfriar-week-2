


// To set notification count as dynamically
let notificationCount = 10;
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
    img.src = imgUrl;
    img.alt = title;

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';//class name = car-description

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    const  carDetails = document.createElement('div');
    carDetails.className = 'car-details';//class name = car-details

    const seatNumbers = document.createElement('div');
    seatNumbers.innerHTML = `<img src='./assets/photos/icons/seat.svg'><p>${seatNum} People</p>`;

    const gearType = document.createElement('div');
    gearType.innerHTML = `<img src='./assets/photos/icons/gear.svg' style='width:9px'><p>${shiftType}</p>`;


    const doorNumbers = document.createElement('div');
    doorNumbers.innerHTML = `<img src='./assets/photos/icons/door.svg'><p>${doors} Doors</p>`;
    

    const acType = document.createElement('div');
    acType.innerHTML = `<img src='./assets/photos/icons/ac.svg'><p>${isAc}</p>`;


    const rateAndBook = document.createElement('div');
    rateAndBook.className = 'rate-and-book';//class name = rate-and-book

    const h2 = document.createElement('h2');
    h2.textContent = rate;

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

cardsData.forEach(data => {
    const card = createCard({
        title: data.caption.title,
        description: data.caption.description,
        imgUrl: data.imgUrl,
        rate: data.caption.rate,
        seatNum: data.caption.seatNum,
        shiftType: data.caption.shiftType,
        doors: data.caption.doors,
        isAc: data.caption.isAc
    });
    container.appendChild(card);
});

// Scroll functionality
let isDown = false;
let cardScrollX, cardScrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    cardScrollX = e.pageX - container.offsetLeft;
    cardScrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - cardScrollX) * 2; // Scroll speed adjustment
    container.scrollLeft = cardScrollLeft - walk;
});


////////////////////////////////////////////////////////////////////////////////