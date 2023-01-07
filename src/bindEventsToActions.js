import { handleSubmitCommentAction, handleDeleteCommentAction, handleClickedEditButton, handleSubmitEditComment } from './actions.js';
import { getSubmitButton, getDeleteCommentIdFromEvent, getEditCommentIdFromEvent, getSubmitNewCommentIdFromEvent, getEditCommentInputValue, clearNameAndCommentInputs } from "./domUtils.js";

export function bindSubmitCommentAction() {
    const submitButton = getSubmitButton();

    submitButton.addEventListener('click', () => {
        handleSubmitCommentAction(); 
    })

}


export function bindDeleteActionToDeleteCommentButtons() {
    document.body.addEventListener( 'click', function ( event ) {
        
        const deleteButtonId = getDeleteCommentIdFromEvent(event);
        const isClickedItemADeleteButton = !!deleteButtonId;
        
        if(isClickedItemADeleteButton) {
            handleDeleteCommentAction(deleteButtonId);
            // loop to go through array and remove entire comment with profile pic, name and comment
        };
        
        event.preventDefault();
    });
}

const addCurrentCommentToEditInputBox = document.getElementById('commentText');

export function bindEditActionToEditCommentButtons() {
    document.body.addEventListener( 'click', function ( event ) {
       
        const editButtonId = getEditCommentIdFromEvent(event);
        // const addCommentTextToInputBox = addCurrentCommentToEditInputBox;
        // const isClickedItemAnEditButton = !!editButtonId;
        // addCurrentCommentToEditInputBox.value += innerHTML;
        
        if(isClickedItemAnEditButton) {
            handleClickedEditButton(editButtonId);
            // when edit button is clicked, populate an input box (see actions.js file) 
        };
        
        event.preventDefault();
    });
}

export function bindEditActionToSubmitNewCommentButtons() {
    document.body.addEventListener( 'click', function ( event ) {
       
        const editButtonId = getSubmitNewCommentIdFromEvent(event);
        const isClickedItemAnEditButton = !!editButtonId;
        
        if(isClickedItemAnEditButton) {
            const newComment = getEditCommentInputValue(editButtonId);

            handleSubmitEditComment(editButtonId, newComment);
            // when edit button is clicked, populate an input box (see actions.js file)
            
        };
        
        event.preventDefault();
    });
    
}

