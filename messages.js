let comments = [
    // {
    //     displayName: 'Brent',
    //     comment: 'a comment',
    //     id: '0'
    // },
    // {
    //     displayName: "Charlie",
    //     comment: 'another comment',
    //     id: '1'
    // }
];

const main = document.getElementsByTagName('main')[0];

let displayNameInput = document.getElementById('displayNameInput');

let commentInput = document.getElementById('commentInput');

let profileImage = document.getElementById('profileImagePlaceholder');

const submitCommentButton =  document.getElementById('submitButton');

let editPostedComment = document.getElementById('editPostedCommentButton');

let deletePostedComment = document.getElementById('deletePostedCommentButton');

// const edit = div.getElementsByClassName('editPostedCommentButton')[0];
// const content = div.getElementsByClassName('commentText')[0];

// const input = content;

// input.setAttribute('placeholder', 'Edit Comment');

// const contentContainer = content.parentElement;

const save = document.createElement('button');
save.innerText='Save';

// edit.addEventListener('click', function (e) {
//     contentContainer.innerHTML = '';
//     contentContainer.append(content);
// })

save.addEventListener('click', function (e) {
    comment.content = input.value;
    content.innerText - input.value;
    contentContainer.append(content);
})

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

//Create edit button that brings up an input box to edit the posted comment and then prints back to where the orignal comment was.

    editPostedComment.addEventListener('click', function () {
    
    const commentInputBox = document.createElement('div');
    const editButtonElement = document.body.querySelector(`[data-editButtonContainerId = '${idToAddInputBox}']`);

    editButtonElement.innerHTML = "<input type='text' placeholder='Edit Comment' id='newInputBox'>";

    // commentInputBox.innerHTML = "<input type='text' placeholder='Edit Comment' id='newInputBox'>";

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
            <div data-editButtonContainerId = '${id}'>
                <button id="editPostedCommentButton" data-commentButtonId = "${id}">Edit</button>
            </div>    
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
    alert('submit button clicked!');
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

