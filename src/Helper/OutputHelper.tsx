import React from "react";
import {Renderable} from "./Renderable";

export function asPercent(value: number | undefined, pow: number): string {
    const decimal = (value ?? 0) / Math.pow(10, pow);

    return `${decimal}%`;
}

export function handleNewLine(text?: string): Renderable {
    if (!text)
        return "";

    return (
        <span>
            {joinElements(text.split("\n"), <br/>)}
        </span>
    );
}

export function joinElements(elements: Renderable[], separator: Renderable): Renderable[] {
    const parts: Renderable[] = [],
        pushElement = function (element: Renderable) {
            if (element === undefined)
                return;

            if (typeof element === 'object') {
                parts.push(element);
                return;
            }

            if (parts.length === 0) {
                parts.push(element.toString());
                return;
            }

            const previous = parts[parts.length - 1];
            if (typeof previous !== 'string') {
                parts.push(element.toString());
                return;
            }

            parts[parts.length - 1] = previous + element.toString();
        };

    elements.forEach((element, index) => {
        if (index > 0)
            pushElement(separator);

        pushElement(element);
    });

    return parts;
}
