const run=()=>{
    const btns=document.querySelectorAll(".btn-link li");
    const contents=document.querySelectorAll(".main > section");
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        const content=contents[i];
        btn.addEventListener("click",(e)=>{
            btns.forEach((tag,i)=>{
                tag.classList.remove("active");
                contents[i].classList.remove("active");
            });
            btn.classList.add("active");
            content.classList.add("active");
        });
    }
};