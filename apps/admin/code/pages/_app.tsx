import React from "react";
import "aos/dist/aos.css";
import "react-sortable-tree/style.css";
import "rc-tooltip/assets/bootstrap_white.css";
import "cropperjs/dist/cropper.css";
import "@webiny/app-page-builder/editor/components/Editor/Editor.scss";
import "@webiny/ui/List/CollapsibleList/index.css";
import "@webiny/ui/TopProgressBar/style.scss";
import "@webiny/ui/Tooltip/style.scss";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
