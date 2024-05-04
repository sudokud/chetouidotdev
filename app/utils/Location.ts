import { useLocation } from "@remix-run/react";

export function Key () {
    const location = useLocation();
    return location.key
}

export function Pathname () {
    const location = useLocation();
    return location.pathname
}