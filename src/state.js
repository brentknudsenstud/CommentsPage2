let comments = [];

export function getComments() {
    return comments;

}

function getRandomId(){
    return crypto.randomUUID()
}

export function addComment({ photo, name, comment }) {
    const id = getRandomId();
    
    comments = [ {photo, name, comment}, ...comments]
}

export function deleteComment(idToDelete) {
    comments = comments.filter(({ id }) => id !== idToDelete );
}

export function editComment({ idToEdit, comment }) {
    const commentToUpdate = comments.find(({ id }) => id === idToEdit);

    commentToUpdate.comment = comment
}
