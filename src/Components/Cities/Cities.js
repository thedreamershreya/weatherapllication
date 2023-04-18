import React from "react";

import City from "../City/City";

const Cities = ({ city }) => {

    // console.log(city)

    return (
        <div>
            {city !== undefined && <City  {...city} />}
        </div>
    )
};

export default Cities;
