'use client'

import React, { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { IoSearchOutline, IoAlbumsOutline, IoPersonOutline, IoMailOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { cn } from '@/lib/utils'

export function CommandBar() {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const [isMac, setIsMac] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (typeof navigator !== 'undefined') {
            setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
        }

        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <div
                className="fixed bottom-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs text-white/50 hidden md:flex items-center gap-2 pointer-events-none select-none"
            >
                <span className="text-[10px] bg-white/10 px-1 rounded">{mounted && isMac ? '⌘' : 'Ctrl'}</span> K
            </div>

            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
                className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                onClick={(e) => {
                    if (e.target === e.currentTarget) setOpen(false)
                }}
            >
                <div className="bg-[#10132E] border border-white/10 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                    <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
                        <IoSearchOutline className="w-5 h-5 text-white/50 mr-2" />
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="w-full bg-transparent border-none text-white p-4 placeholder:text-white/30 focus:outline-none focus:ring-0 text-sm md:text-base"
                        />
                        <div className="text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">ESC</div>
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <Command.Empty className="py-6 text-center text-sm text-white/50">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Navigation" className="text-[10px] uppercase tracking-wider text-white/30 mb-2 px-2">
                            <Command.Item
                                onSelect={() => runCommand(() => {
                                    router.push('/lab');
                                })}
                                className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                            >
                                <span className="text-xl">🧪</span>
                                <span>Open Creative Lab</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => {
                                    const hero = document.getElementById('about');
                                    hero?.scrollIntoView({ behavior: 'smooth' });
                                })}
                                className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                            >
                                <IoPersonOutline className="w-4 h-4" />
                                <span>About Me</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => {
                                    const projects = document.getElementById('projects');
                                    projects?.scrollIntoView({ behavior: 'smooth' });
                                })}
                                className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                            >
                                <IoAlbumsOutline className="w-4 h-4" />
                                <span>Projects</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => {
                                    const contact = document.getElementById('contact');
                                    contact?.scrollIntoView({ behavior: 'smooth' });
                                })}
                                className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                            >
                                <IoMailOutline className="w-4 h-4" />
                                <span>Contact</span>
                            </Command.Item>
                        </Command.Group>

                        <div className="h-px bg-white/10 my-2 mx-2" />

                        <Command.Group heading="Social" className="text-[10px] uppercase tracking-wider text-white/30 mb-2 px-2">
                            <Command.Item
                                onSelect={() => runCommand(() => window.open('https://github.com/atikxcode', '_blank'))}
                                className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                            >
                                <IoLogoGithub className="w-4 h-4" />
                                <span>GitHub</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/atiqul-islam-0108/', '_blank'))}
                                className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                            >
                                <IoLogoLinkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </Command.Item>
                        </Command.Group>

                        <div className="h-px bg-white/10 my-2 mx-2" />

                        <Command.Group heading="Actions" className="text-[10px] uppercase tracking-wider text-white/30 mb-2 px-2">
                            <Command.Item
                                onSelect={() => runCommand(() => {
                                    navigator.clipboard.writeText('atiqul.islam0108@gmail.com');
                                    // Ideally show a toast here
                                })}
                                className="flex items-center gap-2 px-2 py-3 rounded-lg text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors"
                            >
                                <IoMailOutline className="w-4 h-4" />
                                <span>Copy Email Address</span>
                            </Command.Item>
                        </Command.Group>

                    </Command.List>
                </div>
            </Command.Dialog>
        </>
    )
}
