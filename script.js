// search in the text box
document.getElementById("icon-go").addEventListener('click', (e) => {
    e.preventDefault();
    location.href = `https://${document.getElementById("input-box").value}/`;
})







// click on the shortcut
document.getElementsByClassName("div-sk1")[0].addEventListener('click', () => {
    location.href = "https://chatgpt.com/";
})
document.getElementsByClassName("div-sk1")[1].addEventListener('click', () => {
    location.href = "https://github.com/";
})

// Add new shortcut button click
document.getElementById("add-shortcut-btn").addEventListener('click', () => {
    document.getElementsByClassName("add-shortcut")[0].style.display = "block";
    document.getElementsByClassName("div-container")[0].style.background = "#13171c";
    document.getElementsByClassName("div-box")[0].style.opacity = "0.5";
})

//cancel button click
document.getElementById("c-btn").addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementsByClassName("add-shortcut")[0].style.display = "none";
    document.getElementById("text-title").value = "";
    document.getElementById("text-link").value = "";
    document.getElementsByClassName("div-container")[0].style.background = "#313c4c";
    document.getElementsByClassName("div-box")[0].style.opacity = "1.0";
})

//done button click
document.getElementById("d-btn").addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.getElementById("text-title").value;
    let url = document.getElementById("text-link").value;
    localStorage.setItem(title, url);
    //display_element();  // display the element using localstorage
    document.getElementsByClassName("add-shortcut")[0].style.display = "none";
    document.getElementById("text-title").value = "";
    document.getElementById("text-link").value = "";
    document.getElementsByClassName("div-container")[0].style.background = "#313c4c";
    document.getElementsByClassName("div-box")[0].style.opacity = "1.0";
    location.reload();
})


let display_element = () => {
    for (let i = 0; i < localStorage.length; i++) {
        //now create a element
        let div_m = document.createElement('div');
        let div_c1 = document.createElement('div');
        let div_c2 = document.createElement('div');
        let span = document.createElement('span');
        let i_tag = document.createElement('i');

        i_tag.className = "fa-solid fa-trash i-icon";
        i_tag.id=`i-${localStorage.key(i)}`;

        div_m.className = "div-sk1 my-child";
        div_m.id = `div-${localStorage.key(i)}`;

        div_c1.className = "logo";

        div_c2.className = "text";
        div_c2.id = `text-${localStorage.key(i)}`;
        
        span.id = `span-${localStorage.key(i)}`;

        div_c1.appendChild(span);
        div_m.appendChild(div_c1);
        div_m.appendChild(div_c2);
        //Append child in second last location
        let before_child = document.getElementById("add-shortcut-btn");
        document.getElementsByClassName("box-shortcut")[0].insertBefore(i_tag, before_child);
        document.getElementsByClassName("box-shortcut")[0].insertBefore(div_m, before_child);
        document.getElementById(`span-${localStorage.key(i)}`).innerText = localStorage.key(i)[0];
        document.getElementById(`text-${localStorage.key(i)}`).innerText = `${localStorage.key(i).slice(0, 5)}`;
    }
}
display_element();


if (localStorage.length > 0) {
    let all_child = document.querySelectorAll(".my-child");
    all_child.forEach((elem)=>{
        elem.addEventListener('click',()=>{
            location.href = `${localStorage.getItem(elem.id.slice(4))}`;
        })
    })

    let shortcut_del = document.querySelectorAll(".i-icon");
    shortcut_del = Array.from(shortcut_del);

    shortcut_del.forEach((elem)=>{
        elem.addEventListener('click',()=>{
            // localStorage.removeItem(elem.id.slice(2));
            alert("delete");
        })
    })
}

if (localStorage.length > 4){
    document.getElementById("add-shortcut-btn").style.display="none";
}

// localStorage.clear();