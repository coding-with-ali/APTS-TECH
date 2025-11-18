// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import { PortableTextComponents } from "../../components/PortableTextComponents";
// import { CalendarDays, Clock } from "lucide-react";
// import { urlFor } from "@/sanity/lib/image";

// interface PageProps {
//   params: { slug: string };
// }

// export default async function ServiceDetail({ params }: PageProps) {
//   const { slug } = params;

//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     date,
//     content,
//     thumbnail,
//     "author": author->name
//   }`;

//   const post = await client.fetch(query, { slug });

//   if (!post) {
//     return (
//       <div className="p-10 text-center text-white">Service not found.</div>
//     );
//   }

//   return (
//     <div className="bg-primary-900 text-white min-h-screen">

//       {/* HERO IMAGE */}
//       <section className="relative h-[100vh] w-full">
      
//           <Image
//             src={urlFor(post.thumbnail).url()!}
//             alt={post.title}
//             fill
//             className="object-fill w-full h-[100vh]" 
//           />
        
//       </section>

//       {/* BLOG CONTENT */}
//       <section className="px-5 md:px-20 py-16 max-w-5xl mx-auto">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

//         {/* Author & Date */}
//         <div className="flex flex-wrap items-center text-gray-400 text-sm mb-8 gap-2">
//           {post.author && <span>By {post.author}</span>}
//           {post.author && post.date && <span>•</span>}
//           {post.date && (
//             <span className="flex items-center gap-1">
//               <CalendarDays className="w-4 h-4" />
//               {new Date(post.date).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>
//           )}
//           <span>•</span>
//           <span className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             5 min read
//           </span>
//         </div>

//         {/* Content */}
//         <div className="prose prose-invert prose-lg text-white leading-relaxed">
//   {post.content && <PortableText value={post.content} components={PortableTextComponents} />}
// </div>

//       </section>
//     </div>
//   );
// }



// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import { PortableTextComponents } from "../../components/PortableTextComponents";
// import { CalendarDays, Clock } from "lucide-react";
// import { urlFor } from "@/sanity/lib/image";

// export default async function BlogDetails({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     date,
//     content,
//     thumbnail,
//     "author": author->name
//   }`;

//   const post = await client.fetch(query, { slug });

//   if (!post) {
//     return (
//       <div className="p-10 text-center text-white">Service not found.</div>
//     );
//   }

//   return (
//     <div className="bg-primary-900 text-white min-h-screen">
//       {/* HERO IMAGE */}
//       <section className="relative h-[100vh] w-full">
//         <Image
//           src={urlFor(post.thumbnail).url()!}
//           alt={post.title}
//           fill
//           className="object-fill w-full h-[100vh]" 
//         />
//       </section>

//       {/* BLOG CONTENT */}
//       <section className="px-5 md:px-20 py-16 max-w-5xl mx-auto">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

//         {/* Author & Date */}
//         <div className="flex flex-wrap items-center text-gray-400 text-sm mb-8 gap-2">
//           {post.author && <span>By {post.author}</span>}
//           {post.author && post.date && <span>•</span>}
//           {post.date && (
//             <span className="flex items-center gap-1">
//               <CalendarDays className="w-4 h-4" />
//               {new Date(post.date).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>
//           )}
//           <span>•</span>
//           <span className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             5 min read
//           </span>
//         </div>

//         {/* Content */}
//         <div className="prose prose-invert prose-lg text-white leading-relaxed">
//           {post.content && <PortableText value={post.content} components={PortableTextComponents} />}
//         </div>
//       </section>
//     </div>
//   );
// }






import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "../../components/PortableTextComponents";
import { CalendarDays, Clock } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;  // Updated: params is now a Promise
}) {
  const { slug } = await params;  // Updated: Await params before destructuring

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    date,
    content,
    thumbnail,
    "author": author->name
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return (
      <div className="p-10 text-center text-white">Service not found.</div>
    );
  }

  return (
    <div className="bg-primary-900 text-white min-h-screen">
      {/* HERO IMAGE */}
      <section className="relative mx-auto h-[100vh] w-[90vw]">
        <Image
          src={urlFor(post.thumbnail).url()!}
          alt={post.title}
          fill
          className="object-fill w-[90vw] h-[100vh] mt-5 rounded-lg" 
        />
      </section>

      {/* BLOG CONTENT */}
      <section className="px-5 md:px-20 py-16 max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        {/* Author & Date */}
        <div className="flex flex-wrap items-center text-gray-400 text-sm mb-8 gap-2">
          {post.author && <span>By {post.author}</span>}
          {post.author && post.date && <span>•</span>}
          {post.date && (
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            5 min read
          </span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg text-white leading-relaxed">
          {post.content && <PortableText value={post.content} components={PortableTextComponents} />}
        </div>
      </section>
    </div>
  );
}
