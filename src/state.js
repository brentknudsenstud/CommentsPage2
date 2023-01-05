let comments = [];

export function getComments() {
    return comments;

}

function getRandomId(){
    return crypto.randomUUID()
}

export function addComment({ photo, name, comment }) {
    const id = getRandomId();
    
    comments = [ {photo, name, comment, id}, ...comments]
}

export function deleteComment(idToDelete) {
    comments = comments.filter(({ id }) => id !== idToDelete );
}

export function editComment({ id, comment }) {
    const commentToUpdate = comments.find(({ id: id1 }) => id === id1);
    // add functionality so that original comment to edit shows up in input box
    // psuedo code below
    // if edit button is clicked,
    // then grab current comment and attach current comment and display in edit input box
    // then when sumbit button is clicked, replace current comment with edited version of comment.

    // <input type="text" id="input" onkeyup="writethis()" />
    // function writethis() { // the function 
    // var h = document.getElementById('input').value; // the value
    // document.getElementsByClassName('mainBody').innerHTML = h; // the input
    // }
    commentToUpdate.comment = comment;
}
