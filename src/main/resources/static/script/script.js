    document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById('myModal');
        var closeBtn = document.getElementsByClassName("close")[0];
        var createTodoLink = document.getElementById('createTodoLink');

        function showModal() {
            modal.style.display = "block";
        }

        function closeModal() {
            var todoForm = document.getElementById('createTodoForm');
            todoForm.reset();
            modal.style.display = "none";
        }

        closeBtn.onclick = function() {
            closeModal();
            window.location.reload();

        };

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
                window.location.reload();

            }
        };

        createTodoLink.onclick = function(event) {
            event.preventDefault(); // Prevent the default link behavior
            showModal();
        };
    });

   document.addEventListener("DOMContentLoaded", function() {
       var createTodoForm = document.getElementById('createTodoForm');

       createTodoForm.addEventListener('submit', function(event) {
           event.preventDefault();

           var formActionButton = document.getElementById('formActionButton');
           var id = createTodoForm.getAttribute('data-id'); // Retrieve the id stored in the form

           var formData = {
               title: document.getElementById('title').value,
               description: document.getElementById('description').value,
               done: document.getElementById('isDone').checked,
               starred: document.getElementById('isStarred').checked
           };

           if (formActionButton.value === 'Update') {
               formData.id = id; // Use the id retrieved from the form

               fetch('/v1/todos/' + id, {
                   method: 'PUT',
                   body: JSON.stringify(formData),
                   headers: {
                       'Content-Type': 'application/json'
                   }
               })
               .then(function(response) {
                   if (!response.ok) {
                       throw new Error('Network response was not ok');
                   }
                   closeModal();
                   window.location.reload();
               }).catch(function(error) {});
           } else {
               fetch('/v1/todos', {
                   method: 'POST',
                   body: JSON.stringify(formData),
                   headers: {
                       'Content-Type': 'application/json'
                   }
               })
               .then(function(response) {
                   if (!response.ok) {
                       throw new Error('Network response was not ok');
                   }
                   closeModal();
                   window.location.reload();
               })
               .catch(function(error) {
                   console.error('Error:', error);
               });
           }

       });
   });
var deleteButtons = document.querySelectorAll('.deleteButton'); // Assuming all delete buttons have the class 'deleteButton'

deleteButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var row = event.target.parentNode.parentNode;
        var id = row.getAttribute('data-id');
        console.log(id);

        fetch('/v1/todos/' + id, {
                method: 'DELETE'
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('HTTP error, status = ' + response.status);
                }
                window.location.reload();
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    });
});


   var updateButtons = document.querySelectorAll('#updateButton');

   updateButtons.forEach(function(button) {
       button.addEventListener('click', function(event) {
           event.preventDefault();
           var row = event.target.parentNode.parentNode;
           var id = row.getAttribute('data-id'); // Store the id of the row
           var title = row.querySelector('td:nth-child(1)').textContent.replace(/\u2605|\u2606/g, '').trim();
           var description = row.querySelector('td:nth-child(2)').textContent;
           var isDone = row.querySelector('td:nth-child(3)').textContent.trim() === 'Yes';
           var isStarred = row.querySelector('td:nth-child(4)').textContent.trim() === 'Yes';

           document.getElementById('title').value = title;
           document.getElementById('description').value = description;
           document.getElementById('isDone').checked = isDone;
           document.getElementById('isStarred').checked = isStarred;

           var formTitle = document.getElementById('formTitle');
           formTitle.textContent = 'Update Todo';

           var formActionButton = document.getElementById('formActionButton');
           formActionButton.value = 'Update';

           // Set the id attribute of the form for later use
           document.getElementById('createTodoForm').setAttribute('data-id', id);

           showModal();
       });
   });

    function closeModal() {

        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

    function showModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    }