import { Link } from 'react-router-dom';
import Star from '../assets/icon/star.svg';
import StarPNG from '../assets/icon/star.png';
import MoonPNG from '../assets/icon/moon.png';
import WordList from '../assets/icon/wordlist.svg';
import HalfEarth from '../assets/images/half_earth.jpg';
const VocabOverView = () => {
    return (
        <div className="sm:mt-12 w-full max-w-7xl mx-auto flex gap-10 flex-col">
            <div className=" relative">
                <div className="max-w-[1200px] mx-4 md:mx-8 xl:mx-auto undefined">
                <div className="leading-6 flex justify-center gap-8 items-center mt-8 flex-col-reverse lg:flex-row mb-3 lg:mb-6">
                    <img
                    src={Star}
                    className="absolute top-12 left-[27%] hidden lg:block"
                    alt="Star"
                    />
                    <div className=" flex flex-col items-center ">
                    <h1 className="text-lg sm:text-2xl lg:text-[40px] text-title text-center lg:text-start font-semibold mb-4">
                        English Vocabulary
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg font-text-regular text-sub-title mb-0 text-gray-600">
                        Let's start your journey to learn categorized English vocabulary on
                        Langeek
                    </p>
                    </div>
                    <img
                    src={Star}
                    className="absolute top-0 right-[30%] hidden lg:block"
                    alt="Start"
                    />
                </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-gray-100 ltr:[&_.arrow]:hover:translate-x-[10px] rtl:[&_.arrow]:hover:translate-x-[-10px] rounded-3xl cursor-pointer bg-blue-light-4 p-4 lg:p-6 flex flex-col gap-6 justify-between">
                <div className="flex">
                    <div>
                    <div className="flex gap-2">
                        <img
                        src={WordList}
                        alt="word list"
                        className="dark:contrast-200 dark:invert"
                        />
                        <p className="mb-0 font-text-semibold font-semibold sm:text-lg lg:text-2xl">
                        My Wordlists
                        </p>
                    </div>
                    </div>
                    <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#0A0A0A"
                    className="ml-auto hover:translate-x-[8px] cursor-pointer arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                    >
                    <path
                        d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.5 12.3334H20.33"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </div>
                <div className="flex items-center">
                    <img
                    alt=""
                    className="  rounded-full w-14 h-14 lg:w-16 lg:h-16 dark:saturate-[1.2] dark:brightness-75"
                    src="https://api.langeek.co/v1/s//img/category/1.png"
                    />
                </div>
                </div>
                <a
                className=" bg-[linear-gradient(133deg,#D8F1FF_53.25%,#EEF0FF_69.36%)] rounded-3xl relative overflow-hidden cursor-pointer hover:no-underline dark:bg-[linear-gradient(163deg,#001F4D_33.25%,#4A2AA7_79.36%)]"
                href="/en/vocab/step-by-step/53/vocabulary-for-starters-1"
                >
                <div className="absolute !right-[-40px] lg:!right-0 !bottom-0 !w-[144px] lg:!w-[184px] !h-[90px] lg:!h-[120px] ">
                    <img
                    alt="earth"
                    className="rtl:scale-x-[-1] dark:saturate-[1.2] dark:brightness-75"
                    width={184}
                    height={120}
                    src={HalfEarth}
                    />
                </div>
                <div className="absolute top-[9px] right-[25px]">
                    <img
                    alt="moon"
                    className="undefined dark:saturate-[1.2] dark:brightness-75"
                    width={33}
                    height={37}
                    src={MoonPNG}
                    />
                </div>
                <div className="absolute top-[10px] right-[25%] ">
                    <img
                        alt="star"
                        className="undefined dark:tw-saturate-[1.2] dark:tw-brightness-75"
                        width={20}
                        height={20}
                        src={StarPNG}
                    />
                </div>
                <div className="absolute bottom-[75px] right-[40%]">
                    <img
                    alt="star"
                    className="undefined dark:saturate-[1.2] dark:brightness-75"
                    width={20}
                    height={20}
                    src={StarPNG}
                    />
                </div>
                <div className="flex flex-col gap-10 px-4 lg:px-6 py-[17px] lg:py-[22px] w-3/4 lg:w-3/5">
                    <h4 className="text-base sm:text-lg lg:text-2xl text-blue-700 font-semibold mb-0">
                    {" "}
                    Start learning English step by step{" "}
                    </h4>
                    <button className="px-8 lg:px-12 py-3 rounded-3xl border-[1.5px] border-solid border-blue-700 bg-transparent w-fit text-blue-700 font-semibold hover:bg-blue-700 hover:text-white cursor-pointer">
                    Start learning
                    </button>
                </div>
                </a>
            </div>
            <div className="block lg:hidden MobileBookList_wrapper__20aZp">
                <div className="flex justify-between mb-6 lg:mb-0">
                <div>
                    <h6 className="font-text-bold text-sub-title text-sm sm:text-lg flex flex-col sm:flex-row gap-3 sm:items-center m-0">
                    Level-Based English Vocabulary
                    </h6>
                </div>
                <a
                    className="font-text-medium text-[.875em]"
                    href="/en/vocab/level-based"
                >
                    <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#0A0A0A"
                    className="undefined arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                    >
                    <path
                        d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.5 12.3334H20.33"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </a>
                </div>
                <div className="flex basis-full justify-center items-center px-0 flex-row flex-wrap">
                <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events sm:pb-8 MobileBookList_cardImageSwiper__f26F_ w-full [&_.swiper-button-next]:after:text-2xl [&_.swiper-button-next]:after:text-title [&_.swiper-button-next]:after:content-["next"] [&_.swiper-button-prev]:after:text-2xl rtl:[&_.swiper-button-prev]:!left-[95%] rtl:[&_.swiper-button-next]:!right-[95%] [&_.swiper-button-prev]:after:text-title [&_.swiper-button-prev]:after:content-["prev"]'>
                    <div
                    className="swiper-wrapper !h-[14rem] sm:!h-auto"
                    style={{ transitionDuration: "0ms" }}
                    >
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center pl-[.7rem] sm:pl-0 flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/1/a1-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="A1 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49471/thumb/a1-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            A1 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center pl-[.7rem] sm:pl-0 flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/6/a2-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="A2 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49472/thumb/a2-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            A2 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center pl-[.7rem] sm:pl-0 flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/7/b1-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="B1 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49473/thumb/b1-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            B1 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center pl-[.7rem] sm:pl-0 flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/8/b2-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="B2 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49475/thumb/b2-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            B2 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center pl-[.7rem] sm:pl-0 flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/35/c1-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="C1 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49476/thumb/c1-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            C1 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center pl-[.7rem] sm:pl-0 flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/251/c2-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="C2 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49474/thumb/c2-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            C2 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </div>
                </div>
            </div>
            <div className="mx-0 overflow-hidden hidden lg:flex md:flex-nowrap flex-wrap justify-start w-full flex">
                <div className="flex bg-gray-100 justify-center overflow-hidden px-0 basis-full md:basis-4/12 rounded-3xl">
                <Link
                    className="z-[2] bg-blue-light-4 rounded-3xl w-full overflow-hidden p-6 gap-4 cursor-pointer relative flex flex-col min-w-0 break-word hover:no-underline bg-clip-border border border-black border-opacity-10 rtl:[&_.arrow]:hover:translate-x-[-10px]"
                    to="/vocabulary/level"
                >
                    <div>
                    <h3 className="hover:text-purple mb-6 sm:mb-0 text-title font-text-semibold text-2xl transition-all ease-in-out duration-300 flex flex-col sm:flex-row sm:items-center">
                        {" "}
                        Level-Based English Vocabulary
                    </h3>
                    </div>
                    <div className="text-sub-title font-text-reqular py-2 hidden sm:block text-base">
                    Here you will find different wordlists categorized by level according
                    to CEFR.
                    </div>
                    <div className="flex justify-between ltr:items-end">
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A0A0A"
                        className="self-end mt-auto hover:translate-x-[10px] arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                    >
                        <path
                        d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M3.5 12.3334H20.33"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    </div>
                </Link>
                </div>
                <div className="basis-full w-full md:basis-8/12 md:w-7/12  pt-[8vmin] md:pt-0 md:pb-0 pb-[3vmin] sm:!mx-[3vmin] border mt-[-.1rem] rounded-t-none sm:rounded-t-[20px] rounded-b-[20px] z-[3] !mx-0 md:!mr-0 sm:!pl-0 md:!pl-[2vmin] ml-[3vmin] sm:!rounded-r-[20px] md:!rounded-l-none md:!ml-[-2vmin] !pr-0 sm:z-[1] flex justify-center sm:my-0 flex-row flex-wrap h-fit">
                <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events sm:!py-0 !px-8 w-full [&_.swiper-button-next]:after:text-2xl [&_.swiper-button-next]:after:text-title [&_.swiper-button-next]:after:content-["next"] [&_.swiper-button-prev]:after:text-2xl rtl:[&_.swiper-button-prev]:!left-[98%] rtl:[&_.swiper-button-next]:!right-[98%] [&_.swiper-button-prev]:after:text-title [&_.swiper-button-prev]:after:content-["prev"] DesktopBookList_cardImageSwiper__0Y_t3 swiper-backface-hidden'>
                    <div
                    className="swiper-wrapper pl-0 sm:!h-auto !h-[14rem] flex"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start swiper-slide-active">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/1/a1-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="A1 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49471/thumb/a1-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            A1 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start swiper-slide-next">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/6/a2-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="A2 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49472/thumb/a2-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            A2 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/7/b1-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="B1 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49473/thumb/b1-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            B1 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/8/b2-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="B2 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49475/thumb/b2-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            B2 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/35/c1-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="C1 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49476/thumb/c1-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            C1 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide !scale-[1.125] !opacity-100 text-center flex justify-center items-start !w-[5.4rem] sm:!w-auto self-start">
                        <div className="relative inline-block rounded-[5px] !bg-transparent sm:bg-background sm:ml-4 ml-0 sm:mr-6 mr-0 my-4">
                        <a
                            className="after:absolute after:z-[1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:pointer-events-auto after:content-[''] group peer shadow-1"
                            href="/en/vocab/category/251/c2-level"
                        >
                            <div className="shadow-2 !w-[90px] !min-h-[105px] sm:!w-[120px] sm:!min-h-[134px] rounded-[5px] border-0 mx-auto scale-90 group-hover:scale-100 transition-all ease-in-out duration-300 relative flex flex-col min-w-0 break-word  bg-clip-border border border-title bg-background border-opacity-10">
                            <img
                                alt="C2 Level Wordlist"
                                className="rounded-[5px] z-[2] block w-full h-full object-cover dark:saturate-[1.2] dark:brightness-75"
                                src="https://cdn.langeek.co/photo/49474/thumb/c2-level/350?type=jpeg"
                                width={135}
                                height={200}
                            />
                            </div>
                        </a>
                        <div>
                            <span className="CategoryCardImage_title__t4R_g peer-hover:text-purple transition-all ease-in-out duration-300 text-[66%] sm:text-[.8rem] max-w-[120px] break-words font-text-regular text-ellipsis overflow-hidden px-1 inline-block text-sub-title mt-2 sm:mt-4">
                            C2 Level Wordlist
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* <div className="swiper-button-prev swiper-button-disabled !opacity-0" />
                    <div className="swiper-button-next" /> */}
                </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:bg-blue-light-3 rounded-3xl gap-2 sm:gap-4 lg:gap-8 sm:pl-4 sm:py-4 lg:py-8 lg:pl-8 ">
                <div className="hidden sm:flex w-1/2 md:w-2/5 mb-6 hover:no-underline flex-col">
                <h4 className="text-base sm:text-lg lg:text-2xl font-text-bold sm:font-text-semibold text-title mb-4 flex flex-col sm:flex-row gap-3 sm:items-center">
                    Top User-Created Wordlists
                </h4>
                <p className="text-sub-title text-base font-text-regular">
                    Public wordlists can improve your vocabulary knowledge in many ways{" "}
                </p>
                <a
                    className="py-3 px-6 border-[1.5px] hover:bg-blue-1 hover:text-white transition-all duration-300 group border-solid bg-transparent rounded-3xl border-blue-1 text-blue-1 text-base font-text-medium mt-auto self-start cursor-pointer "
                    href="/en/user-wordlist"
                >
                    {" "}
                    <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#0A0A0A"
                    className="stroke-blue-1 group-hover:stroke-white transition-all duration-300"
                    >
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.00001 3H9.00001C7.05001 8.84 7.05001 15.16 9.00001 21H8.00001"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15 3C16.95 8.84 16.95 15.16 15 21"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>{" "}
                    User-Created{" "}
                </a>
                </div>
                <a
                className="ltr:[&_.arrow]:hover:translate-x-[10px] flex sm:hidden w-full justify-between rtl:[&_.arrow]:hover:translate-x-[-10px] hover:no-underline"
                href="/en/user-wordlist"
                >
                <h4 className="text-base sm:text-lg lg:text-2xl font-text-bold sm:font-text-semibold text-title mb-4 flex flex-col sm:flex-row gap-3 sm:items-center">
                    Top User-Created Wordlists
                </h4>
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#0A0A0A"
                    className="undefined arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                >
                    <path
                    d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M3.5 12.3334H20.33"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                </a>
                <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events w-full [&_.swiper-button-next]:after:text-2xl [&_.swiper-button-next]:after:text-title [&_.swiper-button-next]:after:content-["next"] [&_.swiper-button-prev]:after:text-2xl rtl:[&_.swiper-button-prev]:!left-[98%] rtl:[&_.swiper-button-next]:!right-[98%] [&_.swiper-button-prev]:after:text-title [&_.swiper-button-prev]:after:content-["prev"] swiper-backface-hidden'>
                <div
                    className="swiper-wrapper"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100 swiper-slide-active"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=284986&user_id=2089826491.8795"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            254{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="English Vocabulary in Use - Elementary"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/15.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        English Vocabulary in Use - Elementary{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Lili"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/19.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Lili
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            61{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            14 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100 swiper-slide-next"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=284220&user_id=2089826491.8795"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            145{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="504 Absolutely Essential Words"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/18.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        504 Absolutely Essential Words{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Lili"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/19.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Lili
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            43{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            12 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=288206&user_id=2089826491.8795"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            87{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="English Vocabulary in Use - Pre-intermediate & Intermediate"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/15.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        English Vocabulary in Use - Pre-intermediate &amp; Intermediate{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Lili"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/19.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Lili
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            101{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            22 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=284990&user_id=4054546165.9837"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            76{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="Oxford Word Skills - Elementary"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/2.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        Oxford Word Skills - Elementary{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Neenz"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/8.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Neenz
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            101{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            14 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=293950&user_id=2089826491.8795"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            53{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="English Vocabulary in Use - Advanced"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/15.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        English Vocabulary in Use - Advanced{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Lili"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/19.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Lili
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            102{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            4 Nov{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=290741&user_id=2089826491.8795"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            45{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="English Vocabulary In Use - Upper-Intermediate"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/15.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        English Vocabulary In Use - Upper-Intermediate{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Lili"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/19.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Lili
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            101{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            28 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=287532&user_id=4054546165.9837"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            35{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="Oxford Word Skills - Intermediate"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/2.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        Oxford Word Skills - Intermediate{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Neenz"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/8.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Neenz
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            101{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            20 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=290674&user_id=4054546165.9837"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            34{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="Oxford Word Skills - Upper-Intermediate - Advanced"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/2.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        Oxford Word Skills - Upper-Intermediate - Advanced{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Neenz"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/8.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Neenz
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            101{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            28 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=217231&user_id=3809867391.7991"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            11{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="Mango English"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/36.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        Mango English{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Anchen"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/2.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Anchen
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            9{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            12 May{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                    <div
                    className="swiper-slide !w-auto !scale-100 !opacity-100"
                    style={{ marginRight: 24 }}
                    >
                    <a
                        className=" border-[1.5px] border-solid border-blue-light-1 sm:border-none rounded-3xl hover:shadow-1 cursor-pointer transition-shadow duration-200 ease-in-out relative bg-background p-4 sm:p-6 flex-col flex w-[160px] sm:w-[180px] lg:w-[214px] min-w-[160px] sm:min-w-[180px] lg:min-w-[214px]"
                        href="/en/user/category/study?id=287873&user_id=162037289.6847"
                    >
                        <div className="bg-green-light-2 text-green dark:text-green-dark rounded-tr-3xl flex gap-1 rounded-bl-2xl px-3 py-[6px] absolute top-0 right-0 ">
                        {" "}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-green dark:stroke-green-dark w-4 h-4"
                        >
                            <path
                            d="M9.16 11.5367C9.06 11.5267 8.94 11.5267 8.83 11.5367C6.45 11.4567 4.56 9.50675 4.56 7.10675C4.56 4.65675 6.54 2.66675 9 2.66675C11.45 2.66675 13.44 4.65675 13.44 7.10675C13.43 9.50675 11.54 11.4567 9.16 11.5367Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M16.41 4.66675C18.35 4.66675 19.91 6.23675 19.91 8.16675C19.91 10.0567 18.41 11.5967 16.54 11.6667C16.46 11.6567 16.37 11.6567 16.28 11.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M4.16 15.2267C1.74 16.8467 1.74 19.4867 4.16 21.0967C6.91 22.9367 11.42 22.9367 14.17 21.0967C16.59 19.4767 16.59 16.8367 14.17 15.2267C11.43 13.3967 6.92 13.3967 4.16 15.2267Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M18.34 20.6667C19.06 20.5167 19.74 20.2267 20.3 19.7967C21.86 18.6267 21.86 16.6967 20.3 15.5267C19.75 15.1067 19.08 14.8267 18.37 14.6667"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>{" "}
                        <span className="text-xs font-text-medium mb-0">
                            {" "}
                            10{" "}
                        </span>{" "}
                        </div>
                        <img
                        alt="b2"
                        className=" w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px] rounded-full self-center mb-2 dark:saturate-[1.2] dark:brightness-75"
                        src="https://api.langeek.co/v1/s/img/category/42.png"
                        />
                        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-lg font-text-medium text-title mb-3">
                        {" "}
                        b2{" "}
                        </p>
                        <div className="flex gap-2 mb-4 items-center">
                        <img
                            alt="Alihan"
                            className="bg-blue-light-3 rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px]  dark:saturate-[1.2] dark:brightness-75"
                            src="https://api.langeek.co/v1/a/img/profile/8.png"
                        />
                        <p className="text-xs sm:text-sm font-text-regular text-title mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                            {" "}
                            Alihan
                        </p>
                        </div>
                        <div className=" flex gap-2 sm:gap-3 items-center">
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M22 11.7273V17.7273C22 21.7273 21 22.7273 17 22.7273H7C3 22.7273 2 21.7273 2 17.7273V7.72729C2 3.72729 3 2.72729 7 2.72729H8.5C10 2.72729 10.33 3.16729 10.9 3.92729L12.4 5.92729C12.78 6.42729 13 6.72729 14 6.72729H17C21 6.72729 22 7.72729 22 11.7273Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                            />
                            </svg>{" "}
                            1{" "}
                        </p>
                        <p className="text-[11px] sm:text-xs font-text-medium text-sub-title mb-0 flex items-center gap-1">
                            {" "}
                            <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="stroke-gray-58 w-4 h-4"
                            >
                            <path
                                d="M8 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 2.63635V5.63635"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 9.72632H20.5"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 9.13635V17.6364C21 20.6364 19.5 22.6364 16 22.6364H8C4.5 22.6364 3 20.6364 3 17.6364V9.13635C3 6.13635 4.5 4.13635 8 4.13635H16C19.5 4.13635 21 6.13635 21 9.13635Z"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.9955 14.3364H12.0045"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 14.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.29431 17.3364H8.30329"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>{" "}
                            21 Oct{" "}
                        </p>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#0A0A0A"
                            className="ml-auto arrow transition-all ease-out duration-300 rtl:hover:!translate-x-[-10px] ltr:hover:translate-x-[10px] cursor-pointer stroke-blue-1 ltr:rotate-0 rtl:rotate-180"
                        >
                            <path
                            d="M14.43 6.26343L20.5 12.3334L14.43 18.4034"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3.5 12.3334H20.33"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="swiper-button-prev swiper-button-disabled" />
                <div className="swiper-button-next" />
                </div>
            </div>
        </div>
    );
}

export default VocabOverView;