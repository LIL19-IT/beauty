import { Email } from "./Email";
import { Map } from "./Map";

export function Feedback({ feedback, map }) {
    return (
        <div className="Feedback">
            <div className="container">
                <div className="content">
                    <Email feedback={feedback} />
                    <Map map={map} />
                </div>
            </div>
        </div>
    )
}
