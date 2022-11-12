import { getPhotoValue, getNameInputValue, getCommentInputValue, renderComments, renderInvalidInputOnSubmit} from './domUtils.js';
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
    const inputContainer = document.querySelector(`[data-commentId="${id}"`).parentElement;
    // remove the hide class on the div with class inputToEditCommentAndButtonToSubmitEditedComment
    if (inputContainer) {
        inputContainer.classList.remove("hide");
    }

}

export function submitEditedMessageToReplacePreviousMessage(id) {
    
    const editedMessageToSubmit = document.getElementById("editPostedCommentButton");
    const inputTextForEditedComment = document.getElementById("newInputBox").value;

    editedMessageToSubmit.addEventListener("click", (e) => {
        if (inputTextForEditedComment == "") {
            alert("Please write edited comment.");
        } else if (inputTextForEditedComment != "") {
            // replace current comment with new comment by grabbing current comment (use the id?) and populating
            
        }
    })

}
