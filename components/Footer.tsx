import Link from 'next/link'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10 mb-[50px]' id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img src="/footer-grid.svg" alt="grid"
                className='w-full h-full opacity-50'/>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Listo para llevar <span className="text-purple">tu</span> presencia digital al siguiente nivel
                </h1>

                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Póngase en contacto conmigo hoy mismo y hablemos de cómo puedo ayudarle a alcanzar sus objetivos.
                </p>

                <Link href="mailto:calderonwilliam25@gmail.com">
                    <MagicButton
                        title="Pongámonos en contacto"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </Link>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 | William Calderon
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10 h-10 cursor-pointer
                        flex items-center justify-center backdrop-filter backdrop-blur-lg
                        saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-black-300">
                            <img src={profile.img} alt={profile.name} width={20}
                            height={20}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
