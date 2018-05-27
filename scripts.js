document.addEventListener('DOMContentLoaded', function () {


    let button = document.createElement('button')
    let btnText = document.createTextNode('Add Square')
    button.appendChild(btnText)
    document.body.appendChild(button)

    let containerDiv = document.createElement('div')
    document.body.appendChild(containerDiv)



    function addSquare() {
        var divSquare = document.createElement('div');
        containerDiv.appendChild(divSquare);
        divSquare.id = document.getElementsByClassName('divSquare').length;
        divSquare.className = 'divSquare';

        divSquare.addEventListener('mouseover', function () {
            divSquare.textContent = divSquare.id;

        });
        divSquare.addEventListener('mouseout', function () {
            divSquare.innerText = "";
        })

        
        divSquare.addEventListener('click', function () {
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            divSquare.style.backgroundColor = randomColor;
        })

        divSquare.addEventListener('dblclick', function () {
            if (divSquare.id%2 === 0) {
                if (divSquare.nextSibling) {
                    divSquare.nextSibling.remove();
                } else {
                    alert('There is no square after this one!');
                }
            } else {
                if (divSquare.previousSibling) {
                    divSquare.previousSibling.remove();
                } else {
                    alert('There are no squares before this one!');
                }
            }
        })

       
    }

    
    button.addEventListener('click', addSquare);
})



