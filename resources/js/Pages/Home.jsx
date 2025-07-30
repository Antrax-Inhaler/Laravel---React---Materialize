import { Head, Link, usePage } from "@inertiajs/react"
import {useRoute } from "../../../vendor/tightenco/ziggy"
import { useState } from "react";

export default function Home({posts}){
   const route = useRoute();
   const {flash} = usePage().props;
  const [flashMsg, setFlashMsg] = useState(flash.message)
    setTimeout(() => {
        setFlashMsg(null)
    }, 2000);
    return (
        <>
        <Head>
          <title>Home</title>
        </Head>
            <h1 className="text-3xl font-bold underline">Hello User</h1>

            <div>
              {flashMsg && <div className="alert">{flashMsg}</div> }
                {posts.data.map(post =>(
                    <div key={post.id} className="border-b">
                        
                        <div className="text-sm text-slate-600">
                        <span>Posted on: </span>
                        <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>    
                        <p className="font-medium">{post.body}</p> 
                        {/* <Link href={`/posts/${post.id}`}>Read more</Link>     */}
                         <Link href={route('posts.show', post)}>Read more</Link>                  
                    </div>
                ))}
            </div>
<div className="py-12 px-4">
  {posts.links.map((link, index) => (
    link.url ? (
      <Link
        key={index}
        href={link.url}
        dangerouslySetInnerHTML={{ __html: link.label }}
        className={`p-1 mx-1 ${link.active ? "text-blue-500 hover:underline font-bold" : "text-gray-700 hover:underline"}`}
      />
    ) : (
      <span
        key={index}
        dangerouslySetInnerHTML={{ __html: link.label }}
        className="p-1 mx-1 text-gray-500"
      />
    )
  ))}
</div>

        </>
    )
}