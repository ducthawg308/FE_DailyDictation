import IconBook from '../assets/icon/icon_book.svg';
import IconLesson from '../assets/icon/icon_lesson.svg';
import IconClock from '../assets/icon/icon_clock.svg';
import IconFavorite from '../assets/icon/icon_favorite.svg';
import A1 from "../assets/images/LevelVocab/a1.jpg"
import A2 from "../assets/images/LevelVocab/a2.jpg"
import B1 from "../assets/images/LevelVocab/b1.jpg"
import B2 from "../assets/images/LevelVocab/b2.jpg"
import C1 from "../assets/images/LevelVocab/c1.jpg"
import C2 from "../assets/images/LevelVocab/c2.jpg"

const VocabLevelBased = () => {
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div className="CategoryItem_bookItem__eh0Fx gap-4 lg:gap-6 !p-4 lg:!p-6 bg-blue-light-4 bg-gray-100 transition-all blur-0 border-0 duration-[250ms] flex rounded-3xl flex-col flex-nowrap relative">
                <div className="flex gap-6">
                    <img
                    alt="A1 Level Wordlist"
                    className="shadow-1 rounded-[5px] w-[110px] h-[165px]  dark:saturate-[1.2] dark:brightness-75"
                    src={A1}
                    />
                    <div className=" text-left flex flex-col gap-4 lg:gap-0 lg:justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-text-bold text-title m-0 text-lg transition-all duration-300 hover:text-purple">
                        <span>A1 Level Wordlist</span>
                        </h3>
                        <div className="relative z-[2]">
                        <div className="cursor-pointer p-1 sm:p-2 hover:bg-blue-light-1 rounded-2xl transition-colors duration-300">
                            <img
                            width={24}
                            height={24}
                            className="dark:invert dark:contrast-200 w-5 h-5 sm:w-6 sm:h-6"
                            src={IconFavorite}
                            alt="bookmark"
                            />
                        </div>
                        <div
                            className="z-[21] absolute py-4 px-6 rounded-2xl bottom-[-8rem] bg-background max-w-[25rem] scale-0 shadow-2 border border-solid border-gray-58 SignInPopup_container__qF7k2 !right-0 w-[300px] !text-sm sm:!text-base  SignInPopup_close__2ghII"
                            style={{ transform: "scale(0)" }}
                        >
                            <div className="text-gray-40">
                            In order to add to your bookmarks you must sign in to your
                            account
                            </div>
                            <div className="text-right flex gap-2 justify-end items-center mt-4">
                            <div className="font-bold hover:cursor-pointer hover:no-underline">
                                Close
                            </div>
                            <a
                                href="/en/sign-in"
                                className="inline-block text-center whitespace-nowrap py-[.375rem] px-[.75rem] text-base rounded-[.25rem] transition-all ease-in-out duration-[.15s] leading-6 font-bold text-blue-1 border border-blue-1 border-solid hover:bg-blue-1 hover:text-white ml-6 mt--1 hover:cursor-pointer hover:no-underline"
                            >
                                Sign in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p className="text-gray-40 mb-0 mt-[-9px] overflow-hidden font-text-medium text-sm font-normal CategoryItem_description__byxhk">
                        A1 vocabulary list includes 32 lessons categorized by topic,
                        difficulty, and usage according to CEFR. This is the first step in
                        your vocabulary learning.
                    </p>
                    <div className="!hidden lg:!flex w-full items-center gap-3">
                        <div className="h-2 rounded-full w-full bg-blue-light-1">
                        <div
                            className="h-full rounded-[inherit] bg-green"
                            style={{ width: "0%" }}
                        />
                        </div>
                        <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                        0%
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:!hidden !flex w-full items-center gap-3">
                    <div className="h-2 rounded-full w-full bg-blue-light-1">
                    <div
                        className="h-full rounded-[inherit] bg-green"
                        style={{ width: "0%" }}
                    />
                    </div>
                    <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                    0%
                    </p>
                </div>
                <div className="flex lg:gap-0 justify-between">
                    <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconBook}
                        alt="book"
                        />
                        <p className=" flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">32</span>{" "}
                        <span className="xs:hidden"> l </span>{" "}
                        <span className="hidden xs:block">Lesson</span>{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconLesson}
                        alt="note"
                        />
                        <p className="flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">607</span>{" "}
                        <span className="xs:hidden"> w </span>{" "}
                        <span className="hidden xs:block">Word</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconClock}
                        alt="clock"
                        />
                        <p className="m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">5</span>
                        <span>h</span> <span className="font-text-medium">4</span>m
                        </p>
                    </div>
                    </div>
                    <a
                    className="text-blue-1 text-sm font-text-medium hover:no-underline hover:text-blue-1 px-4 py-2 rounded-3xl hover:bg-blue-light-1 transition-all duration-300 relative z-[2]"
                    href="/en/vocab/category/1/a1-level"
                    >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A0A0A"
                        className="stroke-blue-1 rtl:rotate-180"
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
                    <a
                    className='absolute top-0 bottom-0 left-0 right-0 z-[1] pointer-events-auto content-[""]'
                    href="/en/vocab/category/1/a1-level"
                    />
                </div>
                </div>
                <div className="CategoryItem_bookItem__eh0Fx gap-4 lg:gap-6 !p-4 lg:!p-6 bg-blue-light-4 bg-gray-100 transition-all blur-0 border-0 duration-[250ms] flex rounded-3xl flex-col flex-nowrap relative">
                <div className="flex gap-6">
                    <img
                    alt="A2 Level Wordlist"
                    className="shadow-1 rounded-[5px] w-[110px] h-[165px]  dark:saturate-[1.2] dark:brightness-75"
                    src={A2}
                    />
                    <div className=" text-left flex flex-col gap-4 lg:gap-0 lg:justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-text-bold text-title m-0 text-lg transition-all duration-300 hover:text-purple">
                        <span>A2 Level Wordlist</span>
                        </h3>
                        <div className="relative z-[2]">
                        <div className="cursor-pointer p-1 sm:p-2 hover:bg-blue-light-1 rounded-2xl transition-colors duration-300">
                            <img
                            width={24}
                            height={24}
                            className="dark:invert dark:contrast-200 w-5 h-5 sm:w-6 sm:h-6"
                            src={IconFavorite}
                            alt="bookmark"
                            />
                        </div>
                        <div
                            className="z-[21] absolute py-4 px-6 rounded-2xl bottom-[-8rem] bg-background max-w-[25rem] scale-0 shadow-2 border border-solid border-gray-58 SignInPopup_container__qF7k2 !right-0 w-[300px] !text-sm sm:!text-base  SignInPopup_close__2ghII"
                            style={{ transform: "scale(0)" }}
                        >
                            <div className="text-gray-40">
                            In order to add to your bookmarks you must sign in to your
                            account
                            </div>
                            <div className="text-right flex gap-2 justify-end items-center mt-4">
                            <div className="font-bold hover:cursor-pointer hover:no-underline">
                                Close
                            </div>
                            <a
                                href="/en/sign-in"
                                className="inline-block text-center whitespace-nowrap py-[.375rem] px-[.75rem] text-base rounded-[.25rem] transition-all ease-in-out duration-[.15s] leading-6 font-bold text-blue-1 border border-blue-1 border-solid hover:bg-blue-1 hover:text-white ml-6 mt--1 hover:cursor-pointer hover:no-underline"
                            >
                                Sign in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p className="text-gray-40 mb-0 mt-[-9px] overflow-hidden font-text-medium text-sm font-normal CategoryItem_description__byxhk">
                        Here you will find 50 lessons categorized by topic, difficulty, and
                        usage according to CEFR. This is the second step in your vocabulary
                        learning journey.
                    </p>
                    <div className="!hidden lg:!flex w-full items-center gap-3">
                        <div className="h-2 rounded-full w-full bg-blue-light-1">
                        <div
                            className="h-full rounded-[inherit] bg-green"
                            style={{ width: "0%" }}
                        />
                        </div>
                        <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                        0%
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:!hidden !flex w-full items-center gap-3">
                    <div className="h-2 rounded-full w-full bg-blue-light-1">
                    <div
                        className="h-full rounded-[inherit] bg-green"
                        style={{ width: "0%" }}
                    />
                    </div>
                    <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                    0%
                    </p>
                </div>
                <div className="flex lg:gap-0 justify-between">
                    <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconBook}
                        alt="book"
                        />
                        <p className=" flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">50</span>{" "}
                        <span className="xs:hidden"> l </span>{" "}
                        <span className="hidden xs:block">Lesson</span>{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconLesson}
                        alt="note"
                        />
                        <p className="flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">1585</span>{" "}
                        <span className="xs:hidden"> w </span>{" "}
                        <span className="hidden xs:block">Word</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconClock}
                        alt="clock"
                        />
                        <p className="m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">13</span>
                        <span>h</span> <span className="font-text-medium">13</span>m
                        </p>
                    </div>
                    </div>
                    <a
                    className="text-blue-1 text-sm font-text-medium hover:no-underline hover:text-blue-1 px-4 py-2 rounded-3xl hover:bg-blue-light-1 transition-all duration-300 relative z-[2]"
                    href="/en/vocab/category/6/a2-level"
                    >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A0A0A"
                        className="stroke-blue-1 rtl:rotate-180"
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
                    <a
                    className='absolute top-0 bottom-0 left-0 right-0 z-[1] pointer-events-auto content-[""]'
                    href="/en/vocab/category/6/a2-level"
                    />
                </div>
                </div>
                <div className="CategoryItem_bookItem__eh0Fx gap-4 lg:gap-6 !p-4 lg:!p-6 bg-blue-light-4 bg-gray-100 transition-all blur-0 border-0 duration-[250ms] flex rounded-3xl flex-col flex-nowrap relative">
                <div className="flex gap-6">
                    <img
                    alt="B1 Level Wordlist"
                    className="shadow-1 rounded-[5px] w-[110px] h-[165px]  dark:saturate-[1.2] dark:brightness-75"
                    src={B1}
                    />
                    <div className=" text-left flex flex-col gap-4 lg:gap-0 lg:justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-text-bold text-title m-0 text-lg transition-all duration-300 hover:text-purple">
                        <span>B1 Level Wordlist</span>
                        </h3>
                        <div className="relative z-[2]">
                        <div className="cursor-pointer p-1 sm:p-2 hover:bg-blue-light-1 rounded-2xl transition-colors duration-300">
                            <img
                            width={24}
                            height={24}
                            className="dark:invert dark:contrast-200 w-5 h-5 sm:w-6 sm:h-6"
                            src={IconFavorite}
                            alt="bookmark"
                            />
                        </div>
                        <div
                            className="z-[21] absolute py-4 px-6 rounded-2xl bottom-[-8rem] bg-background max-w-[25rem] scale-0 shadow-2 border border-solid border-gray-58 SignInPopup_container__qF7k2 !right-0 w-[300px] !text-sm sm:!text-base  SignInPopup_close__2ghII"
                            style={{ transform: "scale(0)" }}
                        >
                            <div className="text-gray-40">
                            In order to add to your bookmarks you must sign in to your
                            account
                            </div>
                            <div className="text-right flex gap-2 justify-end items-center mt-4">
                            <div className="font-bold hover:cursor-pointer hover:no-underline">
                                Close
                            </div>
                            <a
                                href="/en/sign-in"
                                className="inline-block text-center whitespace-nowrap py-[.375rem] px-[.75rem] text-base rounded-[.25rem] transition-all ease-in-out duration-[.15s] leading-6 font-bold text-blue-1 border border-blue-1 border-solid hover:bg-blue-1 hover:text-white ml-6 mt--1 hover:cursor-pointer hover:no-underline"
                            >
                                Sign in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p className="text-gray-40 mb-0 mt-[-9px] overflow-hidden font-text-medium text-sm font-normal CategoryItem_description__byxhk">
                        Here you will find 58 lessons categorized by topic, difficulty, and
                        usage according to CEFR. This is the third step in your vocabulary
                        learning journey.
                    </p>
                    <div className="!hidden lg:!flex w-full items-center gap-3">
                        <div className="h-2 rounded-full w-full bg-blue-light-1">
                        <div
                            className="h-full rounded-[inherit] bg-green"
                            style={{ width: "0%" }}
                        />
                        </div>
                        <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                        0%
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:!hidden !flex w-full items-center gap-3">
                    <div className="h-2 rounded-full w-full bg-blue-light-1">
                    <div
                        className="h-full rounded-[inherit] bg-green"
                        style={{ width: "0%" }}
                    />
                    </div>
                    <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                    0%
                    </p>
                </div>
                <div className="flex lg:gap-0 justify-between">
                    <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconBook}
                        alt="book"
                        />
                        <p className=" flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">58</span>{" "}
                        <span className="xs:hidden"> l </span>{" "}
                        <span className="hidden xs:block">Lesson</span>{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconLesson}
                        alt="note"
                        />
                        <p className="flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">1849</span>{" "}
                        <span className="xs:hidden"> w </span>{" "}
                        <span className="hidden xs:block">Word</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconClock}
                        alt="clock"
                        />
                        <p className="m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">15</span>
                        <span>h</span> <span className="font-text-medium">25</span>m
                        </p>
                    </div>
                    </div>
                    <a
                    className="text-blue-1 text-sm font-text-medium hover:no-underline hover:text-blue-1 px-4 py-2 rounded-3xl hover:bg-blue-light-1 transition-all duration-300 relative z-[2]"
                    href="/en/vocab/category/7/b1-level"
                    >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A0A0A"
                        className="stroke-blue-1 rtl:rotate-180"
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
                    <a
                    className='absolute top-0 bottom-0 left-0 right-0 z-[1] pointer-events-auto content-[""]'
                    href="/en/vocab/category/7/b1-level"
                    />
                </div>
                </div>
                <div className="CategoryItem_bookItem__eh0Fx gap-4 lg:gap-6 !p-4 lg:!p-6 bg-blue-light-4 bg-gray-100 transition-all blur-0 border-0 duration-[250ms] flex rounded-3xl flex-col flex-nowrap relative">
                <div className="flex gap-6">
                    <img
                    alt="B2 Level Wordlist"
                    className="shadow-1 rounded-[5px] w-[110px] h-[165px]  dark:saturate-[1.2] dark:brightness-75"
                    src={B2}
                    />
                    <div className=" text-left flex flex-col gap-4 lg:gap-0 lg:justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-text-bold text-title m-0 text-lg transition-all duration-300 hover:text-purple">
                        <span>B2 Level Wordlist</span>
                        </h3>
                        <div className="relative z-[2]">
                        <div className="cursor-pointer p-1 sm:p-2 hover:bg-blue-light-1 rounded-2xl transition-colors duration-300">
                            <img
                            width={24}
                            height={24}
                            className="dark:invert dark:contrast-200 w-5 h-5 sm:w-6 sm:h-6"
                            src={IconFavorite}
                            alt="bookmark"
                            />
                        </div>
                        <div
                            className="z-[21] absolute py-4 px-6 rounded-2xl bottom-[-8rem] bg-background max-w-[25rem] scale-0 shadow-2 border border-solid border-gray-58 SignInPopup_container__qF7k2 !right-0 w-[300px] !text-sm sm:!text-base  SignInPopup_close__2ghII"
                            style={{ transform: "scale(0)" }}
                        >
                            <div className="text-gray-40">
                            In order to add to your bookmarks you must sign in to your
                            account
                            </div>
                            <div className="text-right flex gap-2 justify-end items-center mt-4">
                            <div className="font-bold hover:cursor-pointer hover:no-underline">
                                Close
                            </div>
                            <a
                                href="/en/sign-in"
                                className="inline-block text-center whitespace-nowrap py-[.375rem] px-[.75rem] text-base rounded-[.25rem] transition-all ease-in-out duration-[.15s] leading-6 font-bold text-blue-1 border border-blue-1 border-solid hover:bg-blue-1 hover:text-white ml-6 mt--1 hover:cursor-pointer hover:no-underline"
                            >
                                Sign in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p className="text-gray-40 mb-0 mt-[-9px] overflow-hidden font-text-medium text-sm font-normal CategoryItem_description__byxhk">
                        Here you will find 64 lessons categorized by topic, difficulty, and
                        usage according to CEFR. This is the fourth step in your vocabulary
                        learning journey.
                    </p>
                    <div className="!hidden lg:!flex w-full items-center gap-3">
                        <div className="h-2 rounded-full w-full bg-blue-light-1">
                        <div
                            className="h-full rounded-[inherit] bg-green"
                            style={{ width: "0%" }}
                        />
                        </div>
                        <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                        0%
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:!hidden !flex w-full items-center gap-3">
                    <div className="h-2 rounded-full w-full bg-blue-light-1">
                    <div
                        className="h-full rounded-[inherit] bg-green"
                        style={{ width: "0%" }}
                    />
                    </div>
                    <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                    0%
                    </p>
                </div>
                <div className="flex lg:gap-0 justify-between">
                    <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconBook}
                        alt="book"
                        />
                        <p className=" flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">64</span>{" "}
                        <span className="xs:hidden"> l </span>{" "}
                        <span className="hidden xs:block">Lesson</span>{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconLesson}
                        alt="note"
                        />
                        <p className="flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">2224</span>{" "}
                        <span className="xs:hidden"> w </span>{" "}
                        <span className="hidden xs:block">Word</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconClock}
                        alt="clock"
                        />
                        <p className="m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">18</span>
                        <span>h</span> <span className="font-text-medium">33</span>m
                        </p>
                    </div>
                    </div>
                    <a
                    className="text-blue-1 text-sm font-text-medium hover:no-underline hover:text-blue-1 px-4 py-2 rounded-3xl hover:bg-blue-light-1 transition-all duration-300 relative z-[2]"
                    href="/en/vocab/category/8/b2-level"
                    >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A0A0A"
                        className="stroke-blue-1 rtl:rotate-180"
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
                    <a
                    className='absolute top-0 bottom-0 left-0 right-0 z-[1] pointer-events-auto content-[""]'
                    href="/en/vocab/category/8/b2-level"
                    />
                </div>
                </div>
                <div className="CategoryItem_bookItem__eh0Fx gap-4 lg:gap-6 !p-4 lg:!p-6 bg-blue-light-4 bg-gray-100 transition-all blur-0 border-0 duration-[250ms] flex rounded-3xl flex-col flex-nowrap relative">
                <div className="flex gap-6">
                    <img
                    alt="C1 Level Wordlist"
                    className="shadow-1 rounded-[5px] w-[110px] h-[165px]  dark:saturate-[1.2] dark:brightness-75"
                    src={C1}
                    />
                    <div className=" text-left flex flex-col gap-4 lg:gap-0 lg:justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-text-bold text-title m-0 text-lg transition-all duration-300 hover:text-purple">
                        <span>C1 Level Wordlist</span>
                        </h3>
                        <div className="relative z-[2]">
                        <div className="cursor-pointer p-1 sm:p-2 hover:bg-blue-light-1 rounded-2xl transition-colors duration-300">
                            <img
                            width={24}
                            height={24}
                            className="dark:invert dark:contrast-200 w-5 h-5 sm:w-6 sm:h-6"
                            src={IconFavorite}
                            alt="bookmark"
                            />
                        </div>
                        <div
                            className="z-[21] absolute py-4 px-6 rounded-2xl bottom-[-8rem] bg-background max-w-[25rem] scale-0 shadow-2 border border-solid border-gray-58 SignInPopup_container__qF7k2 !right-0 w-[300px] !text-sm sm:!text-base  SignInPopup_close__2ghII"
                            style={{ transform: "scale(0)" }}
                        >
                            <div className="text-gray-40">
                            In order to add to your bookmarks you must sign in to your
                            account
                            </div>
                            <div className="text-right flex gap-2 justify-end items-center mt-4">
                            <div className="font-bold hover:cursor-pointer hover:no-underline">
                                Close
                            </div>
                            <a
                                href="/en/sign-in"
                                className="inline-block text-center whitespace-nowrap py-[.375rem] px-[.75rem] text-base rounded-[.25rem] transition-all ease-in-out duration-[.15s] leading-6 font-bold text-blue-1 border border-blue-1 border-solid hover:bg-blue-1 hover:text-white ml-6 mt--1 hover:cursor-pointer hover:no-underline"
                            >
                                Sign in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p className="text-gray-40 mb-0 mt-[-9px] overflow-hidden font-text-medium text-sm font-normal CategoryItem_description__byxhk">
                        Here you will find 67 lessons categorized by topic, difficulty, and
                        usage according to CEFR. This is the fifth step in your vocabulary
                        learning journey.
                    </p>
                    <div className="!hidden lg:!flex w-full items-center gap-3">
                        <div className="h-2 rounded-full w-full bg-blue-light-1">
                        <div
                            className="h-full rounded-[inherit] bg-green"
                            style={{ width: "0%" }}
                        />
                        </div>
                        <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                        0%
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:!hidden !flex w-full items-center gap-3">
                    <div className="h-2 rounded-full w-full bg-blue-light-1">
                    <div
                        className="h-full rounded-[inherit] bg-green"
                        style={{ width: "0%" }}
                    />
                    </div>
                    <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                    0%
                    </p>
                </div>
                <div className="flex lg:gap-0 justify-between">
                    <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconBook}
                        alt="book"
                        />
                        <p className=" flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">67</span>{" "}
                        <span className="xs:hidden"> l </span>{" "}
                        <span className="hidden xs:block">Lesson</span>{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconLesson}
                        alt="note"
                        />
                        <p className="flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">2483</span>{" "}
                        <span className="xs:hidden"> w </span>{" "}
                        <span className="hidden xs:block">Word</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconClock}
                        alt="clock"
                        />
                        <p className="m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">20</span>
                        <span>h</span> <span className="font-text-medium">42</span>m
                        </p>
                    </div>
                    </div>
                    <a
                    className="text-blue-1 text-sm font-text-medium hover:no-underline hover:text-blue-1 px-4 py-2 rounded-3xl hover:bg-blue-light-1 transition-all duration-300 relative z-[2]"
                    href="/en/vocab/category/35/c1-level"
                    >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A0A0A"
                        className="stroke-blue-1 rtl:rotate-180"
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
                    <a
                    className='absolute top-0 bottom-0 left-0 right-0 z-[1] pointer-events-auto content-[""]'
                    href="/en/vocab/category/35/c1-level"
                    />
                </div>
                </div>
                <div className="CategoryItem_bookItem__eh0Fx gap-4 lg:gap-6 !p-4 lg:!p-6 bg-blue-light-4 bg-gray-100 transition-all blur-0 border-0 duration-[250ms] flex rounded-3xl flex-col flex-nowrap relative">
                <div className="flex gap-6">
                    <img
                    alt="C2 Level Wordlist"
                    className="shadow-1 rounded-[5px] w-[110px] h-[165px]  dark:saturate-[1.2] dark:brightness-75"
                    src={C2}
                    />
                    <div className=" text-left flex flex-col gap-4 lg:gap-0 lg:justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-text-bold text-title m-0 text-lg transition-all duration-300 hover:text-purple">
                        <span>C2 Level Wordlist</span>
                        </h3>
                        <div className="relative z-[2]">
                        <div className="cursor-pointer p-1 sm:p-2 hover:bg-blue-light-1 rounded-2xl transition-colors duration-300">
                            <img
                            width={24}
                            height={24}
                            className="dark:invert dark:contrast-200 w-5 h-5 sm:w-6 sm:h-6"
                            src={IconFavorite}
                            alt="bookmark"
                            />
                        </div>
                        <div
                            className="z-[21] absolute py-4 px-6 rounded-2xl bottom-[-8rem] bg-background max-w-[25rem] scale-0 shadow-2 border border-solid border-gray-58 SignInPopup_container__qF7k2 !right-0 w-[300px] !text-sm sm:!text-base  SignInPopup_close__2ghII"
                            style={{ transform: "scale(0)" }}
                        >
                            <div className="text-gray-40">
                            In order to add to your bookmarks you must sign in to your
                            account
                            </div>
                            <div className="text-right flex gap-2 justify-end items-center mt-4">
                            <div className="font-bold hover:cursor-pointer hover:no-underline">
                                Close
                            </div>
                            <a
                                href="/en/sign-in"
                                className="inline-block text-center whitespace-nowrap py-[.375rem] px-[.75rem] text-base rounded-[.25rem] transition-all ease-in-out duration-[.15s] leading-6 font-bold text-blue-1 border border-blue-1 border-solid hover:bg-blue-1 hover:text-white ml-6 mt--1 hover:cursor-pointer hover:no-underline"
                            >
                                Sign in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p className="text-gray-40 mb-0 mt-[-9px] overflow-hidden font-text-medium text-sm font-normal CategoryItem_description__byxhk">
                        Here you will find vocabulary lessons categorized by topic, from
                        shapes to politics. This will take you to the sixth stage of your
                        vocabulary learning journey.
                    </p>
                    <div className="!hidden lg:!flex w-full items-center gap-3">
                        <div className="h-2 rounded-full w-full bg-blue-light-1">
                        <div
                            className="h-full rounded-[inherit] bg-green"
                            style={{ width: "0%" }}
                        />
                        </div>
                        <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                        0%
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:!hidden !flex w-full items-center gap-3">
                    <div className="h-2 rounded-full w-full bg-blue-light-1">
                    <div
                        className="h-full rounded-[inherit] bg-green"
                        style={{ width: "0%" }}
                    />
                    </div>
                    <p className=" text-gray-58 text-sm font-text-medium mb-0 ">
                    0%
                    </p>
                </div>
                <div className="flex lg:gap-0 justify-between">
                    <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconBook}
                        alt="book"
                        />
                        <p className=" flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">89</span>{" "}
                        <span className="xs:hidden"> l </span>{" "}
                        <span className="hidden xs:block">Lesson</span>{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconLesson}
                        alt="note"
                        />
                        <p className="flex gap-1 m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">2216</span>{" "}
                        <span className="xs:hidden"> w </span>{" "}
                        <span className="hidden xs:block">Word</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                        width={20}
                        height={20}
                        src={IconClock}
                        alt="clock"
                        />
                        <p className="m-0 text-sub-title text-xs sm:text-sm font-text-regular">
                        <span className="font-text-medium">18</span>
                        <span>h</span> <span className="font-text-medium">29</span>m
                        </p>
                    </div>
                    </div>
                    <a
                    className="text-blue-1 text-sm font-text-medium hover:no-underline hover:text-blue-1 px-4 py-2 rounded-3xl hover:bg-blue-light-1 transition-all duration-300 relative z-[2]"
                    href="/en/vocab/category/251/c2-level"
                    >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A0A0A"
                        className="stroke-blue-1 rtl:rotate-180"
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
                    <a
                    className='absolute top-0 bottom-0 left-0 right-0 z-[1] pointer-events-auto content-[""]'
                    href="/en/vocab/category/251/c2-level"
                    />
                </div>
                </div>
            </div>
        </div>
    );
}

export default VocabLevelBased;