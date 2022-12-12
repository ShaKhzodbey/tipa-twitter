import PostListItem from '../PostListItem'
import './PostList.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item
    return(
      <li key={id} className='list-group-item'>
      <PostListItem 
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleLiked={() => onToggleLiked(id)}
        // label={item.label}
        // important={item.important}
      />
      </li>
    )
  })

  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList