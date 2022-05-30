let comments = [];

let displayNameInput = document.getElementById('displayNameInput');

let commentInput = document.getElementById('commentInput');

let profileImage = document.getElementById('profileImagePlaceholder');

const submitCommentButton =  document.getElementById('submitButton');

submitCommentButton.addEventListener('click', function () {
    if (displayNameInput.value != "" && commentInput.value != "") {
        comments.push(displayNameInput);
        let Html = 
        
        for (i = 0; i < comments.length - 1; i++) 
        {
            
        }
    } else if (displayNameInput.value == '' || commentInput.value == '') {
        displayNameInput.setCustomValidity('Please fill out user name and/or comment');
    }
    
} 
)
