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
    <section className="relative py-28 px-6 sm:px-12 lg:px-20 bg-[#081527] text-white overflow-hidden">

      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-[#00E5FF33] rounded-full blur-[140px]" /> */}
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-[#00E5FF22] rounded-full blur-[160px]" />
        <div className="absolute top-[20%] right-[15%] w-[250px] h-[250px] bg-[#00E5FF11] rounded-full blur-[80px]" />
        <div className="absolute left-0 top-0 opacity-[0.05]">
          <svg width="380" height="380">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
            <rect width="380" height="380" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-20 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
          Latest <span className='text-primary-500'> Insights </span>
        </h1>
        <p className="text-gray-300 text-lg">
          Explore expert insights, creative ideas, and forward-thinking innovations shaping the digital world.
        </p>
      </motion.div>

      {/* Uniform Card Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p className="text-center text-gray-400 col-span-full">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">No blog posts available right now.</p>
        ) : (
          posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group bg-[#0A2A4F]/70 backdrop-blur-lg border border-[#00E5FF33] rounded-3xl shadow-[0_0_20px_#00E5FF22] hover:shadow-[0_0_30px_#00E5FF44] transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Blog Image */}
              {post.thumbnail && (
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={urlFor(post.thumbnail).width(900).height(500).url()!}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#00E5FF] mb-2 group-hover:text-white transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt || 'Stay tuned for the latest insights and updates.'}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-200 to-pink-100 flex items-center justify-center text-sm font-semibold text-indigo-700">
                      {post.author?.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">{post.author}</p>
                      <p className="text-xs text-gray-400">
                        {post.date && new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center gap-1 text-[#00E5FF] font-medium hover:gap-2 transition-all duration-300"
                  >
                    Read
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
              </div>

              {/* Floating Neon Dot */}
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#00E5FF] animate-pulse" />
            </motion.div>
          ))
        )}
      </div>
    </section>
  )
}
