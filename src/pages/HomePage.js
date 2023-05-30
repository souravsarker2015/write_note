import {PostCard} from "../components";
import {useEffect, useRef, useState} from "react";
import {getDocs, collection} from "firebase/firestore"
import {db} from "../firebase/config";
import {UseTitle} from "../hooks/UseTitle";
import Skeleton from "react-loading-skeleton";

export const HomePage = () => {
    const [posts, setPosts] = useState(new Array(3).fill(false));
    const [toggle, setToggle] = useState(false)
    const postsRef = useRef(collection(db, 'posts'))

    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postsRef.current)
            // console.log(data.docs)
            setPosts(data.docs.map(
                    (document) => (
                        {...document.data(), id: document.id}
                    )
                )
            );

        }

        getPosts();
    }, [postsRef, toggle]);

    UseTitle("Home Page")
    return (
        <section>
            {posts.map((post, index) => (
                post ? (
                    <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>
                ) : (
                    <Skeleton key={index}/>
                )


            ))}

        </section>
    );
};