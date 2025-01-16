import Listen from '../assets/images/listen_home.jpg';
import Vocab from '../assets/images/vocab_home.jpg';

const LearningTool = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Công cụ hỗ trợ học tập tiếng Anh hiệu quả
                </h2>
                <p className="mb-8 font-light lg:text-xl">
                    Tích hợp các công cụ học tập hàng đầu:
                </p>
                <ul
                    role="list"
                    className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                    <li className="flex space-x-3">
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
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Audio luyện nghe từ người bản xứ.
                    </span>
                    </li>
                    <li className="flex space-x-3">
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
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Flashcards học từ vựng thông minh.
                    </span>
                    </li>
                    <li className="flex space-x-3">
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
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Bài kiểm tra chuẩn quốc tế, giúp bạn đánh giá chính xác năng lực.
                    </span>
                    </li>
                </ul>
                <p className="mb-8 font-light lg:text-xl">
                    Deliver great service experiences fast - without the complexity of
                    traditional ITSM solutions.
                </p>
                </div>
                <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src={Listen}
                alt="dashboard feature image"
                />
            </div>
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src={Vocab}
                alt="feature image 2"
                />
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Nền tảng hiện đại giúp bạn rèn luyện kỹ năng nghe và từ vựng, từ cơ bản đến nâng cao
                </h2>
                <p className="mb-8 font-light lg:text-xl">
                    Những gì chúng tôi cung cấp:
                </p>
                <ul
                    role="list"
                    className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                    <li className="flex space-x-3">
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
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Giao diện thân thiện: Giúp bạn học dễ dàng hơn mọi lúc, mọi nơi.
                    </span>
                    </li>
                    <li className="flex space-x-3">
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
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Bài học cá nhân hóa: Được thiết kế dựa trên trình độ và mục tiêu học tập của bạn.
                    </span>
                    </li>
                    <li className="flex space-x-3">
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
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Kho từ vựng phong phú: Hơn 10.000 từ và cụm từ theo chủ đề, từ cơ bản đến nâng cao.
                    </span>
                    </li>
                    <li className="flex space-x-3">
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
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        Chứng nhận hoàn thành: Đạt được thành tựu cá nhân sau mỗi khóa học.
                    </span>
                    </li>
                </ul>
                <p className="font-light lg:text-xl">
                    Deliver great service experiences fast - without the complexity of
                    traditional ITSM solutions.
                </p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default LearningTool;