import { getNameInputValue, getCommentInputValue, renderComments, renderInvalidInputOnSubmit} from './domUtils.js';
import { addComment, deleteComment, editComment } from './state.js';

export function handleSubmitCommentAction() {
    const name = getNameInputValue();
    const comment = getCommentInputValue();
    const isAllInputValid = [name, comment].every(input => input.length > 0);

    if(isAllInputValid) {
        addComment({ name, comment })
        renderComments();
    } else {
        renderInvalidInputOnSubmit();
    }
}

export function handleDeleteCommentAction(id) {
    deleteComment(id);
    renderComments();
}

export function handleEditCommentAction(id) {
    editComment(id);
    renderComments();
}
