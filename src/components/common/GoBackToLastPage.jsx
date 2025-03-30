import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
const GoBackToLastPage = (props) => {
    return (
        <>
            <div className="w-[100%] bg-[#f0f0f0] flex items-center justify-center py-[40px]">
                <div className="flex items-center justify-center flex-col gap-[5px]">
                    <h1 className="text-[30px] !font-extrabold text-center text-[#010101] w-[100%]">{props.pageTitle}</h1>
                    <div className="text-[#000] text-[14px] flex items-center justify-center gap-[10px]">
                        <Link to="/" className="!font-thin hover:text-[#E55472]">Home</Link>
                        <FontAwesomeIcon className="!font-thin" icon={faArrowRight}/>
                        <p className="!font-thin">{props.pageName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoBackToLastPage
