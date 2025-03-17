document.addEventListener("DOMContentLoaded", function () {

    const navItems = document.querySelectorAll(".right div");
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navItems.forEach(nav => nav.classList.remove("border-bottom", "border-dark"));
            this.classList.add("border-bottom", "border-dark");
        });
    });


    document.querySelectorAll(".last1").forEach(likeBtn => {
        likeBtn.addEventListener("click", function () {
            this.classList.toggle("text-primary");
            this.querySelector("i").classList.toggle("fa-solid");
        });
    });


    document.querySelectorAll(".last2").forEach(commentBtn => {
        commentBtn.addEventListener("click", function () {
            let commentBox = this.closest(".mm2").querySelector(".comment-box");
            if (!commentBox) {
                commentBox = document.createElement("div");
                commentBox.classList.add("comment-box");
                commentBox.innerHTML = '<input type="text" class="form-control mt-2" placeholder="Write a comment...">';
                this.closest(".mm2").appendChild(commentBox);
            } else {
                commentBox.remove();
            }
        });
    });


    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Toggle Dark Mode";
    darkModeBtn.classList.add("btn", "btn-dark", "mt-3");
    document.body.prepend(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
