// UI Class: Handle UI Tasks
class UI {
    static showForm(params) {
        document.querySelector('.popup').style = 'display: flex'
    }

    static closeForm(params) {
        document.querySelector('.popup').style = 'display: none'
    }
}

// Task functions
class Task {
    
}

// Events

// Event: show Add Task Form
document.querySelector(".add-task-btn").addEventListener('click', () => UI.showForm());

// Event: hide Add Task Form
document.querySelector(".close-form-icon").addEventListener('click', () => UI.closeForm());

// Event: hide popup by click outside
document.querySelector(".popup").addEventListener('click', (e) => {
    if (e.target.className === 'popup') {
        UI.closeForm();
    }
})