import { Comment } from './Comment';
import { useContext } from 'react';
import { CommentContext } from '../../contexts/CommentContext';

export function Comments({ data }) {

    const { comments } = useContext(CommentContext);

    return (
        <div className="details-info-wrapper">
            <h1>{data.name}</h1>
            <div className="comments-div">
                {comments.length ?
                    <ul className="comment-holder">
                        {comments.map((curr) => <Comment key={curr._id} comment={curr.comment} />)}
                    </ul>
                    :
                    <p className="no-comments">No Comments yet</p>
                }
            </div>
        </div>
    )
}