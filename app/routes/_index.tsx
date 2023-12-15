import { Settings2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

export default function Landing() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="h-16 flex items-center">
        <h1 className="text-3xl font-heading">V.</h1>
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-baseline gap-1">
            <p>Hello,</p>
            <p className="font-heading">Damien</p>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex items-center justify-between mt-36">
        <h1 className="text-6xl font-heading">This week.</h1>
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">
              <Settings2 />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <h2 className="text-3xl text-muted-foreground/50 mt-4">
        Start the week the good way, tackle the first task in your To-do.
      </h2>
      <div>
        <Accordion
          type="multiple"
          defaultValue={['habits', 'tasks', 'statistics']}
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
          <AccordionItem value="statistics" className="mt-8">
            <AccordionTrigger className="text-2xl font-heading">
              Statistics
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
