const myNumberInput = document.getElementById("im-num");
myNumberInput.addEventListener("input", function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
});
