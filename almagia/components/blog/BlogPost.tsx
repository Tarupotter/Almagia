import { lora } from "@/app/fonts";

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
      <article className="mx-auto py-8 px-14 bg-white/50 rounded-3xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center border-b border-gray-200 pb-6">{title}</h1>
  
  
  <div className={`${lora.className} text-gray-700 text-lg md:text-xl leading-relaxed text-center whitespace-pre-wrap break-words`}>
  {content}
  {imageUrl && (
         <div className="flex justify-center mb-20 mt-14">
         <img
           src={imageUrl}
           alt={title}
           className="w-full max-w-md h-auto rounded-2xl object-cover"
         />
       </div>
        )}
</div>
      </article>
    );
  }
  