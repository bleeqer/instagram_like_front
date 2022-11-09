import React from 'react'
import {View, Text} from 'react-native'
import { USERS } from './users'

export const Posts = [
    {
        imageUrl: 'https://picsum.photos/200',
        user: USERS[0].user,
        likes: 123,
        caption: 'This is a caption',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[1].user,
                comment: 'This is a comment'
            },
            {
                user: USERS[2].user,
                comment: 'This is a comment2'
            }
        ]
    },
    {
        imageUrl: 'https://picsum.photos/201',
        user: USERS[1].user,
        likes: 100,
        caption: 'This is a caption2',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: USERS[2].user,
                comment: 'This is a comment'
            },
            {
                user: USERS[3].user,
                comment: 'This is a comment2'
            }
        ]
    },
    {
        imageUrl: 'https://picsum.photos/202',
        user: USERS[2].user,
        likes: 200,
        caption: 'This is a caption3',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: USERS[3].user,
                comment: 'This is a comment'
            },
            {
                user: USERS[4].user,
                comment: 'This is a comment2'
            }
        ]
    },
    {
        imageUrl: 'https://picsum.photos/203',
        user: USERS[3].user,
        likes: 300,
        caption: 'This is a caption4',
        profile_picture: USERS[3].image,
        comments: [
            {
                user: USERS[4].user,
                comment: 'This is a comment'
            },
            {
                user: USERS[5].user,
                comment: 'This is a comment2'
            }
        ]
    },
    {
        imageUrl: 'https://picsum.photos/204',
        user: USERS[4].user,
        likes: 400,
        caption: 'This is a caption5',
        profile_picture: USERS[4].image,
        comments: [
            {
                user: USERS[5].user,
                comment: 'This is a comment'
            },
            {
                user: USERS[6].user,
                comment: 'This is a comment2'
            }
        ]
    },
    {
        imageUrl: 'https://picsum.photos/205',
        user: USERS[5].user,
        likes: 500,
        caption: 'This is a caption6',
        profile_picture: USERS[5].image,
        comments: [
            {
                user: USERS[6].user,
                comment: 'This is a comment'
            },
            {
                user: USERS[7].user,
                comment: 'This is a comment2'
            }
        ]
    }
]

 