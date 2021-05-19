import type { AVPlaybackSource } from "expo-av/build/AV";
export default function AudioPlayer({ source }: {
    source: AVPlaybackSource;
}): JSX.Element;
export declare const SEED_DATA: {
    name: string;
    tag: string;
    description: string;
    category: string;
    layout: {};
    props: {
        source: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: string;
            formType: string;
            propType: string;
        };
    };
};
