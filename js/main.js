function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

const randomInput = () => {
    const values = shuffleArray(
        topics.split("\n").map((e) => {
            return e.split("(")[0];
        })
    );

    const lst = document.getElementsByClassName("qa");

    for (const div of lst) {
        let inp = div.children[1];
        inp.value = values.pop();
    }

    onInput();
};

const onInput = () => {
    const lst = document.getElementsByClassName("qa");
    const values = [];

    for (const div of lst) {
        let inp = div.children[1];
        console.log(inp, inp.value);
        values.push(inp.value);
    }

    console.log(values);

    const query = shuffleArray(values).join(",").replaceAll(",,", ",");
    const img = document.getElementById("unsplash-image-1");
    if (query.replaceAll(",", "").length > 0) {
        img.src = `https://source.unsplash.com/400x0/?${query}`;
    } else {
        img.src = "https://source.unsplash.com/random/400x0/";
    }
    console.log(img.src);

    const msg = document.getElementById("image-onload-notion-1");
    msg.style.display = "block";

    const h2 = document.getElementById("key-word-1");
    h2.innerHTML = `关键词：${query}`;
};

const imgOnload = () => {
    const msg = document.getElementById("image-onload-notion-1");
    msg.style.display = "none";
};

const options = {
    baidu: false,
    who: true,
};

const toggleBaidu = (e) => {
    options.baidu = !options.baidu;
    const baidu = document.getElementById("baidu-iframe");
    baidu.style.display = options.baidu ? "block" : "none";
    e.checked = options.baidu;
};

const toggleWHO = (e) => {
    options.who = !options.who;
    const who = document.getElementById("who-iframe");
    who.style.display = options.who ? "block" : "none";
    e.checked = options.who;
};
