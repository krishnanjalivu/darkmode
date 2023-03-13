import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useContext } from "react";
import Theme from "./Theme";
// import {MoonIcon} from "@heroicons/react/solid";
const StyledLabel=styled.label`
input{
    position:fixed;
    left:-999999px;
}
input ~ div{
    width:30px;
    height:16px;
    background:#eee;
    border-radius:8px;
    position:relative;

}
svg
{
    height:14px;
    color:#fff;
    background-color:#ccc;
    border-radius:7px;
    position:absolute;
    top:1px;
    left:1px;
    transition:all,.4s ease;

}
input:checked ~div{
    background:#668;
    svg
    {
        background-color:#224;
        left:15px;
    }
}
`;
function Toggler()
{
    const theme=useContext(Theme)
    return(
        <StyledLabel>
            <input type="checkbox" checked={theme.darkMode} onChange={()=>theme.setdarkMode(oldValue=>!oldValue)} />
            <div>
            <FontAwesomeIcon icon={icon({name: 'moon', style: 'solid'})} />
            </div>
        </StyledLabel>
    );
}
export default Toggler;