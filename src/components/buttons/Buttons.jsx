import './Buttons.scss';

export default function Buttons (props) {
    if (props.asLink == 'true') {
        return <a className={"link  link--" + props.classStyle} href={props.url} target={props.target ? props.target : "_self"}>
        {props.text ? props.text : ' '}
        {props.icon ? props.icon : ' '}
    </a>

    } else {
        return <a className={"btn  btn--" + props.classStyle}  href={props.url} target={props.target ? props.target : "_self"}>
                    {props.text ? props.text : ' '}
                    {props.icon ? props.icon : ' '}
                </a>
    }
}