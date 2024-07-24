import {useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";

function App() {
    const [posts, setPosts] = useState(
        [
            {title: 'Javascript', id: 1, body: 'Javascript - язык программирования'},
            {title: 'Javascript 2', id: 2, body: 'Javascript - язык программирования 2'},
            {title: 'Javascript 3', id: 3, body: 'Javascript - язык программирования 3'},
        ]
    )

    const createPost = (newPost) => {
      setPosts([...posts, newPost]);
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <div>

                <select>
                    <option value="title">Sort by title</option>
                    <option value="body">Sort by description</option>
                </select>
            </div>
            {posts.length !== 0
                ?
                <PostList posts={posts} title='Post List' deletePost={deletePost} />
                :
                <h1 style={{textAlign: 'center'}}>No posts!</h1>
            }

        </div>
    )
}

export default App
