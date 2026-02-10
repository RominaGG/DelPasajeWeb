export function getYouTubeId(url) {
    if(!url) return null;

    const match = url.match(
        /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/
    );

    return match ? match[1] : null
}