'"use client";'
import CompanionComponent from "@/components/custom/CompanionComponent";
import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface CompanionSessionProps {
  params: Promise<{ id: string }>;
}

const CompanionSession = async ({params}: CompanionSessionProps) => {
  
  const {id} = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();
  const {name, subject, topic, duration} = companion;

  if(!user) redirect('/sign-in');

  if(!name) redirect('/companions');

  return (
    <main>
      <article className="flex rounded-border justify-between px-6 py-3 max-md:flex-col">
        <div className="flex items-center gap-4">
           <div className="size-[60px] flex item-center justify-center rounded-lg max-md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
            <Image src={`/icons/${subject}.svg`} alt={subject} width={25} height={25} />
           </div>

           <div className="flex flex-col">
              <div className="flex items-center gap-4">
                 <p className="font-bold text-xl">{name}</p>
                 <div className="subject-badge max-sm:hidden" >
                    {subject}
                 </div>
              </div>
              <p className="text-base">{topic}</p>
           </div>
        </div>
        <div className="items-start text-lg max-md:hidden">
          {duration} minutes
        </div>
      </article>
      <CompanionComponent 
        {...companion}
        companionId={id}
        userName={user.firstName!}
        userImage={user.imageUrl!}
      />
    </main>
  )
}

export default CompanionSession