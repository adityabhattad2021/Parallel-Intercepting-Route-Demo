"use client";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Modal({
    children
}:{
    children:React.ReactNode
}) {
    const router = useRouter();

    function handleOpenChange(){
        router.back();
    }

    return (
        <Dialog
            defaultOpen={true}
            open={true}
            onOpenChange={handleOpenChange}
        >
            <DialogOverlay>
                <DialogContent>
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )


}