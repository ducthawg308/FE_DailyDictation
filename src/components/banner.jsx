import OftenQuestion from "./often_question";
import Feedback from "./feedback";
import PackageOption from "./package_options";
import LearningTool from "./learning_tool";
import GlobalCommunity from "./global_community";
import Introduct from "./introduct";
import Support from "./support";
const Banner = () => {
    return(
        <>
            <Introduct/>
            <Support/>
            <LearningTool/>
            <GlobalCommunity/>
            <Feedback/>
            <PackageOption/>
            <OftenQuestion/>
        </>
    );
}

export default Banner;