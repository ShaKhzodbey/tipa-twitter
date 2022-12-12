import './AppHeader.css'

const AppHeader = ({liked, allPosts}) => {
  return(
    <div className="app-header d-flex">
      <h1>Shakhzod Akhmadov</h1>
      <h2>{allPosts}post, like {liked} </h2>
    </div>
  )
}

export default AppHeader