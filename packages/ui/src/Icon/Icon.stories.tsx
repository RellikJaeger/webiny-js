import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, StoryReadme, StorySandbox } from "@webiny/storybook-utils/Story";
import readme from "./../Icon/README.md";

import AutoRenewIcon from "./svg/baseline-autorenew-24px.svg";
import CloudDoneIcon from "./svg/baseline-cloud_done-24px.svg";
import BaselineDeleteIcon from "./svg/baseline-delete-24px.svg";
import BaselineDoneIcon from "./svg/baseline-done-24px.svg";
import { Icon } from "./Icon";

const story = storiesOf("Components/Icon", module);

story.add(
    "usage",
    () => {
        return (
            <Story>
                <StoryReadme>{readme}</StoryReadme>
                <StorySandbox title={"A simple icon"}>
                    <div>
                        <Icon icon={<AutoRenewIcon />} />
                        &nbsp;
                        <Icon icon={<CloudDoneIcon />} />
                        &nbsp;
                        <Icon icon={<BaselineDeleteIcon />} />
                        &nbsp;
                        <Icon icon={<BaselineDoneIcon />} />
                        &nbsp;
                    </div>
                </StorySandbox>
            </Story>
        );
    },
    { info: { propTables: [Icon] } }
);
