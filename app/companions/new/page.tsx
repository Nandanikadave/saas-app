import CompanionForm from "@/components/custom/CompanionForm"

const NewCompanion = () => {
  return (
    <main className="items-center justify-center min-md:w-2/3 md:w-2/3 ">
      <article className="w-full gap-4 flex flex-col">
        <h1 className="mb-5">Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanion