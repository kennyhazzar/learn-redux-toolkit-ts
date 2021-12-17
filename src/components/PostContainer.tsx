import { postApi } from "../service/PostService"
import CommentItem from "./CommentItem"
import PostItem from "./PostItem"

const PostContainer: React.FC = () => {
    const { data: comments, error, isLoading } = postApi.useFetchPostsCommentsQuery(1)
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Подождите...</h1>}
                {error && <h1>Произошла ошибка загрузки постов!</h1>}
                {comments && comments.map(comment =>
                    <CommentItem key={comment.id} comment={comment} />
                )}
            </div>
        </div>
    )
}

export default PostContainer