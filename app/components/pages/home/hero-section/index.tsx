import { TechBadge } from '@/app/components/tech-badge';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp} from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: "https://github.com/ekiyoshiks",
        icon: <TbBrandGithub />
    },
    {
        url: "https://www.linkedin.com/in/enzo-sampaio-460541239/",
        icon: <TbBrandLinkedin />
    },

    {
        url: "https://wa.me/5511990170114",
        icon: <TbBrandWhatsapp />
    },

];

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end sm:pb-32 py-32 lg:pb-110px">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px] flex flex-col gap-6">
                    <p className="text-4xl font-medium mt-2 font-nono text-stone400">Enzo Kiyoshi</p>
                    <h3>CS STUDENT  ~  PROFESSIONAL ATHLETE</h3>
                
                    <p className="text-stone400 my-6 text-sm sm:text-base">
                        I'm a Computer Science student at Universidade Presbiteriana Mackenzie, with a technical degree in Artificial Intelligence from FECAP. My curiosity for technology started early — whenever I wasn't on a court, I was in front of a computer, exploring, learning, and building.
                    </p>

                    <div className="flex items-center gap-x-2 gap-y-3 flex-wrap lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name="Python" />
                        ))}
                    </div>

                    <div className="flex sm:items-center gap-6 mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
                        <button className="w-max shadow-button shadow-stone-600 px-4 py-3 rounded-lg flex items-center gap-2 justify-center bg-stone-500 text-white hover:bg-stone-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                            Entra em contato
                            <HiArrowNarrowRight size={18} />
                        </button>

                        <div className="text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    key={`contact-${index}`}
                                    href={contact.url}
                                    target="_blank"
                                    className="text-stone-400 hover:text-stone-300 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    width={420}
                    height={404}
                    src="/images/profile-pic.jpeg"
                    alt="Kiyoshi's Profile Picture"
                    className="w-[300px] h-[300px] lg:w-[440px] lg:h-[440px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover "
                />

            </div>
        </section>
    )
}