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

    /* JavaScript to submit form via AJAX */
    document.addEventListener("DOMContentLoaded", function() {
    var createTodoForm = document.getElementById('createTodoForm');

    createTodoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formActionButton = document.getElementById('formActionButton');

              var formData = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                done: document.getElementById('isDone').checked,
                starred: document.getElementById('isStarred').checked
            };

            if (formActionButton.value === 'Update') {
                var id = document.querySelector('tr[data-id]').getAttribute('data-id');
                formData.id = id;

                fetch('/v1/todos/'+ id, {
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
                }).catch(function(error) {
                });
            }
       else{
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
    function closeModal() {

        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
     function showModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    }
    });

    var deleteButton = document.getElementById('deleteButton');

    deleteButton.addEventListener('click', function(event) {
    event.preventDefault();
    var row = event.target.parentNode.parentNode;
    var id = row.getAttribute('data-id');

    fetch('/v1/todos/' + id, {
        method: 'DELETE'
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
        }
        row.parentNode.removeChild(row);
        if(row){
            row.remove();
        }

    })
    .catch(function(error) {
        console.error('Error:', error);
    });
    });


    var updateButtons = document.querySelectorAll('#updateButton');

    updateButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var row = event.target.parentNode.parentNode;
        var title = row.querySelector('td:nth-child(1)').textContent;
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
