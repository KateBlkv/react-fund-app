import './PostItem.css'
import MyButton from "../UI/button/MyButton.jsx";

//rsc
export default function PostItem(props){
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.deletePost(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}