
import { renderComments } from "./domUtils.js";
import { bindSubmitCommentAction, bindDeleteActionToDeleteCommentButtons, bindEditActionToEditCommentButtons, bindEditActionToSubmitNewCommentButtons } from './bindEventsToActions.js'


function runOnInitialLoad() {
    bindSubmitCommentAction();
    bindDeleteActionToDeleteCommentButtons();
    bindEditActionToEditCommentButtons();
    bindEditActionToSubmitNewCommentButtons();
    renderComments();
}

window.onload = runOnInitialLoad;
