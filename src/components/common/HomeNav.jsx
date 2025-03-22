import { Link } from "react-router-dom";
const HomeNav = () => {
    return (
        <>
            <div className="menu">
                <ul>
                    <Link href="/"><li>Home Style - 01</li></Link>
                    <Link href="/"><li>Home Style - 02</li></Link>
                    <Link href="/"><li>Home Style - 03</li></Link>
                    <Link href="/"><li>Home Style - 04</li></Link>
                </ul>
            </div>
        </>
    )
}

export default HomeNav
