import { Alegreya, Inter } from "next/font/google";

const alegreya = Alegreya({
  subsets: ["latin"],
  style: ["italic"],
});

const inter = Inter({
  subsets: ["latin"],
});

type ReviewCardProps = {
  name?: string;
  message?: string;
};

export default function ReviewCard({ name, message }: ReviewCardProps) {
  return (
    <div
      className="border border-gray-100 rounded-3xl p-5 shadow-sm 
                flex flex-col"
    >
      {message ? (
        <p
          className={`${alegreya.className} text-gray-700 text-[22px] tracking-wide text-center flex-grow flex items-center justify-center`}
        >
          “{message}”
        </p>
      ) : (
        <div className="flex-grow flex items-center justify-center"></div>
      )}

      {name ? (
        <span
          className={`${inter.className} text-sm text-gray-500 self-end mt-4`}
        >
          - {name}
        </span>
      ) : (
        <div></div>
      )}
    </div>
  );
}
