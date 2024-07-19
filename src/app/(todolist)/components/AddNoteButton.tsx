import React from 'react'
import { Plus } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function AddNoteButton() {
    return (
        <div className="absolute bottom-0 right-0">
            <Dialog>
                <DialogTrigger>
                    <Plus className='w-[50px] h-[50px] bg-primary rounded-full text-popover' />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-text text-[26px] text-center">NEW NOTE</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNoteButton