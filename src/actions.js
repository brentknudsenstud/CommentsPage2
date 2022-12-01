import { getPhotoValue, getNameInputValue, getCommentInputValue, renderComments, renderInvalidInputOnSubmit, clearNameAndCommentInputs} from './domUtils.js';
import { addComment, deleteComment, editComment } from './state.js';

export function handleSubmitCommentAction() {
    const name = getNameInputValue();
    const comment = getCommentInputValue();
    const photo = getPhotoValue();
    const isAllInputValid = [name, comment].every(input => input.length > 0);

    if(isAllInputValid) {
        addComment({ photo, name, comment })
        renderComments();
    } else {
        renderInvalidInputOnSubmit();
    }
    
}

export function handleDeleteCommentAction(id) {
    deleteComment(id);
    renderComments();
}

export function handleClickedEditButton(id) {
    
    // grab the div with class inputToEditCommentAndButtonToSubmitEditedComment that pertains to this comment
    const inputContainer = document.querySelector(`[data-editButtonId="${id}"`).parentElement.parentElement.parentElement.querySelector(".hide");
    // remove the hide class on the div with class inputToEditCommentAndButtonToSubmitEditedComment
    if (inputContainer) {
        inputContainer.classList.remove("hide");
    }

}

export function handleSubmitEditComment(id, comment) {
    editComment({id, comment});
    renderComments();
}

export function submitEditedMessageToReplacePreviousMessage(id) {
    
    const editedMessageToSubmit = document.getElementById("submitEditedCommentButton");
    const inputTextForEditedComment = document.getElementById("newInputBox").value;

    editedMessageToSubmit.addEventListener("click", () => {
        if (inputTextForEditedComment === "") {
            alert("Please write edited comment.");
        } else if (inputTextForEditedComment !== "") {
            // replace current comment with new comment by grabbing current comment (use the id?)
            // I don't know what to do here, I even put in a console.log to see if any event was happening and I got nothing. Frustrating that I don't know how to do this simple stuff. Very frustrating.
        }
    })

}
