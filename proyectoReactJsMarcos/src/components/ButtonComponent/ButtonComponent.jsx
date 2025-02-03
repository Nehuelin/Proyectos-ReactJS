import { Link } from "react-router-dom"

export default function ButtonComponent({text, linkTo}){

    return(
        <>
            <button>
                <Link to={linkTo}>
                    {text}
                </Link>
            </button>
        </>
    )
}