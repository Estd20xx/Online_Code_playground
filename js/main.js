let search = () => {
    let data = document.getElementById("data").value;
    var First = data.charAt(0).toUpperCase();
    var Remaining = data.slice(1);
    var Final = First + Remaining;
    document.getElementById("OutputScreen").innerHTML = Final;
};

