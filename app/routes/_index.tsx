import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export default function Landing() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-48">
      <h1 className="text-6xl font-heading">This week.</h1>
      <h2 className="text-3xl text-muted-foreground/50 mt-4">
        Start the week the good way, tackle the first task in your To-do.
      </h2>
      <div>
        <Accordion
          type="multiple"
          defaultValue={['habits', 'tasks']}
          className="mt-16"
        >
          <AccordionItem value="habits">
            <AccordionTrigger className="text-2xl font-heading">
              Habits
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="tasks" className="mt-8">
            <AccordionTrigger className="text-2xl font-heading">
              Tasks
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
