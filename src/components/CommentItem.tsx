import { IComment } from "../models/IPost"

interface CommentItemProps {
    comment: IComment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    return (
        <div>
            {comment.id}. {comment.email}
        </div>
    )
}

export default CommentItem