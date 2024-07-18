import {useState} from 'react'
import ClassCounter from "./components/ClassCounter.jsx";
import './styles/App.css'
import PostList from "./components/PostList.jsx";

function App() {
    const [posts, setPosts] = useState(
        [
            {title: 'Javascript', id: 1, body: 'Javascript - язык программирования'},
            {title: 'Javascript 2', id: 2, body: 'Javascript - язык программирования 2'},
            {title: 'Javascript 3', id: 3, body: 'Javascript - язык программирования 3'},
        ]
    )

    return (
        <div className="App">
            <ClassCounter/>
            <PostList posts={posts} title='Post List'/>
        </div>
    )
}

export default App
