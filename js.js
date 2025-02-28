containers = document.getElementById('container');

arr_dogs = ["dog1.jpeg", "dog2.jpeg", "dog3.jpeg", "dog4.jpeg"]

for (let i = 0; i < arr_dogs.length; i++) {
    container = document.createElement(div);
    container.className = "container";
    container.id(arr_dog[i])
    containers.appendChild(container);

    img = document.createElement('img');
    img.src = img_dog[i];
    img.className = "DogImg";
    container.appendChild(img);

    checkbox = document.createElement('img');
    checkbox.src = "checkbox.png";
    checkbox.className = "checkbox";
    container.appendChild(checkbox);
}

function checkboxOnClick() {
    if (this.src == "checkbox.png") {
        this.src = "checked.png";
        this.parentElement.style.opacity = 1;
    } else {
        this.src = "checkbox.png";
        this.parentElement.style.opacity = 0.6;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let containers = document.getElementsByClassName('containers');
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.opacity = 0.6;
    }
    let checkboxs = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxs.length; i++) {
        checkboxs[i].addEventListener('click', checkboxOnClick);
    }
}