import EnglishBook from '../assets/images/englishbook.jpg';
const Introduct = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                {/* Left Content */}
                <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl text-gray-800 dark:text-white">
                    Nâng cao trình độ tiếng Anh cùng{" "}
                    <span className="text-purple-600 dark:text-blue-400">Daily Dictation</span>
                </h1>
                <p className="max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">Chúng tôi cung cấp cho bạn:</span>
                    <ul className="list-disc list-inside mt-4 space-y-3">
                        <li className="flex items-center space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-medium">
                                Luyện nghe thực tế: Nghe audio/video từ người bản ngữ, tin tức, và hội thoại thường ngày để cải thiện kỹ năng nghe hiểu.
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-medium">
                                Học từ vựng dễ nhớ: Tích hợp flashcards thông minh và bài tập tương tác để mở rộng vốn từ vựng.
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-medium">
                                Bài kiểm tra online: Đánh giá trình độ và định hướng lộ trình học tập của bạn.
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-medium">
                                Cộng đồng học tập: Kết nối với những người học tiếng Anh khác, chia sẻ kinh nghiệm và cùng nhau tiến bộ.
                            </span>
                        </li>
                    </ul>
                </p>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Xem thêm
                    </a>
                    <a
                        href="#"
                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                        Tham gia ngay
                    </a>
                </div>

                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
                <img
                    src={EnglishBook}
                    alt="hero image"
                    className="rounded-xl shadow-lg object-cover max-h-[500px]"
                />
                </div>
            </div>
        </section>
    )
}

export default Introduct;