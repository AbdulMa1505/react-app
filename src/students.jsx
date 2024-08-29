function Students (props){
    return (
        <div class="Student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ?"Yes":"No"}</p>
        </div>
    );
}
Students.propTypes={
    name:propType.string,
    age:propType.number,
    isStudent:propType.bool,
}
Students.defaultProps={
name:"Guest",
age:0,
isStudent:false,
}
export default Students