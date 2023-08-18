const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function getMediaStreem() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        console.log('There is error here:', error)
    }
}

getMediaStreem()