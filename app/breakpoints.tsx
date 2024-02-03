interface Device {
    mobile: string,
    tablet: string,
    laptop: string,
}

export const device: Device = {
    mobile: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
}