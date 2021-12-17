import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IComment, IPost } from '../models/IPost'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            })
        }),
        fetchPostsComments: build.query<IComment[], number>({
            query: (post: number = 1) => ({
                url: `/posts/${post}/comments`
            })
        })

    })
})