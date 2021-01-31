// ////////////////////////nav bar /////////////////////////////
let modalId = document.querySelector('.modalNav');
let openBtn = document.querySelector('#openBtn');
let closeBtn = document.querySelector('#closeBtn');

function openModal() {
    modalId.classList.add('animOpen');
    modalId.classList.remove('animClose');
    openBtn.style.display = 'none';
}

function closeModal() {
    modalId.classList.remove('animOpen');
    modalId.classList.add('animClose');
    openBtn.style.display = 'inline';
}

//open and close the openModal btn using javascript
function myFunction(x) {
    if (x.matches) { // If media query matches
        openBtn.style.display = 'inline';
    } else {
        openBtn.style.display = 'none';
    }
}
var x = window.matchMedia("(max-width: 790px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

////////////////////// features/////////////////////////////////
let control1 = document.querySelector('.control1');
let control2 = document.querySelector('.control2');
let control3 = document.querySelector('.control3');
let img = document.querySelector('.features img');
let heading = document.querySelector('.features h2');
let para = document.querySelector('.features p');

control1.addEventListener('click', () => {
    control1.classList.add('activeControl');
    control2.classList.remove('activeControl');
    control3.classList.remove('activeControl');
    img.setAttribute('src', 'images/illustration-features-tab-1.svg');
    heading.innerHTML = 'Bookmark in one click';
    para.innerHTML = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
})
control2.addEventListener('click', () => {
    control2.classList.add('activeControl');
    control1.classList.remove('activeControl');
    control3.classList.remove('activeControl');
    img.setAttribute('src', 'images/illustration-features-tab-2.svg');
    heading.innerHTML = 'Intelligent search';
    para.innerHTML = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';

})
control3.addEventListener('click', () => {
    control3.classList.add('activeControl');
    control1.classList.remove('activeControl');
    control2.classList.remove('activeControl');
    img.setAttribute('src', 'images/illustration-features-tab-3.svg');
    heading.innerHTML = 'Share your bookmarks';
    para.innerHTML = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';

})

// ///////////////////question answer //////////////////
$('.question.q1').click(function() {
    $('.q1 i').attr('class', function(i, origValue) {
        return origValue == "fas fa-arrow-down" ? "fas fa-arrow-up" : "fas fa-arrow-down";
    })
    $('.answer.a1').slideToggle('fast');
});

$('.question.q2').click(function() {
    $('.q2 i').attr('class', function(i, origValue) {
        return origValue == "fas fa-arrow-down" ? "fas fa-arrow-up" : "fas fa-arrow-down";
    });
    $('.answer.a2').slideToggle('fast');
});

$('.question.q3').click(function() {
    $('.q3 i').attr('class', function(i, origValue) {
        return origValue == "fas fa-arrow-down" ? "fas fa-arrow-up" : "fas fa-arrow-down";
    });
    $('.answer.a3').slideToggle('fast');
});

$('.question.q4').click(function() {
    $('.q4 i').attr('class', function(i, origValue) {
        return origValue == "fas fa-arrow-down" ? "fas fa-arrow-up" : "fas fa-arrow-down";
    });
    $('.answer.a4').slideToggle('fast');
});

/////////// //////////////contact us ///////////////////////

//function for validation
function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

//on form submit
document.querySelector('.contactUs form').onsubmit = (e) => {
    e.preventDefault();
    let useremail = document.querySelector('form input').value;

    if (ValidateEmail(useremail)) {

        console.log('email correct')

        //send a req to our server
        fetch('http://localhost:3000/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: useremail })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data); //data sent from the server 

                document.querySelector('.contactUs form .errorCont').classList.add('successClass');
                document.querySelector('.contactUs form .errorCont').classList.remove('errorClass');
                document.querySelector('.contactUs form .errorCont').innerHTML = ` <input type="text" name="email" placeholder="enter email" id="email"><p> Please check your mail!</p>`;

                setTimeout(() => {
                    document.querySelector('.contactUs form .errorCont').classList.remove('successClass');
                    document.querySelector('.contactUs form .errorCont').innerHTML = ` <input type="text" name="email" placeholder="enter email" id="email">`;

                }, 3000);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    } else {
        console.log('email error')
        document.querySelector('.contactUs form .errorCont').classList.add('errorClass');
        document.querySelector('.contactUs form .errorCont').innerHTML = ` <input type="text" name="email" placeholder="enter email" id="email"><p>whoops make sure its an email!</p>`;

    }
}