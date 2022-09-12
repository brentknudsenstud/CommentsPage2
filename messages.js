// const { connections } = require("mongoose");

let comments = [
    {
        displayName: 'Brent',
        comment: 'a comment',
        id: '0'
    },
    {
        displayName: "Charlie",
        comment: 'another comment',
        id: '1'
    }
];

let displayNameInput = document.getElementById('displayNameInput');

let commentInput = document.getElementById('commentInput');

let profileImage = document.getElementById('profileImagePlaceholder');

const submitCommentButton =  document.getElementById('submitButton');

let editPostedComment = document.getElementById('editPostedCommentButton');

let deletePostedComment = document.getElementById('deletePostedCommentButton');

function bindEditButtonListeners() {
    const editCommentButtons = document.querySelectorAll(".inputToEditCommentAndButtonToSubmitEditedComment")
    Array.from(editCommentButtons).forEach(function(buttonElement) {
        buttonElement.addEventListener('click', handleEditComment)
    })
}

function bindDeleteButtonListeners() {
    const deleteCommentButtons = document.querySelectorAll(".deletePostedCommentButton")
    Array.from(deleteCommentButtons).forEach(function(buttonElement) {
        buttonElement.addEventListener('click', handleDeleteComment)
    })
}
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
    bindEditButtonListeners();
    bindDeleteButtonListeners();
}

renderComments();

function handleEditComment(e) {
   
   const commentId = parseInt(e.target.getAttribute("data-commentId"))
    const newCommentToUse = e.target.parentElement.querySelector("input").value;
   comments = comments.map(function(commentItem) {
       const isToUpdate = commentId === commentItem.id
       const previousComment = commentItem.comment;
       const newComment = isToUpdate ? newCommentToUse : previousComment;
    return {
        ...commentItem,
        comment: newComment
    }
   })
}

//Create edit button that brings up an input box to edit the posted comment and then prints back to the where the orignal comment was.
editPostedComment.addEventListener('click', function () {
    
    const commentInputBox = document.createElement('div');

    commentInputBox.innerHTML = "<input type='text' placeholder='Edit Comment' id='newInputBox'>";

    document.getElementById('newInputBox').appendChild(commentInputBox);

}
)

function handleDeleteComment(e) {
    const idToDelete = e.target.getAttribute('data-deletebuttonid');
    const commentElement = document.body.querySelector(`[data-commentcontainerid = '${idToDelete}']`);

    commentElement.remove();
    comments = comments.filter(x => x.id !== idToDelete)
}

function getCommentBoxAsString(displayName, comment, id) {

    return `<div data-commentContainerId = "${id}">
    <div class="profileImagePlaceholderDiv" >
        <i class="profileImagePlaceholder" class="fa-solid fa-user"></i>
       </div>
       <div>
            <h4>${displayName}</h4>
            <div>
                <button class="editPostedCommentButton" data-commentButtonId = "${id}">Edit</button>
                <button class="deletePostedCommentButton" data-deleteButtonId = "${id}">Delete</button>
            </div>
            <div>
                <p id="commentText">${comment}</p>
            </div>  
            
            <div 
            class="inputToEditCommentAndButtonToSubmitEditedComment">
                <input type="text" placeholder="Edit Comment" id='newInputBox'>
                <button data-commentId = "${id}">Submit</button>
            </div>  
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

