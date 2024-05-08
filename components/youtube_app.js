// console.log("Welcome to Youtube App");

async function searchVideo() {
    // console.log('Search button clicked');

    let query = document.getElementById("query").value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&maxResults=20&key=[YOUR_API_KEY]`)

    let data = await res.json();
    // console.log("data: ", data);

    if (query == "") {
        alert("please enter something in search bar")
    }
    else {
        appendVideos(data.items);
    }

}


let videos = document.getElementById("videos");

function appendVideos(video_data) {

    videos.innerHTML = null;

    // video_data.forEach((ers) => {
    //     console.log("videoId: ", ers.id.videoId);
    // });

    video_data.forEach(({ id: { videoId } }) => {
        console.log("videoId: ", videoId);

        let div = document.createElement("div");

        div.innerHTML = `<iframe width="360" height="215" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

        div.style.marginTop = "20px";

        videos.append(div);

    });

}
