import Link from "next/link";
import Image from "next/image";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({id, name, topic, subject, duration, color}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image src="/icons/bookmark.svg" alt="Bookmark" width={12} height={15} />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm -mt-2">{topic}</p>

      <div className="flex gap-2 items-center">
        <Image src="/icons/clock.svg" alt="Clock" width={14} height={14} />
        <span className="text-sm">{duration} minutes</span>
      </div>

      <Link
        href={`/companions/${id}`}
        className="w-full items-center"
      >
        <button className="btn-primary w-full justify-center">
          Start Learning
        </button>
      </Link> 
    </article>
  )
}

export default CompanionCard