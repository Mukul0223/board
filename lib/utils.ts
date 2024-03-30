import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Camera } from "@/types/canvas";

const COLORS = [
  "#DC2626", // Red
  "#D97706", // Orange Shade
  "#059669", // Green Shade
  "#7C3AED", // Purple Shade
  "#DB2777", // Pink Shade
  "#933636", // Dark Red
  "#065666", // Teal
  "#4B5563", // Gray
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
