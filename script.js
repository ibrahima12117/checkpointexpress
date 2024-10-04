let cont = document.getElementsByClassName("box");
for (let i = 0; i < cont.length; i++) {
let box = cont[i].children[1];
let button = cont[i].children[1].children[0];
    button.addEventListener("click", () => {
        const colors = ["green", "blue", "yellow", "gray"];

        let i = 0;
        setInterval(() => {
            box.style.background = colors[i];
            
            i++
            if (i > colors.length - 1) {
                i = 0;
            }
        }, 1000);

    });
};