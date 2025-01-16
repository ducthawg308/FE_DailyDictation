
const PackageOption = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Các gói học tập phù hợp với nhu cầu của bạn
                </h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Chúng tôi cung cấp các gói học tập linh hoạt, phù hợp với mọi đối tượng, từ cá nhân đến đội nhóm hoặc tổ chức giáo dục lớn.
                </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Dành cho người mới bắt đầu hoặc học tập cá nhân
                </p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$29</span>
                    <span className="text-gray-500 dark:text-gray-400">/tháng</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>Hơn 1.000 từ vựng và bài nghe cơ bản</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>Bài kiểm tra hàng tuần theo dõi tiến độ</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>Hỗ trợ qua email trong 6 tháng</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>
                        Truy cập miễn phí các bài học mới trong 6 tháng
                    </span>
                    </li>
                </ul>
                <a
                    href="#"
                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                    Bắt đầu ngay
                </a>
                </div>
                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Phù hợp với đội nhóm nhỏ hoặc lớp học
                </p>
                <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">$99</span>
        <span className="text-gray-500 dark:text-gray-400">
            /tháng
        </span>
        </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>Truy cập kho từ vựng nâng cao và 5.000 bài nghe</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>Các bài kiểm tra và báo cáo tiến độ nhóm</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>
                        Hỗ trợ ưu tiên qua email trong 24 tháng
                    </span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>
                        Truy cập miễn phí nội dung mới trong 24 tháng
                    </span>
                    </li>
                </ul>
                <a
                    href="#"
                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                    Get started
                </a>
                </div>
                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Lý tưởng cho trường học hoặc tổ chức giáo dục lớn
                </p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$499</span>
                    <span className="text-gray-500 dark:text-gray-400">/tháng</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>Không giới hạn số lượng tài khoản học viên</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>Kho bài học với 10.000 từ vựng và 10.000 bài nghe</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>
                        Tùy chỉnh bài kiểm tra và nội dung học tập
                    </span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span>
                        Hỗ trợ 24/7 qua email và điện thoại trong 36 tháng
                    </span>
                    </li>
                </ul>
                <a
                    href="#"
                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                    Get started
                </a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default PackageOption;