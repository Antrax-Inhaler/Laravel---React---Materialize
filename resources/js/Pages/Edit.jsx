import { Head, useForm } from "@inertiajs/react"

export default function Create({post}){
    const {data, setData, put, errors, processing} = useForm({
        body: post.body,
    })
    function submit(e){
        e.preventDefault()
        put(`/posts/${post.id}`)
    }
    console.log(useForm());
    return (
        <>
        <Head title="Edit"/>
        <h1 className="title">Edit a new post</h1>
        {data.body}
        <div className="w-1/2 mx-auto">
            <form onSubmit={submit}>
                <textarea className={errors.body && 'ring-red-500'} rows="10" value={data.body}
                onChange={(e) => setData('body', e.target.value)}></textarea>
                {errors.body && <p className="text-red-600">{errors.body}</p> }
                <button className="primary-btn mt-4" disabled={processing}>Create Post</button>
            </form>
        </div>
        </>
    )
}