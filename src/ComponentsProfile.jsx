function ProfilePic(){
    const imageUrl ='./src/assets/th.jfif';
    const handleClick =()=>console.log("OUCH");
    const HandleClick2=(e)=>e.target.style.display="none";
return(<>
            <img onClick={handleClick} src={imageUrl}></img>
            <img onClick={(e)=>HandleClick2(e)} src={imageUrl}></img>
            </> 
        );

}
export default ProfilePic