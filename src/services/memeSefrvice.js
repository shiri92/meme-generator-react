

async function getImages() {
    let res = await fetch('https://api.imgflip.com/get_memes');
    let data = await res.json();
    return data;
}


export default {
    getImages
}