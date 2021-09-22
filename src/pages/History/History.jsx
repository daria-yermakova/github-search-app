import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export function History () {

    const history = useSelector((state) => state.history)
    return (
        <div className="container">
            <Typography variant="h5" component="div" gutterBottom>Search history</Typography>
            <div className="list">
                {
                    history.history.map((elem, index) =>
                        <Link
                            key={`request${index}`}
                            to={{
                            pathname: "/search",
                            state: { datatable: elem.result, request: elem.request }
                        }}>
                            <Typography variant="h6">{`${index+1}. ${elem.request}`}</Typography>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
