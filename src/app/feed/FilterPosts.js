import React from 'react'

export const FilterPosts = (props) => {
    return (
        <div className="input-field col s12 postType">
        <select onChange={props.filter}>
          <option value="all" defaultValue>All posts</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
          <option value="text">Texts</option>
        </select>
        <label>Show on feed</label>
      </div>
    )
}
    