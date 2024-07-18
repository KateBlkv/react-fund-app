import './PostItem.css'

//rsc
export default function PostItem(props){
    console.log(props);
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    )
}