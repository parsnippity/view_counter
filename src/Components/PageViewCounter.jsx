import {useEffect} from "react";

const PageViewCounter = () => {
    //on every render, add 1 to the number stored in localStorage under "count"
    useEffect(() => {
        let howMany = localStorage.getItem("count");
        localStorage.setItem("count", howMany ? Number(howMany) + 1 : 1);
    }, [])
    return (
        <div className="bigCount">
            {/*if the localStorage item "count" doesn't exist, render 0 as the number of page views, else render the value contained in the localStorage item "count"*/}
            <p className="count">Page Views: {localStorage.getItem("count") ? localStorage.getItem("count") : 0}</p>
        </div>
    )
}

export default PageViewCounter;