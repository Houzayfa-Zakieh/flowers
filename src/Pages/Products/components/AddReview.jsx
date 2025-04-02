import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPen, faUser, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
const AddReview = () => {
    return (
        <>
            <div className="flex items-start justify-start flex-col gap-[20px] mt-[80px]">
                <h4 className="text-[#010101] text-[18px] !font-thin border-b border-[#dfdfdf] pb-[15px]">Add a Review</h4>
                <div className="flex items-center justify-start gap-[5px]">
                    <h6 className="text-[16px] text-[#010101]">Your Ratings:</h6>
                    <div className="flex items-center justify-center gap-[2px]">
                        {[faStar, faStar, faStar, faStar, faStar].map((star, index) =>
                            <Link to="#" key={index} className="hover:text-[#e55472] !font-thin"><FontAwesomeIcon icon={star} /></Link>
                        )}
                    </div>
                </div>
                <form action="#" method="get" className="flex items-start justify-start gap-[20px] flex-col">
                    <div className="bg-[#f4f7fc] relative w-[100%]">
                        <textarea name="textArea" id="textArea" placeholder="Type your comments...." className="resize-vertical h-[147px] text-[16px] w-[100%] text-[#666] px-[20px] py-[15px]"></textarea>
                        <FontAwesomeIcon icon={faPen} className="text-[#e55472] absolute top-[15px] right-[10px]" />
                    </div>
                    <div className="bg-[#f4f7fc] relative w-[100%]">
                        <input type="text" name="name" id="name" placeholder="Type your name...." className="text-[16px] h-[50px] text-[#666] py-[1px] pr-[40px] pl-[20px] w-[100%]" />
                        <FontAwesomeIcon icon={faUser} className="text-[#e55472] absolute top-[15px] right-[10px]" />
                    </div>
                    <div className="bg-[#f4f7fc] relative w-[100%]">
                        <input type="email" name="email" id="email" placeholder="Type your email...." className="text-[16px] h-[50px] text-[#666] py-[1px] pr-[40px] pl-[20px] w-[100%]" />
                        <FontAwesomeIcon icon={faEnvelope} className="text-[#e55472] absolute top-[15px] right-[10px]" />
                    </div>
                    <div className="bg-[#f4f7fc] relative w-[100%]">
                        <input type="url" name="url" id="url" placeholder="Type your website...." className="text-[16px] text-[#666] py-[1px] pr-[40px] pl-[20px] w-[100%] h-[50px]" />
                        <FontAwesomeIcon icon={faGlobe} className="text-[#e55472] absolute top-[15px] right-[10px]" />
                    </div>
                    <div className="flex gap-[3px] w-[100%]">
                        <input type="checkbox" name="checkbox" id="checkbox" className="cursor-pointer" />
                        <label htmlFor="checkbox" className="!font-thin cursor-pointer">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <button type="submit" className="cartButtons1 text-[16px] py-[13px] px-[40px] text-[#fff] hover:text-[#666] cursor-pointer">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddReview
