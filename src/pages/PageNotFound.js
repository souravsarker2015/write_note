import pageNotFound from "../assets/images/page-not-found.jpg"
import {Link} from "react-router-dom";
import {UseTitle} from "../hooks/UseTitle";

export const PageNotFound = () => {
    UseTitle("Page Not Found")
    return (
        <section className={'pageNotFound'}>
            <p>404 / Page Not Found</p>
            <img src={pageNotFound} alt="page not found"/>
            <Link to={'/'}>
                <button>Back to Home</button>
            </Link>
        </section>
    );
};