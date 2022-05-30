let comments = [];

let displayNameInput = document.getElementById('displayNameInput').value;

let commentInput = document.getElementById('commentInput').value;

let profileImage = document.getElementById('profileImagePlaceholder').value;

const submitCommentButton =  document.getElementById('submitButton');

submitCommentButton.addEventListener('click', function () {
    //code to submit both user name and comment below
    if (displayNameInput.value == "" || commentInput.value == "") {
        alert("Please enter display name and/or comment.");
    } else if (displayNameInput.value == '[^]+' && commentInput.value == '[^]+') {
        console.log('it worked');
    }
})
