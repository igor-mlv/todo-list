"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import NoteInput from './NoteInput'
import { Trash2 } from 'lucide-react';

function NotesList() {
    return (
        <div className="w-[520px] min-h-[520px] flex flex-col mt-[50px]">
            <div className="w-full h-[26px] flex flex-row justify-between items-center 
             border-b-[1px] border-primary pb-[32px] mb-[32px]">
                <Checkbox id="1" className='w-[26px] h-[26px]' />
                <NoteInput />
                <Trash2 className='text-muted-foreground hover:text-destructive' />
            </div>
            <div className="w-full h-[26px] flex flex-row justify-between items-center 
             border-b-[1px] border-primary pb-[32px]">
                <Checkbox id="1" className='w-[26px] h-[26px]' />
                <NoteInput />
                <Trash2 className='text-muted-foreground hover:text-destructive' />
            </div>
        </div>
    )
}

export default NotesList