import * as React from "react";
import nprogress from "nprogress";

export type TopProgressBarRender = {
    start: () => void;
    finish: () => void;
    nprogress: nprogress;
};

export type TopProgressBarProps = {
    /**
     * Elements that require top loading bar to be shown.
     */
    children: (params: TopProgressBarRender) => React.ReactElement;
};

export const TopProgressBar = (props: TopProgressBarProps) => {
    return props.children({
        start: nprogress.start,
        finish: nprogress.done,
        nprogress
    });
};
