export default function OpenCV(): Promise<any> {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://docs.opencv.org/3.4.0/opencv.js';
        script.async = true;
        script.onload = () => {
            resolve((window as any).cv);
        };
        document.body.appendChild(script);
    });
}