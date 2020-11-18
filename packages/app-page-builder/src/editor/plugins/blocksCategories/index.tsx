import React from "react";
import { PbEditorBlockCategoryPlugin } from "@webiny/app-page-builder/types";
import GeneralIcon from "./icons/round-gesture-24px.svg";
import CtaIcon from "./icons/round-notifications_active-24px.svg";
import ContentIcon from "./icons/round-view_quilt-24px.svg";
import FeaturesIcon from "./icons/round-stars-24px.svg";
import HeaderIcon from "./icons/round-home-24px.svg";
import TeamIcon from "./icons/round-group_work-24px.svg";
import TestimonialIcon from "./icons/round-record_voice_over-24px.svg";

const plugins: PbEditorBlockCategoryPlugin[] = [
    {
        type: "pb-editor-block-category",
        name: "pb-editor-block-category-cta",
        title: "Call To Action",
        categoryName: "cta",
        description: "Call to action blocks.",
        icon: <CtaIcon />
    },
    {
        type: "pb-editor-block-category",
        name: "pb-editor-block-category-content",
        title: "Content",
        categoryName: "content",
        description: "Pre-formatted content blocks.",
        icon: <ContentIcon />
    },
    {
        type: "pb-editor-block-category",
        name: "pb-editor-block-category-features",
        title: "Features",
        categoryName: "features",
        description: "Blocks for listing features and benefits.",
        icon: <FeaturesIcon />
    },
    {
        type: "pb-editor-block-category",
        name: "pb-editor-block-category-general",
        title: "General",
        categoryName: "general",
        description: "List of general purpose blocks.",
        icon: <GeneralIcon />
    },
    {
        type: "pb-editor-block-category",
        name: "pb-editor-block-category-header",
        title: "Headers",
        categoryName: "header",
        description: "Page headers.",
        icon: <HeaderIcon />
    },
    {
        type: "pb-editor-block-category",
        name: "pb-editor-block-category-team",
        title: "Team",
        categoryName: "team",
        description: "Blocks to list out your team members.",
        icon: <TeamIcon />
    },
    {
        type: "pb-editor-block-category",
        name: "pb-editor-block-category-testimonial",
        title: "Testimonial",
        categoryName: "testimonial",
        description: "Display comments and user feedback.",
        icon: <TestimonialIcon />
    }
];

export default plugins;
