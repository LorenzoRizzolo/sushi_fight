import { writable } from "svelte/store";

export let popup_name = writable("")

export function OpenPopup(name) {
    popup_name.set(name);
}
export function ClosePopup() {
    popup_name.set("");
}

export function RandomIcon() {
    return Math.floor(Math.random() * 5) + 1;
}