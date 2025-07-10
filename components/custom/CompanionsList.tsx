import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { getSubjectColor } from "@/lib/utils";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }) => {
  return (
    <article className={cn("companions-list", classNames)}>
      <h2 className="font-bold text-3xl mb-4">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="md:text-lg w-2/3 text-base">Lessons</TableHead>
            <TableHead className="md:text-lg text-base">Subject</TableHead>
            <TableHead className="md:text-lg text-base text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, topic, duration }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="md:text-xl text-base font-semibold">{name}</p>
                      <p className="md:text-lg text-sm">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="flex justify-center">
                <div className="subject-badge w-full max-md:hidden justify-center mt-6">{subject}</div>
                <div className="flex justify-center items-center rounded-lg w-fit p-2 md:hidden mt-2" style={{ backgroundColor: getSubjectColor(subject) }}>
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end items-center gap-2 w-full ">
                  <p className="md:text-lg text-base">{duration} {' '}
                    <span className="max-md:hidden">mins</span>
                  </p>
                  <div className=" md:hidden">
                    <Image
                      src="/icons/clock.svg"
                      alt="Clock Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
