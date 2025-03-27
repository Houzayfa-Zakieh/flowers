import { Link } from "react-router-dom"
const Banner = (props) => {
  return (
    <>
   <Link to="/"><img src={props.img} alt="banner image" className={props.className} /></Link>
    </>
  )
}

export default Banner
