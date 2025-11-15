'use client'

import { IconBrandLinkedin } from '@tabler/icons-react'
import Avatar from 'react-avatar'

interface TeamMemberCardProps {
    name: string
    role: string
    bio: string
    linkedin: string
}

export default function TeamMemberCard(props: TeamMemberCardProps) {
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
                <a href="#" className="mx-auto">
                    <Avatar
                        size="200"
                        className="rounded-full"
                        name={props.name}
                        src={`/team/${props.name}.jpeg`}
                    />
                </a>

                <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {props.name}
                    </h1>

                    <div className="text-gray-700 font-light mb-2">
                        {props.role}
                    </div>
                    <div className="text-gray-700 text-sm font-light mb-2">
                        {props.bio}
                    </div>

                    <div className="flex items-center justify-center">
                        <a
                            href={props.linkedin}
                            className="flex rounded-full h-10 w-10 text-sky-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
