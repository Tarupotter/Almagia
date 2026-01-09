type BlogPostProps = {
    title: string;
    content: string;
    imageUrl?: string;
  };
  
  export default function BlogPost({
    title,
    content,
    imageUrl,
  }: BlogPostProps) {
    return (
      <article className="mx-auto max-w-4xl px-6 py-12 bg-white/50 rounded-3xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">{title}</h1>
  
        {imageUrl && (
         <div className="flex justify-center mb-6">
         <img
           src={imageUrl}
           alt={title}
           className="w-full max-w-md h-auto rounded-2xl object-cover"
         />
       </div>
        )}
  
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">{content}</p>
      </article>
    );
  }
  