/*let button = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");
let counter = document.getElementById("counter");
let count = 0;
function add() {
    let li = document.createElement("li");
    li.innerText = input.value;





    let del = document.createElement("button");
    del.innerText = ("x");
    del.onclick = function () {
        li.remove();
        count--;
        counter.innerText = count;
    }
    li.append(del);
    list.append(li);
    count++;
    counter.innerText = count;
    counter.append(count);

}*/


/*let button = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");

function add() {
   

    // Create the list item
    let li = document.createElement("li");
    li.innerText = input.value;

    // Create the delete button
    let del = document.createElement("button");
    del.innerText = "x";
    //del.style.marginLeft = "10px";
    del.onclick = function () {
        list.removeChild(li); // Correctly remove the item from the list
    };

    // Append the delete button to the list item
    li.appendChild(del);

    // Append the list item to the list
    list.appendChild(li);

    // Clear the input
    input.value = "";
}*/
  let input = document.querySelector("input");
        let list = document.querySelector("ul");
        let counter = document.getElementById("counter");
        let count = 0;

        function add() {
            if (input.value.trim() === "") {
                alert("Please enter a task.");
                return;
            }

            let li = document.createElement("li");
            li.innerText = input.value;

            let del = document.createElement("button");
            del.innerText = "x";

            del.onclick = function () {
                li.remove();
                count--;
                counter.value=count;
                
            }

           

            count++;
            counter.value=count;
    
            
             li.appendChild(del);
            list.appendChild(li);
        }