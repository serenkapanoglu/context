import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

function Header() {
    const {deger, setDeger} = useContext(GlobalContext)
return (
    <div className="col-md-6">
    <div className="alert alert-primary">
        <h2>Context'ten gelen veri: {deger}</h2>
<p>
    <button
     className="btn btn-danger" 
     onClick={() => {
    setDeger("Mahmut");
    }}>
    Degistir
    </button>
    </p>
    </div>
    </div>
);
}

export default Header;