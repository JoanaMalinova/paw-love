import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Home() {

    const { isAuthenticated } = useAuth();   

    return (
        <div className="wrapper">
            <div className="info">
                <h1>You <span className="pink">love</span> your pet?
                    We would <span className="pink">love</span> to know more about it!
                </h1>
                <h2 className="pink">A community to share and care</h2>
                {!isAuthenticated && <h3><Link to="/register">join us now</Link></h3>}
            </div>
            <div className="img-holder">
                <img src="images/pngwing.com.png" alt="dog-cat-kissing" />
            </div>
        </div>
    )
}