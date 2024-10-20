document.getElementById('button').addEventListener('click', function() {
    setTimeout(function() {
    alert('Long five seconds huh?');
}, 5000);
});

document.getElementById('nameForm').addEventListener('submit', function(event){
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    alert('Hello, ${firstName} ${lastName}!');
});
