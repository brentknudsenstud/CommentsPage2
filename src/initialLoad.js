
import { renderComments } from "./domUtils.js";
import { bindSubmitCommentAction, bindDeleteActionToDeleteCommentButtons, bindEditActionToEditCommentButtons } from './bindEventsToActions.js'


function runOnInitialLoad() {
    bindSubmitCommentAction();
    bindDeleteActionToDeleteCommentButtons();
    bindEditActionToEditCommentButtons();
    renderComments();
}

window.onload = runOnInitialLoad;
