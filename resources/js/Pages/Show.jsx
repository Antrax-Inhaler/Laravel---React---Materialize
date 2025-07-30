import { Link, useForm } from "@inertiajs/react"
import {useRoute } from "../../../vendor/tightenco/ziggy"

export default function Show({post}){
    const {delete: destroy} = useForm();
    function submit(e){
        e.preventDefault()
        destroy(`/posts/${post.id}`)
    }
    return (
        <>
        <p>{new Date(post.created_at).toLocaleTimeString()}</p>
        <h1 className="title">{post.body}</h1>
        <form onSubmit={submit}>
            <button className="">Delete</button>
        </form>
        <Link href={`/posts/${post.id}/edit`} >Edit</Link>
        </>
    )

}