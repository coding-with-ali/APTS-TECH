export const PortableTextComponents = {
  types: {
    image: ({value}: any) => (
      <img
        src={value.asset?.url}
        alt=""
        className="rounded-lg my-6 w-full object-cover"
      />
    )
  },
  block: {
    h1: ({children}: any) => (
      <h1 className="text-4xl font-bold my-5 text-primary-500">{children}</h1>
    ),
    h2: ({children}: any) => (
      <h2 className="text-3xl font-semibold my-4 text-primary-500">{children}</h2>
    ),
    h3: ({children}: any) => (
      <h3 className="text-2xl font-semibold my-3">{children}</h3>
    ),
    normal: ({children}: any) => (
      <p className="text-lg leading-8 text-gray-200 my-4">{children}</p>
    ),
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-300 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: any) => (
      <ul className="list-disc ml-6 text-gray-300 space-y-2">{children}</ul>
    ),
    number: ({children}: any) => (
      <ol className="list-decimal ml-6 text-gray-300 space-y-2">{children}</ol>
    ),
  }
};
