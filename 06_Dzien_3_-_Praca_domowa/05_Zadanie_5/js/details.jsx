import {useParams} from "react-router-dom";

const Details = () => {
    const {value} = useParams();

    return (
        <h1>{value}</h1>

    );
};
export default Details;