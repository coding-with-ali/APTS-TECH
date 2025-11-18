

// 'use client'

// import { useEffect, useState } from 'react'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import { Post } from '@/types/post'
// import Link from 'next/link'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// export default function BlogPage() {
//   const [posts, setPosts] = useState<Post[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const data: Post[] = await client.fetch(`
//           *[_type == "post"] | order(date desc){
//   _id,
//   title,
//   slug,
//   date,
//   excerpt,
//   thumbnail,
//   "author": author->name
// }
//         `)
//         setPosts(data)
//       } catch (error) {
//         console.error('Error fetching posts:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchPosts()
//   }, [])

//   return (
//     <section className="relative py-28 bg-white overflow-hidden">
//       {/* ✨ Ambient Glow Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-indigo-300/20 blur-[120px] rounded-full" />
//         <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-300/20 blur-[150px] rounded-full" />
//       </div>

//       <div className="relative container mx-auto px-6">
//         {/* 🏷️ Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-indigo-800 mb-5">
//             Latest Insights
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Explore expert insights, creative ideas, and forward-thinking innovations shaping the digital world.
//           </p>
//         </motion.div>

//         {/* 📰 Blog Cards Grid */}
//         <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
//           {loading ? (
//             <p className="text-center text-gray-500 col-span-full">Loading posts...</p>
//           ) : posts.length === 0 ? (
//             <p className="text-center text-gray-500 col-span-full">
//               No blog posts available right now.
//             </p>
//           ) : (
//             posts.map((post, index) => (
//               <motion.div
//                 key={post._id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -6 }}
//                 className="group relative bg-white/90 backdrop-blur-md border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >
//                 {/* ✨ Blog Image */}
//                 {post.thumbnail && (
//                   <div className="relative w-full h-56 overflow-hidden">
//                     <Image
//                       src={urlFor(post.thumbnail).width(900).height(500).url()}
//                       alt={post.title}
//                       fill
//                       className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
//                   </div>
//                 )}

//                 {/* 🧠 Blog Content */}
//                 <div className="p-7 text-left">
//                   {/* Author & Date */}
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-200 to-pink-100 flex items-center justify-center text-sm font-semibold text-indigo-700">
//                       {post.author?.charAt(0)}
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold text-gray-800">{post.author}</p>
//                       <p className="text-xs text-gray-500">
//                         {new Date(post.date).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'short',
//                           day: 'numeric',
//                         })}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
//                     {post.title}
//                   </h3>

//                   {/* Excerpt */}
//                   <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
//                     {post.excerpt || 'Blog cards are very important components of a modern web design system.'}
//                   </p>

//                   {/* Read More CTA */}
//                   <Link
//                     href={`/blog/${post.slug.current}`}
//                     className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all duration-300"
//                   >
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2}
//                       stroke="currentColor"
//                       className="w-4 h-4"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
//                     </svg>
//                   </Link>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }







'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Post } from '@/types/post'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data: Post[] = await client.fetch(`
          *[_type == "post"] | order(date desc){
            _id,
            title,
            slug,
            date,
            excerpt,
            thumbnail,
            "author": author->name
          }
        `)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* ✨ Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-indigo-300/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-300/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary-700 mb-5">
            Latest Insights
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore expert insights, creative ideas, and forward-thinking innovations shaping the digital world.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {loading ? (
            <p className="text-center text-gray-400 col-span-full">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">No blog posts available right now.</p>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Blog Image */}
                {post.thumbnail && (
                  <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-3xl">
                    <Image
                      src={urlFor(post.thumbnail).width(900).height(500).url()!}
                      alt={post.title}
                      fill
                      className="object-fit transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent opacity-30 group-hover:opacity-20 transition-opacity" />
                  </div>
                )}

                {/* Blog Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  {/* Author & Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-200 to-pink-100 flex items-center justify-center text-sm font-semibold text-indigo-700">
                      {post.author?.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">
                        {post.date && new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-700 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt || 'Stay tuned for the latest insights and updates.'}
                  </p>

                  {/* Read More CTA */}
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="mt-auto inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
