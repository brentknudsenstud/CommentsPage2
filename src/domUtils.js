import { getComments } from './state.js';

// =======================
// Grab things from the page

export function getPhotoValue() {
    return 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
}

export function getNameInputValue() {
    const nameInputElement = document.querySelector('#displayNameInput');

    return nameInputElement.value;
}


export function getCommentInputValue() {
    const commentInputElement = document.querySelector('#commentInput');

    return commentInputElement.value;
}

export function getSubmitButton() {
    return document.querySelector('#submitButton')
}

export function getDeleteCommentIdFromEvent(e) {
    return e.target.getAttribute('data-deleteButtonId') ?? '';
}

export function getEditCommentIdFromEvent(e) {
    return e.target.getAttribute('data-editButtonId');
}

// clear inputs
export function clearNameAndCommentInputs() {
    const nameInputElement = getNameInputValue();
    const commentInputElement = getCommentInputValue();

    nameInputElement.value = '';
    commentInputElement.value = '';
}

// =======================
// Rendering Comments

function getCommentBoxAsString(name, comment, id, photo) {

    return `
        <div data-commentContainerId = "${id}">
            <div class="profileImagePlaceholderDiv" >
                <i class="profileImagePlaceholder" class="fa-solid fa-user"></i>
                <img src="${photo}" width="32"></img>
            </div>
            <div>
                    <h4>${name}</h4>
                    <div>
                    <div data-editButtonContainerId = '${id}'>
                        <button id="editPostedCommentButton" data-editButtonId = "${id}">Edit</button>
                    </div>    
                        <button id="deletePostedCommentButton" data-deleteButtonId = "${id}">Delete</button>
                    </div>
                    <div>
                        <p id="commentText">${comment}</p>
                    </div>  
                    
                    <div 
                    class="inputToEditCommentAndButtonToSubmitEditedComment hide">
                        <input type="text" placeholder="Edit Comment" id='newInputBox' class="input-color-change">
                        <button data-commentId="${id}" id="submitEditedCommentButton">Submit</button>
                    </div>  
                    </div>
                </div>
        </div>
    `


}

export function renderComments() {
    const mainElement = document.querySelector("main");
    const comments = getComments();
    const commentsAsHTML = comments.reduce((html, { name, comment, id, photo}) => `${html}${getCommentBoxAsString(name, comment, id, photo)}`, '');
   
    mainElement.innerHTML = commentsAsHTML;

}

export function renderInvalidInputOnSubmit() {
    alert('Both name and comment need to be filled out')
}
