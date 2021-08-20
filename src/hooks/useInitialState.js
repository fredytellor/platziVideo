import { useState, useEffect } from "react";


const useInitialState = (API) => {
    const [videos, setVideos] = useState([{ 'mylist': [], 'trends': [], 'originals': [] }]);
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    console.log("videos in useInitialState");
    console.log(videos);
    return videos;
}

export default useInitialState;