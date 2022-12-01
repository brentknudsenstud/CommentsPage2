import { getComments } from './state.js';
import { submitEditedMessageToReplacePreviousMessage } from './actions.js';

// =======================
// Grab things from the page

export function getPhotoValue() {
    return 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80'
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

export function getSubmitNewCommentIdFromEvent(e) {
    return e.target.getAttribute('data-submitButtonId');
}

export function getEditCommentInput(id) {
    return document.querySelector(`[data-editCommentInput="${id}"]`)

}

export function getEditCommentInputValue(id) {
    const inputElement = getEditCommentInput(id);
    return inputElement.value;

}

// clear inputs
export function clearNameAndCommentInputs() {
    // put function above in the right place to clear display name input and comment input when Submit button is clicked
    const nameInputElement = getNameInputValue();
    const commentInputElement = getCommentInputValue();

    nameInputElement.value = '';
    commentInputElement.value = '';

}

// =======================
// Rendering Comments

function getCommentBoxAsString(name, comment, id, photo) {

    return `
        <div data-commentContainerId = "${id}" class="profileImage-comment-edit-delete-input-submit-container">
            <div class="profileImagePlaceholderDiv" >
                <i class="profileImagePlaceholder" class="fa-solid fa-user"></i>
                <img class="profileImage"src="${photo}" width="32"></img>
                <p class="displayName">${name}</p>
            </div>
            <div>
                
                <div>
                    <div id="comment-edit-delete-container">
                        <div class="comment">
                            <p id="commentText">${comment}</p>
                        </div>
                        <div data-editButtonContainerId = '${id}' class="edit-delete-buttons">
                            <button id="editPostedCommentButton" data-editButtonId = "${id}">&#128221;</button>
                            <button id="deletePostedCommentButton" data-deleteButtonId = "${id}">&#128465;</button>
                        </div>
                    </div>  
                
                    <div 
                    class="inputToEditCommentAndButtonToSubmitEditedComment hide">
                        <input data-editCommentInput="${id}" type="text" placeholder="Edit Comment" id='newInputBox' class="input-color-change">
                        <button data-submitButtonId="${id}" id="submitEditedCommentButton">Submit</button>
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

