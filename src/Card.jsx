import ProfilePic from './assets/th.jfif'
function Card(){

    return(
        <div Class="card">
            <img Class="CardImage" src={ProfilePic} alt="Profile Picture"></img>
            <h2 Class="CardName">Hey JODEL</h2>
            <p Class="CardWriting">I am an IT student,currently in my second year college.
                curreently learning MERN</p>
        </div>
    );
}
export default Card