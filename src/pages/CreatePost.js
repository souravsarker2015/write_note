import {addDoc, collection} from "firebase/firestore"
import {auth, db} from "../firebase/config";
import {useNavigate} from "react-router-dom"
import {UseTitle} from "../hooks/UseTitle";


export const CreatePost = () => {
    const navigate = useNavigate()
    const postRef = collection(db, "posts");

    async function handleCreatePost(event) {
        event.preventDefault();
        const document = {
            title: event.target.title.value,
            description: event.target.description.value,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        }
        await addDoc(postRef, document)
        navigate("/")
    }

    UseTitle("Create Post")
    return (
        <section className={'create'}>
            <div className={'heading'}>
                <h1>Add New Post</h1>
            </div>
            <form action="" className={'createPost'} onSubmit={handleCreatePost}>
                <input className={'title'} type="text" name={'title'} placeholder={'Name'} maxLength="50" required/>
                <textarea className={'description'} name="description" placeholder={'Description'} cols="30" rows="10" maxLength={"600"} required></textarea>
                <button className={"submit"}>Create</button>
            </form>
        </section>
    );
};