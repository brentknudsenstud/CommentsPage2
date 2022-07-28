let comments = [
    {
        displayName: 'Brent',
        comment: 'a comment',
        id: 0
    },
    {
        displayName: "Charlie",
        comment: 'another comment',
        id: 1
    }
];

let displayNameInput = document.getElementById('displayNameInput');

let commentInput = document.getElementById('commentInput');

let profileImage = document.getElementById('profileImagePlaceholder');

const submitCommentButton =  document.getElementById('submitButton');

function bindEditButtonListeners() {
    const editCommentButtons = document.querySelectorAll(".inputToEditCommentAndButtonToSubmitEditedComment")
    Array.from(editCommentButtons).forEach(function(buttonElement) {
        buttonElement.addEventListener('click', handleEditComment)
    })
};
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

function getCommentBoxAsString(displayName, comment, id) {

    return `<div class="profileImagePlaceholderDiv">
        <i class="profileImagePlaceholder" class="fa-solid fa-user"></i>
       </div>
       <div>
            <h4>${displayName}</h4>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div>
                <p>${comment}</p>
            </div>  
            
            <div 
            
            class="inputToEditCommentAndButtonToSubmitEditedComment">
                <input type="text" placeholder="Edit Comment">
                <button data-commentId = "${id}">Submit</button>
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
