import {FC} from "react";
import SHeader from "./Header.style";
import UnitSwitcher from "../UnitSwitcher";
import Search from "./Search";

const Header: FC = () => {

    return (<SHeader>
        <Search />
        <UnitSwitcher/>
    </SHeader>)
}

export default Header