import SNotFound from "./NotFound.style";
import Title from "../../components/Typography/Title";
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";
import {ERoutes} from "../../routes/routesData";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const goHomePage = () => {
        navigate(ERoutes.HOME)
    }
    return (
        <SNotFound>
            <Title>Page not found</Title>
            <Button onClick={goHomePage}>Back to home page</Button>
        </SNotFound>
    )
}

export default NotFoundPage;