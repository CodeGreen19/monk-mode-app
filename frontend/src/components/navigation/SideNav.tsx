import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export function SideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="p-2">
          <AiOutlineMenuUnfold className="text-[1.4rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rem
        repellendus, expedita facere ullam in vel cumque iste, ratione ex
        quaerat recusandae praesentium vero aliquid dicta! Ullam dolores iste
        magnam.
      </SheetContent>
    </Sheet>
  );
}
