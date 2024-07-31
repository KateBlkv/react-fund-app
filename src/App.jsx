import {useMemo, useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/modal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";

function App() {
    const [posts, setPosts] = useState(
        [
            {title: 'Javascript', id: 1, body: 'Javascript - язык программирования'},
            {title: 'Javascript 2', id: 2, body: 'Javascript - язык программирования 2'},
            {title: 'Javascript 3', id: 3, body: 'Javascript - язык программирования 3'},
        ]
    )

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const options = [
        {
            value: 'title',
            name: 'Sort by title'
        },
        {
            value: 'body',
            name: 'Sort by description'
        }]

    const sortedPosts = useMemo(()=>{
        if (filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    },[filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Create new post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} options={options}/>
            <PostList posts={sortedAndSearchedPosts} title='Post List' deletePost={deletePost} />

        </div>
    )
}

export default App
