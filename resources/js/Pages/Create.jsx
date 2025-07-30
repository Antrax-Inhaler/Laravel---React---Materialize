import { useForm } from "@inertiajs/react"

export default function Create(){
    const {data, setData, post, errors, processing} = useForm({
        body: "",
    })
    function submit(e){
        e.preventDefault()
        post("/posts")
    }
    console.log(useForm());
    return (
        <>
        <h1 className="title">Create a new post</h1>
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