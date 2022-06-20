let comments = [
    {
        displayName: 'Brent',
        comment: 'a comment',
        id: 0
    },
    {
        displayName: "Charlie",
        comment: 'another comet',
        id: 1
    }
];

let displayNameInput = document.getElementById('displayNameInput');

let commentInput = document.getElementById('commentInput');

let profileImage = document.getElementById('profileImagePlaceholder');

const submitCommentButton =  document.getElementById('submitButton');

function renderComments() {
    // everything in comments to be rendered in the DOM in between main tags
    const mainElement = document.getElementsByTagName("main")[0];
    
    let htmlComment = '';
    const commentsOrdered = [...comments].reverse();
    for (let i = 0; i < commentsOrdered.length; i++) {
        const { displayName, comment } = commentsOrdered[i];
        htmlComment += getCommentBoxAsString(displayName, comment, i);
    }
   
    mainElement.innerHTML = htmlComment;
}

renderComments();

function handleEditComment(e) {
   
   const newComment = e.target.parentElement.querySelector("input").value;
   comments = comments.map(function(commentItem) {
    return {
        ...commentItem,
        comment: 
    }
   })
}

function getCommentBoxAsString(displayName, comment, id) {

    return `<div id="profileImagePlaceholderDiv">
        <i id="profileImagePlaceholder" class="fa-solid fa-user"></i>
       </div>
       <div>
            <h4 id="userName">${displayName}</h4>
            <div id="editAndDeleteButton">
                <button id="editButton">Edit</button>
                <button id="deleteButton">Delete</button>
            </div>
            <div id="actualComment">
                <p id="actualCommentDisplayed">${comment}</p>
            </div>  
            <div id="inputToEditCommentAndButtonToSubmitEditedComment">
                <input type="text" id="inputToEditComment" placeholder="Edit Comment">
                <button onclick="handleEditComment(${id})" id="submitEditedCommentButton">Submit</button>
            </div>  
            </div>
        </div>`

}

submitCommentButton.addEventListener('click', function () {
    const newDisplayName = displayNameInput.value;
    const newDisplayComment = commentInput.value;
    const newComment = {
        displayName: newDisplayName,
        comment: newDisplayComment,
        id: comments.length
    }
    const isFilledOutCorrectly = newDisplayName != "" && newDisplayComment != '';
    if (isFilledOutCorrectly) {
        comments.push(newComment);
        renderComments();
    } else {
        displayNameInput.setCustomValidity('Please fill out user name and/or comment');
    }
    
} 
)
