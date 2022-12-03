import React from "react";

function LeaveAReview() {
    return (
        <form>
            <label className="form-label">First Name:</label><br></br>
            <input type="text"></input><br></br>
            <label className="form-label">Breakup Artist Name:</label><br></br>
            <input type="text"></input><br></br>
            <label className="form-label">Rating:</label>
            <select name="rating" id="rating">
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★★★">★★★★★</option>
            </select>
            <label classname="form-label">Review:</label><br></br>
            <input type="textarea"></input>
        </form>
    )
}
export default LeaveAReview