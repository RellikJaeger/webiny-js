import React from "react";
import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("../components/admin"), {
    ssr: false
});

const App = () => {
    return (
        <>
            <NoSSRComponent />
        </>
    );
};

export default App;
