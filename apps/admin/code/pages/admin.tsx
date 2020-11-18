import dynamic from "next/dynamic";

// By enabling dynamic import of this component, we create a separate chunk and disable SSR for it.
const App = dynamic(() => import("../components/admin"), {
    ssr: false
});

export default App;
