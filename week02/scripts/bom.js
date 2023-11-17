// Declare constants for the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the button
button.addEventListener('click', () => {
    // Check if the input is not blank
    if (input.value !== '') {
        // Create a new list item
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Set the text of the list item and the delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // Append the delete button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        list.append(li);

        // Add click event listener to the delete button
        deleteButton.addEventListener('click', function () {
            // Remove the list item when the delete button is clicked
            list.removeChild(li);
            // Focus the input field after deletion
            input.focus();
        });

        // Reset the input field and focus it for new input
        input.value = '';
        input.focus();
    } else {
        // If the input is blank, focus the input field
        input.focus();
    }
});

// Optional: to handle Enter key in the input field
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        button.click();
    }
});
