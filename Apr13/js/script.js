items, photos, itemArray = [];

var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');


//Remember backtick

var selectedArray = [];
var itemArray = 
[
    {
        img: "http://unsplash.it/256/256?image=100", 
        alt: "is it working?", 
        title: "Foggy Beach", 
        cost: 150, 
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, nobis?", 
    },
    {
        img: "http://unsplash.it/256/256?image=206", 
        alt: "image 206", 
        title: "Grassy Lands", 
        cost: 75, 
        desc: "Mundane daily life picture on sale as art", 
    },
    { 
        img: "http://unsplash.it/256/256?image=208", 
        alt: "image 208", 
        title: "Fancy Window", 
        cost: 100, 
        desc: "Picture of a cheap window on sale for a value that's more then the actual window", 
    }, 
    { 
        img: "http://unsplash.it/256/256?image=211", 
        alt: "image 211", 
        title: "Boaty McBoatface", 
        cost: 125, 
        desc: "Pointless sales hype in order to gain money. Give me your money!", 
    }, 
    { 
        img: "http://unsplash.it/256/256?image=213", 
        alt: "image 213", 
        title: "Pleasent Beach", 
        cost: 175, 
        desc: "What seems like fog is actually pollution from hundrads of cars!", 
    }

];

function displayItems(arr)
{
    for(var i=0; i < arr.length; i++)
    {
        // console.log(arr[i].alt);
        var item = `
            <li data-sku="${i + 1}">
                <input type="checkbox">
                <img src="${arr[i].img}" alt="${arr[i].alt}">
                <h3>${arr[i].title}</h3>
                <p>$${arr[i].cost}</p>
                <p> ${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
   
}

displayItems(itemArray);
console.log(items.children);

function addListener(arr, objectArr)
{
    for(i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
        arr[i].addEventListener('click', function(evt)
    {
        // console.log(this.firstElementChild.checked);
        this.classList.toggle('selected');
        // this.firstElementChild.checked = true;

        // Ternary Operatior // aka super awesome if statement
        (this.firstElementChild.checked) ? 
            this.firstElementChild.checked = false:
            this.firstElementChild.checked = true ;
            // console.log(this.firstElementChild.checked);

            // console.log(this.dataset.sku); 
            // selectedArray.push(arr[this.dataset.sku]);
            selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku) + 1)[0]);
            console.log(selectedArray);
    });
    }
    // selectedArray.push();

}
addListener(items.children, itemArray);