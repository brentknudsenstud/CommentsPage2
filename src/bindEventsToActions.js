import { handleSubmitCommentAction, handleDeleteCommentAction, handleEditCommentAction } from './actions.js';
import { getSubmitButton, getDeleteCommentIdFromEvent, getEditCommentIdFromEvent } from "./domUtils.js";

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

export function bindEditActionToEditCommentButtons() {
    document.body.addEventListener( 'click', function ( event ) {
       
        const editButtonId = getEditCommentIdFromEvent(event);
        // below changed deleteButtonId to editButtonId
        const isClickedItemAnEditButton = !!editButtonId;
        
        if(isClickedItemAnEditButton) {
            handleEditCommentAction(editButtonId);
            // when edit button is clicked, populate an input box
        };
        
        event.preventDefault();
    });
}

