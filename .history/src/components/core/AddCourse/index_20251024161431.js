import RenderSteps from "./RenderSteps";

export default function AddCourse(){
    return(
        <>
        <div>
            <div>
                <h1>Add Course</h1>
                <div>
                    <RenderSteps/>
                </div>
            </div>
            <div>
                <p>Code Upload Tips</p>
                <ul>
                    <li>Set the course price options </li>
                </ul>
            </div>
        </div>
        </>
    )
}