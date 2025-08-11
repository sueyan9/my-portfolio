import React from "react";
import { ArcTimeline } from "@/components/magicui/arc-timeline";
import {
    RocketIcon,
    CubeIcon,
    LockClosedIcon,
    GlobeIcon,
    GearIcon,
    LightningBoltIcon,
    StarIcon,
    MagicWandIcon,
} from "@radix-ui/react-icons";

const TIMELINE = [
    {
        time: "2022",
        steps: [
            { icon: <RocketIcon width={20} height={20} />, content: "Founded Visionary Tech, a cutting-edge AI development company." },
            { icon: <CubeIcon width={20} height={20} />, content: "Launched first AI-powered mobile app for personalized recommendations." },
        ],
    },
    // ... 这里补充剩余时间点数据，或者直接导入你之前写的完整数组
];

export function ArcTimelineDemo() {
    return (
        <ArcTimeline
            data={TIMELINE}
            defaultActiveStep={{ time: "2025 Q2", stepIndex: 0 }}
            arcConfig={{
                circleWidth: 4500,
                angleBetweenMinorSteps: 0.4,
                lineCountFillBetweenSteps: 8,
                boundaryPlaceholderLinesCount: 50,
            }}
        />
    );
}