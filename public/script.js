// Get references to the form and delete button
const deleteChatForm = document.getElementById("deleteChatForm");
const deleteButton = document.getElementById("deleteButton");

// Add a click event listener to the delete button
deleteButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the form from submitting immediately

    // Show a confirmation dialog
    const confirmation = confirm("Are you sure you want to delete this chat?");
    
    // If the user confirms, submit the form
    if (confirmation) {
        deleteChatForm.submit();
    }
});
