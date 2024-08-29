
function UserGreetings(props){
    return(props.isLoggedIn? <h2>welome {props.username}</h2>: <h2>{props.username} log in to access feed</h2>);
}
export default UserGreetings