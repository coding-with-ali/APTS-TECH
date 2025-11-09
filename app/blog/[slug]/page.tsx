import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Post } from '@/types/post'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { CalendarDays, Clock } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params


  if (!slug) {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Invalid URL</h2>
        <p className="text-gray-500">No slug was provided.</p>
      </section>
    )
  }

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    date,
    content,
    thumbnail,
    "author": author->name,
    "authorImage": author->image
  }`

  const post: Post | null = await client.fetch(query, { slug })

  if (!post) {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Post Not Found</h2>
        <p className="text-gray-500">
          The article you’re looking for doesn’t exist or may have been removed.
        </p>
      </section>
    )
  }

  return (
    <section className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="px-6 pt-8">
          <span className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Featured
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            {post.title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 px-6 text-sm text-gray-500 mb-6">
          {post.authorImage && (
            <Image
              src={urlFor(post.authorImage).width(64).height(64).url()!}
              alt={post.author ?? 'Author image'}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          )}
          <p className="text-gray-800 font-medium">{post.author}</p>
          <span>•</span>
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {post.date &&
              new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            5 min read
          </div>
        </div>

        {post.thumbnail && (
          <div className="relative w-full h-[250px] sm:h-[400px] md:h-[450px] mb-8 px-6">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src={urlFor(post.thumbnail).width(1600).height(900).url()!}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="px-6 pb-10 prose prose-gray max-w-none text-gray-700 leading-relaxed">
          <PortableText value={post.content as any} />
        </div>
      </div>
    </section>
  )
}
