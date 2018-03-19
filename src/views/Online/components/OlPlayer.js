import React from "react";
import "./com.less"
export default({src}) => {
    return (
        <div className="ol-com-player">
            <div>
                <iframe
                    src={`http://www.dy280.com/play/${src}`}
                    width="960"
                    height="1280"
                    scrolling="no"></iframe>
            </div>
        </div>
    )
}
