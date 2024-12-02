import './mainStyle.css';
export default function Main(props){
    return(
    // console.log(props);
    <div className="main">
        <div className={props.cName}>
            <img src={props.mainImage}/>
            <div className={props.cName01}>
                <h1>{props.title}</h1>
                <span>{props.star}</span>
                <p>{props.text}</p>
            </div> 
            {/* <h1> hello </h1> */}
        </div>
    </div>
    );
} 