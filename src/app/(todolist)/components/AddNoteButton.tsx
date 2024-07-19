import React from 'react'
import { Plus } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { addNote } from '@/app/store/slices/notesArraySlice';

function AddNoteButton() {
    const [value, setValue] = React.useState("");
    const handleOnChange = (event: { target: { value: string; }; }) => {
        setValue(event.target.value);
    };

    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const handleOnCancel = () => {
        setIsDialogOpen(false);
    }

    const dispatch = useDispatch();
    const handleOnApply = () => {
        dispatch(addNote(value));
        setIsDialogOpen(false);
    }

    return (
        <div className="absolute bottom-0 right-0">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
                <DialogTrigger>
                    <Plus className='w-[50px] h-[50px] bg-primary rounded-full text-popover' />
                </DialogTrigger>
                <DialogContent className="w-[500px] h-[290px] gap-0 flex flex-col items-start ">
                    <DialogTitle className="w-full text-text text-[26px] text-center">
                        NEW NOTE
                    </DialogTitle>
                    <DialogDescription />
                    <div className='w-full flex justify-center items-center mt-[20px]'>
                        <Input
                            className="text-[20px] w-[420px] h-[38px]"
                            type="text"
                            placeholder="Inpute your note ..."
                            onChange={handleOnChange}
                            value={value} />
                    </div>
                    <div className='w-full mt-[100px] flex flex-row justify-between'>
                        <Button
                            variant="outline"
                            className="w-[110px] h-[38px] text-[18px]"
                            onClick={handleOnCancel}>
                            CANCEL
                        </Button>

                        <Button className="w-[110px] h-[38px] text-[18px]"
                            onClick={handleOnApply}>
                            APPLY
                        </Button>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNoteButton