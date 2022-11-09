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
    
    const editedMessageToSubmit = document.
    getElementById("newInputBox");
    

    editedMessageToSubmit.addEventListener("click", (event) => {
        if ("newInputBox" == "") {
            alert("Please fill out input box with edited comment.");
        } else if("newIputBox" != "") {
            // replace current comment with new comment by grabbing current comment (use the id?) and populating
            console.log("not empty input");
        }
    })

    // Example code below
    // btn.addEventListener("click", (e) => {
    //     box.click();
    //   });



}
