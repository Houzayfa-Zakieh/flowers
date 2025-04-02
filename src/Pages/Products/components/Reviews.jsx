import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import ReviewsCards from "./ReviewsCards"
import Author from '../../../assets/images/author.webp'
import AddReview from "./AddReview";


const Reviews = () => {
    const reviewsData = [
        { id: 1, authorName: "Adam Smit", image: Author, date: "September 3,2020", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione." },
        { id: 2, authorName: "Adam Smit", image: Author, date: "September 3,2020", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione." },
        { id: 3, authorName: "Adam Smit", image: Author, date: "September 3,2020", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione." },
    ]
    return (
        <>
            <div className="flex items-center justify-center flex-col gap-[20px]">
                <div className="flex items-center justify-center flex-col gap-[20px]">
                    <h4 className="text-[#010101] text-[18px] border-b border-[#dfdfdf] !font-thin pb-[10px]">Customer Reviews</h4>
                    <div className="text-[12px] flex items-center justify-center gap-[2px]">
                        <div className="flex items-center justify-center gap-[2px]">
                            {[faStar, faStar, faStar, faStar, faStar].map((star, index) =>
                                <Link to="#" key={index} className="hover:text-[#e55472] !font-thin"><FontAwesomeIcon icon={star} /></Link>
                            )}
                        </div>
                        <p className="hover:text-[#e55472] !font-thin">( 95 Reviews )</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[20px] lg:flex-nowrap flex-wrap">
                    <div className="flex items-center justify-center flex-col gap-[20px]">
                        {reviewsData.map((data) =>
                            <ReviewsCards key={data.id} image={data.image} authorName={data.authorName} date={data.date} comment={data.comment} />
                        )}
                    </div>
                    <div>
                    <AddReview />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews
