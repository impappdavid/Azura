import { writable } from 'svelte/store';

// Initialize with empty string instead of null
export const selectedCharacterImage = writable('');
