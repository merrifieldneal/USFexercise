// number facts
let favNum = 3;
let favNums = [3, 6, 9];
let baseURL = "http://numbersapi.com";

// p1 1 fact 
async function p1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
p1();

//p2 multiple numbers
async function p2() {
    let data = await $.getJSON(`${baseURL}/${favNums}?json`);
    console.log(data);
}
p2();

//3 4 facts
async function p3() {
    let facts = await Promise.all(
        // 4 requests from favNum source
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
p3();
