import * as React from 'react';

function Dropdown(props){
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    return(
        <div>
            <button onClick={handleOpen} type="button">{props.tag}</button>
            {open ? <div>
                <ul>
                    {props.item}
                </ul>
            </div> : 
            <div></div>}
        </div>
    );
}
export default Dropdown;